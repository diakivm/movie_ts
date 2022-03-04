
import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


export default function DiscreteSlider({value, setValue, step=1, min=0, max=100, width='100%'}) {
  return (
    <Box sx={{ width: width }}>
      <Slider
         defaultValue={0}
         step={step}
         value={value}
         onChange={(e) => setValue(e.target.value)}
         min={min}
         max={max}
      />
    </Box>
  );
}