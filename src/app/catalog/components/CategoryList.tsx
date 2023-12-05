import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./CategoryItem";

const CategoryList = async () => {
    const categories = await prismaClient.category.findMany();
    return ( 
        <div className="flex flex-wrap gap-8 justify-start mb-4">
            {
                categories.map((category) => (
                    <CategoryItem key={category.id} category={category} />
                ))
            }
        </div>
     );
}
 
export default CategoryList;