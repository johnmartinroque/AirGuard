import React from "react";

import AirQualityChart from "../components/AirQualityChart";
import CurrentQuality from "../components/CurrentQuality";
import AirQualityRadarChart from "../components/AirQualityRadarChart";
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
