type ShowMoreProps = {
  showMore: boolean;
  onClick(): void;
};

const ToggleButton = ({ showMore, onClick }: ShowMoreProps) => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <button type="button" className="btn btn-danger" onClick={onClick}>
        {showMore ? 'Mostrar menos' : 'Mostrar mais'}
      </button>
    </div>
  );
};

export default ToggleButton;
