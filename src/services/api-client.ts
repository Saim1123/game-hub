import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "85241bffb24248e3829d1c2f28b04440",
  },
});
