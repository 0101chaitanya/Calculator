let input = document.getElementById('input');
console.log(input.textContent);
let buttons = Array.from(document.querySelectorAll('svg'));
console.log(buttons);
let p = document.querySelector('p');
let arrayCode = ['Equal', `Enter`, `e.shiftKey == true && e.code == 'Equal'`, `Minus`, `e.shiftKey` && 'Digit8', `Slash`, ` backspace`, `delete`, `Digit0`, `Digit1`, `Digit2`,
    `Digit3`, `Digit4`, `Digit5`, `Digit6`, `Digit7`, `Digit8`, `Digit9`,
];

buttons.forEach(item => {

    item.addEventListener('click', e => {
        keyValidation(e);

        console.log(e.target.id);
        console.log(e.target);

    });
});
document.addEventListener('keyup', e => {

    keyValidation(e);
    console.log(e.code);
});
let i = 0;

function keyValidation(e) {
    console.log(e.target);
    if (e.code === 'delete' || e.target.id === 'AC') {
        console.log('nice:) AC', i);
        clearInput();

    } else if (e.code === 'Digit1' || e.target.id === '1') {
        console.log('nice:) 1', i);
        input(1);

    } else if (e.code === 'Digit2' || e.target.id === '2') {
        console.log('nice:) 2', i);
        input(2);

    } else if (e.code === 'Digit3' || e.target.id === '3') {
        console.log('nice:) 4', i);
        input(4);

    } else if (e.code === 'Digit1' || e.target.id === '1') {
        console.log('nice:)', i);
        // input();    

    } else if (e.code === 'Digit1' || e.target.id === '1') {
        console.log('nice:)', i);
        // input();    


    } else if (e.code === 'Digit1' || e.target.id === '1') {
        console.log('nice:)', i);
        // input();    

    } else if (e.code === 'Digit1' || e.target.id === '1') {
        console.log('nice:)', i);
        // input();    

    } else if (e.code === 'Digit1' || e.target.id === '1') {
        console.log('nice:)', i);
        // input();    

    } else if (e.code === 'Digit1' || e.target.id === '1') {
        console.log('nice:)', i);
        // input();    

    } else if (e.code === 'Digit1' || e.target.id === '1') {
        console.log('nice:)', i);
        // input();    

    } else if (e.code === 'Digit1' || e.target.id === '1') {
        console.log('nice:)', i);
        // input();    

    } else if (e.code === 'Digit1' || e.target.id === '1') {
        console.log('nice:)', i);
        // input();    

    } else if (e.code === 'Digit1' || e.target.id === '1') {
        console.log('nice:)', i);
        // input();    

    } else if (e.code === 'Digit1' || e.target.id === '1') {
        console.log('nice:)', i);
        // input();    

    } else if (e.code === 'Digit1' || e.target.id === '1') {
        console.log('nice:)', i);
        // input();    

    } else if ((e.shiftKey === true && e.code === 'Equal') || e.target.id === 'AC') {
        console.log('nice:)', i);
        i++;
        //evaluate();
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