import { makeStyles } from '@material-ui/styles';
import ThemeType from 'types/theme';
import { TextProps, StylesProps } from './type';

const useStyles = makeStyles((theme : ThemeType) => ({
  textStyle: {
    fontSize: ({ size }: StylesProps) => `${size}px`,
    color: ({ colorFromPallete } : StylesProps) => {
      const [firstItem, secoundItem] = colorFromPallete.split('.');

      return theme.palette[firstItem][secoundItem];
    },
  },
  verticalCentrize: {
    display: 'flex',
    alignItems: 'center',
  },
}));

function Text(props: TextProps) {
  const {
    tagName: TagName, size, colorFromPallete, children, classStyles, verticallyCenterilize,
  } = props;
  const { textStyle, verticalCentrize } = useStyles({ size, colorFromPallete });

  return (
    <TagName
      className={`
        ${textStyle}
        ${classStyles} 
        ${verticallyCenterilize ? verticalCentrize : ''}
      `}
    >
      {children}
    </TagName>
  );
}

Text.defaultProps = {
  tagName: 'p',
  size: 16,
  colorFromPallete: 'main.secondary',
  classStyles: '',
  verticallyCenterilize: false,
};

export default Text;
