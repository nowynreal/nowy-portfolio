function FirstRow() {
  const handleResumeClick = () => {
    window.open(
      "/src/assets/SemihYucekan_v8.pdf",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="flex w-full flex-[1] gap-4 min-h-0">
      <div className="flex flex-[2] flex-col items-center justify-center text-center rounded-r-3xl rounded-tl-3xl bg-[#D4C7B4] min-h-[120px] p-6 text-[#1d1d1d] sm:min-h-[140px] sm:p-5">
        <p className="poppins-semibold text-[0.68rem] uppercase tracking-[0.18em] text-[#3f3b34]">
          Middle Tennessee State University
        </p>
        <h1 className="mt-1 font-kalnia text-2xl leading-tight sm:text-[2rem]">
          Computer Science '28
        </h1>
      </div>
      <button
        type="button"
        onClick={handleResumeClick}
        className="flex-[1] rounded-3xl bg-[#4B4A45] min-h-[120px] sm:min-h-[140px] text-left cursor-pointer"
      >
        <p className="p-4 font-kalnia text-2xl text-[#D4C7B4]">Resume</p>
      </button>
    </div>
  );
}
export default FirstRow;
