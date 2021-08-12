import { makeStyles } from '@material-ui/styles';
import ThemeType from 'types/theme';

const useStyles = makeStyles((theme: ThemeType) => ({
  root: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    padding: 0,
  },
  imgContainer: {
    backgroundImage: 'url("/images/marzzy-codes.jpg")',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    alignSelf: 'end',
    height: '100vh',
    bottom: 0,
    position: 'absolute',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  textContainer: {
    padding: '20px 30px',
    zIndex: 1,
    width: '100%',
    background: `${theme.palette.main.primary}ee`,
    borderRadius: '20px 0 0 20px',
    marginBottom: '200px',
    '& p': { margin: '12px 0' },
    marginLeft: '40px',
    [theme.breakpoints.down('sm')]: {
      padding: '20px 10px',
    },
    [theme.breakpoints.down('xs')]: {
      opacity: '100%',
    },
  },
}));

export default useStyles;
