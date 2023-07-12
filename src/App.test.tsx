import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

import App from "./App";
import { MOCK_STORE } from "./constants";

describe("App Component", () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(MOCK_STORE);

  it("Component is render", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText("Support Ticket System")).toBeTruthy();
  });
});
