"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const searchAttributes_1 = __importDefault(require("./searchAttributes"));
const ingestVariants_1 = __importDefault(require("./ingestVariants"));
const router = (0, express_1.Router)();
router.use('/search', searchAttributes_1.default);
router.use('/ingest-variants', ingestVariants_1.default);
exports.default = router;
