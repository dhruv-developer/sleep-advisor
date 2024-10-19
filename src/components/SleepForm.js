import React, { useState } from "react";

const SleepForm = ({ onSubmit }) => {
  const [sleepData, setSleepData] = useState({
    sleepHours: "",
    exercise: "",
    diet: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSleepData({ ...sleepData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(sleepData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-black">
      <h2 className="text-3xl font-semibold mb-6">Track Your Sleep</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Sleep Hours:</label>
          <input
            type="number"
            name="sleepHours"
            value={sleepData.sleepHours}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block">Exercise (Yes/No):</label>
          <input
            type="text"
            name="exercise"
            value={sleepData.exercise}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block">Diet (Healthy/Unhealthy):</label>
          <input
            type="text"
            name="diet"
            value={sleepData.diet}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
        >
          Get Recommendation
        </button>
      </form>
    </div>
  );
};

export default SleepForm;
