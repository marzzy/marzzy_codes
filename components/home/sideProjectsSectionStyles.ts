import { makeStyles, styled } from '@material-ui/styles';
import ThemeType from 'types/theme';
import { LiProps } from './type';

const useStyles = makeStyles((theme: ThemeType) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  contentcContainer: {
    display: 'flex',
    height: '80vh',
    [theme.breakpoints.down('sm')]: {
      height: '70vh',
    },
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
    padding: 0,
    margin: 0,
    display: 'flex',
    listStyle: 'none',
    overflowX: 'auto',
    flexWrap: 'nowrap',
    [theme.breakpoints.down('md')]: {
      '& p': {
        fontSize: '20px',
      },
    },
  },
  header: {
    width: '100%',
    height: '20vh',
    [theme.breakpoints.down('sm')]: {
      height: '30vh',
    },
  },
}));

export const Li = styled('li')({
  backgroundImage: ({ imgSrc }: LiProps) => `url("${imgSrc}")`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: 'calc(100% / 3)',
  padding: '12px',
  minWidth: '300px',
});

export default useStyles;
