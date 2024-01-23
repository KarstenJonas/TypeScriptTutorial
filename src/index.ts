function kgToLbs(weight: number | string): number {
   //Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10');

//Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

//Nullable Types
function greet(name: string | null | undefined) {
    if(name)
        console.log(name.toLocaleUpperCase());
    else
        console.log('Hola!');
}

greet(undefined);