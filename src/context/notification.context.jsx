import React, { createContext, useContext } from "react";
import { Notification } from "../components/NotificationComponent";

const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const [msg, setMsg] = React.useState("");

  const [open, setOpen] = React.useState(false);

  const [severity, setSeverity] = React.useState(undefined);

  const handleClose = () => {
    setOpen(false);
  };

  const getError = (msg) => {
    setSeverity("error");
    setOpen(true);
    setMsg(msg);
  };

  const getSuccess = (msg) => {
    setSeverity("success");
    setOpen(true);
    setMsg(msg);
  };

  const value = {
    getError,
    getSuccess,
  };

  return (
    <NotificationContext.Provider value={value}>
      <Notification
        handleClose={handleClose}
        open={open}
        severity={severity}
        msg={msg}
      />
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error("No existe contexto");
  return context;
};
