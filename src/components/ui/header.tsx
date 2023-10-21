import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import Authenticator from "../authenticator";
import Profile from "../profile";

const Header = () => {

    return (  
        <Card className="flex justify-between p-[1.875rem] items-center">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant={"outline"} size={"default"}>
                        <MenuIcon />
                    </Button>
                </SheetTrigger>

                <SheetContent side={"left"}>
                    <SheetHeader className="font-semibold text-left text-lg">
                        Menu
                    </SheetHeader>

                    <Profile />

                    <div className="mt-2 flex flex-col gap-2">
                        <Authenticator />
                        
                        <Button variant={"outline"} className="flex gap-2 w-full justify-start">
                            <HomeIcon size={16} /> Início
                        </Button>

                        <Button variant={"outline"} className="flex gap-2 w-full justify-start">
                            <PercentIcon size={16} /> Ofertas
                        </Button>

                        <Button variant={"outline"} className="flex gap-2 w-full justify-start">
                            <ListOrderedIcon size={16} /> Catálogo
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>

            <h1 className="font-semibold text-lg"><span className="text-primary">FSW</span> Store</h1>

            <Button variant={"outline"} size={"default"}>
                <ShoppingCartIcon />
            </Button>
        </Card>
    );
}
 
export default Header;