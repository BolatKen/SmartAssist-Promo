import Image from "next/image";

interface PortfolioCardProps {
  image: string;
  logo: string;
  title: string;
  description: string;
  link: string;
}

export default function PortfolioCard({
  image,
  logo,
  title,
  description,
  link,
}: PortfolioCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative rounded-2xl overflow-hidden shadow-md group aspect-[4/3] transition-transform duration-300 hover:scale-[1.02]"
    >
      {/* Background image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="
  absolute inset-0
  bg-black/60
  md:opacity-0 md:group-hover:opacity-100
  transition-opacity duration-300
" />

      {/* Desktop hover content */}
      <div className="absolute inset-0 hidden md:flex items-center justify-center flex-col text-white text-center px-4 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
        <Image src={logo} alt={title} width={70} height={70} className="mb-4" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>

      {/* Mobile content — always visible */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4 text-white">
        <Image src={logo} alt={title} width={60} height={60} className="mb-2" />
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-xs">{description}</p>
      </div>
    </a>
  );
}