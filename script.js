const numberButtons = document.querySelectorAll("button[data-type=operator]");
const operandButtons = document.querySelectorAll("button[data-type=operand]");
const equalsBtn = document.getElementById("equals");
const clearBtn = document.getElementById("clear");
let inputNumber = document.getElementById("inputNum");
let currentNumber = "";
let firstNum = 0;
let result = 0;
let checker = false;
let wholeEquation = "";
let currentFunction;

function clear(){
	changeValue("");
	checker = false;
	wholeEquation = "";
}

function changeValue(output){
	currentNumber = "";
	currentNumber += output;
	inputNumber.value = currentNumber;
	firstNumber = 0;
	result = 0;
}

function removeClass(){
	operandButtons.forEach((btn) => {
		btn.classList.remove("active");
	})
}

clearBtn.addEventListener('click', clear);

numberButtons.forEach((btn) => {
	btn.addEventListener('click', () => {
		if(currentNumber.length < 11){
			wholeEquation+= btn.value;
			currentNumber += btn.value;
			inputNumber.value=currentNumber;
		}else{
			changeValue("Error404");
			currentNumber = "";
		}
		removeClass();
	});
});


operandButtons.forEach((btn) => {
	btn.addEventListener('click', () =>{
		removeClass();
		btn.classList.add("active");
		firstNum = Number(currentNumber);
		checker = true;
		wholeEquation += btn.value;
		currentFunction = btn.value;
		currentNumber = "";
	})
})

equalsBtn.addEventListener('click', () => {
	removeClass();
	console.log(firstNum + " firstNum");
	if(checker === false){
		result = Number(currentNumber);
	}
	else{
		console.log(firstNum);
		console.log(currentNumber);
		switch(currentFunction){
			case "+":
				result = firstNum + Number(currentNumber);
				changeValue(result);
				break;
			case "-":
				result = firstNum - Number(currentNumber);
				changeValue(result);
				break;
			case "/":
				result = firstNum/Number(currentNumber);
				console.log(result);
				changeValue(result);
				break;
			case "*":
				result = firstNum*Number(currentNumber);
				changeValue(result);
				break;
		}
	wholeEquation+= result;
	checker = false;
	}
})

