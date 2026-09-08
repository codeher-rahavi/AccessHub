import React, { Fragment } from "react";
import pro2_2 from "../../images/imgh.jpg"
import PassWord from "../../components/input/password";


const SignIn = () =>{
    return (
        <Fragment>
            <div className="relative h-screen w-screen ">
                <img 
                src={pro2_2} 
                alt="bgimg" 
                className="object-cover h-screen w-screen fixed inset-0 absolute z-0"
                />
                <div className=" z-10 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border border-2 border-gray-200 p-7 rounded-2xl shadow-2xl bg-gray-50">
                    <div className="flex flex-col gap-4 w-[450px]">
                        <p className="text-center text-3xl font-semibold">Welcome Back !!</p>
                         <a className="inline-block rounded-sm border border-gray-400  h-12 w-[450px] text-lg font-medium transition text-center p-2 mt-3 focus:outline-2 focus:outline-blue-600" href="#">
                            <img src="google.svg" alt="google-logo" className="w-7 inline mr-2" />
                            Continue with Google
                        </a>  
                        <div className="flex gap-4 items-center">
                            <div className="h-px bg-gray-300 flex-1 "></div>
                            <span className="text-gray-300">OR</span>
                            <div className="h-px bg-gray-300 flex-1"></div>
                        </div>
                        <div>
                            <p className="text-lg mb-1">Email</p>
                            <input type="text" placeholder="Enter your email"
                            className="focus:outline-gray-400 border border-gray-400 w-full h-10 p-3 rounded-lg"  />
                        </div>
                        <PassWord/>
                        <a className="inline-block rounded-lg border border-current px-8 py-3 text-[18px] text-white bg-green-700 transition text-center focus:outline-2 focus:outline-green-900" href="#">
                        Sign  In
                        </a>
                        <a href="#" className="text-gray-500 mb-2">Forget Password?</a>
                        <div className="text-center text-lg ">
                            Don't have an account? <span className="text-blue-700 underline"><a href="/SignUp">Create an account</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SignIn;