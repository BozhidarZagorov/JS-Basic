// function nestedConditionals(input) {

// let number = Number(input[0])

// switch(number){

//     case 1:
//     case 2:                                                 //case ot 1 do 5 vkliu4itelno pravqt edno i syshto(uslovieto za case 5) a ot case 6 vzima uslovieto case 7  
//     case 3:                                                  // case e vse edno if i else if
//     case 4:
//     case 5: console.log('work day');break
//     case 6:                                                      //break podsigurqva spiraneto na proverka natatyk 
//     case 7: console.log('weekend');break
//     default: console.log('Wrong number added');break            //default vyrshi rolqta na else
// }   

//     let word = input[0]

//     switch (word) {
//         case 'banana':
//         case 'apple':
//         case 'kiwi':
//         case 'cherry':
//         case 'lemon':
//         case 'grapes': console.log('fruit');break
//         case 'tomato':
//         case 'cucumber':
//         case 'carrot':
//         case 'pepper': console.log('vegetable');break 
//         default: console.log('unknown');break
//     }


// }
// nestedConditionals('lemon')



// // }
// // nestedConditionals(['3'])

// function mORf(input) {

//     let age = Number(input[0])
//     let gender = input[1]
//     if (gender === 'f') {
//         if (age < 16) {
//             console.log('Miss');
//         }else if (age >= 16) {
//             console.log('Ms.');
//         }
//     }else if (gender === 'm') {
//         if (age < 16) {
//             console.log('Master');
//         }else if (age >= 16) {
//             console.log('Mr.');
//         }
//     }
// }
// mORf(['12', 'f'])


// function smolShop(input) {
//     let product = input[0]
//     let city = input[1]
//     let qty = Number(input[2])
//     let finalResult = 0

//     if (city === 'Sofia') {
//         switch (product) {
//             case 'coffee': finalResult = qty * 0.50;break
//             case 'water': finalResult = qty * 0.80;break
//             case 'beer': finalResult = qty * 1.20;break
//             case 'sweets': finalResult = qty * 1.45;break
//             case 'peanuts': finalResult = qty * 1.60;break
//         }
//     }else if (city === 'Plovdiv') {
//         switch(product){
//         case 'coffee': finalResult = qty * 0.40;break
//         case 'water': finalResult = qty * 0.70;break
//         case 'beer': finalResult = qty * 1.15;break
//         case 'sweets': finalResult = qty * 1.30;break
//         case 'peanuts': finalResult = qty * 1.50;break
//         }
//     }else if (city === 'Varna') {
//         switch(product){
//         case 'coffee': finalResult = qty * 0.45;break
//         case 'water': finalResult = qty * 0.70;break
//         case 'beer': finalResult = qty * 1.10;break
//         case 'sweets': finalResult = qty * 1.35;break
//         case 'peanuts': finalResult = qty * 1.55;break
//         }
//     }
//     console.log(finalResult);
// }
// smolShop(['coffee', 'Varna', '2'])


// function interval(input) {
//     let number = Number(input[0])

//     if (number >= -100 && number <= 100 && number !== 0) {
//         console.log('Yes');
//     } else {
//         console.log('No');
//     }

// }
// interval(['-25'])


// function workTime(input) {
    
//     let hour = Number(input[0])
//     let dayOfWeek = input[1]

//     if (dayOfWeek === 'Sunday' || hour < 10 || hour>18 ) {
//         console.log('closed');
//     }else console.log('open');


// }
// workTime(['11','Monday'])

// function ticket(input) {
    
//                                                                                  let dayOfWeek = input[0]
//                                                                                  let ticketPrice = 0
// switch (dayOfWeek) {
//     case 'Monday':
//     case 'Tuesday':
//     case 'Friday': ticketPrice = 12;break
//     case 'Wednesday':
//     case 'Thursday':ticketPrice = 14;break
//     case 'Saturday':
//     case 'Sunday': ticketPrice = 16;break
// }                                                                                // if (dayOfWeek === 'Monday' || dayOfWeek === 'Tuesday' || dayOfWeek === 'Friday') {
//                                                                                     // ticketPrice = 12
//                                                                                 // }else if (dayOfWeek === 'Wednesday' || dayOfWeek === 'Thursday') {
//                                                                                     // ticketPrice = 14
//                                                                                 // }else{
//                                                                                     // ticketPrice = 16
//                                                                                 // }
//                                                                                  console.log(ticketPrice);
// }
// ticket(['Monday'])