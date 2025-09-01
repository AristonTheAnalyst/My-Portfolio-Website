import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink';

const navLinks = [
{
    title: "About",
    path: "#about",
},
{
    title: "Projects",
    path: "#projects",
},
{
    title: "Contact",
    path: "#contact",
},

]

const NavBar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link 
          href={"/"} 
          className="text-5xl font-semibold [color:white] hover:text-gray-300"
        >
          LOGO
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar"></div>
        <ul>
            <li>
                <Link href={"#about"}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                About
                </Link>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
