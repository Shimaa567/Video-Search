import axios from "axios";

const KEY = "AIzaSyCpdRtmqtGl_uMt121UWFCGmUWmmPmXmmU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 8,
    key: KEY,
  },
});
