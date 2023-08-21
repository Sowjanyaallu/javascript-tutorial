
//Write a JavaScript function to check whether an 'input' is a string or not.
function stringOrNot(string){
    for(i=0;i<string.length;i++){
        if(typeof string[i]=== 'string'){
            return 'true'
        } else{
            return 'false'
        }
    }
}
console.log(stringOrNot('bhanu'))
console.log(stringOrNot([1,2,3,4,5]))

//Write a JavaScript function to check whether a string is blank or not.
function stringBlankOrNot(string){
    if(string.length == 0){
        return 'true'
    } else{
        return 'false'
    }
}
console.log(stringBlankOrNot('bhanu'))
console.log(stringBlankOrNot([1,2,3,4,5]))
console.log(stringBlankOrNot(''))

//Write a JavaScript function to split a string and convert it into an array of words.
function stringToArray(string){
    return string.split(' ')
}
console.log(stringToArray('bhanu allu'))

//Write a JavaScript function to extract a specified number of characters from a string.
function stringToSlice(string,n){
    return string.slice(0,n)
}
console.log(stringToSlice('sowjanya',3))

//Write a JavaScript function to parameterize a string.
function stringToParameterize(string,n){
    return string.toLowerCase().replace(/\s/g, "-");
}
console.log(stringToParameterize("Robin Singh from USA."))

//Write a JavaScript function to capitalize the first letter of a string.
function stringToCapitialze(string,n){
    return string.charAt(0).toUpperCase()+string.slice(1)
}
console.log(stringToCapitialze('js string exercises'))

//Write a JavaScript function to concatenate a given string n times (default is 1).
function repeatString(string,n){
    return string.repeat(n)

}
console.log(repeatString('hello!',2))

//Write a JavaScript function to capitalize the first letter of each word in a string.
function capitalToEvery(string){
    const word = string.split(' ')
    for(let i=0;i < word.length;i++){
        word[i]= word[i][0].toUpperCase()+word[i].substr(1)
    }
    return word.join(" ")
}
console.log(capitalToEvery("bhanu ganga sowjanya"))

//Write a JavaScript function to convert a string into camel case
function stringToCamel(string){
    const words = string.split(' ')
    for(let i=0;i < words.length;i++){
        words[i]= words[i][0].toUpperCase()+words[i].substr(1)
    }
    return words.join("")
}
console.log(stringToCamel("JavaScript Exercises"));
console.log(stringToCamel("JavaScript exercises"));
console.log(stringToCamel("JavaScriptExercises"))


//Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
function convertToCase(string){
    let up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let low = 'abcdefghijklmnopqrstuvwxyz'
    let res=[]
    for(let i=0;i<string.length;i++){
        if(up.indexOf(string[i])!==-1){
            res.push(string[i].toLowerCase())
        } else if(low.indexOf(string[i]) !==-1){
            res.push(string[i].toUpperCase())
        } else{
            return 'invalid'
        }
    }
    return res
}
console.log(convertToCase('Bhanu'))

// Write a JavaScript function to uncommelize a string.
function uncamelize(text, separator) {
 
    if(typeof(separator) == "undefined") {
    }
   
    // Replace all capital letters by separator followed by lowercase one
    let text = text.replace(/[A-Z]/g, function (letter) {
      return separator + letter.toLowerCase();
    });
   
    // Remove first separator (to avoid _hello_world name)
    return text.replace("/^" + separator + "/", '');
   
  }
  console.log(uncamelize('helloWord', " " ))

//Write a JavaScript function that hides email addresses to prevent unauthorized access.
function hideEmail(gmail){
    let  splitted ,avg,part1,part2;
    splitted = gmail.split("@");
    part1 = splitted[0];
    avg = part1.length/2;
    part1 = part1.substring(0,(part1.length-avg));
    part2 = splitted[1];
    return part1+"....@"+ part2;
    
}
console.log(hideEmail("allusowjanya@gmail.com"))

//Write a JavaScript function to concatenate a given string n times (default is 1).
function repeat(str, count) {
    if(typeof(count) == "undefined") {
    count =1;
  }
  return count < 1 ? '' :new Array (count + 1).join(str);
    }
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));

//Write a JavaScript function to insert a string within a string at a particular position (default is 1).
function insertData(str,newStr,n){
    if(typeof(n) == 'undefined')
    {
        n = 0;
    }
    if(typeof(newStr) == 'undefined' )
    {
        newStr = ' '
    }
    return str.slice(0,n) + newStr + " " + str.slice(n)
    
}
console.log(insertData('we are doing some exercise','javascript'))
console.log(insertData('We are doing some exercises.','javaScript ',18));

//. Write a JavaScript function that format a number in a human-readable string with the correct suffix, such as 1st, 2nd, 3rd, etc
function humanize(num) {
    switch(num % 10) {
        case 1: return num + "st";
        case 2: return num + "nd";
        case 3: return num + "rd";
    }
    return num + "th";
}

console.log(humanize(1));
console.log(humanize(2));
console.log(humanize(8)); 
console.log(humanize(15)); 
console.log(humanize(301));  
console.log(humanize(402)); 


//Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("...") (by default) or specified characters.
text_truncate = function(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',20))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))


//Write a JavaScript function to chop a string into chunks of a given length.
function chunkSubstr(str, size) {
    const numChunks = Math.ceil(str.length / size)
    const chunks = new Array(numChunks)
  
    for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
      chunks[i] = str.substr(o, size)
    }
  
    return chunks
  }
  console.log(chunkSubstr('welcomes',3))


//Write a JavaScript function to count substrings in a string
function countSubstring(string,n)
{
  let count = string.split(n).length-1;
  return (string.match(new RegExp(n, 'gi')) || []).length;
  
  
}
console.log(countSubstring('The quick brown fox jumps over the lazy dog','the'))


// Write a JavaScript function to repeat a string for a specified time.
function repeated(string,n)
{
    if((n== null) ||(string == null) ||(n<0) || (n ===  Infinity))
    {
        return  "Error in string or count."
    }
     n = n | 0;
    return new Array(n + 1).join(string);
}
console.log(repeated('a',4))
console.log(repeated('a'))

//Write a JavaScript function to get a part of a string after a specified character.
function  specifiedCharacter(str,char,pos)
{
    if(pos== 'b')
    {
        return str.substring(str.indexOf(char)+1)
    }
    else if(pos == 'a')
    {
        return str.substring(0,str.indexOf(char))
    }
    else
    return str
}
console.log(specifiedCharacter('w3resource: JavaScript Exercises', ':','a'))
console.log(specifiedCharacter('w3resource: JavaScript Exercises', 'E','b'))

//Write a JavaScript function to strip leading and trailing spaces from a string
function strip(str) {
    return str.replace(/\s/g, '');
}

console.log(strip('w3resource '));
console.log(strip(' w3resource'));
console.log(strip(' w3resource  '));

//Write a JavaScript function to truncate a string to a certain number of words.
function truncate(str, n) {
    return str.split(" ").splice(0,n).join(" ");
}

console.log(truncate('The quick brown fox jumps over the lazy dog', 4));

//Write a JavaScript function to alphabetize a given string.
//Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
function alphabetize_string(str) 
{
	
return str.split('').sort().join('').trim();

}
console.log(alphabetize_string(' United States'));


//Write a JavaScript function that checks whether a string ends with a specified suffix
function string_endsWith(str, suffix) 
{
 
 if (((str===null) || (str==='')) || ((suffix===null) || (suffix==='')))
   {
    return false;
   }
  else
  {     
   str = str.toString();
   suffix = suffix.toString();
   }
 return str.indexOf(suffix, str.length -     suffix.length) !== -1;
}

console.log(string_endsWith('JS PHP PYTHON','PYTHON'));

console.log(string_endsWith('JS PHP PYTHON',''));


//Write a JavaScript function that checks whether a string ends with a specified suffix.
function string_endsWith(str, suffix) 
{
 
 if (((str===null) || (str==='')) || ((suffix===null) || (suffix==='')))
   {
    return false;
   }
  else
  {     
     str = str.toString();
   suffix = suffix.toString();
   }
 return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

console.log(string_endsWith( 12345, 5));

console.log(string_endsWith('JS PHP PYTHON ','java'));

//Write a JavaScript function to remove non-word characters.
function  removeNonWord(string)
{
    if(string === null)
    {
        return false
    }
    return string.replace(/\W/g,'')
}
console.log(removeNonWord('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'))


//Write a JavaScript function to convert a string to title case
function titleCase(string)
{
   
    let str = string.split(' ')
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let results = []
    for(let i=0;i<str.length;i++ )
    {
        if(upper.indexOf(str[i]) !==-1)
        {
            results.push(str[i].toLowerCase()) 
        } 
        
        str[i] = str[i][0].toUpperCase()+ str[i].substr(1)
        
    }
    return str.join(' ')
}
console.log(titleCase('PHP exercises. python exercises.'))

//Write a JavaScript function to remove HTML/XML tags from a string.
function strip_html_tags(str)
{
   if ((str===null) || (str===''))
       return false;
  else
   str = str.toString();
  return str.replace(/<[^<>]*>/g, '');
}

console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));

//Write a JavaScript function to test case-insensitive (except special Unicode characters) string comparison
function compare_strings(str1, str2)
{
var areEqual = str1.toUpperCase() === str2.toUpperCase();
  return areEqual;
}

console.log(compare_strings('aBcd', 'AbcD'));
console.log(compare_strings('ABCD', 'Abce'));

//Write a JavaScript function to create a case-insensitive search.
function caseInsensitive(string,word)
{
    let res = string.search(new RegExp(word, 'i'))
    if(res>0)
    {
        return 'Matched'
    }
    else
    {
        return 'not Matched'
    }
}
console.log(caseInsensitive('JavaScript Exercises', 'exercises'));

console.log(caseInsensitive('JavaScript Exercises', 'Exercises'));

console.log(caseInsensitive('JavaScript Exercises', 'Exercisess'));

//Write a JavaScript function to uncapitalize the first character of a string
function unCapitialze(string,n){
    return string.charAt(0).toLowerCase()+string.slice(1)
}
console.log(unCapitialze('js string exercises'))

//Write a JavaScript function to uncapitalize the first letter of each word of a string.
function unTitleCase(string)
{
   
    let str = string.split(' ')
    for(let i=0;i<str.length;i++ )
    {
        str[i] = str[i][0].toLowerCase()+ str[i].substr(1)
        
    }
    return str.join(' ')
}
console.log(unTitleCase('Js String Exerices'))

// Write a JavaScript function to capitalize each word in the string.
function lowercase_uppercase(string)
{
   return string.substr(0).toUpperCase()
    
}
console.log(lowercase_uppercase('js string exercises'))

//Write a JavaScript function to uncapitalize each word in the string.
function uppercase_lowercase(string)
{
   return string.substr(0).toLowerCase()
    
}
console.log(uppercase_lowercase('JS STRING EXERCISES'))


//Write a JavaScript function to test whether the character at the given (character) index is lower case.
function checkCharacterLowerCase(string,n){
    return string.charAt(n).toLowerCase() === string.charAt(n);
}
console.log(checkCharacterLowerCase('Js STRING EXERCISES', 1))
console.log(checkCharacterLowerCase('Js STRING EXERCISES', 5))

//Write a JavaScript function to get a humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th
function correct_suffix(number)
{
    if(number % 100 >= 11 && number % 100 <= 13)
    
            return number + "th";
    
    switch(number% 10){
         case 1: return number + 'st'
         case 2: return number + 'nd'
         case 3: return number + 'rd'
    }
    return number +'th'
}
console.log(correct_suffix(1))
console.log(correct_suffix(2))
console.log(correct_suffix(3))
console.log(correct_suffix(100))

//Write a JavaScript function to test whether a string starts with a specified string.
function startsWith(input, string) {
    return input.indexOf(string) === 0;
  }
  console.log(startsWith('js string exercises', 'js'));

 //Write a JavaScript function to test whether a string ends with a specified string. 
function endsWith(input, string) {
    var index = input.length - string.length;
    return index >= 0 && input.indexOf(string, index) > -1;
}
console.log(endsWith('JS string exercises', 'exercises'));