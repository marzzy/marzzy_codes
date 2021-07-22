import { ReactNode } from 'react';

export type SectionProps = {
    children: ReactNode
    bgColor?: string
    sectionTag?: 'section' | 'header' | 'footer'
    styledClass?: string,
    sectionId?: string,
    pageSectionIds: string[]
};

export type StylesProps = {
    bgColor: string
};
