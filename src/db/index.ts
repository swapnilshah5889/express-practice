import mongoose  from "mongoose";
import { config } from "dotenv";
import { IngredientSchema, RecipieSchema } from "./models";
config();

// If Mongo URL not available - Throw an error
if(! ("MONGO_URL" in process.env) ) {
    throw new Error("MONGODB URL not specified");
}

// Mongo DB connection
const MONGO_URL: string = process.env.MONGO_URL as string;
console.log(JSON.stringify(MONGO_URL));
mongoose.connect(MONGO_URL);

export const RecepieCollection = mongoose.model('recepie', RecipieSchema);
export const IngredientCollection = mongoose.model('ingredients', IngredientSchema);
