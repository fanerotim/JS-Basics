//For a certain period of time a hospital every day receives new patients. In the hospital work 7 doctors and each doctor can take care of 1 patient per day.
//Sometimes there is a shortage of doctors, so the the rest of the patients are sent to other hospitals. Every 3rd day, the hospital evaluates the situation and 
//if the number of untreated patients is more than the number of treated patients, they hire 1 more doctor. The addition of the doctor happens before patients are admitted tl tne hospital on that day. 
//Write a programme which calculates the number of treated and untreated patients for that period. 
// We receive: 1. The period for which we need to make calculations. Next lines include the number of patients that arrive for that specific day. 
// Print out the number of treated and untreated patients for that period. 


function hospital(input) {
    let period = Number(input[0]);

    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;

    let patientsForOtherHospitals = 0;
    let patientsForOurHospital = 0;

    for (let i = 1; i <= period; i++) {
        let patientsForDay = Number(input[i]);

        if (i % 3 === 0 && untreatedPatients > treatedPatients) {
            doctors += 1;
        }
    
        if (patientsForDay <= doctors) {
            treatedPatients += patientsForDay;
        } else {
            patientsForOtherHospitals = (patientsForDay - doctors);
            patientsForOurHospital = (patientsForDay - patientsForOtherHospitals);
            
            untreatedPatients += patientsForOtherHospitals;
            treatedPatients += patientsForOurHospital;
        }
    }

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}

// hospital([
//     "4",
//     "7",
//     "27",
//     "9",
//     "1"
//     ]);

// hospital([
//     "6",
//     "25",
//     "25",
//     "25",
//     "25",
//     "25",
//     "2"
//     ]);

// hospital([
//     "3",
//     "7",
//     "7",
//     "7"
//     ]);
