// DOM Elements

const resultEle = document.getElementById('result')
const lengthEle = document.getElementById('length')
const lowerEle = document.getElementById('lowercase')
const upperEle = document.getElementById('uppercase')
const numbersEle = document.getElementById('numbers')
const symbolsEle = document.getElementById('symbols')
const generateEle = document.getElementById('generate')


const randomfunc = {

    lower: randomlower,
    upper: randomupper,
    number: randomnumber,
    symbol: randomsymbol
}

// Generate Password Function

function generatedPassword(lower, upper, number, symbol, length)
{
 let generatedPassword = ''


 const typescount = lower + upper + number + symbol

 // Spending Too Much Time Learning What Nested Array Is

 const typesarray = [{ lower }, { upper }, { number }, { symbol }].filter
 (
      item=> Object.values(item)[0]
)


console.log ('typesarray', typesarray)

if( typescount === 0) {

    return ''
}


for( let x = 0; x < length; x += typescount) {
    typesarray. forEach(type=>{
        const funcname = Object.keys (type)[0]


        generatedPassword += randomfunc[funcname]()
    })
}
const finalpassword = generatedPassword

return finalpassword
}
// Generate Event Listener

generateEle.addEventListener('click', () => {
    const length = parseInt(lengthEle.value)
    const withLower = lowerEle.checked
    const withUpper = upperEle.checked
    const withNumbers = numbersEle.checked
    const withSybmols = symbolsEle.checked

    resultEle.innerText = generatedPassword(withLower,withUpper,withNumbers,withSybmols, length);
    
})
//  Random Character Types

function randomlower() {

    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function randomupper() {

    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}  

function randomnumber() {
    return String.fromCharCode(Math.floor(Math.random()  * 10) + 48)
}

function randomsymbol() {
const symbols = '!"#$%&()*+,-./:;<=>?'
    return symbols[Math.floor(Math.random() * symbols.length)]
}