import { makeStyles, styled } from '@material-ui/styles';
import { StylesProps } from './type';

export const Circle = styled('li')({
  background: ({ circolors }: StylesProps) => circolors.primary,
  '& > h3': {
    color: ({ circolors }: StylesProps) => circolors.secondary,
  },
  '& > h4': {
    color: ({ circolors }: StylesProps) => circolors.tertiary,
  },
});

const useStyles = makeStyles({
  lgCir: {
    width: '250px',
    height: '250px',
  },
  mdCir: {
    width: '150px',
    height: '150px',
    position: 'absolute',
    top: '-30px',
    right: '-45px',
  },
  smCir: {
    width: '100px',
    height: '100px',
    position: 'absolute',
    bottom: '-20px',
    left: '40px',
  },
  generalCir: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: '100%',
  },
  cirContainer: {
    position: 'relative',
    width: 'max-content',
  },
  palleteContainer: {
    width: '50%',
    padding: '30px',
  },
  root: {
    display: 'flex',
  },
});

export default useStyles;
