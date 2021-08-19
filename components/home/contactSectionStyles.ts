import { makeStyles } from '@material-ui/styles';
import ThemeType from 'types/theme';

const useStyles = makeStyles((theme: ThemeType) => ({
  root: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    padding: '0 !important',
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
    padding: '30px',
    zIndex: 1,
    width: '100%',
    background: `${theme.palette.main.primary}ee`,
    marginBottom: '200px',
    [theme.breakpoints.down('xs')]: {
      opacity: '100%',
    },
  },
  iconStyle: {
    fontSize: '70px',
  },
  headerStyle: { margin: '12px 0' },
  socialLinks: {
    color: theme.palette.main.tertiary,
    display: 'block',
    transition: 'all 1s',
    padding: '12px',
    '&:hover': {
      textDecoration: 'none',
      '&::after': {
        boxShadow: '0 0 7px 1px black',
        marginTop: '10px',
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      },
    },
    '&::after': {
      content: '""',
      display: 'block',
      width: '100%',
      boxShadow: '0 0 7px 1px transparent',
      transition: 'all 0.5s',
    },
  },
  socialWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'end',
    maxWidth: '800px',
    minHeight: '120px',
  },
}));

export default useStyles;
