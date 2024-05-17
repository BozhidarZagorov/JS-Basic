// function examPrep(input) {

//     let peopleCount = Number(input[0])
//     let tax = Number(input[1])
//     let priceShazlong = Number(input[2])
//     let priceChadyr = Number(input[3])

//     let theChadarCount = Math.ceil(peopleCount/2)
//     let shazlongCount = Math.ceil(peopleCount*0.75)
//     let sum = peopleCount*tax + priceChadyr*theChadarCount + priceShazlong*shazlongCount

//     console.log(`${sum.toFixed(2)} lv.`);

// }
// examPrep(["50",

// "6",

// "8",

// "4"])


// function safari(input) {

//     let budget = Number(input[0])
//     let litres = Number(input[1])
//     let day = input[2]

//     let PricePerLitre = 2.10
//     let priceForTraveler = 100

//     sum = priceForTraveler + litres*PricePerLitre
//     if (day === 'Sunday') {
//         sum=sum*0.80
//     }else if (day === 'Saturday') {
//         sum=sum*0.90
//     }

//     if (budget>= sum) {
//         let moneyLeft = budget-sum
//         console.log(`Safari time! Money left: ${moneyLeft.toFixed(2)} lv.`);
//     }else{
//         let moneyNeeded = sum-budget
//         console.log(`Not enough money! Money needed: ${moneyNeeded.toFixed(2)} lv.`);
//     }

// }
// safari(["120",

// "30",

// "Saturday"])


// function turAgency(input) {

//     let city = input[0]
//     let packet = input[1]
//     let VIP = input[2]
//     let days = Number(input[3])
//     let sum = 0
//     if (days >= 7) {
//         days-=1
//     }
//     let breaker = 0
//     if (city === 'Bansko') {
//         switch (packet) {
//             case 'noEquipment':
//                 sum+=80*days
//                 if (VIP === 'yes') {
//                     sum = sum*0.95
//                 }        
//                 break;
//             case 'withEquipment':
//                 sum+=100*days
//                 if (VIP === 'yes') {
//                     sum = sum*0.90
//                 }
//                 break
//             default:
//                 console.log("Invalid input!");
//                 breaker++
//                 break;
//         }
//     }else if (city === 'Borovets') {
//         switch (packet) {
//             case 'noEquipment':
//                 sum+=80*days
//                 if (VIP === 'yes') {
//                     sum =sum*0.95
//                 }        
//                 break;
//             case 'withEquipment':
//                 sum+=100*days
//                 if (VIP === 'yes') {
//                     sum=sum*0.90
//                 }
//                 break
//             default:
//                 console.log("Invalid input!");
//                 breaker++
//                 break;
//         }
//     }else if (city === 'Varna') {
//         switch (packet) {
//             case 'noBreakfast':
//                 sum+=100*days
//                 if (VIP === 'yes') {
//                     sum=sum*0.93
//                 }        
//                 break;
//             case 'withBreakfast':
//                 sum+=130*days
//                 if (VIP === 'yes') {
//                     sum=sum*0.88
//                 }
//                 break
//             default:
//                 console.log("Invalid input!");
//                 breaker++
//                 break;
//         }
//     }else if (city === 'Burgas') {

//         switch (packet) {
//         case 'noBreakfast':
//             sum+=100*days
//             if (VIP === 'yes') {
//                 sum=sum*0.93
//             }        
//             break;
//         case 'withBreakfast':
//             sum+=130*days
//             if (VIP === 'yes') {
//                 sum=sum*0.88
//             }
//             break
//         default:
//             console.log("Invalid input!");
//             break;
//         }
//     }else{
//         console.log("Invalid input!");
//         breaker++
//     }

//     if (days < 1) {
//         console.log("Days must be positive number!");
//     }else if (breaker>0) {
//         return
//     }
//     else if (days>1) {
//         console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`);
//     }



// }
// turAgency(["Gabrovo",

// "noBreakfast",

// "no",

// "3"])


// function fitness(input) {

//     let backCount = 0
//     let chestCount = 0
//     let absCount = 0
//     let legsCount = 0
//     let proteinShakeCount = 0
//     let proteinBarCount = 0

//     let ppl = Number(input[0])

//     for (let currentPerson = 1; currentPerson <= ppl; currentPerson++) {
//         let currentStatus = input[currentPerson]
//         switch (currentStatus) {
//             case 'Back': backCount++; break
//             case 'Abs': absCount++; break
//             case 'Chest': chestCount++; break
//             case 'Legs': legsCount++; break
//             case 'Protein shake': proteinShakeCount++; break
//             case 'Protein bar': proteinBarCount++; break
//         }
//     }
// let totaTrainPeople = backCount+chestCount+absCount+legsCount
// let totalProteinPPl = proteinBarCount+proteinShakeCount

//     console.log(`${backCount} - back`);
//     console.log(`${chestCount} - chest`);
//     console.log(`${legsCount} - legs`);
//     console.log(`${absCount} - abs`);
//     console.log(`${proteinShakeCount} - protein shake`);
//     console.log(`${proteinBarCount} - protein bar`);
//     console.log(`${((totaTrainPeople/ppl)*100).toFixed(2)}% - work out`);
//     console.log(`${((totalProteinPPl/ppl)*100).toFixed(2)}% - protein`);


// }
// fitness(["7","Chest","Back","Legs","Legs","Abs","Protein shake","Protein bar"])

// function club(input) {

//     let income = Number(input[0])
//     i = 1
//     sum=0
//     let command = input[i]
//     sumAll = 0
//     while (command != 'Party!') {
//         let cocktainName = input[i]
//         let coctaiPrice=cocktainName.length
//         i++
//         let coctailCount = Number(input[i])
//         sum = coctaiPrice*coctailCount
//         if (sum%2 !== 0) {
//             sum = sum*0.75
//         }
//         sumAll = sumAll+sum
//         if (sumAll>=income) {
//             console.log('Target acquired.');
//             break
//         }
//         i++
//         command = input[i]

//     }
//     if (income>sumAll) {
//         console.log(`We need ${(income-sumAll).toFixed(2)} leva more.`);
//     }

//     console.log(`Club income - ${sumAll.toFixed(2)} leva.`);
// }
// club(["500",

// "Bellini",

// "6",

// "Bamboo",

// "7",

// "Party!"])

// function EasterCompetition(input) {

//     let kozunaci = Number(input[0])
//     let j = 1
//     let command = input[j]
//     let sum = 0
//     let max = 0
//     let maxName = ''
//     let name = input[j]
//     j++
//     for (let i = 1; i <= kozunaci; i++) {
//         command = input[j]
//         while (command !== 'Stop') {
//             let points = Number(input[j])
//             sum += points
//             j++
//             command = input[j]
//         }
//         console.log(`${name} has ${sum} points.`);
//         if (max < sum) {
//             max = sum
//             maxName = name
//             console.log(`${name} is the new number 1!`);
//         }
//         j++
//         name = input[j]
//         j++
//         sum = 0


//     }
//     console.log(`${maxName} won competition with ${max} points!`);

// }
// EasterCompetition(["3", "Chef Manchev", "10", "10", "10", "10", "Stop", "Natalie", "8", "2", "9", "Stop", "George", "9", "2", "4", "2", "Stop"])