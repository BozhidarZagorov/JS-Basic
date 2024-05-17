// function libra(input) {
    
//     let bookSearched = input[0]

//     let i = 1
//     let command = input[i]
//     i++
//     let booksCheck = 0 

//     while (command !== 'No More Books') {
//         if (command === bookSearched) {
//             console.log(`You checked ${booksCheck} books and found it.`);
//             break
//         }
//         booksCheck++

//         command = input[i]
//         i++
//     }
//     if (command === 'No More Books') {
//         console.log(`The book you search is not here!`);
//         console.log(`You checked ${booksCheck} books.`);
//     }
// }
// libra(["Bourne",

// "True Story",

// "Forever",

// "More Space",

// "The Girl",

// "Spaceship",

// "Strongest",

// "Profit",

// "Tripple",

// "Stella",

// "The Matrix",

// "Bourne"])


// function examprep(input) {
    
//     let maxBadGrades = Number(input[0])

//     let i = 1
//     let command = input[i]
//     i++

//     let grade = Number(input[i])
//     i++
//     let badgrades = 0
//     let gradeSum = 0
//     let gradesCount = 0
//     let problemName = ''
//     while(command !== 'Enough'){
//         problemName = command

//         if (grade<=4) {
//             badgrades++
//         }
//         if (badgrades ===maxBadGrades) {
//             console.log(`You need a break, ${badgrades} poor grades.`);
//             break
//         }
//         gradesCount++
//         gradeSum+=grade
//         command = input[i]
//         i++
//         grade = Number(input[i])
//         i++
//     }
//     if (command === 'Enough') {
//         let avgGrade = gradeSum/gradesCount
//         console.log(`Average score: ${avgGrade.toFixed(2)}`);
//         console.log(`Number of problems: ${gradesCount}`);
//         console.log(`Last problem: ${problemName}`);
//     }


// }
// examprep(["2",

// "Income",

// "3",

// "Game Info",

// "6",

// "Best Player",

// "4"])


// function steps(input) {
    
//     let totalStep = 0

//     let i = 0
//     let command = input[i]
//     i++

//     while (command !== 'Going home') {
        
//         let steps = Number(command)
//         totalStep+=steps
//         if (totalStep>= 10000) {
//             console.log(`Goal reached! Good job!`);
//             console.log(`${totalStep-10000} steps over the goal!`);
//             break
//         }
//         command = input[i]
//         i++
//     }
//     if (command === 'Going home') {
//         let stepsGoingHome = Number(input[i])
//         totalStep+=stepsGoingHome
//         if (totalStep>= 10000) {
//             console.log(`Goal reached! Good job!`);
//             console.log(`${totalStep-10000} steps over the goal!`);
//         }else{
//             console.log(`${10000-totalStep} more steps to reach goal.`);
//         }
//     }


// }
// steps(["1500", "300", "2500", "3000", "Going home", "200"])


// function moving(input) {
//     let width = Number(input[0])
//     let length = Number(input[1])
//     let height = Number(input[2])

//     let totalVolume = width*length*height

//     let i = 3
//     let command = input[i]
//     i++

//     while (command!=='Done') {
//         let boxesCount = Number(command)

//         totalVolume -=boxesCount
//         if (totalVolume<=0) {
//             console.log(`No more free space! You need ${Math.abs(totalVolume)} Cubic meters more.`);
//             break
//         }
//         command = input[i]
//         i++

//     }
//     if (command === 'Done') {
//         console.log(`${totalVolume} Cubic meters left.`);
//     }

// }
// moving(["10",

// "1",

// "2",

// "4",

// "6",

// "Done"])


// function coins(input) {
//     let change = Number(input[0])
//     let changeInCoins = Math.round(change*100)
//     let coinsUsed = 0
    
//     while (changeInCoins>0) {
//         if (changeInCoins>=200) {
//             changeInCoins-=200
//             coinsUsed++
//         }else if (changeInCoins>=100) {
//             changeInCoins-=100
//             coinsUsed++
//         }else if (changeInCoins>=50) {
//             changeInCoins-=50
//             coinsUsed++
//         }else if (changeInCoins>=20) {
//         changeInCoins-=20
//         coinsUsed++
//         }else if (changeInCoins>=10) {
//         changeInCoins-=10
//         coinsUsed++
//         }else if (changeInCoins>=5) {
//         changeInCoins-=5
//         coinsUsed++
//         }else if (changeInCoins>=2) {
//         changeInCoins-=2
//         coinsUsed++
//         }else if (changeInCoins>=1) {
//         changeInCoins-=1
//         coinsUsed++
//         }

//     }
//     console.log(coinsUsed);


// }
// coins(["2.73"])

// da se napravqt zada4i 3 6

// zad 3

// function rest(input) {
    
//     let moneyNeeded = Number(input[0])
//     let moneyHave = Number(input[1])
//     let i = 2
//     let action = input[i]
//     let spentInARoll = 0
//     let days = 0
//     while (moneyNeeded>moneyHave) {
//         days++
//         if (action === 'spend') {
//             spentInARoll++
//             i++
//             action = Number(input[i])
//             moneyHave = moneyHave - action
//             if (moneyHave<0) {
//                 moneyHave = 0
//             }
//             if (spentInARoll === 5) {
//                 console.log("You can't save the money.");
//                 console.log(`${days}`);
//                 break
//             }
//         }else if (action === 'save') {
//             spentInARoll = 0
//             i++
//             action = Number(input[i])
//             moneyHave = moneyHave + action
//         }
//         i++
//         action = input[i]
//     }
//     if (moneyNeeded<=moneyHave) {
//         console.log(`You saved the money for ${days} days.`);
//     }

// }
// rest(["250","150","spend","50","spend","50","save","100","save","100"])


// zad 6

// function cake(input) {
    
//     let length = Number(input[0])
//     let width = Number(input[1])
//     let i = 2
//     let command = input[i]
//     let pcs = length*width
//     while (command != 'STOP') {
//         command = Number(input[i])
//         pcs = pcs - command
//         if (pcs<0) {
//             console.log(`No more cake left! You need ${Math.abs(pcs)} pieces more.`);
//             break
//         }
//         i++
//         command = input[i]
//     }
//     if (command === 'STOP') {
//         console.log(`${pcs} pieces are left.`);
//     }


// }
// cake(["10","2","2","4","6","STOP"])