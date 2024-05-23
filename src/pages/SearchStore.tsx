import { Card, CardHeader, Typography, CardBody, CardFooter } from '@material-tailwind/react';

import Search from '../ui/Search';
import NoticeTable from '../features/serviceCenter/NoticeTable';

import Pagination from '../ui/Pagination';
import useNotice from '../features/serviceCenter/useNotice';
import SearchStoreTable from '../features/store/SearchStoreTable';
import useSearchStore from '../features/store/useSearchStore';

export default function SearchStore() {
    // const { serviceCenterService } = useServiceCenterServiceStore();
    // const {} = useNotice();
    // const { notices, isLoading, count, error } = useNotice();
    const { stores, isLoading, count, error } = useSearchStore();

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong 😖</p>}
            <div className="w-full">
                <Typography variant="h5" color="blue-gray">
                    SearchStore
                </Typography>
            </div>
            <Card className="h-full w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <Search></Search>
                </CardHeader>
                <CardBody className="px-0">
                    <SearchStoreTable stores={stores}></SearchStoreTable>
                </CardBody>
                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Pagination count={count}></Pagination>
                </CardFooter>
            </Card>
        </>
    );
}
