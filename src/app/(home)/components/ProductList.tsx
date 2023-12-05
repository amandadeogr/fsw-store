import ProductItem from "@/components/ui/productItem";
import { ComputedProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";

interface ProductListProps {
    products: Product[];
    productName?: string;
}
const ProductList = ({products, productName}: ProductListProps) => {
    
    return ( 
        <>
            <p className="font-semibold uppercase mb-2">{productName}</p>
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