import React from "react";
import DashboardSideBar from "./sidebar";

const Dashboard = ({ children }) => {
    return (
        <div className="dashboard">
            <DashboardSideBar />
            <div className="dashboard_body">{children}</div>
        </div>
    )
}

export default Dashboard;