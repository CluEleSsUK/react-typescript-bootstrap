import * as React from 'react';
import {Route, Switch} from "react-router-dom";
import {menuItems} from "./menu";

export default class Main extends React.Component<{}, {}> {
  render() {
      return (
          <Switch>
              {menuItems.map(item => <Route key={item.path} path={item.path} component={item.component} exact={item.exact}/>)}
          </Switch>
    );
  }
}