import axios from 'axios';

export const suggestFilter = async (text: string) => {
	const badWords = await axios.get('https://raw.githubusercontent.com/masterzion/mztg/master/mztg/classified/PT-BR/palavroes.txt')
	const badWordsArray = badWords.data
		.split('\n')
		.map((name: string) => name.replace('\r', '').toLowerCase())

	console.log(badWordsArray)
}