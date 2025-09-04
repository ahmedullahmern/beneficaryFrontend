import { Plus, Building2, Eye, Edit } from "lucide-react"

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

function DepartmentsView() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-gray-800">Departments</h2>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-700 transition-colors">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Department
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dashboardStats.departments.map((dept, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">{dept.name}</h3>
                            <Building2 className="h-8 w-8 text-green-600" />
                        </div>
                        <p className="text-2xl font-bold text-gray-700">{dept.count}</p>
                        <p className="text-sm text-gray-500">Active Cases</p>
                        <div className="mt-4 flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">
                                <Eye className="h-4 w-4" />
                            </button>
                            <button className="text-green-600 hover:text-green-800">
                                <Edit className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DepartmentsView