import React from "react";
import "./card.css";
import produtos from "../../produtos";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { addProduct, removeProduct} from '../../store/products/produtcs.actions'
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { useSelector, useDispatch } from 'react-redux';

function CardItem() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.product);
 
    return (
      <div className="cardBox" >
        {produtos.map((produto, index) => {
          return (
            <div className="card"  key={index} >
              <Card className="card-background">
                <CardContent>
                  <CardMedia
                    style={{ height: "250px",paddingTop :"1px" }}
                    component="img"
                    image={produto.path}
                  />
                  <Typography className="cardTitle">{produto.nome}</Typography>
                  <div className="actionBox">
                    <IconButton onClick={() => { dispatch(removeProduct("ADD_PRODUCT", counter))}}>
                      <RemoveCircleIcon />
                    </IconButton>
                    <form noValidate autoComplete="off">
                      <TextField
                        id="standard-basic-input"
                        value={counter}
                      ></TextField>
                    </form>
                    <IconButton onClick={() => { dispatch(addProduct("ADD_PRODUCT", counter))}}>
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

export default CardItem;
