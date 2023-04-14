import axios from 'axios';

type FilteredTextType = {
	approved: boolean;
	foundWords: string[];
}

export const textFilter = async (text: string): Promise<FilteredTextType> => {
	const badWords = await axios.get('https://raw.githubusercontent.com/masterzion/mztg/master/mztg/classified/PT-BR/palavroes.txt')

	const badWordsArray: string[] = badWords.data
		.split('\n')
		.map((name: string) => name.replace('\r', '').toLowerCase())

	const textWords = text
		.trim()
		.toLowerCase()
		.replace(/[^a-zA-Z0-9 ]/g, '')
		.split(' ')
		.filter((word: string) => word.trim() !== '')
		
	const foundBadWords = textWords.filter((word: string) => badWordsArray.some((bw: string) => word === bw))

	return {
		approved: foundBadWords.length === 0,
		foundWords: foundBadWords
	}
}