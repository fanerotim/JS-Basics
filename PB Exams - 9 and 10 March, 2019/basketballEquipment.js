function basketballEquipment(input) {
    let yearlyFee = Number(input[0]);

    let sneakers = yearlyFee * 0.60;
    let jersey = sneakers * 0.80;
    let ball = jersey / 4;
    let accessories = ball / 5;

    let totalCost = sneakers + jersey + ball + accessories + yearlyFee;

    console.log(totalCost.toFixed(2));
}

basketballEquipment(["320"]);
basketballEquipment(["550"]);