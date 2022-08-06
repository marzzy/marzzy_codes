import { colors } from 'theme';
import useStyles, { Circle } from './styles';
import { circlesInfo, palleteTypes } from './constants';

function Palletes() {
  const styles = useStyles();
  const {
    generalCir, cirContainer, palleteContainer, root,
  } = styles;

  return (
    <div className={root}>
      {palleteTypes.map((themeType) => (
        <div key={themeType} className={palleteContainer}>
          <h3>{themeType}</h3>
          <ul className={cirContainer}>
            {circlesInfo.map((cirInfo) => {
              const { name, size } = cirInfo;
              const cirClassName = `${size}Cir`;

              return (
                <Circle
                  key={name}
                  className={`${generalCir} ${styles[cirClassName]}`}
                  circolors={colors[themeType][name]}
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
