import LeftBlock from "./sections/LeftBlock";
import RightBlock from "./sections/RightBlock";

function Layout() {
  return (
    <div className="flex flex-1 min-h-0 rounded-3xl">
      <div className="flex w-full min-h-0 flex-col gap-3 rounded-3xl sm:gap-4 lg:flex-row lg:items-stretch">
        <section className="min-h-[calc(100svh-8rem)] sm:min-h-[calc(100svh-8.75rem)] lg:min-h-0 lg:flex-1 lg:overflow-hidden">
          <LeftBlock />
        </section>
        <section className="min-h-[calc(100svh-8rem)] sm:min-h-[calc(100svh-8.75rem)] lg:min-h-0 lg:flex-1 lg:overflow-hidden">
          <RightBlock />
        </section>
      </div>
    </div>
  );
}

export default Layout;
