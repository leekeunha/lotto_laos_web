import { ServiceCenterService } from '../services/ServiceCenterService';
import { create } from 'zustand';
// import ServiceCenterClient from '../httpClient/fakeServiceCenterClient';
import FakeServiceCenterClient from '../httpClient/fakeServiceCenterClient';

export const useSearchStoreService = create(() => {
    const client = new FakeServiceCenterClient();
    const searchStoreService = new ServiceCenterService(client);
    return {
        searchStoreService,
    };
});
