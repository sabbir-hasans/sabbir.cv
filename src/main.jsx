// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import Certificates from "./pages/Certificates";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <BrowserRouter>

      <Routes>

        {/* Main Portfolio */}
        <Route
          path="/"
          element={<App />}
        />

        {/* Certificates Page */}
        <Route
          path="/certificates"
          element={<Certificates />}
        />

      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);