import React from 'react';
import { Typography } from '@material-tailwind/react';

export default function Happy545Introduction() {
    return (
        <div className="w-2/3 p-10">
            <Typography variant="h4" color="blue-gray" className="text-left mb-6">
                Introduction
            </Typography>

            <div className="mb-8">
                <Typography variant="h5" color="blue-gray" className="mb-4">
                    HAPPY5/45 is...
                </Typography>
                <div className="flex items-start mb-5">
                    <img
                        src="/images/lotteryInformation/computer.png"
                        alt="Online lottery"
                        className="mr-4 w-20"
                    />
                    <Typography color="blue-gray" className="text-sm">
                        Online lottery in which lottery tickets are issued and sold through a
                        terminal connected to a central computer center network.
                    </Typography>
                </div>
                <div className="flex items-start mb-5">
                    <img
                        src="/images/lotteryInformation/window.png"
                        alt="Automatic methods"
                        className="mr-4 w-20"
                    />
                    <Typography color="blue-gray" className="text-sm">
                        Automatic, semi-automatic and manual methods allow customers to choose and
                        purchase. Five out of 45 are randomly assigned.
                    </Typography>
                </div>
                <div className="flex items-start mb-12">
                    <img
                        src="/images/lotteryInformation/window.png"
                        alt="Lottery fund"
                        className="mr-4 w-20"
                    />
                    <Typography color="blue-gray" className="text-sm">
                        The lottery fund and the 1st prize will be determined according to the sales
                        volume.
                    </Typography>
                </div>
            </div>

            <div>
                <Typography variant="h5" color="blue-gray" className="mb-4">
                    Prize structure
                </Typography>
                <Typography color="blue-gray" className="text-sm mb-4">
                    1. Includes 4 prize classes and draws 01 times in each drawing period to choose
                    a winning number consisting of 5 numbers from numbers 01 to 45.
                </Typography>
                <Typography color="blue-gray" className="text-sm mb-4">
                    2. The specific award structure:
                </Typography>

                <table className="table-auto w-full text-left mb-4 bg-white border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border px-4 py-2 text-gray-800">Prize</th>
                            <th className="border px-4 py-2 text-gray-800">Result</th>
                            <th className="border px-4 py-2 text-gray-800">Prize value (KIP)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">First prize</td>
                            <td className="border px-4 py-2 text-red-600">OOOOO</td>
                            <td className="border px-4 py-2 text-red-600">
                                Minimum 1,250,000,000 Kip with cumulative on sales value
                            </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Second prize</td>
                            <td className="border px-4 py-2 text-red-600">OOOO</td>
                            <td className="border px-4 py-2">4,000,000 kip</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Third Prize</td>
                            <td className="border px-4 py-2 text-red-600">OOO</td>
                            <td className="border px-4 py-2">50,000 kip</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Fourth Prize</td>
                            <td className="border px-4 py-2 text-red-600">OO</td>
                            <td className="border px-4 py-2">5,000 kip</td>
                        </tr>
                    </tbody>
                </table>

                <div className="text-gray-700 text-sm mt-4">
                    <Typography color="blue-gray" className="text-sm">
                        - <span className="text-red-600">O</span> are the numbers that coincide with
                        the lottery results, not in order
                    </Typography>
                    <Typography color="blue-gray" className="text-sm">
                        - If there is no 1st prize winner, the winnings will be carried over to the
                        next round.
                    </Typography>
                    <Typography color="blue-gray" className="text-sm">
                        - In case the ticket of the winner wins many prize classes, the winner can
                        only receive the highest prize class.
                    </Typography>
                    <Typography color="blue-gray" className="text-sm">
                        - In case there are many winners of the first Prize, the first Prize will be
                        divided equally according to the proportion of the value of the winner's
                        participation.
                    </Typography>
                </div>
            </div>
        </div>
    );
}
