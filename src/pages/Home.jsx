import { Link } from "react-router-dom"
import useStock from "../hooks/useStock"
import '../styles/slyle.css'



export default function Home () {
const { items } = useStock()
const diversity = items.length
const total = items.reduce((sum, item) => sum + +item.quantity, 0)

    return (
        <main>
            <h1>Bem-Vindo!</h1>
            <section>
                
                <div id="box">
                    <h2>Variedade de Produtos</h2>
                    <p id="result">{diversity}</p>
                </div>
                <div id="box">
                    <h2>Total de Produtos</h2>
                    <p id="result">{total}</p>
                </div>
            </section>
            <h2 >
                <Link id="link" to="/items">Ver todos os itens</Link>
            </h2>
        </main>
    )
}