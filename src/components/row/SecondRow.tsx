function SecondRow() {
  return (
    <div className="w-full flex flex-1/2">
      <div className=" relative bg-[#D4C7B4] flex-2/4 rounded-b-3xl mb-4">
        <div className="absolute -right-5 top-0 w-5 h-5 rounded-tl-[28px] bg-[#1d1d1d] z-[1] pointer-events-none" />
        <div className="absolute -right-5 top-0 w-5 h-5 bg-[#D4C7B4] pointer-events-none" />
      </div>
      <div className="relative bg-[#4B4A45] flex-2/4 m-4 mb-0 mr-0 rounded-3xl rounded-b-none">
        <div className="absolute -left-5 bottom-0 w-5 h-5 rounded-br-[28px] bg-[#1d1d1d] z-[1] pointer-events-none" />
        <div className="absolute -left-5 bottom-0 w-5 h-5 bg-[#4B4A45] pointer-events-none" />
      </div>
    </div>
  );
}

export default SecondRow;
