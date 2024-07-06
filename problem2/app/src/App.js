import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProducts from './pages/allprod';
import ProductPage from './pages/proud';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AllProducts} />
        <Route path="/product/:company/:category/:productId" component={ProductPage} />
      </Switch>
    </Router>
  );
};

export default App;
