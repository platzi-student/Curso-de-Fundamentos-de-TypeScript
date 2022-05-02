"use strict";
(() => {
    let userId;
    let shirtSize;
    shirtSize = 'L';
    shirtSize = 'M';
    shirtSize = 'XL';
    shirtSize = 'M';
    function greeting(myText, size) {
        if (typeof myText === 'string') {
            console.log(`string ${myText.toLowerCase()}`);
        }
    }
    greeting(111, 'M');
    greeting('111', 'XL');
})();
