import React from 'react';
import '../css/Dashboard.css';
import StatCard from './StatusBadge';
import DetailedReport from './DetailedReport';

function Dashboard() {
  const customersData = [
    { id: 1, name: 'Elizabeth Lee', company: 'AvatarSystems', value: '$359', date: '10/07/2023', status: 'New' },
    { id: 2, name: 'Carlos Garcia', company: 'SnoozeShift', value: '$747', date: '24/07/2023', status: 'New' },
    { id: 3, name: 'Elizabeth Bailey', company: 'Prime Time Telecom', value: '$564', date: '08/08/2023', status: 'In-progress' },
    { id: 4, name: 'Ryan Brown', company: 'OmniTech Corporation', value: '$541', date: '31/08/2023', status: 'In-progress' },
    { id: 5, name: 'Ryan Young', company: 'DataStream Inc.', value: '$769', date: '01/05/2023', status: 'Completed' },
    { id: 6, name: 'Hailey Adams', company: 'FlowRush', value: '$922', date: '10/05/2023', status: 'Completed' },
  ];
  
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="header-right">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <span className="search-icon">🔍</span>
          </div>
          <div className="notification-icon">🔔</div>
          <div className="help-icon">❓</div>
          <div className="user-avatar">👤</div>
        </div>
      </div>

      <div className="dashboard-content">
        <h2 className="section-title">
          <span className="overview-icon">📊</span>
          Overview
        </h2>

        <div className="stats-container">
          <StatCard 
            title="Turnover" 
            value="$92,405" 
            change="5.39%" 
            icon="🛒" 
            bgColor="#fff5f7" 
            iconBgColor="#ffe0e6" 
            textColor="#ff6384"
          />
          <StatCard 
            title="Profit" 
            value="$32,218" 
            change="5.39%" 
            icon="💲" 
            bgColor="#f5f9ff" 
            iconBgColor="#e0ecff" 
            textColor="#4b93ff"
          />
          <StatCard 
            title="New customer" 
            value="298" 
            change="6.84%" 
            icon="👥" 
            bgColor="#f5fcff" 
            iconBgColor="#e0f7ff" 
            textColor="#4bcaff"
          />
        </div>

        <DetailedReport customers={customersData} />
      </div>
    </div>
  );
}

export default Dashboard;