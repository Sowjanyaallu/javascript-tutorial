//Write a JavaScript program to list the properties of a JavaScript object.
let student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
 };  
console.log(Object.keys(student))

//Write a JavaScript program to get the length of a JavaScript object.
let students = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
    
    console.log(Object.keys(students).length)

//Write a bubble sort algorithm in JavaScript.
function bubbleSort(arr)
{

  let m = arr.length-1
  let y = arr
  let swapp ;
  do{
      swapp = false
      for(let i=0;i<m;i++){
          if(y[i]>y[i+1]){
              let temp = y[i];
              y[i]= y[i+1];
              y[i+1] = temp;
              swapp = true
              
          }
      }
     
  } while(swapp)
  return arr
 
}
console.log(bubbleSort([6,4,0, 3,-2,1]))

//Write a JavaScript program that returns a subset of a string.
function combinators(string){
    let comb = [];
    for(let x = 0; x < string.length; x++)
    {
        for(let y = x+1; y < string.length+1;y++)
        {
            comb.push(string.slice(x,y))
        }
    }
    return comb
}
console.log(combinators('dog'))

// Write a JavaScript program to create a clock.
function clock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    
   console.log(`${h}:${m}:${s}`)
  }
  setInterval(clock,1000)

//Write a JavaScript function to retrieve all the values of an object's properties.
let studentss = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
    
console.log(Object.values(studentss))

//Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
let studenTs =  { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12  };
  console.log(studenTs);
  delete student.rollno;
  console.log(studenTs);

  //Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
let library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (let i = 0; i < library.length; i++) 
   {
    let book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }

//Write a JavaScript program to calculate circle area and perimeter.
//Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.
function circles(radius)
   {
       this.radius = radius;
     // area method
       this.area = function () 
       {
           return Math.PI * this.radius * this.radius;
       };
     // perimeter method
       this.perimeter = function ()
       {
           return 2*Math.PI*this.radius;
       };
   }
 var c = new circles(3);
   console.log('Area =', c.area().toFixed(2));
   console.log('perimeter =', c.perimeter().toFixed(2));


//Write a JavaScript program to sort an array of JavaScript objects.
for(let i =0 ;i< library.length;i++)
   {
       console.log(Object.entries(library[i]).sort())  
}

//Write a JavaScript function to check whether an object contains a given property.
function hasKey(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  }
console.log(hasKey({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}, "green"));


//Write a JavaScript function to retrieve all the values of an object's properties.
let obj = {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}
const values = Object.keys(obj).map(function(key)
  { return obj[key]})
console.log(values)

