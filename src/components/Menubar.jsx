import { Link } from "react-router-dom";
import Logo from "./Logo";

const Menubar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
            <div className="container py-2">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <Logo />
                    <span
                        className="fw-bolder fs-4 ms-3"
                        style={{ letterSpacing: "-0.5px", color: "#5d00dfc3" }}>MakeMyInvoice
                    </span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expand="false" aria-lable="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collpse navbar-collpse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-item-center">
                        <li className="nav-items">
                            <Link className="nav-link fw-medium" to="/">
                            Home</Link>
                        </li>
                        <li className="nav-items">
                            <Link className="nav-link fw-medium" to="/dashboard">
                            Dashboard</Link>
                        </li>
                        <li className="nav-items">
                            <button className="nav-link fw-medium">Generate</button>
                        </li>
                        <li className="nav-items">
                            <button className="btn btn-primary rounded-pill px-4" style={{background: "#5d00dfc3", borderColor: "#5d00dfc3"}}>SignUp/Login</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menubar;