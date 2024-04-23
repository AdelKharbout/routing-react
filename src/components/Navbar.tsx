import {NavLink} from 'react-router-dom';
import '../assets/main-navigation.css'

export default function Navbar() {
    return <header>
        <nav
            className={"navbar"}>
            <ul>
                <li>
                    <NavLink
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/products"
                    >
                        Products
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
}
