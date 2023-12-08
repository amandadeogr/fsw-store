import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import Authenticator from "../authenticator";
import Profile from "../profile";
import Link from "next/link";

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
                        
                        <SheetClose asChild>
                            <Link href="/">
                                <Button variant={"outline"} className="flex gap-2 w-full justify-start">
                                    <HomeIcon size={16} /> Início
                                </Button>
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Button variant={"outline"} className="flex gap-2 w-full justify-start">
                                <PercentIcon size={16} /> Ofertas
                            </Button>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href="/catalog">
                                <Button variant={"outline"} className="flex gap-2 w-full justify-start">
                                    <ListOrderedIcon size={16} /> Catálogo
                                </Button>
                            </Link>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
            <Link href="/">
                <h1 className="font-semibold text-lg"><span className="text-primary">FSW</span> Store</h1>
            </Link>

            <Button variant={"outline"} size={"default"}>
                <ShoppingCartIcon />
            </Button>
        </Card>
    );
}
 
export default Header;