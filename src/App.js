import './App.css';
import React from "react";
import Card from './components/card/card';
import ClientForm from './components/clientForm/clientForm';

function App (){
    return (
    <div className="responsiveBox">
      <section>
        <h3>Produtos</h3>
        <hr></hr>
        <div>
          <Card></Card>
        </div>
      </section>
      <section>
        <ClientForm></ClientForm>
      </section>
    </div>
    )
};

export default App;
