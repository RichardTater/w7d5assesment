
const sumFinder = (arr, num) => {
    let obj = {}
    let diff

    for (let i = 0; i < arr.length; i++) {
        diff = num - arr[i]

        if(obj[diff]){
            return true
        } else {
            obj[arr[i]] = true
        }
    }
    return false
}

let sumFinderResultF = sumFinder([1,2,3],0)
let sumFinderResultT = sumFinder([1,2,3,-2],0)

// console.log(sumFinderResultT)
//runtime belief: O(n^2)
//Sum Zero End

function isUnique(str) {
    let sortedArr = str.split('').sort();
    for(let [i,char] of sortedArr.entries()) {
      if(char === sortedArr[i + 1]) {
        return false
      }
    }
    return true
  }
  
//   console.log(isUnique('adbcd'))
//runtime belief: O(n)


const longWords = ["Penelope", "Johny", "Aubumayang", "Czechoslovakia", "Slovenia"]
const longest = 0;
for (const i = 0; i < longWords.length; i++) {
if (longest < longWords[i].length) {
    longest = longWords[i];
  }
}

console.log(longest)

function isPangram(sentence) {
  const lowerCaseSentence = sentence.toLowerCase()
  
  const uniqueLetters = []
  
  for (let i = 0; i < lowerCaseSentence.length; i++) {
      const currentChar = lowerCaseSentence[i]
      if (currentChar >= 'a' && currentChar <= 'z') {
          if (!uniqueLetters.includes(currentChar)) {
              uniqueLetters.push(currentChar)
      }
    }
  } return uniqueLetters.length === 26


const findLongestWord = (words) => {
  let longestWordLength = 0
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWordLength) {
      longestWordLength = words[i].length
    }
  }
  return longestWordLength
}
console.log(findLongestWord(["hi", "hello"]))
}