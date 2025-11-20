import express, { Request, Response } from "express";
// import mongoose from "mongoose";
import cors from "cors";
import axios from "axios";
import "dotenv/config";

const app = express();
app.use(cors());
const PORT = process.env.PORT;

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
