import React, { Component } from "react";
import "./clientForm.css";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const sexo = [
  {
    value: "Female",
    label: "Feminino",
  },
  {
    value: "Male",
    label: "Masculino",
  },
];

export default class ClientForm extends Component {
  render() {
    return (
      <div>
        <h3>Dados do Cliente</h3>
        <hr></hr>
        <form className="formControl" noValidate autoComplete="off">
          <div className="space-between">
            <TextField
              // error
              id="outlined-inputNome"
              label="Nome"
              defaultValue="Nome do cliente aqui"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              // helperText="Campo Obrigatório"
              className="input-name"
            />
          </div>
          <div className="space-between">
            <TextField
              id="outlined-inputEmail"
              label="Email"
              defaultValue="Digite seu email aqui"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              className="input-email"
            />
          </div>
          <div className="space-between">
            <TextField
              id="outlined-select-sexo"
              select
              label="Sexo"
              value={sexo}
              // onChange={handleChange}
              variant="outlined"
              className="select"
            >
              {sexo.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </form>
        <div className="footer">
          <h2>Total:</h2>
          <Button variant="contained">
            Finalizar Compra
          </Button>
        </div>
      </div>
    );
  }
}
