import { NavLink ,Link,Outlet } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="nav">
        <NavLink style={({isActive})=>isActive?{color:"cyan"}:undefined} to="/root">
          <h4>HOME</h4>
        </NavLink >
        <NavLink style={({isActive})=>isActive?{color:"cyan"}:undefined} to="/root/about" >
          <h4>ABOUT</h4>
        </NavLink >
        <NavLink style={({isActive})=>isActive?{color:"cyan"}:undefined} to="/root/items" >
          <h4>ITEMS</h4>
        </NavLink >
      </div>
      <Outlet/>
    </>  
  );
}

export default Navbar;
