import '../Navbar.css'
import { useNavigate, Link } from 'react-router-dom';

export const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-logo">
            </div>
            <ul className="navbar-links">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/checkout">Cart</Link></li>
            </ul>
        </nav>
    )
}