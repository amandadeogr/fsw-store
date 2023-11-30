import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
    product: ProductWithTotalPrice;
}

const ProductItem = ({product}: ProductItemProps) => {
    return ( 
        <div className="flex flex-col gap-4 max-w-[156px] hover:cursor-pointer">
            <div className="bg-accent flex justify-center items-center rounded-lg h-[170px] w-[156px] relative">
                <Image 
                   src={product.imageUrls[0]}
                    width={0}
                    height={0}
                    alt={product.name}
                    sizes="100vw"
                    className="h-[90px] w-auto max-w-[80%] hover:scale-125  transition-all duration-300 ease-in-out"
                    style={{
                        objectFit: 'contain'
                    }}
                />
                
                    {product.discountPercentage > 0 && (
                        <Badge className="absolute left-2 top-2 gap-1 px-2 py-[2px]">
                            <ArrowDownIcon size={"14px"}/> {product.discountPercentage}%
                        </Badge>
                    )}
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-sm overflow-hidden text-ellipsis whitespace-nowrap max-w-[156px] pr-2">
                    {product.name}
                </p>
                <div className="flex items-center gap-2 justify-between max-w-[150px]">
                    {
                        product.discountPercentage > 0 ? (
                            <>
                                <p className="font-semibold">
                                    R$ {product.totalPrice.toFixed(2)}
                                </p>
                                <p className="line-through opacity-75 text-xs">
                                    R$ {Number(product.basePrice).toFixed(2)}
                                </p>
                            </>
                        ) :
                         (
                            <p className="font-semibold">
                                R$ {product.basePrice.toFixed(2)}
                            </p>
                        )
                    }
                    
                    
                </div>
            </div>
        </div>
     );
}
 
export default ProductItem;