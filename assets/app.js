import React from "react";
import ReactDOM from "react-dom";
import loadable from "@loadable/component";
import { Provider } from "mobx-react";
import { createBrowserHistory } from "history";
import { RootStore } from "./stores/root";
import { HashRouter, Switch, Route } from "react-router-dom";
/* styles */
import "./global.css";

const Main = loadable(() => import("./pages"));
const Event = loadable(() => import("./pages/events"));
const Favorites = loadable(() => import("./pages/favorites"));
const history = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.mobxStore = new RootStore();
  }

  render() {
    return (
      <Provider rootStore={this.mobxStore}>
        <HashRouter history={history}>
          <Switch>
            <Route exact path="/">
              <Main {...this.mobxStore} />
            </Route>
            <Route path="/events/:id">
              <Event {...this.mobxStore} />
            </Route>
            <Route path="/favorites/:id">
              <Favorites {...this.mobxStore} />
            </Route>
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
