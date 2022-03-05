
import React, {ChangeEvent, FC} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

interface SliderSimpleProps {
    value: any
    setValue: any
    step: number
    width?: string
    min: number
    max: number
}

const SliderSimple: FC<SliderSimpleProps> = ({value, setValue, step=1, min=0, max=100, width='100%'}) => {
  return (
    <Box sx={{ width: width }}>
      <Slider
         defaultValue={0}
         step={step}
         value={value}
         onChange={(e: any) => setValue(e.target.value)}
         min={min}
         max={max}
      />
    </Box>
  );
}

export default SliderSimple