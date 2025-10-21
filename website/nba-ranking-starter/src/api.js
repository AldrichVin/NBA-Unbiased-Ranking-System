import axios from "axios";

const API = axios.create({
  baseURL: "https://nba-api-676506759975.australia-southeast1.run.app/", // fixed plumber API
});

export default API;
