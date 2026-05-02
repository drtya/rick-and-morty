import Header from "@/shared/ui/header";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
