"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
   
      <div className="md:hidden fixed top-0 left-0 w-full bg-black text-white p-4 flex justify-between items-center z-50">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text text-fade">
          My Portfolio
        </h1>

        <button onClick={() => setOpen(true)}>
          <FaBars size={28} />
        </button>
      </div>


      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        ></div>
      )}

      
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-black text-white p-8 flex flex-col justify-between z-40
          transform duration-300 
          ${open ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0
        `}
      >
        
        <button 
          onClick={() => setOpen(false)} 
          className="md:hidden absolute top-4 right-4 text-white"
        >
          <FaTimes size={26} />
        </button>

        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text text-fade">
          My Portfolio
        </h1>

        
        <ul className="space-y-6 mt-10">
         
          <li onClick={() => setOpen(false)} className="text-sm font-semibold text-orange-400"><Link href="/">HOME</Link></li>
          <li onClick={() => setOpen(false)} className="text-sm text-orange-400"><Link href="/skills">SKILLS</Link></li>
          <li onClick={() => setOpen(false)} className="text-sm text-orange-400"><Link href="/projects">PROJECTS</Link></li>
          <li onClick={() => setOpen(false)} className="text-sm text-orange-400"><Link href="/experience">EXPERIENCE</Link></li>
          <li onClick={() => setOpen(false)} className="text-sm text-orange-400"><Link href="/contact">CONTACT</Link></li>
          <li onClick={() => setOpen(false)} className="text-sm text-orange-400"><Link href="/about">ABOUT</Link></li>
        </ul>

        
        <div className="flex gap-2 mt-6">
          <a href="https://www.facebook.com/" target="_blank" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-blue-600 hover:text-white transition">
            <FaFacebookF />
          </a>
          <a className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-pink-600 hover:text-white transition">
            <FaInstagram />
          </a>
          <a className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-blue-600 hover:text-white transition">
            <FaTelegramPlane />
          </a>
          <a href="https://github.com/manishevdt" target="_blank "className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-900 hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/manish-rathore-267841355?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank"className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-blue-700 hover:text-white transition">
            <FaLinkedin />
          </a>
        </div>

    
        <p className="text-[11px] text-gray-400 mt-6">
          Copyright ©2025 Manish Kumar Rathore.
        </p>
      </div>
    </>
  );
}
