# dutch-dictionary
---------------
1. Install: `npm i dutch-dictionary`
2. Use:
```javascript
const dutchDictionary = require('dutch-dictionary')

const dutchWord = 'lekker'
const result = ducthDictionary.getWord(dutchWord)

console.log(result)
// {
//  word: 'lekker',
//  types: [ 'adjective', 'noun' ],
//  englishTranslation: 'yummy',
//  frequencyRaw: 9973,
//  frequencyPercentage: 0.6151881712139063
//}
```
