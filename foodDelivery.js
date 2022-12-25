//A new restaurant starts work and they offer the following menus with discounts:
// Checken menu = 10.35
// Fish menu = 12.40
// Vegetarian menu = 8.15
// Dessert is 20% of the total bill. 
//Delivery = 2.50;
//Find out the total cost of the bill, given the number of chicken menus, fish menus and vegeterian ones. 

function foodDelivery(input) {
    let chickenMenu = Number(input[0]) * 10.35;
    let fishMenu = Number(input[1]) * 12.40;
    let vegetarianMenu = Number(input[2]) * 8.15;

    let order = chickenMenu + fishMenu + vegetarianMenu;

    let dessert = (20 * order) / 100;
    let delivery = 2.50;

    let bill = order + dessert + delivery;

    console.log(bill);
}

foodDelivery([
    "9 ",
    "2 ",
    "6 "])