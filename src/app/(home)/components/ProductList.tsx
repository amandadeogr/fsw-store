import ProductItem from "@/components/ui/productItem";
import { ComputedProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";

interface ProductListProps {
    products: Product[];
}
const ProductList = ({products}: ProductListProps) => {
    
    return ( 
        <>
            <p className="font-semibold uppercase mb-2">Ofertas</p>
            <div className="flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden pb-8">
                {
                    products.map(product => (
                        <ProductItem key={product.id} product={ComputedProductTotalPrice(product)} />
                    ))
                }
            </div>
        </>
     );
}
 
export default ProductList;