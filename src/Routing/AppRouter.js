import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLoading from "../components/PageLoading";

// import MainLayout
const MainLayout = lazy(() => import("../layouts/MainLayout"));

// import pages
const Home = lazy(() => import("../pages/Home"));

const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <>
          <PageLoading />
        </>
      }
    >
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
};

export default AppRouter;
