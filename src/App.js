import React, { PureComponent } from 'react'
import {configRoute} from "router"
import routeEach from "utils/routeEach";
import {HashRouter as Route,Switch,Redirect} from "react-router-dom"
import TabBar from "common/tabBar"
class App extends PureComponent {

  render() {
    return (
      <Route>
          <Switch>
              <Redirect from="/" to="/market" exact/>
              {routeEach(configRoute)}
          </Switch>
      </Route>
    )
  }
}

export default App