import {
  TemperatureSensorEnum,
  evalEnum,
  getTopic,
} from "./types/TemperatureSensorEnum";
import { useEffect, useState } from "react";

import { TemperatureDisplay } from "./components/TemperatureDisplay";
import mqtt from "precompiled-mqtt";

export default function App() {
  const [bedroomTemperature, setBedroomTemperature] = useState("-");
  const [childsRoomTemperature, setChildsRoomTemperature] = useState("-");
  const [workspaceTemperature, setWorkspaceTemperature] = useState("-");
  const [livingRoomTemperature, setLivingRoomTemperature] = useState("-");

  useEffect(() => {
    const client = mqtt.connect("mqtt://test.mosquitto.org:8080");

    client.on("connect", function () {
      Object.values(TemperatureSensorEnum).forEach((temperatureSensorEnum) =>
        client.subscribe(
          getTopic({ temperatureSensorEnum: temperatureSensorEnum })
        )
      );

      client.on("message", async (topic, message) => {
        const temperature = await JSON.parse(message.toString()).temperature;
        switch (evalEnum({ topic: topic })) {
          case TemperatureSensorEnum.BEDROOM:
            setBedroomTemperature(temperature);
            break;
          case TemperatureSensorEnum.CHILDS_ROOM:
            setChildsRoomTemperature(temperature);
            break;
          case TemperatureSensorEnum.LIVING_ROOM:
            setLivingRoomTemperature(temperature);
            break;
          case TemperatureSensorEnum.WORKSPACE:
            setWorkspaceTemperature(temperature);
            break;
          default:
            console.log("Unknown topic");
        }
      });
    });
  }, []);

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 grid place-content-center">
      <main className="grid grid-cols-2 gap-2 sm:gap-5 place-content-center bg-white shadow-xl rounded p-3 sm:p-5">
        <h1 className="grid col-span-2 justify-self-center text-2xl mb-2 sm:mb-0">
          Thermometer App
        </h1>
        <TemperatureDisplay
          heading="Bedroom"
          temperature={bedroomTemperature}
        ></TemperatureDisplay>
        <TemperatureDisplay
          heading="Child's room"
          temperature={childsRoomTemperature}
        ></TemperatureDisplay>
        <TemperatureDisplay
          heading="Workspace"
          temperature={workspaceTemperature}
        ></TemperatureDisplay>
        <TemperatureDisplay
          heading="Living Room"
          temperature={livingRoomTemperature}
        ></TemperatureDisplay>
      </main>
    </div>
  );
}
