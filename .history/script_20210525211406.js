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
        for (let pattern in patterns) {

            if (Number(item).match(pattern)) {
                console.log([item, item.match(pattern)]);
                return true;
            } else {
                p.addClass = "invalid";
                console.log([item, item.match(pattern)]);
            }
        }
        // return x;
    });
    console.log(computedArray);
}