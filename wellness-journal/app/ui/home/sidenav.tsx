import Image from "next/image";

import NavLinks from "./nav-links";
import profile from '../../public/headshot.jpg';
import { lusitana } from "../fonts";

export default function SideNav() {
  return (
    <div className="bg-zinc-200 h-screen w-64">
      <div className="flex p-3">
        <Image
          src={profile}
          width={70}
          height={70}
          alt="headshot"
          className="rounded-full p-1"
        />
        <div className={`${lusitana.className} pl-2 pt-2`}>
          <p className="font-bold text-xl">Tinh Le</p>
          <p className="text-gray-500">Mushy</p>
        </div>
      </div>
      <NavLinks />
  </div>
  )
}