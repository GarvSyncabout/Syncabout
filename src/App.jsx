import react from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Home from "./Component/Home/Home";
import OurServices from "./Component/Our Services/OurServices";
// import About from "./Component/AboutUs/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/aboutus",
      //   element: <About />,
      // },
      {
        path: "/services",
        element: <OurServices />,
      },
    ],
  },
]);

function App() {
  return (
    <main className="m-auto w-full max-w-[1280px]">
      <RouterProvider router={router} basename="syncabout" />
    </main>
  );
}

export default App;
