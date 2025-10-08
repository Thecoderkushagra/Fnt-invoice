import { useContext, useState } from "react";
import { Lock, User, Mail, CircleCheckIcon, Loader } from "lucide-react";
import { AppContext } from "../context/AppContext";
import { SignupApi, varifyOtpApi } from "../service/invoiceService";
import toast from "react-hot-toast";

const Signup = () => {
    const { setHaveAcc, baseURL } = useContext(AppContext);

    const [loading, setLoading] = useState(false);
    const [otpRecived, setOtpRecived] = useState(false);
    const [signupData, setSignupData] = useState({supUser: "",supEmail: "",supPassword: "",});
    const [otpData, setOtpData] = useState({otpVarify:""});

    const handleAcc = () => setHaveAcc(true);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setSignupData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
        setOtpData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSignup = async () => {
        try {
            setLoading(true);
            const payload = {
                userName: signupData.supUser,
                email: signupData.supEmail,
                password: signupData.supPassword,
            };

            const response = await SignupApi(baseURL, payload);

            if (response.status === 200) {
                toast.success("OTP Send success", response.data);
                setOtpRecived(true); 
            } else {
                toast.error("Unexpected response:", response);
            }
        } catch (error) {
            toast.error("Unable to send OTP", error);
        } finally {
            setLoading(false);
        }
    };

    const handleOtp = async() => {
        try{
            setLoading(true);
            const payload = new FormData();
            payload.append("Name",signupData.supUser);
            payload.append("OTP",otpData.otpVarify);
            
            const response = await varifyOtpApi(baseURL, payload);
            console.log(response);

            if (response.status === 200) {
                handleAcc();
                toast.success("SignUp successfully", response.data);
            } else {
                toast.error("Unexpected response:", response);
            }
        } catch (error) {
            toast.error("SignUp Fail !!", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {otpRecived ? (
                <>
                    <div className="mb-4">
                        <label htmlFor="otpVarify" className="d-flex gap-2 mt-2">
                            <CircleCheckIcon /> Verify OTP
                        </label>
                        <input
                            type="number" id="otpVarify"
                            className="form-control mt-2 mb-2" placeholder="Enter OTP here"
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        className="btn btn-primary mt-3 mb-2" type="button"
                        style={{ background: "#5d00dfc3", borderColor: "#5d00dfc3", width: "100%", }}
                        onClick={handleOtp}
                        disabled={loading}
                    >
                        Verify
                    </button>
                </>
            ) : (
                <div className="container mt-4">
                    <div className="mb-4">
                        <label htmlFor="supUser" className="d-flex gap-2 mt-2">
                            <User /> Username
                        </label>
                        <input
                            type="text" id="supUser"
                            className="form-control mt-2 mb-2" placeholder="Enter your username"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="supEmail" className="d-flex gap-2 mt-2">
                            <Mail /> Email
                        </label>
                        <input
                            type="email" id="supEmail"
                            className="form-control mt-2 mb-2" placeholder="Enter your Email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="supPassword" className="d-flex gap-2 mt-2">
                            <Lock /> Password
                        </label>
                        <input
                            type="password" id="supPassword"
                            className="form-control mt-2 mb-2" placeholder="Enter your password"
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        className="btn btn-primary mt-3 mb-2" type="button"
                        onClick={handleSignup}
                        style={{ background: "#5d00dfc3", borderColor: "#5d00dfc3", width: "100%", }}
                        disabled={loading}
                    >
                        {loading && <Loader className="me-2 spin-animation" />}
                        {loading ? "Sending OTP..." : "SignUp"}
                    </button>

                    <div className="d-flex justify-content-center align-items-center my-2">
                        <p className="text-muted mb-0 me-2">Already have an account?</p>
                        <button
                            className="nav-link fw-medium p-0 border-0 bg-transparent"
                            style={{ color: "#667eea" }}
                            onClick={handleAcc}
                        >
                            Login
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Signup;
