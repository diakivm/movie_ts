import React, {FC} from 'react';
import './Button.scss'

const Button:FC<any> = (props) => {
  return (
            <button {...props} className={"button " + props.className}>
               {
                  props.children
               }
            </button>
  )
}

export default Button
