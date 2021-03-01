import './App.css';
import React from "react";
import CardItem from './components/card/card';
import ClientForm from './components/clientForm/clientForm';
import { connect } from "react-redux";
import produtos from './produtos';

class App extends React.Component {

  constructor(props){
    super(props)

    this.state= {
      itensCart: props.itensCart,
      produtos: [...produtos], 
      totalCart: props.totalCart
    }
  }
  render(){
    return (
      <div className="responsiveBox">
        <section>
          <h3>Produtos</h3>
          <hr></hr>
          <div>
            <CardItem state={this.state}></CardItem>
          </div>
        </section>
        <section>
          <ClientForm totalCart={this.state.totalCart}></ClientForm>
        </section>
      </div>
      )
    };
  }

const mapStateToProps = (state) => ({
  itensCart: state.productReducer.itensCart,
  produtos: state.productReducer.produtos,
  totalCart: state.productReducer.totalCart,
});

export default connect(mapStateToProps)(App);
