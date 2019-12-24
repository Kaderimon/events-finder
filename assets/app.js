import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { createBrowserHistory } from "history";
import { RootStore } from "./stores/root";
import { HashRouter, Switch, Route } from "react-router-dom";
import Main from "./pages";
import Event from "./pages/events";
/* styles */
import "./global.css";
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
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
