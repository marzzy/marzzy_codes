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
    width: '950px',
    height: '70vh',
    backgroundImage: 'url("/images/marzzy-familytime.jpeg")',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    alignSelf: 'end',
    [theme.breakpoints.down('md')]: {
      height: '100vh',
      bottom: 0,
      position: 'absolute',
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  textContainer: {
    width: '95%',
    padding: '20px 30px',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      '& p': { fontSize: '20px', margin: '12px 0' },
      width: '100%',
      background: `${theme.palette.main.secondary}cc`,
      borderRadius: '0 0 0 20px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '20px 10px',
    },
    [theme.breakpoints.down('xs')]: {
      opacity: '100%',
    },
  },
}));

export default useStyles;
