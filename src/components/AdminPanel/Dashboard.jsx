import { Bell, } from "lucide-react"
import { useState } from "react";

const dashboardStats = {
    totalVisitors: 156,
    newBeneficiaries: 23,
    returningBeneficiaries: 133,
    completedCases: 89,
    departments: [
        { name: 'Financial Aid', count: 67 },
        { name: 'Medical', count: 45 },
        { name: 'Education', count: 28 },
        { name: 'Emergency', count: 16 }
    ]
};

function DashboardView() {
    const [beneficiaries, setBeneficiaries] = useState([
        { id: 1, cnic: '42101-1234567-1', name: 'Muhammad Usman', phone: '0300-1234567', purpose: 'Financial Aid', status: 'Completed', date: '2025-08-31' },
        { id: 2, cnic: '42101-7654321-9', name: 'Aisha Begum', phone: '0321-9876543', purpose: 'Medical Assistance', status: 'In Progress', date: '2025-08-31' },
        { id: 3, cnic: '42101-1111111-1', name: 'Ali Raza', phone: '0333-5555555', purpose: 'Education Support', status: 'Pending', date: '2025-08-30' }
    ]);
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
                <div className="flex items-center space-x-4">
                    <Bell className="h-6 w-6 text-gray-600" />
                    <span className="text-sm text-gray-600">Today: {new Date().toLocaleDateString()}</span>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h3 className="text-lg font-semibold text-gray-700">Total Visitors</h3>
                    <p className="text-3xl font-bold text-blue-600">{dashboardStats.totalVisitors}</p>
                    <p className="text-sm text-gray-500 mt-2">Today</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                    <h3 className="text-lg font-semibold text-gray-700">New Beneficiaries</h3>
                    <p className="text-3xl font-bold text-green-600">{dashboardStats.newBeneficiaries}</p>
                    <p className="text-sm text-gray-500 mt-2">Today</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                    <h3 className="text-lg font-semibold text-gray-700">Returning</h3>
                    <p className="text-3xl font-bold text-orange-600">{dashboardStats.returningBeneficiaries}</p>
                    <p className="text-sm text-gray-500 mt-2">Today</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                    <h3 className="text-lg font-semibold text-gray-700">Completed Cases</h3>
                    <p className="text-3xl font-bold text-purple-600">{dashboardStats.completedCases}</p>
                    <p className="text-sm text-gray-500 mt-2">Today</p>
                </div>
            </div>

            {/* Department Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Department Activity</h3>
                    {dashboardStats.departments.map((dept, index) => (
                        <div key={index} className="flex justify-between items-center mb-3">
                            <span className="text-gray-700">{dept.name}</span>
                            <div className="flex items-center space-x-3">
                                <div className="w-32 bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-green-600 h-2 rounded-full"
                                        style={{ width: `${(dept.count / dashboardStats.totalVisitors) * 100}%` }}
                                    ></div>
                                </div>
                                <span className="font-semibold text-gray-800">{dept.count}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                        {beneficiaries.slice(0, 5).map(b => (
                            <div key={b.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                                <div>
                                    <p className="font-medium">{b.name}</p>
                                    <p className="text-sm text-gray-600">{b.purpose}</p>
                                </div>
                                <span className={`px-2 py-1 rounded text-xs font-medium ${b.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                    b.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-red-100 text-red-800'
                                    }`}>
                                    {b.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DashboardView