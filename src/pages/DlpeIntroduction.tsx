import { Typography } from '@material-tailwind/react';

export default function DlpeIntroduction() {
    return (
        <div className="w-full p-6 font-sans">
            <div className="w-2/3 mt-10 mx-auto">
                <Typography variant="h4" color="blue-gray" className="text-left mb-6">
                    Introduction
                </Typography>
                <img
                    src="/introduction_dlpe.png"
                    alt="introduction_dlpe"
                    className="my-10 mx-auto"
                />
                <Typography variant="h5" color="blue-gray">
                    DLPE
                </Typography>
                <hr className="w-12 border-t-4 border-red-500 mt-2 mb-4" />
                <Typography color="blue-gray" className="text-sm mt-4">
                    DLPE is a company established in September 2021 through a joint investment
                    between Lao Lottery Committee and Laototo in order for the Lao government to
                    prepare a development fund for national development and introduce a transparent
                    lottery operation system.
                </Typography>
                <Typography variant="h5" color="blue-gray" className="mt-10">
                    Mission
                </Typography>
                <hr className="w-12 border-t-4 border-red-500 mt-2 mb-4" />
                <Typography color="blue-gray" className="text-sm italic">
                    “Make a better society with DLPE”
                </Typography>
                <Typography color="blue-gray" className="text-sm mt-4">
                    - Lao Household support <br />
                    - Re-skill or retraining of Lao workers <br />
                    - Local Government Welfare Programs <br />- Supporting children, pregnant women,
                    elderly, and people with disabilities
                </Typography>
                <Typography variant="h5" color="blue-gray" className="mt-10">
                    History
                </Typography>
                <hr className="w-12 border-t-4 border-red-500 mt-2 mb-4" />
                <Typography color="blue-gray" className="text-sm mt-4">
                    <span className="font-bold">2020.09.02.</span> <br />
                    Laototo acquires Lottery Business License Approval from the Lao Government
                    (Ministry of Finance)
                </Typography>
                <Typography color="blue-gray" className="text-sm mt-4">
                    <span className="font-bold">2021.03.17.</span> <br />
                    Laototo signed a joint venture business contract with the Lao government
                    (Ministry of Finance)
                </Typography>
                <Typography color="blue-gray" className="text-sm mt-4">
                    <span className="font-bold">2021.07.12.</span> <br />
                    Laototo acquires overseas investment approval from the Lao government (Ministry
                    of Investment Planning)
                </Typography>
                <Typography color="blue-gray" className="text-sm mt-4">
                    <span className="font-bold">2021.09.10.</span> <br />
                    Lao Lottery Commission and Laototo joint venture DLPE established (Modern
                    Development Lottery 5/45 Partnership Enterprise Limited)
                </Typography>
                <Typography color="blue-gray" className="text-sm mt-4">
                    <span className="font-bold">2021.12.13.</span> <br />
                    DLPE starts issuing Happy 5/45 lottery tickets
                </Typography>
            </div>
        </div>
    );
}
