import { Card, CardHeader, Typography, CardBody, CardFooter } from '@material-tailwind/react';
import Search from '../ui/Search';
import Pagination from '../ui/Pagination';
import SearchStoreTable from '../features/store/SearchStoreTable';
import useSearchStore from '../features/store/useSearchStore';

export default function SearchStore() {
    const { stores, isLoading, count, error } = useSearchStore();
    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong 😖</p>}
            <div className="p-10">
                <Typography variant="h4" color="blue-gray">
                    SearchStore
                </Typography>
                <Card className="h-full w-full">
                    <CardHeader floated={false} shadow={false} className="rounded-none">
                        <Search searchPath="/store/search-store"></Search>
                    </CardHeader>
                    <CardBody className="px-0">
                        <SearchStoreTable stores={stores}></SearchStoreTable>
                    </CardBody>
                    <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                        <Pagination count={count}></Pagination>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}
