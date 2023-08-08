import React from "react";
import {
  Card as MaterialUICard,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import ColorChipsComponent from "../ColorChipComponent";

const CardComponent = ({ numeroMesa, numeroComensales, status, variant }) => {
  let borderColor = "";

  switch (status) {
    case "disponible":
      borderColor = "#2e7d32";
      break;
    case "ocupada":
      borderColor = "#d32f2f";
      break;
    case "reservada":
      borderColor = "#ed6c02";
      break;
    default:
      borderColor = "white";
      break;
  }

  const cardStyle = {
    backgroundColor: "#ffffff", // Cambia el color de fondo a naranja
    border: `2px solid ${borderColor}`,
  };

  return (
    <MaterialUICard
      style={cardStyle}
      sx={{ mt: "5px", mb: "5px" }}
      variant={variant}
    >
      <CardContent>
        <Typography color="textSecondary" variant="h6">
          Mesa:<strong>{numeroMesa}</strong>
          <Divider />
        </Typography>
        <Typography color="textSecondary" variant="h6" >
          Cap. Comensales: <strong>{numeroComensales}</strong>
        </Typography>
        <Divider sx={{ mb: "10px" }} />
        <Typography color="textSecondary" variant="h6">
          <ColorChipsComponent status={status} />
        </Typography>
      </CardContent>
    </MaterialUICard>
  );
};

export default CardComponent;
