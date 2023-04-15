import { Form } from "../../components/Form"
import { Header } from "../../components/Header"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import "./style.scss"
import { SuggestBox } from "../../components/SuggestBox";
import { SuggestType } from "../../types/localTypes";
import { useEffect, useState } from "react";
import { seedBadWords } from "../../utils/seedBadWords";

export const Home = () => {
	const [allSuggests, setAllSuggests] = useState<SuggestType[]>([])
	
	const newWords = localStorage.getItem('words')
	const getSuggests = localStorage.getItem('suggests')

	if (!newWords) seedBadWords()
	if (!getSuggests) localStorage.setItem('suggests', JSON.stringify([]))
	
	useEffect(() => {
		const suggests = localStorage.getItem('suggests')
		const parsedSuggests: SuggestType[] = JSON.parse(suggests || '').reverse()

		setAllSuggests(parsedSuggests)
	}, [])

	const addNewSuggest = (suggest: SuggestType) => {
		setAllSuggests((prev) => [suggest, ...prev])
	}

	const removeSuggest = (id: string) => {
		setAllSuggests((prev) => prev.filter(suggest => suggest.id !== id))
	}
	
	return (
		<>
			<Header />

			<div className="page-layout">
				<div id="floating-box">
					<h2>Portal de sugestões do IMD</h2>
					<p style={{ marginBottom: '20px' }}>Faça uma sugestão das coisas que o IMD deve melhorar.</p>

					<Form handleAddNewSuggest={(suggest) => addNewSuggest(suggest)} />
					<hr />

					<SuggestBox suggests={allSuggests} handleRemoveSuggest={(id) => removeSuggest(id)} />
				</div>
			</div>

			<ToastContainer />
		</>
	)
}