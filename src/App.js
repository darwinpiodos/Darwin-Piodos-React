import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Login from './Login';
import Register from './Register';


function App() {
  return (
    <div className="App">
      <div>
      
        <Router>
        <Header/>
            <Switch>
            <Route exact path='/' component={App}></Route>
              <Route path='/add' component={AddProduct}></Route>
              <Route path='/update' component={UpdateProduct}></Route>
              <Route path='/login' component={Login}></Route>
              <Route path='/register' component={Register}></Route>
            </Switch>
        </Router>

      
        </div>
    </div>
  );
}

export default App;
