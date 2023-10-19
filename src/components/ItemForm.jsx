import { useState } from "react"
import StockItem from "../entities/StockItems"
import useStock from "../hooks/useStock"
import '../styles/slyle.css'



export default function ItemForm ({ ItemParaAtualizar}) {
    const defaultItem = {
        name: "",
        price: 0,
        quantity: 0,
        description: "",
        category: ""
    }

    const [item, setItem] = useState(ItemParaAtualizar? ItemParaAtualizar : defaultItem)
    const { addItems } = useStock()
    const { updateItem } = useStock()

    const handleChange = (ev) => 
        setItem(
            state =>  {return {...state, [ev.target.name]: ev.target.value}}
        )


    const handleSubmit = (ev) => {
        ev.preventDefault() 
        try {
            if (ItemParaAtualizar) {
                updateItem(ItemParaAtualizar.id, item)
                alert('Produto Atualizado')
            } else {
            const product = new StockItem(item)
            addItems(product)
        setItem(defaultItem)
            }
        } catch (error) {
            console.log(error.message)
            setItem(defaultItem)
        }
    }

    return (
        <>
        <form action="" onSubmit={handleSubmit}>
            
            <label htmlFor="name">Nome do Produto</label>
            <input type="text" id="name" name="name" value={item.name} onChange={handleChange}/>
            <label htmlFor="quantity">Quantidade de Produtos</label>
            <input type="number" id="quantity" name="quantity" value={item.quantity} onChange={handleChange}/>
            <label htmlFor="price">Preço do Produto</label>
            <input type="number" id="price" name ="price" value={item.price} onChange={handleChange}/>
            <label htmlFor="description">Descrição</label>
            <textarea name="description" id="description" cols="30" value={item.description} rows="10" onChange={handleChange}>Descriçao</textarea>
            <button class='btn add'>Adicionar</button>
        </form>
        </>
    )
}