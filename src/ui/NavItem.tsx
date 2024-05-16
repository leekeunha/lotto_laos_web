import { Typography } from '@material-tailwind/react';
import { NavItemProps } from './interface';
import { NavLink } from 'react-router-dom';

export default function NavItem({ label, to }: NavItemProps) {
    return (
        <li>
            <NavLink to={to}>
                <Typography as="span" color="blue-gray" className="p-1 font-medium">
                    {label}
                </Typography>
            </NavLink>
        </li>
    );
}
