"use strict";
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10');
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toLocaleUpperCase());
    else
        console.log('Hola!');
}
greet(undefined);
//# sourceMappingURL=index.js.map