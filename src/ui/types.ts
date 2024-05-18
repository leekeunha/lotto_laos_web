import { ReactNode } from 'react';

export type FormRowVerticalProps = {
    label?: string;
    error?: string;
    children: ReactNode;
};

export type NavItemProps = {
    label: string;
    to: string;
};
