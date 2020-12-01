import React from "react";
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import {Container} from 'react-bootstrap'
import HomeScreen from './Screens/HomeScreen'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ProductScreen from './Screens/ProductScreen'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <main className='py-3'>
    <Container>

      <Route path='/' component={HomeScreen} exact/>
      <Route path='/product/:id' component={ProductScreen} />
      
    </Container>
    </main>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
