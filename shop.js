const shopItems = [
    { name: "Bestsellr Pack", price: "5 Chapters", image: "images/Bestsellr Pack.png" },
    { name: "Hardcopy of your Story", price: "2 Chapters", image: "images/hardcopy.png" },
    { name: "Book Grant - $5 (Stackable)", price: "1 Chapter", image: "images/bookgrant.png" },
    { name: "BookMarks (Set of 4)", price: "2 Chapters", image: "images/bookmarks.png" },
    { name: "Hack Club Stickers (Set of 5)", price: "1 Chapters", image: "images/stickers.png" },
    { name: "Kindle Subscription Grant", price: "3 Chapters", image: "images/kindle.png" },
    { name: "Pocket Friendly Book Lamp", price: "3 Chapters", image: "images/booklamp.png" },
    { name: "Book Themed Tote Bag", price: "2 Chapters", image: "images/totebag.png" },
    { name: "Illusion Metal Bookends", price: "4 Chapters", image: "images/bookends.png" },
    { name: "A Diary", price: "1 Chapters", image: "images/diary.png" },
    { name: "DIY Book Nook Kit", price: "9 Chapters", image: "images/booknooks.png" },
    { name: "Bestsellr Magazine", price: "5 Chapters", image: "images/magazine.png" },
    { name: "Vintage Scrapbook Kit", price: "3 Chapters", image: "images/scrapbook.png" },
    { name: "Mystery Gift", price: "7 Chapters", image: "images/mystery.png" }
];

function generateShopGrid(items, containerId) {
    const container = document.getElementById(containerId);
    
    const gridHTML = items.map(item => 
        `<div class="shop-grid-card">
            <div class="shop-grid-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <h3>${item.name}</h3>
            <p class="shop-grid-price">${item.price}</p>
        </div>`
    ).join('');

    container.innerHTML = gridHTML;
}

generateShopGrid(shopItems, 'shop-grid');
