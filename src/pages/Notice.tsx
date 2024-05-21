import { PencilIcon } from '@heroicons/react/24/solid';
import { ArrowDownTrayIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Input,
} from '@material-tailwind/react';

const TABLE_HEAD = ['No', 'Title', 'DATE'];

const TABLE_ROWS = [
    {
        no: '1',
        title: 'The 5/45 Lottery will be temporarily suspended from publication',
        date: '08/11/2022',
    },
    {
        no: '2',
        title: 'Lottery 5/45 Jackpot is open. After opening, there is a 2nd lucky winner who won the 1st prize worth 1. Temporarily sold',
        date: '04/11/2022',
    },
    {
        no: '3',
        title: 'Finally, the 5/45 lottery ticket, the jackpot is broken! The lucky ones will receive the 1st prize which is',
        date: '04/11/2022',
    },
    {
        no: '4',
        title: 'The second cumulative prize of the Happy 5/45 label is now worth up to: 1,339,024,750 kip',
        date: '04/11/2022',
    },
    {
        no: '5',
        title: '7 tips to get ready to get lucky on the day of the lottery',
        date: '04/11/2022',
    },
];

export default function NosTable() {
    return (
        <>
            <div>
                <Typography variant="h5" color="blue-gray">
                    Notice
                </Typography>
                {/* <Typography color="gray" className="mt-1 font-normal">
                    These are details about the last transactions
                </Typography> */}
            </div>
            <Card className="h-full w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-4 flex flex-col  gap-2 md:flex-row md:items-center justify-end">
                        <div className="flex w-full shrink-0 gap-2 md:w-max mt-1">
                            <div className="w-full md:w-72">
                                <Input
                                    label="Search"
                                    icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                                />
                            </div>
                            {/* <Button className="flex items-center gap-3" size="sm">
                                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
                            </Button> */}
                        </div>
                    </div>
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
                            {TABLE_ROWS.map(({ no, title, date }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

                                return (
                                    <tr key={no}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                {/* <Avatar
                                                        src={img}
                                                        alt={name}
                                                        size="md"
                                                        className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                                                    /> */}
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
