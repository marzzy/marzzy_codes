import { useContext } from 'react';
import Mode from 'context/theme';
import { SectionProps } from './type';
import useStyles from './sectionStyles';

function Section(props: SectionProps) {
  const {
    children,
    isSecondaryBg,
    sectionTag: SectionTag,
    styledClass,
    sectionId,
    pageSectionIds,
  } = props;
  const { toggleMode, mode } = useContext(Mode);
  const {
    root, dot, pagination, toggleModeButton,
  } = useStyles({ isSecondaryBg, mode });

  return (
    <SectionTag className={`${root} ${styledClass}`} id={sectionId}>
      <button type="button" onClick={toggleMode} className={toggleModeButton}>
        <i className={`i-${mode === 'light' ? 'moon' : 'sun'}`} />
      </button>
      {children}
      <div className={pagination}>
        {pageSectionIds.map((theSection) => (
          <a
            href={`#${theSection}`}
            key={theSection}
            className={`${dot} ${sectionId === theSection ? 'active' : ''}`}
          >
            .
          </a>
        ))}
      </div>
    </SectionTag>
  );
}

Section.defaultProps = {
  isSecondaryBg: false,
  sectionTag: 'section',
  styledClass: '',
  sectionId: '',
};

export default Section;
