// expresion de clase - no hoisting 
// const Rect = class R {

// }

//declaracion de clase - no hoisting 
class Rect {

}

class Chancho {
    propiedad = 'miprop'
    #hambre //definido si es privado necesariamente
    static estatico = 42
    constructor(estado = 'feliz', hambre = false){
        this.estado = estado;
        this.#hambre = hambre;
        this.hablar()
    }

    hablar(){
        console.log("Chancho constructor", this.estado, this.#hambre)
    }

    static comer(){
        console.log("Cominedo...", this.estatico);
    }
}

//hoisting - var y function al top del archivo
function Square(){}

const r = new Rect()
const f = new Chancho() // OJO debe ir si o si new, esto por el constructor
const t = new Chancho('sad') // OJO debe ir si o si new, esto por el constructor

Chancho.comer()
