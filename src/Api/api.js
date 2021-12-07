import axios from "axios";

export default axios.create({
  baseURL: "https://ecscrapper.herokuapp.com/",
  responseType: "json",
});
