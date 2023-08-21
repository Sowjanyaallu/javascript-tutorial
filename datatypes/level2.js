let word3 = 'You cannot end a sentence with because because because is a conjunction'

console.log(word3.match('because'))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'


const text = 'He earns 5000 euro from salary per\ month, 10000 euro annual bonus, 15000 euro\ online courses per month.';

const arr  = text.match(/\d+/g);

const totalAnnualIncome = (+arr[0] + +arr[2]) * 12 + +arr[1];

console.log(totalAnnualIncome)


const salary = 5000;
const bonus = 10000;
const fee = 15000
const totalAnnualIncome1 = ((salary)*(12)+bonus+(fee)*(12))
console.log(totalAnnualIncome1)


let length


