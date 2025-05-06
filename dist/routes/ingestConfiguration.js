"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    try {
        const productRawData = req.body;
        const productEntries = new Map();
        const attributeEntries = new Map();
        for (const product of productRawData) {
            if (!productEntries.has(product.productName)) {
                productEntries.set(product.productName, { description: p.description });
            }
            for (const attribute of product.configuration) {
                if (!attributeEntries.has(attribute.attributeName)) {
                    attributeEntries.set(attribute.attributeName, new Set());
                }
                const toUpdate = attributeEntries.get(attribute.attributeName);
                attribute.attributeOptions.forEach((attribute) => toUpdate?.add(attribute));
            }
        }
        console.log(productEntries);
        console.log(attributeEntries);
        res.json({
            message: 'Successfully ingested configuration data.',
            productCount: productEntries.size,
            attributeCount: attributeEntries.size,
        });
    }
    catch (err) {
        console.log(err);
        res.json({ error: 'Error ingesting configuration data:', err });
    }
});
exports.default = router;
