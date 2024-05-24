import { Typography } from '@material-tailwind/react';

export default function Footer() {
    return (
        <footer className="">
            <div className="flex justify-between">
                <div className="px-52">
                    <Typography variant="small">
                        Email &nbsp;
                        <a href="mailto:support@dlpe.la" className="text-blue-500">
                            support@dlpe.la
                        </a>
                    </Typography>
                    <Typography variant="small">
                        Address: Floor 5, Tha Luang Square Building
                    </Typography>
                    <Typography variant="small">
                        Tha Luang Du Village, Xaysetha District, Vientiane, Lao PDR
                    </Typography>
                    <Typography variant="small">Tel 021 515151</Typography>
                    <Typography variant="small">
                        DLPE Company Limited, All rights reserved
                    </Typography>
                </div>
                <div className="flex justify-end px-52">
                    <img className="h-12" src="/images/dlpe.png" alt="dlpe" />
                    <img className="h-12" src="/images/lao_lottery.png" alt="lao_lottery" />
                </div>
            </div>
        </footer>
    );
}
