input = document.querySelector('input');
let inputArray = input.value.split('');
console.log(inputArray);
let patterns = {
    regNum: /^[\d]+$/,
    regOperator: /^[+-*/]{1}$/
};
inputArray.slice().map((item, patterns) => {
    checkFn(item);
});


function checkFn(item) {

}