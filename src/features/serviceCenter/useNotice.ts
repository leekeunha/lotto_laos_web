import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams, useSearchParams } from 'react-router-dom';

import { PAGE_SIZE } from '../../constants';
import { NoticeResponse } from '../types';
import { useServiceCenterService } from '../../store/useServiceCenterService copy';

export default function useNotice() {
    const { keyword } = useParams();

    const { serviceCenterService } = useServiceCenterService();
    const queryClient = useQueryClient();
    const [searchParams] = useSearchParams();
    const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

    console.log('useNotice page:', page);
    const {
        isLoading,
        error,
        data: noticesResponse,
    } = useQuery<NoticeResponse>({
        queryFn: () => serviceCenterService.search({ keyword, page }),
        queryKey: ['notice', keyword, page],
    });
    console.log('noticesResponse', noticesResponse);
    const notices = noticesResponse?.items || [];
    const count = noticesResponse?.pageInfo.totalResults || 0;

    console.log('notices:', notices);
    console.log('count:', count);

    //PRE FETCH
    const pageCount = Math.ceil(count / PAGE_SIZE);
    console.log('pageCount:', pageCount);
    if (page < pageCount)
        queryClient.prefetchQuery({
            queryKey: ['notice', keyword, page + 1],
            queryFn: () => serviceCenterService.search({ keyword, page: page + 1 }),
        });

    if (page > 1)
        queryClient.prefetchQuery({
            queryKey: ['notice', keyword, page - 1],
            queryFn: () => serviceCenterService.search({ keyword, page: page - 1 }),
        });

    return { isLoading, error, notices, count };
}
