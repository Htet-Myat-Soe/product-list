import './App.css';
import { Header } from './containers/Header';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { ProductListing } from './containers/ProductListing';
import { ProductDetail } from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <ProductListing/>
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
          <Route>
            404 Page Not Found !
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
