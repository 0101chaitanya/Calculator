let input = document.querySelector('input');
let p = document.querySelector('p');
let patterns = /^[.+\-*]$/;
input.addEventListener('change', e => {
    compute(e.target);
});
let inputArray;
let computedArray;
let parsedArray;
let evalString = 0;
let numCount = 0;
let intReg = /^[0-9]+$/;
let floatReg = /^([0-9]+).([0-9]{0,4})?$/;
let a = (parseFloat(1));
console.log(a);
console.log(intReg.test(a));

function compute(element) {
    inputArray = element.value.split("");
    numberArray = element.value.split("+" || "-" || '*' || "/");
    parsedArray = numberArray.slice().reduce((item) => {
        let item1 = Number(parseFloat(item));
        if (intReg.valid(item) || floatReg.valid(item)) {
            evalString += item1;
            console.log(evalString)
        }
    });
    console.log(parsedArray);

    return parsedArray;
}
computedArray = compute(input).filter(item => Object.values(item) == 'valid')
    .reduce((object) => {
        evalString = 0;
        //console.log(`${0} + ${Number.parseFloat(Object.keys(object)).toFixed(4)}`);
        if (!isNaN(Number.parseFloat(Object.keys(object)).toFixed(4))) {
            evalString = `${evalString}${Number.parseFloat(Object.keys(object)).toFixed(4)}`;
            console.log(evalString);
        }

    });
/* .filter(item => {
    if(item.keys)
}); */
//console.log(computedArray);