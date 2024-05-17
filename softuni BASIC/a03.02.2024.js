// function whiled(input) {
    
//     // for (let a = 1; a <= 5; a++) {
//     //     console.log(a);
        
//     // }
//     // console.log("------------");
//     // let i = 1
//     // while (i<=5) {
//     //     console.log(i);
//     //     i++
//     // }
//     // console.log(`last value of i: ${i}`);

// }
// whiled()


// function words(input) {
    

//     let index = 0
//     let word = input[index]

//     while (word !== "Stop") {
//         console.log(word);
//         index++
//         word = input[index]

//     }

// }
// words(["Nakov",

// "SoftUni",

// "Sofia",

// "Bulgaria",

// "SomeText",

// "Stop",

// "AfterStop",

// "Europe",

// "HelloWorld"])


// function pass(input) {
    
//     let user = input[0]
//     let pass = input[1]
//     let i = 2
//     let currWord = input[i]

//     while (currWord !== pass) {
//         i++
//         currWord = input[i]
//     }
//     console.log(`Welcome ${user}!`);

// }
// pass()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function numsPlus(input) {
    
//     let target  = Number(input[0])
//     let sum = 0
//     let i = 1
//     let element = Number(input[i])

//     while (sum !== target) {                                     // dava greshka v judje poneje sum moje da nadmine target pyk za da spre while trqbva sum da e  === target
//         sum += element
//         i++
//         element = Number(input[i])
//     }
//     console.log(sum);


// }
// numsPlus(["100", "10", "20", "30", "40"])

// function demo(input) {
    
//     let goalNumber = Number(input[0])
//     let sumOfNumbers = 0
//     let index = 1
//     let currNum = Number(input[index])

//     while (sumOfNumbers<goalNumber) {
//         sumOfNumbers+=currNum
//         index++
//         currNum = Number(input[index])
//     }
//     console.log(sumOfNumbers);


// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function money(input) {
    
//     let totalSum = 0
//     let i = 0
//     let currElement = input[i]

//     while (currElement!== "NoMoreMoney") {
//         let ElementAsNumber = Number(currElement)
//         if (ElementAsNumber <0) {
//             console.log('Invalid operation!');
//             break
//         }
//         console.log(`Increase: ${ElementAsNumber.toFixed(2)}`);
//         totalSum+=ElementAsNumber
//         i++
//         currElement=input[i]
//     }
//     console.log(`Total: ${totalSum.toFixed(2)}`);
// }
// money(["5.51",

// "69.42",

// "100",

// "NoMoreMoney"])


// function dokato(input) {
    
    // let min = Number.MAX_SAFE_INTEGER                   //Number.MIN_SAFE_INTEGER             
//     let i = 0 
//     let Element = input[i]

//     while (Element !== `Stop`) {
//         let rowAsNumber = Number(Element)

//         if (rowAsNumber<min) {
//             min = rowAsNumber
//         }
//         i++
//         Element = input[i]
//     }
//     console.log(min);

// }
// dokato(["-10","-20","-30", "Stop"])
