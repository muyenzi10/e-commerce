import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { CiMenuFries, CiShoppingCart, CiUser } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ToggleMenu = ()=>{
    setMenuOpen((prev)=> !prev)
  }

  return (
    <header className="py-3 bg-white px-4">
      <div className="container flex items-center justify-between">

        {/* LEFT - LOGO */}
        <Link to="/" className="text-[20px] text-[#73a1f8] font-bold">
          shoppier
        </Link>

        {/* CENTER - NAV */}
        <div>
          <Nav />
        </div>

        {/* RIGHT - ICONS */}
        <div className="flex items-center gap-4 text-[20px]">
         {!menuOpen &&(
           <CiMenuFries
            className="cursor-pointer xl:hidden text-2xl" onClick={ToggleMenu}
          />
         )

         }
          <IoMdSearch className="cursor-pointer" />

          <CiShoppingCart className="cursor-pointer" />
          <CiUser className="cursor-pointer"
          />
          

        </div>

      </div>
    </header>
  );
};

export default Header;