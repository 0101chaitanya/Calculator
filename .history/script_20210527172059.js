let input = document.querySelector('input');
console.log(input);
let p = document.querySelector('p');
let array = [];
input.addEventListener('keypress', e => {
    //    e.target.value = "";
    keyValidation(e);
});

///^([\d]+[\.]?[\d]{0,8}?[+\/\*-]){1,}$/g;
function keyValidation(e) {
    //    preventDefaultToggle(e, true);
    if (e.key == '+') {
        console.log(e.target.value);
        input.value = "";

        let a = 2,
            b = 4;
        //e.key  = "+"
        //e.target.disabled = true;

        console.table(e.key == "=");
        if (e.key == "+") {

            //        e.preventDefault()
            alert('hi');
            console.log(e.target.value);
            input.value += '+';
            e.target.disabled = false;
            return e.target.value;

        } else {
            return e.target.value;
        }

        console.log(e.target.value);
    } else {
        e.preventDefault();
    }
}
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