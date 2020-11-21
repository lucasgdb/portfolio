import React from 'react';

type ShowMoreProps = {
  showMore: boolean;
  setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShowMore: React.FC<ShowMoreProps> = ({ showMore, setShowMore }) => (
  <div className="d-flex justify-content-center mt-3">
    <button
      type="button"
      className="btn btn-danger"
      onClick={() => setShowMore((oldShowMore: boolean) => !oldShowMore)}
    >
      {showMore ? 'Mostrar menos' : 'Mostrar mais'}
    </button>
  </div>
);

export default ShowMore;
