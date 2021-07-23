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
}));

function Text(props: TextProps) {
  const {
    tagName: TagName, size, colorFromPallete, children, classStyles,
  } = props;
  const { textStyle } = useStyles({ size, colorFromPallete });

  return (
    <div>
      <TagName
        className={`${textStyle} ${classStyles}`}
      >
        {children}
      </TagName>
    </div>
  );
}

Text.defaultProps = {
  tagName: 'p',
  size: 16,
  colorFromPallete: 'main.secondary',
  classStyles: '',
};

export default Text;
