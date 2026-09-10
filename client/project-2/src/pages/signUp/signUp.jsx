import React, { Fragment, useState } from "react";
import PassWord from "../../components/input/password";
import pro2 from "../../images/pro2.jpg";
import RepeatPassWord from "../../components/input/repeatPassword";

const SignUp = () => {
    // State for inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    // State for errors and validations
    const [emailError, setEmailError] = useState("");
    const [passwordStrength, setPasswordStrength] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // Email Validator
    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        
        // Basic Regex for Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
            setEmailError("Email is required");
        } else if (!emailRegex.test(value)) {
            setEmailError("Please enter a valid email address");
        } else {
            setEmailError("");
        }
    };

    // Password Strength Checker
    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        
        let strength = 0;
        if (value.length >= 8) strength += 1; // Length check
        if (value.match(/[A-Z]/)) strength += 1; // Uppercase check
        if (value.match(/[0-9]/)) strength += 1; // Number check
        if (value.match(/[^A-Za-z0-9]/)) strength += 1; // Special character check

        if (value.length === 0) {
            setPasswordStrength("");
        } else if (strength <= 1) {
            setPasswordStrength("Weak");
        } else if (strength === 2 || strength === 3) {
            setPasswordStrength("Medium");
        } else if (strength === 4) {
            setPasswordStrength("Strong");
        }
    };

    // Form Submission Handler
    const handleSignUp = (e) => {
        e.preventDefault(); // Prevent default link/form behavior

        // Check if passwords match
        if (password !== repeatPassword) {
            setPasswordError("Passwords do not match");
            return;
        } else {
            setPasswordError("");
        }

        // Final check before submission
        if (!emailError && email && passwordStrength !== "Weak" && password === repeatPassword) {
            console.log("Form Submitted Successfully!");
            console.log("Email:", email);
            console.log("Password:", password);
            // TODO: Add your API call to register the user here
            
        } else if (passwordStrength === "Weak") {
            setPasswordError("Please choose a stronger password");
        }
    };

    // Helper function for password strength text color
    const getStrengthColor = () => {
        if (passwordStrength === "Weak") return "text-red-500";
        if (passwordStrength === "Medium") return "text-yellow-500";
        if (passwordStrength === "Strong") return "text-green-600";
        return "text-gray-400";
    };

    return (
        <Fragment>
            <div className="relative h-screen w-screen">
                <img src={pro2} alt="bgimg" className="fixed inset-0 w-screen h-screen object-cover z-0"/>
                <div className="z-10 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border border-2 border-gray-200 p-7 rounded-2xl shadow-2xl bg-gray-50">
                    <div className="flex flex-col gap-4 w-[450px]">
                        <p className="text-center text-3xl font-semibold">Welcome !!</p>
                        
                        <a className="inline-block rounded-sm border border-gray-400 h-12 w-[450px] text-lg font-medium transition text-center p-2 mt-3 focus:outline-2 focus:outline-blue-600 hover:bg-gray-100" href="#">
                            <img src="google.svg" alt="google-logo" className="w-7 inline mr-2" />
                            Continue with Google
                        </a>

                        <div className="flex gap-4 items-center">
                            <div className="h-px bg-gray-300 flex-1 "></div>
                            <span className="text-gray-300">OR</span>
                            <div className="h-px bg-gray-300 flex-1"></div>
                        </div>

                        {/* Email Input */}
                        <div>
                            <p className="text-lg mb-1">Email <span className = "text-red-600">*</span></p>
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleEmailChange}
                                className={`focus:outline-gray-400 border w-full h-10 p-3 rounded-lg ${emailError ? 'border-red-500 focus:outline-red-500' : 'border-gray-400'}`}  
                            />
                            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                        </div>
                        
                        {/* Password Components - Make sure to pass value and onChange to your custom components */}
                        <div>
                            <PassWord 
                                value={password} 
                                onChange={handlePasswordChange} 
                            />
                            {passwordStrength && (
                                <p className={`text-sm mt-1 font-medium ${getStrengthColor()}`}>
                                    Password Strength: {passwordStrength}
                                </p>
                            )}
                        </div>

                        <div>
                            <RepeatPassWord 
                                value={repeatPassword} 
                                onChange={(e) => setRepeatPassword(e.target.value)} 
                            />
                            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                        </div>
                        
                        {/* Changed from <a> to <button> for better semantics and onClick handling */}
                        <button 
                            onClick={handleSignUp}
                            className="inline-block rounded-lg border border-current px-8 py-3 text-[18px] text-white bg-green-700 transition text-center focus:outline-2 focus:outline-green-900 hover:bg-green-800" 
                        >
                            Sign Up
                        </button>
                        
                        <a href="#" className="text-gray-500 mb-2">Forget Password?</a>
                       
                        <div className="text-center text-lg ">
                            Already have an account? <span className="text-blue-700 underline"><a href="/SignIn">Sign In</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SignUp;