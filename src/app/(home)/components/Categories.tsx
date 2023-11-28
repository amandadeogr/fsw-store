import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./CategoryItem";

const Categories = async () => {
    const categories = await prismaClient.category.findMany({});
    return ( 
        <div className="grid grid-cols-2 gap-y-[10px] gap-x-4 pb-[1.875rem]">
            {
                categories.map((category) => (
                    <CategoryItem key={category.id} category={category} />
                ))
            }
        </div>
     );
}
 
export default Categories;