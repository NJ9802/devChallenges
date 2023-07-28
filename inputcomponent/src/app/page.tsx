import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";

import "material-symbols/outlined.css";

export default function Home() {
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
}
