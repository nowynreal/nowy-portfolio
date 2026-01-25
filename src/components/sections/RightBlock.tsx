import FirstCol from "../col/FirstCol";
import SecondCol from "../col/SecondCol";

function RightBlock() {
  return (
    <div className="h-full flex gap-4">
      <div className="flex-[4]">
        <FirstCol />
      </div>
      <div className="flex-[6]">
        <SecondCol />
      </div>
    </div>
  );
}

export default RightBlock;
