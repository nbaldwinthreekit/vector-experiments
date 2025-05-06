"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    // Handle search attributes
    res.json({ message: 'searchAttributes route hit' });
});
exports.default = router;
