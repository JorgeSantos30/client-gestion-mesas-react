import React, { useState } from "react";
import {
  Card as MaterialUICard,
  CardContent,
  Typography,
  Divider,
  Button,
  Modal,
} from "@mui/material";
import ColorChipsComponent from "../ColorChipComponent";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const CardComponent = ({ nombreMesa, numeroComensales, status, variant }) => {
  // Estado para controlar la visibilidad del modal y el botón presionado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  // Función para abrir el modal y definir el botón presionado
  const handleOpenModal = (button) => {
    setSelectedButton(button);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setSelectedButton(null);
    setIsModalOpen(false);
  };

  let borderColor = "";

  switch (status) {
    case "Disponible":
      borderColor = "#2e7d32";
      break;
    case "Ocupada":
      borderColor = "#d32f2f";
      break;
    case "Reservada":
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
        <Button onClick={() => handleOpenModal("edit")}>
          <EditIcon />
        </Button>
        <Button onClick={() => handleOpenModal("delete")}>
          <DeleteIcon />
        </Button>
        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <div style={modalStyle}>
            <Typography variant="h6" component="h2">
              {selectedButton === "edit" ? "Editar Mesa" : "Eliminar Mesa"}
            </Typography>
            {selectedButton === "edit" ? (
              <EditModal onClose={handleCloseModal} />
            ) : (
              <DeleteModal onClose={handleCloseModal} />
            )}
          </div>
        </Modal>
        <Typography color="textSecondary" variant="h6">
          Mesa: <strong>{nombreMesa}</strong>
          <Divider />
        </Typography>
        <Typography color="textSecondary" variant="h6">
          <PeopleAltIcon /> <strong>{numeroComensales}</strong>
        </Typography>
        <Divider sx={{ mb: "10px" }} />
        <Typography color="textSecondary" variant="h6">
          <ColorChipsComponent status={status} />
        </Typography>
      </CardContent>
    </MaterialUICard>
  );
};

const EditModal = ({ onClose }) => (
  <div>
    <Typography variant="h6" component="h2">
      Editar Mesa
    </Typography>
    {/* Agregar formulario de edición */}
    <Button onClick={onClose}>Cancelar</Button>
  </div>
);

const DeleteModal = ({ onClose }) => (
  <div>
    <Typography variant="h6" component="h2">
      Eliminar Mesa
    </Typography>
    <p>¿Estás seguro de que deseas eliminar esta mesa?</p>
    {/* Agregar botones para confirmar o cancelar la eliminación */}
    <Button onClick={onClose}>Cancelar</Button>
  </div>
);

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default CardComponent;
