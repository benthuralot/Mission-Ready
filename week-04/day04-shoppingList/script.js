console.log("connected!");

// Select Elements
const itemInputEl = document.querySelector("#item");
const quantityInputEl = document.querySelector("#quantity");
const addButtonEl = document.querySelector("#add");
const shoppingListDisplayEl = document.querySelector("#shopping-list-display");

// initial shopping list variable
const shoppingList = [];

// 1️⃣ When click button, add item to shopping list (save value in variable)
// when button is clicked, log both <input> value in console.
addButtonEl.addEventListener("click", (event) => {
  //Prevent the default behaviour of our button (which is to submit the form and refresh the page)​
  event.preventDefault();

  console.log(itemInputEl.value);
  console.log(quantityInputEl.value);
  //use array.push() add the item to the list​
  shoppingList.push({
    item: itemInputEl.value,
    quantity: +quantityInputEl.value,
  });
  console.log(shoppingList);
  displayListItems();
});

// 2️⃣ Display shopping list (display variable)
function displayListItems() {
  //clear the display
  shoppingListDisplayEl.innerHTML = "";
  // shoppingListDisplayEl.innerHTML = "Display"
  shoppingList.forEach((element, index) => {
    //    display each item in <p>
    console.log(element.item, element.quantity);
    console.log(index);
    //update the HTML to what is currently rendered, plus a new string​ and a delete icon
    // shoppingListDisplayEl.innerHTML = shoppingListDisplayEl.innerHTML + `${element.item} x ${element.quantity}<br/>`
    shoppingListDisplayEl.innerHTML += `${element.item} x ${element.quantity} <span onclick="deleteItem(${index})">❌</span><br/>`;
  });
}
// 3️⃣ Delete Item in shopping list  (Delete value in variable)
function deleteItem(itemIndex) {
  //delete the item in the array​
  shoppingList.splice(itemIndex, 1);
  console.log(shoppingList);
  displayListItems();
}

// -----------------Shopping Basket-------------------------------------
//Select element
const shoppingBasketEl = document.querySelector("#shopping-basket");
const checkBasketButton = document.querySelector("#basket-btn");
const itemsStillToBuyEl = document.querySelector("#items-still-to-buy-display");

//1️⃣When Basket Button clicked, we need to compare input.value with shoppingList
checkBasketButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(shoppingBasketEl.value);
  // String to array
  const basket = shoppingBasketEl.value.toLowerCase().split(",");
  console.log(basket);
  //2️⃣Find out the items which are not inside of the Basket (Variable)
  //filter() returns a new array of elements which pass the condition (true)
  //1. filter shoppingList
  const itemsStillToBuy = shoppingList.filter((itemEl) => {
    //2. if basket array "includes" this itemEl return false (we want the item not in the basket)
    //3. if basket array not "includes" this itemEl return true (we will add this item to itemsStillToBuy array)
    //4. Be aware of case sensitive.
    // if (basket.includes(itemEl.item)) {
    //     return false
    // } else {
    //     return true
    // }
    return !basket.includes(itemEl.item.toLowerCase());
  });
  console.log(itemsStillToBuy);
  //3️⃣display the items we still need to get
  //if itemsStillToBuy array is empty, then display a success message
  if (itemsStillToBuy.length === 0) {
    itemsStillToBuyEl.innerHTML = "You got everything!🙂";
  } else {
    //if itemsStillToBuy is not empty, then display all items in the itemsStillToBuy array
    // clear the display and add the sentance
    itemsStillToBuyEl.innerHTML =
      "Here are the items you still need to get:<br/>";
    // display all elements in itemsStillToBuy by forEach()
    itemsStillToBuy.forEach((element) => {
      //update the HTML to what is currently rendered, plus a new string
      itemsStillToBuyEl.innerHTML =
        itemsStillToBuyEl.innerHTML +
        `${element.item} x ${element.quantity}<br/>`;
    });
  }
});
