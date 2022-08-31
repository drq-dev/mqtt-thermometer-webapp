import { Sensor } from "./types/Sensor";
import mqtt from "mqtt";
import { startService } from "./lib/TemperatureService";

const client = mqtt.connect("mqtt://test.mosquitto.org");

const sensors: Sensor[] = [
  { topic: "bedroom", temperature: 23 },
  { topic: "childs-room", temperature: 24 },
  { topic: "workspace", temperature: 25 },
  { topic: "living-room", temperature: 26 },
];

client.on("connect", function () {
  startService(sensors, client);
});
