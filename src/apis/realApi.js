import axios from "axios";

const API_KEY = "c10c292fd3c34e0a8d4c021c9510accf";
// c10c292fd3c34e0a8d4c021c9510accf
// 04b83f071a9d4647bf20953f65c978a8
// c47ce3a6346a4632a56235ad1785196d
// 16c4da048e314ffdbea96ce1661c3715
//  e47ee99cc9ce445881a5c64debe1e459
// d5ad91d7ed324f919646b13ef51f6715
export default axios.create({
  baseURL: "https://api.spoonacular.com",
  headers: { "Content-Type": "application/json" },
  params: {
    number: 6,
    apiKey: API_KEY,
    addRecipeInformation: true,
    fillIngredients: true,
    includeNutrition: true,
  },
});
