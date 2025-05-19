import axios from "axios";
import { useState } from "react"
import Cookies from 'js-cookie';
import { toast } from "react-toastify";

function SeekerStatusComp() {
    const [cnic, setCnic] = useState("");
    const [seeker, setSeeker] = useState(null)

    const checkStatus = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/auth/seeker/status/${cnic}`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`
                }
            })
            setSeeker(res.data.data)
        } catch (error) {
            console.log(error)
            toast.error("No seeker found with this CNIC" + error)
        }
    }

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold">Check Your Status</h2>
            <input
                type="text"
                placeholder="Enter your CNIC"
                value={cnic}
                onChange={(e) => setCnic(e.target.value)}
                className="border px-4 py-2 rounded my-4"
            />
            <button onClick={checkStatus} className="bg-blue-600 text-white px-4 py-2 rounded">Check</button>

            {seeker && (
                <div className="mt-4">
                    <p><strong>Name:</strong> {seeker.name}</p>
                    <p><strong>Status:</strong> {seeker.status}</p>
                    <p><strong>Token:</strong> {seeker.tokenNumber}</p>
                </div>
            )}
        </div>
    );
}

export default SeekerStatusComp