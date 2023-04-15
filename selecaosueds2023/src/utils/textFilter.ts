import axios from 'axios';

type FilteredTextType = {
	approved: boolean;
	foundWords: string[];
}

export const textFilter = async (text: string): Promise<FilteredTextType> => {
	const getBadWords = await localStorage.getItem('words');
	const badWords: string[] = JSON.parse(getBadWords || '')

	const textWords = text
		.trim()
		.toLowerCase()
		.replace(/[^a-zA-Z0-9 ]/g, ' ')
		.split(' ')
		.filter((word: string) => word.trim() !== '')
		
	const foundBadWords = textWords
		.filter((word: string) => badWords.some((bw: string) => word === bw))

	const finalFoundBadWordsArray = foundBadWords
		.filter((item,index) => foundBadWords.indexOf(item) === index);

	return {
		approved: finalFoundBadWordsArray.length === 0,
		foundWords: finalFoundBadWordsArray
	}
}