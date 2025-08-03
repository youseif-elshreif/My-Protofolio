import "./SectionContainer.css";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="mainSectionHeader p-4 flex items-center justify-between  rounded-t-[.8rem] bg-black">
      <div className="flex items-center justify-start">
        <span className="bg-[#ff5f56] w-[10px] h-[10px] rounded-full mr-2 shadow-[0_0_5px_#ff5f56]"></span>
        <span className="bg-[#ffbd2e] w-[10px] h-[10px] rounded-full mr-2 shadow-[0_0_5px_#ffbd2e]"></span>
        <span className="bg-[#27c93f] w-[10px] h-[10px] rounded-full mr-2 shadow-[0_0_5px_#27c93f]"></span>
      </div>
      <h2 className="text-xl lg:text-2xl font-bold tracking-[.2rem] lg:tracking-[.3rem]">
        {title}
      </h2>
    </div>
  );
};

export default Header;
