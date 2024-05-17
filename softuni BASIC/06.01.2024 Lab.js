// function greeting(input) {
//     let name = input[0]
//     console.log(`Hello, ${name}!`);
// }
// greeting(["Niki"])

// function concatenate(input){
//     let name = input[0]
//     let lastName = input[1]
//     let age = Number(input[2])
//     let city = input[3]
//     console.log(`You are ${name} ${lastName}, a ${age}-years old person from ${city}.`);
// }
// concatenate(["maria","ivanova",20,"sofia"])

// function projects(input) {
//     let name = input[0]
//     let brProekti = Number(input[1])
//     let timeNeeded=brProekti*3
//     console.log(`The architect ${name} will need ${timeNeeded} hours to complete ${brProekti} project/s.`);
// }
// projects(["George","4"])

// function zoomag(input) {
//     let cenaHranaKu4eta = 2.5
//     let cenaHranaKotki = 4
//     let HranaKu4eta = Number(input[0])
//     let HranaKotki = Number(input[1])
//     let Sum = cenaHranaKotki*HranaKotki + cenaHranaKu4eta*HranaKu4eta
//     console.log(Sum)
// }
// zoomag(["5","4"])

function YardGreen(input) {
    let dvor = Number(input[0])*7.61
    let otstypka = dvor*0.18
    let Sum=dvor - otstypka
    console.log(`The final price is: ${Sum} lv.`)
    console.log(`The discount is: ${otstypka} lv.`)
}
YardGreen(["550"])