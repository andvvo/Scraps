import mongoose, { Schema, Document } from "mongoose";

interface IIngredient {
  id: number;
  amount: number;
  unit: string;
  unitLong: string;
  unitShort: string;
  aisle: string;
  name: string;
  original: string;
  originalName: string;
  meta: string[];
  image: string;
}

export interface IRecipe extends Document {
  id: number;
  title: string;
  image: string;
  imageType: string;
  usedIngredientCount: number;
  missedIngredientCount: number;
  missedIngredients: IIngredient[];
  usedIngredients: IIngredient[];
  unusedIngredients: IIngredient[];
  likes: number;
}

const IngredientSchema = new Schema({
  id: Number,
  amount: Number,
  unit: String,
  unitLong: String,
  unitShort: String,
  aisle: String,
  name: String,
  original: String,
  originalName: String,
  meta: [String],
  image: String,
});

const RecipeSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  image: String,
  imageType: String,
  usedIngredientCount: Number,
  missedIngredientCount: Number,
  missedIngredients: [IngredientSchema],
  usedIngredients: [IngredientSchema],
  unusedIngredients: [IngredientSchema],
  likes: Number,
});

export default mongoose.model<IRecipe>("Recipe", RecipeSchema);
