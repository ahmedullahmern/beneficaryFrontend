import { FileText, Calendar, BarChart3 } from "lucide-react"

function ReportsView() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Reports & Analytics</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Monthly Trends</h3>
                    <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
                        <p className="text-gray-500">Chart: Monthly beneficiary trends</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Department Distribution</h3>
                    <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
                        <p className="text-gray-500">Chart: Department-wise distribution</p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Quick Reports</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
                        <FileText className="h-6 w-6 text-green-600 mb-2" />
                        <h4 className="font-medium">Daily Summary</h4>
                        <p className="text-sm text-gray-600">Today's complete report</p>
                    </button>
                    <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
                        <Calendar className="h-6 w-6 text-blue-600 mb-2" />
                        <h4 className="font-medium">Weekly Report</h4>
                        <p className="text-sm text-gray-600">Last 7 days activity</p>
                    </button>
                    <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
                        <BarChart3 className="h-6 w-6 text-purple-600 mb-2" />
                        <h4 className="font-medium">Monthly Analytics</h4>
                        <p className="text-sm text-gray-600">Complete month analysis</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ReportsView