class Words {
    count(phrase: string): Map<String, Number> {
        const wordMap = new Map<String, number>()
        const re = /\s|\n|\t/;

        phrase.toLowerCase().trim().split(re).forEach((word: string) => {
            if(word !== "") {
                let count: number | undefined = wordMap.get(word)
                wordMap.set(word, count ? ++count: 1)
            }
        });

        return wordMap
    }
}

export default Words