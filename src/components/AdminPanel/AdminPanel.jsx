import React, { useState } from 'react';
import {
  Users, UserPlus, BarChart3, FileText, Settings
} from 'lucide-react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const dashboardStats = {
    totalVisitors: 245,
    newBeneficiaries: 89,
    returningBeneficiaries: 156,
    departmentStats: [
      { name: 'Medical', count: 85, color: 'bg-blue-500' },
      { name: 'Financial Aid', count: 120, color: 'bg-green-500' },
      { name: 'Education', count: 40, color: 'bg-purple-500' },
    ],
  };

  const Sidebar = () => (
    <div className="w-64 h-full bg-white shadow-md fixed">
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold">Saylani Admin</h1>
        <p className="text-sm text-gray-500">Beneficiary Management</p>
      </div>
      <nav className="mt-4">
        {[
          { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
          { id: 'users', label: 'User Management', icon: Users },
          { id: 'reports', label: 'Reports', icon: FileText },
          { id: 'settings', label: 'Settings', icon: Settings },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full text-left px-6 py-3 flex items-center hover:bg-gray-100 ${activeTab === item.id ? 'bg-blue-100 text-blue-700' : 'text-gray-700'
                }`}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );

  const Dashboard = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Visitors" value={dashboardStats.totalVisitors} color="from-blue-500 to-blue-600" />
        <StatCard title="New Beneficiaries" value={dashboardStats.newBeneficiaries} color="from-green-500 to-green-600" />
        <StatCard title="Returning Beneficiaries" value={dashboardStats.returningBeneficiaries} color="from-purple-500 to-purple-600" />
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Department-wise Activity</h3>
        <div className="space-y-3">
          {dashboardStats.departmentStats.map((dept) => (
            <div key={dept.name} className="flex justify-between items-center">
              <span>{dept.name}</span>
              <div className="flex items-center space-x-3">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${dept.color}`}
                    style={{ width: `${(dept.count / dashboardStats.totalVisitors) * 100}%` }}
                  ></div>
                </div>
                <span>{dept.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const StatCard = ({ title, value, color }) => (
    <div className={`bg-gradient-to-r ${color} text-white rounded-lg p-6`}>
      <h3 className="text-sm text-blue-100">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );

  const UserManagement = () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      {/* You can map users here using sample data */}
      <p className="text-gray-600">Yahan user list ya add user form aayega.</p>
    </div>
  );

  const Reports = () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reports</h2>
      <p className="text-gray-600">Admin reports fetch & download logic yahan implement hogi.</p>
    </div>
  );

  const Settings = () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <p className="text-gray-600">Admin can manage default dashboard view, auto refresh, etc.</p>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'users': return <UserManagement />;
      case 'reports': return <Reports />;
      case 'settings': return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="ml-64 p-6 w-full">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default AdminPanel;
