"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientSchema = exports.RecipieSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
let Schema = mongoose_1.default.Schema;
exports.RecipieSchema = new mongoose_1.default.Schema({
    'name': { type: 'string' },
    'ingredients': [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }]
});
exports.IngredientSchema = new mongoose_1.default.Schema({
    'name': { type: 'string' }
});
