import axios from "axios"

export const seedBadWords = async () => {
	const badWords = await axios.get('https://raw.githubusercontent.com/masterzion/mztg/master/mztg/classified/PT-BR/palavroes.txt')

	const badWordsArray: string[] = badWords.data
		.split('\n')
		.map((name: string) => name.replace('\r', '').toLowerCase())
		.filter((name: string) => name.trim() !== '')
		.reverse()

	localStorage.setItem('words', JSON.stringify(badWordsArray))
}