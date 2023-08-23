import "./styles.css";
import { useState } from "react";
import { createBrowserRouter , RouterProvider } from "react-router-dom";

import { Navbar } from "./pages/Navbar";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Contact } from "./pages/Contact";

export default function App() {
  // const [page, setPage] = useState("home");
  const  router = createBrowserRouter([
  { path :"/",
  element : <Home/>

  },
  {
    path :"/list",
   element : <List/>

  },
  {
    path :"/contact",
    element : <Contact/>
  }
  ]);
  return (
    <div className="App">
      {/* <Navbar setPage={setPage} /> */}
      {/* {page === "home" && <Home />}
      {page === "list" && <List />}
      {page === "contact" && <Contact />} */}
      <Navbar/>
      <RouterProvider router={router}/>
    </div>
  );
}
