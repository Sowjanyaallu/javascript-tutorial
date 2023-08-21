function fullName(){
    let firstName = 'sowjanya'
    let lastName = 'allu'
    let fullName = firstName+ " " +lastName
    console.log(fullName)
}
fullName( )

function fullName(firstName,lastName){
    let fullName = `${firstName} ${lastName}`
    return fullName
}
console.log(fullName('sowjanya','allu'))


function addTwoNum(one,two){
        let sum = one+two
        return sum
}
console.log(addTwoNum(2,7))

function areaOfRectangle(length,width){
    let area = length*width
    return area
  
}
console.log(areaOfRectangle(20,15))



function perimeterOfRectangle(length,width){
    let perimeter = 2*(length+width)
    return perimeter
}
console.log(perimeterOfRectangle(8,4))


function  areaOfCircle(pi,r){
    let area = pi*r*r
    return area
}
console.log(areaOfCircle(3.14,10))


function circumOfCircle(pi,radius){
    let circum = 2*pi*radius
    return circum
}
console.log(circumOfCircle(3.14,9))


function speedOfMovingObject(distance,time){
    let speed =distance/time
    return speed
}
console.log(speedOfMovingObject(30,5))


function weight(mass,gravity){
    let substance = mass*gravity
    return substance
}
console.log(weight(40,9.8))


function convertCelsiusToFahrenheit(temperture){
    let oF=(temperture*9/5)+32
    return oF
}
console.log(convertCelsiusToFahrenheit(100))

function bmi(weight,height){
    let bmi= weight/height*height
    if( bmi <=18.5){
     console.log('underweight')
    } else if( bmi <= 24.9){
    console.log('normal')
    } else if(bmi <=29.5){
    console.log('overweight')
    } else if(bmi>=30){
    console.log('obese')
    } else{
    console.log("")
    }
      return bmi
}
console.log(bmi(60,5.32))

function checkSeason(month){
    switch(month){
    case 'november','september','octomber':
    console.log('Autumn')
    break
    case  'december','january','febaury':
    console.log('winter')
    break
    case 'march','april','may':
    console.log('spring')
    break
    case 'june','july','august':
    console.log('summer')
    break
    default:
    console.log('please enter a valid month')
    }
    return month
}
console.log(checkSeason('may'))

function  findMax(){
    let  maxNum=0
    for(i=0;i<arguments.length;i++){
    if(arguments[i]>maxNum){
     maxNum = arguments[i];
    }
    
    }
console.log(maxNum)
}
findMax(0,10,5)
findMax(0,-10,-5)
