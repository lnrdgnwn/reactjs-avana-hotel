import { useState } from "react";

function Footer() {
  const [footer, setFooter] = useState(false);

  return (
    <footer
      className={`${
        footer ? `bg-white py-6 shadow-lg` : `bg-transparent py-8`
      } fixed z-50 w-full transition-all duration-500`}
    ></footer>
  );
}

export default Footer;
