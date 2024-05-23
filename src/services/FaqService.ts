import FakeFaqClient from '../httpClient/FakeFaqClient';

export class FaqService {
    private apiClient: FakeFaqClient;

    constructor(apiClient: FakeFaqClient) {
        this.apiClient = apiClient;
    }

    async search({ keyword, page }) {
        return this.apiClient.search({ keyword, page }).then((res) => {
            return res;
        });
    }
}
