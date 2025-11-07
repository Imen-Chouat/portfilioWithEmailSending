import Image from "next/image";

export default function SocialIcon({ platform, url }) {
  const icons = [
        {platform: 'Discord', src: '/icon/Discord.svg', alt: 'Discord Icon',link: 'https://discord.com' },
        {platform: 'GitHub', src: '/icon/GitHub.svg', alt: 'GitHub Icon',link: 'https://github.com' },
        {platform: 'LinkedIn', src: '/icon/LinkedIn.svg', alt: 'LinkedIn Icon',link: 'https://linkedin.com' },
    ] ;
    return (
        <div className="flex flex-col p-2 space-y-4 ">
            {icons.map((icon) => (
                <a key={icon.platform}  href={icon.link} className=" w-8 h-8 fill-white bg-white justify-center items-center p-1.5 rounded-full"  >
                    <Image alt={icon.alt} src={icon.src} width={20} height={20}/>
                </a>
            ))}
        </div>
    );
}               