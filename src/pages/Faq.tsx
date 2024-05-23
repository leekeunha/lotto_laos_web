import { Card, CardHeader, Typography, CardBody, CardFooter } from '@material-tailwind/react';

import Search from '../ui/Search';
import NoticeTable from '../features/serviceCenter/NoticeTable';

import Pagination from '../ui/Pagination';
import useNotice from '../features/serviceCenter/useNotice';
import { DefaultAccordion, FaqAccodians } from '../features/serviceCenter/FaqAccodians';
import useFaq from '../features/serviceCenter/useFaq';

export default function Faq() {
    // const { data, isLoading, count, error } = useNotice();
    const { faqs, isLoading, count, error } = useFaq();

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong 😖</p>}
            <div className="w-full">
                <Typography variant="h5" color="blue-gray">
                    Faq
                </Typography>
            </div>
            <Card className="h-full w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <Search></Search>
                </CardHeader>
                <CardBody className="px-0">
                    <FaqAccodians items={faqs}></FaqAccodians>
                    {/* <NoticeTable notices={notices}></NoticeTable> */}
                </CardBody>
                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Pagination count={count}></Pagination>
                </CardFooter>
            </Card>
        </>
    );
}
