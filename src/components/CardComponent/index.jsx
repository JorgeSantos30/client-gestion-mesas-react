import React from 'react';
import { Card as MaterialUICard, CardContent, Typography, Divider } from '@mui/material';
import ColorChipsComponent from '../ColorChipComponent';

const CardComponent = ({ numeroMesa, numeroComensales, status, variant }) => {

    const cardStyle = {
        backgroundColor: '#ffffff', // Cambia el color de fondo a naranja
      };

  return (
    <MaterialUICard style={cardStyle} sx={{ mt: "5px", mb:"5px"}} variant={variant}>
      <CardContent>
        <Typography color="textSecondary" variant='h6'>
          Mesa:<strong>{numeroMesa}</strong>
          <Divider />
        </Typography>
        <Typography color="textSecondary" variant='h6'>
          Cap. Comensales: {numeroComensales}
        </Typography>
        <Divider sx={{mb:'10px'}} />
        <Typography color="textSecondary" variant='h6'>
          <ColorChipsComponent status={status}/>
        </Typography>
      </CardContent>
    </MaterialUICard>
  );
};

export default CardComponent;
