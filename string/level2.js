
let para1 = `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
console.log(para1)

let para2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(para2)


console.log(typeof '10' === typeof 10)
console.log(typeof parseInt('10')===typeof 10)

console.log( parseFloat('9.8')===  10)
console.log(Math.ceil('9.8')===10)

let word1 = 'python'
let word2 = 'jargon'
console.log(word1.includes('on'))
console.log(word2.includes('on'))

const sentence1 ='I hope this course is not full of jargon'
console.log(sentence1.includes('jargon'))

console.log(Math.floor(Math.random()*100))
console.log(Math.floor(Math.random()*51)+50)
console.log(Math.floor(Math.random()*256))

const randomString = 'javascript'
console.log(randomString.charAt(Math.floor(Math.random()*randomString.length)))

const digits = '1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125'
console.log(digits)

sentence='You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.substr(31,23))