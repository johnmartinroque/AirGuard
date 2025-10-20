import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

function SensorData() {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "sensorData"),
      orderBy("timestamp", "desc"),
      limit(10)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          mq2: doc.data().mq2,
          torchDetected: doc.data().torchDetected,
          timestamp: doc.data().timestamp, // keep as-is
        }));

        setSensorData(data);
      },
      (error) => {
        console.error("Error fetching realtime sensor data:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        🔍 Latest Sensor Data
      </h2>

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border px-4 py-2">Timestamp</th>
            <th className="border px-4 py-2">MQ-2</th>
            <th className="border px-4 py-2">Torch Detected</th>
          </tr>
        </thead>
        <tbody>
          {sensorData.map((data) => (
            <tr key={data.id} className="text-gray-800">
              <td className="border px-4 py-2">
                {data.timestamp
                  ? new Date(data.timestamp).toLocaleString()
                  : "N/A"}
              </td>
              <td className="border px-4 py-2">{data.mq2 ?? "N/A"}</td>
              <td className="border px-4 py-2">
                {data.torchDetected ? "🔥 Yes" : "❌ No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SensorData;
