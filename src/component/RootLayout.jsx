
import { Outlet } from "react-router";
import Menu from "./menu/Menu";
import CardFooter from "./footerCard/CardFooter";

function RootLayout() {
  return (
    <>
       <Menu/>
       <Outlet/>
       <CardFooter/>
    </>
  );
}

export default RootLayout;