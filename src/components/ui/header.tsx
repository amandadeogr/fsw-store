import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

const Header = () => {
    return (  
        <Card className="flex justify-between p-[1.875rem] items-center">
            <Button variant={"outline"} size={"default"}>
                <MenuIcon />
            </Button>

            <h1 className="font-semibold text-lg"><span className="text-primary">FSW</span> Store</h1>

            <Button variant={"outline"} size={"default"}>
                <ShoppingCartIcon />
            </Button>
        </Card>
    );
}
 
export default Header;