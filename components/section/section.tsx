import { makeStyles } from '@material-ui/styles';
import ThemeType from 'types/theme';
import { SectionProps, StylesProps } from './type';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: ThemeType) => ({
  root: {
    backgroundColor: (
      { isSecondaryBg } : StylesProps,
    ) => (isSecondaryBg
      ? theme.palette.main.secondary : theme.palette.main.primary
    ),
    height: '100vh',
    overflow: 'hidden',
    paddingLeft: '30px',
  },
  dot: {
    width: '0',
    height: '0',
    margin: '5px 10px',
    background: 'red',
    borderRadius: '100%',
    padding: '10px',
    color: 'transparent',
    transition: '0.25s',
    '&.active': {
      background: 'blue',
    },
    '&:hover': {
      background: 'green',
    },
  },
  pagination: {
    position: 'absolute',
    left: 0,
    top: '50vh',
    display: 'flex',
    flexDirection: 'column',
  },
}));

function Section(props: SectionProps) {
  const {
    children,
    isSecondaryBg,
    sectionTag: SectionTag,
    styledClass,
    sectionId,
    pageSectionIds,
  } = props;
  const { root, dot, pagination } = useStyles({ isSecondaryBg });

  return (
    <SectionTag className={`${root} ${styledClass}`} id={sectionId}>
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
