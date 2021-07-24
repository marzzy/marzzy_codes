import { makeStyles } from '@material-ui/styles';
import ThemeType from 'types/theme';

const useStyles = makeStyles((theme: ThemeType) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  imgContainer: {
    width: '500px',
    height: '70vh',
    background: '#8e8e8e',
    alignSelf: 'end',
    [theme.breakpoints.down('md')]: {
      bottom: 0,
      position: 'absolute',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  textContainer: {
    width: '95%',
    padding: '0 30px',
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      padding: 0,
      '& p': {
        fontSize: '20px',
      },
    },
  },
}));

export default useStyles;
