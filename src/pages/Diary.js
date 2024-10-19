import React, { useState } from "react";
import SleepForm from "../components/SleepForm";
import SleepChart from "../components/SleepChart";

const Diary = () => {
  const [sleepEntries, setSleepEntries] = useState([]);

  const handleSubmit = (sleepData) => {
    setSleepEntries([sleepData, ...sleepEntries]);
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl mb-6 text-center">Sleep Diary</h1>
      <SleepForm onSubmit={handleSubmit} />
      <h2 className="text-2xl mt-10">Your Sleep Logs</h2>
      <ul className="space-y-4">
        {sleepEntries.map((entry, index) => (
          <li key={index} className="bg-gray-100 p-4 rounded shadow-md">
            <p><strong>Sleep Hours:</strong> {entry.sleepHours}</p>
            <p><strong>Exercise:</strong> {entry.exercise}</p>
            <p><strong>Diet:</strong> {entry.diet}</p>
          </li>
        ))}
      </ul>
      <h2 className="text-2xl mt-10">Sleep Data Analysis</h2>
      <SleepChart data={sleepEntries} />
    </div>
  );
};

export default Diary;
