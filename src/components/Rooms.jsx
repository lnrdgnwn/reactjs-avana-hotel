import { useContext } from "react";
import RoomContext from "../context/RoomContext";
import Room from "./Room";

function Rooms() {
  const { rooms } = useContext(RoomContext);
  return (
    <section className="bg-pink-200 py-24">
      <div className="container mx-auto lg:px-0">
        <div>
          {rooms.map((room) => {
            return <Room />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Rooms;
