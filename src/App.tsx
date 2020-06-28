import React from 'react';
import { ReactGenieAnimations } from 'react-genie-styled-components';
import NotificationProvider from '~/contexts/notification.context';
import Routes from '~/routes';
import ServiceWorkerWrapper from './components/ServiceWorkerWrapper';

function App() {
	return (
		<NotificationProvider>
			<ReactGenieAnimations />
			<ServiceWorkerWrapper />

			<Routes />
		</NotificationProvider>
	);
}

export default App;
