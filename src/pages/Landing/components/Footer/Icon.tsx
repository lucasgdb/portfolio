type IconProps = {
  image: string;
  alt: string;
  link: string;
};

export default function Icon({ image, alt, link }: IconProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" title={alt}>
      <img className="mx-1 icon-hover-up" src={image} alt={alt} width={25} />
    </a>
  );
}
