// import React, { useState } from 'react';
// import { Users, UserPlus, Search, BarChart3, FileText, Settings, Eye, Edit, Trash2, Plus, Filter, Calendar, Phone, MapPin, Download } from 'lucide-react';

// const AdminPanelComp = () => {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedDateRange, setSelectedDateRange] = useState('today');

//   // Sample data
//   const dashboardStats = {
//     totalVisitors: 245,
//     newBeneficiaries: 89,
//     returningBeneficiaries: 156,
//     departmentStats: [
//       { name: 'Medical', count: 85, color: 'bg-blue-500' },
//       { name: 'Financial Aid', count: 120, color: 'bg-green-500' },
//       { name: 'Education', count: 40, color: 'bg-purple-500' },
//     ]
//   };

//   const sampleUsers = [
//     { id: 1, name: 'Ahmed Ali', role: 'Receptionist', email: 'ahmed@saylani.org', status: 'Active' },
//     { id: 2, name: 'Fatima Khan', role: 'Department Staff', email: 'fatima@saylani.org', status: 'Active' },
//     { id: 3, name: 'Muhammad Hassan', role: 'Department Staff', email: 'hassan@saylani.org', status: 'Inactive' },
//   ];

//   const sampleBeneficiaries = [
//     { id: 1, cnic: '42101-1234567-1', name: 'Ali Ahmad', phone: '0300-1234567', address: 'Karachi', purpose: 'Medical Aid', status: 'Completed', date: '2024-01-15' },
//     { id: 2, cnic: '42101-2345678-2', name: 'Sara Sheikh', phone: '0321-2345678', address: 'Lahore', purpose: 'Financial Aid', status: 'In Progress', date: '2024-01-14' },
//     { id: 3, cnic: '42101-3456789-3', name: 'Omar Khan', phone: '0333-3456789', address: 'Islamabad', purpose: 'Education', status: 'Pending', date: '2024-01-13' },
//   ];

//   const Sidebar = () => (
//     <div className="bg-white shadow-lg h-full w-64 fixed left-0 top-0 z-10">
//       <div className="p-6 border-b">
//         <h1 className="text-xl font-bold text-gray-800">Saylani Admin</h1>
//         <p className="text-sm text-gray-500">Beneficiary Management</p>
//       </div>

//       <nav className="mt-6">
//         {[
//           { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
//           { id: 'users', label: 'User Management', icon: Users },
//           { id: 'beneficiaries', label: 'Beneficiaries', icon: UserPlus },
//           { id: 'reports', label: 'Reports', icon: FileText },
//           { id: 'settings', label: 'Settings', icon: Settings },
//         ].map((item) => {
//           const Icon = item.icon;
//           return (
//             <button
//               key={item.id}
//               onClick={() => setActiveTab(item.id)}
//               className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 ${activeTab === item.id ? 'bg-blue-50 border-r-2 border-blue-500 text-blue-600' : 'text-gray-600'
//                 }`}
//             >
//               <Icon className="mr-3 h-5 w-5" />
//               {item.label}
//             </button>
//           );
//         })}
//       </nav>
//     </div>
//   );

//   const Dashboard = () => (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
//         <select
//           className="border rounded-lg px-4 py-2"
//           value={selectedDateRange}
//           onChange={(e) => setSelectedDateRange(e.target.value)}
//         >
//           <option value="today">Aaj</option>
//           <option value="week">Is Hafta</option>
//           <option value="month">Is Mahina</option>
//         </select>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-blue-100">Total Visitors</p>
//               <h3 className="text-3xl font-bold">{dashboardStats.totalVisitors}</h3>
//             </div>
//             <Users className="h-12 w-12 text-blue-200" />
//           </div>
//         </div>

//         <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-green-100">Naye Beneficiaries</p>
//               <h3 className="text-3xl font-bold">{dashboardStats.newBeneficiaries}</h3>
//             </div>
//             <UserPlus className="h-12 w-12 text-green-200" />
//           </div>
//         </div>

//         <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-purple-100">Returning</p>
//               <h3 className="text-3xl font-bold">{dashboardStats.returningBeneficiaries}</h3>
//             </div>
//             <BarChart3 className="h-12 w-12 text-purple-200" />
//           </div>
//         </div>
//       </div>

//       {/* Department Stats */}
//       <div className="bg-white rounded-lg shadow p-6">
//         <h3 className="text-lg font-semibold mb-4">Department wise Activity</h3>
//         <div className="space-y-4">
//           {dashboardStats.departmentStats.map((dept) => (
//             <div key={dept.name} className="flex items-center justify-between">
//               <span className="font-medium">{dept.name}</span>
//               <div className="flex items-center space-x-3">
//                 <div className="w-32 bg-gray-200 rounded-full h-2">
//                   <div
//                     className={`h-2 rounded-full ${dept.color}`}
//                     style={{ width: `${(dept.count / 245) * 100}%` }}
//                   ></div>
//                 </div>
//                 <span className="font-semibold">{dept.count}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   const UserManagement = () => (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
//         <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700">
//           <Plus className="h-4 w-4" />
//           <span>Naya User Add Karen</span>
//         </button>
//       </div>

//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <div className="p-4 border-b">
//           <div className="flex space-x-4">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="User search karen..."
//                 className="w-full pl-10 pr-4 py-2 border rounded-lg"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>
//             <button className="border px-4 py-2 rounded-lg flex items-center space-x-2">
//               <Filter className="h-4 w-4" />
//               <span>Filter</span>
//             </button>
//           </div>
//         </div>

//         <table className="w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {sampleUsers.map((user) => (
//               <tr key={user.id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{user.name}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-gray-500">{user.role}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-gray-500">{user.email}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <span className={`px-2 py-1 text-xs rounded-full ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//                     }`}>
//                     {user.status}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   <div className="flex space-x-2">
//                     <button className="text-blue-600 hover:text-blue-900">
//                       <Eye className="h-4 w-4" />
//                     </button>
//                     <button className="text-green-600 hover:text-green-900">
//                       <Edit className="h-4 w-4" />
//                     </button>
//                     <button className="text-red-600 hover:text-red-900">
//                       <Trash2 className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );

//   const BeneficiarySearch = () => (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold text-gray-800">Beneficiary Records</h2>
//         <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700">
//           <Download className="h-4 w-4" />
//           <span>Export Data</span>
//         </button>
//       </div>

//       <div className="bg-white rounded-lg shadow p-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//           <input
//             type="text"
//             placeholder="CNIC se search karen..."
//             className="border rounded-lg px-4 py-2"
//           />
//           <input
//             type="text"
//             placeholder="Phone number..."
//             className="border rounded-lg px-4 py-2"
//           />
//           <input
//             type="text"
//             placeholder="Name se search..."
//             className="border rounded-lg px-4 py-2"
//           />
//         </div>

//         <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mb-6">
//           Search Karen
//         </button>

//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">CNIC</th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Purpose</th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
//                 <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {sampleBeneficiaries.map((beneficiary) => (
//                 <tr key={beneficiary.id} className="hover:bg-gray-50">
//                   <td className="px-4 py-4 text-sm font-mono">{beneficiary.cnic}</td>
//                   <td className="px-4 py-4 text-sm font-medium">{beneficiary.name}</td>
//                   <td className="px-4 py-4 text-sm">
//                     <div className="flex items-center space-x-1">
//                       <Phone className="h-3 w-3" />
//                       <span>{beneficiary.phone}</span>
//                     </div>
//                     <div className="flex items-center space-x-1 text-gray-500">
//                       <MapPin className="h-3 w-3" />
//                       <span>{beneficiary.address}</span>
//                     </div>
//                   </td>
//                   <td className="px-4 py-4 text-sm">{beneficiary.purpose}</td>
//                   <td className="px-4 py-4">
//                     <span className={`px-2 py-1 text-xs rounded-full ${beneficiary.status === 'Completed' ? 'bg-green-100 text-green-800' :
//                         beneficiary.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
//                           'bg-gray-100 text-gray-800'
//                       }`}>
//                       {beneficiary.status}
//                     </span>
//                   </td>
//                   <td className="px-4 py-4 text-sm text-gray-500">{beneficiary.date}</td>
//                   <td className="px-4 py-4">
//                     <button className="text-blue-600 hover:text-blue-900 text-sm">
//                       View History
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );

//   const Reports = () => (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-bold text-gray-800">Reports & Analytics</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white rounded-lg shadow p-6">
//           <h3 className="text-lg font-semibold mb-4">Daily Report Generate Karen</h3>
//           <div className="space-y-4">
//             <input type="date" className="w-full border rounded-lg px-4 py-2" />
//             <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
//               Daily Report Download
//             </button>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow p-6">
//           <h3 className="text-lg font-semibold mb-4">Department wise Report</h3>
//           <div className="space-y-4">
//             <select className="w-full border rounded-lg px-4 py-2">
//               <option>All Departments</option>
//               <option>Medical</option>
//               <option>Financial Aid</option>
//               <option>Education</option>
//             </select>
//             <button className="w-full bg-green-600 text-white py-2 rounded-lg">
//               Department Report Download
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const Settings = () => (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-bold text-gray-800">System Settings</h2>

//       <div className="bg-white rounded-lg shadow p-6">
//         <h3 className="text-lg font-semibold mb-4">Dashboard Configuration</h3>
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Default Dashboard View
//             </label>
//             <select className="w-full border rounded-lg px-4 py-2">
//               <option>Daily Stats</option>
//               <option>Weekly Stats</option>
//               <option>Monthly Stats</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Auto Refresh Interval (seconds)
//             </label>
//             <input
//               type="number"
//               className="w-full border rounded-lg px-4 py-2"
//               defaultValue="30"
//             />
//           </div>

//           <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
//             Settings Save Karen
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'dashboard':
//         return <Dashboard />;
//       case 'users':
//         return <UserManagement />;
//       case 'beneficiaries':
//         return <BeneficiarySearch />;
//       case 'reports':
//         return <Reports />;
//       case 'settings':
//         return <Settings />;
//       default:
//         return <Dashboard />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Sidebar />

//       <div className="ml-64">
//         <header className="bg-white shadow-sm border-b px-6 py-4">
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="text-xl font-semibold text-gray-800">
//                 {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
//               </h1>
//               <p className="text-sm text-gray-500">Welcome back, Admin</p>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="relative">
//                 <Calendar className="h-5 w-5 text-gray-400" />
//               </div>
//               <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
//                 A
//               </div>
//             </div>
//           </div>
//         </header>

//         <main className="p-6">
//           {renderContent()}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminPanelComp;