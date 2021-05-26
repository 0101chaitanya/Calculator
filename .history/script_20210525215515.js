input = document.querySelector('input');
let p = document.querySelector('p');
let patterns = [/^[\d]+$/, /^[+\-*]$/];
input.addEventListener('change', e => {
    compute(e.target);
});
let inputArray = [];
let computedArray = [];
let evalString = 0;

function compute(input) {

    inputArray = input.value.split('');
    console.log(inputArray);
    computedArray = inputArray.slice().map((item) => {
        if (!isNaN(Number(item))) {

            return item;
        } else {
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
                    return;


            }
        }


    });
    console.log(computedArray);

    // return x;
}
//4