const display = document.getElementById('display')
const keypad = document.getElementById('keypad')
const toggle = document.getElementById('toggle')
const body = document.getElementById('body')

toggle.addEventListener('click', e => {
  currentClass = body.classList.item(0)

  switch(currentClass){
    case 'theme-one':
      body.classList.replace(currentClass, 'theme-two')
      break
    case 'theme-two':
      body.classList.replace(currentClass, 'theme-three')
      break
    case 'theme-three':
      body.classList.replace(currentClass, 'theme-one')
      break
    default:
      break
  }
})

display.textContent= '0'
operationMode = false
numberOne = 0

keypad.addEventListener('click', e => {
  const element = e.target
  const data = element.dataset

  if (data.number) writeScreen (data.number)
  if (data.operation) getOperation (element, data.operation)
  if (data.command) runCommand(data.command)
})
const writeScreen = number =>{
  if(display.textContent === '0' || operationMode === true){
    display.textContent = number
    operationMode = false
  }
  else {
    display.textContent += number
  }
}
const getOperation = (element, operation) => {
  operationMode = true;

  if (numberOne != 0){
    numberOne = runOperation(numberOne, operationNow, Number(display.textContent));
    display.textContent = String(numberOne);
  }else if (display.textcontent === '0'){
    return
  } else {
    numberOne = Number(display.textContent)
    display.textcontent = element.textContent
  }
  operationNow = operation
  console.log(numberOne)
  console.log(operation)
}
const runCommand = command => {
  switch (command) {
    case 'del':
      display.textContent = display.textContent.slice(0,-1)
      break;
    case 'reset':
      display.textContent = '0'
      numberOne = 0
      operationMode = false
      break;
  }
}
const runOperation= (numberOne, operation, numberTwo) => {
  switch (operation) {
    case 'add':
      result = numberOne + numberTwo
      break;
    case 'minus':
      result = numberOne - numberTwo
      break;
    case 'multiply':
      result = numberOne * numberTwo
      break;
    case 'divide':
      result = numberOne / numberTwo
      break;
  }
   return result
}