//Write a JavaScript function to check whether an `input` is an array or not.
function  arrayOrNot(array){
    for(i=0;i<array.length;i++){
        if(Array.isArray(array)){
          return 'true'
       } else {
           return 'false'
       }
    }
     
}
console.log(arrayOrNot('bhanu'))
console.log(arrayOrNot([1,2,3,4]))

//Write a JavaScript function to clone an array
array_Clone = function(arra1) {
    return arra1.slice(0);
       };
   console.log(array_Clone([1, 2, 4, 0]));
   console.log(array_Clone([1, 2, [4, 0]]));


//Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
function splitted(array,n){
    if (array == null) {
     return  0;
    }
   if (n == null) {
     return array[0];
   }
   if (n < 0){
     return [];
   }
   return array.slice(0, n);
   
}
console.log(splitted([2,4,6,7,8]))
console.log(splitted([2,4,6,7,8],0))
console.log(splitted([2,4,6,7,8],2))
console.log(splitted([2,4,6,7,8],-3))


//Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
function lastIndex_split(arrays,m){
    if (arrays == null) {
     return  0;
    }
   if (m == null) {
     return arrays[arrays.length - 1];
   }

   return arrays.slice(Math.max(arrays.length-m, 0));
   
}
console.log(lastIndex_split([2,4,6,7,8]))
console.log(lastIndex_split([2,4,6,7,8],0))
console.log(lastIndex_split([2,4,6,7,8],2))
console.log(lastIndex_split([2,4,6,7,8],-3))


//Write a simple JavaScript program to join all elements of the following array into a string.
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

//Write a JavaScript program to sort the items of an array.
let arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
let arr2= arr1.sort()
console.log(arr2)

//Write a JavaScript program to find the most frequent item in an array.
let arrs1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let x = 1;
let m = 0;
let item;
for (let i=0; i<arr1.length; i++)
{
        for (let j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (x<m)
                {
                  x=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +x +" times ) ") ;

//Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
function upperToLower_lowerToUpper(string){
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let result = []
    for(let i=0;i<string.length;i++){
        if(upper.indexOf(string[i]) !== -1 )
        {
            result.push(string[i].toLowerCase());
        }
        else if(lower.indexOf(string[i]) !== -1 )
        {
            result.push(string[i].toUpperCase())
        }
        else
        {
            result.push(string[i])
        }
    }
    return result.join('')
}
console.log(upperToLower_lowerToUpper('The Quick Brown Fox'))

//Write a JavaScript program that prints the elements of the following array.
let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
for(let x in a)
{
    console.log("row" +x);
    for(let y in a[x])
    {
        console.log(" "+a[x][y])
    }
}

//Write a JavaScript program to find the sum of squares of a numerical vector
function numericalVector(arrays)
{
    let sums = 0;
    for(let i =0;i<arrays.length;i++)
    {
        sums += arrays[i]**2
    }
    return sums
}
console.log(numericalVector([1,2,3,4,5]))


//Write a JavaScript program to compute the sum and product of an array of integers
let array = [1, 2, 3, 4, 5, 6],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    p *= array[i];
    }
console.log('Sum : '+s + ' Product :  ' +p);

//Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
function removeDuplicates(arr) {
    return ars.filter((item,
        index) => ars.indexOf(item) === index);
       
}
 
console.log(removeDuplicates(ars));

// Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.
function twoSum(nums, target_num) {
    var map = [];
    var indexnum = [];
    
    for (var x = 0; x < nums.length; x++)
    {
    if (map[nums[x]] != null)
    {
    var index = map[nums[x]];
    indexnum[0] = index;
    indexnum[1] = x;
    break;
    }
    else
    {
    map[target_num - nums[x]] = x;
    }
    }
    return indexnum;
    }
console.log(twoSum([10,10,30,40,50,60,70],50));

//Write a JavaScript program to shuffle an array.
function shuffle(arra1) {
    let ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));

//Write a JavaScript program to shuffle an array.
function shuffle(array)
{
    let length = array.length
    for(let i = length-1; i>0; i--)
    {
        let index = Math.floor(Math.random()*(i+1));
        let temp = array[i];
        array[i]= array[index];
        array[index] = temp;
    }
}
 let c =[1,2,3,4,5,6,7,8,9]
 shuffle(c)
console.log(c)

//Write a JavaScript program to count the number of arrays inside a given array.
function test(arr_nums){
	return arr_nums.filter(n=>Array.isArray(n)).length;
}
arr_nums = [2,8,[6],3,3,5,3,4,[5,4]]
console.log("Number of arrays inside the said array: "+test(arr_nums));
arr_nums = [2,8,[6,3,3],[4],5,[3,4,[5,4]]]
console.log("Number of arrays inside the said array: "+test(arr_nums));

//There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
let array1 = [16,0,2,3,1];
    let array2 = [3,5,6,7,8,13];
    let array3 = [];

    if (array1.length >= array2.length)
    {
        array3 = array1.map(function(num, i, array) {
          return num + (array2[i] || 0);
        });
    }else{
        array3 = array2.map(function(num, i, array) {
          return num + (array1[i] || 0);
        });
    }
console.log(array3)

// Write a JavaScript program to find duplicate values in a JavaScript array
function duplicatesValues(array)
{
    let value= []
    for(let i = 0;i<array.length-1;i++)
    {
        if(array[i]===array[i+1])
        {
            value.push(array[i])
        }
    }
    return value
}
console.log(duplicatesValues([2,2,5,7,8,8,9]))

//. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
function specialCharacter(num)
{
let res = []
 let str = num.toString();
 for(let i = 0; i< str.length;i++)
 {
  if(str[i-1]%2 === 0 && str[i]%2 ===0){
    res.push('-',str[i])
  } else{
     res.push(str[i]);
  }
 }
 return res.join('')
}
console.log(specialCharacter(25468))


//Write a JavaScript function to remove a specific element from an array.
function remove_array_element(array, n)
 {
   var index = array.indexOf(n);
   if (index > -1) {
    array.splice(index, 1);
}
   return array;
 }

console.log(remove_array_element([2, 5, 9, 6], 9));

//Write a JavaScript program to check if an array is a factor chain or not.
function test(nums) { 
    for (var i = 0; i < nums.length - 1; i++) 
    {
      if (nums[i+1] % nums[i] != 0) {
        return false;            
      }
    }
    return true;
  }
  console.log(test([2,4,8,16]))

//Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers
function sumofNumbers(array){
    let count = 0;
    for(let i=0; i < array.length;i++){
        if(typeof array[i] === 'number' )
        {
            count +=  array[i]
        }
    }
    return count
}
console.log(sumofNumbers([2, "11", 3, "a2", false, 5, 7, 1]))


//Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN
function indexOfNan(array)
{
    return array.map(function(element,index){
        if(isNaN(element))
            return index
        return false
    }).filter(function(element){
        return element
    })
}
console.log(indexOfNan([2, NaN, 8, 16, 32]))
console.log(indexOfNan([2, NaN, 8, 16, 32,NaN]))

// Write a JavaScript program to count the number of arrays inside a given array.
arr_nums = [2,8,[6],3,3,5,3,4,[5,4]]
const count = arr_nums.filter(n => Array.isArray(n)).length
console.log(count)



//Write a JavaScript program that takes an array of numbers and returns the third smallest number.
function thirdSmallestNumber(arr){
    let array = []
    let swapp ;
    let x = arr
    do{
        swapp = false
        for(let i=1;i<arr.length;i++){
            if(x[i]<x[i-1]){
                let temp = x[i];
                x[i]= x[i-1];
                x[i-1] = temp;
                swapp = true
            }
        }
    } while(swapp)
      array.push(arr[arr.length-3])
      return array
  }
  console.log(thirdSmallestNumber([2,4,3,5,7,1]))
  
  //Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true.
  function primeOrNot(arr_nums) 
  {
     for (n of arr_nums)
     {
      if (n == 1 | n > 2 & n % 2 == 0) 
        return false;
    }
    return true;
  }
  console.log(primeOrNot([2,3,5,7]))
  console.log(primeOrNot([2,3,5,7,9,4]))

//Write a JavaScript program to find all the unique values in a set of numbers.
let Arr = ["1", "1", "2", "3", "3", "1"];
let unique = Arr.filter((item, i, ar) => ar.indexOf(item) === i);
console.log(unique);


// Write a JavaScript program to sort the items of an array
function sortedNumbers(array)
{
    let res = []
    let swapp;
    do{
        swapp = false
        for(let i = 0; i< array.length;i++)
        {
            if(array[i]>array[i+1])
            {
                let temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
                swapp = true
            }
        }
    }while(swapp)
    return  array
}
console.log(sortedNumbers([5,3,8,2,-4,-3,0]))

// Write a JavaScript function to find the difference between two arrays.
function diffenrece(array1,array2)
{
    let results = []
    for(let i=0;i<array1.length;i++)
    {
        if(array2.indexOf(array1[i])===-1)
        {
            results.push(array1[i])
        }
    }
    for(let j=0;j<array2.length;j++)
    {
        if(array1.indexOf(array2[j])===-1)
        {
            results.push(array2[j])
        }
    }
    return results
}
console.log(diffenrece([1,2,3,4],[3,4,5,6]))

//Write a JavaScript function to sort the following array of objects by title value
let library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
 
 function compare_to_sort(x,y) 
  {
   if (x.title < y.title)
     return -1;
   if (x.title > y.title)
     return 1;
   return 0;
  }
 
 console.log(library.sort(compare_to_sort));

