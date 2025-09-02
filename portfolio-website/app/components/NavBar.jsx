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
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
