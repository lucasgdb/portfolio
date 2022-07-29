type IconProps = {
  image: string;
  alt: string;
  link: string;
  additionalClass?: string;
};

export default function Icon({ image, alt, link, additionalClass = '' }: IconProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" title={alt}>
      <img className={`${additionalClass} icon-hover-up`} src={image} alt={alt} width={25} />
    </a>
  );
}
