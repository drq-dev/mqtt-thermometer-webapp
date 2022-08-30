import { TemperatureDisplay } from "./components/TemperatureDisplay";

export default function App() {
  return (
    <div class="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 grid place-content-center">
      <main class="grid grid-cols-2 gap-2 sm:gap-5 place-content-center bg-white shadow-xl rounded p-3 sm:p-5">
        <h1 className="grid col-span-2 justify-self-center text-2xl mb-2 sm:mb-0">
          Thermometer App
        </h1>
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
      </main>
    </div>
  );
}
