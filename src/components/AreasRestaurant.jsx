import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { tables } from "../api/tables";
import CardComponent from "./CardComponent";

const areasNombres = ["Salón", "Terraza", "Juegos", "SalónB"];

function AreasRestaurante() {
  const [alltables, setAllTables] = useState([]);

  const fetchTables = () => {
    tables
      .getAll()
      .then((r) => {
        const fetchedTables = r.data.tables;
        setAllTables(fetchedTables);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchTables();
  }, []);

  useEffect(() => {
    fetchTables();
  }, [alltables]);

  const renderMesasPorArea = (areaNombre) => {
    const mesasEnArea = alltables.filter((mesa) => mesa.area === areaNombre);

    return (
      <div style={{ padding: "10px", width: "100%", height: "100%" }}>
        {mesasEnArea.map((mesa) => (
          <CardComponent
            key={mesa._id}
            variant="outlined"
            nombreMesa={mesa.nameTable}
            numeroComensales={mesa.numberStarters}
            status={mesa.status}
          />
        ))}
      </div>
    );
  };

  return (
    <Grid container spacing={2}>
      {areasNombres.map((areaNombre, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <h2>{areaNombre}</h2>
          {renderMesasPorArea(areaNombre)}
        </Grid>
      ))}
    </Grid>
  );
}

export default AreasRestaurante;
