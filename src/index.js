import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LoaderProvider from "./Providers/LoaderProvider";
import PaginationProvider from "./Providers/PaginationProvider";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoaderProvider>
        <PaginationProvider>
          <Routes>
            <Route
              path="/"
              exact
              element={<Navigate replace to="/products?source=Amazon" />}
            ></Route>
            <Route path="products" element={<App />} />
          </Routes>
        </PaginationProvider>
      </LoaderProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
