import { SuggestType } from '../../types/localTypes'
import './style.scss'



export const Suggest = (suggest: SuggestType) => {
	return (
		<div id='suggest'>
			<div id='suggest-superior'>
				<div id='suggest-id'>
					<div id='suggest-img'>
						<img src={suggest.avatar} alt={`Avatar de ${suggest.name}`} />
					</div>
					<p>{suggest.name}</p>
				</div>
				<div>
				</div>
			</div>
			<p id='suggest-text'>{suggest.suggest}</p>
			<div id='suggest-date'>
				<small>{suggest.createdAt}</small>
			</div>
		</div>
	)
}