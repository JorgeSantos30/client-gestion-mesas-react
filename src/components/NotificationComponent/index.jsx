import React from "react";
import { Alert, Snackbar, Typography } from "@mui/material";

export const Notification = ({ open, msg, severity, handleClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={4000}
      open={open}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        <Typography>{msg}</Typography>
      </Alert>
    </Snackbar>
  );
};
