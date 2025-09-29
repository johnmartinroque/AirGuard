import React from "react";
import ServerStatus from "../components/ServerStatus";
import AirQualityChart from "../components/AirQualityChart";

function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl">Home</h1>
      <ServerStatus />
      <AirQualityChart />
    </div>
  );
}

export default Home;
