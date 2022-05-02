"use strict";
(() => {
    const products = [];
    const addProduct = (data) => {
        products.push(data);
    };
    addProduct({
        title: 'Pro1',
        createdAt: new Date(1993, 1, 1),
        stock: 12
    });
    addProduct({
        title: 'Pro2',
        createdAt: new Date(1993, 1, 1),
        stock: 12,
        size: 'XL'
    });
    console.log(products);
    products.push({
        title: 'Prod3',
        createdAt: new Date(1992, 1, 1),
        stock: 12,
        size: 'XL'
    });
})();
