"use strict";
(() => {
    //  let myNumber: number = undefined;
    //  let myString: string = null;
    let myNull = null;
    let myUndefined = undefined;
    let myNumber = null; //
    myNumber = 12;
    let myString = undefined;
    myString = 'aas';
    function hi(name) {
        let hello = 'Hola ';
        if (name) {
            hello += name.toLowerCase();
        }
        else {
            hello += 'nobody';
        }
        console.log(hello);
    }
    function hiV2(name) {
        let hello = 'Hola ';
        hello += (name === null || name === void 0 ? void 0 : name.toLowerCase()) || 'nobody';
        console.log(hello);
    }
    hi('Nicolas');
    hi(null);
    hiV2('Nicolas');
    hiV2(null);
})();
