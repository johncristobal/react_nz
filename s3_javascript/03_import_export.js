const felices = ['ch1', 'ch2'];
const tristes = ['t1', 't2'];

const fn1 = () => {
    return "happy"
}

module.exports = {
    felices,
    tristes,
    fn1
}

//esto en index.js
// const { felices, tristes, fn1 } = require("./03_import_export");
// //import f from "./03_import_export";

// console.log(felices);
// console.log(tristes);
// console.log(fn1());

