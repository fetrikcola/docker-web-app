import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then((data) => setStats(data.stats))
      .catch((err) => console.error("Error fetching dashboard data:", err));
  }, []);

  return (
    <div className="dashboard">
      <h2>📊 Dashboard</h2>
      {stats ? (
        <ul>
          <li>Total Users: {stats.totalUsers}</li>
          <li>Total Posts: {stats.totalPosts}</li>
          <li>Total API Requests: {stats.totalRequests}</li>
          <li>Server Uptime: {Math.round(stats.serverUptime)}s</li>
        </ul>
      ) : (
        <p>Loading dashboard data...</p>
      )}
    </div>
  );
};

export default Dashboard;
