import axios from "axios";

// making the requies to the movie database
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});




export default instance;