import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie'

export default function DepartmentSeekersComp() {
    const { dept } = useParams(); // e.g. 'education'
    const [seekers, setSeekers] = useState([]);

    useEffect(() => {
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

        fetchSeekers();
    }, [dept]);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Seekers for {dept} Department</h2>
            {seekers.length === 0 ? (
                <p>No seekers found for this department.</p>
            ) : (
                <ul className="space-y-4">
                    {seekers.map((seeker) => (
                        <li key={seeker._id} className="border p-4 rounded shadow">
                            <p><strong>Name:</strong> {seeker.name}</p>
                            <p><strong>CNIC:</strong> {seeker.cnic}</p>
                            <p><strong>Status:</strong> {seeker.status}</p>
                            {/* Yahan se tu update bhi karwa sakta hai agar chahe */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
