import { prismaClient } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import { ShapesIcon } from "lucide-react";
import ProductItem from "@/components/ui/productItem";
import { ComputedProductTotalPrice } from "@/helpers/product";
import { CATEGORY_ICON } from "@/app/constants/categoryIcons";

const CategoyProducts = async ({params}: any) => {
    const products = await prismaClient.product.findMany({
        where: {
            category: {
                slug: params.slug
            },
        },
        include: {
            category: true
        }
    });
    return ( 
        <div className="px-8 py-5">
            <Badge variant={"outline"} className="border-primary border-2 gap-2 px-3 py-1 text-base uppercase my-6">
                {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
                {products[0].category.name}
            </Badge>
            <div className="flex flex-wrap gap-8 justify-start mb-4">
                {
                    products.map((product) => {
                        return (
                            <ProductItem 
                                key={product.id}
                                product={ComputedProductTotalPrice(product)}
                            />
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default CategoyProducts;