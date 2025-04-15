"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Dropdown() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="md:hidden w-fit relative">
      <GiHamburgerMenu onClick={() => setShow(!show)} />
      <AnimatePresence>
        {show &&
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className="text-sm absolute flex flex-col left-[-60px] top-8 p-2 bg-primary text-center rounded-b-xl">
            <Link href="/notifications">Notifications</Link>
            <Link href="/inventory">Inventory</Link>
            <Link href="/about">About</Link>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}
