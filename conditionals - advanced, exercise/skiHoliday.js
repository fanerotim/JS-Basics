//Atanas decides to go on a holiday to Bansko and to skii. Before he goes he needs to book a hotel and calculate how much it would cost him.
//The following rooms are available - room for one person 18 leva per night, apartment 25 leva per night, president apartment 35 leva per night.
// Based on the number of days he would stay there (10 days = 9 nights) and type of room he chooses, he could get different discount:

// type of room                    less than 10 days                        10-15 days                          more than 15 days
//room for one person               no discount                             no discount                             no discount
//apartment                     30% discount of final price       35% discount of final price               50% discount of final price
//president apartment           10% discount of final price       15% discount of final price               20% discount of final price  

//After the holiday Atanas can give a feedbacl - positive or negative. If the feedback is positive Atanas gives a 25% tip of the final price with the discount.
//If the feedback is negative he deducts 10% of the final price with the disocunts included. 

// We receive: days of the holiday, type of room, and feedback.
// The final price needs to be rounded to 2 decimal places. 

function skiHoliday(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];

    let roomForOnePerson = 18.00 * (days - 1);
    let apartment = 25.00 * (days - 1);
    let presidentApartment = 35.00 * (days - 1);

    switch(roomType) {
        case "room for one person":
            break;
        
        case "apartment":
            if (days < 10) {
                apartment -= apartment * 0.30;
            } else if (days >= 10 && days <= 15) {
                apartment -= apartment * 0.35;
            } else {
                apartment -= apartment * 0.50;
            }
            break;
        
        case "president apartment":
            if (days < 10) {
                presidentApartment -= presidentApartment * 0.10;
            } else if (days >= 10 && days <= 15) {
                presidentApartment -= presidentApartment * 0.15;
            } else {
                presidentApartment -= presidentApartment * 0.20;
            }
            break;
    }

    if (feedback === "positive") {
        roomForOnePerson += roomForOnePerson * 0.25;
        apartment += apartment * 0.25;
        presidentApartment += presidentApartment * 0.25;
    } else if (feedback === "negative") {
        roomForOnePerson -= roomForOnePerson * 0.10;
        apartment -= apartment * 0.10;
        presidentApartment -= presidentApartment * 0.10;
    }

   if (roomType === "apartment") {
    console.log(apartment.toFixed(2));
   } else if (roomType === "room for one person") {
    console.log(roomForOnePerson.toFixed(2));
   } else {
    console.log(presidentApartment.toFixed(2));
   }

}

// skiHoliday(["14", "apartment", "positive"]);
// skiHoliday(["30", "president apartment", "negative"]);
// skiHoliday(["12", "room for one person", "positive"]);
// skiHoliday(["2", "apartment", "positive"]);