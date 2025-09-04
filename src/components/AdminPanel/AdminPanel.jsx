import React, { useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie'
import DashboardView from './Dashboard';
import UserManagementView from './UserManagment';
import BeneficiariesView from './BeneficiariesView';
import DepartmentsView from './DepartmentsView';
import ReportsView from './ReportsView';
import SettingsView from './SettingsView';
import {
  Users,
  UserPlus,
  Search,
  BarChart3,
  PieChart,
  Calendar,
  Eye,
  Edit,
  Trash2,
  Plus,
  FileText,
  Building2,
  Settings,
  Bell,
  LogOut
} from 'lucide-react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';




const AdminPanel = () => {
  const { user, setUser } = useContext(AuthContext)
  const [activeTab, setActiveTab] = useState('dashboard');
  const nav = useNavigate()

  const handleLogOut = () => {
    Cookies.remove("token")
    toast.success("User Logout Successfully")
    setUser(null)
    nav("/")
  }
  // const [users, setUsers] = useState([
  //   { id: 1, name: 'Ahmed Khan', role: 'Receptionist', email: 'ahmed@saylani.org', status: 'Active' },
  //   { id: 2, name: 'Fatima Ali', role: 'Department Staff', email: 'fatima@saylani.org', status: 'Active' },
  //   { id: 3, name: 'Hassan Sheikh', role: 'Department Staff', email: 'hassan@saylani.org', status: 'Inactive' }
  // ]);

  // const [beneficiaries, setBeneficiaries] = useState([
  //   { id: 1, cnic: '42101-1234567-1', name: 'Muhammad Usman', phone: '0300-1234567', purpose: 'Financial Aid', status: 'Completed', date: '2025-08-31' },
  //   { id: 2, cnic: '42101-7654321-9', name: 'Aisha Begum', phone: '0321-9876543', purpose: 'Medical Assistance', status: 'In Progress', date: '2025-08-31' },
  //   { id: 3, cnic: '42101-1111111-1', name: 'Ali Raza', phone: '0333-5555555', purpose: 'Education Support', status: 'Pending', date: '2025-08-30' }
  // ]);

  // const [searchTerm, setSearchTerm] = useState('');
  // const [showAddUserModal, setShowAddUserModal] = useState(false);
  // const [newUser, setNewUser] = useState({ name: '', email: '', role: 'Receptionist' });

  // const dashboardStats = {
  //   totalVisitors: 156,
  //   newBeneficiaries: 23,
  //   returningBeneficiaries: 133,
  //   completedCases: 89,
  //   departments: [
  //     { name: 'Financial Aid', count: 67 },
  //     { name: 'Medical', count: 45 },
  //     { name: 'Education', count: 28 },
  //     { name: 'Emergency', count: 16 }
  //   ]
  // };

  // const filteredBeneficiaries = beneficiaries.filter(b =>
  //   b.cnic.includes(searchTerm) ||
  //   b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //   b.phone.includes(searchTerm)
  // );

  // const addUser = () => {
  //   if (newUser.name && newUser.email) {
  //     setUsers([...users, {
  //       id: users.length + 1,
  //       ...newUser,
  //       status: 'Active'
  //     }]);
  //     setNewUser({ name: '', email: '', role: 'Receptionist' });
  //     setShowAddUserModal(false);
  //   }
  // };

  // const deleteUser = (id) => {
  //   setUsers(users.filter(u => u.id !== id));
  // };

  const Sidebar = () => (
    <div className="w-64 bg-green-800 text-white h-screen fixed left-0 top-0 z-10">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-center">Saylani Welfare</h1>
        <p className="text-green-200 text-sm text-center mt-2">Admin Panel</p>
      </div>

      <nav className="mt-8">
        {[
          { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
          { id: 'users', label: 'User Management', icon: Users },
          { id: 'beneficiaries', label: 'Beneficiaries', icon: FileText },
          { id: 'departments', label: 'Departments', icon: Building2 },
          { id: 'reports', label: 'Reports', icon: PieChart },
          { id: 'settings', label: 'Settings', icon: Settings }
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`w-full flex items-center px-6 py-3 text-left hover:bg-green-700 transition-colors ${activeTab === id ? 'bg-green-700 border-r-4 border-white' : ''
              }`}
          >
            <Icon className="mr-3 h-5 w-5" />
            {label}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-0 w-full p-6">
        <button className="flex items-center text-green-200 hover:text-white"
          onClick={handleLogOut}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </button>
      </div>
    </div>
  );

  // const DashboardView = () => (
  //   <div className="space-y-6">
  //     <div className="flex justify-between items-center">
  //       <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
  //       <div className="flex items-center space-x-4">
  //         <Bell className="h-6 w-6 text-gray-600" />
  //         <span className="text-sm text-gray-600">Today: {new Date().toLocaleDateString()}</span>
  //       </div>
  //     </div>

  //     {/* Stats Cards */}
  //     <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  //       <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
  //         <h3 className="text-lg font-semibold text-gray-700">Total Visitors</h3>
  //         <p className="text-3xl font-bold text-blue-600">{dashboardStats.totalVisitors}</p>
  //         <p className="text-sm text-gray-500 mt-2">Today</p>
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
  //         <h3 className="text-lg font-semibold text-gray-700">New Beneficiaries</h3>
  //         <p className="text-3xl font-bold text-green-600">{dashboardStats.newBeneficiaries}</p>
  //         <p className="text-sm text-gray-500 mt-2">Today</p>
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
  //         <h3 className="text-lg font-semibold text-gray-700">Returning</h3>
  //         <p className="text-3xl font-bold text-orange-600">{dashboardStats.returningBeneficiaries}</p>
  //         <p className="text-sm text-gray-500 mt-2">Today</p>
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
  //         <h3 className="text-lg font-semibold text-gray-700">Completed Cases</h3>
  //         <p className="text-3xl font-bold text-purple-600">{dashboardStats.completedCases}</p>
  //         <p className="text-sm text-gray-500 mt-2">Today</p>
  //       </div>
  //     </div>

  //     {/* Department Activity */}
  //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  //       <div className="bg-white p-6 rounded-lg shadow-md">
  //         <h3 className="text-xl font-semibold mb-4">Department Activity</h3>
  //         {dashboardStats.departments.map((dept, index) => (
  //           <div key={index} className="flex justify-between items-center mb-3">
  //             <span className="text-gray-700">{dept.name}</span>
  //             <div className="flex items-center space-x-3">
  //               <div className="w-32 bg-gray-200 rounded-full h-2">
  //                 <div
  //                   className="bg-green-600 h-2 rounded-full"
  //                   style={{ width: `${(dept.count / dashboardStats.totalVisitors) * 100}%` }}
  //                 ></div>
  //               </div>
  //               <span className="font-semibold text-gray-800">{dept.count}</span>
  //             </div>
  //           </div>
  //         ))}
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-md">
  //         <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
  //         <div className="space-y-3">
  //           {beneficiaries.slice(0, 5).map(b => (
  //             <div key={b.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
  //               <div>
  //                 <p className="font-medium">{b.name}</p>
  //                 <p className="text-sm text-gray-600">{b.purpose}</p>
  //               </div>
  //               <span className={`px-2 py-1 rounded text-xs font-medium ${b.status === 'Completed' ? 'bg-green-100 text-green-800' :
  //                 b.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
  //                   'bg-red-100 text-red-800'
  //                 }`}>
  //                 {b.status}
  //               </span>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );






  // const UserManagementView = () => (
  //   <div className="space-y-6">
  //     <div className="flex justify-between items-center">
  //       <h2 className="text-3xl font-bold text-gray-800">User Management</h2>
  //       <button
  //         onClick={() => setShowAddUserModal(true)}
  //         className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-700 transition-colors"
  //       >
  //         <UserPlus className="mr-2 h-4 w-4" />
  //         Add User
  //       </button>
  //     </div>

  //     <div className="bg-white rounded-lg shadow-md overflow-hidden">
  //       <table className="w-full">
  //         <thead className="bg-gray-50">
  //           <tr>
  //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
  //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
  //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
  //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
  //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
  //           </tr>
  //         </thead>
  //         <tbody className="divide-y divide-gray-200">
  //           {users.map(user => (
  //             <tr key={user.id} className="hover:bg-gray-50">
  //               <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{user.name}</td>
  //               <td className="px-6 py-4 whitespace-nowrap">
  //                 <span className={`px-2 py-1 rounded text-xs font-medium ${user.role === 'Admin' ? 'bg-purple-100 text-purple-800' :
  //                   user.role === 'Receptionist' ? 'bg-blue-100 text-blue-800' :
  //                     'bg-green-100 text-green-800'
  //                   }`}>
  //                   {user.role}
  //                 </span>
  //               </td>
  //               <td className="px-6 py-4 whitespace-nowrap text-gray-600">{user.email}</td>
  //               <td className="px-6 py-4 whitespace-nowrap">
  //                 <span className={`px-2 py-1 rounded text-xs font-medium ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
  //                   }`}>
  //                   {user.status}
  //                 </span>
  //               </td>
  //               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
  //                 <button className="text-blue-600 hover:text-blue-900">
  //                   <Edit className="h-4 w-4" />
  //                 </button>
  //                 <button
  //                   onClick={() => deleteUser(user.id)}
  //                   className="text-red-600 hover:text-red-900"
  //                 >
  //                   <Trash2 className="h-4 w-4" />
  //                 </button>
  //               </td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //   </div>
  // );

  // const BeneficiariesView = () => (
  //   <div className="space-y-6">
  //     <div className="flex justify-between items-center">
  //       <h2 className="text-3xl font-bold text-gray-800">Beneficiaries</h2>
  //       <div className="flex items-center space-x-4">
  //         <div className="relative">
  //           <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
  //           <input
  //             type="text"
  //             placeholder="Search by CNIC, Name, or Phone"
  //             className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
  //             value={searchTerm}
  //             onChange={(e) => setSearchTerm(e.target.value)}
  //           />
  //         </div>
  //       </div>
  //     </div>

  //     <div className="bg-white rounded-lg shadow-md overflow-hidden">
  //       <table className="w-full">
  //         <thead className="bg-gray-50">
  //           <tr>
  //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">CNIC</th>
  //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
  //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
  //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Purpose</th>
  //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
  //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
  //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
  //           </tr>
  //         </thead>
  //         <tbody className="divide-y divide-gray-200">
  //           {filteredBeneficiaries.map(beneficiary => (
  //             <tr key={beneficiary.id} className="hover:bg-gray-50">
  //               <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">{beneficiary.cnic}</td>
  //               <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{beneficiary.name}</td>
  //               <td className="px-6 py-4 whitespace-nowrap text-gray-600">{beneficiary.phone}</td>
  //               <td className="px-6 py-4 whitespace-nowrap text-gray-600">{beneficiary.purpose}</td>
  //               <td className="px-6 py-4 whitespace-nowrap">
  //                 <span className={`px-2 py-1 rounded text-xs font-medium ${beneficiary.status === 'Completed' ? 'bg-green-100 text-green-800' :
  //                   beneficiary.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
  //                     'bg-red-100 text-red-800'
  //                   }`}>
  //                   {beneficiary.status}
  //                 </span>
  //               </td>
  //               <td className="px-6 py-4 whitespace-nowrap text-gray-600">{beneficiary.date}</td>
  //               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
  //                 <button className="text-blue-600 hover:text-blue-900">
  //                   <Eye className="h-4 w-4" />
  //                 </button>
  //               </td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //   </div>
  // );

  // const DepartmentsView = () => (
  //   <div className="space-y-6">
  //     <div className="flex justify-between items-center">
  //       <h2 className="text-3xl font-bold text-gray-800">Departments</h2>
  //       <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-700 transition-colors">
  //         <Plus className="mr-2 h-4 w-4" />
  //         Add Department
  //       </button>
  //     </div>

  //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  //       {dashboardStats.departments.map((dept, index) => (
  //         <div key={index} className="bg-white p-6 rounded-lg shadow-md">
  //           <div className="flex items-center justify-between mb-4">
  //             <h3 className="text-lg font-semibold text-gray-800">{dept.name}</h3>
  //             <Building2 className="h-8 w-8 text-green-600" />
  //           </div>
  //           <p className="text-2xl font-bold text-gray-700">{dept.count}</p>
  //           <p className="text-sm text-gray-500">Active Cases</p>
  //           <div className="mt-4 flex space-x-2">
  //             <button className="text-blue-600 hover:text-blue-800">
  //               <Eye className="h-4 w-4" />
  //             </button>
  //             <button className="text-green-600 hover:text-green-800">
  //               <Edit className="h-4 w-4" />
  //             </button>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  // const ReportsView = () => (
  //   <div className="space-y-6">
  //     <h2 className="text-3xl font-bold text-gray-800">Reports & Analytics</h2>

  //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  //       <div className="bg-white p-6 rounded-lg shadow-md">
  //         <h3 className="text-xl font-semibold mb-4">Monthly Trends</h3>
  //         <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
  //           <p className="text-gray-500">Chart: Monthly beneficiary trends</p>
  //         </div>
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-md">
  //         <h3 className="text-xl font-semibold mb-4">Department Distribution</h3>
  //         <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
  //           <p className="text-gray-500">Chart: Department-wise distribution</p>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="bg-white p-6 rounded-lg shadow-md">
  //       <h3 className="text-xl font-semibold mb-4">Quick Reports</h3>
  //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  //         <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
  //           <FileText className="h-6 w-6 text-green-600 mb-2" />
  //           <h4 className="font-medium">Daily Summary</h4>
  //           <p className="text-sm text-gray-600">Today's complete report</p>
  //         </button>
  //         <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
  //           <Calendar className="h-6 w-6 text-blue-600 mb-2" />
  //           <h4 className="font-medium">Weekly Report</h4>
  //           <p className="text-sm text-gray-600">Last 7 days activity</p>
  //         </button>
  //         <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 text-left">
  //           <BarChart3 className="h-6 w-6 text-purple-600 mb-2" />
  //           <h4 className="font-medium">Monthly Analytics</h4>
  //           <p className="text-sm text-gray-600">Complete month analysis</p>
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );

  // const SettingsView = () => (
  //   <div className="space-y-6">
  //     <h2 className="text-3xl font-bold text-gray-800">System Settings</h2>

  //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  //       <div className="bg-white p-6 rounded-lg shadow-md">
  //         <h3 className="text-xl font-semibold mb-4">General Settings</h3>
  //         <div className="space-y-4">
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name</label>
  //             <input type="text" value="Saylani Welfare International Trust" className="w-full p-2 border border-gray-300 rounded-lg" />
  //           </div>
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
  //             <input type="email" value="admin@saylani.org" className="w-full p-2 border border-gray-300 rounded-lg" />
  //           </div>
  //           <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
  //             Save Changes
  //           </button>
  //         </div>
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-md">
  //         <h3 className="text-xl font-semibold mb-4">Token Settings</h3>
  //         <div className="space-y-4">
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700 mb-2">Token Validity (hours)</label>
  //             <input type="number" value="24" className="w-full p-2 border border-gray-300 rounded-lg" />
  //           </div>
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700 mb-2">SMS Notifications</label>
  //             <select className="w-full p-2 border border-gray-300 rounded-lg">
  //               <option>Enabled</option>
  //               <option>Disabled</option>
  //             </select>
  //           </div>
  //           <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
  //             Update Settings
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  const renderActiveView = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardView />;
      case 'users': return <UserManagementView />;
      case 'beneficiaries': return <BeneficiariesView />;
      case 'departments': return <DepartmentsView />;
      case 'reports': return <ReportsView />;
      case 'settings': return <SettingsView />;
      default: return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />

      <div className="ml-64 p-8">
        {renderActiveView()}
      </div>

      {/* Add User Modal */}
      {/* {showAddUserModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Add New User</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="Receptionist">Receptionist</option>
                  <option value="Department Staff">Department Staff</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => setShowAddUserModal(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={addUser}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default AdminPanel;