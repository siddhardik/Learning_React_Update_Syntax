
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";

function App() {
  const router = createBrowserRouter([
    {path : "/", element : <Home/>},
    {path : "/about", element : <About/>},
    {path : "items", element : <Items/>}
    
  ])
  return <>
   <RouterProvider router={router}/>
  </>;
}

export default App;
