//funciones declarads con function
//this ya que function se puede usar como clases
function Fn(){
    this.prop = 'nuevo_objeto';
}

Fn.prototype.lala = function FunctionPro(){ }
const r = new Fn();
console.log(r.__proto__);

//arrow func, new no aplica
//no tiene contexto this
const fatFn = () => {
    return 'happy'
}

console.log(fatFn());

const ret2 = () => 2

console.log(ret2());