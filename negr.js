let arr = [12 , 43 , 345 , 476 , 67 , 3 , 9 , 876,]

let cards = document.getElementById('cards')

arr.forEach((item)=> {
    let h1 = document.createElement('h1')
    h1.innerHTML = item;



    if (item > 3) {
        h1.style.backgroundColor = 'red'
    }

    if (item < 100) {
        h1.style.backgroundColor = 'green'
    }

cards.appendChild(h1)

console.log(h1);

})