// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  var price = product.querySelector('.price span').innerHTML; //getting price value
  var quantity = product.querySelector('.quantity input').value; //getting qty value
  
  var subtotalPrice = price * quantity; //calculating subtotal price
  product.querySelector('.subtotal span').innerHTML = subtotalPrice; //assigning subtotal price to the DOM element

  return subtotalPrice; //returning value of subtotal
}

function calculateAll() {
  // ITERATION 2
  var multipleProducts = document.querySelectorAll('.product'); //getting all products
  multipleProducts.forEach(product => updateSubtotal(product)); //calling subtotal function for each product

  // ITERATION 3
  var totalPrice = 0; //variable to store sum of subtotal prices
  multipleProducts.forEach(product => totalPrice += updateSubtotal(product)) //getting each subtotal price
  document.querySelector('#total-value span').innerHTML = totalPrice; //assigning total price to the DOM element
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
