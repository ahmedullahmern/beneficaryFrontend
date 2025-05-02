import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../constant/constant";
import { toast } from 'react-toastify';
import ButtonLoader from "../../ButtonLoader/ButtonLoader";
import Cookies from 'js-cookie';


const RegisterForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [cnic, setCnic] = useState('');
    const [phone, setPhone] = useState('');

    const nav = useNavigate()
    const buttonLoader = ButtonLoader();

    // CNIC formatting function

    const handleCnicChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Only digits
        if (value.length > 5 && value.length <= 12) {
            value = `${value.slice(0, 5)}-${value.slice(5)}`;
        } else if (value.length > 12) {
            value = `${value.slice(0, 5)}-${value.slice(5, 12)}-${value.slice(12, 13)}`;
        }
        setCnic(value);
    };

    // Phone formatting function
    const handlePhoneChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Only digits
        if (value.length > 4) {
            value = `${value.slice(0, 4)}-${value.slice(4, 11)}`;
        }
        setPhone(value);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formattedCnic = cnic.replace(/-/g, ''); // remove dashes
        const formattedPhone = phone.replace(/-/g, ''); // optional: clean phone too

        const obj = {
            name: e.target.name.value,
            email: e.target.email.value,
            cnic: formattedCnic, // clean CNIC
            phone: formattedPhone, // clean phone (optional)
            address: e.target.address.value,
            purpose: e.target.purpose.value,
        };
        console.log("obj=>", obj)

        if (!obj.name || !obj.email || !obj.cnic || !obj.phone || !obj.address || !obj.purpose) {
            setIsLoading(false);
            toast.warning('All fields are required.');
            return;
        }

        axios.post(AppRoutes.register, obj, {
            headers: { Authorization: `Bearer ${Cookies.get("token")}` }
        })
            .then((res) => {
                setIsLoading(false);
                console.log("Registration Success:", res?.data?.data?.token);
                toast.success("Registration Successfully");
                const seekerId = res?.data?.data?.newUser?._id;
                nav(`/seekerDownPage/${seekerId}`)
            })
            .catch((err) => {
                setIsLoading(false);
                console.log("Error in Registration:", err);
                const errorMessage = err.response ? err.response.data.msg : err.message;
                toast.error(errorMessage);
            });
    };


    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
            <div className="bg-white m-10 p-10 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Seeker Register
                </h2>
                <form onSubmit={handleRegister} className="space-y-6">
                    {/* Full Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your full name"
                        />
                    </div>

                    {/* Email Address */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* CNIC and Phone in One Row */}
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* CNIC */}
                        <div className="flex-1">
                            <label htmlFor="cnic" className="block text-sm font-medium text-gray-700">
                                CNIC
                            </label>
                            <input
                                type="text"
                                id="cnic"
                                name="cnic"
                                value={cnic}
                                onChange={handleCnicChange}
                                maxLength="15"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                placeholder="xxxxx-xxxxxxx-x"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="flex-1">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={phone}
                                onChange={handlePhoneChange}
                                maxLength="12"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                placeholder="0310-xxxxxxx"
                            />
                        </div>
                    </div>

                    {/* Address */}
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your address"
                        />
                    </div>

                    {/* Purpose Dropdown */}
                    <div>
                        <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
                            Purpose
                        </label>
                        <select
                            id="purpose"
                            name="purpose"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Purpose</option>
                            <option value="Medical">Medical</option>
                            <option value="Education">Education</option>
                            <option value="Meat">Meat</option>
                            <option value="Food">Food</option>
                            <option value="Shelter">Shelter</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full hover:cursor-pointer bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 focus:ring-2 focus:ring-green-500"
                    >
                        {isLoading ? buttonLoader : "Sign Up"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
