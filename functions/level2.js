function solveQuadEquation(a,b,c){
    let discriminant = b*b-4*a*c;
    if(discriminant>0){
    let root1 = (-b+Math.sqrt(discriminant))/(2*a)
    let root2 = (-b-Math.sqrt(discriminant))/(2*a)
     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
    } else if(discriminant==0){
    root1 = root2 = -b/(2*a);
    console.log(`the roots of quadratic equation are ${root1} and ${root2}`);
    } else{
    let  complex =(-b/(2*a)).toFixed(4);
    let diffent = (Math.sqrt(-discriminant)/(2*a)).toFixed(4)
     console.log(`The roots of quadratic equation are ${complex} and ${diffent}`);
    }
    
}
console.log(solveQuadEquation())
console.log(solveQuadEquation(1,4,4))
console.log(solveQuadEquation(1,-1,-2))
console.log(solveQuadEquation(1,7,12))
console.log(solveQuadEquation(1,0,-4))
console.log(solveQuadEquation(1,-1,0))


let array = [1,2,3,4,5,6,7,8,9,10]
function printArray(array){
  for(i=0;i<array.length;i++){
     console.log(i)
  }
  return i
}
console.log(printArray(array))

function  showDateTime( ){
    dates = new Date().getDate()
    months = new Date().getMonth()
    years = new Date().getFullYear()
    hour = new Date().getHours()
    min = new Date().getMinutes()
    let form = `${dates}/${months}/${years} ${hour}:${min}`
    return form
}
console.log(showDateTime())

let number = [1,2,3,4,5]
let reverse =[]
function reverseArray(...number){
for(let  i= number.length-1; i>=0; i--){
 reverse.push(number[i])
}
return reverse
}
console.log(reverseArray(...number))


function reverseArray(array){
    let revers= []
    for(let i=array.length-1; i >=0;i--){
       revers.push(array[i])
    }
    return revers
}
console.log(reverseArray([1,2,3,4,5]))
console.log(reverseArray(['A','B','C','D']))

let array1 = ['item1','item2','item3']
function addItem(item){
   array1.push('item4')
   return array1
 
}
console.log(addItem(array1))

function addItem(item){
    item.push(6)
    return item
 }
 console.log(addItem([1,2,3,4,5]))

 //removeitem
function removeItem(index){
    index.pop()
    return index
}
console.log(removeItem(['bhanu','ganga','sowjanya']))


function sumTo(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    return sum;
}
  
console.log( sumTo(6) );

function sumOfOdd(number){
    let sum= 0
    let odd =1;
    while(odd<=number){
     if(odd%2 ==1){
      sum += odd
     }
     odd +=1
    }
    return sum
}
console.log(sumOfOdd(10))

function sumOfEven(number){
    let sum= 0
    let even = 2;
    while(even<=number){
     if(even%2 ==0){
      sum += even
     }
     even += 2
    }
    return sum
}
console.log(sumOfEven(10))

function sum(){
    let sum=0 ;
    for(let i=0;i< arguments.length;i++)
        sum += arguments[i];
        return sum
}
console.log(sum(1,2,3))
console.log(sum(1,2,3,4))

function arrayOfHexaColors(n){
    let arr = []
    let hashtag = '#'
    let semicolon = ','
    let h = Math.floor(Math.random() * 16)
    let e = Math.floor(Math.random() * 16)
    let x = Math.floor(Math.random() * 16)
      for(i = 0; i < n; i++){
      arr.push(hashtag,h,e,x,semicolon)
      }
       console.log(arr.join(''))
}
 console.log(arrayOfHexaColors(4))

 function arrayOfRgbColors(n){
    let ary= []
    let semicolon = ','
    let r = Math.floor(Math.random()*200)
    let g = Math.floor(Math.random()*150)
    let b = Math.floor(Math.random()*100)
     for ( j=0;j<n;j++){
     ary =console.log(`rgb(${r},${g},${b})`)
     }
     console.log(ary.join(''))
    }
     console.log(arrayOfRgbColors(8))


     
function factorial(n){
    let fact =1;
    for(i=1;i<=n;i++){
         fact *=i
      
        
    }
      return fact
}
console.log(factorial(10))


//Writ a function which generates a randomUserIp
function randomUserIp() {
    let ip  =   (Math.floor(Math.random() *255)+1) + "."+(Math.floor(Math.random()*255)) + " ."+ (Math.floor(Math.random()*255)) + " ." + (Math.floor(Math.random()*255))
    return ip
}
console.log(randomUserIp())


//Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function  randomHexaNumberGenerator(){
    let n = (Math.random() * 0xfffff*1000000).toString(16);
    return  '#'+n.slice(0,6)
}
console.log(randomHexaNumberGenerator())


//Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator(){
    let n = (Math.random() * 0xfffff*1000000).toString(16).toUpperCase();
    return n.slice(0,7)
}
console.log(userIdGenerator())

//Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(array){
    let arr=[]
    for(let i=0;i<array.length;i++){
        arr.push(array[i].charAt(0).toUpperCase()+array[i].slice(1))
    }
    return arr
}
console.log(capitalizeArray(['bhanu','ganga','sowjanya']))