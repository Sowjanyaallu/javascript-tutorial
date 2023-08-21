const sentence2 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(sentence2.match(/love/gi))
console.log(sentence2.match(/love/gi).length)

 sentence='You cannot end a sentence with because because because is a conjunction'
 console.log(sentence.match(/because/gi))
 console.log(sentence.match(/because/gi).length)
 
 const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
 
let wordSentence= console.log(sentence3.replace(/[%,@,&,#,$,!,?]/g,''))

const salary = 5000;
const bonus = 10000;
const fee =  15000
let annualIncome = (salary)*12+(bonus)+(fee)*12
console.log(annualIncome)