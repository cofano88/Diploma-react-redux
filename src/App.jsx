import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Client } from "./pages/main";

export const App = () => {
  return (
    <Provider store={store}>
      <Client />
    </Provider>
  );
};

export default App;
