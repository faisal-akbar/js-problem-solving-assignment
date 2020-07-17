// 1.Feet to Mile:
function feetToMile(ft) {
    var mile = ft / 5280;
    var mileFix = mile.toFixed(4);

    if (ft < 0) {
        return "Input can't be less than zero for distance";
    } else {
          return ft + " feet" + " = " + mileFix + " miles";
    }
}

console.log(feetToMile(1422));

/************************************************************************************/

// 2.Wood Calculator:
// Assumptions:
// for each chair require 1 cubit feet wood
// for each table require 3 cubit feet wood
// for each chair require 5 cubit feet wood

function woodCalculator(noChair, noTable, noBed) {
    var noWoodChair = noChair * 1;
    var noWoodTable = noTable * 3;
    var noWoodBed = noBed * 5;
    var totalWood = noWoodChair + noWoodTable + noWoodBed;

    if (noChair < 0 || noTable < 0 || noBed < 0) {
        return "Input can't be less than zero";
    } else {
        return "For " + noChair + " Chair, " + noTable + " Table, and " + noBed + " Bed; " + "total wood required is " + totalWood + " cubic feet";
    }
}

//Check output:
var woodCalcOut1 = woodCalculator(0, -1, 0);
console.log(woodCalcOut1);

var woodCalcOut2 = woodCalculator(5, 3, 0);
console.log(woodCalcOut2);

var woodCalcOut3 = woodCalculator(6, 2, 3);
console.log(woodCalcOut3);


/************************************************************************************/

// 3.Brick Calculator:
//Assumptions:
// For floor 1-10: 15 feet->For every feet 1000 brick * 15
//For floor 11-20: 12 feet->For every feet 1000 brick * 12
//For floor greater than 20: ->For every feet 1000 brick * 10


function brickCalculator(noFloor) {
    if (noFloor < 1) {
        return "Please enter a valid floor number";
    } else if (noFloor >= 1 && noFloor <= 10) {
        return "For " + noFloor + " floor building you need " + 15 * 1000 * noFloor + " bricks";
    } else if (noFloor >= 11 && noFloor <= 20) {
        return "For " + noFloor + " floor building you need " + 1000 * (12 * (noFloor - 10) + 15 * 10) + " bricks";
    } else {
        return "For " + noFloor + " floor building you need " + 1000 * (10 * (noFloor - 20) + 12 * 10 + 15 * 10) + " bricks";
    }
}


//check output:
var brickCalOut1 = brickCalculator(0);
console.log(brickCalOut1);

var brickCalcOut2 = brickCalculator(10);
console.log(brickCalcOut2);

var brickCalcOut3 = brickCalculator(12);
console.log(brickCalcOut3);

var brickCalcOut4 = brickCalculator(22);
console.log(brickCalcOut4);


/************************************************************************************/

// 4. Tiny Friend:
// Return friend with smallest name

var frndName = ['Smith', 'Robert', 'Jane', 'Abby', 'Bob', 'Gates', 'Steve Jobs', ];

function tinyFriend(nameArray) {
    var shortest = nameArray[0];

    if (nameArray.length > 0) {
        for (var i = 0; i < nameArray.length; i++) {
            var element = nameArray[i];
            if (typeof element === 'string' && element.length < shortest.length) {
                shortest = element;
            }
        }
        return shortest;
    } else {
        return "Please enter names in array";
    }

}


//check output:
console.log(tinyFriend(frndName));
console.log(tinyFriend([]));


/************************************************************************************/





//Using for loop:
// var shortest = frndName [0];
// if (frndName .length > 0) {
//     for (var i = 0; i < frndName .length; i++) {
//         var element = frndName [i];
//         if (typeof element === 'string' && element.length < shortest.length) {
//             shortest = element;
//             shortestLen = shortest.length;
//         }
//     }
// }
// console.log('The Shortest Name is: ', shortest, shortestLen);
