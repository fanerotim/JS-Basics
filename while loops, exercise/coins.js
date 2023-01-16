//Manufacturers of vending machines wanted to make their machines return as little coins of change as possible. Write a function, which receives a sum - the change which the machine needs to return
//and it calculates the lowest number of coins which it can return the change in. For example: if the change is 1lev, the machine returns the change with 1 coin of 1 lev.
//The possible coins are: 2lv, 1lv, 50st, 20st, 10st, 5st, 2st, 1st.


function coins(input) {
    let index = 0;

    let change = Number(input[index]);

    let stotinki = Math.floor(change * 100);
    let conins = 0;

    let oneLev = 0;
    let twoLeva = 0;
    let fifty = 0;
    let twenty = 0;
    let ten = 0;
    let five = 0;
    let two = 0;
    let one = 0;

    while(stotinki > 0) {
        if (stotinki >= 200) {
            twoLeva++;
            stotinki -= 200;
        } else if (stotinki >= 100) {
            oneLev++;
            stotinki -= 100;
        } else if (stotinki >= 50) {
            fifty++;
            stotinki -= 50;
        } else if (stotinki >= 20) {
            twenty++;
            stotinki -= 20;
        } else if (stotinki >= 10) {
            ten++;
            stotinki -= 10;
        } else if (stotinki >= 5) {
            five++;
            stotinki -= 5;
        } else if (stotinki >= 2) {
            two++;
            stotinki -= 2;
        } else {
            one++;
            stotinki -= 1;
        }
    }
    let result = oneLev + twoLeva + fifty + twenty + ten + five + two + one;

    console.log(result)
}

coins(["1.23"]);
coins(["2"]);
coins(["0.56"]);
coins(["2.73"]);