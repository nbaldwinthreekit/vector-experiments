"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = __importDefault(require("../lib/prisma"));
const router = (0, express_1.Router)();
function canonicalize(obj) {
    if (Array.isArray(obj))
        return obj.map(canonicalize);
    if (obj !== null && typeof obj === 'object') {
        return Object.fromEntries(Object.entries(obj)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([k, v]) => [k, canonicalize(v)]));
    }
    return obj;
}
router.post('/', async (req, res) => {
    try {
        const rawVariantsData = req.body;
        for (const v of rawVariantsData) {
            const newProduct = await prisma_1.default.product.upsert({
                where: { productName: v.productName },
                update: {},
                create: {
                    productName: v.productName,
                    description: v.description,
                    metadata: { reminder: 'metadata' },
                },
            });
            // Want to order configurations for accurate dup detection
            const configuration = JSON.stringify(canonicalize(v.configuration));
            const newVariant = await prisma_1.default.variant.upsert({
                where: {
                    productId_configuration: {
                        productId: newProduct.id,
                        configuration: configuration,
                    },
                },
                update: {},
                create: {
                    productId: newProduct.id,
                    configuration: configuration,
                    metadata: { reminder: 'metadata' },
                },
            });
            // create attributes/options
            for (let [attributeName, attributeOption] of Object.entries(v.configuration)) {
                const newAttribute = await prisma_1.default.attributeOption.upsert({
                    where: {
                        attribute_attributeOption: {
                            attribute: attributeName,
                            attributeOption: attributeOption,
                        },
                    },
                    update: {},
                    create: {
                        attribute: attributeName,
                        attributeOption: attributeOption,
                        metadata: { reminder: 'metadata' },
                    },
                });
                // link product and attribute option
                await prisma_1.default.productAttributeOption.upsert({
                    where: {
                        productId_attributeOptionId: {
                            productId: newProduct.id,
                            attributeOptionId: newAttribute.id,
                        },
                    },
                    update: {},
                    create: {
                        productId: newProduct.id,
                        attributeOptionId: newAttribute.id,
                    },
                });
            }
        }
        res.json({
            message: 'Successfully ingested variant data.',
        });
    }
    catch (err) {
        console.log(err);
        res.json({ error: 'Error ingesting variant data:', err });
    }
});
exports.default = router;
