import LegendComponent from "@/components/ui/legendComponent";
import ProductItem from "@/components/ui/productItem";
import { ComputedProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { PercentIcon } from "lucide-react";

const Offers = async () => {
    const products = await prismaClient.product.findMany({
        where: {
            discountPercentage: {
                gt: 0
            }
        },
        include: {
            category: true
        }
    })
    return ( 
        <div className="p-5 w-full sm:px-8">
            <LegendComponent icon={PercentIcon} title={"Ofertas"} />
            <div className="flex flex-wrap gap-x-4 gap-y-8">
                {
                    products.map((product) => {
                        return (
                            <ProductItem key={product.id} product={ComputedProductTotalPrice(product)} />
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default Offers;