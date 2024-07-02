import Navigation from "./Navigation";
import Footer from "./Footer";
import img2 from "../assets/img2.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import { FaRegSmile } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function DigitalMarketing() {
  return (
    <>
      <Navigation></Navigation>
      <div>
        <div className="py-24 flex">
          <div className="px-24 pt-24">
            <div className="text-5xl font-bold"> Digital Marketing</div>
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
            <div className="text-5xl font-bold">The best internet</div>
            <div className="text-5xl font-bold">optimization for you</div>
            <div className="pt-8">
              <div className="text-lg text-blue-800 font-bold">01</div>
              <div className="text-xl font-bold">Develop the Best Ideas</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                viverra egestas ultrices in turpis.
              </div>
            </div>
            <div className="py-8">
              <div className="text-lg text-blue-800 font-bold">02</div>
              <div className="text-xl font-bold">Build a Dream Projects</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                viverra egestas ultrices in turpis.
              </div>
            </div>
            <div>
              <div className="text-lg text-blue-800 font-bold">03</div>
              <div className="text-xl font-bold">
                Handled by Professional Team
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                viverra egestas ultrices in turpis.
              </div>
            </div>
          </div>
        </div>

        <div className="px-24">
          <div className="text-5xl font-bold w-1/2 py-8">
            Get More Customers with Digital Marketing.
          </div>
          <div className="flex justify-between pt-8 gap-14">
            <div className="p-4 w-1/2 hover:bg-[#4C4CE6] hover:text-white rounded-lg">
              <div className="text-3xl">
                <FaRegSmile />
              </div>
              <div className="py-4 text-2xl font-bold">
                Pay-Per-Click Advertising
              </div>
              <div className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                tellus amet enim ultrices eget viverra lacus.{" "}
              </div>
            </div>

            <div className="p-4 w-1/2 hover:bg-[#4C4CE6]  hover:text-white rounded-lg">
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

            <div className="p-4 w-1/2 hover:bg-[#4C4CE6]  hover:text-white rounded-lg">
              <div className="text-3xl">
                <FaRegSmile />
              </div>
              <div className="py-4 text-2xl font-bold">
                Pay-Per-Click Advertising
              </div>
              <div className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                tellus amet enim ultrices eget viverra lacus.{" "}
              </div>
            </div>
          </div>

          <div className="flex justify-between py-8 gap-14">
            <div className="p-4 w-1/2 hover:bg-[#4C4CE6]  hover:text-white rounded-lg">
              <div className="text-3xl">
                <FaRegSmile />
              </div>
              <div className="py-4 text-2xl font-bold">
                Pay-Per-Click Advertising
              </div>
              <div className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                tellus amet enim ultrices eget viverra lacus.{" "}
              </div>
            </div>

            <div className="p-4 w-1/2 hover:bg-[#4C4CE6]  hover:text-white rounded-lg">
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

            <div className="p-4 w-1/2 hover:bg-[#4C4CE6]  hover:text-white rounded-lg">
              <div className="text-3xl">
                <FaRegSmile />
              </div>
              <div className="py-4 text-2xl font-bold">
                Pay-Per-Click Advertising
              </div>
              <div className="text-justify">
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

        <div className="flex justify-between px-24 py-14">
          <div className="w-3/5">
            <div className="text-5xl font-bold">The internet is changing</div>
            <div className="text-5xl font-bold">the way you do business.</div>
            <div className="pt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              viverra egestas orasi ultrices in turpis. Vel in nulla porttitor
              pellentesque lacus ridiculus tellus enim, ino. Dignissim elementum
              ac, consectetur nulla ultricies. Sed pellentesque lobortis nisi
              porttitor. Facilisis cursus iaculis quis amet magna pretium morbi
              pellentesque aru.
            </div>
            <div className="flex gap-8 pt-14">
              <div className="pt-1 text-5xl text-[#4C4CE6]">
                <FaRegSmile />
              </div>
              <div className="text-5xl font-semibold text-[#4C4CE6]">80%</div>
              <div>
                <div>Increase traffic </div>
                <div>Web view</div>
              </div>
            </div>
            <div className="flex gap-8 pt-14">
              <div className="pt-1 text-5xl text-[#4C4CE6]">
                <FaRegSmile />
              </div>
              <div className="text-5xl font-semibold text-[#4C4CE6]">80%</div>
              <div>
                <div>Increase traffic </div>
                <div>Web view</div>
              </div>
            </div>
          </div>
          <div className="w-2/5">
            <div className="flex pt-4 justify-end">
              <img
                src={img2}
                alt=""
                className="rounded-lg"
                style={{ width: "400px", height: "500px" }}
              />
            </div>
          </div>
        </div>

        <div className="px-24">
          <div className="text-5xl font-bold w-1/2 py-8">
            Our Latest Project
          </div>
          <div className="flex gap-8 pb-24">
            <div>
              <div>
                <img src={img5} alt="" />
              </div>
              <div className="pt-2 text-xl font-semibold">
                Social Media Post - Aqwa
              </div>
            </div>
            <div>
              <div>
                <img src={img5} alt="" />
              </div>
              <div className="pt-2 text-xl font-semibold">
                SEO - Dunia Marketing Industry
              </div>
            </div>
            <div>
              <div>
                <img src={img5} alt="" />
              </div>
              <div className="pt-2 text-xl font-semibold">
                Email Marketing - Cinta Karya
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default DigitalMarketing;
