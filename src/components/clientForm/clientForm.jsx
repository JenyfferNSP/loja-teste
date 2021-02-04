import React from "react";
import "./clientForm.css";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const sexo = [
  {
      value: "FEMALE",
      label: "Feminino",
  },
  {
      value: "MALE",
      label: "Masculino",
  }
];

function ClientForm({total}) {
    return (
      <div>
        <h3>Dados do Cliente</h3>
        <hr></hr>
        <form className="formControl" noValidate autoComplete="off">
          <div className="space-between">
            <TextField
              id="outlined-inputNome"
              label="Nome"
              placeholder="Nome do cliente aqui"
              variant="outlined"
              className="input-name"
            />
          </div>
          <div className="space-between">
            <TextField
              id="outlined-inputEmail"
              label="Email"
              placeholder="Digite seu email aqui"
              variant="outlined"
              className="input-email"
            />
          </div>
          <div className="space-between">
            <TextField
              id="outlined-select-sexo"
              select
              label="Sexo"
              value={sexo.value}
              // onChange= {handleChange}
              variant="outlined"
              className="select"
            >
              {sexo.map((option) => (
                <MenuItem 
                key={option.value} 
                value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </form>
        <div className="footer">
          <h2>Total:</h2>
          <span></span>
          <Button variant="contained" id="finalButton">
            <Link to="/confirm-buy" id="link">Finalizar Compra</Link>
          </Button>
        </div>
      </div>
    );
}

function mapStateToProps(state){
  return {
    total: state.product
  }
}

export default connect(mapStateToProps)(ClientForm);
