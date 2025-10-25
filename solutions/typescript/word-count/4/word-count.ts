const splitWords = (phrase: string, regex: RegExp) => phrase.toLowerCase().trim().split(regex)

class Words {
    count(phrase: string): Map<String, number> {
        const wordMap = new Map<String, number>()
        const singleSpaceRegex = /\s+/

        splitWords(phrase, singleSpaceRegex).forEach((word: string) => {
            let count = wordMap.get(word)
            wordMap.set(word, count ? ++count : 1)
        })

        return wordMap
    }
}

export default Words