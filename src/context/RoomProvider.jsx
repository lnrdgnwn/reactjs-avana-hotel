import { createContext, useState, useEffect } from "react";
import { roomData } from "../data/data";
export const RoomContext = createContext();

function RoomProvider({ children }) {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState('1 Adult');
  const [kids, setKids] = useState('0 Kid');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  });

  const handleClick = (e) => {
    e.preventDefault();
    console.log(total);

    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    })
    setRooms(newRooms);
  }

  return (
    <RoomContext.Provider value={{ rooms, adults, setAdults, kids, setKids, handleClick }}>{children}</RoomContext.Provider>
  );
}

export default RoomProvider;
