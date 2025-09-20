import { useContext, useState } from "react";
import { Lock, User, Loader } from "lucide-react";
import { AppContext } from "../context/AppContext";
import { loginUserApi } from "../service/invoiceService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginPage = () => {
    const navigate = useNavigate();
    const { setHaveAcc, baseURL, login} = useContext(AppContext);

    const [loading, setLoading] = useState(false);
    const [loginData, setLoginData] = useState({ loginUser: "", loginPassword: "" });

    const handleAcc = () => setHaveAcc(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleUserLogin = async () => {
        try {
            setLoading(true);
            const payload = {
                userName: loginData.loginUser,
                password: loginData.loginPassword
            };

            const response = await loginUserApi(baseURL, payload);

            if (response.status === 200) {
                login(response.data.token, payload.userName);
                toast.success("Login Successful!!");
                navigate("/dashboard");
            } else {
                toast.error(`Unexpected response: ${response.status}`);
            }
        } catch (error) {
            console.error(error);
            toast.error(`Unable to send OTP: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-4">
            <div className="mb-4">
                <label htmlFor="loginUser" className="d-flex gap-2 mt-2">
                    <User /> Username
                </label>
                <input
                    type="text"
                    id="loginUser"
                    className="form-control mt-2 mb-2"
                    placeholder="Enter your username"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="loginPassword" className="d-flex gap-2 mt-2">
                    <Lock /> Password
                </label>
                <input
                    type="password"
                    id="loginPassword"
                    className="form-control mt-2 mb-2"
                    placeholder="Enter your password"
                    onChange={handleChange}
                />
            </div>
            <button
                className="btn btn-primary mt-3 mb-2"
                type="button"
                onClick={handleUserLogin}
                style={{ cursor: "pointer", background: "#5d00dfc3", borderColor: "#5d00dfc3", width: "100%" }}
            >
                {loading && <Loader className="me-2 spin-animation" />}
                {loading ? "Logging..." : "Login"}
            </button>

            <div className="d-flex justify-content-center align-items-center my-2">
                <p className="text-muted mb-0 me-2">Don't have an account?</p>
                <button
                    onClick={handleAcc}
                    type="button"
                    className="btn btn-primary fw-medium p-0 border-0 bg-transparent"
                    style={{ color: "#667eea", cursor: "pointer" }}
                >
                    SignUp
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
