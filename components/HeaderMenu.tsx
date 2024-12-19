import React from "react";
import { headerData } from "@/constants";
import Link from "next/link";

const HeaderMenu = () => {
  return (
    <div className="hidden md:inline-flex w-1/3 center items-center gap-5 text-sm capitalize font-semibold">
      {headerData.map((item) => (
        <Link
          key={item?.title}
          href={item?.path}
          className="hover:text-darkColor hoverEffect relative group"
        >
          {item?.title}
          <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:1/2 group-hover:left-0" />
          <span className="absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:1/2 group-hover:right-0" />
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
