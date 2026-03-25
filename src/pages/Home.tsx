import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import MobileHomeLayout from "../components/MobileHomeLayout";

function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#1d1d1d] lg:h-screen lg:overflow-hidden">
      <div className="m-2 flex min-h-screen flex-col gap-3 sm:m-4 sm:gap-4 lg:h-full lg:min-h-0">
        <Navbar />
        <div className="lg:hidden">
          <MobileHomeLayout />
        </div>

        <div className="hidden lg:flex lg:min-h-0 lg:flex-1">
          <Layout />
        </div>
      </div>
    </div>
  );
}

export default Home;
