/**
 * upto 100: --> 100
 * more then 101-200: --90
 * more then 200: --> 70
 */

function discountPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    else{
        const total = quantity * 70;
        return total;
    }
}

const total = discountPrice(201);
console.log(total);