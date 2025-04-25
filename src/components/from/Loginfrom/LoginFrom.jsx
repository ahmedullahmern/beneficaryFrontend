import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginFrom = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // const handleLogin = (e) => {
        //     //     e.preventDefault()
        //     //     setIsLoading(true)
        //    const obj = {
        // email: e.target.email.value,
        //     password: e.target.password.value,
        // };
        //     //     axios.post(AppRoutes.login, obj)
        //     //         .then((res) => {
        //     //             setIsLoading(false)
        //     //             // console.log("res in login==>", res?.data?.accessToken)
        //     //             Cookies.set('accessToken', res?.data?.accessToken)
        //     //             setUser(res?.data?.user)
        //     //             const token = Cookies.get('accessToken');
        //     //             console.log("Token==>", Cookies.get("token"))
        //     //             console.log("accessToken==>", token)
        //     //             console.log("URL==>", AppRoutes.getMyInfo)
        //     //             Swal.fire({
        //     //                 title: 'Login Successfully!',
        //     //                 icon: 'success',
        //     //             })
        //     //         }).catch((err) => {
        //     //             setIsLoading(false)
        //     //             console.log("err in the login=>", err)
        //     //             // console.log("err in the login=>", err.response.data.message)
        //     //             const errorMessage = err.response ? err.response.data.message : err.message;
        //     //             Swal.fire({
        //     //                 title: 'SomThing Went Wrong!',
        //     //                 text: errorMessage,
        //     //                 icon: 'error',
        //     //             })
        //     //         })
        //     // }
        const obj = {
            email: e.target.email.value,
            password: e.target.password.value,
        };

        console.log("Signup Data: ", obj); // yahan axios.post lagao

        // Simulate loading
        setTimeout(() => {
            setIsLoading(false);
            alert("Signup successful (dummy response)");
        }, 2000);
    };

    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">
                    SIGN UP
                </h2>
                <form className="space-y-6">

                    {/* Email Address */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            required
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            required
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Login Redirect */}
                    <div className="text-sm text-center text-gray-600">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600 hover:underline">
                            Login
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                    >
                        {isLoading ? "Signing up..." : "Sign Up"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginFrom;
