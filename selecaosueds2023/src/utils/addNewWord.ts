export const addNewWord = (newWord: string): boolean => {
	const words = localStorage.getItem('words')
	const parsedWords = JSON.parse(words || '')

	const findWord = parsedWords.find((word: string) => word === newWord)

	if (findWord) return false

	const wordsArray = [newWord, ...parsedWords]
		.sort()
		.reverse()

	localStorage.setItem('words', JSON.stringify(wordsArray))

	return true
}