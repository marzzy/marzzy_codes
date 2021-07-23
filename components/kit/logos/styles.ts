import { makeStyles, styled } from '@material-ui/styles';

export const Logo = styled('div')({
  width: 'max-content',
  background: (props: {bg : string}) => props.bg,
});

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
});

export default useStyles;
