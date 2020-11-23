import styled from 'styled-components';

const SocialNetworkContainer = styled.div`
  padding-top: 6px;
  padding-bottom: 6px;
`;

type SocialNetworkProps = {
  image: string;
  title: string;
  reference: string;
  link: string;
};

const SocialNetwork: React.FC<SocialNetworkProps> = ({
  image,
  title,
  reference,
  link,
}) => (
  <SocialNetworkContainer className="d-flex flex-column align-items-md-end">
    <div className="d-flex align-items-center">
      <img className="order-md-2" src={image} alt={title} width={30} />{' '}
      <h4 className="text-light mb-0 ml-2 mr-2 order-md-1">{title}</h4>
    </div>

    <a
      className="text-light"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {reference}
    </a>
  </SocialNetworkContainer>
);

export default SocialNetwork;
