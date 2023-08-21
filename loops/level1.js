for(i=0;i<=10;i++){
    console.log(i)
}

let x=0
while(x<=10){
    console.log(x)
    x++
}

let y= 0
do{
    console.log(y)
    y++
}while(y<=10)

for(z=10;z>=0;z--){
    console.log(z)
}

let v=10;
while(v>=0){
    console.log(v)
    v--
}
let u = 10
do{
    console.log(u)
    u--
}while(u>=0)

let n=10
for(i=0;i<=n;i++){
    console.log(i)
}

let m=7
let space =""
for(let i=1;i<=n;i++){
    for(let j=0;j<i;j++){
        space+="#"
    }
}

for(i=0;i<=10;i++){
    console.log (`${i}*${i}= ${i*i}`)
  }

for(n=0;n<=10;n++){
    console.log(`${n} ${n*n} ${n*n*n}`)
}

for(x=0;x<=100;x++){
    if(x%2 ==0){
        console.log(x)
    }
}

for(r=0;r<=100;r++){
    if(r%2 !=0){
        console.log(r)
    }
}
let sum=0;
for(n=0;n<=100;n++){
    sum+=n;
}
console.log("the sum of all number from 0 t0 100:",sum)


let Sums=0
let Odd=0
for(z=0;z<=100;z++){
    if(z%2 ==0){
        Sums+=z
    }else if(z%2 !=0){
        Odd+=z
    }
}
console.log(`The sum of all evens from 0 to 100 is ${Sums}, The sum of odd ${Odd}`)



let sums=0
let odd=0
for(z=0;z<=100;z++){
    if(z%2 ==0){
        sums+=z
    }else if(z%2 !=0){
        odd+=z
    }
}
let arr =[sums,odd]
console.log(arr)

let ran = Array(5).fill(7)
console.log(ran)

let Ran =[]
Ran.push(1)
Ran.push(2)
Ran.push(3)
Ran.push(4)
Ran.push(5)
console.log(Ran)

function random(length){
    let result= ''
    const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const stringLength= string.length;
    let v =0;
    while(v<length){
        result +=string.charAt(Math.floor(Math.random()*stringLength));
        v += 1;
    }
    return result
    
}
console.log(random(6))

function getRandomNumbers(length){
    let space = " "
    let wordString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let wordLength = wordString.length
    let letter = 0;
    while(letter<length){
        space += wordString.charAt(Math.floor(Math.random()*wordLength))
        letter +=1;
    }
    return space
}
console.log(getRandomNumbers(12))
console.log(getRandomNumbers(24))



