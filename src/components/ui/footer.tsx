import { Card, CardFooter } from "./card";

const Footer = () => {
    return ( 
        <footer className="footer">
            <Card className="flex items-center justify-start py-[18px] px-[30px]">
                
                <p className="text-sm text-gray-500">© 2023 - Todos os direitos reservados</p>
            </Card>
        </footer>
     );
}
 
export default Footer;