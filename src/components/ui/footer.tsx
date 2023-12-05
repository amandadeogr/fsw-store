import { Card, CardFooter } from "./card";

const Footer = () => {
    return ( 
        <footer className="footer">
            <Card className="flex items-center justify-start py-[18px] px-[30px] bg-accent">
                <p className="text-sm text-gray-500">© 2023 - <span className="font-bold">FSW</span> Todos os direitos reservados</p>
            </Card>
        </footer>
     );
}
 
export default Footer;