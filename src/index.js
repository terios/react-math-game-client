// Dependencies
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import createHistory from "history/createBrowserHistory";
import { ConnectedRouter } from "react-router-redux";

import { basename } from "config";
import configureStore from "store/configure";
import reducer from "store/reducer";
import injectTapEventPlugin from "react-tap-event-plugin";

// Components
import App from "components/App";

injectTapEventPlugin();

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

const store = configureStore({}, history);

store.dispatch({
  type: "LOAD_STATE",
  state: {
    currentPlaylist: [
      {
        id: "https://www.youtube.com/watch?v=QAOMIH7cgh0",
        owner: "Groot",
        title: "Mr blue sty song",
        origin: "youtube"
      },
      {
        id: "https://www.youtube.com/watch?v=leC5WE7P2To",
        owner: "The father",
        title: "cat steven Father and son",
        origin: "youtube"
      }
    ],
    currentVideo: {
      owner: "Latina",
      title: "Shakira - Me Enamoré",
      link: "https://www.youtube.com/watch?v=sPTn0QEhxds",
      origin: "youtube"
    }
  }
});

const renderApp = () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>;

const root = document.getElementById("app");
render(renderApp(), root);

if (module.hot) {
  module.hot.accept("components/App", () => {
    require("components/App");
    render(renderApp(), root);
  });
}
