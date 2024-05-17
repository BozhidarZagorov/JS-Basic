// function equalSums(input) {

//     let startNum = Number(input[0])
//     let endNum = Number(input[1])
//     let result = ''

//     for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
//         let currentNumstr = currentNum.toString()

//         let oddPositionSum = 0
//         let evenPositionSum = 0
//         for (let i = 0; i < currentNumstr.length; i++) {
//             let digit = Number(currentNumstr[i])

//             if (i%2===0) {
//                 evenPositionSum+=digit
//             }else{
//                 oddPositionSum+=digit
//             }
//         }
//         if (evenPositionSum === oddPositionSum) {
//             result+=currentNumstr + ' '
//         }
//     }
// console.log(result);
// }
// equalSums(["123456",

// "124000"])


// function prostornot(input) {

//     let primesum = 0
//     let nonprimesum = 0

//     let i = 0
//     let command = input[i]
//     i++

//     while (command!=='stop') {
//         let num = Number(command)
//         let isPrime = true

//         if (num<0) {
//             console.log("Number is negative.");
//             command = input[i]
//             i++
//             continue
//         }
//         for (let divisor = 2; divisor < num; divisor++) {
//             if (num % divisor === 0) {
//                 isPrime = false
//                 break
//             }

//         }
//         if (isPrime === true) {
//             primesum+=num
//         }else nonprimesum += num

//         command = input[i]
//         i++
//     }
//     console.log(`Sum of all prime numbers is: ${primesum}`);
//     console.log(`Sum of all non prime numbers is: ${nonprimesum}`);

// }
// prostornot(["30","83","33","-1","20","stop"])


// function trainer(input) {

//     let judgeCount = Number(input[0])

//     let i = 1
//     let command = input[i]
//     i++

//     let totalgradesum = 0
//     let totalgradecount = 0
//     while (command !=='Finish') {
//         let presentationName = command
//         let sum = 0
//         for (let currJudge = 1; currJudge <= judgeCount; currJudge++) {
//             let grade = Number(input[i])
//             i++
//             sum+=grade
//         }
//         let avgGrade = sum/judgeCount
//         console.log(`${presentationName} - ${avgGrade.toFixed(2)}.`);
//         totalgradesum+=avgGrade
//         totalgradecount++


//         command = input[i]
//         i++
//     }
//     let avgGrade = totalgradesum/totalgradecount
//     console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
// }
// trainer(["2","While-Loop","6.00","5.50","For-Loop","5.84","5.66","Finish"])


// function cinema(input) {

//     let standticket = 0
//     let kidticket = 0
//     let studticket = 0

//     let i = 0
//     let command = input[i]
//     i++

//     while (command !== 'Finish') {
//         let movieName = command
//         let totalSeats = Number(input[i])
//         i++
//         let command1 = input[i]
//         i++
//         let seatsTaken = 0
//         while (command1 !== 'End') {
//             let ticketType = command1

//             if (ticketType === 'standard') {
//                 standticket++
//             } else if (ticketType === 'student') {
//                 studticket++
//             } else if (ticketType === 'kid') {
//                 kidticket++
//             }
//             seatsTaken++
//             if (seatsTaken === totalSeats) {
//                 break
//             }
//             command1 = input[i]
//             i++
//         }
//         let percentFull = (seatsTaken / totalSeats) * 100
//         console.log(`${movieName} - ${percentFull.toFixed(2)}% full.`);

//         command = input[i]
//         i++
//     }
//     let totalTickets = standticket + studticket + kidticket
//     console.log(`Total tickets: ${totalTickets}`);
//     let stardardPercent = (standticket / totalTickets) * 100
//     let kidPercemt = (kidticket / totalTickets) * 100
//     let studPercent = (studticket / totalTickets) * 100
//     console.log(`${studPercent.toFixed(2)}% student tickets.`);
//     console.log(`${stardardPercent.toFixed(2)}% standard tickets.`);
//     console.log(`${kidPercemt.toFixed(2)}% kids tickets.`);
// }
// // cinema(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"])
// cinema(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"])


//da se napravqt zad 1 i zad 5


// function rowscols(input) {
    
//     let num = Number(input[0])
//     let currNum = 1
//     let isBigger = false
//     let printcurentline = ""

//     for (let rows = 1; rows <= num; rows++) {
//         for (let cols = 1; cols <= rows; cols++) {
//             if (currNum>num) {
//                 isBigger=true
//                 break
//             }
//             printcurentline+=currNum+" "
//             currNum++
            
//         }
//         console.log(printcurentline);
//         printcurentline= ""
//         if (isBigger === true) {
//             break
//         }
//     }


// }
// rowscols(["15"])

// function specialNum(input) {
    
//     let num = Number(input[0])
//     let printLine = ""
//     for (let i = 1111; i <= 9999; i++) {
//         let stringer = i.toString()
//         let n1 = Number(stringer[0])
//         let n2 = Number(stringer[1])
//         let n3 = Number(stringer[2])
//         let n4 = Number(stringer[3])

//         if (num%n1 ===0 && num%n2 === 0 && num%n3 ===0 && num%n4 === 0 ) {
//             printLine+=i + " "
            
//         }


//     }
//     console.log(printLine);



// }
// specialNum(["16"])


function razdelitel() {
//     let crr = 1234
//     let ch = '1234'
//     let r = 1234
//     fr = crr.toString()
//     console.log(fr);
//     console.log(fr[0]);
//     console.log(fr[1]);
//     console.log(fr[2]);
//     console.log(fr[3]);
//     console.log(typeof fr);
//     // f = Number(ch[0])
//     // console.log(f);
//     // p=r%10
//     // pp=r%100
//     // console.log(p);
//     // console.log(pp);
let f = 123
let a = 1
let b = 2
let c = 3
let d = 4
console.log(f%3);
console.log(`${a}${b}${c}${d}`);
console.log(`${d}${c}${b}${a}`);
// console.log(f%5);
// console.log(f%2);
}razdelitel()