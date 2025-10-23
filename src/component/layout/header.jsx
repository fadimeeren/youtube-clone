import { MdMenu, MdApps } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoIosVideocam, IoMdMic } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";

const Header = () => {
  const {toggleSidebar} = useContext (SidebarContext)
  return (
    <header className="flex justify-between gap-4 px-4 h-14">
      {/* Sol Logo*/}
      <div className="flex items-center  gap-3">
        <button onClick= {toggleSidebar} className="p-2 hover:bg-[#3f3f3f]rounded-full transition duration-150">
          <MdMenu className="text-xl" />
        </button>
        <button className="flex items-center gap-1">
          <img src="/youtube.png" alt="youtube" className="w-8" />
          <span className="text-xl font-bold tracking-tight max-sm:hidden">
            YouTube
          </span>
        </button>
      </div>

      {/* Orta: Arama*/}
      <div className="flex-1 max-w-[728px] flex justify-center items-center">
        <form className="flex w-full max-w-[640px] item-center">
          <div className="flex flex-1">
            <input
              type="text"
              className="w-full h-10 px-10 bg-[#121212] border-grey rounded-l-full text-white placeholder:text-[#aaaaaa]"
              placeholder="Ara"
            />
            <button className="w-16 h-10 bg-[#222222] border border-[ #3f3f3f] rounded-r-full flex justify-center items-center hover:bg-[ #3f3f3f] transition">
              <CiSearch className="text-xl text-white" />
            </button>
          </div>

          <button className="ml-2 p-2  hover:bg-[ #3f3f3f]transition rounded-full max-sm-hidden">
            <IoMdMic />
          </button>
        </form>
      </div>

      {/* Sağ: Icons*/}
      <div className="flex items-center gap-2">
        <button className="icon max-sm:hidden">
          <IoIosVideocam className="text xl" />
        </button>
        <button className="icon max-sm:hidden">
          <MdApps className="text-xl"/>
        </button>
        <button className="icon relative">
          <FaBell className="text-xl" />

          <span className="absolute -top-1 -right-1 bg-red-600 text-xs rounded-full size-5 grid place-items-center font-bold">
            3
          </span>
        </button>
        <button className="icon ">
          <RiAccountCircleLine className="text-2xl" />
        </button>
      </div>
    </header>
  );
};

export default Header;
