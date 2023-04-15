import { Suggest } from '../Suggest'
import { SuggestType } from '../../types/localTypes'
import './style.scss'
import { useEffect, useState } from 'react'

type SuggestBoxProps = {
	suggests: SuggestType[];
}

export const SuggestBox = ({ suggests }: SuggestBoxProps) => {
	return (
		<div id="suggest-box">
			<h3>Comentários</h3>

			<div id="suggests">
				{suggests.map((suggest: SuggestType) => <Suggest {...suggest} />)}
			</div>
		</div>
	)
}