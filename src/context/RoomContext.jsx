import { createContext, useEffect, useState } from "react";
import { roomData } from "../data/data";

export const RoomContext = createContext();

function RoomProvider({ children }) {
  const [rooms, setRooms] = useState(roomData);
  return (
    <RoomContext.Provider value={"room context"}>
      {children}
    </RoomContext.Provider>
  );
}

export default RoomProvider;
