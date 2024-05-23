import axios from 'axios';

export default class FakeFaqClient {
    async search({ keyword, page }) {
        try {
            console.log('FakeFaqClient keyword', keyword);
            console.log('FakeFaqClient page', page);
            const response = await axios.get('/faq/search.json', {
                params: {
                    q: keyword,
                    page,
                },
            });
            console.log('Response data:', response.data); // 응답 데이터를 로그로 출력
            return response.data; // 응답 데이터를 반환
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // 오류 발생 시 예외를 던집니다.
        }
    }
}
