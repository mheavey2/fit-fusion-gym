import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./components/App/App.jsx";
import About from "./components/About/About.jsx";
import Team from "./components/Team/Team.jsx";
import Classes from "./components/Classes/Classes.jsx";
import Membership from "./components/Membership/Membership.jsx";
import Contact from "./components/Contact/Contact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/contact" element={<Contact />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
