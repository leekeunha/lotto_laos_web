import React from 'react';
import { Typography } from '@material-tailwind/react';

export default function HowToPlay() {
    return (
        <div className="p-6 space-y-8">
            <Typography variant="h4" color="blue-gray" className="text-left mb-6">
                How to play
            </Typography>

            <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <img
                        src="/lotteryInformation/visit545.png"
                        alt="Visit the Happy 5/45 store"
                        className="w-16"
                    />
                    <div>
                        <Typography variant="h6" color="blue">
                            1. Visit the Happy 5/45 store.
                        </Typography>
                        <Typography variant="body2" color="blue-gray" className="text-sm">
                            - You can buy tickets at the point of sale with more than 1000 stores
                            nationwide.
                            <br />
                            - You can also buy tickets on your phone via mobile APP.
                            <br />
                            - Available on 365 days a year from 7 am to 10 pm
                            <br />- On lottery day (Monday and Thursday), sales closes at 8 pm.
                        </Typography>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <img
                        src="/lotteryInformation/select_number.png"
                        alt="Select number"
                        className="w-16"
                    />
                    <div>
                        <Typography variant="h6" color="blue">
                            2. Select number
                        </Typography>
                        <Typography variant="body2" color="blue-gray" className="text-sm">
                            - 5 games can be selected by one ship sheet. (5,000 kip per game)
                            <br />- You can ask the seller to proceed with automatic selection.
                        </Typography>
                        <img
                            src="/lotteryInformation/number_selection_method_lotto_paper.png"
                            alt="Select number example"
                            className="mt-4 w-2/3"
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <img
                        src="/lotteryInformation/number_selection_method.png"
                        alt="Number selection method"
                        className="w-16"
                    />
                    <div>
                        <Typography variant="h6" color="blue">
                            3. Number selection method
                        </Typography>
                        <Typography variant="body2" color="blue-gray" className="text-sm">
                            ① Manual selection: Select all 5 number out of 45 numbers manually.
                            <br />
                            ② Automatic selection: Automatically select 5 random numbers by marking
                            the “Auto selection” at the bottom of each games or by asking the seller
                            directly without slip paper.
                            <br />③ Semi-automatic selection: After selecting one or less than five
                            numbers out of 45 numbers, mark “Auto selection” and the remaining
                            number that is not selected will be automatically selected randomly.
                        </Typography>
                        <img
                            src="/lotteryInformation/number_selection_method_lotto_paper.png"
                            alt="Select number example"
                            className="mt-4 w-2/3"
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <img src="/lotteryInformation/purchase.png" alt="Purchase" className="w-16" />
                    <div>
                        <Typography variant="h6" color="blue">
                            4. Purchase
                        </Typography>
                        <Typography variant="body2" color="blue-gray" className="text-sm">
                            Submit a slip sheet with your number to the seller and pay cash to
                            purchase a ticket.
                            <br />
                            <br />
                            <b className="text-red-500">Note:</b>
                            <br />
                            - Being a person aged full 18 years or older
                            <br />- Participating currency and paying prizes: the currency used to
                            participate in prize and pay prizes in Lao Kip (LAK).
                        </Typography>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <img
                        src="/lotteryInformation/confirm_purchase.png"
                        alt="Confirm the purchase ticket"
                        className="w-16"
                    />
                    <div>
                        <Typography variant="h6" color="blue">
                            5. Confirm the purchase ticket
                        </Typography>
                        <Typography variant="body2" color="blue-gray" className="text-sm">
                            Be sure to check that the number on the purchased ticket matches the
                            number you have chosen.
                            <br />
                            <br />
                            <b className="text-red-500">Note:</b>
                            <br />
                            - Validly issued lottery tickets are non-refundable.
                            <br />- Ticket cannot be reissued if they are stolen, lost, contaminated
                            or damaged, so be careful with storage.
                        </Typography>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <img
                        src="/lotteryInformation/confirmation_wining.png"
                        alt="Confirmation of winning"
                        className="w-16"
                    />
                    <div>
                        <Typography variant="h6" color="blue">
                            6. Confirmation of winning
                        </Typography>
                        <Typography variant="body2" color="blue-gray" className="text-sm">
                            The winning number can be checked by watching the live lottery broadcast
                            or through the website and SNS after the lottery is finished.
                            <br />
                            <br />
                            <b className="text-red-500">Note:</b>
                            <br />
                            - Lottery tickets that cannot be recognized due to loss or damage to the
                            lottery ticket cannot be paid.
                            <br />- If the winner is a teenager (under 18 years of age), the prize
                            money cannot be paid.
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}
