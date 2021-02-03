import React, { Component } from "react";
import "./card.css";
import produtos from "../../produtos";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export default class CardItem extends Component {
  render() {
    return (
      <div className="cardBox">
        {produtos.map((produto) => {
          return (
            <div className="card">
              <Card className="card-background">
                <CardMedia
                  style={{ height: "250px" }}
                  component="img"
                  className="img"
                  image={produto.path}
                />
                <CardContent>
                  <Typography className="cardTitle">{produto.nome}</Typography>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}
