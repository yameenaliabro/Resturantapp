import axios from "axios";
const dummyJson = axios.create({
  baseURL: "http://localhost:2000/",
});
export default dummyJson;