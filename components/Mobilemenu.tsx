"use client"
import { AlignLeft } from "lucide-react";
import React from "react";
import { useState } from "react";
import SideBar from "./SideBar";

const Mobilemenu = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsSideBarOpen(!isSideBarOpen)} >
        <AlignLeft className="hover:text-darkColor hoverEffect md:hidden" />
      </button>
      <div className="md:hidden">
        <SideBar isOpen={isSideBarOpen} onClose={()=> setIsSideBarOpen(false)}/>
      </div>
    </>
  );
};

export default Mobilemenu;
