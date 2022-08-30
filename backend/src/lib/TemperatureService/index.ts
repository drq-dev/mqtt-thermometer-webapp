import { Sensor } from "../../types/Sensor";

const UPDATE_INTERVAL = 5_000;
/**
 * Simulates a temperature sensor and returns a random temperature
 */
const updateTemperature = (sensor: Sensor): void => {
  const newTemperature =
    Math.random() < 0.75 ? sensor.temperature + 0.1 : sensor.temperature - 0.1;
  sensor.temperature =
    Math.round((newTemperature + Number.EPSILON) * 100) / 100;
};

const startService = (sensors: Sensor[]): void => {
  sensors.forEach((sensor) =>
    setInterval(() => {
      updateTemperature(sensor);
    }, UPDATE_INTERVAL)
  );
};

export { startService };
