import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Product {
    totalPrice: number;
}

export const ComputedProductTotalPrice = (product: Product):ProductWithTotalPrice => {
    if (product.discountPercentage === 0) {
        return {
            ...product,
            totalPrice: Number(product.basePrice),
        };
    }
    const discountAmount = Number(product.basePrice) * (Number(product.discountPercentage) / 100);

    const totalPrice = Number(product.basePrice) - discountAmount;
    
    return ( 
        {
            ...product,
            totalPrice,
        }
     );
};