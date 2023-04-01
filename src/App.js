import { createContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import ProductProvider from "./context/ProductProvider";
import { routers } from "./routes/routes";
// import routes from "./routes/routes";

function App() {
  return (
    <div>
      <ProductProvider>
        <RouterProvider router={routers} />
      </ProductProvider>
    </div>
  );
}

export default App;
