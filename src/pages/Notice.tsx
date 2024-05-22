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
import NoticeTable from '../features/serviceCenter/NoticeTable';

export default function Notice() {
    const { keyword } = useParams();

    return (
        <>
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
                    <NoticeTable keyword={keyword}></NoticeTable>
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
