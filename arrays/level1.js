const arr = Array()
console.log(arr)

let arrs =[1,2,3,4,5,6]
console.log(arrs)

console.log(arrs.length)
console.log(arrs[0])

let middleIndex = arrs.length/2
middleElement = arrs[middleIndex]
console.log(middleElement)

let lastIndex = arrs.length-1
lastElement = arrs[lastIndex]
console.log(lastElement)

let mixedDataTypes = [27,3.14,'bhanu'," ", true, 'fruit:banana']

console.log(mixedDataTypes.length)

const itCompanies = ['facebook','google','microsoft','apple','ibm','oracle','amazon']

console.log('itCompanies:',itCompanies)

console.log(itCompanies.length)

console.log(itCompanies[0])

let MiddleIndex = (itCompanies.length-1)/2
MiddleElement = itCompanies[MiddleIndex]
console.log(MiddleElement)

let LastIndex= itCompanies.length-1
let LastElement = itCompanies[LastIndex]
console.log(LastElement)

for (let i=0; i<itCompanies.length; i++){
    console.log(i + ". " + itCompanies[i]);
}


for(let i=0;i<itCompanies.length;i++){
    console.log(itCompanies[i].toUpperCase())
}


let sentence = itCompanies.toString();
console.log(sentence+" "+' are big IT companies')

let x= itCompanies.includes('apple')    
if(x === true){
    console.log('apple')
} else{
    console.log('company not found')
}

console.log(itCompanies.sort())
console.log(itCompanies.reverse())

console.log(itCompanies.slice(0,3))

console.log(itCompanies.slice(-3))

console.log(itCompanies.slice((itCompanies.length-1)/2,itCompanies.length/2+1))

itCompanies.shift()
console.log(itCompanies)

itCompanies.pop()
console.log(itCompanies)

while(itCompanies.length =0){
    console.log(itComapanies)
}




