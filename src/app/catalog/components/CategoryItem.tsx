import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemsProps {
    category: Category;
}

const CategoryItem = ({category}:CategoryItemsProps) => {
    return ( 
        <Link href={`/category/${category.slug}`}>
            <div className="flex flex-col w-[190px] h-[230px] hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="bg-category-gradient flex justify-center items-center h-[190px] w-full rounded-t-xl">
                <Image 
                    src={category.imageUrl} 
                    alt={category.name} 
                    width={0} 
                    height={0} 
                    sizes="100vw"
                    className="h-auto w-[110px]"
                    style={{
                        objectFit: 'contain'
                    }}
                />
            </div>
            <div className="title bg-accent rounded-b-xl py-4">
                <h3 className="text-center text-sm font-semibold">{category.name}</h3>
            </div>
        </div>
        </Link>
     );
}
 
export default CategoryItem;