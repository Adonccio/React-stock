import { Outlet, Link, useLocation } from "react-router-dom";

export default function ItemsLayout () {
    const { pathname } = useLocation()
    return (<>
    <div className="tabs">
        <Link to="/items/new" className={`tab ${pathname === '/items/new' ? 'active' : ""}`}>Novo Item</Link>
        <Link to='/items' className={`tab ${pathname === '/items' ? 'active' : ""}`}>Todos Itens</Link>
    </div>
        <Outlet/>
        </>
    )
}