import {
    Typography,
    Button,
    CardBody,
    CardFooter,
    IconButton,
    Input,
} from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import { useServiceCenterServiceStore } from '../../store/serviceCenterStore';

export default function NoticeTable({ keyword }) {
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
            <CardBody className="overflow-scroll px-0">
                <table className="w-full min-w-max table-auto text-left">
                    {/* <thead>
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
                    </thead> */}
                    <tbody>
                        {notices &&
                            notices.map(({ no, title, date }, index) => {
                                const isLast = index === notices.length - 1;
                                const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

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
        </>
    );
}
