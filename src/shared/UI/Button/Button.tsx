import React, {FC} from 'react';
import './Button.scss'

const Button:FC = (props: any) => {
  return (
            <button {...props} className={"button " + props.className}>
               {
                  props.children
               }
            </button>
  )
}

export default Button
