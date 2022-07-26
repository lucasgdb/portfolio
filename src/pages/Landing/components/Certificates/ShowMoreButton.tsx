type ShowMoreProps = {
  showMore: boolean;
  setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShowMore = ({ showMore, setShowMore }: ShowMoreProps) => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <button type="button" className="btn btn-danger" onClick={() => setShowMore((oldShowMore) => !oldShowMore)}>
        {showMore ? 'Mostrar menos' : 'Mostrar mais'}
      </button>
    </div>
  );
};

export default ShowMore;
