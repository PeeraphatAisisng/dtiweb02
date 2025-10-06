// Call Back Function ***
let aa = function (){
    console.log(`Hi...`)
}

const bb = (n1, n2) => n1 * n2

function Dti(a, b, c, d){
    a()
    console.log(`ผลคูณ คือ ${b(10, 20)}`)
    console.log(`สวัสดี ${c}`)
    d(`Wow`, `Woo`, 100)
}

Dti(aa, bb, 'สมฃาย', (x, y, z) => { console.log(`${x} ${y} ${z}`)}) 