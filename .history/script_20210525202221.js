input = document.querySelector('input');
let inputArray = input.value.split('');
console.log(inputArray);
let p = document.querySelector('p');
let patterns = [/^[\d]+$/, /^[+\-*]$/];
let computedArray = inputArray.slice().map((item, patterns) => {
    for (let pattern in patterns) {
        if (item.match(pattern)) {
            return item;
        } else {
            input. =
        }
        return
    }
});