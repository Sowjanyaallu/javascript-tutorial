//Write a JavaScript function that reverses a number.
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));

//Write a JavaScript function that returns a string that has letters in alphabetical order.
function alphabetica(string){
    const arr = string.split('')
    return arr.sort().join('')
}
console.log(alphabetica('jhhhfimjop'))

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
function firstLetterToUpper(string){
	let arr = string.split(' ')
	for(let i= 0;i < arr.length;i++){
	   arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substr(1)
	}
	return arr.join(' ')
 }
 console.log(firstLetterToUpper('the quick brown fox'))

//Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string
function longestString(string){
	let arr = string.split(' ')
	let largest = ''
	for(let i=0; i < arr.length;i++){
	 if(arr[i].length > largest.length ){
		largest = arr[i]
	 } 
	}
	return largest
  }
console.log(longestString('web development tutirol'))

//Write a JavaScript function to compute the factors of a positive integer.
function  factors(number){
  let num =[];
  for (let i=0;i<number;i++){
      if(number%i === 0){
           num.push(i)
          
      }
      
  }
 
    return num

}
console.log(factors(15))
console.log(factors(20))

//Write a JavaScript function to compute the value of bn where n is the exponent and b is the base. Accept b and n from the user and display the results.
function exponitional(b,n){
  return b**n
}
console.log(exponitional(3,3))

//Write a JavaScript function to extract unique characters from a string.
function checkUnique(string){
  let unique = " ";
  for(let i=0; i<string.length;i++){
  if(unique.includes(string[i]) === false){
      unique += string[i]
  }
  }
  return unique;
}
console.log(checkUnique('bhannugangggasowjaniaa'))

//Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
function longest_string(str){
  let largests = ' '
  for(let i=0; i<str.length;i++){
      if(str[i].length>largests.length){
          largests = str[i]
      }
  }
  return largests
}
console.log(longest_string(["Australia", "Germany", "United States of America"]))

//Write a JavaScript function that generates a string ID (specified length) of random characters.
function randomStringId(n)
{
    let text = ' ';
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i=0; i< n;i++)
    {
        text += char.charAt(Math.floor(Math.random()*char.length));
    }
    return text;
}
console.log(randomStringId(5))


//Write a JavaScript function to get the function name.
function functionName(){
  console.log(arguments.callee.name)
}
functionName()


//Write a JavaScript function that checks whether a passed string is a palindrome or not?
function palidrome(string){
  let str = ''
  for(let i = string.length-1;i>=0;i--){
      str = str+string[i]
  }
  return str==string
}
console.log(palidrome('madam'))
console.log(palidrome('nurses'))

//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
const vow = ['a','e','i','o','u','A','E','I','O','U']
function vowelss(str){
    let count =0;
    for(let x of str){
        if(vow.includes(x)){
            count++;
        }
    }
    return count
}
console.log(vowelss('The quIck brown foxA'))

//Write a JavaScript function that accepts an argument and returns the type.
function  datatype(value){
  return typeof value
}
console.log(datatype('bhanu'))
console.log(datatype(2))

//Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.
function primeOrNot(number){
  let isPrime = true
  for(let i=2;i<number-1;i++){
  
      if(number%i ==0){
          isPrime = false
      }  
     
  }
  return isPrime
}
console.log(primeOrNot(55))

//Write a JavaScript function that takes an array of numbers and finds the second lowest and second
function bubble(arr){
  let array = []
  let swapp ;
  do{
      swapp = false
      for(let i=1;i<arr.length;i++){
          if(arr[i]<arr[i-1]){
              let temp = arr[i];
              arr[i]= arr[i-1];
              arr[i-1] = temp;
              swapp = true
          }
      }
  } while(swapp)
   array.push(arr[1],arr[arr.length-2])
  return array
}
console.log(bubble([1,3,5,7,2,4,9,10,20]))

//Write a JavaScript function that checks whether a number is perfect.
function is_perfect(number)
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
      if(temp === number && temp !== 0)
        {
       console.log("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
        } 
 } 
is_perfect(495);

//Write a JavaScript function to get the number of occurrences of each letter in a specified string
function count(string) {
  let string1 =(string.split("").sort().join(""))
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string1[i] == string1[i + 1]) {
      counter++;
    } else {
      console.log(string1[i] + " " + counter);
      counter = 0;
    }
  }
  
}
count("bhannugangasowjanyya");

//Write a JavaScript function that returns array elements larger than a number.
let number = [6,9,11,14,68,90]
const largestNumber = number.filter((num)=> num>=10)
console.log(largestNumber)

//Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
function counts(str,letter){
  let count = 0;
  for(let i=0;i<str.length;i++){
      if(str.charAt(i)==letter){
          count+=1;
      }
  }
  return count;
}
console.log(counts('bhannu','n'))

//Write a JavaScript function to find the first not repeated character
function firstCharacter(string) {
  let first;

  string.split('').some(function (character, index, arr) {
      if(arr.indexOf(character) === arr.lastIndexOf(character)) {
          first = character;
          return true;
      }

      return false;
  });

  return first;
}

console.log(firstCharacter('aabcbd'));

// Write a JavaScript function to apply the Bubble Sort algorithm.
function bubble(arr){
  let array = []
  let m = arr.length-1
  let y = arr
  let swapp ;
  do{
      swapp = false
      for(let i=0;i<m;i++){
          if(y[i]<y[i+1]){
              let temp = y[i];
              y[i]= y[i+1];
              y[i+1] = temp;
              swapp = true
          }
      }
      m--
  } while(swapp)
  return y
 
}
console.log(bubble([1,3,5,7,2,4,9,10,20]))

//Write a JavaScript function to find the longest substring in a given string without repeating characters.
function repeate_char(str1)
{
 let str=str1;
 let uniql="";
 for (let x=0;x < str.length;x++)
 {

 if(uniql.indexOf(str.charAt(x))==-1)
  {
  uniql += str[x];  
  
   }
  }
  return uniql;  
}  
console.log(repeate_char("google.com"));

//Write a JavaScript program to pass a 'JavaScript function' as a parameter.
function addStudent(id, refreshCallback)
{
    refreshCallback();  
}

function refreshStudentList() {
    console.log('Hello');
}

addStudent(1, refreshStudentList);



