import React from "react";
import "./card.css";
import produtos from "../../produtos";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { addProduct, removeProduct} from '../../store/products/produtcs.actions'
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';


const smallLetter = {
  fontSize: 'small',
  color:'rgb(200 209 214)'
}
function decimalFix(value) {
  return value.toFixed(2)
}

function CardItem({inputItems}) {
    return (
      <div className="cardBox" >
        {produtos.map((produto, index) => {
          return (
            <div className="card"  key={index} >
              <Card className="card-background">
                <CardContent>
                  <CardMedia
                    style={{ height: "250px", objectFit: "contain" }}
                    component="img"
                    image={produto.path}
                  />
                  <Typography style={{fontSize: "15px", color:"rgb(154 169 176)"}}>{produto.nome} {produto.descricao}</Typography>
                  <Typography variant="h5" color="textSecondary" style={{fontWeight: 'bold'}}>R${decimalFix(produto.valor)}</Typography>
                  <Typography style={smallLetter}>
                    <span>Em até {decimalFix(produto.parcelas)}x de R${decimalFix(produto.valor/10)} <br></br> a vista ({produto.desconto}% de desconto)</span>
                    </Typography>
                  <div className="actionBox">
                    <IconButton onClick= {() => removeProduct(1)}>
                      <RemoveCircleIcon />
                    </IconButton>
                    <form noValidate autoComplete="off">
                      <TextField
                        id="standard-basic-input"
                        type="number"
                        value = {inputItems}
                      ></TextField>
                    </form>
                    <IconButton
                      onClick= {() => addProduct(1)}
                    >
                      <AddCircleIcon />
                    </IconButton>
                  </div>
                  <Button id="buttonAdd" variant="contained" disableElevation>
                    Adicionar
                  </Button>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    );
}
function mapStateToProps(state){
  return {
    inputItems: state.product.value
  }
}

const mapDispatchToProps = dispatch => {
  bindActionCreators({ addProduct }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
