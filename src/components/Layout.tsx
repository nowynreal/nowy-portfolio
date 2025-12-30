import LeftBlock from "./sections/LeftBlock";
import RightBlock from "./sections/RightBlock";

function Layout() {
  return (
    <div className="flex rounded-3xl flex-grow">
      <div className="flex flex-1/4 rounded-3xl w-full gap-4">
        <div className="flex-[1]">
          <LeftBlock />
        </div>
        <div className="flex-[1]">
          <RightBlock />
        </div>
      </div>
    </div>
  );
}

export default Layout;
