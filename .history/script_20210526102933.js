let input = document.querySelector('input');
let p = document.querySelector('p');
window.addEventListener('keydown', e => {
    console.log(e.keyCode);
});
let keys = document.querySelectorAll('.keyField[data-key="${e.keyCode}');
keys.forEach(key => addEventListener() input.addEventListener('change', e => {
            compute(e.target);
        });

        document.addEventListener()







        let computedArray;
        let parsedArray;
        let evalString = 0;
        let numCount = 0;
        let intReg = /^[0-9]+$/;
        let floatReg = /^([0-9]+).([0-9]{0,4})?$/;
        let mathReg = /^[.+\-*]$/;

        let a = (parseFloat(1)); console.log(a); console.log(intReg.test(a));
        let item1;
        let index;

        function compute(element) {
            let inputLength = element.value.length;
            console.log(inputLength);
            let plusIndex;
            let minusIndex;
            let intoIndex;
            let byIndex;
            let OutputArray = [];
            let intermediateArray = [];

            let inputArray;
            for (i = 0; i < inputLength; i++) {
                inputArray = element.value.split("");
                outputArray = inputArray.splice(0, 1);
                console.log(outputArray);
                console.log();
                plusIndex = inputArray.indexOf("+");
                console.log(plusIndex);
                numberArray = element.value.split("+" || "-" || '*' || "/");

            }
            inputArray = element.value.split("");
            numberArray = element.value.split("+" || "-" || '*' || "/");
            parsedArray = numberArray.slice().reduce((item) => {
                item1 = Number(parseFloat(item));
                if (intReg.test(item) || floatReg.test(item)) {
                    evalString += item1;
                    //  console.log(evalString);
                    return evalString;
                }
                if (add(item)) {
                    //   let check =
                }
                console.log(parsedArray);

                return parsedArray;
            });
        }
        /*        function operatorPlace(arg) {

            } *
            /      computedArray = compute(input);
            /* filter(item => Object.values(item) == 'valid')
                .reduce((object) => {
                    evalString = 0;
                    //console.log(`${0} + ${Number.parseFloat(Object.keys(object)).toFixed(4)}`);
                    if (!isNaN(Number.parseFloat(Object.keys(object)).toFixed(4))) {
                        evalString = `${evalString}${Number.parseFloat(Object.keys(object)).toFixed(4)}`;
                        console.log(evalString);
                    }

                }); */
        /* .filter(item => {
            if(item.keys)
        }); */
        //console.log(computedArray);