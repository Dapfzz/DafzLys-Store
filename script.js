document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const gameSelection = document.getElementById('game-selection');
const itemList = document.getElementById('item-list');
const stockTitle = document.getElementById('stock-title');
const itemsContainer = document.getElementById('items-container');
const backBtn = document.getElementById('back-btn');

const gameItems = {
    'fish-it': [
        { name: 'King Jelly', price: '7.000', stock: 1, img: 'img/Fish it/jelly.png' },
        { name: 'Thin Shark', price: '4.000', stock: 1, img: 'img/Fish it/thin shark.png' },
        { name: 'El Maja', price: '25.000', stock: 1, img: 'img/Fish it/maja.png' },
        { name: 'Gladiator', price: '4.000', stock: 2, img: 'img/Fish it/gladiator.png' },
        { name: '1M Coins', price: '5.000/1M', stock: 11, img: 'img/Fish it/koin.png' }
    ],
    'grow-garden': [
        {name: 'Mimic', price: '-', stock: '-', img: 'img/Gag/mimic.webp'},
        {name: 'Spinosaurus', price: '-', stock: '1', img: 'img/Gag/spinosaurus.webp'},
        {name: 'Lion', price: '-', stock: '2', img: 'img/Gag/lion.webp'},
        {name: 'Tiger', price: '-', stock: '1', img: 'img/Gag/tiger.webp'},
        {name: 'Peacock', price: '-', stock: '-', img: 'img/Gag/peacock.webp'},
        {name: 'Rainbow Mizuchi', price: '', stock: '', img: 'img/Gag/rainbowmizuchi.webp'},
        {name: 'Red Fox', price: '-', stock: '1', img: 'img/Gag/redfox.webp'},
        {name: 'Sea Turtle', price: '', stock: '', img: 'img/Gag/seaturtle.webp'},
        {name: 'Swan', price: '-', stock: '1', img: 'img/Gag/swan.webp'},
        {name: 'Dragon Fly', price: '-', stock: '-', img: 'img/Gag/dragonfly.webp'},
        {name: 'Cockatrice', price: '-', stock: '-', img: 'img/Gag/dragonfly.webp'}
    ]
};


document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', function() {
        const game = this.getAttribute('data-game');
        showItems(game);
    });
});

backBtn.addEventListener('click', function() {
    hideItems();
});

function showItems(game) {
    gameSelection.classList.add('hidden');
    itemList.classList.add('show');
    stockTitle.textContent = game === 'fish-it' ? 'Fish It Items' : 'Grow a Garden Items';

    itemsContainer.innerHTML = '';


    gameItems[game].forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        itemCard.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="item-img">
            <h3>${item.name}</h3>
            ${item.ton ? `<p>Ton: ${item.ton}</p>` : ''}
            <p>Price: ${item.price || '-'}</p>
            <p>Stock: ${item.stock}</p>
            <a href="https://wa.me/+6289624437963" class="btn">Chat Store</a>
        `;
        itemsContainer.appendChild(itemCard);
    });
}

function hideItems() {
    gameSelection.classList.remove('hidden');
    itemList.classList.remove('show');
    stockTitle.textContent = 'Select Game';

}