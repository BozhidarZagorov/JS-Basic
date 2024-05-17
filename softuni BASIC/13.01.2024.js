// function demo(input) {
    // let firstnum = 4
    // let secondnum= 4
    // let result = firstnum !== secondnum              // s 3 znaka e v js
    // console.log(result);


//     let Number = 15
//     if(Number<10){
//         console.log('number is < 10');
//     }
//     else {
//          console.log('number is >= 10');                // pri zadyrjane na alt i klikane na nqkolko mesta moje da se pishe ednovremenno
//     }
//          console.log('end');

// let number = 3.432316343438721324
// let number2=2.55555555555555
// console.log(Math.floor(number))
// console.log(Math.ceil(number))
// console.log(number.toFixed(4))
// console.log(number2.toFixed(5))
// console.log(Math.pow(3,3))
/////////////////////////////////////////////////////!!!!!!!!!!!!
// let Number = 5
// if(Number<10){
//     let sum = 20 + Number                       // sum ne moje da izleze ot kydravite skobi deklarirane v kydravi skobi ne moje da izleze ot tqh
// }
// console.log(sum)
//////////////////////////////////////////////////////!!!!!!!!!!!

function demo(input) {

let figure = input[0]
let area = 0

if(figure === 'square'){

    let a = Number(input[1])
    area=a*a

}
else if(figure === 'rectangle'){

    let a = Number(input[1])
    let b = Number(input[2])
    area=a*b

}
else if(figure === 'circle'){

    let r=Number(input[1])
    area=Math.PI*r*r

}
else if(figure === 'triangle')
{

    let a = Number(input[1])
    let ha = Number(input[2])
    area=(a*ha)/2

}


console.log(area.toFixed(3));

}
demo(["square","5"])