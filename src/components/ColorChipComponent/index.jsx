import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function ColorChipsComponent({ status }) {
  let chipColor = "";

  if (status === "Disponible") {
    chipColor = "success";
  } else if (status === "Ocupada") {
    chipColor = "error"; // Rojo para ocupada
  } else if (status === "Reservada") {
    chipColor = "warning"; // Amarillo para reservada
  }

  return (
    <Stack spacing={1} alignItems="center">
      <Stack direction="row" spacing={1}>
        <Chip color={chipColor} label={status} />
      </Stack>
    </Stack>
  );
}
