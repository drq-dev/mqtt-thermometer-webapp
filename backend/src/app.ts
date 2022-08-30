import { Sensor } from "./types/Sensor";
import mqtt from "mqtt";
import { startService } from "./lib/TemperatureService";

const client = mqtt.connect("mqtt://test.mosquitto.org");

const sensors: Sensor[] = [
  { topic: "bedroom", temperature: 24 },
  { topic: "childs-room", temperature: 24 },
  { topic: "work-space", temperature: 24 },
  { topic: "living-room", temperature: 24 },
];

client.on("connect", function () {
  //   sensors.forEach((sensor) =>
  //     client.subscribe(sensor.topic, (error) => {
  //       if (error) console.error(error);
  //     })
  //   );
  startService(sensors, client);
});

// client.on("message", function (topic, message) {
//   console.log(`${topic}: ${JSON.parse(message.toString()).temperature}°`);
// });
