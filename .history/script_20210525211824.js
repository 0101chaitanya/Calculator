input = document.querySelector('input');
let p = document.querySelector('p');
let patterns = [/^[\d]+$/, /^[+\-*]$/];
input.addEventListener('change', e => {
    compute(e.target);
});
let inputArray = [];
let computedArray = [];
let x = [];

function compute(input) {

    inputArray = input.value.split('');
    console.log(inputArray);
    computedArray = inputArray.slice().map((item, patterns) => {

        if (Number(item).match(pattern[0]) || Number(item).match(pattern[1])) {
            console.log(item);
            return item;
        } else {
            p.addClass = "invalid";
            console.log([item, item.match(pattern)]);
        }

        // return x;
    });
    //4
    console.log(computedArray);
}