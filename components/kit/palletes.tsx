import { colors } from 'theme';
import useStyles, { Circle } from './styles';
import { circlesInfo } from './constants';

function Palletes() {
  const styles = useStyles();
  const {
    generalCir, cirContainer, palleteContainer, root,
  } = styles;

  return (
    <div className={root}>
      {['light', 'dark'].map((themeType) => (
        <div key={themeType} className={palleteContainer}>
          <h2>{themeType}</h2>
          <ul className={cirContainer}>
            {circlesInfo.map((cirInfo) => {
              const { name, size } = cirInfo;
              const cirClassName = `${size}Cir`;

              return (
                <Circle
                  className={`${generalCir} ${styles[cirClassName]}`}
                  cirColors={colors[themeType][name]}
                >
                  <h3>
                    {name}
                  </h3>
                  <h4>
                    sub
                  </h4>
                </Circle>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Palletes;
