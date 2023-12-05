
import Banner from "./components/Banner";
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

  const dealsKeyboards = await prismaClient.product.findMany({
    where: {
       category: {
          slug: "keyboards"
        }
    },
    include: {
      category: true
    }
  })

  const dealsHeadphones = await prismaClient.product.findMany({
    where: {
       category: {
          slug: "headphones"
        }
    },
    include: {
      category: true
    }
  })

  return (
    <div className="px-5">
      <Banner src="/images/banner-home-01.png" alt="Até 55% de desconto só esse mês" />
      <Categories />
      <ProductList productName="Ofertas" products={deals}/>

      <Banner src="/images/banner-home-02.png" alt="Até 55% de desconto em mouses!" />
      <ProductList productName="Teclados" products={dealsKeyboards} />

      <Banner src="/images/banner-home-03.png" alt="Até 20% de desconto em fones!" />
      <ProductList productName="Fones" products={dealsHeadphones} />
    </div>
  )
}
