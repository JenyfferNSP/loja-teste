import React from "react";
import "./clientForm.css";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'


const validate = (values) => {
  const errors = {};
  const requiredFields = ["nome", "email", "sexo"];
  requiredFields.forEach((field) => {

    if (!values[field]) {
      errors[field] = "Campo obrigatório";
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Email inválido";
  }
  return errors;
};

const renderTextField = ({ label, input, placeholder, meta: { touched, invalid, error } }) => (
  <TextField
    id="outlined"
    label={label}
    placeholder={placeholder}
    error={touched && invalid}
    helperText={touched && error}
    variant="outlined"
    className="input"
    {...input}
  />
);

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children
}) => (
  <FormControl>
    <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
    <Select
      native
      {...input}
      inputProps={{
        name: input.name,
        id: 'color-native-simple'
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}



function ClientForm(props) {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <div>
      <h3>Dados do Cliente</h3>
      <hr></hr>
      <form
        className="formControl"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="space-between">
          <Field
            name="nome"
            label="Nome"
            placeholder="Nome do cliente aqui"
            component={renderTextField}
          />
        </div>
        <div className="space-between">
          <Field
            label="Email"
            name="email"
            placeholder="Digite seu email aqui"
            component={renderTextField}
          />
        </div>
        <div className="space-between">
          <Field
            name="sexo"
            component={renderSelectField}
            label="Sexo"
          >
          <option value="" />
          <option value={'Feminino'}>Feminino</option>
          <option value={'Masculino'}>Masculino</option>
          </Field>
        </div>
      </form>
      <div className="footer">
        <h2>Total:</h2>
        <span></span>
        <Button 
          variant="contained" 
          id="finalButton" 
          type="submit" 
          disabled={pristine || submitting} >
          <Link to="/confirm-buy" id="link">Finalizar Compra</Link>
        </Button>
        </div>
      </div>
  );
};

export default reduxForm({
  form: "clientForm",
  validate,
})(ClientForm);
