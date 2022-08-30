import React from "react";

const TemperatureDisplay = ({ id, heading, temperature }) => {
  return (
    <section aria-label={`heading`}>
      <h2>{heading}</h2>
      <div>{`${temperature}°`}</div>
    </section>
  );
};

export { TemperatureDisplay };
