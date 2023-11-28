"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <div className="px-5">
      <Image 
        src="/images/banner-home-01.png"
        width={0} 
        height={0} 
        className="h-auto w-auto py-[1.875rem]"
        sizes="100vw"
        alt="Até 55% de desconto só esse mês!"
      />
      <Categories />
    </div>
  )
}
