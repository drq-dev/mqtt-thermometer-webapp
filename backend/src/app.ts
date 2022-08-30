import { Sensor } from "./types/Sensor";
import { startService } from "./lib/TemperatureService";

const sensors: Sensor[] = [
  { topic: "bedroom" },
  { topic: "childs-room" },
  { topic: "work-space" },
  { topic: "living-room" },
];

startService(sensors);
