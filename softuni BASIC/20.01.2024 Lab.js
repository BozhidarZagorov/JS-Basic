// zad 1

// function dayOfWeek(input) {
    
//     let Day = Number(input[0])
    
//     switch (Day) {
//         case 1:
//             console.log("Monday")
//             break;
//         case 2:
//             console.log("Tuesday");
//             break
//         case 3:
//             console.log("Wednesday");
//             break
//         case 4:
//             console.log("Thursday");
//             break
//         case 5:
//             console.log("Friday");
//             break
//         case 6:
//             console.log("Saturday");
//             break
//         case 7:
//             console.log("Sunday");
//             break
//         default:
//             console.log("Error");
//             break;
//     }

// }
// dayOfWeek(["-1"])


// zad 2


// function WorkOrRest(input) {
    
//     let day = input[0] 

//     switch (day) {
//         case "Monday":
//         case "Tuesday":
//         case "Wednesday":
//         case "Thursday":
//         case "Friday":
//             console.log("Working day");
//             break;
//         case "Saturday":
//         case "Sunday":
//             console.log("Weekend");
//             break
//         default:
//             console.log("Error");
//             break;
//     }


// }
// WorkOrRest(["Sunday"])


// zad 3

// function Animals(input) {
    
//     let animal = input[0]

//     switch (animal) {
//         case "dog":
//             console.log("mammal");
//             break;
//         case "crocodile":
//         case "tortoise":
//         case "snake":
//             console.log("reptile");
//             break
//         default:
//             console.log("unknown");
//             break;
//     }

// }
// Animals(["cat"])

// zad 10

// function invalidNum(input) {
    
//     let num = Number(input[0])

//     if (num>=100 && num<=200 || num === 0) {
        
//     }else console.log("invalid");

// }
// invalidNum(["0"])



// function fruitShop(input) {
    
//     let product = input[0]
//     let day = input[1]
//     let qty = input[2]
//     let finalPrice = 0

//     if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
//              switch (product) {
//                 case "banana":finalPrice = qty*2.50
//                     console.log(finalPrice.toFixed(2));
//                     break
//                 case "apple":finalPrice = qty*1.20
//                     console.log(finalPrice.toFixed(2));
//                     break
//                 case "orange":finalPrice = qty*0.85
//                     console.log(finalPrice.toFixed(2));
//                     break
//                 case "grapefruit":finalPrice = qty*1.45
//                     console.log(finalPrice.toFixed(2));
//                     break
//                 case "kiwi":finalPrice = qty*2.70
//                     console.log(finalPrice.toFixed(2));
//                     break
//                 case "pineapple":finalPrice = qty*5.50
//                     console.log(finalPrice.toFixed(2));
//                     break
//                 case "grapes":finalPrice = qty*3.85
//                     console.log(finalPrice.toFixed(2));
//                     break
//                 default:
//                     console.log("error");
//                     break
//             }
//     }else if (day === "Saturday" || day === "Sunday") {
//         switch (product) {
//             case "banana":finalPrice = qty*2.70
//                 console.log(finalPrice.toFixed(2));
//                 break
//             case "apple":finalPrice = qty*1.25
//                 console.log(finalPrice.toFixed(2));
//                 break
//             case "orange":finalPrice = qty*0.90
//                 console.log(finalPrice.toFixed(2));
//                 break
//             case "grapefruit":finalPrice = qty*1.60
//                 console.log(finalPrice.toFixed(2));
//                 break
//             case "kiwi":finalPrice = qty*3.00
//                 console.log(finalPrice.toFixed(2));
//                 break
//             case "pineapple":finalPrice = qty*5.60
//                 console.log(finalPrice.toFixed(2));
//                 break
//             case "grapes":finalPrice = qty*4.20
//                 console.log(finalPrice.toFixed(2));
//                 break
//             default:
//                 console.log("error");
//                 break
//             }
//     }else console.log("error");
    

// }
// fruitShop(["orange", "Sunday", "3"])

// zad 12 

// function tradeCom(input) {
    
//     let city = input[0]
//     let qty = Number(input[1])
//     let comision = 0

//     switch (city) {
//         case "Sofia":
//             if (qty >= 0 && qty<=500) {
//                 comision = qty*0.05
//                 console.log(comision.toFixed(2));
//             }else if (qty>500 && qty <=1000) {
//                 comision = qty*0.07
//                 console.log(comision.toFixed(2));
//             }else if (qty>1000 && qty<=10000) {
//                 comision = qty*0.08
//                 console.log(comision.toFixed(2));
//             }else if (qty>10000) {
//                 comision = qty*0.12
//                 console.log(comision.toFixed(2));
//             }else console.log("error");
//             break;
//         case "Varna":
//             if (qty >= 0 && qty<=500) {
//                 comision = qty*0.045
//                 console.log(comision.toFixed(2));
//             }else if (qty>500 && qty <=1000) {
//                 comision = qty*0.075
//                 console.log(comision.toFixed(2));
//             }else if (qty>1000 && qty<=10000) {
//                 comision = qty*0.10
//                 console.log(comision.toFixed(2));
//             }else if (qty>10000) {
//                 comision = qty*0.13
//                 console.log(comision.toFixed(2));
//             }else console.log("error");
//             break;
//         case "Plovdiv":
//             if (qty >= 0 && qty<=500) {
//                 comision = qty*0.055
//                 console.log(comision.toFixed(2));
//             }else if (qty>500 && qty <=1000) {
//                 comision = qty*0.08
//                 console.log(comision.toFixed(2));
//             }else if (qty>1000 && qty<=10000) {
//                 comision = qty*0.12
//                 console.log(comision.toFixed(2));
//             }else if (qty>10000) {
//                 comision = qty*0.145
//                 console.log(comision.toFixed(2));
//             }else console.log("error");
//             break;
//         default:
//             console.log("error");
//             break;
//     }


// }
// tradeCom(["Kaspichan", "-50"])