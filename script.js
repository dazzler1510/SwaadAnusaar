menu = {
        "Appetizers": [
            { name: "Paneer Tikka", description: "Marinated paneer grilled with spices." },
            { name: "Samosa", description: "Fried pastry with spiced potatoes and peas.", image: "src/img/menu/samosa.jpg" },
            { name: "Aloo Tikki", description: "Spiced potato patties with coriander and green chilies." },
            { name: "Papdi Chaat", description: "Crispy dough wafers served with potatoes, chickpeas, and tangy chutneys." },
            { name: "Pakora", description: "Fried fritters made from vegetables and gram flour." },
            { name: "Bhel Puri", description: "Puffed rice with vegetables and a tangy tamarind sauce." },
            { name: "Kachori", description: "Fried flour balls stuffed with spiced lentils." },
            { name: "Dahi Vada", description: "Fried lentil balls soaked in yogurt and topped with spices." },
            { name: "Paneer Pakora", description: "Paneer slices fried in a gram flour batter." },
            { name: "Sev Puri", description: "Puffed puris topped with potatoes, onions, sev, and chutneys." },
            { name: "Gobi Manchurian", description: "Cauliflower florets in a tangy Manchurian sauce." }
        ],
        "Main Courses": [
            { name: "Butter Chicken", description: "Creamy tomato curry with tender chicken pieces.", image:"" },
            { name: "Palak Paneer", description: "Paneer cubes in a smooth spinach sauce." },
            { name: "Chole Bhature", description: "Spicy chickpeas curry served with fried bread called Bhature." },
            { name: "Chicken Tikka Masala", description: "Grilled chicken chunks in a spicy sauce." },
            { name: "Rogan Josh", description: "Aromatic lamb dish cooked with Kashmiri spices." },
            { name: "Dal Makhani", description: "Creamy lentil preparation made with kidney beans and butter." },
            { name: "Biryani", description: "Fragrant rice dish with spiced meat or vegetables." },
            { name: "Aloo Gobi", description: "Potato and cauliflower stir-fried with turmeric and spices." },
            { name: "Fish Curry", description: "Fish cooked in a spicy and tangy curry sauce." },
            { name: "Kadai Paneer", description: "Paneer cooked in a spicy gravy with bell peppers and onions." },
            { name: "Malai Kofta", description: "Vegetable and paneer balls in a creamy, rich gravy." }
        ],
        "Desserts": [
            { name: "Gulab Jamun", description: "Soft milk-solid balls soaked in rose flavored syrup." },
            { name: "Ras Malai", description: "Cottage cheese balls in a creamy milk sauce." },
            { name: "Jalebi", description: "Crispy, syrupy spirals of deep-fried flour batter." },
            { name: "Kheer", description: "Indian rice pudding made with milk and sugar." },
            { name: "Carrot Halwa", description: "Slow-cooked grated carrots in milk, sugar, and nuts." },
            { name: "Barfi", description: "Dense milk-based sweet, often flavored with fruit or nuts." },
            { name: "Rasgulla", description: "Spongy cottage cheese balls soaked in sugar syrup." },
            { name: "Ladoo", description: "Ball-shaped sweets made from flour, ghee, and sugar." },
            { name: "Peda", description: "Soft, fudge-like sweets made from thickened milk and sugar." },
            { name: "Kulfi", description: "Traditional Indian ice cream made with condensed milk." },
            { name: "Shrikhand", description: "Sweet dessert made of strained yogurt with cardamom and saffron." }
        ],
        "Beverages": [
            { name: "Masala Chai", description: "Spiced milk tea." },
            { name: "Mango Lassi", description: "Yogurt-based mango milkshake." },
            { name: "Chai", description: "Indian-style tea with milk and sugar." },
            { name: "Sweet Lassi", description: "Sweetened yogurt-based drink, often flavored."}
        ]
};

function formatImageName(name) {
    return name.toLowerCase().replace(/\s+/g, '_') + '.jpg';
}

Object.keys(menu).forEach(category => {
    menu[category].forEach(item => {
        item.image = "src/img/menu/" + formatImageName(item.name);
    });
});
    
    
function setupCategoryButtons() {
    document.getElementById('appetizers-btn').addEventListener('click', function() {
        loadMenuCategory('Appetizers');
    });

    document.getElementById('mains-btn').addEventListener('click', function() {
        loadMenuCategory('Main Courses');
    });

    document.getElementById('desserts-btn').addEventListener('click', function() {
        loadMenuCategory('Desserts');
    });

    document.getElementById('beverages-btn').addEventListener('click', function() {
        loadMenuCategory('Beverages');
    });
}


// Initialize the button setup
setupCategoryButtons();

function loadMenuCategory(category) {
    const menuItems = menu[category];
    let content = `<h2>${category}</h2><div>`;

    menuItems.forEach(item => {
        content += `
            <div class="menu-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="menu-description">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <input type="number" class="quantity-selector" value="1" min="1">
                    <button class="apply-button">Apply</button>
                </div>
            </div>`;
    });

    content += '</div>';
    document.getElementById('menu-content').innerHTML = content;
}



document.getElementById('appetizers-btn').click()

function setupMenuItems() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('selected');
            // Reset quantity to 1 and hide Apply button when deselected
            if (!this.classList.contains('selected')) {
                this.querySelector('.quantity-selector').value = 1;
                this.querySelector('.apply-button').style.display = 'none';
            }
        });
    });
}

setupMenuItems()