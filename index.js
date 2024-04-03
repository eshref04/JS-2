// ? TASK 1: Verilmish ededin 3-un quvveti olub, olmadigini tapan alqoritm yazin

// var eded = parseInt(prompt("Eded daxil ele: "));
// var quvvet = 1;

// for (var i = 0; quvvet < eded; i++) {
//     quvvet *= 3;
// }

// if (eded ===1) {
//     console.log("Eded 3-un quvveti deyil");
// }
// else if(quvvet === eded){
//     console.log("Eded 3-un quvvetidir");
// }
//  else {
//     console.log("Eded 3-un quvveti deyil");
// }


// ! TASK:2 Verilmish ededin Polidrom olub olmadigini yoxlayin


// var eded = prompt("Nese yazzzzzzz ");
// var polidrom = true;


// var tersine = "";
// for (var index = eded.length - 1; index >= 0; index--) {
//     tersine += eded[index];
// }


// for (var i = 0; i < eded.length; i++) {
//     if (eded[i] !== tersine[i]) {
//         polidrom = false;
//         break;
//     }
// }


// if (polidrom) {
//     console.log("Bu polidromduuuuu");
// } else {
//     console.log("Bu polidrom deyyillllll");
// }


// ? TASK:3 Verilmis ededin en yaxin asagi kokalti deyerini tapan alqoritm (imisalcun eded 20-dirse 4 qaytarmalidi, 25-dise 5 qaytarmalidi, 16-drisa 4 ve s.)


// var eded = parseFloat(prompt("Eded daxil elee "));


// if (eded < 0 || eded === 0) {
//     console.log("Musbet eded yazz");
// } else {
//     var kok = 0;

    
//     while (kok * kok <= eded) {
//         kok++;
//     }

   
//     var enYaxinKokAlti = kok - 1;

//     console.log(enYaxinKokAlti);
// }


// ! TASK:4 Verilmis array-deki reqemlerinin cemi 10-dan kicik olan ededlerin sayini tapan alqoritm



let arr = [ 987, 79, 19, 45, 57,913,3445,23,80,9];
let counter = 0;

for (let i = 0; i < arr.length; i++) {
    let eded = arr[i];
    let cem = 0;
    while (eded) {
        cem += eded - ((eded / 10) | 0) * 10;
        eded = (eded / 10) | 0;
    }
    if (cem < 10) {
        counter++;
    }
}

console.log(counter);

