import { createBrowserRouter, Router } from "react-router";
import { RouterProvider } from "react-router/dom";
import './App.css'
import Home from "./pages/home";
import Layout from "./components/Layout";
import Ejemplo from "./pages/ejemplo";
import { childrenRouterList } from "./components/routes";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: childrenRouterList
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
