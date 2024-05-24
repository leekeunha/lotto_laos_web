import { Card, CardHeader, Typography, CardBody, CardFooter } from '@material-tailwind/react';

import Search from '../ui/Search';
import NoticeTable from '../features/serviceCenter/NoticeTable';

import Pagination from '../ui/Pagination';
import useNotice from '../features/serviceCenter/useNotice';

export default function Notice() {
    const { notices, isLoading, count, error } = useNotice();

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong 😖</p>}
            <section className="w-2/3 p-10">
                <div>
                    <Typography variant="h4" color="blue-gray">
                        Notice
                    </Typography>
                </div>
                <Card className="h-full w-full">
                    <CardHeader floated={false} shadow={false} className="rounded-none">
                        <Search searchPath="/service-center/notice"></Search>
                    </CardHeader>
                    <CardBody className="px-0">
                        <NoticeTable notices={notices}></NoticeTable>
                    </CardBody>
                    <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                        <Pagination count={count}></Pagination>
                    </CardFooter>
                </Card>
            </section>
        </>
    );
}
