import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import RateCard from "./components/RateCard";
import ThankYouCard, { loader } from "./components/ThankYouCard";
import "./index.css";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path='/intractive-rating-component' element={<App></App>}>
         <Route index={true} element={<RateCard></RateCard>}></Route>
         <Route path=':rateValue' loader={loader} element={<ThankYouCard></ThankYouCard>}></Route>
      </Route>
   )
);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
   </React.StrictMode>
);
