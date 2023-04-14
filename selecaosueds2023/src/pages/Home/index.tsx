import { Form } from "../../components/Form"
import { Header } from "../../components/Header"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import "./style.scss"
import { SuggestBox } from "../../components/SuggestBox";

export const Home = () => {
	const createSuggests = localStorage.getItem('suggests')
	const newWords = localStorage.getItem('words')

	if (!createSuggests) localStorage.setItem('suggests', JSON.stringify([]))
	if (!newWords) localStorage.setItem('words', JSON.stringify([]))

	console.log(createSuggests, newWords)
	
	return (
		<>
			<Header />

			<div className="page-layout">
				<div id="floating-box">
					<h2>Portal de sugestões do IMD</h2>
					<p style={{ marginBottom: '20px' }}>Faça uma sugestão das coisas que o IMD deve melhorar.</p>

					<Form />
					<hr />

					<SuggestBox />
				</div>
			</div>

			<ToastContainer />
		</>
	)
}