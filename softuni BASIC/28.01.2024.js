// function nums() {
    
//     for (let currentNum = 1;currentNum  <= 1000;currentNum ++) {
//         if (currentNum%10===7) {
//             console.log(currentNum);
//         }
        
//     }

// }
// nums()

// function zad2(input) {
    
//     let multiplier = Number(input[0])

//     for (let multiplier1 = 1; multiplier1 <= 10; multiplier1++) {
//         console.log(`${multiplier1} * ${multiplier} = ${multiplier*multiplier1}`);
        
//     }

// }
// zad2(["5"])

// function zad3(input) {
    
//     let numsCount = Number(input[0])

//     let count1 = 0
//     let count2 = 0
//     let count3 = 0
//     let count4 = 0
//     let count5 = 0

//     for (let i = 1 ; i <= numsCount; i++){
        
//         let currNum = Number(input[i])

//         if (currNum<200) {
//             count1++
//         }else if (currNum<400) {
//             count2++
//         }else if (currNum<600) {
//             count3++
//         }else if (currNum<800) {
//             count4++
//         }else count5++

       
//     }
//     let percent1 = (count1 / numsCount) * 100
//     let percent2 = (count2 / numsCount) * 100
//     let percent3 = (count3 / numsCount) * 100
//     let percent4 = (count4 / numsCount) * 100
//     let percent5 = (count5 / numsCount) * 100
//     console.log(`${percent1.toFixed(2)}%`)
//     console.log(`${percent2.toFixed(2)}%`)
//     console.log(`${percent3.toFixed(2)}%`)
//     console.log(`${percent4.toFixed(2)}%`)
//     console.log(`${percent5.toFixed(2)}%`)


// }
// zad3(["3","1","2","999"])

// function zad4(input) {
    
//     let age = Number(input[0])
//     let waherPrice = Number(input[1])
//     let pricePerToy = Number(input[2])

//     let moneySaved = 0
//     let moneyGiven = 10
//     for (let currBirthDay = 1; currBirthDay <= age; currBirthDay++) {
//         if (currBirthDay%2 !==0) {
//             moneySaved+=pricePerToy
//         }else{
//             moneySaved+=moneyGiven - 1
//             moneyGiven+=10
//         }
        
//     }
//     if (moneySaved>=waherPrice) {
//         let moneyLeft = moneySaved - waherPrice
//         console.log(`Yes! ${moneyLeft.toFixed(2)}`);
//     }else{
//         let moneyNeeded = waherPrice - moneySaved
//         console.log(`No! ${moneyNeeded.toFixed(2)}`);
//     }

// }
// zad4(["21",

// "1570.98",

// "3"])

// function zad5(input) {
    
//     let tabsCount = Number(input[0])
//     let salary = Number(input[1])

//     for (let i = 2; i < input.length; i++) {
//         let website = input[i]
        
//         if (website === 'Facebook') {
//             salary-=150
//         }else if (website === 'Instagram') {
//             salary-=100
//         }else if (website === 'Reddit') {
//             salary -=50
//         }
//         if (salary<=0) {
//             console.log("You have lost your salary.")
//             return
//         }
//     }

//     console.log(salary);


// }
// zad5(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"])

// function zad8(input) {
    
//     let tournamCount = Number(input[0])
//     let initPoints = Number(input[1])

//     let seasonPoints = 0
//     let winCount = 0
//     for (let i = 2; i < tournamCount+2; i++) {
//         let result = input[i]
        
//         switch (result) {
//             case 'W':
//                 seasonPoints+=2000
//                 winCount++
//                 break;
//             case 'F':
//                 seasonPoints+=1200
//                 break
//             case 'SF':
//                 seasonPoints+=720
//                 break
//         }
//     }
//     console.log(`Final points: ${initPoints+seasonPoints}`)
//     let averaged = seasonPoints / tournamCount
//     console.log(`Average points: ${Math.floor(averaged)}`)
//     let winPerc = winCount /tournamCount *100
//     console.log(`${winPerc.toFixed(2)}%`);
// }
// zad8(["5"

// ,"1400",

// "F",

// "SF",

// "W",

// "W",

// "SF"])

// zad 6
// function oscars(input) {
    
//     let actor = input[0]
//     let points =Number(input[1])
//     let graders = input[2]
//     let j = 3
//     let p = 4

//     for (let i = 0; i < graders; i++) {
//         let graderName = input[j]
//         let graderPoints = input[p]

//         points = points + ((graderName.length *graderPoints)/2)
//         if (points>=1250.5) {
//             console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`);
//             break
//         }
//         j+=2
//         p+=2
//     }
//     if (points<1250.5) {
//         let pointsNeeded = 1250.5-points
//         console.log(`Sorry, ${actor} you need ${pointsNeeded.toFixed(1)} more!`);
//     }


// }
// oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])

// zad 7

// function Treck(input) {
    
//     let groups = Number(input[0])

//     let musalaPll = 0
//     let monblanPll = 0
//     let kilimandjaroPll = 0
//     let k2Pll = 0
//     let everestPll = 0
//     let sumPll = 0

//     for (let i = 1; i <= groups; i++) {
//         let groupPll = Number(input[i])
//         if (groupPll<=5) {
//             musalaPll = musalaPll+groupPll
//         }else if (groupPll >=6 && groupPll <= 12) {
//             monblanPll = monblanPll + groupPll
//         }else if (groupPll >=13 && groupPll <= 25) {
//             kilimandjaroPll = kilimandjaroPll + groupPll
//         }else if (groupPll >=26 && groupPll <= 40) {
//             k2Pll = k2Pll + groupPll
//         }else everestPll = everestPll +groupPll
//     }
//     sumPll = musalaPll + monblanPll + kilimandjaroPll + k2Pll + everestPll
//     console.log(`${(musalaPll/sumPll*100).toFixed(2)}%`);
//     console.log(`${(monblanPll/sumPll*100).toFixed(2)}%`);
//     console.log(`${(kilimandjaroPll/sumPll*100).toFixed(2)}%`);
//     console.log(`${(k2Pll/sumPll*100).toFixed(2)}%`);
//     console.log(`${(everestPll/sumPll*100).toFixed(2)}%`);

// }
// Treck(["5",

// "25",

// "41",

// "31",

// "250",

// "6"])
