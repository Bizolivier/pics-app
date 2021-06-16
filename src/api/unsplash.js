import axios from 'axios';

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers: {
        Authorization:
         "Client-ID -isXk2rdVDd1Kfxxj-AqdpOBPu0AqZFpL4z-qRbMP_4"
      }
});