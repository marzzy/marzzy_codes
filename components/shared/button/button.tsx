import { ButtonProps } from './type';
import useStyles from './buttonStyles';

function Button(props: ButtonProps) {
  const {
    children, classStyles, styleType, buttonType, disabled, fnSize,
  } = props;
  const style = useStyles({ disabled, fnSize });

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={buttonType}
      className={`
        ${classStyles}
        ${style[styleType]}
        ${style.general}
      `}
      disabled
      style-type={styleType}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  styleType: 'primary',
  classStyles: '',
  buttonType: 'button',
  disabled: false,
  fnSize: 16,
};

export default Button;
