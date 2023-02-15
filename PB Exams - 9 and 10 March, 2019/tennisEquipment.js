function tennisEquipment(input) {
    let tennisRacketPrice = Number(input[0]);
    let tennisRacketCount = Number(input[1]);
    let shoesCount = Number(input[2]);

    let shoesPrice = tennisRacketPrice / 6;

    let totalPrice = (tennisRacketCount * tennisRacketPrice) + (shoesCount * shoesPrice);
    let otherEquipment = totalPrice * 0.20;
    totalPrice += otherEquipment;

    let moneyPaidByJokovic = totalPrice / 8;
    let moneyPaidBySponsors = totalPrice - moneyPaidByJokovic;

    console.log(`Price to be paid by Djokovic ${Math.floor(moneyPaidByJokovic)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(moneyPaidBySponsors)}`)

}

tennisEquipment([
    "850",
    "4",
    "2"
    ]);

tennisEquipment([
    "386",
    "7",
    "4"
    ])