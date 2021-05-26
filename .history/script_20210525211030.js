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
                x = [item, item.match(pattern)];
            } else {
                p.addClass = "invalid";
                x = [item, item.match(pattern)];
            }
            return x;
        }
    });
    console.log(computedArray);
}