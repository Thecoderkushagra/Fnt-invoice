import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Menubar = () => {
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useContext(AppContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
            <div className="container py-2">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <Logo />
                    <span
                        className="fw-bolder fs-4 ms-3"
                        style={{ letterSpacing: "-0.5px", color: "#5d00dfc3" }}
                    >
                        MakeMyInvoice
                    </span>
                </Link>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link fw-medium" to="/">Home</Link>
                        </li>

                        {isAuthenticated && (
                          <>
                            <li className="nav-item">
                                <Link className="nav-link fw-medium" to="/dashboard">
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-medium" to="/generate">
                                    Generate
                                </Link>
                            </li>
                          </>
                        )}

                        <li className="nav-item">
                            {isAuthenticated ? (
                                <button 
                                    className="btn btn-danger rounded-pill px-4"
                                    onClick={logout}
                                >
                                    Logout
                                </button>
                            ) : (
                                <button 
                                    className="btn btn-primary rounded-pill px-4"
                                    style={{background: "#5d00dfc3", borderColor: "#5d00dfc3"}} 
                                    onClick={() => navigate("/login")}
                                >
                                    SignUp/Login
                                </button>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menubar;
