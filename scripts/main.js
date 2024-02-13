const API_BASE_URL = "https://localhost:7134/";

const ENDPOINTS = {
    login: API_BASE_URL + "login/",
    refresh: API_BASE_URL + "refresh/",
    getAllReviews: API_BASE_URL + "api/Reviews/",
    getReview: API_BASE_URL + "api/Reviews/$",
    addReview: API_BASE_URL + "api/Reviews",
    editReview: API_BASE_URL + "api/Reviews/$",
    deleteReview: API_BASE_URL + "api/Reviews/$",
    
    addMovie: API_BASE_URL + "api/Videos",
    getMovie: API_BASE_URL + "api/Videos/$",
    getAllMovies: API_BASE_URL + "api/Videos",
    editMovie: API_BASE_URL + "api/Videos/$",
    deleteMovie: API_BASE_URL + "api/Videos/$",
}

