input = document.querySelector('input');
let p = document.querySelector('p');
let patterns = [/^[\d]+$/, /^[+\-*]$/];
input.addEventListener('change', e => {
    compute(e.target);
});
let inputArray = [];
let computedArray = [];
let x = [];
console.log(+ == '+');

function compute(input) {

    inputArray = input.value.split('');
    console.log(inputArray);
    computedArray = inputArray.slice().map((item, patterns) => {
            if (!isNaN(Number(item))) {
                console.log(item);
                return item;
            } else if (item == )

        }

        // return x;
    });
//4
console.log(computedArray);
}