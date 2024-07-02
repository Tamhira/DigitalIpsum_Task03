import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navigation() {
  return (
    <>
      <div className="flex justify-between items-center px-20 py-4">
        <div>
          <img src={logo} alt="" style={{ width: "160px", height: "35px" }} />
        </div>

        <div className="max-sm:hidden flex gap-12  items-center py-2">
          <div className="font-medium">Home</div>
          <div className="font-medium">Services</div>
          <div className="flex gap-1">
            <div className="font-medium">Pages</div>
            <div className="pt-1 pl-1">
              <FaAngleDown />
            </div>
          </div>
          <div className="font-medium">About</div>
          <div className="font-medium">Contact</div>        
        </div>

        <div className="flex lg:gap-12">
          <div className="font-semibold py-2 text-2xl"><FaSearch /></div>
          <div className="bg-[#11B3BB] text-white font-semibold px-4 py-2 rounded-md">
            Start Project
          </div>
        </div>
      </div>
    </>
  );
}
export default Navigation;
