import NoticeClient from '../httpClient/FakeNoticeClient';

export class NoticeService {
    private apiClient: NoticeClient;

    constructor(apiClient: NoticeClient) {
        this.apiClient = apiClient;
    }

    async search({ keyword, page }) {
        return this.apiClient.search({ keyword, page }).then((res) => {
            console.log('res', res);
            return res;
        });
    }
}
