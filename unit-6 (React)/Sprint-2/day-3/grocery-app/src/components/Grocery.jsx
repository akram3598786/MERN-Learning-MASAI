import "./Common.css";
import React from "react";
import GroceryInput from "./GroceryInput";
import ShowList from "./GroceryList";
import { v4 as uuid } from "uuid";

export default function Grocery() {
    const [Glist, setGlist] = React.useState([]);

    const handleInput = (Gname, price) => {
        const obj = {
            name: Gname,
            price: price,
            id: uuid()
        }
        setGlist([...Glist, obj]);
    }

    const handleDelete=(id)=>{
      const updatedList = Glist.filter((item)=>id!=item.id);
      setGlist(updatedList);
    }

    return (
        <div>
            <GroceryInput handleInput={handleInput} />
            <h1>Grocery List</h1>
        <div id="Glist">
        <table>
            <thead>
                <tr className="items">
                    <th>Item</th>
                    <th>Price</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {Glist.map((item) =>
                <ShowList
                    key={item.id}
                    {...item}
                    handleDelete={handleDelete}
                />
            )}             
                </tbody>   
        </table> 
        </div>
        </div>
    );




}
