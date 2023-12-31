"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./db");
const app = (0, express_1.default)();
// Allow json body
app.use(express_1.default.json());
// Setup cors middleware
app.use((0, cors_1.default)());
app.get('/ingredients', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ingredients = yield db_1.IngredientCollection.find({});
    console.log(ingredients);
    res.status(200).json({ status: true, data: ingredients });
}));
app.get('*', (req, res) => {
    res.status(404).json({ status: false, message: "Invalid route" });
});
// Start the server 
app.listen(3000, () => {
    console.log("listening on port 3000");
});
