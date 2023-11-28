import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import { HeadphonesIcon, KeyboardIcon, MonitorIcon, Mouse, MouseIcon, SpeakerIcon, SquareIcon } from "lucide-react";

interface CategoryItemProps {
    category: Category;
}

const CategoryItem = ({category}: CategoryItemProps) => {
    const categoryIcon = {
        keyboards: <KeyboardIcon  size={"30px"}/>,
        monitors: <MonitorIcon  size={"30px"}/>,
        mouses: <MouseIcon  size={"30px"}/>,
        speakers: <SpeakerIcon  size={"30px"}/>,
        mousepads: <SquareIcon  size={"30px"}/>,
        headphones: <HeadphonesIcon size={"30px"}/>,

    }
    return ( <div>
        <Badge variant={"outline"} className="px-8 py-3 flex gap-2 justify-center items-center rounded-lg">
            {
                categoryIcon[category.slug as keyof typeof categoryIcon]
            }
            <span className="text-xs font-bold">
                {category.name}
            </span>
        </Badge>
    </div> );
}
 
export default CategoryItem;