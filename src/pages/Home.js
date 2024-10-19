import React from "react";
import SleepForm from "../components/SleepForm";
import Recommendation from "../components/Recommendation";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <div className="container mx-auto p-8">
        <h1 className="text-5xl font-bold mb-6 text-center">AI Sleep Coach</h1>
        <p className="text-center text-lg mb-10">Improve your sleep with personalized AI recommendations</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <SleepForm />
          <Recommendation />
        </div>
      </div>
    </div>
  );
};

export default Home;
