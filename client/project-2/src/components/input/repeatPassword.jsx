import React, { Fragment, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const RepeatPassWord = ({ value, onChange }) => {
    const [isShowPassWord, setIsShowPassWord] = useState(false);

    const toggleEye = () => {
        setIsShowPassWord(!isShowPassWord);
    };

    return (
        <Fragment>
            <div className="relative">
                <p>Repeat Password <span className = "text-red-600">*</span></p>
                <input
                    placeholder="Repeat your password"
                    type={isShowPassWord ? "text" : "password"}
                    value={value}
                    onChange={onChange}
                    className="focus:outline-gray-400 border border-gray-400 w-full h-10 p-3 rounded-lg"
                />
                {isShowPassWord ? (
                    <FaRegEyeSlash
                        size={22}
                        className="text-gray-500 cursor-pointer absolute right-3 bottom-[1px] -translate-y-1/2"
                        onClick={toggleEye}
                    />
                ) : (
                    <FaRegEye
                        size={22}
                        className="text-gray-500 cursor-pointer absolute right-3 bottom-[1px] -translate-y-1/2"
                        onClick={toggleEye}
                    />
                )}
            </div>
        </Fragment>
    );
};

export default RepeatPassWord;