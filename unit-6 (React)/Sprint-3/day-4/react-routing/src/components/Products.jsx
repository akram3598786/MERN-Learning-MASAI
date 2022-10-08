import { Link } from "react-router-dom";
import React from "react";
import styled from "@emotion/styled";
import { Spinner } from '@chakra-ui/react';
import "./Style.css";

let ProductPic = styled.img`
  width : 200px;
  height : 200px;
  border-radius : 505;
`;

export default function Products() {

    const [loading, setloading] = React.useState(false);
    const [error, seterror] = React.useState(false);
    const [ProdList, setProdlist] = React.useState([]);

    React.useEffect(() => {
        setloading(true);
        getData();
    }, []);

    const getData = () => {

        fetch("http://localhost:5000/Products")
            .then((res) => res.json())
            .then((res) => setProdlist(res))
            .catch((err) => seterror(true))
            .finally(() => setloading(false));
    }

    return (
        <div id="ProductList">
            <h1 className="bold" style={{ "fontSize": "30px" }}>Products List</h1>
            <hr />
            <br />
            {loading
                ? <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl' />
                : error ? (<h1 style={{ "color": "red", "textAlign": "center" }}>Error occured : Something went wrong</h1>)
                    :
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ProdList.map((prod) => {

                                return (
                                    //    <div key={prod.id}>

                                    <tr key={prod.id}>
                                        <td>{prod.name}</td>
                                        <td>$ {prod.price}</td>
                                        <td style={{"color":"blueviolet"}}><Link to={`${prod.id}`}>See Details..</Link></td>
                                    </tr>)
                            })}
                        </tbody>
                    </table>
            }
        </div>

    )

}