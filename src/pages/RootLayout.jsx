import { Link, Outlet } from "react-router-dom"

export default function RootLayout () {
    return (
        <>
        <header>
            <Link to="/" className="logo">ReactStock</Link>
            <nav>
                <Link to="/">Início</Link>
                <Link to="/items">Itens</Link>
            </nav>
        </header>
        <div>
            <Outlet />
        </div>
        <footer>
            Made by Gustavo Adoncio using React Router DOM
        </footer>
        </>
    )
}