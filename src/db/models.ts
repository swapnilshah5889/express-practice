import mongoose from "mongoose"
let Schema = mongoose.Schema;

export const RecipieSchema = new mongoose.Schema({
    'name': {type: 'string'},
    'ingredients': [{type: Schema.Types.ObjectId, ref:'Ingredient'}]
});

export const IngredientSchema = new mongoose.Schema({
    'name': {type: 'string'}
});