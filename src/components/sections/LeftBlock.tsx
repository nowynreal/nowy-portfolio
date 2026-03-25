import FirstRow from "../row/FirstRow";
import SecondRow from "../row/SecondRow";
import ThirdRow from "../row/ThirdRow";

function LeftBlock() {
  return (
    <div className="flex h-full w-full min-h-0 flex-col gap-4 rounded-3xl lg:gap-0">
      <FirstRow />
      <SecondRow />
      <ThirdRow />
    </div>
  );
}

export default LeftBlock;
