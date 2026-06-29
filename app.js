/*-------------------------------- Pseudocode --------------------------------*/



/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
// I need to create a list of words, to compare the
// current word the user trying to guess and the actual word
let wordList = ['apple', 'orange', 'banana', 'mango', 'watermelon', 'grape', 'cherry', 'Strawberry']
let guessedWord = [] // maybe I need to define it inside a specific function to avoid saving globally
let secretWord = ['apple'] //[randomWord(wordList)] // this variable saves the result of the randomWord() and it saves it specifically in an array, so it can be compared later on
let pressedKey = []
let correctLetter = false
let playing = false
let winner = false
// let allKeboardKeys = []


/*------------------------ Cached Element References ------------------------*/
const lettersBtns = document.querySelectorAll('.letters')


// This brings the keyboard letters from the html page
// We use forEach to iterate in all the letters that are in "letters" class
// Then we add an event listner to see and save which letter the user have clicked

 
lettersBtns.forEach(function(button){
button.addEventListener('click', function(event){
        // console.log(bevent.target.textContent)
        guessedWord.push(button.textContent)
        // if (pressedKey[0] === secretWord[0][0]) {
        //     pressedKey.push(event.target.textContent)
        //     console.log(guessedWord[0])
        // }
                // console.log(guessedWord[4])
console.log(guessedWord)

    })
})

console.log(secretWord[0][0])



/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
// The randomWord function is simply picking one random words from the array list,
// which will be usefuel if I decided to use multiple types of lists,
// e.g. food list, cars, countries, etc.
// Where I only need to add the list name 
// and the function will give me a random item from the list,
// which is a word
function randomWord(listName){
    let randomIndex = Math.floor(Math.random() * listName.length)
    return listName[randomIndex]
// the randomIndex variables saves a radnom index, which will be used to pick a random number for the word's list
// after generating the random number and saving it inside "randomIndex" variable we are just using it with the array to pick a random word
// it is like we are typing wordList[0] (for example the result is "Mango"), instead of a fixed number now the random function will change this to different numbers for example (wordList[2], which will give "banana")
}
// console.log(randomWord(wordList))




// I made a crucial logical error, where I wanted to check if the gussedWord array content is identical to the content of a specific random word, if it is I want it to print the letters of the gussedWord, however here I have added the randomWord function inside the loop itself, so, assuming the random word at first iteration is "apple" in the second iteration when the loop runs again the word will be already changed, since it is not saved, it is just calling the function each time I run the loop, for example, it might pick another word from the array list like "mango"

// for (let i =0; i<secretWord.length;i++)
// {
//     for (let j=0; j<secretWord[i].length; j++)
//         if (secretWord[i][j]=== pressedKey[0])
//         guessedWord.push(pressedKey[i])
//         console.log(guessedWord[i])

// }

// for (let i = 0; guessedWord.length; i++){
//     for (let j=0; j<guessedWord[i].length; j++)
//     {
//         // console.log(guessedWord[i])
//         console.log(savedWord[i][j])
        
//         }
//         // guessedWord[i].push(j)
//     }


// // WORKING 
// lettersBtns.forEach(function(button){
// button.addEventListener('click', function(event){
//         // console.log(bevent.target.textContent)
//         guessedWord.push(button.textContent)
//         // if (pressedKey[0] === secretWord[0][0]) {
//         //     pressedKey.push(event.target.textContent)
//         //     console.log(guessedWord[0])
//         // }
//                 // console.log(guessedWord[4])
// console.log(guessedWord)

//     })
// })

// console.log(secretWord[0][0])