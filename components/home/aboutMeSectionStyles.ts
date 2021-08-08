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
    padding: '0 30px',
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      opacity: '80%',
      position: 'relative',
      '&:before': {
        content: 'attr(title)',
        position: 'absolute',
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        right: 0,
        background: `-webkit-radial-gradient(${theme.palette.main.secondary} 80%, transparent 100%)`,
        zIndex: -1,
      },
      '& p': {
        fontSize: '20px',
      },
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
    [theme.breakpoints.down('xs')]: {
      opacity: '100%',
    },
  },
}));

export default useStyles;
