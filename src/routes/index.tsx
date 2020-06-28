import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app.route';

export default function Routes() {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
}
