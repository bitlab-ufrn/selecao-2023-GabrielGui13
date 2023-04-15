import { BsFillTrashFill } from 'react-icons/bs'
import { SuggestType } from '../../types/localTypes'
import './style.scss'
import { deleteSuggest } from '../../utils/deleteSuggest'
import { triggerToast } from '../../utils/triggerToast'

interface SuggestProps extends SuggestType {
	handleRemoveSuggest: (id: string) => void;
}

export const Suggest = ({ handleRemoveSuggest, ...suggest }: SuggestProps) => {
	const handleDeleteSuggest = (id: string) => {
		const deletedSuggest = deleteSuggest(id)

		if (!deletedSuggest) {
			triggerToast({
				message: 'Ocorreu um erro ao deletar o comentário!',
				type: 'error'
			})

			return
		}
		
		handleRemoveSuggest(id)
		triggerToast({
			message: 'Comentário deletado com sucesso!',
			type: 'success'
		})
	}

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
					<BsFillTrashFill 
						style={{
							color: '#08357e',
							cursor: 'pointer',
						}}
						onClick={() => handleDeleteSuggest(suggest.id)}
					/>
				</div>
			</div>
			<p id='suggest-text'>{suggest.suggest}</p>
			<div id='suggest-date'>
				<small>{suggest.createdAt}</small>
			</div>
		</div>
	)
}