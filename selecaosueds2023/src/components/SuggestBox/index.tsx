import { Suggest } from '../Suggest'
import { SuggestType } from '../../types/localTypes'
import './style.scss'

export const SuggestBox = () => {
	const suggests = localStorage.getItem('suggests')
	const parsedSuggests = JSON.parse(suggests || '')

	return (
		<div id="suggest-box">
			<h3>Comentários</h3>

			<div id="suggests">
				{parsedSuggests.map((suggest: SuggestType) => <Suggest {...suggest} />)}
			</div>
		</div>
	)
}