function FirstRow() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4">
      <div className="bg-[#D4C7B4] md:flex-[2] rounded-r-3xl rounded-tl-3xl min-h-[140px]" />
      <div className="bg-[#4B4A45] md:flex-[1] rounded-3xl min-h-[140px]">
        <p className="p-4 font-kalnia text-2xl text-[#D4C7B4]">Skills</p>
      </div>
    </div>
  );
}
export default FirstRow;
