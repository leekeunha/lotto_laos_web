import { create } from 'zustand';

import { SearchStoreService } from '../services/SearchStoreService';
import FakeSearchStoreClient from '../httpClient/FakeSearchStoreClient';

export const useSearchStoreService = create(() => {
    const client = new FakeSearchStoreClient();
    const searchStoreService = new SearchStoreService(client);
    return {
        searchStoreService,
    };
});
