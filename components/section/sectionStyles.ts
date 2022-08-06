import { makeStyles } from '@material-ui/styles';
import ThemeType from 'types/theme';
import { colors } from 'theme';
import { StylesProps } from './type';

const useStyles = makeStyles((theme: ThemeType) => ({
  root: {
    backgroundColor: (
      { isSecondaryBg } : StylesProps,
    ) => (isSecondaryBg
      ? theme.palette.accents.primary : theme.palette.main.primary
    ),
    height: '100vh',
    overflow: 'hidden',
    paddingLeft: '30px',
    position: 'relative',
  },
  dot: {
    width: '0',
    height: '0',
    margin: '5px 10px',
    background: theme.palette.accents.tertiary,
    borderRadius: '100%',
    padding: '10px',
    color: 'transparent',
    transition: '0.25s',
    '&.active': {
      background: theme.palette.neutral.primary,
    },
    '&:hover': {
      background: theme.palette.neutral.primary,
    },
    zIndex: 3,
  },
  pagination: {
    position: 'absolute',
    left: 0,
    top: '50vh',
    display: 'flex',
    flexDirection: 'column',
  },
  toggleModeButton: {
    background: ({ mode } : StylesProps) => (
      mode === 'dark'
        ? colors.light.main.primary
        : colors.dark.main.primary
    ),
    color: ({ mode } : StylesProps) => (
      mode === 'dark'
        ? colors.light.main.secondary
        : colors.dark.main.secondary
    ),
    borderRadius: '100%',
    width: 0,
    height: 0,
    padding: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: ({ mode } : StylesProps) => (
      mode === 'dark'
        ? `1px double ${colors.light.main.secondary}`
        : `1px double ${colors.dark.main.secondary}`
    ),
    zIndex: 3,
    position: 'absolute',
    right: 25,
    top: 25,
    [theme.breakpoints.down('sm')]: {
      top: 10,
      right: 10,
    },
    transition: 'all 0.25s',
    '& > i': {
      fontSize: '30px',
    },
  },
}));

export default useStyles;
