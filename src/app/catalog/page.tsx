import { Badge } from "@/components/ui/badge";
import { ShapesIcon } from "lucide-react";
import CategoryList from "./components/CategoryList";

const CatalogPage = () => {
    return ( 
        <div className="px-8 py-5">
            <Badge variant={"outline"} className="border-primary border-2 gap-2 px-3 py-1 text-base uppercase my-6">
                <ShapesIcon size={16} />
                Catálogo
            </Badge>
            <CategoryList />
        </div>
     );
}
 
export default CatalogPage;