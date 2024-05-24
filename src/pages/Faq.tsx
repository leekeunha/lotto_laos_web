import { Card, CardHeader, Typography, CardBody, CardFooter } from '@material-tailwind/react';
import Search from '../ui/Search';
import Pagination from '../ui/Pagination';
import { FaqAccodians } from '../features/serviceCenter/FaqAccodians';
import useFaq from '../features/serviceCenter/useFaq';

export default function Faq() {
    const { faqs, isLoading, count, error } = useFaq();

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong 😖</p>}
            <section className="w-2/3 p-10">
                <Typography variant="h4" color="blue-gray">
                    Faq
                </Typography>
                <Card className="h-full w-full p-5">
                    <CardHeader floated={false} shadow={false} className="rounded-none">
                        <Search searchPath="/service-center/faq"></Search>
                    </CardHeader>
                    <CardBody className="px-0">
                        <FaqAccodians items={faqs}></FaqAccodians>
                    </CardBody>
                    <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                        <Pagination count={count}></Pagination>
                    </CardFooter>
                </Card>
            </section>
        </>
    );
}
