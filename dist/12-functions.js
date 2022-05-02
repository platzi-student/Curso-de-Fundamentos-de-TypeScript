"use strict";
(() => {
    function createProductToJson(title, createdAt, stock, size) {
        return {
            title,
            createdAt,
            stock,
            size
        };
    }
    const producto1 = createProductToJson('P1', new Date(), 12, 'XL');
    console.log(producto1);
    console.log(producto1.title);
    console.log(producto1.stock);
    console.log(producto1.size);
    const createProductToJsonV2 = (title, createdAt, stock, size) => {
        return {
            title,
            createdAt,
            stock,
            size
        };
    };
    const producto2 = createProductToJsonV2('P1', new Date(), 12);
    console.log(producto2);
    console.log(producto2.title);
    console.log(producto2.stock);
    console.log(producto2.size);
})();
