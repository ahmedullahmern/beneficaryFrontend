import { Search, Eye } from "lucide-react"
import { useState } from "react";

function BeneficiariesView() {
    const [searchTerm, setSearchTerm] = useState('');

    const [beneficiaries, setBeneficiaries] = useState([
        { id: 1, cnic: '42101-1234567-1', name: 'Muhammad Usman', phone: '0300-1234567', purpose: 'Financial Aid', status: 'Completed', date: '2025-08-31' },
        { id: 2, cnic: '42101-7654321-9', name: 'Aisha Begum', phone: '0321-9876543', purpose: 'Medical Assistance', status: 'In Progress', date: '2025-08-31' },
        { id: 3, cnic: '42101-1111111-1', name: 'Ali Raza', phone: '0333-5555555', purpose: 'Education Support', status: 'Pending', date: '2025-08-30' }
    ]);
     const filteredBeneficiaries = beneficiaries.filter(b =>
        b.cnic.includes(searchTerm) ||
        b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.phone.includes(searchTerm)
    );
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-gray-800">Beneficiaries</h2>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by CNIC, Name, or Phone"
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">CNIC</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Purpose</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {filteredBeneficiaries.map(beneficiary => (
                            <tr key={beneficiary.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">{beneficiary.cnic}</td>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{beneficiary.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{beneficiary.phone}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{beneficiary.purpose}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${beneficiary.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                        beneficiary.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                        {beneficiary.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{beneficiary.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button className="text-blue-600 hover:text-blue-900">
                                        <Eye className="h-4 w-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default BeneficiariesView