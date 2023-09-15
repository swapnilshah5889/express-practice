"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientCollection = exports.RecepieCollection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
const models_1 = require("./models");
(0, dotenv_1.config)();
// If Mongo URL not available - Throw an error
if (!("MONGO_URL" in process.env)) {
    throw new Error("MONGODB URL not specified");
}
// Mongo DB connection
const MONGO_URL = process.env.MONGO_URL;
console.log(JSON.stringify(MONGO_URL));
mongoose_1.default.connect(MONGO_URL);
exports.RecepieCollection = mongoose_1.default.model('recepie', models_1.RecipieSchema);
exports.IngredientCollection = mongoose_1.default.model('ingredients', models_1.IngredientSchema);
