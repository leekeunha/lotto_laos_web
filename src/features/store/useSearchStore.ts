import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams, useSearchParams } from 'react-router-dom';
import { useSearchStoreService } from '../../store/useSearchStoreService';
import { PAGE_SIZE } from '../../constants';
import { SearchStoreResponse } from '../types';

export default function useSearchStore() {
    const { keyword } = useParams();

    const { searchStoreService } = useSearchStoreService();
    const queryClient = useQueryClient();
    const [searchParams] = useSearchParams();
    const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

    const {
        isLoading,
        error,
        data: searhStoreResponse,
    } = useQuery<SearchStoreResponse>({
        queryFn: () => searchStoreService.search({ keyword, page }),
        queryKey: ['searhStore', keyword, page],
    });
    console.log('searhStoreResponse', searhStoreResponse);
    const stores = searhStoreResponse?.items || [];
    const count = searhStoreResponse?.pageInfo.totalResults || 0;

    console.log('stores:', stores);
    console.log('count:', count);

    //PRE FETCH
    const pageCount = Math.ceil(count / PAGE_SIZE);
    console.log('pageCount:', pageCount);
    if (page < pageCount)
        queryClient.prefetchQuery({
            queryKey: ['searhStore', keyword, page + 1],
            queryFn: () => searchStoreService.search({ keyword, page: page + 1 }),
        });

    if (page > 1)
        queryClient.prefetchQuery({
            queryKey: ['searhStore', keyword, page - 1],
            queryFn: () => searchStoreService.search({ keyword, page: page - 1 }),
        });

    return { isLoading, error, stores, count };
}
