import ItemForm from "../components/ItemForm";
import { useLocation, useParams } from "react-router-dom"
import useStock from "../hooks/useStock"



export default function UpdateItems () {

    const { id } = useParams()
    const { findItem } = useStock()
    const localItem = findItem(id)
    console.log(localItem.id)
    return (<>
        <h1>Editar</h1>
        <ItemForm ItemParaAtualizar={localItem}/>
        </>
    )
}