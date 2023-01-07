//Bojidara has a couple of houses and wants to green their gardens. Write a function that would calculate the required amount of money
//which Bojidara needs to pay for this. The price of 1 square meter is 7.61. Because her garden is quite big, the company that would do the greening offers 18% discount from the final price.
// We receive the square meters that would need to be greened. 

function yardGreening(input) {
    let squareM = Number(input[0]);

    let cost = squareM * 7.61;
    let discount = cost * 0.18;
    let finalPrice = cost - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"]);
yardGreening(["150"]);