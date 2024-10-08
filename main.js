const data = {
    All: [
        {
            id: 0,
            name: "Чизбургер-пицца",
            price: 395,
            img: "./assets/img1.png",
            number: 1,
        },
        {
            id: 1,
            name: "Сырная",
            price: 450,
            img: "./assets/img2.png",
            number: 1,
        },
        {
            id: 2,
            name: "Креветки по-азиатски",
            price: 290,
            img: "./assets/img3.png",
            number: 1,
        },
        {
            id: 3,
            name: "Сырный цыпленок",
            price: 385,
            img: "./assets/img4.png",
            number: 1,
        },
        {
            id: 4,
            name: "Чизбургер-пицца",
            price: 395,
            img: "./assets/img1.png",
            number: 1,
        },
        {
            id: 5,
            name: "Сырная",
            price: 450,
            img: "./assets/img2.png",
            number: 1,
        },
        {
            id: 6,
            name: "Креветки по-азиатски",
            price: 290,
            img: "./assets/img3.png",
            number: 1,
        },
        {
            id: 7,
            name: "Сырный цыпленок",
            price: 385,
            img: "./assets/img4.png",
            number: 1,
        },
    ],
    Meat: [
        {
            id: 0,
            name: "Чизбургер-пицца",
            price: 395,
            img: "./assets/img1.png",
            number: 1,
        },
        {
            id: 1,
            name: "Сырная",
            price: 450,
            img: "./assets/img2.png",
            number: 1,
        },
    ],
    Vigtails: [
        {
            id: 0,
            name: "Креветки по-азиатски",
            price: 290,
            img: "./assets/img3.png",
            number: 1,
        },
        {
            id: 1,
            name: "Сырный цыпленок",
            price: 385,
            img: "./assets/img4.png",
            number: 1,
        },
    ],
    Gril: [
        {
            id: 0,
            name: "Креветки по-азиатски",
            price: 290,
            img: "./assets/img3.png",
            number: 1,
        },
    ],
    Ostriy: [
        {
            id: 0,
            name: "Сырная",
            price: 450,
            img: "./assets/img2.png",
            number: 1,
        },
        {
            id: 1,
            name: "Креветки по-азиатски",
            price: 290,
            img: "./assets/img1.png",
            number: 1,
        },
    ],
    Close: [
        {
            id: 0,
            name: "Креветки по-азиатски",
            price: 290,
            img: "./assets/img1.png",
            number: 1,
        },
    ],
};



let totalAmount = 0;
let totalCount = 0;
const orders = JSON.parse(localStorage.getItem('orders')) || {};

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        const pizzaDiv = this.closest('.pizza');
        const pizzaName = pizzaDiv.querySelector('h2').innerText;
        const priceText = pizzaDiv.querySelector('.pizza_block').innerText;
        const price = parseInt(priceText.replace('от ', '').replace(' ₽', '').trim());


        totalAmount += price;
        totalCount += 1;

        orders[pizzaName] = (orders[pizzaName] || 0) + 1;

        
        localStorage.setItem('orders', JSON.stringify(orders));


        document.getElementById('totalAmount').innerText = totalAmount;
        document.getElementById('totalCount').innerText = totalCount;
    });
});




let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')
let counterElement = document.querySelector('#counter')


let count = 0;

function updateCounter() {
    counterElement.textContent = count;
}

button2.addEventListener('click', () => {
    count += 1;
    updateCounter();
});

button1.addEventListener('click', () => {
    count -= 1;
    updateCounter();
});