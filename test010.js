// Function: Default parameter
function funcA (a, b, c, d = 100, e = 200){
    console.log(a + b + c + d + e)
}

funcA(10, 20, 30)
funcA(10, 20, 30, 40)
funcA(10, 20, 30, 40, 50)