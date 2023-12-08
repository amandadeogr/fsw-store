import { Badge } from "./badge";

interface LegendComponentProps {
    icon: any;
    title: string;
}

const LegendComponent = ({icon: Icon, title}: LegendComponentProps) => {
    return ( 
        <Badge variant={"outline"} className="border-primary border-2 gap-2 px-3 py-1 text-[.8rem] uppercase my-6">
            <Icon size={16} />
            {
                title
            }
        </Badge>
     );
}
 
export default LegendComponent;