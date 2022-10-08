import { useEffect } from "react";
import { useState, useRef } from "react";
import "./Form.css";
// import ShowData from "./ShowData";


let inputObj = {
    name: "",
    age: "",
    address: "",
    dept: "",
    salary: "",
    ismarried: ""

}
/*
function ShowData(){
    let inputData = JSON.parse(localStorage.getItem("inputData")) || [];

    return (
        // name,age,address,dept,salary,ismarried
        <>
        {inputData.map((user,ind)=>{
        <tr>
            <td>{ind}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.address}</td>
            <td>{user.dept}</td>
            <td>{user.salary}</td>
            <td>{ user.ismarried ? "Married" : "Unmarried"}</td>

        </tr>
        })}
       
        </>
    );
}

*/

function Form() {

    const [formData, setformData] = useState(inputObj);
    const [DataList, SetDataList] = useState([]);
    let [showflg, setshowflg] = useState(false);

    useEffect(() => {
        setshowflg(true);
        getData();

    }, [showflg]);


    const getData = () => {
        let inputdata = JSON.parse(localStorage.getItem("inputData")) || [];
        SetDataList(inputdata);
         setshowflg(true);
    }
   

    const handleSubmit = (e) => {
        e.preventDefault();
        let { name, age, address, dept, ismarried } = formData;
        if(name=="" || age==""|| address=="" || dept==""){
           alert("Enter complete details");
        }else{
            let updatedData = JSON.parse(localStorage.getItem("inputData")) || [];
            updatedData.push(formData);
            localStorage.setItem("inputData", JSON.stringify(updatedData));
            getData();
        }  
    }

    const handleChangeInput = (e) => {
        // console.log(e.target)
        let { name, value, type, checked } = e.target;
        value = type === "checkbox" ? checked : value;
        setformData((prevData) => ({ ...prevData, [name]: value }))
    }

    let { name, age, address, dept, salary, ismarried } = formData;

    return (
        <>
            <div>
                <h1>Teacher Details Form</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Name :
                        <input onChange={handleChangeInput} type="text" value={name} name="name" />
                    </label>
                    <label htmlFor="">Age :
                        <input onChange={handleChangeInput} type="number" value={age} name="age" />
                    </label>
                    <label htmlFor="">Address :
                        <input onChange={handleChangeInput} type="text" value={address} name="address" />
                    </label>
                    <label htmlFor="">Department :
                        <select onChange={handleChangeInput} name="dept" value={dept} id="">
                            <option value="">Select</option>
                            <option value="CSE">CSE</option>
                            <option value="IT">IT</option>
                            <option value="ECE">ECE</option>
                        </select>
                    </label>
                    <label htmlFor="">Salary :
                        <input onChange={handleChangeInput} type="number" value={salary} name="salary" />
                    </label>
                    <label htmlFor="">Martial Status :
                        <input onChange={handleChangeInput} type="checkbox" value="married" checked={ismarried} name="ismarried" />
                    </label>

                    <br />
                    <input type="submit" name="submit" id="" />
                </form>
            </div>
            <hr />
            <hr />
            <div id="ShowData_div">

                <table>
                    <thead>
                        <tr>
                            <th>Sr.No.</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Department </th>
                            <th>Salary</th>
                            <th>Martial Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showflg ?
                            (
                                DataList.map((user, ind) => {
                                    return <tr>
                                        <td>{ind}</td>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>{user.address}</td>
                                        <td>{user.dept}</td>
                                        <td>{user.salary}</td>
                                        <td>{user.ismarried ? "Married" : "Unmarried"}</td>

                                    </tr>
                                })
                            ) : ""}
                    </tbody>
                </table>


            </div>
        </>
    );
}

export default Form;