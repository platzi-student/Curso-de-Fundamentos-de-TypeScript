"use strict";
(() => {
    let myDynamicVar;
    myDynamicVar = 100;
    myDynamicVar = null;
    myDynamicVar = {};
    myDynamicVar = '';
    myDynamicVar = 'Hola';
    const rta = myDynamicVar.toLowerCase();
    console.log(rta);
    myDynamicVar = 1212;
    const rta2 = myDynamicVar.toFixed();
    console.log(rta2);
})();
