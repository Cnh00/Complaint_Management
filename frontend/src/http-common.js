import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/esm projet/api",
  headers: {
    "Content-type": "application/json"
  }
});
