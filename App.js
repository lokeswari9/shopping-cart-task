import React, { Component } from 'react';
import {BrowserRouter,Route, Switch, Link} from 'react-router-dom';
import './App.css';
import MyCart from './components/myCart';
import AddToProductList from './components/addToProductList';
import ProductList from './components/ProductList';
import SearchProduct from './components/searchProduct';

class App extends Component {
  render() {
    return (
      <div>
       <h2><b>Shopping Cart</b></h2>
       <BrowserRouter> 
        <div>
            <div>
              <Link to = "/myCart">Cart<br/></Link>
              <Link to = "/productList">Product List<br/></Link>
              <Link to = "/addToProductList">Add Products<br/></Link>
              <Link to = "/searchProduct">Search For Products<br/></Link>
            </div>
            <Switch>
            <Route path="/productList" component={ProductList}/>
            <Route path="/myCart" component={MyCart}/>
            <Route path="/addToProductList" component={AddToProductList}/>
            <Route path="/searchProduct" component={SearchProduct}/>
            </Switch> 
          </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
