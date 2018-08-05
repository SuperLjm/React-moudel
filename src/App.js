import React, { Component } from 'react';
import appRoutes from '@/router/appRoutes.js'
import { Switch, Route, Redirect} from 'react-router-dom'
import MainFooter from '@/components/MainFooter/index.js'
import '@/main.scss'
class App extends Component {
  render() {

    return (
      <div className="App">
        <Switch>
          {
            appRoutes.map((item, index) => (
              <Route key={index} path = {item.path} component={item.component} />
            ))
          }
          <Redirect to = {{pathname: '/home'}} />
        </Switch>
        <MainFooter />
      </div>
    );
  }
}

export default App
