// function zavyrsh(input) {
    
//     let name = input[0]
//     let sumGrades = 0
//     let grade = 1
//     let currGrade = Number(input[grade])
//     let excluded = 0

//     while (grade<=12) {
        
//         if (currGrade<4) {
//             excluded++
//         }
//         if (excluded >1) {
//             grade--
//             console.log(`${name} has been excluded at ${grade} grade`);
//             break
//         }
//         sumGrades+=currGrade
//         grade++
//         currGrade = Number(input[grade])
//     }
//     if (excluded<2) {
//         grade--
//         console.log(`${name} graduated. Average grade: ${(sumGrades/grade).toFixed(2)}`);
//     }
    

// }
// zavyrsh(["Gosho",

// "5",

// "5.5",

// "6","5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])


// function redica(input) { 
//     let n = Number(input[0])
//     let i = 1
//     while (i<=n) {
//         console.log(i);
//         i= i*2+1
//     }
// }
// redica(["31"])

