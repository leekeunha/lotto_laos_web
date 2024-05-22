import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useServiceCenterServiceStore } from '../../store/serviceCenterStore';
import { useParams } from 'react-router-dom';

    export default function useNotice() {
    const { keyword } = useParams();
    const { serviceCenterService } = useServiceCenterServiceStore();

    const {
        isLoading,
        error,
        data: notices,
    } = useQuery({
        queryKey: ['notice', keyword],
        queryFn: () => serviceCenterService.search({ keyword }),
        staleTime: 1000 * 60 * 1,
    });
    
    return (
        <div>
            
        </div>
    );
}

