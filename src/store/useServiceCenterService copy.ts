import { ServiceCenterService } from '../services/ServiceCenterService';
import { create } from 'zustand';
// import ServiceCenterClient from '../httpClient/fakeServiceCenterClient';
import FakeServiceCenterClient from '../httpClient/fakeServiceCenterClient';

export const useServiceCenterService = create(() => {
    const client = new FakeServiceCenterClient();
    const serviceCenterService = new ServiceCenterService(client);
    return {
        serviceCenterService,
    };
});
