//Find out how many litres is Lubo's aquarium if you know its length, height and width in centimetres.
// Also, a certain percetange of the volume is used up by air pump, sand and plants. 
// 1 litre of water = 1 cubic decimeter 

function aquarium(input) {
    let length = Number(input[0])
    let width = Number(input[1]);
    let height = Number(input[2]);

    let volume = length * width * height; //result in cubic centimeters
    let cubicDecimeter = volume / 1000; //result in cubic decimeters

    let litres = cubicDecimeter; // 1 litre of water = 1 cubic decimeter

    let percentageUsedByPlants = (Number(input[3]) / 100) * litres;

    let total = litres - percentageUsedByPlants;

    console.log(total);

    
}

aquarium([
    "105 ",
    "77 ",
    "89 ",
    "18.5 "])