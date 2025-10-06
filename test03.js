// ----------------------------------------------------------------------
// Expression นิพจน์ คือ ตัวแปร การคำนวณ การเปรียบเทียบ เรียกใช้ฟังก์ชัน ...
console.log(`10 + 20 = ${10 + 20}`)
// 2. Loop/Iteretion/Repeation ทำซ้ำ คือ ทำงานเดิมๆซ้ำ
// รู้จำนวณครั้งในการทำซ้ำ หรือ ไม่รู้จำนวณครั้งในการทำซ้ำ
// while, do-while, for

let i = 1
while( i <= 5){
    //console.log('SAU...')
    console.log(i + i + ' SAU...')
    console.log(`${i} ${i} SAU...`) // backtick ` Alt+9+6
    i = i + 1; //++i, i++, i += 1
} 
// ----------------------------
console.log('++++++++++++++++++++++++++++')
let j = 1
do {
    console.log(`${i} SAU`) // backtick ` Alt+9+6
    j = j + 1;
}while(j <= 5);
// ----------------------------
console.log('++++++++++++++++++++++++++++')
for(let k = 1; k <= 5; k = k + 1){
    console.log(`${k} SAU`) // backtick ` Alt+9+6
}