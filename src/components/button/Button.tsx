import React from 'react';
import './Button.scss';
import { ButtonPropsInterface} from "./Button.types";

const buttonVariant = {
  'primary': 'primary__btn',
  'secondary': 'secondary__btn'
};

const Button:React.FC<ButtonPropsInterface> = (props) => {
  const { children, variant, ...rest } = props;

  return (
    <button className={buttonVariant[variant]} {...rest}>
      {children} {variant === "secondary" && <i id='arrow' className="fa-solid fa-right-long"></i> }
    </button>
  )
}

export default Button