import React, { useState } from 'react';
import { Typography, Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

import {
    aboutDlpeMenuItems,
    lotteryMenuItems,
    resultMenuItems,
    serviceCenterMenuItems,
    storeMenuItems,
} from '../utils/menuItem';

export default function NavListMenus() {
    const [isLotteryInfoOpen, setIsLotteryInfoOpen] = useState(false);
    const [isResultOpen, setIsResultOpen] = useState(false);
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
