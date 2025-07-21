import React, { useState } from 'react';
import { Menu, X, Gamepad } from "lucide-react";

export const Navigation = () => {
  const navLinkClass = 'text-neon-green font-orbitron uppercase tracking-wider text-sm no-underline';

  return (
    <nav className="sticky top-0 border-b bg-cyber-dark/90 backdrop-blur-md border-neon-blue/30 z-50">
      <div >
        <div className="flex items-center  ml-[60px] mb-[10px] mt-[10px] ">
          <div className=" items-center">
            <Gamepad className="w-[40px] h-[40px]  relative top-[5px]" />
            <span className="text-[40px] font-orbitron font-bold neon-text-green ">
              Port<span className="neon-text-blue">folio</span>
            </span>
          </div>

          <div className=" text-[15px]  ml-[50%]  space-x-12 ">
            <a  href="#home" className={`${navLinkClass} mr-[80px] `}>Home</a>
            <a href="#about" className={`${navLinkClass} mr-[80px]`}>About</a>
            <a href="#game" className={navLinkClass}>Game</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
