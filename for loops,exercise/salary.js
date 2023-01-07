//An owner of a company noticed that his emplyees spend a lot of time browsing websites in working hours. 
//To stop this, he starts checking the browser tabs of his employees. The following sanctions were introducted:
// Facebook - 150lv, Instagram - 100lv, Reddit - 50lv.
//We receive two inputs - number of open tabs and salary.
//If during the checks the salary becomes 0 or less, the program should stop immediately and the following output is expected "You have lost your salary".
//Else we should print out the remaining salary of the employee.  

function salary(input) {
    let openTabs = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 2; i <= openTabs + 1; i++) {
        let arrayCount = input[i];

        switch(arrayCount) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;
        } 
        
        if (salary <= 0) {
            break;
        }  
    }

    if (salary <= 0) {
        console.log("You have lost your salary.")
    } else {
        console.log(salary)
    }
}

// salary([
//     "10",
//     "750",
//     "Facebook",
//     "Dev.bg",
//     "Instagram",
//     "Facebook",
//     "Reddit",
//     "Facebook",
//     "Facebook"])

// salary([
//     "3",
//     "500",
//     "Github.com",
//     "Stackoverflow.com",
//     "softuni.bg"]);

// salary([
//     "3",
//     "500",
//     "Facebook",
//     "Stackoverflow.com",
//     "softuni.bg"]);