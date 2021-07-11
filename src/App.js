import React, {lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';

const Home =  lazy(() => import('./pages/home'));
const Details = lazy(() => import('./pages/details'));
const Catalogue = lazy(() => import('./pages/catalogue'));

const App = () => {
  return(
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/product/:id" component={Details}/>
        <Route exact path="/catalogue" component={Catalogue}/>
      </Switch>
    </Suspense>
  )
}


export default App;
