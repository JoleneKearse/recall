import { HamburgerProvider } from "../context/HamburgerContext";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
 

	return (
    <HamburgerProvider>
      <NavBar />
      <Outlet />
    </HamburgerProvider>
  )
};

export default Layout;
