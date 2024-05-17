// function vloj(input) {

// for (let hour = 0; hour <= 23; hour++) {

//     for (let mins = 0; mins <= 59; mins++) {
//         console.log(`${hour}:${mins}`);
//         // for (let sec = 0; sec <= 59; sec++) {
//         //     // console.log(`Time: ${hour}:${mins}:${sec}`);   
//         // }   
//     }   
// }

// for (let firstnum = 1; firstnum <= 10; firstnum++) {
//     for (let secondnum = 1; secondnum <= 10; secondnum++) {
//         console.log(`${firstnum} * ${secondnum} = ${firstnum*secondnum}`);

//     }

// }
// }
// vloj()
// function vloj(input) {
//     let target = Number(input[0])
//     let br = 0
//     for (let firstN = 0; firstN <= target; firstN++) {
//         for (let secondN = 0; secondN <= target; secondN++) {
//             for (let thirdN = 0; thirdN <= target; thirdN++) {
//                 if (firstN+secondN+thirdN === target) {
//                     br++   
//                 }

//             }

//         }

//     }
//     console.log(br);


// }
// vloj(["25"])

// function sumOfTwoNums(input) {

//     // let i = Number(input[0])
//     let end = Number(input[1])
//     let target = Number(input[2])
//     // let j = i
//     let comN=0
//     let stoper = 0
//     for (let i = Number(input[0]); i <= end; i++) {
//         for (let g = Number(input[0]); g <= end; g++){
//             comN++
//             if (i+g === target) {
//                 console.log(`Combination N:${comN} (${i} + ${g} = ${target})`);
//                 stoper++
//                 break
//             }
//         if (stoper!== 0 ) {
//             break
//         }

//         }
//     if (stoper!== 0 ) {
//         break
//     }
//     }
//     if (stoper === 0) {
//         console.log(`${comN} combinations - neither equals ${target}`);
//     }

// }
// sumOfTwoNums(["1","10","5"])

// function dest(input) {

//     let i = 0
//     let row = input[i]

//     while (row != 'End') {

//         let destination = row
//         i++
//         let budget =Number(input[i]) 
//         let sum= 0
//         i++
//         while (sum < budget) {
//             let money = Number(input[i])
//             sum+=money
//             i++
//         }
//         if (sum>=budget) {
//             console.log(`Going to ${destination}!`);
//         }
//         row = input[i]


//     }



// }
// dest(["Greece","1000","200","200","300","100","150","240","Spain","1200","300","500","193","423","End"])


// function building(input) {

//     let floor = Number(input[0])
//     let room = Number(input[1])

//     for (let a = floor; a >0; a--){
//         let currentRow = ''
//         for (let b = 0; b < room; b++) {
//             if (a === floor) {
//                 currentRow+=`L${a}${b} `
//             }else if (a % 2 === 0) {
//                 currentRow += `O${a}${b} `
//             }else{
//                 currentRow+= `A${a}${b} `
//             }

//         }
//         console.log(currentRow);
//     }

// }
// building(["6","4"])

// function cat(input) {

//     let points = 0

//     for (let row = 1; row <= 3; row++) {
//         for (let col = 1; col <= 5; col++) {
//             if (row === 1 && col === 4) {
//                 points += 10
//             } else if (row === 3 && col === 2) {
//                 points += 10
//             } else if (row === 2 && col === 4) {
//                 break
//             } else if (row === 1 && col === 2) {
//                 continue                                    //propuska segashnoto zavyrtane
//             } else points++

//         }

//     }
//     console.log(points);
// }
// cat()