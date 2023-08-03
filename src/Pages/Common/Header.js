import { Link, Outlet } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="#">Hidden brand</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="cart">Cart</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="login">Login</Link>
                    </li>
                </ul>
                <span>
                <Icon.Cart4 className="cursor-pointer" />
                <span className='badge badge-warning' id='lblCartCount'> 5 </span>
                </span>
                </div>
            </div>
            </nav>
    )
}
export default Header;