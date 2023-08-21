//Exercise: Level 1

//write
//Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

const selector = document.querySelector('p')
//console.log(selector)

//Get each of the the paragraph using document.querySelector('#id') and by their id

const sector = document.querySelector('#para1')
//console.log(sector)

//Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name

//const sectorAll = document.querySelectorAll('p')
//console.log(sectorAll)

//Set a text content to paragraph the fourth paragraph,Fourth Paragraph
const allpara = document.querySelectorAll('p')
allpara[3].textContent = 'Fourth Paragraph'
console.log(allpara)

const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'
console.log(titles)


const Js_styles = document.querySelectorAll('p')

for(let i=0; i<Js_styles.length;i++){
    Js_styles[i].style.color = 'red'
    Js_styles[i].style.backgroundColor ='black'
    Js_styles[i].style.border = '3px solid red'
    Js_styles[i].style.fontSize = '24px'
    Js_styles[i].style.fontFamily = 'sans-serif'
    console.log(Js_styles)
}

  