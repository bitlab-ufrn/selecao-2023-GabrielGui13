export const removeWord = (word: string): void => {
	const words = localStorage.getItem('words')
	const parsedWords = JSON.parse(words || '')

	const filteredWords = parsedWords.filter((w: string) => w !== word)

	// const wordsArray = [newWord, ...parsedWords]
	// 	.sort()
	// 	.reverse()

	localStorage.setItem('words', JSON.stringify(filteredWords))
}