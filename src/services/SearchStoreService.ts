import NoticeClient from '../httpClient/FakeNoticeClient';
import FakeSearchStoreClient from '../httpClient/FakeSearchStoreClient';

export class SearchStoreService {
    private apiClient: NoticeClient;

    constructor(apiClient: FakeSearchStoreClient) {
        this.apiClient = apiClient;
    }

    async search({ keyword, page }) {
        return this.apiClient.search({ keyword, page }).then((res) => {
            return res;
        });
    }
}
