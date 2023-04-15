import { FormEvent, useState } from 'react'
import './style.scss'
import { textFilter } from '../../utils/textFilter'
import { triggerToast } from '../../utils/triggerToast'
import { publishSuggest } from '../../utils/publishSuggest'
import { SuggestType } from '../../types/localTypes'

type FormProps = {
	handleAddNewSuggest: (suggest: SuggestType) => void;
}

export const Form = ({ handleAddNewSuggest }: FormProps) => {
	const [name, setName] = useState('')
	const [suggest, setSuggest] = useState('')
	const [badWords, setBadWords] = useState<string[]>([])

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

			setBadWords(result.foundWords)

			return
		}

		const data = {
			name,
			suggest
		}

		const newSuggest = publishSuggest(data)
		
		handleAddNewSuggest(newSuggest)
		setBadWords([])
		setName('')
		setSuggest('')

		triggerToast({
			message: 'Comentário publicado com sucesso!',
			type: 'success'
		})
	}
	
	return (
		<div id="form">
			<form id="form-wrapper" onSubmit={handleSubmit}>
				<label htmlFor="form-name-input">Apelido do Github</label>	
				<input type="text" id="form-name-input" value={name} onChange={(e) => setName(e.target.value)} />

				<label htmlFor="form-suggest-textarea">Comentário</label>	
				<textarea name="form-suggest-textarea" id="form-suggest-textarea" value={suggest} onChange={(e) => setSuggest(e.target.value)} />

				<div id="form-bad-words" style={{ display: badWords.length == 0 ? 'none' : 'inline-block' }}>
					<small>
						Conteúdo ofensivo detectado: {' '}
						{badWords.map((badWord) => (
							<span>{`[${badWord}] `}</span>
						))}
					</small>
				</div>

				<div id="form-button">
					<button type="submit">ENVIAR</button>
				</div>
			</form>
		</div>
	)
}