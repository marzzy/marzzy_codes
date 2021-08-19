import { ReactNode } from 'react';

export type SectionProps = {
    children: ReactNode
    isSecondaryBg?: boolean
    sectionTag?: 'section' | 'header' | 'footer'
    styledClass?: string,
    sectionId?: string,
    pageSectionIds: string[]
};

export type StylesProps = {
    isSecondaryBg: boolean,
    mode: 'dark' | 'light'
};
