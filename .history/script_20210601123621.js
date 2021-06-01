let input = document.getElementById('inp');
//console.log(input.textContent);
let row = Array.from(document.querySelectorAll('.row'));
let button = Array.from(document.querySelectorAll('row>button'));

//console.log(1.3);
let arrayCode = ['Equal', `Enter`, `e.shiftKey == true && e.code == 'Equal'`, `Minus`, `e.shiftKey` && 'Digit8', `Slash`, ` backspace`, `delete`, `Digit0`, `Digit1`, `Digit2`,
    `Digit3`, `Digit4`, `Digit5`, `Digit6`, `Digit7`, `Digit8`, `Digit9`, `Period`
];
let obj = Object.create(Object.prototype);

//console.log((parseFloat(`${x}${`.`}${y}`)));
row.forEach(item => {

    item..addEventListener('click', e => {
        console.log(typeof(e.target.id));
        keyValidation(e);
    });
});
document.addEventListener('keyup', e => {
    e.preventDefault();

    keyValidation(e);

});
let x = 0;
input.textContent = '';

function keyValidation(e) {
    e.preventDefault();

    //console.log(e.key);
    if (e.code === 'Backspace' || e.target.id === 'backspace') {
        let x = input.textContent.split('');
        x.pop();
        input.textContent = x.join('');
    } else if (e.code === 'Digit1' || e.target.id === '1') {

        input.textContent += 1;

    } else if (e.code === 'Digit2' || e.target.id === '2') {

        input.textContent += 2;

    } else if (e.code === 'Digit3' || e.target.id === '3') {

        input.textContent += 3;


    } else if ((e.code === 'Equal' && e.shiftKey) || e.target.id === '+') {

        input.textContent += '+';
    } else if (e.code === 'Digit4' || e.target.id === '4') {
        input.textContent += 4;

    } else if (e.code === 'Digit5' || e.target.id === '5') {
        input.textContent += 5;


    } else if (e.code === 'Digit6' || e.target.id === '6') {
        input.textContent += 6;

    } else if (e.code === 'Minus' || e.target.id === '-') {
        input.textContent += '-';

    } else if (e.code === 'Digit7' || e.target.id === '7') {
        input.textContent += 7;

    } else if (e.code === 'Digit8' || e.target.id === '8') {
        input.textContent += 8;

    } else if (e.code === 'Digit9' || e.target.id === '9') {
        input.textContent += 9;

    } else if ((e.code == 'KeyX') || e.target.id === '*') {
        input.textContent += '*';
    } else if (e.code === 'Digit0' || e.target.id === '0') {
        input.textContent += 0;

    } else if (e.code === 'Period' || e.target.id === 'dot') {
        input.textContent += '.';

    } else if (e.code === 'Enter' || e.target.id === '=') {
        obj.execute(input.textContent);
    } else if (e.code === 'Slash' || e.target.id === '/') {
        input.textContent += '/';

    }

}


obj.execute = function(x) {
    let str = x || 0;

    let strArray = str.split('');
    if (strArray[0] === '+' || strArray[0] === "-") {
        strArray.unshift(0);
    } else if (strArray[0] === "*" || strArray[0] === "/") {
        strArray.unshift(1);
    }

    if (strArray[strArray.length - 1] === '+' || strArray[strArray.length - 1] === "-") {
        strArray.push(0);
    } else if (strArray[strArray.length - 1] === "*" || strArray[strArray.length - 1] === "/") {
        strArray.push(1);
    }
    str = strArray.join('');
    //console.log(str);

    obj[`str`] = str;

    let i = 0;

    obj.divFun = obj.str.slice().replaceAll('/', `d`);
    //console.log(obj.divFun);
    obj.mulFun = obj.divFun.slice().replaceAll('*', `m`);
    //console.log(obj.mulFun);
    obj.addFun = obj.mulFun.slice().replaceAll('+', `a`);
    //console.log(obj.addFun);
    obj.subFun = obj.addFun.slice().replaceAll('-', `s`);
    //console.log(obj.subFun);
    obj.numArray = obj.subFun.split(/[a-z]/g);
    let regX = /\D/g;
    //console.log(obj.numArray);
    //console.log(obj.subFun);
    obj.operatorArray = obj.subFun.split("").filter(item => {
        if (isNaN(item) && item != '.') {
            return item;
        }

    });
    //console.log(obj.operatorArray.length);
    obj.parsedDiv = [];
    obj.parsedMul = [];
    obj.parsedAdd = [];
    obj.parsedSub = [];
    for (i = 0; i < obj.operatorArray.length; i++) {
        if (obj.operatorArray[i] == 'd') {
            obj.parsedDiv.push(i);
        }
        if (obj.operatorArray[i] == 'm') {
            obj.parsedMul.push(i);
        }
        if (obj.operatorArray[i] == 'a') {
            obj.parsedAdd.push(i);
        }
        if (obj.operatorArray[i] == 's') {
            obj.parsedSub.push(i);
        }
    }

    obj.evaluatedArray = [];

    obj.evaluatedArray.writable = true;
    obj.evaluatedArray.enumerable = true;
    obj.evaluatedArray.configurable = true;

    //let diveAdjuster = 0;
    //console.log(obj);

    //console.log(obj);
    obj.division(obj);
};

obj.division = function(obj) {
    if (obj.parsedDiv != []) {
        let divAdjuster = 0;
        obj.divStack = [];

        obj.parsedDiv.forEach(function(i) {
            obj.divStack[divAdjuster] = parseFloat(obj.numArray[(i - divAdjuster)]) / parseFloat(obj.numArray[((i - divAdjuster) + 1)]);

            obj.numArray.splice(i - divAdjuster, 2, obj.divStack[divAdjuster]);
            obj.operatorArray.splice(i - divAdjuster, 1);



            obj.parsedMul.forEach(function(value) {
                {
                    if (value >= i) {
                        // console.log(i, value);
                        value = --value;
                        //      console.log(value);
                        obj.parsedMul.splice(obj.parsedMul.indexOf(i), 1, value);
                        console.log(value);

                    }
                }
            });

            obj.parsedAdd.forEach(function(value) {
                {
                    if (value >= i) {
                        //        console.log(i, value);
                        value = --value;

                        console.log(value);
                        //      console.log(value);
                        obj.parsedAdd.splice(obj.parsedAdd.indexOf(i), 1, value);


                    }
                }
            });
            obj.parsedSub.forEach(function(value) {
                {
                    if (value >= i) {
                        //        console.log(i, value);
                        value = --value;

                        console.log(value);
                        obj.parsedSub.splice(obj.parsedSub.indexOf(i), 1, value);
                    }

                }
            });
            //divIndex++;
            divAdjuster++;

        });

        obj.multiplication(obj);

    } else {
        obj.multiplication(obj);

    }
};

obj.multiplication = function(obj) {
    if (obj.parsedMul != []) {
        let mulAdjuster = 0;
        obj.mulStack = [];

        obj.parsedMul.forEach(function(i) {
            obj.mulStack[mulAdjuster] = parseFloat(obj.numArray[(i - mulAdjuster)]) * parseFloat(obj.numArray[(i - mulAdjuster + 1)]);

            obj.numArray.splice(i - mulAdjuster, 2, obj.mulStack[mulAdjuster]);
            obj.operatorArray.splice(i - mulAdjuster, 1);



            obj.parsedAdd.forEach(function(value) {
                {
                    if (value >= i) {
                        //        console.log(i, value);
                        value = --value;

                        console.log(value);
                        //      console.log(value);
                        obj.parsedAdd.splice(obj.parsedAdd.indexOf(i), 1, value);


                    }
                }
            });
            obj.parsedSub.forEach(function(value) {
                {
                    if (value >= i) {
                        //        console.log(i, value);
                        value = --value;

                        console.log(value);
                        obj.parsedSub.splice(obj.parsedSub.indexOf(i), 1, value);
                    }

                }
            });
            //mulIndex++;
            mulAdjuster++;

        });

        obj.addition(obj);
    } else {
        obj.addition(obj);
    }
};

obj.addition = function(obj) {
    if (obj.parsedAdd != []) {
        let addAdjuster = 0;
        obj.addStack = [];

        obj.parsedAdd.forEach(function(i) {
            obj.addStack[addAdjuster] = parseFloat(obj.numArray[(i - addAdjuster)]) + parseFloat(obj.numArray[(i - addAdjuster + 1)]);

            obj.numArray.splice(i - addAdjuster, 2, obj.addStack[addAdjuster]);
            obj.operatorArray.splice(i - addAdjuster, 1);



            obj.parsedSub.forEach(function(value) {
                {
                    if (value >= i) {
                        //        console.log(i, value);
                        value = --value;

                        console.log(value);
                        obj.parsedSub.splice(obj.parsedSub.indexOf(i), 1, value);
                    }

                }
            });
            //addIndex++;
            addAdjuster++;

        });

        obj.subtraction(obj);
    } else {
        obj.subtraction(obj);
    }

};


obj.subtraction = function(obj) {
    if (obj.parsedSub != []) {
        let subAdjuster = 0;
        obj.subStack = [];

        obj.parsedSub.forEach(function(i) {
            obj.subStack[subAdjuster] = parseFloat(obj.numArray[(i - subAdjuster)]) - parseFloat(obj.numArray[(i - subAdjuster + 1)]);

            obj.numArray.splice(i - subAdjuster, 2, obj.subStack[subAdjuster]);
            obj.operatorArray.splice(i - subAdjuster, 1);



            obj.parsedSub.forEach(function(value) {
                {
                    if (value > i) {
                        //        console.log(i, value);
                        value = --value;

                        console.log(value);
                        obj.parsedSub.splice(obj.parsedSub.indexOf(i), 1, value);
                    }

                }
            });
            //subIndex++;
            subAdjuster++;
        });
        obj.output = parseFloat(obj.numArray[0].toFixed(4));
        obj.outputFn(obj);

    } else {
        obj.output = parseFloat(obj.numArray[0].toFixed(4));
        obj.outputFn(obj);
    }
};

obj.outputFn = function(obj) {

    input.textContent = obj.output;
};