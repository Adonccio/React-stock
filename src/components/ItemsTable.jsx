import { useContext } from "react"
import { StockContext } from "../contexts/StockContexts"
import { Link } from "react-router-dom"
import useStock from "../hooks/useStock"
import DeleteBtn from "./DeleteBtn"
import  EditItem  from "./EditItem";

export default function ItemsTable () {

    const {items} = useStock()

    return (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>descriçao</th>
                <th>açao</th>
            </tr>
        </thead>
        <tbody>
            {items.map((item) => (
                <tr key={item.id} id={item.id}>
                    <td>{item.id}</td>
                    <td><p>{item.name}</p></td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td>
                            <Link to={`/items/${item.id}`}  class="btn show">Ver</Link>
                            <Link to={`/items/${item.id}/update`}  class="btn edit">Editar</Link>
                        <DeleteBtn itemId={item.id} itemName ={item.name}/>
                        </td>
                </tr>
            )
            )}
        </tbody>
    </table>
        )
}