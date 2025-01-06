// const num1 = +prompt("1-sonni kiriting")
// const num2 = +prompt("2-sonni kiriting")
// const operation = +prompt("1) + \n 2) - \n 3) * \n 4) /")

// if(operation == 1) {
//     alert(`Natija ${num1 + num2}`);
// }else if(operation == 2) {
//     alert(`Natija ${num1 - num2}`);
// }else if(operation == 3) {
//     alert(`Natija ${num1 * num2}`);
// }else if(operation == 4) {
//     alert(`Natija ${num1 / num2}`);
// }else{
//     alert("Iltimos, to'g'ri amalni tanlang!")
// }

// const num = +prompt("1 dan 10 gacha son kiriting")
// const secretnum = Math.round(Math.random() * 10)
// if(num === secretnum) {
//     alert("Tabriklayman! Siz to'g'ri topdingiz")
// }else {
//     alert(`Afsus! notog'ri. To'g'ri son : ${secretnum}`)
// }

// const operation = +prompt("1) winter \n 2) spring \n 3) summer \n 4) autumn")

// if(operation == 1) {
//     alert("Одевайтесь потеплее")
// }else if(operation == 2) {
//     alert("Носите зонт")
// }else if(operation == 3) {
//     alert("сидите дома")
// }else if(operation == 4) {
//     alert("носите телефон")
// }

alert("Sizda hozir random sonlar chiqishi boshledi")
const num = Math.round(Math.random() * 30)
alert(`Randomorqali chiqqan son: ${num}`)

if (confirm("biz random sonni 2 ga kopaytirmoqchi va bo'lmoqchimiz!")) {
    const num2 = num * 2;
    const num3 = num / 2;
    const num4 = num % 3;
    alert(
        `random orqali chiqqan son: ${num} edi \n
        biz uni 2 ga kopaytirib ${num2} sonini chiqardik \n
        va shu sonni 2 ga bo'lib ${num3} sonini chiqardik \n
        va shu sonni 3 ga bo'lgandagi qoldiq ${num4} sonini chiqardik`
    );
}
