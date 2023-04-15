import { Suggest } from '../Suggest'
import { SuggestType } from '../../types/localTypes'
import './style.scss'
import { useEffect, useState } from 'react'

type SuggestBoxProps = {
	suggests: SuggestType[];
	handleRemoveSuggest: (id: string) => void;
}

export const SuggestBox = ({ suggests, handleRemoveSuggest }: SuggestBoxProps) => {
	return (
		<div id="suggest-box">
			<h3>Comentários</h3>

			<div id="suggests">
				{suggests.map((suggest: SuggestType) => <Suggest {...suggest} handleRemoveSuggest={(id: string) => handleRemoveSuggest(id)} />)}

				{suggests.length == 0 && (
					<p style={{ opacity: '0.2' }}>Não foram encontrados comentários</p>
				)}
			</div>
		</div>
	)
}