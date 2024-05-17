// https://linktr.ee/AlexandrinaMehandzhiyska

// zada4a 1

// function conv(input){
//     let money = Number(input[0])    indeksiraneto go vzima ot posledniq red
//     let result = 0
//     result=money*1.79549
//     console.log(result)
// }
// conv([100,250,5555,20])    spored gorniqt indeks vzima ot tozi red syotvetniq 0,1,2,3

// zada4a 2

// function gradus(input){
//     let rad = Number(input[0])
//     let grad = 0
//     grad = rad * 180/Math.PI
//     //grad = rad *57.295779513082320876798154814105
//     console.log(grad)
// }
// gradus([3.1416,6.2832])

// zada4a 3

// function depozit(input){
//     let depozSuma = Number(input[0])
//     let Srok = Number(input[1])
//     let GodishenProcent = Number(input[2])/100               //deli se na 100 poneje e procent toest 5.7/100
//     let sum = 0
//     sum = depozSuma + Srok *((depozSuma*GodishenProcent)/12)
//     console.log(sum)
// }
// depozit(["200","3","5.7"])

//zada4a 4

// function zadlit(input){
//     let brStranici = Number(input[0])
//     let StrChas = Number (input[1])
//     let brDni = Number(input[2])
//     let result = 0
//     result = brStranici/StrChas/brDni
//     console.log(result)
// }
// zadlit(["212","20","2"])

// zada4a 5

// function materiali(input){
//     let himikali = Number(input[0])
//     let markeri = Number(input[1])
//     let preparat = Number(input[2])
//     let namalenie = Number(input[3])/100
//     let cenaHimikali=5.80
//     let cenaMarkeri=7.20
//     let cenaPreparat=1.20
//     let result = cenaHimikali*himikali + cenaMarkeri*markeri + cenaPreparat*preparat
//     result = result-(result*namalenie)
//     console.log(result)
// }
// materiali(["2","3","4","25"])

// zada4a 6

// function mazane(input){
//     let cenaNailon = 1.5
//     let cenaBoq=14.50
//     let cenaRazBoq=5
//     let nailon=Number(input[0])+2
//     let boq=Number(input[1])+Number(input[1])*0.1
//     let razreditel=Number(input[2])
//     let Chasove= Number([input[3]])
//     let SumaMaterial=cenaNailon*nailon + cenaBoq*boq + cenaRazBoq*razreditel + 0.4
//     let zaplashtane=(SumaMaterial*0.3)*Chasove+SumaMaterial
//     console.log(zaplashtane)
// }
// mazane(["10","11","4","8"])

// zada4a 7

// function hrana(input){
//     let cenaPile = 10.35
//     let cenaRiba = 12.40
//     let cenaVegan = 8.15
//     let pile = Number(input[0])
//     let riba = Number(input[1])
//     let vegan = Number(input[2])
//     let pory4ka=cenaPile*pile + cenaRiba*riba + cenaVegan*vegan
//     let desert = pory4ka*0.2
//     let Sum=desert+pory4ka+2.5
//     console.log(Sum);
// }
// hrana(["2","4","3"])

// zada4a 8

// function basketbol(input) {
//     let taksa=Number(input[0])
//     let kecove=taksa- taksa*0.4
//     let ekip = kecove - kecove*0.2
//     let topka = ekip*1/4
//     let aksesoari = topka*1/5
//     let Sum = taksa+kecove+ekip+topka+aksesoari
//     console.log(Sum);    
// }
// basketbol(["365"])

// zada4a 9

// function akvarium(input) {
//     let dyljina = Number(input[0])
//     let shirochina = Number(input[1])
//     let visochina = Number(input[2])
//     let procent = Number(input[3])/100
//     let litri = dyljina*shirochina*visochina*0.001
//     let result = litri - (litri*procent)
//     console.log(result);
// }
// akvarium(["85","75","47","17"])