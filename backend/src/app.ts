import { Sensor } from "./types/Sensor";
import { startService } from "./lib/TemperatureService";

const sensors: Sensor[] = [
  { topic: "bedroom", temperature: 24 },
  { topic: "childs-room", temperature: 24 },
  { topic: "work-space", temperature: 24 },
  { topic: "living-room", temperature: 24 },
];

startService(sensors);
