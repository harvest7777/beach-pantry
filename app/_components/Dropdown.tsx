"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Link from "next/link";

export default function Dropdown() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="md:hidden w-fit relative">
      <GiHamburgerMenu onClick={() => setShow(!show)} />
      {show &&
        <div className="absolute flex flex-col left-[-65px] top-8 p-2 bg-primary text-center">
          <Link href="/notifications">Notifications</Link>
          <Link href="/inventory">Inventory</Link>
          <Link href="/about">About</Link>
        </div>
      }
    </div>
  )
}
