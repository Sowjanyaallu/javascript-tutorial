// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
let a = 5
let b= 6
let c = 7
let s = (a+b+c)/2
let area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
console.log(area)


// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 
function leapYear(year){
    return year%4 ===0
}
console.log(leapYear(2024))
console.log(leapYear(2020))
console.log(leapYear(2014))


for (let y = 2014; y <= 2050; y++) {
    let d = new Date(y,0,1);
    if ( d.getDay() === 0 )
        console.log(y);
 }


//Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
//[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
function celsiusToFarh(celsius){
    let c = celsius 
    let f = c * 9 / 5 + 32
    let msg = c + '\xB0C ' + f + '\xB0F'
    console.log(msg)
}
function farhTocelsius(farh){
    let F = fahrenheit;
    let C =  (F-32) * 5/9;
    let msgs = F+ '\xB0F' + C + '\B0C'
    console.log(msgs)
}
console.log(celsiusTOFarh(50))
console.log(farhTocelsius(60))


// Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.  
function  number(n){
    if(n <=13){
        console.log( 13 - n)
    } else {
        console.log( (n - 13)*2) 
    }
    
}
console.log(number(24))
console.log(number(10))


//. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.  
function  number(x,y){
    if( x == y ){
        console.log( 3 * (x + y))
    } else {
        console.log(x + y)
    }
    
}
console.log(number(4 , 6))
console.log(number(5,5))

//. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.
function  number(x){
    if( x <=19){
         return  19 -x 
    } else {
        return (x-19)*3
    }
    
}
console.log(number(20))
console.log(number(15))

// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.    
function  number(x ,y){
    if( x  ===  50 || y === 50 || x+y ===50 ){
         return  'true'
    } else {
        return 'false'
    }
    
    
}
console.log(number(50,50))
console.log(number(20,40))


// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
function testhundred(x) {
    return ((Math.abs(100 - x) <= 20) ||
       (Math.abs(400 - x) <= 20));
  }
console.log(testhundred(80))
console.log(testhundred(380))

// Write a JavaScript program to check two given integers whether one is positive and another one is negative.
function testhundred(x,y) {
    if((x<0 && y>0) ||(x>0 && y < 0)){
    return true
    } else {
        return false
    }
  }
  console.log(testhundred(2,2))
  console.log(testhundred(-5,5))

// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.  
function testhundred(string) {
    if(string.substring(0,2) == 'Py') {
    return  string;
    } else {
        return  'Py'+string
    }
  }
console.log(testhundred('javascript'))
console.log(testhundred('django'))
console.log(testhundred('Python'))


//Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
function remove_character(str, char_pos)
{
part1 = str. substring(0, char_pos);
part2 = str. substring(char_pos +2 , str. length);
return (part1 + part2);
}

console. log(remove_character("Python",3));

//Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  
function stringOrNot(number){
    if((number % 3 ===0) || (number % 7 ===0)){
        return 'true'
    } else {
        return 'false'
    }
}
console.log(stringOrNot(35))
console.log(stringOrNot(40))

// Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise
function stringOrNot(string){
    if( string.startsWith('java')){
        return 'true'
    } else {
        return 'false'
    }
}
console.log(stringOrNot('javascript'))
console.log(stringOrNot('javas'))
console.log(stringOrNot('python'))


//Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range
function checkNumbers(x, y) 
  {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99))
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

console.log(checkNumbers(12, 101));
console.log(checkNumbers(52, 80));
console.log(checkNumbers(15, 99));


//Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.  
function checkNumber(x, y,z) 
  {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z>= 50 && z <= 99))
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

console.log(checkNumber(12, 101,99));
console.log(checkNumber(52, 80,66));
console.log(checkNumber(15, 99,43));

//Write a JavaScript program to find the largest of three given integers
function largestNumber(x,y,z){
    let max =0;
     if(x>y){
         max = x
     } else if( y>z){
         max = y
     } else if (z>x){
         max = z
     }
     return max
}
console.log(largestNumber(20,30,40))

//Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive. 
function range(x,y){
    if((x>=40 && x<=60) || (y>=70 && y<=100)){
        return 'true'
    } else {
        return 'false'
    }
}
console.log(range(50,60))
console.log(range(70,100))
console.log(range(20,30))

//Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.
function range(x,y){
    if((x>=40 && x<=60) || (y>=40 && y<=60)){
      if(x>y){
          return x
      } else if( x === y){
          return 'Two numbers are same'
      } else{ 
          return y
     }

    }
}
console.log(range(50,60))
console.log(range(45,45))
console.log(range(55,56))
// Write a JavaScript program that checks whether the last digit of three positive integers is the same.
function last_digit(x, y, z)
{
  if ((x > 0) && y > 0 && z > 0)
    {
     return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
   }
  else
    return false;
}
console.log(last_digit(23,45,55))
console.log(last_digit(10,30,40))


//Write a JavaScript program to change the capitalization of all letters in a given string.
function last_digit(string)
{
  return string.toUpperCase()
}
console.log(last_digit('bhanu'))
console.log(last_digit('ganesh'))

//Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.
function upperCase(string){
    if( string.length<3){
        return string.toUpperCase()
    }
    fpart = (string.substring(0,3)).toLowerCase();
    bpart = string.substring(3,string.length);
    return  fpart+bpart
}
console.log(upperCase('python'))
console.log(upperCase('by'))

//Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80. 
function sum(x,y){
    const sum = x+y;
    if(sum>=50 && sum<=90){
        return 65;
    } else {
        return 80
    }
}
console.log(sum(40,20))
console.log(sum(90,80))

//Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8. 
function check8(x, y) {
    if (x == 8 || y == 8) {
      return true;
    }
  
    if (x + y == 8 || x - y == 8)
    {
      return true;
    }
  
    return false;
  }
  
  console.log(check8(7, 5));
  console.log(check8(9, 8));
  console.log(check8(24, 32));
  console.log(check8(17, 18));

//Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.
function check8(x, y,z) {
    if(x===y && y ===z){
        return 30
    } else if(x==y || y==z || z==x){
        return 40
    } else {
        return 20
    }
     
 }
 
 console.log(check8(20,20,20));
 console.log(check8(9, 8,5));
 console.log(check8(24, 32,24));
 console.log(check8(17, 18,30));



    