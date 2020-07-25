import React from 'react';

interface IProps {
	showMore: boolean;
	setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShowMore = ({ showMore, setShowMore }: IProps) => (
	<div className="d-flex justify-content-center mt-3">
		<button
			className="btn btn-danger"
			onClick={() => setShowMore((oldShowMore: boolean) => !oldShowMore)}
		>
			{showMore ? 'Mostrar menos' : 'Mostrar mais'}
		</button>
	</div>
);

export default ShowMore;
