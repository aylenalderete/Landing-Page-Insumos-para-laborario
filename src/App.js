import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home/index';
// import Products from './components/Products';
// import Mayoristas from './components/Mayoristas';
import AdminView from './components/Admin';
import Product from './components/Product';
import Login from './components/Admin/Login';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/product/:doc_id'> <Product></Product> </Route>
        <Route exact path='/login' component={Login} /> 
        <Route exact path='/' component={Home} />
        <Route exact path='/admin' component={AdminView} />
        {/* <Route exact path='/productos' component={Products} />
        <Route exact path='/ContactoMayorista' component={Mayoristas} />
        <Route exact path='/producto' component={Product} /> */}
      </Switch>
    </BrowserRouter>  
  );
}

export default App;
