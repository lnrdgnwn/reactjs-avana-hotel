import { useContext } from "react";
import { useParams } from "react-router-dom";

import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from '../components/KidsDropdown'
import CheckIn from '../components/CheckIn'
import CheckOut from '../components/CheckOut'

import ScrollToTop from '../components/ScrollToTop';

import { RoomContext } from "../context/RoomProvider";
import { FaCheck } from "react-icons/fa";

function RoomDetails() {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();

  const room = rooms.find(room => {
    return room.id === Number(id)
  });

  const { name, description, facilities, imageLg, price } = room;

  return (
    <section>
      <div className="flex relative justify-center items-center bg-room bg-cover bg-center h-[560px]">
        <div className="absolute w-full h-full bg-black/70"></div>
        <h1 className="text-6xl text-white z-20 font-primary text-center">{name} Details</h1>
      </div>
      <div className="container mx-auto py-24">
        <div className="flex flex-col lg:flex-row h-full">
          <div className="w-full h-full lg:w-[60%] px-6">
            <h2 className="h2">{name}</h2>
            <p className="mb-8">{description}</p>
            <img src={imageLg} alt="" />
            <div className="mt-12">
              <h3 className="h3">Room Facilities</h3>
              <p className="mb-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem inventore accusantium rem et itaque? Ipsum, rem perspiciatis!
              </p>
              <div className="grid grid-cols-2 gap-6 mb-12">
                {facilities.map((item, index) => {
                  const { name, icon } = item;
                  return (
                    <div className="flex items-center gap-x-3 flex-1" key={index}>
                      <div className="text-3xl text-accent">{icon}</div>
                      <div className="text-base text-accent">{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-full h-full lg:w-[40%] px-6">
            <div className="py-8 px-6 bg-accent/20 mb-12">
              <div className="flex flex-col space-y-4 mb-4">
                <h3>Your Reservation</h3>
                <div className="h-[60px]">
                  <CheckIn />
                </div>
                <div className="h-[60px]">
                  <CheckOut />
                </div>
                <div className="h-[60px]">
                  <AdultsDropdown />
                </div>
                <div className="h-[60px]">
                  <KidsDropdown />
                </div>
                <button className="btn-lg font-tertiary uppercase text-white text-[18px] btn-primary w-full">Book now for ${price}</button>
              </div>
            </div>
            <div>
              <h3 className="h3">
                Hotel Rules
              </h3>
              <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod obcaecati facilis necessitatibus dolore? Sunt alias laudantium optio doloribus commodi!</p>
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-in: 3:00 PM - 9:00 PM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-Out: 10:30 AM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Pets
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoomDetails;
