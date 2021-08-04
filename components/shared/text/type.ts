import { ReactNode } from 'react';

export type TextProps = {
    children: ReactNode
    colorFromPallete?: string
    size?: number,
    tagName?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4'| 'h5' | 'h6',
    classStyles?: string,
    verticallyCenterilize: boolean
};

export type StylesProps = {
    colorFromPallete: string
    size: number
};
