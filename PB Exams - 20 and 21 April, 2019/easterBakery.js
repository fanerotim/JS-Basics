function easterBakery(input) {
    let flourPricePerKg = Number(input[0]);
    let flourCount = Number(input[1]);
    let sugarCount = Number(input[2]);
    let eggCartonCount = Number(input[3]);
    let yeastCount = Number(input[4]);

    let sugarPricePerKg = flourPricePerKg * 0.75;
    let eggCartonPrice = flourPricePerKg + (flourPricePerKg * 0.10);
    let yeastPrice = sugarPricePerKg * 0.20;

    let totalPrie = (flourCount * flourPricePerKg) + (sugarCount * sugarPricePerKg) + (eggCartonCount * eggCartonPrice) + (yeastCount * yeastPrice);

    console.log(totalPrie.toFixed(2));
}

easterBakery([
    "50",
    "10",
    "3.5",
    "6",
    "1"])

easterBakery([
    "63.44",
    "3.57",
    "6.35",
    "8",
    "2"])

