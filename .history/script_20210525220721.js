input = document.querySelector('input');
let p = document.querySelector('p');
let patterns = [/^[\d]+$/, /^[+\-*]$/];
input.addEventListener('change', e => {
    compute(e.target);
});
let inputArray = [];
let computedArray = [];
let evalString = 0;
let operatorCount = 0;

function compute(input) {

    inputArray = input.value.split('');
    console.log(inputArray);
    computedArray = inputArray.slice().map((item) => {
        if (!isNaN(Number(item))) {
            evalString = Number(item);
            return item;
        } else if (item.match(patterns(1))) {
            switch (item) {
                case '+':
                    return `+`;
                case '-':
                    return `-`;
                case '*':
                    return `*`;
                case '/':
                    return `/`;
                default:
                    p.addClass = `invalid`;
                    break;
            }

        } else {}


    });
    console.log(computedArray);

    // return x;
}
//4