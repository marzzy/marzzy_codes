import { ReactNode } from 'react';

export type ButtonProps = {
    children: ReactNode
    classStyles?: string,
    styleType?: 'primary' | 'secondary' | 'tertiary',
    disabled?: boolean
    buttonType?: 'button' | 'reset' | 'submit',
    fnSize?: number,
    to?: string
};

export type StylesProps = {
    disabled: boolean,
    fnSize: number
};
