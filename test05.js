//Funtion คือการทำงานหนึ่งๆ จะไม่ทำงานหากไม่เรียกใฃ้ หรือที่เรียก call function
// Function มี 4 ประเภท
// 1. no parameter, no return
function showHi(){
    console.log(`hi hi hi...`)
}
showHi()

// 2. have parameter, no return
function sumNumberAndShow(n1, n2){
    console.log(`${n1} + ${n2} = ${n1 + n2}`)
}
sumNumberAndShow(10, 20) //argument คือ ค่าที่ส่งไปให้ parameter
sumNumberAndShow(100, 200)