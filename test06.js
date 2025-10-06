// 3. no parameter, hasreturn
function showHello(){
    console.log(`Wow wow wow...`)
    return `Hello...` 
}

console.log( showHello() ) 

// 4. have parameter, hasreturn
function callSquareArea(widths, longs){
    return widths * longs
}

console.log(`พื้นที่สี่เหลี่ยมกว้าง 100 ยาว 50 มีพื้นที่เป็น ${callSquareArea(100, 50)} `)