import { createContext, useState } from "react";
import { roomData } from "../data/data";

export const RoomContext = createContext();

function RoomProvider({ children }) {
  const [rooms, setRooms] = useState(roomData);
  console.log(rooms);
  return (
    <RoomContext.Provider value={{ rooms }}>{children}</RoomContext.Provider>
  );
}

export default RoomProvider;
