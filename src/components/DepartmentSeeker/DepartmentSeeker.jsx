// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import Cookies from 'js-cookie'

// export default function DepartmentSeekersComp() {
//     const { dept } = useParams(); // e.g. 'education'
//     const [seekers, setSeekers] = useState([]);

//     useEffect(() => {
//         const fetchSeekers = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:4000/auth/${dept}/seekers`, {
//                     headers: {
//                         Authorization: `Bearer ${Cookies.get("token")}`
//                     }
//                 });
//                 setSeekers(res.data.data);
//                 console.log("seeker==>", seekers)
//             } catch (err) {
//                 console.error("Error fetching seekers", err);
//             }
//         };

//         fetchSeekers();
//     }, [dept]);

//     return (
//         <div className="p-6">
//             <h2 className="text-2xl font-bold mb-4">Seekers for {dept} Department</h2>
//             {seekers.length === 0 ? (
//                 <p>No seekers found for this department.</p>
//             ) : (
//                 <ul className="space-y-4">
//                     {seekers.map((seeker) => (
//                         <li key={seeker._id} className="border p-4 rounded shadow">
//                             <p><strong>Name:</strong> {seeker.name}</p>
//                             <p><strong>CNIC:</strong> {seeker.cnic}</p>
//                             <p><strong>Status:</strong> {seeker.status}</p>
//                             {/* Yahan se tu update bhi karwa sakta hai agar chahe */}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';
import { toast } from "react-toastify";

export default function DepartmentSeekersComp() {
    const { dept } = useParams();
    const [seekers, setSeekers] = useState([]);
    const [load, setLoad] = useState(false)

    const fetchSeekers = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/auth/${dept}/seekers`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`
                }
            });
            setSeekers(res.data.data);
        } catch (err) {
            console.error("Error fetching seekers", err);
        }
    };

    useEffect(() => {
        fetchSeekers();
    }, [dept]);



    const updateStatus = async (id, newStatus) => {
        try {
            const res = await axios.put(`http://localhost:4000/auth/seeker/${id}/status`, {
                status: newStatus

            }, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`
                }
            });
            toast.success("Status updated successfully");
            fetchSeekers()
            // const updatedSeeker = res.data.data;
            // setSeekers(prev => prev.map((seeker => seeker._id == id ? updatedSeeker : seeker)))

        } catch (err) {
            console.error("Status update failed", err);
            toast.error("SomeThing Went Wrong" + err)
        }
    };


    return (
        <div className="p-6 bg-gray-50 min-h-scree">
            <h2 className="text-3xl font-bold mb-6 text-center">Seekers - {dept} Department</h2>

            {seekers.length === 0 ? (
                <p className="text-center text-gray-500">No seekers found for this department.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {seekers.map(seeker => (
                        <div key={seeker._id} className="bg-white shadow-lg rounded-xl p-4 border">
                            <h3 className="text-xl font-semibold mb-2">Seeker Detaile</h3>
                            <p><strong>NAME:</strong> {seeker.name}</p>
                            <p><strong>CNIC:</strong> {seeker.cnic}</p>
                            <p><strong>Email:</strong> {seeker.email}</p>
                            <p><strong>Phone:</strong> {seeker.phone}</p>
                            <p><strong>Address:</strong> {seeker.address}</p>
                            <p><strong>Purpose:</strong> {seeker.purpose}</p>
                            <p><strong>Token #:</strong> {seeker.tokenNumber}</p>
                            <p><strong>Status:</strong>
                                <span className={`ml-2 px-2 py-1 rounded text-white text-sm ${seeker.status === 'pending' ? 'bg-gray-600' : seeker.status === 'inprocess' ? 'bg-yellow-500' : 'bg-green-500'}`}>
                                    {seeker.status}
                                </span>
                            </p>

                            <div className="mt-4 flex gap-2">
                                <button
                                    onClick={() => updateStatus(seeker._id, "inprocess")}
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                                >
                                    Inprocess
                                </button>
                                <button
                                    onClick={() => updateStatus(seeker._id, "completed")}
                                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                                >
                                    Completed
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
