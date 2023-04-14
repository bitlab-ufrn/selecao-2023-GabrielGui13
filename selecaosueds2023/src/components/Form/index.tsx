import { FormEvent, useState } from 'react'
import './style.scss'
import { suggestFilter } from '../../utils/suggestFilter'

export const Form = () => {
	const [name, setName] = useState('')
	const [suggest, setSuggest] = useState('')

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()

		const data = {
			name: name,
			suggest: suggest
		}

		suggestFilter('teste')

		console.log(data)
	}
	
	return (
		<div id="form">
			<form id="form-wrapper" onSubmit={handleSubmit}>
				<label htmlFor="name-input">Apelido do Github</label>	
				<input type="text" id="name-input" value={name} onChange={(e) => setName(e.target.value)} />

				<label htmlFor="suggest-textarea">Comentário</label>	
				<textarea name="suggest-textarea" id="suggest-textarea" value={suggest} onChange={(e) => setSuggest(e.target.value)} />

				<div id="form-button">
					<button type="submit">ENVIAR</button>
				</div>
			</form>
		</div>
	)
}