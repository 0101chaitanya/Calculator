let input = document.getElementById('input');
console.log(input.textContent);
input.textContent = "";
let buttons = Array.from(document.querySelectorAll('svg'));
console.log(1 + +.3);
let p = document.querySelector('p');
let arrayCode = ['Equal', `Enter`, `e.shiftKey == true && e.code == 'Equal'`, `Minus`, `e.shiftKey` && 'Digit8', `Slash`, ` backspace`, `delete`, `Digit0`, `Digit1`, `Digit2`,
    `Digit3`, `Digit4`, `Digit5`, `Digit6`, `Digit7`, `Digit8`, `Digit9`, `Period`
];
console.log(parseFloat('2.3.4.5'));
buttons.forEach(item => {

    item.addEventListener('click', e => {
        keyValidation(e);

        console.log(e.target.id);
        console.log(e.target);

    });
});
document.addEventListener('keyup', e => {

    keyValidation(e);
    e.preventDefault();

    console.log(e.code);
});
let i = 0;
let caretPosition = 0;

function keyValidation(e) {
    console.log(e.target);
    if (e.code === 'backspace' || e.target.id === 'delete') {
        console.log('nice:) AC', i);
        inputFunction('');

    } else if (e.code === 'Digit1' || e.target.id === '1') {
        console.log('nice:) 1', i);
        inputFunction(1);

    } else if (e.code === 'Digit2' || e.target.id === '2') {
        console.log('nice:) 2', i);
        inputFunction(2);

    } else if (e.code === 'Digit3' || e.target.id === '3') {
        console.log('nice:) 3', i);
        inputFunction(3);


    } else if ((e.code === 'Equal' && e.shiftKey) || e.target.id === '+') {
        console.log('nice:) +', i);

        inputFunction('+');
    } else if (e.code === 'Digit4' || e.target.id === '4') {
        console.log('nice:) 4', i);
        inputFunction(4);

    } else if (e.code === 'Digit5' || e.target.id === '5') {
        console.log('nice:) 5', i);
        inputFunction(5);


    } else if (e.code === 'Digit6' || e.target.id === '6') {
        console.log('nice:) 6', i);
        inputFunction(6);

    } else if (e.code === 'Minus' || e.target.id === '-') {
        console.log('nice:) -', i);
        inputFunction('-');

    } else if (e.code === 'Digit7' || e.target.id === '7') {
        console.log('nice:) 7', i);
        inputFunction(7);

    } else if (e.code === 'Digit8' || e.target.id === '8') {
        console.log('nice:) 8', i);
        inputFunction(8);

    } else if (e.code === 'Digit9' || e.target.id === '9') {
        console.log('nice:) 9', i);
        inputFunction(9);

    } else if ((e.code == 'KeyX') || e.target.id === '*') {
        console.log('nice:) 1*1', i);
        inputFunction('*');

    } else if (e.code === 'Digit0' || e.target.id === '0') {
        console.log('nice:) 0', i);
        inputFunction(0);

    } else if (e.code === 'Period' || e.target.id === 'dot') {
        console.log('nice:) .', i);
        inputFunction('.');

    } else if (e.code === 'Enter' || e.target.id === '=') {
        console.log('nice:) =', i);
        inputFunction('=');

    } else if (e.code === 'Slash' || e.target.id === '/') {
        console.log('nice:) /', i);
        inputFunction('/');

    }

}
let x;
let plusCount = 0;
let periodCount = 0;
let operatorValue = 1;
let stack = 0;

function inputFunction(inputVar) {
    if (Number(inputVar) == inputVar) {
        if (operatorValue == 1) {
            input.textContent += inputVar;
            stack = parseFloat(parseFloat((stack + inputVar)).toFixed(4));
        } else if (operatorValue == 2) {
            if (plusCount <= 2) {
                stack = parseFloat(parseFloat((parseFloat(stack) + inputVar)).toFixed(4));
                input.textContent += inputVar;

            }
        }
    }
    if (inputVar == '.') {
        if (periodCount <= 1) {
            input.textContent += inputVar;

            stack = stack + inputVar;
            periodCount++;
        } else {
            input.textContent = input.textContent;
            stack = stack;
        }
    }

    if (inputVar == "+") {

        periodCount = 0;
        stack = stack + inputVar;
        operatorValue = 2;
        plusCount++;
        input.textContent += inputVar;

    }
    if (inputVar == '=') {
        periodCount = 0;
        plusCount = (operatorValue = 1) - 1;
        console.log(operatorValue);
        input.textContent = stack;
        input.textContent = "";
    }
}
/* if (`${e.key}` === '+') {
    notInvalid = 1;
    alert('hi');

    e.target.value = `${input.value}` + '1';
    input.value = e.target.value;
    //console.log(e.target.value);

}
 */
/* else {
           console.log(e.target.value);
           x = e.target.value.split('');
           console.log(x);
           y = x.splice(x.length, 1).join(`,`);
           console.log(y);
           e.target.value = y;
           //console.log(x);
       } */



// console.log(i);
/* else if (e.code === 'Equal') {
        //    console.log(e.target.value);

        let a = 2,
            b = 4;
        //e.key  = "+"
        //e.target.disabled = true;

        //   console.table();


        alert('hi', e.target);

        e.target.value = e.target.value + `=`;

    }
 */
//  conole.log(e.target.value);

let divideArray = [];




//console.log(array);
//  if(e.keyCode = )

//p.style.color = 'red';






/* let computedArray;
let parsedArray;
let evalString = 0;
let numCount = 0;
let intReg = /^[0-9]+$/;
let floatReg = /^([0-9]+).([0-9]{0,4})?$/;
let mathReg = /^[.+\-*]$/;

let a = (parseFloat(1));
console.log(a);
console.log(intReg.test(a));
let item1;
let index;

function compute(element) {
    let inputLength = element.value.length;
    console.log(inputLength);
    let plusIndex;
    let minusIndex;
    let intoIndex;
    let byIndex;
    let OutputArray = [];
    let intermediateArray = [];

    let inputArray;
    for (i = 0; i < inputLength; i++) {
        inputArray = element.value.split("");
        outputArray = inputArray.splice(0, 1);
        console.log(outputArray);
        console.log();
        plusIndex = inputArray.indexOf("+");
        console.log(plusIndex);
        numberArray = element.value.split("+" || "-" || '*' || "/");

    }
    inputArray = element.value.split("");
    numberArray = element.value.split("+" || "-" || '*' || "/");
    parsedArray = numberArray.slice().reduce((item) => {
        item1 = Number(parseFloat(item));
        if (intReg.test(item) || floatReg.test(item)) {
            evalString += item1;
            //  console.log(evalString);
            return evalString;
        }
        if (add(item)) {
            //   let check =
        }
        console.log(parsedArray);

        return parsedArray;
    });
} */
/*        function operatorPlace(arg) {

    } *
    /      computedArray = compute(input);
    /* filter(item => Object.values(item) == 'valid')
        .reduce((object) => {
            evalString = 0;
            //console.log(`${0} + ${Number.parseFloat(Object.keys(object)).toFixed(4)}`);
            if (!isNaN(Number.parseFloat(Object.keys(object)).toFixed(4))) {
                evalString = `${evalString}${Number.parseFloat(Object.keys(object)).toFixed(4)}`;
                console.log(evalString);
            }

        }); */
/* .filter(item => {
    if(item.keys)
}); */
//console.log(computedArray);
//console.log(computedArray);