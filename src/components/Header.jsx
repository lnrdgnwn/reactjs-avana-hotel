import { useState } from "react";


function Header() {
  const [header, setHeader] = useState(false);

  return (
    <header
      className={`${
        header ? `bg-white py-6 shadow-lg` : `bg-transparent py-8`
      } fixed z-50 w-full transition-all duration-500`}


    ></header>
  );
}

export default Header;
