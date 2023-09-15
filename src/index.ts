import express from "express";
import cors from "cors";
import { IngredientCollection, RecepieCollection } from "./db"; 
import { Request, Response, NextFunction } from "express";
const app = express();

// Allow json body
app.use(express.json());
// Setup cors middleware
app.use(cors());

app.get('/ingredients', async (req, res) => {
    const ingredients = await IngredientCollection.find({}); 
    res.status(200).json({status:true, data: ingredients});
})

app.get('*', (req,res) => {
    res.status(404).json({status:false, message:"Invalid route"})
})

// Start the server 
app.listen(3000, () => {
    console.log("listening on port 3000");
});