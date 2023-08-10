function addItem() {
    const itemInput = document.getElementById("itemInput");
    const shoppingList = document.getElementById("shoppingList");

    if (itemInput.value.trim() !== "") {
        const newItem = document.createElement("li");
        newItem.innerHTML = `
        <span>${itemInput.value}</span>
        <button onclick="deleteItem(this)">Delete</button>
      `;
        shoppingList.appendChild(newItem);
        itemInput.value = "";
        itemInput.focus();
    }
}

function deleteItem(button) {
    const item = button.parentNode;
    item.parentNode.removeChild(item);
}
