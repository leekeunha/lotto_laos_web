import React, { useState } from 'react';
import {
    Collapse,
    Typography,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const lotteryMenuItems = [
    {
        url: '',
        label: 'Happy5/45',
    },
    {
        url: 'lottery-information/introduction',
        label: 'Introduction',
    },
    {
        url: 'lottery-information/how-to-play',
        label: 'How to Play',
    },
];

const resultMenuItems = [
    {
        url: '',
        label: 'Happy5/45',
    },
    {
        url: 'result/jackpot-numbers',
        label: 'Jackpot Numbers',
    },
    {
        url: 'result/prize-payment',
        label: 'Prize Payment',
    },
    {
        url: 'result/draw-video',
        label: 'Draw Video',
    },
    {
        url: 'result/winners-interview',
        label: "Winner's Interview",
    },
    {
        url: 'result/unclaimed-winnings',
        label: 'Unclaimed Winnings',
    },
];

const giftGameMenuItems = [
    {
        url: 'gift-game/happy-ball-5m',
        label: 'Happy Ball 5m',
    },
    {
        url: 'gift-game/happy-ball-3m',
        label: 'Happy Ball 3m',
    },
    {
        url: 'gift-game/gold-digger',
        label: 'Gold Digger',
    },
    {
        url: 'gift-game/gift-ranking',
        label: 'Gift Ranking',
    },
    {
        url: 'gift-game/exchange-gift',
        label: 'Exchange Gift',
    },
];

const storeMenuItems = [
    {
        url: 'store/search-store',
        label: 'Search Store',
    },
];

const aboutDlpeMenuItems = [
    {
        url: 'about-dlpe/introduction',
        label: 'Introduction',
    },
    {
        url: 'about-dlpe/contact',
        label: 'Contact',
    },
];

const serviceCenterMenuItems = [
    {
        url: 'service-center/faq',
        label: 'FAQ',
    },
    {
        url: 'service-center/notice',
        label: 'Notice',
    },
    {
        url: 'service-center/terms-of-service',
        label: 'Terms of Service',
    },
];

function getNavMenuItems(navListMenuItems, disableFirstItem = false) {
    return navListMenuItems.map(({ url, label }, index) => {
        if (disableFirstItem && index === 0) {
            return (
                <MenuItem key={label} className="cursor-text">
                    <Typography variant="small" color="blue" className="font-normal">
                        {label}
                    </Typography>
                </MenuItem>
            );
        }
        if (label.toLowerCase() === 'contact') {
            return (
                <MenuItem key={label} onClick={() => window.open('mailto:support@dlpe.la')}>
                    <Typography variant="small" color="gray" className="font-normal">
                        {label}
                    </Typography>
                </MenuItem>
            );
        }
        return (
            <NavLink to={url} key={label}>
                <MenuItem>
                    <Typography variant="small" color="gray" className="font-normal">
                        {label}
                    </Typography>
                </MenuItem>
            </NavLink>
        );
    });
}

function NavListMenu() {
    const [isLotteryInfoOpen, setIsLotteryInfoOpen] = useState(false);
    const [isResultOpen, setIsResultOpen] = useState(false);
    const [isGiftGame, setIsGiftGame] = useState(false);
    const [isStore, setIsStore] = useState(false);
    const [isAboutDlpe, setIsAboutDlpe] = useState(false);
    const [isServiceCenter, setIsServiceCenter] = useState(false);

    return (
        <>
            <Menu allowHover open={isLotteryInfoOpen} handler={setIsLotteryInfoOpen}>
                <MenuHandler>
                    <Typography as="a" href="#" variant="small" className="font-normal">
                        <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                            Lottery Information
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="">
                    <ul className="col-span-4 flex w-full flex-col gap-1">
                        {getNavMenuItems(lotteryMenuItems, true)}
                    </ul>
                </MenuList>
            </Menu>
            <Menu allowHover open={isResultOpen} handler={setIsResultOpen}>
                <MenuHandler>
                    <Typography as="a" href="#" variant="small" className="font-normal">
                        <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                            Result
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="">
                    <ul className="col-span-4 flex w-full flex-col gap-1">
                        {getNavMenuItems(resultMenuItems, true)}
                    </ul>
                </MenuList>
            </Menu>
            <Menu allowHover open={isGiftGame} handler={setIsGiftGame}>
                <MenuHandler>
                    <Typography as="a" href="#" variant="small" className="font-normal">
                        <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                            Gift Game
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="">
                    <ul className="col-span-4 flex w-full flex-col gap-1">
                        {getNavMenuItems(giftGameMenuItems)}
                    </ul>
                </MenuList>
            </Menu>
            <Menu allowHover open={isStore} handler={setIsStore}>
                <MenuHandler>
                    <Typography as="a" href="#" variant="small" className="font-normal">
                        <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                            Store
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="">
                    <ul className="col-span-4 flex w-full flex-col gap-1">
                        {getNavMenuItems(storeMenuItems)}
                    </ul>
                </MenuList>
            </Menu>
            <Menu allowHover open={isAboutDlpe} handler={setIsAboutDlpe}>
                <MenuHandler>
                    <Typography as="a" href="#" variant="small" className="font-normal">
                        <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                            About DLPE
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="">
                    <ul className="col-span-4 flex w-full flex-col gap-1">
                        {getNavMenuItems(aboutDlpeMenuItems)}
                    </ul>
                </MenuList>
            </Menu>
            <Menu allowHover open={isServiceCenter} handler={setIsServiceCenter}>
                <MenuHandler>
                    <Typography as="a" href="#" variant="small" className="font-normal">
                        <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                            Service Center
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="">
                    <ul className="col-span-4 flex w-full flex-col gap-1">
                        {getNavMenuItems(serviceCenterMenuItems)}
                    </ul>
                </MenuList>
            </Menu>
        </>
    );
}

function NavList() {
    return (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            <NavListMenu />
        </ul>
    );
}

export default function MainNav() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    return (
        <nav className="mx-auto max-w-screen-xl p-2 lg:pl-6">
            <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
                <div className="hidden lg:block">
                    <NavList />
                </div>
            </div>
            <Collapse open={isNavOpen} className="overflow-scroll">
                <NavList />
            </Collapse>
        </nav>
    );
}
