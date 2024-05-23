import { create } from 'zustand';
import FakeSearchStoreClient from '../httpClient/FakeSearchStoreClient';
import { SearchStoreService } from '../services/SearchStoreService';

export const useSearchStoreService = create(() => {
    const client = new FakeSearchStoreClient();
    const searchStoreService = new SearchStoreService(client);
    return {
        searchStoreService,
    };
});
