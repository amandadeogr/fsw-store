import Image from "next/image";
interface BannerProps {
    src: string;
    alt: string;

}
const Banner = ({src, alt}: BannerProps) => {
    return ( 
        <Image 
            src={src}
            width={0} 
            height={0} 
            className="h-auto w-full py-[1.875rem]"
            sizes="100vw"
            alt={alt}
        />
     );
}
 
export default Banner;