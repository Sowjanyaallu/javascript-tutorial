let system = document.getElementById('dynamic')

let title = document.createElement('div')
title.className = 'container'
title.textContent= 'Number Generator'
console.log(title)

let titles
        for (let i = 0; i <=101; i++) {
            titles = document.createElement('h1')
            titles.className = 'title'
            titles.style.display = 'flex'
            if (i % 2 === 0) {
                titles.style.color = 'green'
              } else if( (titles[i-1] % 2 ===0) && titles[i] % 2 ===0 ) {
                titles.style.color = 'orange'
              } else {
                titles.style.color = ' yellow'
              }
            titles.textContent = i
            document.body.appendChild(titles)
        }

       
