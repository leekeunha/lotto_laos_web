import { ReactNode } from 'react';

export interface FormRowVerticalProps {
    label?: string;
    error?: string;
    children: ReactNode;
}

export interface NavItemProps {
    label: string;
    to: string;
}
