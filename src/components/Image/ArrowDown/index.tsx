import React from 'react';

const ArrowDown = () => (
	<svg
		width="40"
		height="40"
		viewBox="0 0 16 16"
		className="bi bi-arrow-down-circle-fill text-light position-absolute hover-up"
		style={{
			bottom: 25,
			left: '50%',
			transform: 'translateX(-50%)',
		}}
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fillRule="evenodd"
			d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 5a.5.5 0 0 0-1 0v4.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V5z"
		/>
	</svg>
);

export default ArrowDown;