import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComponent from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="layout">
      {/*  can import header  */}
      <NavbarComponent />
      <section className="layout-content">
        <Outlet />
      </section>
      {/*  can import footer  */}
      <Footer />
    </div>
  );
};

export default MainLayout;
