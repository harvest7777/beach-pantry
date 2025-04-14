import Link from "next/link"
import Dropdown from "./Dropdown"
export default function Navbar() {
  return (
    <div className="w-full flex justify-between h-16 items-center px-5 bg-primary">
      <Link href="/">Home</Link>
      <div className="md:flex hidden gap-x-5">
        <Link href="/notifications">Notifications</Link>
        <Link href="/inventory">Inventory</Link>
        <Link href="/about">About</Link>
      </div>
      <Dropdown />
    </div>
  )
}
