import { useParams } from "react-router-dom";
import { StockContext } from "../contexts/StockContexts";

export default function EditItem () {
    const { id } = useParams()
    const findItem = StockContext()
    const item = findItem(id)
    return <>

    <h1>Editar {item.id}</h1>
    </>
}