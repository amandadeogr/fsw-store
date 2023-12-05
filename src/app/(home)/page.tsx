import Image from "next/image";
import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import { prismaClient } from "@/lib/prisma";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0
      }
    }
  })

  return (
    <div className="px-5">
      <Image 
        src="/images/banner-home-01.png"
        width={0} 
        height={0} 
        className="h-auto w-full py-[1.875rem]"
        sizes="100vw"
        alt="Até 55% de desconto só esse mês!"
      />
      <Categories />
      <ProductList products={deals}/>

      <Image 
        src="/images/banner-home-02.png"
        width={0} 
        height={0} 
        className="h-auto w-full py-[1.875rem]"
        sizes="100vw"
        alt="Até 55% de desconto em mouses!"
      />
      
    </div>
  )
}
