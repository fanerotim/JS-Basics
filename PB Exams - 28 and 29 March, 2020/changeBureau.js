function changeBureau(input) {
    let bitcoinCount = Number(input[0]);
    let chineseYuan = Number(input[1]);
    let comission = Number(input[2]);
    
    let bitCoinInLeva = bitcoinCount * 1168;
    let chineseYuanInDollar = 0.15 * chineseYuan;

    let chineseYuanInLeva = chineseYuanInDollar * 1.76;

    let totalMoneyInEuro = (bitCoinInLeva + chineseYuanInLeva) / 1.95;
    let comissionCost = totalMoneyInEuro * (comission / 100);

    totalMoneyInEuro = totalMoneyInEuro - comissionCost;

    console.log(totalMoneyInEuro.toFixed(2));
}

// changeBureau(["1", "5", "5"])
// changeBureau(["20", "5678", "2.4"])
changeBureau(["7", "50200.12", "3"])