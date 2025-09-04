function SettingsView() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">System Settings</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">General Settings</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name</label>
                            <input type="text" value="Saylani Welfare International Trust" className="w-full p-2 border border-gray-300 rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                            <input type="email" value="admin@saylani.org" className="w-full p-2 border border-gray-300 rounded-lg" />
                        </div>
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                            Save Changes
                        </button>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Token Settings</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Token Validity (hours)</label>
                            <input type="number" value="24" className="w-full p-2 border border-gray-300 rounded-lg" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">SMS Notifications</label>
                            <select className="w-full p-2 border border-gray-300 rounded-lg">
                                <option>Enabled</option>
                                <option>Disabled</option>
                            </select>
                        </div>
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                            Update Settings
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SettingsView