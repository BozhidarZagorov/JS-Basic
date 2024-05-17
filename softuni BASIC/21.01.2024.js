// zad 1
// function kino(input) {
    
//     let movieType = input[0]
//     let rows = Number(input[1])
//     let cols = Number(input[2])

//     let totalSeats = rows*cols
//     let profit = 0
    
//     if (movieType === 'Premiere') {
//         profit = totalSeats*12
//     }else if (movieType === 'Normal') {
//         profit = totalSeats * 7.50
//     }else if (movieType === 'Discount') {
//         profit = totalSeats * 5
//     }
//     console.log(`${profit.toFixed(2)} leva`);

// }
// kino(["Premiere",

// "10",

// "12"])

// zad 2 

// function Outfit(input) {
    
//     let degrees = Number(input[0])
//     let partOfDay = input[1]
//     let outfit = ''
//     let shoes = ''
    
//     switch (partOfDay) {
//         case 'Morning':
//             if (degrees<=18) {
//                 outfit = 'Sweatshirt'
//                 shoes = 'Sneakers'
//             }else if (degrees<=24) {
//                 outfit = 'Shirt'
//                 shoes = 'Moccasins'
//             }else{
//                 outfit = 'T-Shirt'
//                 shoes = 'Sandals'
//             }
//             break
//         case 'Afternoon':
//             if (degrees<=18) {
//                 outfit = 'Shirt'
//                 shoes = 'Moccasins'
//             }else if (degrees<=24) {
//                 outfit = 'T-Shirt'
//                 shoes = 'Sandals'
//             }else{
//                 outfit = 'Swim Suit'
//                 shoes = 'Barefoot'
//             }
//             break
//         case 'Evening':
//             outfit = 'Shirt'
//             shoes = 'Moccasins'
//             break
//     }

//     console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
// }
// Outfit(["16",

// "Morning"])

// zad 3

// function NewHouse(input) {
    
//     let flowerType = input[0]
//     let flowerCount = Number(input[1])
//     let budget = Number(input[2])

//     let price = 0
    

//     switch (flowerType) {
//         case 'Roses':
//             price = flowerCount*5
//             break
//         case 'Dahlias':
//             price = flowerCount*3.80
//             break
//         case 'Tulips':
//             price = flowerCount*2.80
//             break
//         case 'Narcissus':
//             price = flowerCount*3
//             break
//         case 'Gladiolus':
//             price = flowerCount*2.50
//             break
//     }

//     if (flowerType === 'Roses' && flowerCount > 80) {
//         price = 0.9 * price
//     }else if (flowerType === 'Dahlias'&&flowerCount>90) {
//         price = 0.85*price
//     }else if (flowerType === 'Tulips'&&flowerCount>80) {
//         price = 0.85*price
//     }else if (flowerType === 'Narcissus'&&flowerCount<120) {
//         price= price*1.15
//     }else if (flowerType === 'Gladiolus'&&flowerCount<80) {
//         price=price*1.2
//     }

// if (budget>=price) {
//     let leftMoney = budget - price
//     console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${leftMoney.toFixed(2)} leva left.`);
// }else{
//     let moneyNeeded = price - budget 
//     console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
// }

// }
// NewHouse(["Roses",

// "55",

// "250"])

// zad 4

// function fishBoat(input) {
    
//     let budget = Number(input[0])
//     let season = input[1]
//     let fisherCount = Number(input[2])

//     let price = 0
    
//     switch (season) {
//         case 'Spring':
//             price = 3000
//             break
//         case 'Summer':
//         case 'Autumn':
//             price = 4200
//             break
//         case 'Winter':
//             price = 2600
//             break
//     }

//     if (fisherCount<=6) {
//         price = price *0.9
//     }else if (fisherCount <= 11 ) {
//         price = price * 0.85
//     }else{
//         price = price * 0.75
//     }
//     if (fisherCount % 2 === 0 && season!== 'Autumn') {
//         price = price * 0.95
//     }
//     if (budget>= price) {
//         let leftMoney = budget - price
//         console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);
//     }else{
//         let moneyNeeded = price - budget
//         console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
//     }

// }
// fishBoat(["3000",

// "Summer",

// "11"])

// zad 9 

// function skiTrip(input) {
//     let dayCount = Number(input[0])
//     let nightCout = dayCount - 1
//     let spaceType = input[1]
//     let feedback = input[2]

//     let price = 0

//     switch (spaceType) {
//         case 'room for one person':
//             price = nightCout*18
//             break;
//         case 'apartment':
//             price=nightCout*25
//             if (nightCout<10) {
//                 price = price*0.7
//             }else if (nightCout<=15) {
//                 price = price*0.65
//             }else price = price*0.5
//             break
//         case 'president apartment':
//             price = nightCout*35
//             if (nightCout<10) {
//                 price = price*0.9
//             }else if (nightCout<=15) {
//                 price = price*0.85
//             }else price = price*0.8
//             break
//     }

//     if (feedback === 'positive') {
//         price=price*1.25
//     }else price = price*0.9

//     console.log(price.toFixed(2));

// }
// skiTrip(["14",

// "apartment",

// "positive"])

// function numOperations(input) {
    
//     let num1 = Number(input[0])
//     let num2 = Number(input[1])
//     let operator = input[2]

//     let result = 0
//     let oddOrEven = ''

//     switch (operator) {
//         case '+':
//             result = num1 + num2
//             if(result % 2 === 0){
//                 oddOrEven = 'even'
//             }else oddOrEven = 'odd'
//             console.log(`${num1} ${operator} ${num2} = ${result} - ${oddOrEven} `)
//             break
//         case '-':
//             result = num1 - num2
//             if(result % 2 === 0){
//                 oddOrEven = 'even'
//             }else oddOrEven = 'odd'
//             console.log(`${num1} ${operator} ${num2} = ${result} - ${oddOrEven} `)
//             break
//         case '*':
//             result = num1 * num2
//             if(result % 2 === 0){
//                 oddOrEven = 'even'
//             }else oddOrEven = 'odd'
//             console.log(`${num1} ${operator} ${num2} = ${result} - ${oddOrEven} `)
//             break
//         case '/':
//             if (num2 === 0) {
//                 console.log(`Cannot divide ${num1} by zero`);
//             }else{result = num1 / num2
//             console.log(`${num1} ${operator} ${num2} = ${result.toFixed(2)}`)
//             }
//             break
//         case '%':
//             if (num2 === 0) {
//                 console.log(`Cannot divide ${num1} by zero`);
//             }else{result = num1 % num2
//             console.log(`${num1} ${operator} ${num2} = ${result}`)
//             }
//             break
//     }

// }
// numOperations(["123", "0", "%"])
// // (["10",

// // "12",

// // "+"])

// za domashno zada4i 5 

// zad 8

// if (prist < izp && prist-izp <=30) {
    
// }

    // let test = 90%60               //moje da se polzva za ostatyka ot chasovete
    // if( (vremeto na izpita - vremeto na pristigane) >= 60)      proverqva dali e pove4e ot 4as ili ravno
    // console.log(test);

//mojeshe samo obshtArrive - obshtExam >=60 poneje vinagi shte e tolkova za log(chasovete) kakto i na 306
// dosta ot proverkite tuk sa izlishni naprimer kydeto e sigurno 4e e pove4e ot 4as i zaradi tova teji s pone oshte 1 if nqkolko pyti

// zad 8 emotional damage

// function examOnTime(input) {
    
//     let hrExam = Number(input[0])
//     let minExam = Number(input[1])
//     let hrArrive = Number(input[2])
//     let minArrive = Number(input[3])
//     let obshtExam = hrExam*60 +minExam
//     let obshtArrive = hrArrive*60 +minArrive

//     if (obshtArrive - obshtExam >0 && obshtArrive - obshtExam >=60) {                                           
//         let cif = Math.floor((obshtArrive - obshtExam)/60)
//         console.log("Late");
//             if (obshtArrive - obshtExam <10) {
//                 console.log(`${hrArrive - hrExam}:0${obshtArrive - obshtExam} hours after the start`);
//             }else if ((obshtArrive - obshtExam)%60 ===0) {
//                 console.log(`${hrArrive - hrExam}:00 hours after the start`);
//             }else if ((obshtArrive - obshtExam)%60<10) {
//                 console.log(`${cif}:0${(obshtArrive - obshtExam)%60} hours after the start`);
//                 // console.log("fr");
//             }else console.log(`${cif}:${(obshtArrive - obshtExam)%60} hours after the start`);
            
        
//     }else if (obshtArrive - obshtExam >0) {
//         console.log("Late");
//         console.log(`${obshtArrive - obshtExam} minutes after the start`);
//         // if (obshtArrive - obshtExam <10) {
//         //     console.log(`0${obshtArrive - obshtExam} minutes after the start`);
//         // }else console.log(`${obshtArrive - obshtExam} minutes after the start`);
        
//     }else if (obshtExam - obshtArrive >30 && obshtExam - obshtArrive >=60) {
//         console.log("Early");
//         let cif = Math.floor((obshtExam - obshtArrive)/60)
//         if (obshtExam - obshtArrive<10) {
//             console.log(`${hrExam - hrArrive}:0${obshtExam - obshtArrive} hours before the start`);
//         }else if ((obshtExam - obshtArrive)%60 === 0) {
//             console.log(`${hrExam - hrArrive}:00 hours before the start`);
//         }else if ((obshtExam - obshtArrive)%60 < 10) {
//             console.log(`${cif}:0${(obshtExam - obshtArrive)%60} hours before the start`);
//         }else console.log(`${cif}:${(obshtExam - obshtArrive)%60} hours before the start`);
            
//     }else if (obshtExam - obshtArrive >30){
//         console.log("Early");
//         console.log(`${obshtExam - obshtArrive} minutes before the start`);

//     }else if (obshtExam - obshtArrive >0 || obshtExam - obshtArrive <=30) {
//         console.log("On time");
//         if (obshtExam - obshtArrive !== 0) {
//             console.log(`${obshtExam - obshtArrive} minutes before the start`);
//         }
//         // if (obshtExam - obshtArrive < 10) {
//         //     console.log(`0${obshtExam - obshtArrive} minutes before the start`);
//         // }else console.log(`${obshtExam - obshtArrive} minutes before the start`);
        
//     }

// }
// examOnTime(["23","00","21", "59"])


// // (["21","59","23", "00"])

// zad 7

// function hotelRoom(input) {
    
//     let month = input[0]
//     let days = Number(input[1])

//     switch (month) {
//         case "May":
//         case "October":
//             let sumStud = 50
//             let sumApart = 65
//             if (days<=7) {
//                 sumApart = sumApart*days
//                 sumStud = sumStud* days
//                 console.log(`Apartment: ${sumApart.toFixed(2)} lv.`);
//                 console.log(`Studio: ${sumStud.toFixed(2)} lv.`);
//             }else if (days>7 && days<=14) {
//                 sumApart = sumApart*days
//                 sumStud = sumStud*days - (sumStud*days)*0.05
//                 console.log(`Apartment: ${sumApart.toFixed(2)} lv.`);
//                 console.log(`Studio: ${sumStud.toFixed(2)} lv.`);
//             }else if (days>14) {
//                 sumApart = sumApart*days - (sumApart*days)*0.10
//                 sumStud = sumStud*days - (sumStud*days)*0.30
//                 console.log(`Apartment: ${sumApart.toFixed(2)} lv.`);
//                 console.log(`Studio: ${sumStud.toFixed(2)} lv.`);
//             }
//             break;
//         case "June":
//         case "September":
//             let sumStud1 = 75.20
//             let sumApart1 = 68.70
//             if (days>14) {
//                 sumApart1 = sumApart1*days - (sumApart1*days)*0.10
//                 sumStud1 = sumStud1*days - (sumStud1*days)*0.20
//                 console.log(`Apartment: ${sumApart1.toFixed(2)} lv.`);
//                 console.log(`Studio: ${sumStud1.toFixed(2)} lv.`);
//             }else{
//                 sumApart1 = sumApart1*days
//                 sumStud1 = sumStud1*days
//                 console.log(`Apartment: ${sumApart1.toFixed(2)} lv.`);
//                 console.log(`Studio: ${sumStud1.toFixed(2)} lv.`);
//             }
//             break
//         case "July":
//         case "August":
//             let sumStud2 = 76
//             let sumApart2 = 77
//             if (days>14) {
//                 sumStud2 = sumStud2*days
//                 sumApart2 = sumApart2*days - (sumApart2*days)*0.10
//                 console.log(`Apartment: ${sumApart2.toFixed(2)} lv.`);
//                 console.log(`Studio: ${sumStud2.toFixed(2)} lv.`);
//             }else{
//                 sumStud2 = sumStud2*days
//                 sumApart2 = sumApart2*days
//                 console.log(`Apartment: ${sumApart2.toFixed(2)} lv.`);
//                 console.log(`Studio: ${sumStud2.toFixed(2)} lv.`);
//             }
//             break
//     }


// }
// hotelRoom(["August", "0"])

// zad 5

// camp if summer 
//hotel if winter or europe

// function traveler(input) {
    
//     let budget = Number(input[0])
//     let season = input[1]

//     switch (season) {
//         case "summer":
//             let spent = 0
//             if (budget<=100) {
//                 // Първи ред – "Somewhere in [дестинация]" измежду "Bulgaria", "Balkans" и "Europe"
//                 // Втори ред – "{Вид почивка} – {Похарчена сума}"
//                 spent =budget*0.30
//                 console.log(`Somewhere in Bulgaria`);
//                 console.log(`Camp - ${spent.toFixed(2)}`);
//             }else if (budget>100 && budget<=1000) {
//                 spent =budget*0.40
//                 console.log(`Somewhere in Balkans`);
//                 console.log(`Camp - ${spent.toFixed(2)}`);
//             }else{
//                 spent =budget*0.90
//                 console.log(`Somewhere in Europe`);
//                 console.log(`Hotel - ${spent.toFixed(2)}`);
//             }
//             break;
//         case "winter":
//             let spentw = 0
//             if (budget<=100) {
//                 // Първи ред – "Somewhere in [дестинация]" измежду "Bulgaria", "Balkans" и "Europe"
//                 // Втори ред – "{Вид почивка} – {Похарчена сума}"
//                 spentw =budget*0.70
//                 console.log(`Somewhere in Bulgaria`);
//                 console.log(`Hotel - ${spentw.toFixed(2)}`);
//             }else if (budget>100 && budget<=1000) {
//                 spentw =budget*0.80
//                 console.log(`Somewhere in Balkans`);
//                 console.log(`Hotel - ${spentw.toFixed(2)}`);
//             }else{
//                 spentw =budget*0.90
//                 console.log(`Somewhere in Europe`);
//                 console.log(`Hotel - ${spentw.toFixed(2)}`);
//             }
//             break;
//     }



// }
// traveler(["1500", "summer"])