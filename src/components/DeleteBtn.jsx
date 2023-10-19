import { useNavigate } from "react-router-dom"
import useStock from "../hooks/useStock"

export default function DeleteBtn ({itemName, itemId}) {

    const { items, findItem, deleteItem } = useStock()
    const navigate  = useNavigate()
    
        const handleDelete = () => {
            if(confirm(`Deseja realmente excluir ${itemName}?`)) {
                deleteItem(itemId)
                navigate('/items')
            }
        }
    return (

        <button class="btn delete" onClick={handleDelete}>
            Excluir
        </button>
    )
}