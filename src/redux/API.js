import axios from 'axios';

const API_KEY = "ea2e6df03bmsh719dcc8dbc4cb05p1df835jsn2a90edaf791f"; 

export const searchMusic = async (query) => {
    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/search/',
        params: {
            q: query,
            type: 'track,artist', 
            offset: '0',
            limit: '10',
            numberOfTopResults: '5'
        },
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data; // N.B. It returns a json file by default because axios handles it.
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
};
