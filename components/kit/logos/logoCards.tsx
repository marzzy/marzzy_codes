import { siteMeta } from 'components/constants';
import useStyles from './styles';

const {
  logoLight, logoDark,
} = siteMeta;

function Logos() {
  const { root } = useStyles();

  return (
    <div className={root}>
      <img src={logoLight} alt="marzzy codes logo card light" />
      <img src={logoDark} alt="marzzy codes logo card dark" />
    </div>
  );
}

export default Logos;
