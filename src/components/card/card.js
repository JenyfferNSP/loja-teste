import React from "react";
import "./card.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import * as produtcsActions from "../../store/products/productActions";
import * as clientFormActions from "../../store/clientForm/clientFormActions"

const smallLetter = {
  fontSize: "small",
  color: "rgb(200 209 214)",
};
function decimalFix(value) {
  return value.toFixed(2);
}

const CardItem = ({ produtos, quantidade, addProduct, removeProduct, addToCart }) => (
    <div className="cardBox">
      {produtos.map((produto) => {
        return (
          <div className="card" key={produto.id}>
            <Card className="card-background">
              <CardContent>
                <CardMedia
                  style={{ height: "250px", objectFit: "contain" }}
                  component="img"
                  image={produto.path}
                />
                <Typography
                  style={{ fontSize: "15px", color: "rgb(154 169 176)" }}
                >
                  {produto.nome} {produto.descricao}
                </Typography>
                <Typography
                  variant="h5"
                  color="textSecondary"
                  style={{ fontWeight: "bold" }}
                >
                  R${decimalFix(produto.valor)}
                </Typography>
                <Typography style={smallLetter}>
                  <span>
                    Em até {decimalFix(produto.parcelas)}x de R$
                    {decimalFix(produto.valor / 10)} <br></br> a vista (
                    {produto.desconto}% de desconto)
                  </span>
                </Typography>
                <div className="actionBox">
                  <IconButton onClick = {() => removeProduct(produto.id)}>
                    <RemoveCircleIcon />
                  </IconButton>
                  <form noValidate autoComplete="off">
                    <TextField
                      id="standard-basic-input"
                      type="number"
                      value={quantidade}
                      key={produto.id}
                    ></TextField>
                  </form>
                  <IconButton onClick = {() => addProduct(produto.id)}>
                    <AddCircleIcon />
                  </IconButton>
                </div>
                <Button 
                  id="buttonAdd"
                  variant="contained" 
                  onClick = {() => addToCart()}
                  disableElevation
                 >
                  Adicionar
                </Button>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
    );

const mapStateToProps = (state) => ({
  produtos: state.productReducer.produtos,
  quantidade: state.productReducer.quantity
});

const mapDispatchToProps = dispatch => ({
  addProduct: () => dispatch(produtcsActions.addProduct()),
  removeProduct: () => dispatch(produtcsActions.removeProduct())
})

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
