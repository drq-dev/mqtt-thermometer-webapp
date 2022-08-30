import { Sensor } from "../../types/Sensor";

const getTemperature = () => {};

const startService = (sensors: Sensor[]): void => {
  console.log(sensors.map((sensor) => sensor.topic));
};

export { startService };
