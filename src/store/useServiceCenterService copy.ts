import { NoticeService } from '../services/NoticeService';
import { create } from 'zustand';
import FakeServiceCenterClient from '../httpClient/FakeNoticeClient';

export const useServiceCenterService = create(() => {
    const client = new FakeServiceCenterClient();
    const serviceCenterService = new NoticeService(client);
    return {
        serviceCenterService,
    };
});
