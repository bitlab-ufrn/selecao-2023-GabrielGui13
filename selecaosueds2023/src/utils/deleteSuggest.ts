import { SuggestType } from '../types/localTypes';

export const deleteSuggest = (id: string): boolean => {
	const suggests = localStorage.getItem('suggests')
	const parsedSuggests = JSON.parse(suggests || '')
	
	const findSuggest = parsedSuggests.find((suggest: SuggestType) => suggest.id === id)

	if (!findSuggest) return false

	const filteredSuggests = parsedSuggests.filter((suggest: SuggestType) => suggest.id !== id)

	localStorage.setItem('suggests', JSON.stringify(filteredSuggests))

	return true
}