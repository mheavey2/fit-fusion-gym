import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </>
  )
);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
