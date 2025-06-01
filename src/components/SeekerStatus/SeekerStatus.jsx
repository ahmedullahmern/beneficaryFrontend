import axios from "axios";
import { useState } from "react"
import Cookies from 'js-cookie';
import { toast } from "react-toastify";
import PageLoader from '../Loader/PageLoader.jsx'

function SeekerStatusComp() {
    const [cnic, setCnic] = useState("");
    const [seeker, setSeeker] = useState(null)
    const [isLoader, setIsLoader] = useState(false)

    const checkStatus = async () => {
        try {
            if (cnic.trim() === "" || cnic.length !== 13) {
                toast.warning("Please enter a valid 13-digit CNIC.");
                return;
            } setIsLoader(true)
            setSeeker(null)
            const res = await axios.get(`https://beneficary-backend.vercel.app/auth/seeker/status/${cnic}`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`
                }
            })
            console.log("resPonse in the Page==>", res)
            setIsLoader(false)
            setSeeker(res.data.data)
            setCnic("")
        } catch (error) {
            setIsLoader(false);
            setSeeker(null);
            console.log("Error ==>", error);

            if (error.message === 'Network Error') {
                toast.error("Server is not responding. Please try again later.");
            } else if (error.response && error.response.status === 404) {
                toast.error("No seeker found with this CNIC.");
            } else {
                toast.error("Something went wrong: " + error.message);
            }
        }

    }

    return (
        <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg mt-30">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Check Your Status</h2>

            <div className="flex flex-col gap-4">
                <input
                    type="text"
                    maxLength={13}
                    minLength={13}
                    placeholder="Enter your CNIC"
                    value={cnic}
                    onChange={(e) => setCnic(e.target.value)}
                    className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    onClick={checkStatus}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-200"
                >
                    Check
                </button>
            </div>

            {/* Loader OR Seeker Card */}
            <div className="mt-6">
                {isLoader ? (
                    <PageLoader />
                ) : seeker && (
                    <div className={"rounded-lg p-4 shadow-md text-black bg-white"}>

                        <h3 className="text-xl font-semibold mb-2">Seeker Details</h3>
                        <p><strong>Name:</strong> {seeker.name}</p>
                        <p><strong>CNIC:</strong> {seeker.cnic}</p>
                        <p><strong>Status:</strong>
                            <span className={`ml-2 px-2 py-1 rounded  text-white text-sm font-medium
                            ${seeker.status === 'pending' ? 'bg-gray-400' :
                                    seeker.status === 'inprocess' ? 'bg-yellow-500' :
                                        'bg-green-600'
                                }`}>
                                {seeker.status}
                            </span>
                        </p>
                        <p><strong>Token Number:</strong> {seeker.tokenNumber}</p>
                    </div>
                )}
            </div>
        </div>
    );

}

export default SeekerStatusComp