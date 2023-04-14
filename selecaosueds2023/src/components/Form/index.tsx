import { FormEvent, useState } from 'react'
import './style.scss'
import { textFilter } from '../../utils/textFilter'
import { triggerToast } from '../../utils/triggerToast'
import { publishSuggest } from '../../utils/publishSuggest'

export const Form = () => {
	const [name, setName] = useState('')
	const [suggest, setSuggest] = useState('')

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		if (name.trim() === '') {
			triggerToast({
				message: 'Nome inválido!',
				type: 'warning'
			})

			return
		}

		if (suggest.trim() === '') {
			triggerToast({
				message: 'Comentário inválido!',
				type: 'warning'
			})

			return
		}

		const result = await textFilter(suggest)

		if (!result.approved) {
			triggerToast({
				message: 'Comentário com conteúdo ofensivo!',
				type: 'error'
			})

			return
		}

		const data = {
			name,
			suggest
		}

		publishSuggest(data)

		triggerToast({
			message: 'Comentário publicado com sucesso!',
			type: 'success'
		})
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