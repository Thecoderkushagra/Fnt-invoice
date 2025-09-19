import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import LoginPage from "../components/Login";
import Signup from "../components/Signup";

const LogPage = () => {
    const { haveAcc } = useContext(AppContext);

    return (
        <div className="d-flex align-items-center justify-content-center text-center position-relative"
            style={{
                minHeight: '90vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                
            }}>
            <div className="position-absolute w-100 h-100" style={{ overflow: 'hidden', zIndex: 0, pointerEvents: 'none'}}>
                <div className="position-absolute rounded-circle"
                    style={{
                        width: '300px',
                        height: '300px',
                        background: 'rgba(255,255,255,0.1)',
                        top: '150px',
                        right: '150px',
                        animation: 'float 6s ease-in-out infinite'
                    }}></div>
                <div className="position-absolute rounded-circle"
                    style={{
                        width: '250px',
                        height: '250px',
                        background: 'rgba(255,255,255,0.05)',
                        bottom: '100px',
                        left: '100px',
                        animation: 'float 8s ease-in-out infinite reverse'
                    }}></div>
                <div className="position-absolute rounded-circle"
                    style={{
                        width: '180px',
                        height: '180px',
                        background: 'rgba(255,255,255,0.05)',
                        top: '70px',
                        left: '300px',
                        animation: 'float 8s ease-in-out infinite reverse'
                    }}></div>
            </div>
            <div className="form-control" style={{ background: '#fff', width: "350px" }}>
                <h3 className="mt-2">- MakeMyInvoice -</h3>
                {haveAcc ? <LoginPage /> : <Signup />}
            </div>
        </div>
    )
}

export default LogPage;