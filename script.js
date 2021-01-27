let inputValue = document.getElementById('input_value');
let convertFrom = document.getElementById('convertFrom');
let convertTo = document.getElementById('convertTo');
let calculateButton = document.getElementById('calculateBtn');
let clearButton = document.getElementById('clearBtn');
let output = document.getElementById('calculatorAnswer');

let converter = new Converter(convertFrom.value, convertTo.value);

calculateButton.addEventListener('click', (event)=> {
  event.preventDefault();
  let input = inputValue.value;
  console.log(input)
  if (input ) {
    convertType(`${convertFrom.value}/${convertTo.value}`)
  }
})

function convertType(type) {
  let input = inputValue.value;
  console.log(type)
    switch (type) {
        case "kilometer/meter":
            output.innerText = `convert kilometer to meter: ${converter.convertKmToM(input)}`
            break;
        case 'meter/kilometer':
            output.innerText = `convert meter to kilometer: ${converter.convertMToKm(input)}`
            break;
        case 'miles/kilometer':
            output.innerText = `convert miles to kilometer: ${converter.convertMilesToKm(input)}`
            break;
        case 'kilometer/miles':
            output.innerText = `convert kilometer to miles: ${converter.convertKmToMiles(input)}`
            break;
        case 'centimeter/meter':
            output.innerText = `convert centimeter to meter: ${converter.convertCmToM(input)}`
            break;
        case 'meter/centimeter':
            output.innerText = `convert meter to centimeter: ${converter.convertMToCm(input)}`
            break;
        default:
    }
}

clearButton.addEventListener("click", function () {
    converter.clearButton(inputValue.value)
})