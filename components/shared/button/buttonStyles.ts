import { makeStyles } from '@material-ui/styles';
import ThemeType from 'types/theme';
import { StylesProps } from './type';

const useStyles = makeStyles((theme : ThemeType) => {
  const base = theme.palette.neutral;
  const base2 = theme.palette.accents;

  return {
    general: {
      border: '1px solid',
      borderColor: base.primary,
      transition: 'all 0.25s',
      borderRadius: '4px',
      padding: '10px',
      position: 'relative',
      fontSize: (({ fnSize }: StylesProps) => `${fnSize}px`),
      '&:hover': {
        cursor: (({ disabled } : StylesProps) => (disabled ? 'not-allowed' : 'pointer')),
        textDecoration: 'none',
      },
      '&:before': {
        content: (({ disabled } : StylesProps) => (disabled ? '""' : '')),
        width: '100%',
        height: '100%',
        display: 'block',
        background: '#00000052',
        position: 'absolute',
        right: 0,
        top: 0,
      },
    },
    primary: {
      background: base.primary,
      color: base.secondary,
      '&:hover': {
        background: (
          ({ disabled } : StylesProps) => (
            disabled ? base.primary : base.secondary
          )),
        color: (
          ({ disabled } : StylesProps) => (
            disabled ? base.secondary : base.primary
          )),
      },
    },
    secondary: {
      background: base.secondary,
      color: base.primary,
      '&:hover': {
        background: (
          ({ disabled } : StylesProps) => (
            disabled ? base.secondary : base.primary
          )),
        color: (
          ({ disabled } : StylesProps) => (
            disabled ? base.primary : base.secondary
          )),
      },
    },
    tertiary: {
      background: base2.primary,
      borderColor: base2.primary,
      color: base2.secondary,
      '&:hover': {
        background: (
          ({ disabled } : StylesProps) => (
            disabled ? base2.primary : base2.secondary
          )),
        color: (
          ({ disabled } : StylesProps) => (
            disabled ? base2.secondary : base2.primary
          )),
      },
    },
  };
});

export default useStyles;
