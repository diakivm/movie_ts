import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



const minDistance = 0;

export default function MinimumDistanceSlider({value: any, setValue: any, width = '100%', min=0, max=100}) {

  const handleChange = (event, newValue, activeThumb) => {
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