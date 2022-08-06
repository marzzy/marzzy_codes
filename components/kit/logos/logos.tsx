/* eslint-disable @next/next/no-img-element */
import { colors } from 'theme';
import useStyles, { Logo } from './styles';
import { palleteTypes } from '../constants';

function Logos() {
  const { root } = useStyles();

  return (
    <div className={root}>
      {palleteTypes.map((palleteType) => (
        <Logo bg={colors[palleteType].main.primary} key="marzzy-codes">
          <img
            src={`/images/wireframe-mesh-polygonal-logo-${palleteType}.png`}
            alt={`marzzy-codes.logo-${palleteType}`}
          />
        </Logo>
      ))}
    </div>
  );
}

export default Logos;
