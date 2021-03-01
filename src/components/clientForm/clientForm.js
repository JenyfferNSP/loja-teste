import React, { Fragment } from "react";
import "./clientForm.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import { connect } from "react-redux";
import Media from "react-media";

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

const renderTextField = ({
  label,
  input,
  placeholder,
  meta: { touched, invalid, error },
}) => (
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
  children,
}) => (
  <FormControl>
    <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
    <Select
      native
      {...input}
      inputProps={{
        name: input.name,
        id: "color-native-simple",
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

function decimalFix(value) {
  return value.toFixed(2);
}

function ClientForm(props) {
  const { handleSubmit, pristine, totalCart, submitting, valid } = props;
  return (
    <div>
      <Media
        queries={{
          small: "(min-width: 320px) and (max-width: 719px)",
          medium: "(min-width: 720px) and (max-width: 1139px)",
          large: "(min-width: 1140px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.small && (
              <div>
                <h3>Dados do Cliente</h3>
                <hr></hr>
                <form
                  className="formControl"
                  autoComplete="off"
                  onSubmit={handleSubmit}
                  style={{display: "inline"}}
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
                      <option value={"Feminino"}>Feminino</option>
                      <option value={"Masculino"}>Masculino</option>
                    </Field>
                  </div>
                </form>
                <div className="footer">
                  <h2>Total: R${decimalFix(totalCart)}</h2>
                  <Button
                    variant="contained"
                    id="finalButton"
                    type="submit"
                    disabled={pristine || submitting || !valid}
                  >
                    <Link to="/confirm-buy" id="link">
                      Finalizar Compra
                    </Link>
                  </Button>
                </div>
              </div>
            )}

            {matches.medium && (
              <div>
                <h3>Dados do Cliente</h3>
                <hr></hr>
                <form
                  className="formControl"
                  autoComplete="off"
                  onSubmit={handleSubmit}
                  style={{display: "inline-grid", gridTemplateColumns: "auto auto"}}
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
                      <option value={"Feminino"}>Feminino</option>
                      <option value={"Masculino"}>Masculino</option>
                    </Field>
                  </div>
                </form>
                <div className="footer">
                  <h2>Total: R${decimalFix(totalCart)}</h2>
                  <Button
                    variant="contained"
                    id="finalButton"
                    type="submit"
                    disabled={pristine || submitting || !valid}
                  >
                    <Link to="/confirm-buy" id="link">
                      Finalizar Compra
                    </Link>
                  </Button>
                </div>
              </div>
            )}
            {matches.large && (
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
                      <option value={"Feminino"}>Feminino</option>
                      <option value={"Masculino"}>Masculino</option>
                    </Field>
                  </div>
                </form>
                <div className="footer">
                  <h2>Total: R${decimalFix(totalCart)}</h2>
                  <Button
                    variant="contained"
                    id="finalButton"
                    type="submit"
                    disabled={pristine || submitting || !valid}
                  >
                    <Link to="/confirm-buy" id="link">
                      Finalizar Compra
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </Fragment>
        )}
      </Media>
    </div>
  );
}

const mapStateToProps = (state) => ({
  totalCart: state.productReducer.totalCart,
});

ClientForm = reduxForm({
  form: "clientForm",
  validate,
})(ClientForm);

export default connect(mapStateToProps)(ClientForm);
