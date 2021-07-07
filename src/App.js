import React, {lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';

const Home =  lazy(() => import('./pages/home'));


const App = () => {
  return(
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Suspense>
  )
}


export default App;
