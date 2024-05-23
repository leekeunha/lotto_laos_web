import { Typography } from '@material-tailwind/react';

export default function Footer() {
    return (
        <footer className="">
            <div className="flex justify-between">
                <div>
                    <Typography variant="small">
                        Email <a href="https://material-tailwind.com/">support@dlpe.la</a>
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
                <img className="h-12" src="/images/logo.png" alt="Logo" />
            </div>
        </footer>
    );
}
