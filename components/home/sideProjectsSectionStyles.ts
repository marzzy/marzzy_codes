import { makeStyles, styled } from '@material-ui/styles';
import ThemeType from 'types/theme';

const useStyles = makeStyles((theme: ThemeType) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  contentcContainer: {
    display: 'flex',
    height: '90vh',
  },
  descriptionContainer: {
    width: '150px',
    alignSelf: 'end',
    marginBottom: '100px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  liContainer: {
    width: '95%',
    padding: '0 30px',
    display: 'flex',
    listStyle: 'none',
    [theme.breakpoints.down('md')]: {
      padding: 0,
      '& p': {
        fontSize: '20px',
      },
    },
  },
  header: {
    width: '100%',
    height: '10vh',
  },
  liStyle: {
    background: 'red',
  },
}));

export const Li = styled('li')({
  // background: ({ imgSrc }) => `url("${imgSrc}")`,
});

export default useStyles;
