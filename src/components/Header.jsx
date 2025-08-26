import { NavLink } from "react-router-dom";
import "../styles/Navbar.css"

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">PixelMart</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" style={{ outline: "none", boxShadow: "none", border: "none" }}>
                        <span class="material-symbols-outlined menu-icon">menu</span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">PixelMart</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{ outline: "none", boxShadow: "none", border: "none" }}></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link active" onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    {/* <NavLink to='/products' className="nav-link active">Products</NavLink> */}
                                    <a href="#product-container" className="nav-link">Products</a>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/order' className="nav-link">Orders</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/cart' className="nav-link">Cart</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu mt-3 mt-md-0 mt-lg-3">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;