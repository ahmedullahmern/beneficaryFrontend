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
import { useNavigate, useParams } from "react-router-dom";
import { jsPDF } from "jspdf";
import Cookies from 'js-cookie';
import { AppRoutes } from "../../constant/constant";
import logoround from "../../assets/logoround.jpeg"
import ButtonLoader from "../ButtonLoader/ButtonLoader";
import { toast } from 'react-toastify';


const SeekerDownlodComp = () => {
    const { id } = useParams();
    const [seeker, setSeeker] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const buttonLoader = ButtonLoader()
    const nav = useNavigate()

    useEffect(() => {
        axios.get(AppRoutes.seekerDownload.replace(":id", id), {
            headers: { Authorization: `Bearer ${Cookies.get("token")}` }
        })
            .then((res) => {
                setSeeker(res.data.data);
            })
            .catch((err) => {
                toast.error("Somthing Went Wrong" + err)
                console.error("Error fetching seeker:", err);
            })
    }, [id]);

    const downloadPDF = async () => {
        setIsLoading(true)
        const doc = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: [80, 130],
        });

        const pageWidth = doc.internal.pageSize.getWidth();

        // Header
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text("Saylani Welfare Trust", pageWidth / 2, 10, { align: "center" });

        doc.setLineWidth(0.5);
        doc.line(5, 13, pageWidth - 5, 13);

        // Date & Time
        const now = new Date();
        const dateStr = now.toLocaleDateString();
        const timeStr = now.toLocaleTimeString();
        doc.setFontSize(8);
        doc.setFont("helvetica", "normal");
        doc.text(`Date: ${dateStr}`, 5, 17);
        doc.text(`Time: ${timeStr}`, pageWidth - 5, 17, { align: "right" });

        // Box
        doc.setDrawColor(0);
        doc.setLineWidth(0.2);
        doc.rect(5, 20, pageWidth - 10, 60);

        // Info
        doc.setFontSize(10);
        const info = [
            `Name: ${seeker.name}`,
            `Email: ${seeker.email}`,
            `CNIC: ${seeker.cnic}`,
            `Phone: ${seeker.phone}`,
            `Address: ${seeker.address}`,
            `Purpose: ${seeker.purpose}`,
            `TokenNumber: ${seeker.tokenNumber}`,
        ];

        let yPos = 28;
        info.forEach((line) => {
            const wrappedText = doc.splitTextToSize(line, pageWidth - 20);
            wrappedText.forEach((txtLine) => {
                doc.text(txtLine, pageWidth / 2, yPos, { align: "center" });
                yPos += 6;
            });
        });

        // QR Code
        if (seeker.qrCodeUrl) {
            const imageData = await getBase64ImageFromURL(seeker.qrCodeUrl);
            doc.text("QR Code", pageWidth / 2, 92, { align: "center" });
            doc.addImage(imageData, "PNG", (pageWidth - 30) / 2, 95, 30, 30);
        }
        doc.save("seeker-slip.pdf");

        setTimeout(() => {
            toast.success("Download Slip Successfully")
            setIsLoading(false)
            nav("/seekerRegister")
        }, 2000)
    };

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

    if (!seeker) return buttonLoader;

    return (
        <div className="p-6 m-10 max-w-md mx-auto bg-white shadow-lg rounded-md text-center">
            <div className="flex justify-center mb-4">
                <img src={logoround} alt="logo" width="100" />
            </div>
            <h1 className="text-2xl font-bold text-green-700 mb-4">Seeker Information</h1>
            <div className="text-left space-y-1">
                <p><strong>Name:</strong> {seeker.name}</p>
                <p><strong>Email:</strong> {seeker.email}</p>
                <p><strong>CNIC:</strong> {seeker.cnic}</p>
                <p><strong>Phone:</strong> {seeker.phone}</p>
                <p><strong>Address:</strong> {seeker.address}</p>
                <p><strong>Purpose:</strong> {seeker.purpose}</p>
                <p><strong>TokenNumber:</strong> {seeker.tokenNumber}</p>
            </div>
            {seeker.qrCodeUrl && (
                <div className="mt-4 flex justify-center">
                    <img src={seeker.qrCodeUrl} alt="QR Code" width="150" />
                </div>
            )}

            <button
                disabled={isLoading}
                onClick={downloadPDF}
                className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded shadow"
            >
                {isLoading ? buttonLoader : "Download PDF"}
            </button>
        </div>
    );
};

export default SeekerDownlodComp;


