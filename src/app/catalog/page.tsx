import { ShapesIcon } from "lucide-react";
import CategoryList from "./components/CategoryList";
import LegendComponent from "@/components/ui/legendComponent";

const CatalogPage = () => {
    return ( 
        <div className="px-8 py-5">
            <LegendComponent icon={ShapesIcon} title="Catálogo"/>
            <CategoryList />
        </div>
     );
}
 
export default CatalogPage;