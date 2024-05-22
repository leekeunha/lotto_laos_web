import axios from 'axios';

export default class FakeServiceCenterClient {
    async search({ keyword }) {
        try {
            const response = await axios.get('/notice/search.json', {
                params: {
                    q: keyword,
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
