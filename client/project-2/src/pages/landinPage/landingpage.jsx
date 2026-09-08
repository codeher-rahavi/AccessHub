import React, { Fragment } from "react";

const LandingPage = () => {
    return (
        <Fragment>
            <div >
                <img src="" alt="" />
                <div className="flex justify-between">
                    <div className="flex">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Features</a>
                        <a href="#">Pricing</a>
                    </div>
                    <div className="">
                        <a href="/signUp" className="">Login</a>
                        <a href="/signIn" className="text-white bg-blue-700 px-5 py-2 rounded-3xl">Sign Up</a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default LandingPage;