import React from "react";

import SensorData from "../components/SensorData";

function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl">Home</h1>
      <SensorData />
      {/* 
      <CurrentQuality />
      <AirQualityChart />
      <AirQualityRadarChart />

     */}
    </div>
  );
}

export default Home;
