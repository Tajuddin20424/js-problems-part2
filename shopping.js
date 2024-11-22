
/**
 * shirt price --> 500
 * pant price --> 300
 * shoe price --> 900
 */


// function shoppingQuantity(shirtPrice, pantPrice, shoePrice){
//     const shirtPrice = 500;
//     const pantPrice = 300;
//     const shoePrice = 900;

//     const shirtPrice = shirtPrice * shoppingQuantity;
//     const pantPrice = pantPrice * shoppingQuantity;
//     const shoePrice = shoePrice * shoppingQuantity;

//     const shoppingQuantity = shirtPrice + pantPrice + shoePrice;
//     return shoppingQuantity;
// }

// const wood =shoppingQuantity(1, 1, 4);
// console.log('shoe needed', shoe);




/**
 * Shirt price --> 500
 * Pant price --> 300
 * Shoe price --> 900
 */

function shoppingCost(shirtQuantity, pantQuantity, shoeQuantity) {

    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 900;
    const totalCost = shirtQuantity * shirtPrice + pantQuantity * pantPrice + shoeQuantity * shoePrice;

    return totalCost;
}

const total = shoppingCost(1, 1, 4); 
console.log('Total shopping cost:', total);
