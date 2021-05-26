input = document.querySelector('input');
let p = document.querySelector('p');
let patterns = /^[+\-*]$/;
input.addEventListener('change', e => {
    compute(e.target);
});
let inputArray = [];
let computedArray = [];
let evalString = 0;
let operatorCount = 0;

function compute(input, p) {

    inputArray = input.value.split('');
    console.log(inputArray);
    computedArray = inputArray.slice().reduce((item) => {
        if (!isNaN(Number(item))) {
            evalString += Number(item);
            return item;
        } else if (item.match(patterns)) {
            switch (item) {
                case '+':
                    operatorCount = 1;
                    break;
                case '-':
                    return `-`;
                case '*':
                    return `*`;
                case '/':
                    return `/`;
            }


        } else {
            p.style.color = 'orange';
        }


    });
    console.log(computedArray);

    // return x;
}
//4