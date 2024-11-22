const phones = [
    { name: 'Samsung', price: 20000, camera: '12mp', color: 'black'},
    { name: 'Xoami', price: 18000, camera: '12mp', color: 'black'},
    { name: 'Oppo', price: 30000, camera: '12mp', color: 'black'},
    { name: 'Iphone', price: 100000, camera: '12mp', color: 'black'},
    { name: 'HTC', price: 27000, camera: '12mp', color: 'black'},
]

function getMostExpensivePhone(phones) {
    let mostExpensive = phones[0];
    for (const phone of phones) {
        if (phone.price > mostExpensive.price) {
            mostExpensive = phone;
        }
    }
    return mostExpensive;
}
const expensive = getMostExpensivePhone(phones);
console.log('Most expensive phone is:', expensive);