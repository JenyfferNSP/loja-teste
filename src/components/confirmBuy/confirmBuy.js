import React from 'react';
import './confirmBuy.css';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { purchaseImg } from '../../constImages';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

function decimalFix(value) {
    return value.toFixed(2);
  }

function ConfirmBuy ({totalCart}){
    return (
        <div className="background">
            <Card id="card">
                <CardContent>
                    <Typography variant="h5" style={{fontWeight: 'bold', color: 'rgb(84 110 122'}}></Typography>
                    <Typography style={{fontSize: "17px", color:"rgb(84 110 122)", fontWeight: "bold", textAlign: "center"}}>Sua compra no valor R${decimalFix(totalCart)}  <br></br> foi finalizada com sucesso</Typography>
                    <CardMedia
                    style={{ height: "150px", width:"150px", objectFit: "contain", marginLeft: "22%"}}
                    component="img"
                    image= {purchaseImg}
                    >
                    </CardMedia>
                    <Button variant="contained" id="endButton">
                    <Link to="/" id="link">Iniciar Nova Compra</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
};

const mapStateToProps = (state) => ({
    totalCart: state.productReducer.totalCart,
  });

export default connect(mapStateToProps)(ConfirmBuy);
