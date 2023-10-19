import { useLocation, useParams } from "react-router-dom"
import useStock from "../hooks/useStock"
import DeleteBtn from "../components/DeleteBtn"


export default function ShowItems () {
    const { id } = useParams()
    const { item, findItem } = useStock()
    const localItem = findItem(id)
    // console.log(localItem.id)
    return (<>
    <h1>{localItem.name}</h1>
        <h2>R${localItem.price}</h2>
        <p>{localItem.description}</p>
        <p>Total: {localItem.quantity}</p>
        <DeleteBtn class='btn delete' itemId={localItem.id}/>
        </>
    )
}