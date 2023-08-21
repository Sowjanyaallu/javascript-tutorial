let challenge =  '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(0,2))
console.log(challenge.substring(0,2))
console.log(challenge.substring(3))
console.log(challenge.includes('Script'))
console.log(challenge.split(''))
console.log(challenge.split(' '))

let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
console.log(string.split(','))
console.log(challenge.replace('JavaScript','python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('j'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

const sentence='You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))
console.log(challenge.trim(' '))
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('JavaScript'))
console.log(challenge.match('a'))

const firstString = '30 days of '
const secondString = 'JavaScript'
const fullString = firstString.concat(secondString)
console.log(fullString)

console.log(challenge.repeat(2))