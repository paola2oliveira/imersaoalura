var valorEmDolarTexto = prompt("Qual o valor em dólar que você quer converter?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)
alert(valorEmDolarNumero)

var valorEmReal = valorEmDolarNumero * 5.50
var valorEmRealDecimal = valorEmReal.toFixed(2)

alert(valorEmRealDecimal)