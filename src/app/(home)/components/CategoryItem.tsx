import { CATEGORY_ICON } from "@/app/constants/categoryIcons";
import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategoryItemProps {
    category: Category;
}

const CategoryItem = ({category}: CategoryItemProps) => {
    return (
        <Link href={`/category/${category.slug}`}>
            <Badge variant={"outline"} className="category px-8 py-3 flex gap-2 justify-center items-center rounded-lg hover:cursor-pointer hover:bg-primary">
            {
                CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]
            }
                <span className="text-xs font-bold">
                    {category.name}
                </span>
            </Badge>
        </Link>
    )
}
 
export default CategoryItem;