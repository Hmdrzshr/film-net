import axios from "axios";

const api = axios.create({
   baseURL: "https://api.themoviedb.org/3/",
   // timeout: 5000,
   headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNThiZGY4MWIyZWMwZmM3NTQ1ZjE2YzljZmU1MjI5NyIsInN1YiI6IjY1ZGM0MzMwZDQ2NTM3MDE4OGQwMjNhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q00PXP4GvK3zQmVJ_-0sXBRXGcvWaTpz_0VPHX518ug`,
   },
});
export default api;
