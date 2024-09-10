var cart = [];
function addItem(item) {
    cart.push(item);
    return "".concat(item.name, " item has been added");
}
function calculateTotalCost(items) {
    return items.reduce(function (total, item) { return total + item.price; }, 0);
}
console.log(addItem({ price: 100, name: 'iphone' }));
console.log(addItem({ price: 200, name: 'laptop' }));
console.log(calculateTotalCost(cart));
