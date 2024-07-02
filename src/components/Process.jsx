import Navigation from "./Navigation";
import Footer from "./Footer";
import img2 from "../assets/img2.png";
import img4 from "../assets/img4.png";
import img3 from "../assets/img3.png";
import img6 from "../assets/img6.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import {
  FaRegSmile,
  FaArrowCircleLeft,
  FaArrowCircleRight,
} from "react-icons/fa";
import { HiMiniStopCircle } from "react-icons/hi2";

function Process() {
  return (
    <>
      <Navigation></Navigation>
      <div>
        <div className="py-24 flex">
          <div className="px-24 pt-24">
            <div className="text-5xl font-bold">Our Process</div>
            <div className="py-8 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex justify-end">
              <img
                src={img4}
                alt=""
                style={{ width: "600px", height: "350px" }}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between px-24">
          <div className="w-1/2">
            <div>
              <div className=" text-4xl font-bold">
                Get More Customers with
              </div>
              <div className="text-4xl font-bold">
                Digital Marketing.
              </div>
            </div>

            <div className="flex justify-between pt-8 gap-14">
              <div className=" p-4 w-1/2 hover:bg-[#4C4CE6] rounded-lg hover:text-white">
                <div className="text-3xl">
                  <FaRegSmile />
                </div>
                <div className="py-4 text-2xl font-bold ">
                  Pay-Per-Click Advertising
                </div>
                <div className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                  tellus amet enim ultrices eget viverra lacus.{" "}
                </div>
              </div>

              <div className="p-4 w-1/2 hover:bg-[#4C4CE6] rounded-lg hover:text-white">
                <div className="text-3xl">
                  <FaRegSmile />
                </div>
                <div className="py-4 text-2xl font-bold">
                  Paid Social Media Advertising
                </div>
                <div className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                  tellus amet enim ultrices eget viverra lacus.{" "}
                </div>
              </div>
            </div>

            <div className="flex justify-between py-8 gap-14">
              <div className="p-4 w-1/2 hover:bg-[#4C4CE6] rounded-lg hover:text-white">
                <div className="text-3xl">
                  <FaRegSmile />
                </div>
                <div className="py-4 text-2xl font-bold">
                  Social Media Platform Marketing
                </div>
                <div className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                  tellus amet enim ultrices eget viverra lacus.{" "}
                </div>
              </div>

              <div className="p-4 w-1/2 hover:bg-[#4C4CE6] rounded-lg hover:text-white">
                <div className="text-3xl">
                  <FaRegSmile />
                </div>
                <div className="py-4 text-2xl font-bold">
                  Search Engine Optimization
                </div>
                <div className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                  tellus amet enim ultrices eget viverra lacus.{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div className="text-lg pl-48">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="pl-72 py-24">
              <img src={img2} alt="" className="rounded-lg" />
            </div>
          </div>
        </div>

        <div className="flex justify-between px-24 py-14">
          <div className="w-2/5">
            <div className="flex pt-4">
              <img
                src={img2}
                alt=""
                className="rounded-lg"
                style={{ width: "400px", height: "400px" }}
              />
            </div>
          </div>
          <div className="w-3/5">
            <div className="text-5xl font-bold">The process becoming a </div>
            <div className="text-5xl font-bold">digital marketing agency</div>
            <div className="pt-8">
              <div className="text-lg text-blue-800 font-bold">01</div>
              <div className="text-xl font-bold">Creativity</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                viverra egestas ultrices in turpis.
              </div>
            </div>
            <div className="py-8">
              <div className="text-lg text-blue-800 font-bold">02</div>
              <div className="text-xl font-bold">Communication</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                viverra egestas ultrices in turpis.
              </div>
            </div>
            <div>
              <div className="text-lg text-blue-800 font-bold">03</div>
              <div className="text-xl font-bold">Professional</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                viverra egestas ultrices in turpis.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-purple-400 p-24 flex justify-between">
          <div className="text-4xl font-bold pr-96">
            Connect your customer with our services, wanna see?
          </div>
          <div className="text-6xl pr-24">
            <HiMiniStopCircle />
          </div>
        </div>

        <div className="p-24">
          <div className="text-5xl font-bold pb-14">
            Get Started with 4 Easy Steps
          </div>
          <div className="flex gap-8">
            <div className="p-4 w-1/2 hover:bg-[#4C4CE6] hover:text-white rounded-lg">
              <div className="text-3xl">
                <FaRegSmile />
              </div>
              <div className="py-4 text-3xl font-bold">
                Pay-Per-Click Advertising
              </div>
              <div className="text-justify text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                tellus amet enim ultrices eget viverra lacus.{" "}
              </div>
            </div>
            <div className="p-4 w-1/2 hover:bg-[#4C4CE6] hover:text-white rounded-lg">
              <div className="text-3xl">
                <FaRegSmile />
              </div>
              <div className="py-4 text-3xl font-bold">
                Pay-Per-Click Advertising
              </div>
              <div className="text-justify text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                tellus amet enim ultrices eget viverra lacus.{" "}
              </div>
            </div>
            <div className="p-4 w-1/2 hover:bg-[#4C4CE6] hover:text-white rounded-lg">
              <div className="text-3xl">
                <FaRegSmile />
              </div>
              <div className="py-4 text-3xl font-bold">
                Pay-Per-Click Advertising
              </div>
              <div className="text-justify text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                tellus amet enim ultrices eget viverra lacus.{" "}
              </div>
            </div>
            <div className="p-4 w-1/2 hover:bg-[#4C4CE6] hover:text-white rounded-lg">
              <div className="text-3xl">
                <FaRegSmile />
              </div>
              <div className="py-4 text-3xl font-bold">
                Pay-Per-Click Advertising
              </div>
              <div className="text-justify text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                tellus amet enim ultrices eget viverra lacus.{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#4C4CE6] px-24 py-14 text-white">
          <div className="text-5xl font-semibold text-center">
            Sign Up for Our
          </div>
          <div className="text-5xl font-semibold text-center"> Newsletters</div>
          <div className="py-8 text-lg text-center">
            Get the latest articles to your inbox
          </div>
          <div className="flex justify-center items-center gap-4">
            <div>
              <input
                type="text"
                placeholder="Input your email address in here"
                className="px-4 py-2 w-[300px] rounded-lg"
              />
            </div>
            <div className="text-5xl text-[#11B3BB]">
              <IoIosArrowDroprightCircle />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Process;
