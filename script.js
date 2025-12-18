document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        closeMenu();
    });
});

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}

function closeMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.remove('show');
}

window.onload = function() {
    document.getElementById('popup-modal').style.display = 'block';
};

function closeModal() {
    document.getElementById('popup-modal').style.display = 'none';
}

const gameSelection = document.getElementById('game-selection');
const itemList = document.getElementById('item-list');
const stockTitle = document.getElementById('stock-title');
const itemsContainer = document.getElementById('items-container');
const backBtn = document.getElementById('back-btn');

const gameItems = {
    'fish-it': [
        { name: 'King Jelly', price: '5k', stock: 1, img: 'img/Fish it/jelly.png' },
        { name: 'Thin Shark', price: '4k', stock: 1, img: 'img/Fish it/thin shark.png' },
        { name: 'El Maja', price: '25k', stock: 1, img: 'img/Fish it/maja.png' },
        { name: 'Gladiator', price: '4k', stock: 2, img: 'img/Fish it/gladiator.png' },
        { name: '1M Coins', price: '4k/1M', stock: 11, img: 'img/Fish it/koin.png' }
    ],
    'grow-garden': [
        {name: 'Spino', ton: '', price: '6k', stock: 1, img: 'img/Gag/spinosaurus.webp'},
        {name: 'Swan', ton: '', price: '2k', stock: 2, img: 'img/Gag/swan.webp'},
        {name: 'Tiger', ton: '', price: '4k', stock: 1, img: 'img/Gag/tiger.webp'},
        {name: 'Lion', ton: '', price: '4k', stock: 2, img: 'img/Gag/lion.webp'},
        {name: 'Red fox', ton: '', price: '2k', stock: 1, img: 'img/Gag/redfox.webp'},
        {name: 'Mooncat', ton: '', price: '1k', stock: 5, img: 'img/Gag/mooncat.webp'},
        {name: 'Seal', ton: '', price: '1,5k', stock: 1, img: 'img/Gag/seal.webp'},
        {name: 'Blackcat', ton: '', price: '1k', stock: 8, img: 'img/Gag/blackcat.webp'},
        {name: 'Silver Dragonfly', ton: '', price: '1k', stock: 5, img: 'img/Gag/silverdragonfly.webp'},
        {name: 'Firefly', ton: '', price: '1k', stock: 5, img: 'img/Gag/firefly.webp'},
        {name: 'Crocodile', ton: '', price: '3k', stock: 2, img: 'img/Gag/crocodile.webp'},
        {name: 'Lemon Lion', ton: '', price: '2k', stock: 3, img: 'img/Gag/lemonlion.webp'},
        {name: 'Chicken Zombie', ton: '', price: '1k', stock: 1, img: 'img/Gag/chickenzombie.webp'},
        {name: 'Sugar Glider', ton: '', price: '1k', stock: 10, img: 'img/Gag/sugarglider.webp'},
        {name: 'Green Bean', ton: '', price: '1,5k', stock: 3, img: 'img/Gag/greenbean.webp'},
        {name: 'Spriggan', ton: '', price: '1k', stock: 3, img: 'img/Gag/spriggan.webp'},
        {name: 'Junkbot', ton: '', price: '1k', stock: 4, img: 'img/Gag/Junkbot.webp'},
        {name: 'Polar bear', ton: '', price: '2k', stock: 1, img: 'img/Gag/polarbear.webp'},
        {name: 'Turtle', ton: '', price: '1k', stock: 1, img: 'img/Gag/seaturtle.webp'},
        {name: 'Spaghetti Sloth', ton: '', price: '1k', stock: 1, img: 'img/Gag/sloth.webp'},
        {name: 'Blood Kiwi', ton: '', price: '1k', stock: 5, img: 'img/Gag/bloodkiwi.webp'},
        {name: 'Apple Gazelle', ton: '', price: '1k', stock: 2, img: 'img/Gag/applegazelle.webp'},
        {name: 'Shroomie', ton: '', price: '1k', stock: 6, img: 'img/Gag/shroomie.webp'},
        {name: 'Ostrich', ton: '', price: '1,5k', stock: 8, img: 'img/Gag/ostrich.webp'},
        {name: 'Peach Wasp', ton: '', price: '1k', stock: 2, img: 'img/Gag/peachwasp.webp'},
        {name: 'Pterodacly', ton: '', price: '1k', stock: 1, img: 'img/Gag/pterodactyl.webp'},
        {name: 'Grizzly bear', ton: '', price: '1k', stock: 3, img: 'img/Gag/grizzlybear.webp'}
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
