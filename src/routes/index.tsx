import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ListProducts from '../pages/ListProducts';
import Product from  '../pages/Product';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/ListProducts" component={ListProducts} />
    <Route path="/Product" component={Product} />
  </Switch>
);

export default Routes;
