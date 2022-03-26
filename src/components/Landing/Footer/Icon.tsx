type IconProps = {
  image: string;
  alt: string;
  link: string;
  additionalClass?: string;
};

const Icon: React.FC<IconProps> = ({ image, alt, link, additionalClass = '' }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <img className={`${additionalClass} icon-hover-up`} src={image} alt={alt} width={25} />
  </a>
);

export default Icon;
