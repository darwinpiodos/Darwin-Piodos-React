import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './Header';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Login from './Login';
import Register from './Register';
import Protected from './Protected';
import ProductList from './ProductList';


function App() {
  return (
    <div className="App"> 
      <div>
      
        <BrowserRouter>
        
            <Switch>
            {/* <Route path='/' component={Header}></Route> */}
            {/* <Route exact path='/' component={App}></Route> */}
            <Route path='/add' ><Protected Cmp={AddProduct} /></Route>
            <Route path='/update' ><Protected Cmp={UpdateProduct} /></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route> 
            <Route path='/' ><Protected Cmp={ProductList} /></Route>

      
           
            </Switch>
        </BrowserRouter>

      
        </div>
    </div>
  );
}

export default App;
