import React, { useState } from 'react';
import {
    MobileNav,
    Typography,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from '@material-tailwind/react';
import { Square3Stack3DIcon } from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';

const resultNavListMenuItems = [
    {
        url: 'happy545',
        label: 'Happy5/45',
    },
    {
        url: 'jackpot-numbers',
        label: 'Jackpot numbers',
    },
    {
        url: 'prize-payment',
        label: 'Prize payment',
    },
    {
        url: 'draw-video',
        label: 'Draw video',
    },
    {
        url: 'winners-interview',
        label: "Winner's interview ",
    },
    {
        url: 'unclaimed-winnings',
        label: 'Unclaimed Winnings',
    },
];

const lotteryNavListMenuItems = [
    {
        url: 'happy545',
        label: 'Happy5/45',
    },
    {
        url: 'introduction',
        label: 'introduction',
    },
    {
        url: 'how-to-play',
        label: 'how-to-play',
    },
];

function getNavMenuItems(navListMenuItems) {
    return navListMenuItems.map(({ url, label }) => (
        <NavLink to={url} key={label}>
            <MenuItem>
                <Typography variant="small" color="gray" className="font-normal">
                    {label}
                </Typography>
            </MenuItem>
        </NavLink>
    ));
}

function NavListMenu() {
    const [isLotteryInfoOpen, setIsLotteryInfoOpen] = useState(false);
    const [isResultOpen, setIsResultOpen] = useState(false);
    const [isGiftGame, setIsGiftGame] = useState(false);
    const [isStore, setIsStore] = useState(false);
    const [isAboutDlpe, setIsAboutDlpe] = useState(false);
    const [isServiceCenter, setIsServiceCenter] = useState(false);

    const renderItems = getNavMenuItems(navListMenuItems);

    return (
        <>
            <Menu allowHover open={isLotteryInfoOpen} handler={setIsLotteryInfoOpen}>
                <MenuHandler>
                    <Typography as="a" href="#" variant="small" className="font-normal">
                        <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                            Lottery Information{' '}
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="">
                    <ul className="col-span-4 flex w-full flex-col gap-1">
                        {getNavMenuItems(lotteryNavListMenuItems)}
                    </ul>
                </MenuList>
            </Menu>
            <Menu allowHover open={isResultOpen} handler={setIsResultOpen}>
                <MenuHandler>
                    <Typography as="a" href="#" variant="small" className="font-normal">
                        <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                            Result{' '}
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="">
                    <ul className="col-span-4 flex w-full flex-col gap-1">
                        {getNavMenuItems(result)}
                    </ul>
                </MenuList>
            </Menu>
            <Menu allowHover open={isGiftGame} handler={setIsGiftGame}>
                <MenuHandler>
                    <Typography as="a" href="#" variant="small" className="font-normal">
                        <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                            Gift Game{' '}
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="">
                    <ul className="col-span-4 flex w-full flex-col gap-1">{renderItems}</ul>
                </MenuList>
            </Menu>
            <Menu allowHover open={isStore} handler={setIsStore}>
                <MenuHandler>
                    <Typography as="a" href="#" variant="small" className="font-normal">
                        <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                            Store{' '}
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="">
                    <ul className="col-span-4 flex w-full flex-col gap-1">{renderItems}</ul>
                </MenuList>
            </Menu>
            <Menu allowHover open={isAboutDlpe} handler={setIsAboutDlpe}>
                <MenuHandler>
                    <Typography as="a" href="#" variant="small" className="font-normal">
                        <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                            About DLPE{' '}
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="">
                    <ul className="col-span-4 flex w-full flex-col gap-1">{renderItems}</ul>
                </MenuList>
            </Menu>
            <Menu allowHover open={isServiceCenter} handler={setIsServiceCenter}>
                <MenuHandler>
                    <Typography as="a" href="#" variant="small" className="font-normal">
                        <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                            Service center{' '}
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="">
                    <ul className="col-span-4 flex w-full flex-col gap-1">{renderItems}</ul>
                </MenuList>
            </Menu>

            <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
                <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" /> Pages{' '}
            </MenuItem>
            <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">{renderItems}</ul>
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

    React.useEffect(() => {
        window.addEventListener('resize', () => window.innerWidth >= 960 && setIsNavOpen(false));
    }, []);

    return (
        <nav className="mx-auto max-w-screen-xl p-2 lg:pl-6">
            <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
                <div className="hidden lg:block">
                    <NavList />
                </div>
            </div>
            <MobileNav open={isNavOpen} className="overflow-scroll">
                <NavList />
            </MobileNav>
        </nav>
    );
}
// import NavItem from './NavItem';

// export default function MainNav() {
//     return (
//         <nav>
//             <ul className="mb-4 mt-4 flex flex-row items-center gap-8">
//                 <NavItem label="Lottery information" to="/lottery-information" />
//                 <NavItem label="Result" to="/result" />
//                 <NavItem label="Gift Game" to="/gift-game" />
//                 <NavItem label="Store" to="store" />
//                 <NavItem label="About DLPE" to="about-dlpe" />
//                 <NavItem label="Service center" to="service-center" />
//             </ul>
//         </nav>
//     );
// }
