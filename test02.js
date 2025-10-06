// Control Flow - Control Statement
// 1. Selection/Condition/Decision เลือกทำ คือ ต้องพิสูทน์ตรวจสอบก่อนที่จะทำอะไร
// พิสูทน์ครั้งเดียว จริงทำ เท็จไม่ทำ if 
let data1 = 10 
if (data1 > 20 || data1 < 50){
    console.log('wow.....')
}

// พิสูทน์ครั้งเดียว จริงทำ เท็จก็ทำ if-else
let data2 = 55
if (data2 % 10 >= 5){
    console.log('wow.....')
}else{
    console.log('not wow.....')
}

// พิสูทน์หลายครั้ง if-else-if, switch-case
let score = 68
if (score >= 80){
    console.log('A')
}else if (score >= 70){
    console.log('B')
}else if (score >= 60){
    console.log('C')
}else if (score >= 50){
    console.log('D')
}else{
    console.log('F')
}

let data4 = 1115
switch (data4){
    case 191 : console.log('โทรหาตำรวจ')
                break
    case 1112 : console.log('โทรสั่ง pizza')
                break
    case 1115 : console.log('โทร KFC')
                console.log('The Pizza')
                break  
    case 1170 : console.log('โทรหา จส.100')
                break
    default : console.log('ไม่รุ้จักเบอร์นี้')

}