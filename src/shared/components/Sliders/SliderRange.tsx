import { Box, Slider } from '@mui/material';
import React, {FC} from 'react';




const minDistance = 0;

interface SliderRangeProps {
  value: any
  setValue: any
  width?: string
  min: number
  max: number
}

const SliderRange: FC<SliderRangeProps> = ({value, setValue, width = '100%', min=0, max=100}) => {

  const handleChange = (event: any, newValue: any, activeThumb: any) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };


  return (
    <Box sx={{ width: width }}>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        disableSwap
      />
    </Box>
  );
}


export default SliderRange