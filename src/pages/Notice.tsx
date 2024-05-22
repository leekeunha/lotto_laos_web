import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    CardFooter,
    IconButton,
} from '@material-tailwind/react';
import { useParams } from 'react-router-dom';
import Search from '../ui/Search';
import NoticeTable from '../features/serviceCenter/NoticeTable';
import { useServiceCenterServiceStore } from '../store/serviceCenterStore';
import { useQuery } from '@tanstack/react-query';
import Pagination from '../ui/Pagination';

export default function Notice() {
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
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong 😖</p>}
            <div className="w-full">
                <Typography variant="h5" color="blue-gray">
                    Notice
                </Typography>
            </div>
            <Card className="h-full w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <Search></Search>
                </CardHeader>
                <CardBody className="overflow-scroll px-0">
                    <NoticeTable notices={notices}></NoticeTable>
                </CardBody>
                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Pagination></Pagination>
                </CardFooter>
            </Card>
        </>
    );
}
