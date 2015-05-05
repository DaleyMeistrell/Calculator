// <form name="calcbox">

// <input type="button" name="one"   value="  1  " OnClick="Calc.Input.value += '1'">
// <input type="button" name="two"   value="  2  " OnCLick="Calc.Input.value += '2'">
// <input type="button" name="three" value="  3  " OnClick="Calc.Input.value += '3'">
// <input type="button" name="plus"  value="  +  " OnClick="Calc.Input.value += ' + '">
// <br>
// <input type="button" name="four"  value="  4  " OnClick="Calc.Input.value += '4'">
// <input type="button" name="five"  value="  5  " OnCLick="Calc.Input.value += '5'">
// <input type="button" name="six"   value="  6  " OnClick="Calc.Input.value += '6'">
// <input type="button" name="minus" value="  -  " OnClick="Calc.Input.value += ' - '">
// <br>
// <input type="button" name="seven" value="  7  " OnClick="Calc.Input.value += '7'">
// <input type="button" name="eight" value="  8  " OnCLick="Calc.Input.value += '8'">
// <input type="button" name="nine"  value="  9  " OnClick="Calc.Input.value += '9'">
// <input type="button" name="multiply" value="  x  " OnClick="Calc.Input.value += ' * '">
// <br>
// <input type="button" name="clear" value="  c  " OnClick="Calc.Input.value = ''">
// <input type="button" name="zero"  value="  0  " OnClick="Calc.Input.value += '0'">
// <input type="button" name="equal"  value="  =  " OnClick="Calc.Input.value = eval(Calc.Input.value)">
// <input type="button" name="divide"   value="  /  " OnClick="Calc.Input.value += ' / '">
// <br>

var daleyCalculator = [{name: 'clear', value: ' '},
					{name: 'period', value: ' . '},
					{name: 'divide', value: ' / '},
					{name: 'seven', vale: ' 7 '},
					{name: 'eight', value: ' 8 '},
					{name: 'nine', value: ' 9 '},
					{name: 'multiply', value: ' * '},
					{name: 'four', value: ' 4 '},
					{name: 'five', value: ' 5 '},
					{name: 'six', value: ' 6 '},
					{name: 'minus', value: ' - '},
					{name: 'one', value: ' 1 '},
					{name: 'two', value: ' 2 '},
					{name: 'three', value: ' 3 '},
					{name: 'plus', value: ' + '},
					{name: 'zero', value: ' 0 '},
					{name: 'equal', value: ' = '}]

function mathEquation() { 
var pick = Math.floor(Math.random() * bucket_list.length)
var destinationPicker = bucket_list[pick];
console.log(destinationPicker);
console.log("<img src='" + destinationPicker.src + "'>");
document.getElementById("chosen_one").innerHTML = destinationPicker.name;
document.getElementById("chosen_image").innerHTML = "<img src='" + destinationPicker.src + "'>";
}

