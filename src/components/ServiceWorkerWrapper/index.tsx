import React, { useCallback, useEffect } from 'react';
import { useNotification } from '~/contexts/notification.context';
import * as serviceWorker from '~/serviceWorker';

const ServiceWorkerWrapper: React.FC = () => {
	const { showWarning } = useNotification();
	const [
		waitingWorker,
		setWaitingWorker,
	] = React.useState<ServiceWorker | null>(null);

	const reloadPage = useCallback(() => {
		waitingWorker?.postMessage({ type: 'SKIP_WAITING' });
		window.location.reload(true);
	}, [waitingWorker]);

	const onSWUpdate = useCallback(
		(registration: ServiceWorkerRegistration) => {
			showWarning(
				'Uma nova atualização está disponível. Será atualizado automaticamente.',
				{
					onClose: reloadPage,
				}
			);

			setWaitingWorker(registration.waiting);
		},
		[showWarning, reloadPage]
	);

	useEffect(() => {
		serviceWorker.register({ onUpdate: onSWUpdate });
	}, [onSWUpdate]);

	return null;
};

export default ServiceWorkerWrapper;
