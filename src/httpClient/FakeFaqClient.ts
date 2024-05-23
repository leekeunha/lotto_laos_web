import axios from 'axios';

export default class FakeFaqClient {
    async search({ keyword, page }) {
        try {
            const response = await axios.get('/data/faq/search.json', {
                params: {
                    q: keyword,
                    page,
                },
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
