import React, { Suspense, memo } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/common/NavigationBar";
import Footer from "../components/common/Footer";

const DefaultLayout = ({ props }) => {
  console.log("props", props);
  return (
    <>
      <NavBar />
      <div className="w-100">
        <div className="h-100">
          <Suspense fallback={<p>Loading.....</p>}>
            <Outlet></Outlet>
          </Suspense>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default memo(DefaultLayout);
