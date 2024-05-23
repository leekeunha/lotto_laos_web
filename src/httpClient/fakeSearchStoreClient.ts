import axios from 'axios';

export default class FakeSearchStoreClient {
    async search({ keyword, page }) {
        try {
            const response = await axios.get('/data/store/search.json', {
                params: {
                    q: keyword,
                    page,
                },
            });

            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}
