//iltramos cuando se cumpla true la condicion
//podemos colocar el indice si lo ocupas
const arr = [0,1,2,3,4];
const res = arr.filter( (value, idx) => {
    console.log(idx);
    return value > 2;
});
console.log(res);
