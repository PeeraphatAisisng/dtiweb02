// ตัวแปร variable
var data1 = 10 // เป็น Global
data1 = 20
let data2 = 50  // เป็น Local **
data2 = 60
const data3 = 100 // เป็น Local **
// data3 = 200 error

console.log(data1)
console.log(data2)
console.log(data3)
{
    let data4 = 555
    console.log(data4)
    console.log(data3)
}

// console.log(data4) error
console.log(data3)