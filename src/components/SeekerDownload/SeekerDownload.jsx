// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { jsPDF } from "jspdf";
// import Cookies from 'js-cookie';
// import { AppRoutes } from "../../constant/constant";

// const SeekerDownlodComp = () => {
//     const { id } = useParams();
//     const [seeker, setSeeker] = useState(null);

//     console.log("ID from URL params:", id);
//     useEffect(() => {
//         axios.get(AppRoutes.seekerDownload.replace(":id", id), {
//             headers: { Authorization: `Bearer ${Cookies.get("token")}` }
//         })
//             .then((res) => {
//                 setSeeker(res.data.data);
//             })
//             .catch((err) => {
//                 console.error("Error fetching seeker:", err);
//             })
//     }, [id]);

//     const downloadPDF = () => {
//         const doc = new jsPDF();
//         doc.text("Seeker Details", 10, 10);
//         doc.text(`Name: ${seeker.name}`, 10, 20);
//         doc.text(`Email: ${seeker.email}`, 10, 30);
//         doc.text(`CNIC: ${seeker.cnic}`, 10, 40);
//         doc.text(`Phone: ${seeker.phone}`, 10, 50);
//         doc.text(`Address: ${seeker.address}`, 10, 60);
//         doc.text(`Purpose: ${seeker.purpose}`, 10, 70);
//         doc.save("seeker-details.pdf");
//     };

//     if (!seeker) return <p>Loading...</p>;

//     return (
//         <div className="p-6">
//             <h1 className="text-xl font-bold mb-4">Seeker Information</h1>
//             <p><strong>Name:</strong> {seeker.name}</p>
//             <p><strong>Email:</strong> {seeker.email}</p>
//             <p><strong>CNIC:</strong> {seeker.cnic}</p>
//             <p><strong>Phone:</strong> {seeker.phone}</p>
//             <p><strong>Address:</strong> {seeker.address}</p>
//             <p><strong>Purpose:</strong> {seeker.purpose}</p>

//             <button
//                 onClick={downloadPDF}
//                 className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md"
//             >
//                 Download PDF
//             </button>
//         </div>
//     );
// };

// export default SeekerDownlodComp;




import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { jsPDF } from "jspdf";
import Cookies from 'js-cookie';
import { AppRoutes } from "../../constant/constant";

const SeekerDownlodComp = () => {
    const { id } = useParams();
    const [seeker, setSeeker] = useState(null);

    useEffect(() => {
        axios.get(AppRoutes.seekerDownload.replace(":id", id), {
            headers: { Authorization: `Bearer ${Cookies.get("token")}` }
        })
            .then((res) => {
                setSeeker(res.data.data);
            })
            .catch((err) => {
                console.error("Error fetching seeker:", err);
            })
    }, [id]);

    const downloadPDF = async () => {
        // Slip jesa size (width, height) — in mm (80mm x 100mm)
        const doc = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: [80, 100], // 80mm width, 100mm height
        });

        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text("Saylani Welfare Trust", 40, 10, null, null, "center");

        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");

        doc.text(`Name: ${seeker.name}`, 10, 20);
        doc.text(`Email: ${seeker.email}`, 10, 26);
        doc.text(`CNIC: ${seeker.cnic}`, 10, 32);
        doc.text(`Phone: ${seeker.phone}`, 10, 38);
        doc.text(`Address: ${seeker.address}`, 10, 44);
        doc.text(`Purpose: ${seeker.purpose}`, 10, 50);

        // QR Code
        if (seeker.qrCodeUrl) {
            const imageData = await getBase64ImageFromURL(seeker.qrCodeUrl);
            doc.text("QR Code:", 10, 60);
            doc.addImage(imageData, "PNG", 25, 65, 30, 30); // (x, y, w, h)
        }

        doc.save("seeker-slip.pdf");
    };


    // Helper function to convert image URL to Base64
    const getBase64ImageFromURL = async (url) => {
        const res = await fetch(url);
        const blob = await res.blob();

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
        });
    };

    if (!seeker) return <p>Loading...</p>;

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Seeker Information</h1>
            <p><strong>Name:</strong> {seeker.name}</p>
            <p><strong>Email:</strong> {seeker.email}</p>
            <p><strong>CNIC:</strong> {seeker.cnic}</p>
            <p><strong>Phone:</strong> {seeker.phone}</p>
            <p><strong>Address:</strong> {seeker.address}</p>
            <p><strong>Purpose:</strong> {seeker.purpose}</p>
            {seeker.qrCodeUrl && (
                <div className="mt-4">
                    <img src={seeker.qrCodeUrl} alt="QR Code" width="150" />
                </div>
            )}

            <button
                onClick={downloadPDF}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md"
            >
                Download PDF
            </button>
        </div>
    );
};

export default SeekerDownlodComp;
