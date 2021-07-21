import { makeStyles } from '@material-ui/styles';
import ThemeType from 'types/theme';
import { SectionProps, StylesProps } from './type';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: ThemeType) => {
  console.log('hi', theme.palette);
  return {
    root: {
      backgroundColor: ({ bgColor } : StylesProps) => bgColor || 'green',
      height: '100vh',
      overflow: 'hidden',
    },
  };
});

function Section(props: SectionProps) {
  const { children, bgColor, sectionTag: SectionTag } = props;
  const { root } = useStyles({ bgColor });

  return (
    <SectionTag className={root}>
      {children}
    </SectionTag>
  );
}

Section.defaultProps = {
  bgColor: 'blue',
  sectionTag: 'section',
};

export default Section;
