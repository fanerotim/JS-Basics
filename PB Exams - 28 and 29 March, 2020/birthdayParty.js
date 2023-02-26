function birthdayParty(input) {
    let rent = Number(input);

    let cake = rent * 0.20;
    let drinks = cake * 0.55;
    let actor = rent / 3;

    let fullCost = cake + drinks + actor + rent; 

    console.log(fullCost);
}

birthdayParty(["2250"]);
birthdayParty(["3720"]);
