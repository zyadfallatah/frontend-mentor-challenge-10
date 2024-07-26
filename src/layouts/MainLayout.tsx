import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <nav>Temporary NavBar</nav>
      <Outlet />
    </>
  );
};

export default MainLayout;
