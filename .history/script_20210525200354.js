input = document.querySelector('input');
let inputArray = input.value.split('');
console.log(array);
let patterns = {
    regNum: /^[\d]+$/,
    regOperator: /^[+-*/]{1}$/
};
array.map((item, patterns) => {
    checkFn(item);
});


function checkFn(item) {

}