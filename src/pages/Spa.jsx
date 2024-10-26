import SpaBackground from "../assets/img/spa.jpg";
import { FaClock } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdSmokeFree, MdMenu } from "react-icons/md";

function Spa() {
  return (
    <section>
      <div className="flex flex-col relative justify-center items-center bg-spa bg-cover bg-center h-[560px]">
        <div className="absolute w-full h-full bg-black/70"></div>
        <h1 className="text-6xl font-primary mt-20 text-white z-20">
          Avana Spa
        </h1>
        <p className="text-white text-3xl z-20 mt-4 mb-6 font-tertiary">
          Serving Best Treatments for you!
        </p>
        <button className="btn-primary z-20 text-white font-tertiary uppercase tracking-[3px] btn-lg px-6 py-2 ">
          Reserve Now!
        </button>
      </div>
      <div className="container mx-auto py-24">
        <div className="flex flex-col lg:flex-row h-full">
          <div className="w-full h-full lg:w-[60%] px-6">
            <img
              className="hover:scale-105 transition-all duration-300 w-full"
              src={SpaBackground}
              alt=" "
            />
            <p className="mb-8"></p>
            <div className="mt-12">
              <h3 className="">Avana Spa</h3>
              <p className="mb-12">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                earum veritatis ipsa accusantium animi, quibusdam cupiditate,
                iste expedita odio doloribus quae atque quos nobis totam
                deleniti alias incidunt, quaerat debitis placeat possimus? A
                architecto hic laboriosam nihil, similique quia quaerat.
              </p>
            </div>
          </div>

          <div className="w-full h-full lg:w-[40%] px-6">
            <div className="flex flex-col space-y-4 mb-4">
              <div>
                <h3 className="h3">More Information</h3>
                <p className="mb-6">
                  The spa offers an extensive range of massages, facials, and
                  body treatments. Many visitors praise the spa for its
                  cleanliness, relaxing environment, and exceptional staff, with
                  some mentioning standout therapists like Paula.
                </p>
                <ul className="flex flex-col gap-y-4">
                  <li className="flex items-center gap-x-4">
                    <FaPhoneVolume className="text-accent" />
                    (+6119) 3820 5555 Ext. 7330
                  </li>
                  <li className="flex items-center gap-x-4">
                    <div className="flex self-start py-1 spa-icon">
                      <FaClock className="text-accent" />
                    </div>
                    <div className="flex flex-col">
                      <div className="pb-2">
                        <strong>Senin - Jumat</strong>
                      </div>
                      <div className="pb-3">
                        <p>Lunch : 11.30 - 14.30</p>
                        <p>Dinner : 18.00 - 22.30</p>
                      </div>
                      <div className="pb-2">
                        <strong>
                          Sabtu, Minggu, dan Hari Libur Nasional :{" "}
                        </strong>
                      </div>
                      <div className="pb-2">
                        <p>Lunch : 09.30 - 15.00</p>
                        <p>Dinner : 18.00 - 22.30</p>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-center gap-x-4">
                    <MdSmokeFree className="text-accent" />
                    No Smoking
                  </li>
                </ul>
                <button className="btn-primary uppercase btn-sm px-6 mt-5 mr-3 tracking-[1px] text-white ">
                  Reserve Now
                </button>
                <button className="btn-primary uppercase btn-sm px-6 mt-3 mr-3 tracking-[1px] text-white ">
                  <div className="flex flex-row items-center justify-center gap-x-2">
                    <MdMenu />
                    <div>Menu</div>
                  </div>
                </button>
                <button className="btn-primary uppercase btn-sm px-6 mt-3 mr-3 tracking-[1px] text-white ">
                  <div className="flex flex-row items-center justify-center gap-x-2">
                    <FaPhoneVolume />
                    <div>Call</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Spa;
