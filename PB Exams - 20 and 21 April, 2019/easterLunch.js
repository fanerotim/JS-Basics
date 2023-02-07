function easterLunch(input) {
    let easterBreadCount = Number(input[0]);
    let eggCrustCount = Number(input[1]);
    let cookiesKilograms = Number(input[2]);

    let easterBreadPrice = 3.20;
    let eggCrustPrice = 4.35;
    let cookiesPricePerKilo = 5.40;
    let eggPaint = 0.15;

    let numberOfEggs = eggCrustCount * 12;

    let eggPaintPrice = numberOfEggs * eggPaint;

    let finalPrice = (easterBreadCount * easterBreadPrice) + (eggCrustCount * eggCrustPrice) + (cookiesKilograms * cookiesPricePerKilo) + eggPaintPrice;
    
    console.log(finalPrice.toFixed(2));
}

// easterLunch([
//     "3",
//     "2",
//     "3"]);

easterLunch([
    "4",
    "4",
    "3"])

