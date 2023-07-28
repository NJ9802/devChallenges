import "material-symbols/outlined.css";

import React from "react";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import MainContainer from "./components/MainContainer";

const page = () => {
  return (
    <div
      className="
      flex
      w-full
      h-full
      rounded-lg
      bg-white
      overflow-x-hidden
      "
    >
      <Sidebar />
      <div
        className="
        flex
        flex-col
        flex-1
        overflow-y-auto
        "
      >
        <MainContainer />
        <Footer />
      </div>
    </div>
  );
};

export default page;
