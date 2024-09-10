interface IItem {
    name: string;
    price: number;
}

const cart: IItem[] = []

function addItem(item: IItem) {
    cart.push(item)
    return `${item.name} item has been added`
}

function calculateTotalCost(items: IItem[]) {
    return items.reduce((total, item) => total + item.price, 0)
}

console.log(addItem({price: 100, name: 'iphone'}))
console.log(addItem({price: 200, name: 'laptop'}))
console.log(calculateTotalCost(cart))