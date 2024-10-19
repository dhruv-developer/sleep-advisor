import React, { useState } from "react";

const Recommendation = () => {
  const [recommendation, setRecommendation] = useState("");

  const fetchRecommendation = async () => {
    // Fake API call simulation
    setRecommendation("Based on your data, we suggest going to bed 1 hour earlier.");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-black">
      <h2 className="text-3xl font-semibold mb-6">Your Sleep Recommendation</h2>
      <p>{recommendation ? recommendation : "Submit your sleep data to get a personalized recommendation."}</p>
      <button
        onClick={fetchRecommendation}
        className="bg-green-500 text-white py-2 px-4 rounded-lg mt-4"
      >
        Fetch Recommendation
      </button>
    </div>
  );
};

export default Recommendation;
