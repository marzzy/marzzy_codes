import { ReactNode } from 'react';

export type SectionProps = {
    children: ReactNode
    bgColor?: string
    sectionTag?: 'section' | 'header' | 'footer'
};

export type StylesProps = {
    bgColor: string
};
