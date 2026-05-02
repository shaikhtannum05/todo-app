function changeImage(element) {
  document.getElementById("mainImage").src = element.src;
}

let qty = 1;

function increase() {
  qty++;
  document.getElementById("qty").innerText = qty;
}

function decrease() {
  if (qty > 1) {
    qty--;
    document.getElementById("qty").innerText = qty;
  }
}
function openTab(tabId) {
  let contents = document.querySelectorAll(".tab-content");
  contents.forEach(c => c.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
}
function addToCart() {
  let product = {
    name: "Gaming Laptop RTX",
    price: 75000,
    quantity: qty
  };

  localStorage.setItem("cartItem", JSON.stringify(product));

  alert("🛒 Product added to cart!");
}