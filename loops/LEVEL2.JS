
//Develop a small script which generate any number of characters random id:
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

//Write a script which generates a random hexadecimal number.
function hexaDecimal(){
  let hastag = '#'
  let semicolomn = ','
  let h = Math.floor(Math.random()*20)
  let e = Math.floor(Math.random()*20)
  let  x = Math.floor(Math.random()*20)
  console.log(`${hastag}${h}${e}${x}${semicolomn}`)
}
hexaDecimal()

//Write a script which generates a random rgb color number. 
let r = Math.floor(Math.random()* 250)    
let g = Math.floor(Math.random()* 250)   
let b = Math.floor(Math.random()* 250)  
console.log(`rbg(${r},${g},${b})`)

//Using the above countries array, create the following new array.
let arr=[]
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
for(const array of countries){
arr.push(array.toUpperCase())
}
console.log(arr)


//Using the above countries array, create an array for countries length'.

let arrs= []
for(const arry of countries){
    arrs.push(arry.length)
}
console.log(arrs)

//Use the countries array to create the following array of arrays:
let smallArray = [];
for (let country of countries) {
  smallArray.push([country, country.slice(0, 3).toUpperCase(), country.length]);
  
}
console.log(smallArray);


//In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let array = [];
for(let i = 0; i < countries.length; i++){
    if(countries[i].includes('land')){
    array.push(countries[i])
    } else {
    console.log(countries[i])
    }
}
console.log(array)

//In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let arrays =[];
for(let i = 0;i<countries.length;i++){
   if(countries[i].includes('ia')){
    arrays.push(countries[i])
   }
}
console.log(arrays)

//Using the above countries array, find the country containing the biggest number of characters.


//Using the above countries array, find the country containing only 5 characters
let lngth = []
for(let i = 0; i<countries.length;i++){
    if(countries[i].length == 5){
      lngth.push(countries[i])
    }
    
}
console.log(lngth)

//Use the webTechs array to create the following array of arrays:

//[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
let webs = []
for(let x of webTechs){
    web.push([x ,x.length])
}
console.log(web)



//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
let arrLoop =["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] 

for(let arryy of arrLoop ){
   console.log(arryy)
}

for( let i =0;i<arrLoop.length;i++){
   console.log(arrLoop[i])
}


//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruits= ['banana', 'orange', 'mango', 'lemon']
let fruitsArray =[];
for(let i= fruits.length-1; i>=0;i--){
   fruitsArray.push(fruits[i])
   console.log(fruitsArray)
} 

    

//Print all the elements of array as shown below.

/*const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
] */


let web = [
 ['HTML','CSS','JS','React'].concat(['Node','Express','MongoDB'])
]
console.log(web)
for( let x of web){
console.log(web.join('').toUpperCase())
}
