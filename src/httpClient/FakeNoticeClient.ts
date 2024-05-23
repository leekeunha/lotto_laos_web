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

            return response.data; // 응답 데이터를 반환
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // 오류 발생 시 예외를 던집니다.
        }
    }
}
