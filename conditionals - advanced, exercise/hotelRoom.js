//A hotel offers 2 types of rooms - studio and apartment. Write a function which calculates the price of the whole period for the studio
// and apartment. The pricing is determined by the month of the year. 

// May and October                  June and September                   July and August
// Studio - 50 per night            Studio - 75.20 per night             Studio - 76 per night
// Apartment - 65 per night         Apartment - 68.70 per night          Apartment - 77 per night

//The following discounts are offered:
//For more than 7 nights during May and October - 5% discount
//More than 14 nights during May and October - 30% discount
//More than 14 nights during June and September - 20% discount
//More than 14 nights in any month for an Apartment - 10% discount 

//We receive two arguments - month and number of nights 
// The output (price for the whole period) needs to be rounded to 2 decimal points

function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let studio = 0;
    let apartment = 0;

    switch(month) {
        case "May":
        case "October":
            studio = 50;
            apartment = 65;

            if (nights > 14) {
                studio -= studio * 0.30;
                apartment -= apartment * 0.10;
            } else if (nights > 7) {
                studio -= studio * 0.05;
            }
            break;

        case "June":
        case "September":
            studio = 75.20;
            apartment = 68.70;

            if (nights > 14) {
                studio -= studio * 0.20;
                apartment -= apartment * 0.10;
            }
            break;

        case "July":
        case "August":
            studio = 76;
            apartment = 77

            if  (nights > 14) {
                apartment -= apartment * 0.10;
            }

            break;
    }

    let apartmentSum = nights * apartment;
    let studioSum = nights * studio;

    console.log(`Apartment: ${apartmentSum.toFixed(2)} lv.`)
    console.log(`Studio: ${studioSum.toFixed(2)} lv.`)
}

hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
hotelRoom(["August", "20"]);
// hotelRoom(["August", "15"]);