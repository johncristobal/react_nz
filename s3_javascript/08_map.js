const arr = [1,2,3,4,5]
const mapped = arr.map( (x) => x * 2)
console.log(mapped)

//mapea objetos
const users = [
    {id:1, name:' jose'},
    {id:2, name:' felipe'},
    {id:3, name:' john'},
    {id:4, name:' alex'},
]
const mappedObj = users.map( (user) => `<h1>${user.name}</h1>`)
console.log(mappedObj)