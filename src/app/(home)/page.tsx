"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data } = useSession();
  return (
    <div className="p-5">
      <Image 
        src="/images/banner-home-01.png"
        alt="user image"
        width={0} 
        height={0} 
        className="h-auto w-auto"
        sizes="100vw"
        alt="Até 55% de desconto só esse mês!"
      />
    </div>
  )
}
