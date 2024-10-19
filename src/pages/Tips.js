import React from "react";

const Tips = () => {
  const tips = [
    "Stick to a regular sleep schedule, even on weekends.",
    "Create a relaxing bedtime routine to unwind.",
    "Exercise regularly, but not too close to bedtime.",
    "Avoid large meals, caffeine, and alcohol before bed.",
    "Make sure your bedroom is quiet, dark, and cool."
  ];

  return (
    <div className="p-6">
      <h1 className="text-4xl mb-6 text-center">Personalized Sleep Tips</h1>
      <ul className="list-disc ml-6 space-y-4">
        {tips.map((tip, index) => (
          <li key={index} className="text-lg">{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tips;
