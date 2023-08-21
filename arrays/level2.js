let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let word = text.replace(/[.,']/g, "")
let words =word.split(' ')
console.log(words)
console.log(words.length)


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('Meat')
shoppingCart.push('sugar')

console.log(shoppingCart)

shoppingCart.splice(4,1)

console.log(shoppingCart)

shoppingCart[3]='GreenTea'

console.log(shoppingCart)

let countries = ['india','america','australia','russia']
const z= countries.includes('ethiopia')
if(z === true){
    console.log('ethiopia')
} else{
    console.log(countries.push('ethiopia'))
    console.log(countries)
}

let webTechs =['html','css','javascript','sql','Sass']
let a= webTechs.includes('Sass')
if(a ===true){
    console.log('Sass is a CSS preprocess')
} else {
    console.log(webTechs.push('Sass'))
    console.log(webTechs)
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)