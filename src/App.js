import './App.css';
import React from "react";
import CardItem from './components/card/card';
import ClientForm from './components/clientForm/clientForm';
import produtos from './produtos';
import { Provider } from 'react-redux';
import Store from './store';



class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      produtos: [...produtos]
    }
  }
  render(){
    return (
      <div className="responsiveBox">
        <Provider store={Store}>
        <section>
          <h3>Produtos</h3>
          <hr></hr>
          <div>
            <CardItem produtos={this.state.produtos}></CardItem>
          </div>
        </section>
        <section>
          <ClientForm></ClientForm>
        </section>
        </Provider>
      </div>
      )
    };
  }
    

export default App;
