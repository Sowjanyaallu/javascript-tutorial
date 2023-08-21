//Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator(){
    let r = Math.floor(Math.random()*250)
    let g = Math.floor(Math.random()*200)
    let b = Math.floor(Math.random()*100)
    return `rgb(${r},${g},${b})`
}
console.log(rgbColorGenerator())


//Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(num){
    let arr =[];
    while(arr.length<6){
        let ran ='#'+( Math.floor(Math.random()* 0xfffff*10).toString(15));
        if(arr.indexOf(ran)=== -1)arr.push(ran);
    }
    return arr.slice(0,6)
}
console.log(arrayOfHexaColors())


//Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(n){
    let fact = 1;
    for(i=1;i<=n;i++){
      fact *=i
    }
    return fact
}
console.log(factorial(5))

//Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function  isEmpty(number){
    return number == null
} 
console.log(isEmpty( ))

//Call your function sum, it takes any number of arguments and it returns the sum.
function sum(){
    let sum = 0;
    for(let i=0;i<arguments.length;i++){
        sum += arguments[i]
    }
    return sum
    
}
console.log(sum(1,2,3,4,5,6,7,8,9))



//Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique
function randomNumber(number){
    let arr =[];
    while(arr.length<7){
        let random =Math.floor(Math.random()*10);
        if(arr.indexOf(random) === -1)arr.push(random);
    }
    return arr
}
console.log(randomNumber())


//Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
  function  reverseCountries(arr){
      let revCoun = [];
      revCoun.push(countries)
      console.log(revCoun)
      let x = countries.reverse()
      console.log(x)
  }
  console.log(reverseCountries())