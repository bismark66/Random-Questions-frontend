/** @format */

// const axios = require("axios").default;
import axios from "axios";
console.log(axios);

const instance = axios.create({
  base_url: "https://the-trivia-api.com/api/questions?limit=1&difficulty=easy",
  headers: { "content-type": "application/json" },
});
export default instance;
