import { useState } from "react";
import LogoWhite from '../assets/img/Avana-logo-white.png';

function Footer() {
  const [footer, setFooter] = useState(false);

  return (
    <footer className='bg-primary py-12'>
      <div className="container mx-auto text-white flex justify-between">
        <a href="/">
          <img className="w-[160px]" src={LogoWhite} alt="" />
        </a>
        <div className="text-center my-auto">
          Copyright &copy; 2024. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
