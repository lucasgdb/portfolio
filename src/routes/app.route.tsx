import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Landing = lazy(() => import('~/pages/Landing'));
const Error404 = lazy(() => import('~/pages/Error404'));

export default function AppRoutes() {
	return (
		<Suspense fallback={<div />}>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="*" component={Error404} />
			</Switch>
		</Suspense>
	);
}
