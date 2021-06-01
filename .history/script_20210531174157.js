let input = document.getElementById('input');
//console.log(input.textContent);
let buttons = Array.from(document.querySelectorAll('svg'));
//console.log(1.3);
let p = document.querySelector('p');
let arrayCode = ['Equal', `Enter`, `e.shiftKey == true && e.code == 'Equal'`, `Minus`, `e.shiftKey` && 'Digit8', `Slash`, ` backspace`, `delete`, `Digit0`, `Digit1`, `Digit2`,
    `Digit3`, `Digit4`, `Digit5`, `Digit6`, `Digit7`, `Digit8`, `Digit9`, `Period`
];
//console.log((parseFloat(`${x}${`.`}${y}`)));
buttons.forEach(item => {

    item.addEventListener('click', e => {
        input.focus();
        keyValidation(e);
    });
});
document.addEventListener('keyup', e => {

    keyValidation(e);
    // e.preventDefault();

});

function keyValidation(e) {
    //console.log(e.key);
    if (e.code === 'Backspace' || e.target.id === 'backspace') {
        clear();
    } else if (e.code === 'Digit1' || e.target.id === '1') {

        append(1);

    } else if (e.code === 'Digit2' || e.target.id === '2') {

        append(2);

    } else if (e.code === 'Digit3' || e.target.id === '3') {

        append(3);


    } else if ((e.code === 'Equal' && e.shiftKey) || e.target.id === '+') {


        append("+");
    } else if (e.code === 'Digit4' || e.target.id === '4') {

        append(4);

    } else if (e.code === 'Digit5' || e.target.id === '5') {

        append(5);


    } else if (e.code === 'Digit6' || e.target.id === '6') {

        append(6);

    } else if (e.code === 'Minus' || e.target.id === '-') {

        append('-');

    } else if (e.code === 'Digit7' || e.target.id === '7') {

        append(7);

    } else if (e.code === 'Digit8' || e.target.id === '8') {

        append(8);

    } else if (e.code === 'Digit9' || e.target.id === '9') {

        append(9);

    } else if ((e.code == 'KeyX') || e.target.id === '*') {
        append('*');

    } else if (e.code === 'Digit0' || e.target.id === '0') {

        append(0);

    } else if (e.code === 'Period' || e.target.id === 'dot') {

        append('.');

    } else if (e.code === 'Enter' || e.target.id === '=') {
        evaluate();
        show();

    } else if (e.code === 'Slash' || e.target.id === '/') {

        append('/');

    }

}
/*
    //console.log(parseFloat('01'));
    input.textContent = '0';
    let operatorCount = 0;
    let array = [];
    let i = 0;
    let periodCount = 0;
    let operatorArray = [0];
    let stack = 0;

    function append(inputVar) {
        if (++i) {
            input.textContent = operatorArray[0]; {
                if (!isNaN(inputVar) && operatorCount <= 2) {
                    input.textContent = (input.textContent + inputVar);
                    array[operatorCount] = inputVar;
                } else if (isNaN(inputVar) && inputVar !== "." && operatorCount <= 2) {

                    input.textContent = (input.textContent + inputVar);
                    operatorArray[operatorCount] = inputVar;
                    periodCount = 0;
                    operatorCount++;

                } else if (isNaN(inputVar) && inputVar == "." && periodCount <= 1 && operatorCount <= 2) {
                    input.textContent = (input.textContent + inputVar);
                    array[operatorCount] = input.textContent + inputVar;
                    periodCount++;

                } else if (operatorCount > 2) {
                    evaluate();
                    show();
                }
            }
        }
    }

    function evaluate() {
        if (array[1] == null) {
            stack = parseFloat(array[0]);
        }
        if (operatorArray[0] == '+') {
            stack = parseFloat((parseFloat(array[0]) + parseFloat(array[1])).toFixed(4));
        }
        if (operatorArray[0] == '-') {
            stack = parseFloat((parseFloat(array[0]) - parseFloat(array[1])).toFixed(4));
        }
        if (operatorArray[0] == '*') {
            stack = parseFloat((parseFloat(array[0]) * parseFloat(array[1])).toFixed(4));
        }
        if (operatorArray[0] == '/' && array[1] != '0') {
            if (array[1] == '0') {
                input.textContent = 'Invalid input';
                stack = 0;

            } else {
                stack = parseFloat(parseFloat(parseFloat(array[0]) / parseFloat(array[1])).toFixed(4));
            }
        }
        return stack;
    }

    function show() {
        input.textContent = stack;
        operatorCount = 0;
        array = [array[1]];
        operatorArray = [operatorArray[1]];
        stack = 0;
        periodCount = 0;
        i++;
        append();

    }

    function clear() {
        input.textContent = '0';
        operatorCount = 0;
        array = [];
        operatorArray = [];
        stack = 0;
        periodCount = 0;
        i++;
        append();
    }
     */
let obj = Object.create(Object.prototype);
let str = '*4/3.567/93*2+';
let firstIndex;
let lastIndex;
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
obj.parsedDiv.forEach(function(item) {

});
division(obj)

function division(obj) {
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

        multiplication(obj);
        return obj;
    } else {
        multiplication(obj);
        return obj;
    }
}

function multiplication(obj) {} {
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

        addition(obj);
    } else {
        addition(obj);
    }
}

function addition(obj) {
    if (obj.parsedAdd != []) {
        let addAdjuster = 0;
        obj.addStack = [];

        obj.parsedAdd.forEach(function(i) {
            obj.addStack[addAdjuster] = Number(obj.numArray[(i - addAdjuster)]) + Number(obj.numArray[(i - addAdjuster + 1)]);

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

        subtraction(obj);
    } else {
        subtraction(obj);
    }

}

function subtraction(obj) {
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
        output(obj);

    } else {
        output(obj);
    }
}

function output(obj) {}
console.log(obj);
/*obj.subStack = [];
               let mulIndex = 0;
               //let muleAdjuster = 0;
               //console.log(obj);

               //console.log(obj);
               obj.parsedMul.forEach(function(item) {
                   obj.mulStack[mulIndex] = parseFloat(obj.numArray[(item)]) * parseFloat(obj.numArray[(item + 1)]);

                   mulIndex++;
               });
               let mulAdjuster = 0;


               obj.parsedMul.forEach(function(i) {
                   obj.numArray.splice(i - mulAdjuster, 2, obj.mulStack[mulAdjuster]);
                   obj.operatorArray.splice(i - mulAdjuster, 1);
                   mulAdjuster++;
               });



               obj.parsedMul.forEach(function(item) {
                   if (!isNaN(item)) {
                       obj.parsedsub.forEach(function(value) {
                           if (!isNaN(item)) {
                               if (item < value) {
                                   console.log(item, value);
                                   value = value - 1;
                                   console.log(value);
                                   obj.parsedAdd.splice(obj.parsedAdd.indexOf(item), 1, value);
                               }
                           }
                       });
                       obj.parsedSub.forEach(function(value) {
                           if (!isNaN(item)) {
                               if (item < value) {
                                   console.log(item, value);
                                   value = value - 1;
                                   console.log(value);
                                   obj.parsedSub.splice(obj.parsedSub.indexOf(item), 1, value);
                               }

                           }
                       });

                   }
               });
               /*
               obj.addStack = [];
               let addIndex = 0;
               obj.parsedAdd.forEach(function(item) {
                   obj.addStack[addIndex] = parseFloat(obj.numArray[(item)]) + parseFloat(obj.numArray[(item + 1)]);

                   addIndex++;
               });
               let addAdjuster = 0;

               obj.parsedAdd.forEach(function(i) {
                   obj.numArray.splice(i - addAdjuster, 2, obj.addStack[addAdjuster]);
                   obj.operatorArray.splice(i - addAdjuster, 1);
                   addAdjuster++;
               });

                */
/* 
obj.parsedAdd.forEach(function(item) {
    if (!isNaN(item)) {
        obj.parsedSub.forEach(function(value) {
            if (!isNaN(item)) {
                if (item < value) {
                    console.log(item, value);
                    value = value - 1;
                    console.log(value);
                    obj.parsedSub.splice(obj.parsedSub.indexOf(item), 1, value);
                }

            }
        });

    }
});
 */
/* 
obj.subStack = [];
let subIndex = 0;
obj.parsedSub.forEach(function(item) {
    obj.subStack[subIndex] = parseFloat(obj.numArray[(item)]) - Number(obj.numArray[(item + 1)]);

    addIndex++;
});
let subAdjuster = 0;

obj.parsedSub.forEach(function(i) {
    obj.numArray.splice(i - subAdjuster, 2, obj.subStack[subAdjuster]);
    obj.operatorArray.splice(i - subAdjuster, 1);
    subAdjuster++;
});
 */
console.log(obj);

/*
obj.mulStack = [];
let mulIndex = 0;

console.log(obj);

obj.parsedMul.forEach(function(item) {
    obj.mulStack[mulIndex] = obj.numArray[(item)] * obj.numArray[(item + 1)];

}); */
/* let mulAdjuster = 0;
obj.parsedMul.forEach(function(item) {
    obj.evaluatedArray[item] = obj.numArray.splice(parseFloat(obj.parsedMul[item]), 2, obj.mulStack[item]);
    obj.operatorArray.splice(parseFloat(obj.parsedMul[item]), 1);
});
 */ //console.log(obj);
/* obj.parsedMul.forEach(function(item) {
    if (!isNaN(item)) {
        obj.parsedAdd.forEach(function(value) {
            if (!isNaN(item)) {
                if (item < value) {
                    console.log(item, value);
                    value = value - 1;
                    console.log(value);
                    obj.parsedAdd.splice(obj.parsedMul.indexOf(item), 1, value);

                }
            }
        });

    }
});
 */

/* 
function divisionCheck(obj) {
    //obj.divisionFun[i] = str.slice().replace('/');
    obj[`divideArray`] = obj[`str`].split('/');
    let i = 0;

    obj.divideArray.forEach((item) => {
        obj[`divideArgs[${i}]`] = item;
        i++;
    });
    if (obj[`divideArgs[0]`] == obj.str) {

        obj['diivisionNeeded'] = false;
        obj[`divisionParsedString`] = obj[`divideArgs[${0}]`];
        multiplyCheck(obj);
        return obj;
    } else {
        obj['diivisionNeeded'] = true;
        obj.divideRegex = /[-+\*]/;
        let i = 0;
        for (let item of obj.divideArray) {
            obj[`divideSplit${[i]}`] = item.match(/[-+\*]?/);
            i++;
        }
        console.log(obj);
    }


}

function multiplyCheck() {
    obj[`multiplyArray`] = obj[`divisionParsedString`].match('*');
    obj.multiplyArray.forEach((item) => {
        let j = 0;
        obj[`multiplyArgs[${j}]`] = item;
        j++;
    });
    return obj;
}
//console.log(obj);
//if (divideArray[0] == a) {
//  let multiplyArray = a.split(`* `); */