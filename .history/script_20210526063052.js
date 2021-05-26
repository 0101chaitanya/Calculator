let input = document.querySelector('input');
let p = document.querySelector('p');
let patterns = /^[+\-*]$/;
input.addEventListener('change', e => {
    compute(e.target);
});
let inputArray;
let computedArray;
let parsedArray;
let evalString = 0;
let operatorCount = 0;

function compute(element) {

    inputArray = element.value.split('');
    console.log(inputArray);
    parsedArray = inputArray.slice().map((item) => {
        if (!isNaN(Number(item))) {
            evalString += Number(item);
            return item;
        } else if (item.match(patterns)) {
            switch (item) {
                case '+':
                    return `+`;
                case '-':
                    return `-`;
                case '*':
                    return `*`;
                case '/':
                    return `/`;
            }
        } else {
            return undefined;
        }


    });
    console.log(parsedArray);

    return parsedArray;
}
computedArray = compute;
//console.log(computedArray);