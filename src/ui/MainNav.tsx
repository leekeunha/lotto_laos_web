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
import NavList from './NavList';

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
