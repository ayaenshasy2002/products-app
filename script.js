
let app = document.querySelector('.cards')

let container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)


fetch('https://fakestoreapi.com/products')
    .then((res) => {
        
        return res.json()

    }).then((data) => {
        data.forEach(movie => {

            let card = document.createElement('div')
            card.setAttribute('class', 'card')
            container.appendChild(card)

            let title = document.createElement('h1')
            title.textContent = movie.title
            card.appendChild(title)

            let description = document.createElement('p')
            description.textContent = movie.description
            card.appendChild(description)

        
            let price = document.createElement('h3')
            price.textContent = movie.price
            card.appendChild(price)
 
            let category = document.createElement('h4')
            category.textContent = movie.category
            card.appendChild(category)




 
        });
    }).catch(error => console.log(error));

