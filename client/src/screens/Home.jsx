import React from "react";
import ServerStatus from "../components/ServerStatus";

function Home() {
  return (
    <div>
      <h1 className="text-5xl">Home</h1>
      <ServerStatus />
    </div>
  );
}

export default Home;
