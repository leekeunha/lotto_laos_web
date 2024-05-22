import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    CardFooter,
    IconButton,
    Input,
} from '@material-tailwind/react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import { useServiceCenterServiceStore } from '../store/serviceCenterStore';
import Search from '../ui/Search';
import { useEffect } from 'react';

export default function Notice() {
    const { keyword } = useParams();
    const { serviceCenterService } = useServiceCenterServiceStore();

    // // serviceCenterService.search 함수가 올바르게 작동하는지 확인
    // serviceCenterService.search({ keyword }).then((data) => console.log('Search data:', data));

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
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {notices &&
                                notices.map(({ no, title, date }, index) => {
                                    const isLast = index === notices.length - 1;
                                    const classes = isLast
                                        ? 'p-4'
                                        : 'p-4 border-b border-blue-gray-50';

                                    return (
                                        <tr key={no}>
                                            <td className={classes}>
                                                <div className="flex items-center gap-3">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-bold"
                                                    >
                                                        {no}
                                                    </Typography>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {title}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {date}
                                                </Typography>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </CardBody>
                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <div className="flex items-center gap-2">
                        <IconButton variant="outlined" size="sm">
                            1
                        </IconButton>
                        <IconButton variant="text" size="sm">
                            2
                        </IconButton>
                        <IconButton variant="text" size="sm">
                            3
                        </IconButton>
                        <IconButton variant="text" size="sm">
                            ...
                        </IconButton>
                        <IconButton variant="text" size="sm">
                            8
                        </IconButton>
                        <IconButton variant="text" size="sm">
                            9
                        </IconButton>
                        <IconButton variant="text" size="sm">
                            10
                        </IconButton>
                    </div>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
}

const TABLE_HEAD = ['No', 'Title', 'DATE'];
