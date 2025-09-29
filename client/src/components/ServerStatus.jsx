import React, { useEffect, useState } from "react";
import { fetchServerStatus } from "../api/adminApi";

const ServerStatus = () => {
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchServerStatus()
      .then((data) => {
        setStatus(data.message);
      })
      .catch((err) => {
        setError("Failed to fetch admin status");
      });
  }, []);

  return (
    <div>
      <h2>Admin Status Check</h2>
      {status && <p>{status}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ServerStatus;
