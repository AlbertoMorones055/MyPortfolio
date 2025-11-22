import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/AM.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* -------- LOGO -------- */}
        <Link to="/" className="p-0 m-0 border-none">
          <motion.img
            src={logo}
            alt="Logo"
            className="h-35 w-24 inline mr-2 rounded-xl shadow-lg cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.08,
              rotate: 3,
              boxShadow: "0 8px 32px 0 rgba(99,102,241,0.25)",
            }}
            transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
          />
        </Link>

        {/* -------- MENU DESKTOP -------- */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <Link to="/" className="relative group cursor-pointer">
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link to="/projects" className="relative group cursor-pointer">
              Projects
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link to="/work-together" className="relative group cursor-pointer">
              Work Together
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* -------- BOTÓN HAMBURGUESA (MOBILE) -------- */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* -------- MENU MOBILE -------- */}
      {open && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-gray-900 px-6 pb-6 flex flex-col space-y-6 text-lg font-medium shadow-md"
        >
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <a href="/projects" onClick={() => setOpen(false)}>
              Projects
            </a>
          </li>

          <li>
            <Link to="/work-together" onClick={() => setOpen(false)}>
              Work Together
            </Link>
          </li>
        </motion.ul>
      )}
    </nav>
  );
}
