import FirstCol from "../col/FirstCol";
import SecondCol from "../col/SecondCol";

function RightBlock() {
  return (
    <div className="flex h-full min-h-0 gap-3 sm:gap-4 lg:overflow-hidden">
      <div className="flex-[4] min-h-0">
        <FirstCol />
      </div>
      <div className="flex-[6] min-h-0">
        <SecondCol />
      </div>
    </div>
  );
}

export default RightBlock;
