import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import pro2_2 from "../../images/imgh.jpg";
import PassWord from "../../components/input/password";

const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const cleanEmail = email.trim().toLowerCase();

            const response = await fetch("http://localhost:8000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: cleanEmail, password: passWord }),
            });

            const data = await response.json();
            console.log("Login Response:", data);

            if (!response.ok || !data.success) {
                alert(data.message || "Invalid Email or Password");
                return;
            }

            if (data.token) {
                const authenticatedUser = {
                    id: data.user.id,
                    email: data.user.email,
                    role: data.user.role,
                    token: data.token,
                };
                sessionStorage.setItem("user", JSON.stringify(authenticatedUser));
                console.log("Login successful");
                navigate("/landingpage");
            }
        } catch (error) {
            console.error("Login Error:", error);
            alert("Unable to connect to the server. Please make sure the backend is running.");
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPasswordClick = async (e) => {
        e.preventDefault();
        const emailInput = prompt("Please enter your registered email:");
        if (!emailInput) return;

        try {
            const response = await fetch("http://localhost:8000/api/forgotPassword", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: emailInput.trim().toLowerCase() }),
            });
            const data = await response.json();

            if (response.ok) {
                alert("Success! If that email exists, a reset link has been sent.");
            } else {
                alert(data.message || "Something went wrong.");
            }
        } catch (error) {
            console.error("Forgot Password Error:", error);
            alert("Server connection failed.");
        }
    };

    return (
        <Fragment>
            <div className="relative h-screen w-screen">
                <img src={pro2_2} alt="bgimg" className="object-cover h-screen w-screen fixed inset-0 z-0" />
                
                <div className="z-10 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border border-2 border-gray-200 p-7 rounded-2xl shadow-2xl bg-gray-50">
                    <form onSubmit={handleLogin} className="flex flex-col gap-4 w-[450px]">
                        <p className="text-center text-3xl font-semibold">Welcome Back !!</p>
                        
                        <a className="inline-block rounded-sm border border-gray-400 h-12 w-[450px] text-lg font-medium transition text-center p-2 mt-3 focus:outline-2 focus:outline-blue-600" href="#">
                            <img src="google.svg" alt="google-logo" className="w-7 inline mr-2" />
                            Continue with Google
                        </a>
                        
                        <div className="flex gap-4 items-center">
                            <div className="h-px bg-gray-300 flex-1"></div>
                            <span className="text-gray-300">OR</span>
                            <div className="h-px bg-gray-300 flex-1"></div>
                        </div>

                        <div>
                            <p className="text-lg mb-1">Email</p>
                            <input type="text" placeholder="Enter your email" className="focus:outline-gray-400 border border-gray-400 w-full h-10 p-3 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <PassWord value={passWord} onChange={(e) => setPassWord(e.target.value)} />

                        <button type="submit" disabled={loading} className={`inline-block rounded-lg border border-current px-8 py-3 text-[18px] text-white transition text-center focus:outline-2 focus:outline-green-900 ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-green-700 hover:bg-green-800 cursor-pointer"}`}>
                            {loading ? "Signing In..." : "Sign In"}
                        </button>

                        <a href="#" onClick={handleForgotPasswordClick} className="text-gray-500 mb-2">Forget Password?</a>

                        <div className="text-center text-lg">
                            Don't have an account? <span className="text-blue-700 underline cursor-pointer" onClick={() => navigate("/SignUp")}>Create an account</span>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default SignIn;