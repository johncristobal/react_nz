//hace un tipo de map usando los ... 
const fn = (a,b,c) => {
    console.log(a + b + c)
}
const arr = [1,2,3,4]
//fn(...arr); 

//concatemos con spread ...
const arr1 = [5,6]
const arrFull = [...arr, ...arr1, 7, 8, 9];
//console.log(arrFull)

const obj1 = { a: 1, b: 2}
const obj2 = { b: 5, c: 'chancho feliz'}

//creamos una copia por medio del spread
const obj3 = { ...obj1 }
obj1.a = 10;
console.log(obj3, obj1);    //los dos son diferentes

const obj4 = {...obj1, ...obj2}
console.log(obj4);

const obj5 = {
    ...obj1,
    loading: true,
    data: {
        prop: 'lala',
        animal: 'perrito'
    }
}

console.log(obj5)