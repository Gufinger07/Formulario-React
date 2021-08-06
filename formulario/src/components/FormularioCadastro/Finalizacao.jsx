import React from "react";
import { Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
function Finalizacao({ voltarForm }) {
  return (
    <div>
      <Alert variant="filled" severity="success">
        Cadastro Realizado com Sucesso!!
      </Alert>
      <Button
        onClick={(event) => {
          event.preventDefault();
          voltarForm();
        }}
        type="button"
        variant="contained"
        fullWidth
      >
        Voltar
      </Button>
    </div>
  );
}
export default Finalizacao;
