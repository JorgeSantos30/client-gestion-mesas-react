import React, { useState, useEffect } from "react";
import { tables } from "../../api/tables";
import CardComponent from "../../components/CardComponent";

function DashboarPage() {
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
            numeroMesa={mesa.numberTable}
            numeroComensales={mesa.numberStarters}
            status={mesa.status}
          />
        ))}
      </div>
    );
  };

  
}

export default DashboarPage;
