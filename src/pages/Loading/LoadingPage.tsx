import styled from 'styled-components';

const LoadingContainer = styled.div`
  height: 100vh;
`;

const Loading: React.FC = () => (
  <LoadingContainer className="bg-dark d-flex justify-content-center align-items-center">
    <div className="spinner-border text-light" role="status" />
  </LoadingContainer>
);

export default Loading;
