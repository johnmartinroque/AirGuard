import React from "react";
import SensorData from "../components/SensorData";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dashboard Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Air Quality Dashboard
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Real-time sensor readings and environmental monitoring
          </p>
        </div>

        {/* Sensor Data Component */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 sm:p-8">
          <SensorData />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
