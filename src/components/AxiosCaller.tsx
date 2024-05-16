import axios from "axios";

// reusable axios instance to avoid repetitive axios calls
const instance = axios.create({

    baseURL: 'http://localhost:8080',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
});
    
export default instance;