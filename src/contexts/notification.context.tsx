import React, { createContext, useContext } from 'react';
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface INotificationContext {
	showSuccess(message: string, options?: ToastOptions): void;
	showInfo(message: string, options?: ToastOptions): void;
	showWarning(message: string, options?: ToastOptions): void;
	showError(message: string, options?: ToastOptions): void;
}

interface IProps {
	icon?: React.ComponentType;
}

const Message: React.FC<IProps> = React.memo(({ children, icon: Icon }) => (
	<div className="d-flex align-items-center" style={{ fontFamily: 'Roboto' }}>
		{Icon && (
			<div style={{ marginLeft: 5, marginTop: 3 }}>
				<Icon />
			</div>
		)}
		<p className="mb-1 ml-3 text-dark">{children}</p>
	</div>
));

const showSuccess = (message: string, options?: ToastOptions) =>
	toast.success(<Message>{message}</Message>, options);

const showInfo = (message: string, options?: ToastOptions) =>
	toast.info(<Message>{message}</Message>, options);

const WarningIcon = () => (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 16 16"
		className="bi bi-exclamation-triangle-fill text-danger"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fillRule="evenodd"
			d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 5zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
		/>
	</svg>
);

const showWarning = (message: string, options?: ToastOptions) =>
	toast.warning(<Message icon={WarningIcon}>{message}</Message>, options);

const showError = (message: string, options?: ToastOptions) =>
	toast.error(<Message>{message}</Message>, options);

const NotificationContext = createContext<INotificationContext>({
	showSuccess,
	showInfo,
	showWarning,
	showError,
});

const NotificationProvider: React.FC = ({ children }) => {
	return (
		<NotificationContext.Provider
			value={{
				showSuccess,
				showInfo,
				showWarning,
				showError,
			}}
		>
			{children}
			<ToastContainer />
		</NotificationContext.Provider>
	);
};

export function useNotification() {
	const context = useContext(NotificationContext);

	return context;
}

export default NotificationProvider;
