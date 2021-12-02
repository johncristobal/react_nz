//todos los args => tomas uno y el resto al arreglo
//ojo el ... tiene que ser el ultimo 
const rest = (a, ...args) => {
    console.log(a)
    console.log(args)
}
rest(1,2,3,4,5,6)

//esto ya lo vimos con fHerr, destructurar objetos
const obj1 = {
    a:1,
    b:1,
    c:1,
    d:1
}

const { a, ...data } = obj1;
console.log(a);
console.log(data);

//destructurar arrelgos
const arr = [1,2,3,4,5]
const [a1,...restData] = arr;
console.log(a1,restData)


