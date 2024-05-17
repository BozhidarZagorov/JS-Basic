// function ekskurziq(input) {
    
//     let sleep = 20
//     let card = 1.60
//     let ticket = 6
//     // sum*1.25
//     let sum = 0

//     let people = Number(input[0])
//     let sleepCount = Number(input[1])
//     let cardCount = Number(input[2])
//     let ticketCount = Number(input[3])

//     sum = ((sleepCount*sleep + card*cardCount + ticket*ticketCount)*people)*1.25
//     console.log(sum.toFixed(2)); 


// }
// ekskurziq(["131",
// "9",
// "33",
// "46"])


// function maidenParty(input) {
    
//     let liubovnoPoslanie = 0.60
//     let vosychnaRoza = 7.20
//     let keyHolder = 3.60
//     let caricature = 18.20
//     let surprise = 22

//     let priceForParty = Number(input[0])
//     let liubovnoPoslanieCount = Number(input[1])
//     let vosychnaRozaCount = Number(input[2])
//     let keyHolderCount = Number(input[3])
//     let caricatureCount = Number(input[4])
//     let surpriseCount = Number(input[5])

//     let count = liubovnoPoslanieCount+vosychnaRozaCount+keyHolderCount+caricatureCount+surpriseCount
//     let sum  = liubovnoPoslanie*liubovnoPoslanieCount + vosychnaRoza*vosychnaRozaCount + keyHolder*keyHolderCount + caricature*caricatureCount + surprise*surpriseCount
//     if (count>=25) {
//         sum=sum*0.65
//     }
//     sum=sum*0.90
//     if (priceForParty<=sum) {
//         let moneyLeft = sum-priceForParty
//         console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
//     }else{
//         let moneyNeeded = priceForParty-sum
//         console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
//     }
// }
// maidenParty(["320",
// "8",
// "2",
// "5",
// "5",
// "1"])



// function excursion(input) {
    
//     let peopleCount = Number(input[0])
//     let season = input[1]

//     let sum = 0 

//     switch (season) {
//         case 'spring':
//             if (peopleCount <= 5) {
//                 sum=peopleCount*50
//             }else sum=peopleCount*48
//             break
//         case 'summer':
//             if (peopleCount <=5) {
//                 sum=peopleCount*48.50
//             }else sum = peopleCount*45
//             sum=sum*0.85
//             break
//         case 'autumn':
//             if (peopleCount <=5) {
//                 sum=peopleCount*60
//             }else sum=peopleCount*49.50
//             break
//         case 'winter':
//             if (peopleCount<=5) {
//                 sum = peopleCount*86
//             }else sum = peopleCount*85
//             sum=sum*1.08
//             break
//     }
//     console.log(`${sum.toFixed(2)} leva.`);



// }
// excursion(["20",
// "winter"])



// function savri(input) {
    
//     let days = Number(input[0])
//     let j = 1
//     let sumLitres = 0
//     let sumGrade = 0
//     let litres = 0
//     let grade = 0

//     for (let i = 1; i <= days; i++) {
//         litres = Number(input[j])
//         j++
//         grade = Number(input[j])
//         j++
//         sumLitres+=litres
//         sumGrade+=litres*grade
//     }
//     console.log(`Liter: ${sumLitres.toFixed(2)}`);
//     sumGrade=sumGrade/sumLitres
//     console.log(`Degrees: ${sumGrade.toFixed(2)}`);
//     if (sumGrade<38) {
//         console.log(`Not good, you should baking!`);
//     }else if (sumGrade>= 38 && sumGrade<=42) {
//         console.log(`Super!`);
//     }else if (sumGrade>42) {
//         console.log(`Dilution with distilled water!`);
//     }



// }
// savri(["2",
// "200",
// "43",
// "200",
// "40"])



// function hairSalon(input) {
    
//     let target = Number(input[0])
//     let i = 1
//     let j = 2
//     let sum = 0
//     let command = input[i]
//     let command2 = input[j]
//     while (command!== 'closed') {

//         switch (command) {
//             case 'haircut':
//                 if (command2 === 'mens') {
//                     sum+=15
//                 }else if (command2 === 'ladies') {
//                     sum+=20
//                 }else if (command2 === 'kids') {
//                     sum+=10
//                 }
//                 break
//             case 'color':
//                 if (command2 === 'touch up') {
//                     sum+=20
//                 }else if (command2=== 'full color') {
//                     sum+=30
//                 }
//                 break
//         }
//         if (sum>=target) {
//             break
//         }
//         i+=2
//         command = input[i]
//         j+=2
//         command2 = input[j]

//     }
//     if (target>sum) {
//         let moneyNeeded = target-sum
//         console.log(`Target not reached! You need ${moneyNeeded}lv. more.`);
//         console.log(`Earned money: ${sum}lv.`);
//     }else{
//         console.log(`You have reached your target for the day!`);
//         console.log(`Earned money: ${sum}lv.`);
//     }



// }
// hairSalon(["50",
// "color",
// "full color",
// "haircut",
// "ladies"])



// function sumAndProduct(input) {
    
//     let n = Number(input[0])
//     // let a = 1 ///do 9
//     // let b = 9 ///do a
//     // let c = 0 ///do 9
//     // let d = 9 ///do c
//     let breaker = 0
//     let sum = 0
//     let mnojitel = 0
//     for (let a = 1; a <= 9; a++) {
//         for (let b = 9; b >=a; b--) {
//             for (let c = 0; c <=9; c++) {
//                 for (let d = 9; d >= c; d--) {
//                     sum=a+b+c+d
//                     mnojitel = a*b*c*d
//                     if (sum === mnojitel && n%10 === 5) {
//                         console.log(`${a}${b}${c}${d}`);
//                         breaker++
//                         break
//                     }
//                     if (Math.floor(mnojitel/sum) === 3 & n%3 === 0) {
//                         console.log(`${d}${c}${b}${a}`);
//                         breaker++
//                         break
//                     }
//                     // if (a+b+c+d === a*b*c*d && n%10 === 5) {
//                     //     console.log(`${a}${b}${c}${d}`);
//                     //     breaker++
//                     //     break
//                     // }
//                     // if ((a*b*c*d)/(a+b+c+d) === 3 && n%3 === 0) {
//                     //     console.log(`${d}${c}${b}${a}`);
//                     //     breaker++
//                     //     break
//                     // }
//                 }
//                 if (breaker!== 0) {
//                     break
//                 }
//             }
//             if (breaker!== 0) {
//                 break
//             }
//         }
//         if (breaker!== 0) {
//             break
//         }
//     }
//     if (breaker === 0 ) {
//         console.log(`Nothing found`);
//     }

// }
// sumAndProduct(["123"])