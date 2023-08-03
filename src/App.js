import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Pages/Common/Layout"

const Dashboard = React.lazy(()=>import("./Pages/Dashboard"));
const Cart = React.lazy(()=>import("./Pages/Cart/Cart"));
const Checkout = React.lazy(()=>import("./Pages/Checkout/Checkout"));
const Login = React.lazy(()=>import("./Pages/Auth/Login"));
const Contact = React.lazy(()=>import("./Pages/Contact"))
const List = React.lazy(()=>import("./Pages/List"))
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
              <Route
                index
                element = {
                  <React.Suspense>
                    <Dashboard />
                  </React.Suspense>
                }
              />

              <Route
                path="cart"
                element = {
                  <React.Suspense>
                    <Cart />
                  </React.Suspense>
                }
              />  

              <Route
                path="checkout"
                element = {
                  <React.Suspense>
                    <Checkout />
                  </React.Suspense>
                }
              />  
              <Route
                path="login"
                element = {
                  <React.Suspense>
                    <Login />
                  </React.Suspense>
                }
              /> 
              <Route
              path = "contact"
              element = {
                <React.Suspense>
                  <Contact />
                </React.Suspense>
              }
              />
              <Route
              path = "list"
              element = {
                <React.Suspense>
                  <List />
                </React.Suspense>
              }
              />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
