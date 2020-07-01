import React from 'react';
import { ReactGenieAnimations } from 'react-genie-styled-components';
import NotificationProvider from '~/contexts/notification.context';
import Routes from '~/routes';

function App() {
	return (
		<NotificationProvider>
			<ReactGenieAnimations />

			<Routes />
		</NotificationProvider>
	);
}

export default App;
