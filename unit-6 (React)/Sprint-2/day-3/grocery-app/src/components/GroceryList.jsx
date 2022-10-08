

function ShowList({ name, price, id, handleDelete }) {
    return (
        <tr className="items"> 
            <td>{name}</td>
            <td>{price}</td>
            <td><button onClick={() => handleDelete(id)}>Delete</button></td>
        </tr>

    );

}
export default ShowList;