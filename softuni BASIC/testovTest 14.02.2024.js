// function easterBakary(input) {
    
//     let flourPrice = Number(input[0])
//     let flourKG = Number(input[1])
//     let sugarKG = Number(input[2])
//     let eggsCarton = Number(input[3])
//     let eastPackets = Number(input[4])

//     let SugarPrice = flourPrice*0.75
//     let eggsPrice = flourPrice*1.10
//     let eastPrice = SugarPrice*0.20

//     let sum = flourPrice*flourKG + SugarPrice*sugarKG + eggsCarton*eggsPrice + eastPackets*eastPrice
//     console.log(sum.toFixed(2));


// }
// easterBakary(["63.44",
// "3.57",
// "6.35",
// "8",
// "2"])

// function EasterGuest(input) {
//     // edin kozunak stiga za 3ma i dava po 2 qica na 4ovek

//     let kozunakPrice = 4
//     let eggPrice = 0.45

//     let guests = Number(input[0])
//     let budget = Number(input[1])

//     let kozunaci = Math.ceil(guests/3)
//     let eggs = guests*2
//     let sum = kozunaci*kozunakPrice + eggs*eggPrice
//     let moneyLeft = 0
//     if (sum <= budget) {
//         console.log(`Lyubo bought ${kozunaci} Easter bread and ${eggs} eggs.`);
//         moneyLeft= budget-sum
//         console.log(`He has ${moneyLeft.toFixed(2)} lv. left.`);
//     }else{
//         console.log(`Lyubo doesn't have enough money.`);
//         moneyLeft= sum-budget
//         console.log(`He needs ${moneyLeft.toFixed(2)} lv. more.`);
//     }


// }
// EasterGuest(["8",
// "12"])


// function PaintingEggs(input) {
    
//     let size = input[0]
//     let color = input[1]
//     let partidiBr = input[2]
//     let sum = 0

//     if (color === 'Red') {
//         switch (size) {
//             case 'Large':
//                 sum=16*partidiBr
//                 break;
//             case 'Medium':
//                 sum=13*partidiBr
//                 break
//             case 'Small':
//                 sum=9*partidiBr
//                 break
//         }
//     }else if (color === 'Green') {
//         switch (size) {
//             case 'Large':
//                 sum=12*partidiBr
//                 break;
//             case 'Medium':
//                 sum=9*partidiBr
//                 break
//             case 'Small':
//                 sum=8*partidiBr
//                 break
//         }
//     }else if (color === 'Yellow') {
//         switch (size) {
//             case 'Large':
//                 sum=9*partidiBr
//                 break;
//             case 'Medium':
//                 sum=7*partidiBr
//                 break
//             case 'Small':
//                 sum=5*partidiBr
//                 break
//         }
//     }
//     sum=sum*0.65
//     console.log(`${sum.toFixed(2)} leva.`);


// }
// PaintingEggs(["Large",
// "Red",
// "7"])

// function EasterShop(input) {
    
//     let eggsCount = Number(input[0])
//     let i = 1
//     let comand = input[i]
//     let j = 2
//     let num = Number(input[j])
//     i=i+2
//     j=j+2

//     let eggSold = 0
// while (comand!='Close') {
//     if (comand === 'Buy') {
//         if  (eggsCount>=num){
//             eggsCount= eggsCount-num
//             eggSold = eggSold + num
//         }else{
//             console.log(`Not enough eggs in store!`);
//             console.log(`You can buy only ${eggsCount}.`);
//             break
//         }
//     }else if (comand === 'Fill') {
//         eggsCount=eggsCount+num
//     }
//     comand = input[i]
//     num = Number(input[j])
//     i+=2
//     j+=2
    
// }
// if (comand === 'Close') {
//     console.log(`Store is closed!`);
//     console.log(`${eggSold} eggs sold.`);
// }

// }
// EasterShop(["20",
// "Fill",
// "30",
// "Buy",
// "15",
// "Buy",
// "20",
// "Close"])


// function EasterBake(input) {
//     //paket zahar e 950 grama paket brashno e 750 grama

//     let maxFlour = 0
//     let maxSugar = 0

//     let flourSum = 0
//     let sugarSum = 0

//     let kozunaciCount = Number(input[0])
//     let j = 1
//     for (let i = 1; i <= kozunaciCount; i++) {
//         let sugar = Number(input[j])
//         j++
//         let flour = Number(input[j])
//         j++
//         flourSum = flourSum+flour
//         sugarSum = sugarSum+sugar
//         if (maxFlour<flour) {
//             maxFlour=flour
//         }
//         if (maxSugar<sugar) {
//             maxSugar=sugar
//         }
        
//     }
//     let sugarPacks = Math.ceil(sugarSum/950)
//     let flourPacks = Math.ceil(flourSum/750)
//     console.log(`Sugar: ${sugarPacks}`);
//     console.log(`Flour: ${flourPacks}`);
//     console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);

// }
// EasterBake(["4",
// "500",
// "350",
// "560",
// "430",
// "600",
// "345",
// "578",
// "543"])


// function EasterDecor(input) {

//     let basket = 1.50
//     let wreath = 3.80
//     let chocolateBunny = 7

//     let profit = 0
//     let items= 0
//     let bill = 0

//     let j = 1
//     let clients =Number(input[0])
//     let comand = input[j]
//     j++
//     for (let i = 1; i <= clients; i++) {
//         while (comand!== 'Finish') {
//             switch (comand) {
//                 case 'basket':
//                     bill=bill+basket
//                     items++
//                     break;
//                 case 'wreath':
//                     bill = bill+wreath
//                     items++
//                     break
//                 case 'chocolate bunny':
//                     bill = bill+chocolateBunny
//                     items++
//                     break
//             }
//             comand=input[j]
//             j++
//         }
//         comand=input[j]
//         j++
//         if (items%2 === 0) {
//             bill = bill*0.80
//         }
//         profit = profit + bill
//         console.log(`You purchased ${items} items for ${bill.toFixed(2)} leva.`);
//         bill = 0
//         items = 0
        
//     }
//     let averageBill = profit/clients
//     console.log(`Average bill per client is: ${averageBill.toFixed(2)} leva.`);



// }
// EasterDecor(["2",
// "basket",
// "wreath",
// "chocolate bunny",
// "Finish",
// "wreath",
// "chocolate bunny",
// "Finish"])

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15.02.2024 prodyljenie na zada4ite 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function EasterLunch(input) {
    
//     let kozunakPrice = 3.20
//     let eggsPrice  = 4.35
//     let cookiesPrice  = 5.40
//     let colorPrice = 0.15

//     let kozunakCount = Number(input[0])
//     let eggsCount = Number(input[1])
//     let cookiesCount = Number(input[2])

//     let sum = kozunakPrice*kozunakCount + eggsPrice*eggsCount +cookiesPrice*cookiesCount + eggsCount*12*colorPrice
//     console.log(sum.toFixed(2));



// }
// EasterLunch(["2",
// "3",
// "2"])

// function EasterParty(input) {
    
//     let guestsCount = Number(input[0])
//     let pricePerGuest = Number(input[1])
//     let budget = Number(input[2])

//     if (guestsCount>=10 && guestsCount<=15) {
//         pricePerGuest=pricePerGuest*0.85
//     }else if (guestsCount>15 && guestsCount<=20) {
//         pricePerGuest= pricePerGuest*0.80
//     }else if (guestsCount>20) {
//         pricePerGuest= pricePerGuest*0.75
//     }
//     let cakePrice = budget*0.1
//     let sum = cakePrice+guestsCount*pricePerGuest
    
//     if (sum<=budget) {
//         let moneyLeft = budget-sum
//         console.log(`It is party time! ${moneyLeft.toFixed(2)} leva left.`);
//     }else{
//         let moneyNeeded = sum-budget
//         console.log(`No party! ${moneyNeeded.toFixed(2)} leva needed.`);
//     }



// }
// EasterParty(["24",
// "35",
// "550"])

// function EasterTrip(input) {
    
//     let destination  = input[0]
//     let date = input[1]
//     let days = Number(input[2])
//     let sum = 0
//     if (destination === 'Germany') {
//         switch (date) {
//             case '21-23':
//                sum=days*32 
//                 break;
//             case '24-27':
//                 sum=days*37
//                 break
//             case '28-31':
//                 sum=days*43
//                 break
//         }
//     }else if (destination === 'Italy') {
//         switch (date) {
//             case '21-23':
//                sum=days*28 
//                 break;
//             case '24-27':
//                 sum=days*32
//                 break
//             case '28-31':
//                 sum=days*39
//                 break
//         }
//     }else if (destination === 'France') {
//         switch (date) {
//             case '21-23':
//                sum=days*30 
//                 break;
//             case '24-27':
//                 sum=days*35
//                 break
//             case '28-31':
//                 sum=days*40
//                 break
//         }
//     }
// console.log(`Easter trip to ${destination} : ${sum.toFixed(2)} leva.`);


// }
// EasterTrip(["France",
// "28-31",
// "8"])


// function EasterEggsBattle(input) {
    
//     let playerOne = Number(input[0])
//     let playerTwo = Number(input[1])
//     let i = 2
//     let command = input[i]
//     i++

//     while (command!== 'End') {
//         if (command === 'one') {
//             playerTwo-=1
//         }else if (command === 'two') {
//             playerOne-=1
//         }
//         if (playerOne===0) {
//             console.log(`Player one is out of eggs. Player two has ${playerTwo} eggs left.`);
//             break
//         }else if (playerTwo === 0) {
//             console.log(`Player two is out of eggs. Player one has ${playerOne} eggs left.`);
//             break
//         }
//         command=input[i]
//         i++
//     }
//     if (command==='End') {
//         console.log(`Player one has ${playerOne} eggs left.`);
//         console.log(`Player two has ${playerTwo} eggs left.`);
//     }
// }
// EasterEggsBattle(["2",
//     "6"
//     ,"one"
//     ,"two"
//     ,"one"
//     ,"two"
//     ,"two"
//     ,"End"
//     ])


// function EasterEggs(input) {
    
//     let eggs = Number(input[0])
//     let red = 0
//     let orange = 0
//     let blue = 0
//     let green = 0
//     let max = 0
//     let maxcolor = ''

//     for (let i = 1; i <= eggs; i++) {
//         let color = input[i]
//         switch (color) {
//             case 'red':
//                 red++
//                 break;
//             case 'orange':
//                 orange++
//                 break
//             case 'blue':
//                 blue++
//                 break
//             case 'green':
//                 green++
//                 break
//         }
//     }
//     console.log(`Red eggs: ${red}`);
//     console.log(`Orange eggs: ${orange}`);
//     console.log(`Blue eggs: ${blue}`);
//     console.log(`Green eggs: ${green}`);
//     if (max < red) {
//         max=red
//         maxcolor = 'red'
//     } if (max<orange) {
//         max = orange
//         maxcolor = 'orange'
//     } if (max <blue) {
//         max= blue
//         maxcolor = 'blue'
//     } if (max<green) {
//         max = green
//         maxcolor= 'green'
//     }
//     console.log(`Max eggs: ${max} -> ${maxcolor}`);
// }
// EasterEggs(["4",
// "blue",
// "red",
// "blue",
// "orange"]) 



// function EasterCompetition(input) {

//     let kozunaci = Number(input[0])
//     let j =1
//     let command = input[j]
//     let sum = 0
//     let max = 0
//     let maxName= ''
//     let name = input[j]
//     j++
//     for (let i = 1; i <= kozunaci; i++) {
//         command = input[j]
//         while (command!=='Stop') {
//             let points =Number(input[j])
//             sum+=points
//             j++
//             command = input[j]
//         }
//         console.log(`${name} has ${sum} points.`);
//         if (max<sum) {
//             max = sum
//             maxName=name
//             console.log(`${name} is the new number 1!`);
//         }
//         j++
//         name = input[j]
//         j++
//         sum=0
        
        
//     }
//     console.log(`${maxName} won competition with ${max} points!`);

// }
// // EasterCompetition(["3","Chef Manchev","10","10","10","10","Stop","Natalie","8","2","9","Stop","George","9","2","4","2","Stop"])
// EasterCompetition(["2",
// "Chef Angelov",
// "9",
// "9",
// "9",
// "Stop",
// "Chef Rowe",
// "10",
// "10",
// "10",
// "10",
// "Stop"])


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                  IZPITNI ZADA4I OT 20-21 APRIL 2019                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// интересно решение на последна задача

// function store([clients, ...commands]) {
//     const products = {
//         basket: 1.2,
//         wreath: 3.4,
//         'chocolate bunny': 4.2,
//     };
 
//     const getCurrentName = () => commands.shift();
//     const logClientBill = (boughtItems, bill) =>
//         console.log(`You purchased ${boughtItems} for ${bill.toFixed(2)} leva.`);
//     const logAverage = (total) =>
//         console.log(`Average bill per client is: ${total.toFixed(2)} leva.`);
 
//     let total = 0;
 
//     for (let i = 0; i < clients; i++) {
//         let productName = getCurrentName();
//         let clientBill = 0,
//             boughtProducts = 0;
 
//         while (productName !== 'Finish') {
//             boughtProducts++;
//             clientBill += products[productName];
//             productName = getCurrentName();
//         }
 
//         if (boughtProducts % 2 === 0) clientBill *= 0.8;
//         total += clientBill;
//         logClientBill(boughtProducts, clientBill);
//     }
 
//     logAverage(total / clients);
// }
// store(["2","basket","wreath","chocolate bunny","Finish","wreath","chocolate bunny","Finish"])
