import { toast, ToastOptions } from "react-toastify";

type ToastType = {
	message: string;
	type: 'success' | 'error' | 'warning' | 'info' ;
	options?: ToastOptions;
}

export const triggerToast = ({ message, type, options }: ToastType) => {
	const fixedData: ToastOptions = {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
		style: {
			fontWeight: 'bold',
			fontFamily: "'Roboto', sans-serif"
		},
		...options
	}

	switch (type) {
		case 'success':
			toast.success(message, fixedData)
			break
		case 'error':
			toast.error(message, fixedData)
			break
		case 'warning':
			toast.warning(message, fixedData)
			break
		case 'info':
			toast.info(message, fixedData)
			break
		default:
			throw new Error('Tipo inválido')
	}
}