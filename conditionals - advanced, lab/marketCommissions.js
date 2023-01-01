//Write a function which receives a city name (string) and number of sells (integer). The function then calculates nad prints out
//the amount of the commission according to the below table:

// City (0 ≤ s ≤ 500) (500 < s ≤ 1 000) (1 000 < s ≤ 10 000) (s > 10 000)
// Sofia     5%              7%                  8%                 12%
// Varna     4.5%            7.5%               10%                 13%
// Plovdiv   5.5%            8%                 12%                 14.5%

//The outputed number needs to be rounded to 2 decimal places.
// If the provide dcity is invalid or the number of sells is a negative number, the function needs to output "error".

function marketCommission(input) {
    let city = input[0];
    let sells = Number(input[1]);
    let sum = 0;

    switch(city) {
        case "Sofia":
            if (sells >= 0 && sells <= 500) {
                sum = sells * 0.05;
            } else if (sells > 500 && sells <= 1000) {
                sum = sells * 0.07;
            } else if (sells > 1000 && sells <= 10000) {
                sum = sells * 0.08;
            } else if (sells > 10000) {
                sum = sells * 0.12;
            }
           
            if (sells > 0) {
                console.log(sum.toFixed(2));
                } else {
                    console.log("error");
                }
                break;
               
        case "Varna":
            if (sells >= 0 && sells <= 500) {
                sum = sells * 0.045;
            } else if (sells > 500 && sells <= 1000) {
                sum = sells * 0.075;
            } else if (sells > 1000 && sells <= 10000) {
                sum = sells * 0.1;
            } else if (sells > 10000) {
                sum = sells * 0.13;
            }

            if (sells > 0) {
                console.log(sum.toFixed(2));
                } else {
                    console.log("error");
                }
                break;
          
        case "Plovdiv":
            if (sells >= 0 && sells <= 500) {
                sum = sells * 0.055;
            } else if (sells > 500 && sells <= 1000) {
                sum = sells * 0.08;
            } else if (sells > 1000 && sells <= 10000) {
                sum = sells * 0.12;
            } else if (sells > 10000) {
                sum = sells * 0.145;
            }
            
            if (sells > 0) {
                console.log(sum.toFixed(2));
                } else {
                    console.log("error");
                }
                break;
 
        default: console.log("error");
        break;
    }
    
          
}

marketCommission((["Sofia", "1500"]));
marketCommission(["Plovdiv", "499.99"]);
marketCommission(["Varna", "3874.50"]);
marketCommission(["Varna", "-50"]);