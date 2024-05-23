import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams, useSearchParams } from 'react-router-dom';

import { PAGE_SIZE } from '../../constants';
import { FaqResponse, NoticeResponse } from '../types';
import { useFaqService } from '../../store/useFaqService';
// import { useServiceCenterService } from '../../store/useServiceCenterService copy';

export default function useFaq() {
    const { keyword } = useParams();

    const { faqService } = useFaqService();
    const queryClient = useQueryClient();
    const [searchParams] = useSearchParams();
    const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

    console.log('useNotice page:', page);
    const {
        isLoading,
        error,
        data: faqResponse,
    } = useQuery<FaqResponse>({
        queryFn: () => faqService.search({ keyword, page }),
        queryKey: ['faq', keyword, page],
    });
    console.log('faqResponse', faqResponse);
    const faqs = faqResponse?.items || [];
    const count = faqResponse?.pageInfo.totalResults || 0;

    console.log('faq:', faqs);
    console.log('count:', count);

    //PRE FETCH
    const pageCount = Math.ceil(count / PAGE_SIZE);
    console.log('pageCount:', pageCount);
    if (page < pageCount)
        queryClient.prefetchQuery({
            queryKey: ['faq', keyword, page + 1],
            queryFn: () => faqService.search({ keyword, page: page + 1 }),
        });

    if (page > 1)
        queryClient.prefetchQuery({
            queryKey: ['faq', keyword, page - 1],
            queryFn: () => faqService.search({ keyword, page: page - 1 }),
        });

    return { isLoading, error, faqs, count };
}
