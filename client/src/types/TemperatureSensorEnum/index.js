const TemperatureSensorEnum = {
  BEDROOM: "BEDROOM",
  CHILDS_ROOM: "CHILDS_ROOM",
  WORKSPACE: "WORKSPACE",
  LIVING_ROOM: "LIVING_ROOM",
};

const getTopic = ({ temperatureSensorEnum }) => {
  switch (temperatureSensorEnum) {
    case TemperatureSensorEnum.BEDROOM:
      return "bedroom";
    case TemperatureSensorEnum.CHILDS_ROOM:
      return "childs-room";
    case TemperatureSensorEnum.WORKSPACE:
      return "workspace";
    case TemperatureSensorEnum.LIVING_ROOM:
      return "living-room";
    default:
      console.log(`Unknown enum: ${temperatureSensorEnum}`);
  }
};

const evalEnum = ({ topic }) => {
  switch (topic) {
    case "bedroom":
      return TemperatureSensorEnum.BEDROOM;
    case "childs-room":
      return TemperatureSensorEnum.CHILDS_ROOM;
    case "workspace":
      return TemperatureSensorEnum.WORKSPACE;
    case "living-room":
      return TemperatureSensorEnum.LIVING_ROOM;
    default:
      console.log(`Unknown topic: ${topic}`);
  }
};

export { TemperatureSensorEnum, getTopic, evalEnum };
