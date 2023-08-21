//grades

let mark = prompt('enter your marks')
if(mark>=80){
 console.log('A')
} else if(mark>=70){
console.log('B')
}else if(mark>=60){
console.log('C')
} else if(mark>=50){
console.log('D')
} else {
console.log('F')
}

// chech the season

let month = prompt("enter a month")

switch(month) {
case  'octomber','september','november':
 console.log('Autumn')
 break
 case 'december','janaury','febaury':
 console.log('Winter')
 break
 case 'march','april','may':
 console.log('Spring')
 break
 case 'june','july','august':
 console.log('Summer')
 break
 default:
 console.log("")
}