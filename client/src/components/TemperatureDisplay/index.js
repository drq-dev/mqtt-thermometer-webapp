import React from "react";

const TemperatureDisplay = ({ heading, temperature }) => {
  return (
    <section aria-label={`heading`} className="bg-slate-100 rounded p-4">
      <h2 className="text-lg text-center">{heading}</h2>
      <div className="text-center font-bold">{`${temperature}°`}</div>
    </section>
  );
};

export { TemperatureDisplay };
