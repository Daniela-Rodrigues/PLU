function operação (operador) {

const num1 = Number (document.querySelector("#num1").
const num2 = Number (document.querySelector("#num2").
let res = 0

if (operador =="+") {
   res =num1 + num2
    
} else if (operador=="-"){
    res = num1-num2

} else if (operador =="*"){
    res= num1*num2

}else {
    if (num2 ==0){
        alert ("Não pode dividir o número por zero!")
}else {
    res = num1 /num2
}
alert (res)