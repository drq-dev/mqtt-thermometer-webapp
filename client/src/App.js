import { TemperatureDisplay } from "./components/TemperatureDisplay";

export default function App() {
  return (
    <>
      <h1>Thermometer App</h1>
      <TemperatureDisplay
        heading="Bedroom"
        temperature={26}
      ></TemperatureDisplay>
      <TemperatureDisplay
        heading="Child's room"
        temperature={25}
      ></TemperatureDisplay>
      <TemperatureDisplay
        heading="Workspace"
        temperature={24}
      ></TemperatureDisplay>
      <TemperatureDisplay
        heading="Living Room"
        temperature={27}
      ></TemperatureDisplay>
    </>
  );
}
