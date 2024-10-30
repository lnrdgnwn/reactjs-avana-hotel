import { FaUser } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

function Contact() {
  return (
    <section>
      <div className="flex flex-col relative justify-center items-center bg-restaurant bg-cover bg-center h-[560px]">
        <div className="absolute w-full h-full bg-black/70"></div>
        <h1 className="text-6xl font-primary mt-20 text-white z-20">
          Contact Us!
        </h1>
        <p className="text-white text-xl z-20 mt-4 mb-6 text-center font-tertiary">
          Contact Us Below!
        </p>
      </div>
      <div className="container mx-auto py-24">
        <div className="flex flex-col h-full">
          <div className="flex flex-col justify-center gap-y-8">
            <h2 className="h2">Contact Us</h2>
            <p className="mt-[-40px] font-tertiary text-xl">
              if you have any suggestions, or any question about our service.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.398902081841!2d104.72953187570131!3d-2.9866654398503303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b753ab6770bcf%3A0xb5eef6859d2c937!2sUniversitas%20Sriwijaya%20-%20Kampus%20Palembang!5e0!3m2!1sid!2sid!4v1723735824775!5m2!1sid!2sid"
              width="100%"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="map"
            />

            <form
              action=""
              method="post"
              className="w-full flex flex-col items-center"
            >
              <div class="w-full flex flex-row items-center jsutify-center px-2 py-6 gap-x-3 border border-spacing-2 border-accent">
                <FaUser></FaUser>
                <input
                  className="w-full focus:outline-none"
                  type="text"
                  name="nama"
                  id="nama"
                  placeholder="Masukkan nama..."
                />
              </div>
              <div class="w-full flex flex-row items-center jsutify-center px-2 py-6 gap-x-3 border border-spacing-2 border-accent">
                <MdMail />
                <input
                  className="w-full focus:outline-none"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Contoh: saya@gmail.com"
                />
              </div>
              <div class="w-full flex flex-row items-center jsutify-center px-2 py-6 gap-x-3 border border-spacing-2 border-accent">
                <FaPhoneVolume />
                <input
                  className="w-full focus:outline-none"
                  type="text"
                  name="number"
                  id="number"
                  placeholder="Masukkan no hp..."
                />
              </div>
              <button
                type="submit"
                className="text-bold font-primary border-2 w-full p-8 border-accent hover:bg-accent hover:text-white hover:shadow-xl hover:transition-all"
              >
                Kirim Pesan!
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
