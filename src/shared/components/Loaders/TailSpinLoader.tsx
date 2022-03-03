import React, {FC} from 'react';
import { TailSpin } from 'react-loader-spinner';

interface TailSpinLoaderProps {
    width: number,
    height: number,
    color?: string
}

const TailSpinLoader: FC<TailSpinLoaderProps> = ({width, height, color = "#FFC107"}) => {
  return  (
         <div className="loader">
            <TailSpin color={color} height={width} width={height} />
         </div>
  )
}

export default TailSpinLoader
