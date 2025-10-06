// arrow function
// กรณีมี 1 parameter พารามิเตอร์จะอยู่ในวงเล็บหรือไม่ก็ได้

const dtiA = yourname => {
    console.log(`สวัสดี ${yourname}`);
}

// กรณีคำสั่งทำงานมีคำสั่งเดียว และไม่ใช่ return ไม่ต้องอยู่ใน { } ก็ได้
const dtiB = yourname => console.log(`สวัสดี ${yourname}`);

// กรณีคำสั่งทำงานมีคำสั่งเดียว และเป็น return 
// ไม่ต้องอยู่ใน { } ก็ได้ แต่จะต้องเขียน return ลงไป
const dtiC = radius => {
    return 3.14 * radius * radius
}

const dtiD = radius => 3.14 * radius * radius

const ditE = dtiD