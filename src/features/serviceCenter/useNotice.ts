import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { useParams } from 'react-router-dom';
import { useServiceCenterService } from '../../store/useServiceCenterService';

export default function useNotice() {
    const { keyword } = useParams();
    const { serviceCenterService } = useServiceCenterService();

    const {
        isLoading,
        error,
        data: notices,
        
    } = useQuery({
        queryKey: ['notice', keyword],
        queryFn: () => serviceCenterService.search({ keyword }),
        staleTime: 1000 * 60 * 1,
    });

    return { isLoading, error, notices};
}
