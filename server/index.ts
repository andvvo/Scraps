import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Recipe from "./models/Recipe";
import cors from "cors";
import axios from "axios";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in environment variables");
}

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected successfully");
});
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript Express!");
});

app.get("/api/recipes", async (req: Request, res: Response) => {
  const raw = (req.query.ingredients as string | undefined) || "";
  const ingredients = raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (ingredients.length === 0) {
    return res.status(400).json({ error: "No ingredients provided" });
  }

  try {
    const { data } = await axios.get(
      "https://api.spoonacular.com/recipes/findByIngredients",
      {
        params: {
          ingredients: ingredients.join(","),
          number: 1,
          apiKey: process.env.SPOONACULAR_API_KEY,
        },
      }
    );
    res.json(data);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(502).json({ error: "Upstream API failure" });
  }
});

app.get("/api/saved", async (req: Request, res: Response) => {
  try {
    const idString = req.query.id as string | undefined;
    const id = idString !== undefined ? parseInt(idString, 10) : -1;
    const recipes = await Recipe.find(id !== -1 ? { id: id } : {});
    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error getting bookmarked recipes:", error);
    res.status(500).json({ error: "Failed to get bookmarked recipes" });
  }
});

app.post("/api/saved", async (req: Request, res: Response) => {
  try {
    const recipe = req.body;
    const newRecipe = new Recipe(recipe);
    await newRecipe.save();
    res
      .status(201)
      .json({ message: "Recipe bookmarked successfully", id: recipe.id });
  } catch (error) {
    console.error("Error bookmarking recipe:", error);
    res.status(500).json({ error: "Failed to bookmarked recipe" });
  }
});

app.delete("/api/saved", async (req: Request, res: Response) => {
  try {
    const idString = req.query.id as string | undefined;
    const id = idString !== undefined ? parseInt(idString, 10) : -1;
    await Recipe.deleteOne({ id: id });
    res
      .status(204)
      .json({ message: "Recipe bookmark deleted successfully", id: id });
  } catch (error) {
    console.error("Error deleting bookmarked recipe:", error);
    res.status(500).json({ error: "Failed to delete bookmarked recipe" });
  }
});
