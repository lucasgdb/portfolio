import React from 'react';

export default function Loading() {
	return (
		<div
			className="bg-dark d-flex justify-content-center align-items-center"
			style={{ height: '100vh' }}
		>
			<div className="spinner-border text-light" role="status"></div>
		</div>
	);
}
