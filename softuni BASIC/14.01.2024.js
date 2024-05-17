// function bonus(input) {
    
//     let points = Number(input[0])
//     let bonus = 0

//     if (points<=100) {
//         bonus=5
//     }else if(points<=1000){
//         bonus=0.2*points
//     }else bonus = 0.1 * points

//     if (points % 2 === 0) {
//         bonus = bonus + 1
//     }else if (points % 10 === 5) {
//         bonus = bonus + 2
//     }
//     console.log(bonus)
//     console.log(points+bonus)
// }
// bonus(["28"])            shift+alt+arrow down kopira na dolen red arrow up na goren
// bonus(["28"])

// zad 4

// function toys(input) {

//     let ekskurziq = Number(input[0])
//     let pyzel = Number(input[1])
//     let kukli = Number(input[2])
//     let mecheta = Number(input[3])
//     let minion = Number(input[4])
//     let kamion = Number(input[5])
//     let pyzelprice = 2.60
//     let kuklaprice = 3.00
//     let mechkaprice = 4.10
//     let minionprice = 8.20
//     let kamionprice = 2.00
    
//     let broika = pyzel+kukli+mecheta+minion+kamion
//     let moneyEarned = pyzel*pyzelprice + kukli*kuklaprice + mecheta*mechkaprice + minion*minionprice + kamion*kamionprice
//     if (broika>=50) {
//         moneyEarned = moneyEarned - (moneyEarned*0.25)
//     }
//     let naem = moneyEarned * 0.1
//     moneyEarned=moneyEarned - naem
    
//     if (moneyEarned >= ekskurziq) {
//         let da = moneyEarned - ekskurziq
//         console.log(`Yes! ${da.toFixed(2)} lv left.`);
//     }else{
//         let ne = ekskurziq - moneyEarned
//         console.log(`Not enough money! ${ne.toFixed(2)} lv needed.`);
//     }
// }
// toys(["320", "8", "2", "5", "5", "1"])


// function godzilakong(input) {
//     let budget = Number(input[0])
//     let actorCount = Number(input[1])
//     let pricePerCostume = Number(input[2])
//     let decorprice = 0.1 * budget

//     let totalCostumePrice = actorCount * pricePerCostume

//     if (actorCount>150) {
//         totalCostumePrice = totalCostumePrice * 0.9
//     }

//     let totalPrice = decorprice + totalCostumePrice

//     if (budget>= totalPrice) {
//         let moneyleft =  budget - totalPrice
//         console.log("Action!")
//         console.log(`Wingard starts filming with ${moneyleft.toFixed(2)} leva left.`);
//     }else{
//         console.log("Not enough money!")
//         let Moneyneeded = totalPrice -  budget
//         console.log(`Wingard needs ${Moneyneeded.toFixed(2)} leva more.`)
//     }
// }
// godzilakong(["15437.62",

// "186",

// "57.99"])

// zad 8

// function pochivka(input) {
//     let ime = input[0]
//     let kadri = Number(input[1])
//     let timePochivka = Number(input[2])
//     let lunchDurr = (1/8)*timePochivka
//     let leisureDurr = (1/4)*timePochivka

//     let freetime = timePochivka - lunchDurr - leisureDurr

//     if (freetime>= kadri) {
//         let timeleft = freetime - kadri
//         console.log(`You have enough time to watch ${ime} and left with ${Math.ceil(timeleft)} minutes free time.`);
//     }else{
//         let timeNeeded = kadri - freetime
//         console.log(`You don't have enough time to watch ${ime}, you need ${Math.ceil(timeNeeded)} more minutes.`);
//     }

// }
// pochivka(["Teen Wolf",

// "48",

// "60"])

// function sekundi(input) {
//     let time1= Number(input[0])
//     let time2= Number(input[1])
//     let time3= Number(input[2])

//     let totalTime = time1+time2+time3
//     let minutes = Math.floor(totalTime / 60) 
//     let seconds = totalTime % 60 
//     if(seconds<10){
//         console.log(`${minutes}:0${seconds}`)
//     }else console.log(`${minutes}:${seconds}`);
// }
// sekundi(["35",

// "45",

// "44"])

// function plus15(input) {
    
//     let hour = Number(input[0])
//     let min = Number(input[1])
//     let totalTime = hour * 60 + min + 15
//     let newHour = Math.floor(totalTime/60)
//     let newMin = totalTime % 60
//     if (newHour === 24) {                        // tui ba4ka samo zashtoto e + 15 min i ne pove4e cringeru very much 
//         newHour = 0
//     }

//     if(newMin<10){
//         console.log(`${newHour}:0${newMin}`)
//     }else console.log(`${newHour}:${newMin}`);

// }
// plus15(["23", "59"])

// function rekord(input) {
    
//     let rekSek = Number(input[0])
//     let rastMetri = Number(input[1])
//     let timeSek = Number(input[2])

//     let prepl =rastMetri * timeSek
//     let dobavka =Math.floor(rastMetri / 15) * 12.5
//     let timed = prepl + dobavka

//     // if(timed>rekSek){
//     //     let nedostig = timed - rekSek
//     //     console.log(`No, he failed! He was ${nedostig.toFixed(2)} seconds slower.`);                         // judge гърми 80/100 
//     // }else console.log(`Yes, he succeeded! The new world record is ${timed.toFixed(2)} seconds.`);
//     if(rekSek>timed){
//         console.log(`Yes, he succeeded! The new world record is ${timed.toFixed(2)} seconds.`)
//     }else{
//         let nedostig = timed - rekSek                                                                           // 100/100
//         console.log(`No, he failed! He was ${nedostig.toFixed(2)} seconds slower.`)
//     }
// }
// rekord(["10464",

// "1500",

// "20"])


// rekord(["55555.67",

// "3017",

// "5.03"])

// function pazar(input) {
    
//     let biudjet = Number(input[0])
//     let brvideo= Number(input[1])
//     let brproces = Number(input[2])
//     let ram = Number(input[3])
//     let videos =brvideo*250
//     let SUM = 0
//     let nedostig = 0 
//     let pSum = videos + brproces*(videos * 0.35) + ram*(videos * 0.1)
//     if (brvideo>brproces) {                                                          //ebavam ti maikata bashta ti stavam 
//         SUM = pSum - (pSum*0.15)
//     }
//     if (biudjet>=SUM) {
//         // console.log(SUM);
//         console.log(`You have ${(biudjet-SUM).toFixed(2)} leva left!`)
//     }else if (biudjet<SUM) {
//         nedostig = SUM - biudjet
//         // console.log(nedostig)
//         console.log(`Not enough money! You need ${nedostig.toFixed(2)} leva more!`);
//     }
// }
// pazar(["701.20","2","1","3"])
// // pazar(["920.45","3","1","1"])

// function shopping(input){
 
//     let budget = Number(input[0])
//     let gpu = Number(input[1])
//     let cpu = Number(input[2])
//     let ram = Number(input[3])
//     let priceOfGpu = gpu * 250
//     let priceOfCpu = (priceOfGpu * 0.35) * cpu
//     let priceOfRam = (priceOfGpu * 0.10) * ram
//     let totalPrice = priceOfGpu + priceOfCpu + priceOfRam
//     if(gpu>cpu){
//         totalPrice *= 0.85
//     }
//     if(budget>=totalPrice){
//         budgetLeft = budget - totalPrice
//         console.log(`You have ${budgetLeft.toFixed(2)} leva left!`);
//     }
//     else{
//         budgetNeeded = totalPrice - budget
//         console.log(`Not enough money! You need ${budgetNeeded.toFixed(2)} leva more!`);
//     }
//     }
//     shopping(["900","2","1","3"])