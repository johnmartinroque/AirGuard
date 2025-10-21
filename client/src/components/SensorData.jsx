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
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching realtime sensor data:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Skeleton loader component
  const SkeletonRow = () => (
    <tr className="animate-pulse">
      <td className="border border-gray-200 dark:border-slate-700 px-4 py-3">
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-32"></div>
      </td>
      <td className="border border-gray-200 dark:border-slate-700 px-4 py-3">
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-16"></div>
      </td>
      <td className="border border-gray-200 dark:border-slate-700 px-4 py-3">
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-20"></div>
      </td>
    </tr>
  );

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6 flex items-center justify-center gap-3">
        <div className="p-2 bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-blue-600 dark:text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Latest Sensor Readings
        </h2>
      </div>

      {/* Live indicator */}
      {!loading && sensorData.length > 0 && (
        <div className="mb-4 flex items-center justify-center gap-2 text-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-gray-600 dark:text-gray-300 font-medium">
            Live Data
          </span>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-slate-700 shadow-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-teal-500 text-white">
              <th className="border-b border-blue-400 px-4 py-3 text-left font-semibold">
                Timestamp
              </th>
              <th className="border-b border-blue-400 px-4 py-3 text-left font-semibold">
                MQ-2 Level
              </th>
              <th className="border-b border-blue-400 px-4 py-3 text-left font-semibold">
                Torch Detected
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-800">
            {loading ? (
              // Show skeleton rows while loading
              <>
                <SkeletonRow />
                <SkeletonRow />
                <SkeletonRow />
                <SkeletonRow />
                <SkeletonRow />
              </>
            ) : sensorData.length === 0 ? (
              // No data message
              <tr>
                <td
                  colSpan="3"
                  className="border border-gray-200 dark:border-slate-700 px-4 py-8 text-center"
                >
                  <div className="flex flex-col items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-gray-400 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">
                      No sensor data available
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              // Data rows
              sensorData.map((data, index) => (
                <tr
                  key={data.id}
                  className={`transition-colors hover:bg-blue-50 dark:hover:bg-slate-700 ${
                    index % 2 === 0
                      ? "bg-gray-50 dark:bg-slate-800/50"
                      : "bg-white dark:bg-slate-800"
                  }`}
                >
                  <td className="border border-gray-200 dark:border-slate-700 px-4 py-3 text-gray-700 dark:text-gray-300">
                    {data.timestamp
                      ? new Date(data.timestamp).toLocaleString()
                      : "N/A"}
                  </td>
                  <td className="border border-gray-200 dark:border-slate-700 px-4 py-3">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                        data.mq2 > 500
                          ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                          : data.mq2 > 300
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                          : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                      }`}
                    >
                      {data.mq2 ?? "N/A"}
                    </span>
                  </td>
                  <td className="border border-gray-200 dark:border-slate-700 px-4 py-3">
                    {data.torchDetected ? (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                        🔥 Yes
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                        ❌ No
                      </span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Info footer */}
      {!loading && sensorData.length > 0 && (
        <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Showing latest {sensorData.length} readings • Updates in real-time
        </div>
      )}
    </div>
  );
}

export default SensorData;
