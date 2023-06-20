import React from "react";
import Image from "next/image";
import "./Nav.css";
export default function Nav() {
  return (
    <div className="nav">
      <Image
        src="/yourphotos-logo-black.png"
        alt="My Logo"
        width={150}
        height={30}
      />
    </div>
  );
}
