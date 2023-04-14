import { v4 as uuid } from 'uuid'
import { SuggestType } from '../components/types/localTypes';

type CommentData = {
	name: string;
	suggest: string;
}

export const publishSuggest = ({ name, suggest }: CommentData) => {
	const suggests = localStorage.getItem('suggests')
	const parsedSuggests = JSON.parse(suggests || '')

	const thisDate = new Date(Date.now())
	const day = thisDate.getDate().toString().length === 1 ? `0${thisDate.getDate()}` : thisDate.getDate()
	const month = thisDate.getMonth().toString().length === 1 ? `0${thisDate.getMonth()}` : thisDate.getMonth()
	const year = thisDate.getFullYear()
	const minute = thisDate.getMinutes().toString().length === 1 ? `0${thisDate.getMinutes()}` : thisDate.getMinutes()
	const hour = thisDate.getHours().toString().length === 1 ? `0${thisDate.getHours()}` : thisDate.getHours()

	const createdAt = `${day}/${month}/${year} - ${hour}:${minute}`

	console.log(createdAt)
	
	const data: SuggestType = {
		id: uuid(),
		name,
		suggest,
		avatar: `https://github.com/${name}.png`,
		createdAt
	}

	// parsedSuggests.push(data)

	localStorage.setItem('suggests', JSON.stringify(parsedSuggests))
}