const games = [
  { name: "Red Dead Redemption 2", price: 199, oldPrice: 399, img: "images/rdr2.jfif" },
  { name: "Grand Theft Auto V", price: 199, oldPrice: 399, img: "images/gta5.jfif" },
  { name: "Resident Evil 2", price: 239, oldPrice: 459, img: "images/eldr.jpg" },
  { name: "Cyberpunk 2077", price: 199, oldPrice: 399, img: "images/cyber.jpg" },
  { name: "The Witcher 3: Wild Hunt – GOTY Edition", price: 199, oldPrice: 399, img: "images/witcher3.jfif" },
  { name: "Sekiro: Shadows Die Twice ", price: 199, oldPrice: 399, img: "images/sekiro.jfif" },
  { name: "Dark Souls III", price: 199, oldPrice: 399, img: "images/dark3.jfif" },
  { name: "Dark Souls Remastered", price: 179, oldPrice: 359, img: "images/remastered.jfif" },
  { name: "Horizon Zero Dawn Complete Edition ", price: 249, oldPrice: 499, img: "images/horizon.jfif" },
  { name: "God of War (2018)", price: 249, oldPrice: 499, img: "images/godofwar.jfif" },
  { name: "Resident Evil 2", price: 199, oldPrice: 399, img: "images/2.jfif" },
  { name: "Resident Evil 3", price: 199, oldPrice: 399, img: "images/3.jpeg" },
  { name: "Resident Evil 4", price: 249, oldPrice: 499, img: "images/4.png" },
  { name: "Resident Evil 7", price: 199, oldPrice: 399, img: "images/7.jfif" },
  { name: "Grand Theft auto Vice Cit", price: 50, oldPrice: 100, img: "images/gtavc.jpg" },
  { name: "Days Gone", price: 199, oldPrice: 399, img: "images/daysgone.jfif" },
  { name: "Assassin’s Creed Odyssey ", price: 299, oldPrice: 599, img: "images/odyssey.jfif" },
  { name: "Assassin’s Creed Origins", price: 215, oldPrice: 430, img: "images/origins.jfif" },
  { name: "Assassin’s Creed Valhalla ", price: 199, oldPrice: 399, img: "images/valhalla.jfif" },
  { name: "Watch Dogs 2 ", price: 239, oldPrice: 459, img: "images/dos2.jfif" },
  { name: "Black Myth Wukong ", price: 249, oldPrice: 469, img: "images/wukong.jfif" },
  { name: " A Way Out Multiplayer", price: 299, oldPrice: 599, img: "images/wayout.jfif" },
  { name: "WWE 2K24", price: 399, oldPrice: 599, img: "images/2k24.jfif" },
  { name: " Assassins Creed Shadows Deluxe Edition", price: 2399, oldPrice: 599, img: "images/deluxe.jfif" },
  // images
];

const container = document.getElementById("games-container");
const cartBtn = document.getElementById("cart-btn");
const cartPopup = document.getElementById("cart-popup");
const cancelCart = document.getElementById("cancel-cart");
const cartItemsList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const continueCart = document.getElementById("continue-cart");

let cart = [];

games.forEach(game => {
  const div = document.createElement("div");
  div.classList.add("game-card");
  div.innerHTML = `
    <img src="${game.img}" alt="${game.name}">
    <h3>${game.name}</h3>
    <div class="price">
      <span class="old-price">₹${game.oldPrice}</span>
      <span class="new-price">₹${game.price}</span>
    </div>
    <button class="add-to-cart">Add to Cart</button>
  `;
  div.querySelector(".add-to-cart").addEventListener("click", () => addToCart(game));
  container.appendChild(div);
});

cartBtn.addEventListener("click", () => {
  cartPopup.classList.remove("hidden");
  updateCart();
});

cancelCart.addEventListener("click", () => {
  cartPopup.classList.add("hidden");
});

function addToCart(game) {
  cart.push(game);
  updateCart();
}

function updateCart() {
  cartItemsList.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${item.img}" width="40"> ${item.name} - ₹${item.price}
      <button onclick="removeFromCart(${index})" style="float:right;color:red;">X</button>
    `;
    cartItemsList.appendChild(li);
  });
  cartTotal.textContent = `Total: ₹${total}`;
  const message = encodeURIComponent(`Hello, I want to buy these games:\n${cart.map(i => i.name + " - ₹" + i.price).join("\n")}\nTotal: ₹${total}`);
  continueCart.href = `https://wa.me/917973156083?text=${message}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}
