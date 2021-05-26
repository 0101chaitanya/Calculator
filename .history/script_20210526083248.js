let input = document.querySelector('input');
let p = document.querySelector('p');
let patterns = /^[.+\-*]$/;
input.addEventListener('change', e => {
    compute(e.target);
});
let inputArray;
let computedArray;
let parsedArray;
let evalString = 0;
let numCount = 0;

console.log(parseFloat('1.999x@!));

            function compute(element) {
                inputArray = element.value.split(`+` || '-' || '*' || '/');
                console.log(inputArray);
                parsedArray = inputArray.slice().map((item) => {

                    if (!isNaN(Number(item))) {
                        evalString += Number(item);
                        obj[`${item}+${numCount}`] = 'valid';
                        numCount++;
                        return obj;
                    } else if (item.match(patterns)) {
                        obj[`${item}`] = 'valid';
                        return obj;
                    } else {
                        obj[`${item}`] = 'invalid';
                        return obj;

                    }


                });
                console.log(parsedArray);

                return parsedArray;
            }
            computedArray = compute(input).filter(item => Object.values(item) == 'valid')
            .reduce((object) => {
                evalString = 0;
                //console.log(`${0} + ${Number.parseFloat(Object.keys(object)).toFixed(4)}`);
                if (!isNaN(Number.parseFloat(Object.keys(object)).toFixed(4))) {
                    evalString = `${evalString}${Number.parseFloat(Object.keys(object)).toFixed(4)}`;
                    console.log(evalString);
                }

            });
            /* .filter(item => {
                if(item.keys)
            }); */
            //console.log(computedArray);