const fs = require('fs')

const databaseRaw = fs.readFileSync('./database.json', 'utf-8')
const database = JSON.parse(databaseRaw)
const MAX_FREQUENCY = 1621130;



const getWord = (word) => {
    const wordToFind = word.toLowerCase()
    const foundWord = database.find((item) => item.word === wordToFind)
    if(foundWord) {
        return {
            word: foundWord.word,
            types: Array.from(new Set(foundWord.types.split(';'))),
            englishTranslation: foundWord.translate.toLowerCase(),
            frequencyRaw: foundWord.count,
            frequencyPercentage: foundWord.count * 100 / MAX_FREQUENCY
        }
    }
}

const getDatabase = () => database

module.exports = { getWord, getDatabase }