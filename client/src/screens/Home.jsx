import React from "react";
import ServerStatus from "../components/ServerStatus";
import AirQualityChart from "../components/AirQualityChart";
import CurrentQuality from "../components/CurrentQuality";
import AirQualityRadarChart from "../components/AirQualityRadarChart";

function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl">Home</h1>
      <CurrentQuality />
      <ServerStatus />
      <AirQualityChart />
      <AirQualityRadarChart />
    </div>
  );
}

export default Home;
