import { makeStyles } from '@material-ui/styles';
import ThemeType from 'types/theme';

const useStyles = makeStyles((theme: ThemeType) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    '&::before': {
      backgroundImage: "url('images/wireframe-polygonal-mesh-bg-01.png')",
      transform: 'rotate(180deg)',
      height: '100vh',
      display: 'block',
      width: '100%',
      content: '""',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      position: 'absolute',
      top: '-45vh',
      left: 0,
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
  },
  infoContainer: {
    flexGrow: 2,
    minWidth: '400px',
    padding: '0 30px',
  },
  heroImgContainer: {
    alignSelf: 'start',
    [theme.breakpoints.down('md')]: {
      alignSelf: 'center',
    },
  },
}));

export default useStyles;
