import axios from 'axios';

export default class FakeNoticeClient {
    async search({ keyword, page }) {
        try {
            const response = await axios.get('/data/notice/search.json', {
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
