type IconProps = {
  image: string;
  alt: string;
  link: string;
  additionalClass?: string;
};

const Icon = ({ image, alt, link, additionalClass = '' }: IconProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img className={`${additionalClass} icon-hover-up`} src={image} alt={alt} width={25} />
    </a>
  );
};

export default Icon;
