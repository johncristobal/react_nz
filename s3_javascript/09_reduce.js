const arr = [1,2,9,3,4,5]
const getMax = (a,b) => Math.max(a,b)

const r1 = arr.reduce( (acc, el) => {
    return acc + el
}, 0)

const r2 = arr.reduce(getMax)

console.log(r1);
console.log(r2);

const users = [
    {id:1, name:' jose'},
    {id:2, name:' felipe'},
    {id:3, name:' john'},
    {id:4, name:' alex'},
]
const r3 = users.reduce((acc,el) => {
    if(el.id < 2){
        return acc;
    }
    return acc.concat(el)
}, []);

console.log(r3);
