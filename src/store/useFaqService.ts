import { create } from 'zustand';

import FakeFaqClient from '../httpClient/FakeFaqClient';
import { FaqService } from '../services/FaqService';

export const useFaqService = create(() => {
    const client = new FakeFaqClient();

    const faqService = new FaqService(client);
    console.log('FaqService', faqService);
    return {
        faqService,
    };
});
