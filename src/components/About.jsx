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

function About() {
  return (
    <>
      <Navigation></Navigation>
      <div>
        <div className="py-24 flex">
          <div className="px-24 pt-24">
            <div className="text-5xl font-bold">About Us</div>
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
            <div className="text-5xl font-bold">We have worked with </div>
            <div className="text-5xl font-bold">1000+ companies</div>
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

        <div className="bg-[#4C4CE6] px-24 text-white flex justify-between p-14 gap-14">
          <div className="text-white p-4 w-1/2 hover:bg-[#7979EC] rounded-lg">
            <div className="text-3xl">
              <FaRegSmile />
            </div>
            <div className="py-4 text-6xl font-bold">2.000+</div>
            <div className="text-justify">Project Completed</div>
          </div>

          <div className="text-white p-4 w-1/2 hover:bg-[#7979EC] rounded-lg">
            <div className="text-3xl">
              <FaRegSmile />
            </div>
            <div className="py-4 text-6xl font-bold">12.000+</div>
            <div className="text-justify">Active User</div>
          </div>

          <div className="text-white p-4 w-1/2 hover:bg-[#7979EC] rounded-lg">
            <div className="text-3xl">
              <FaRegSmile />
            </div>
            <div className="py-4 text-6xl font-bold">12</div>
            <div className="text-justify">Office in ASEAN</div>
          </div>

          <div className="text-white p-4 w-1/2 hover:bg-[#7979EC] rounded-lg">
            <div className="text-3xl">
              <FaRegSmile />
            </div>
            <div className="py-4 text-6xl font-bold">1.500+</div>
            <div className="text-justify">Happy Clients</div>
          </div>
        </div>

        <div className="p-24">
          <div className="flex justify-center items-center">
            <div className="w-1/3 text-center">June 19th, 1998</div>
            <div className="w-1/3">
              <div className="text-2xl font-semibold">
                Based on a small scale in Jakarta, Indonesia
              </div>
              <div className="text-justify">
                SeaWire Web is a wireframe kit that has more than 15 popular
                categories and more than 200 screens from each category, SeaWire
                Web deserves to be your partner in working on projects.
              </div>
            </div>
            <div className="w-1/3 flex justify-center">
              <div>
                <img src={img6} alt="" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center py-14">
            <div className="w-1/3 text-center">June 19th, 1998</div>
            <div className="w-1/3">
              <div className="text-2xl font-semibold">
                Based on a small scale in Jakarta, Indonesia
              </div>
              <div className="text-justify">
                SeaWire Web is a wireframe kit that has more than 15 popular
                categories and more than 200 screens from each category, SeaWire
                Web deserves to be your partner in working on projects.
              </div>
            </div>
            <div className="w-1/3 flex justify-center">
              <div>
                <img src={img6} alt="" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-1/3 text-center">June 19th, 1998</div>
            <div className="w-1/3">
              <div className="text-2xl font-semibold">
                Based on a small scale in Jakarta, Indonesia
              </div>
              <div className="text-justify">
                SeaWire Web is a wireframe kit that has more than 15 popular
                categories and more than 200 screens from each category, SeaWire
                Web deserves to be your partner in working on projects.
              </div>
            </div>
            <div className="w-1/3 flex justify-center">
              <div>
                <img src={img6} alt="" />
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-14">
          <div className="bg-[#11B3BB] text-white font-semibold px-4 py-2 rounded-md w-[150px] mb-8 text-center">
            View More
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

        <div className="py-24">
          <div className="flex px-24 pb-8">
            <div className="text-4xl font-bold flex-1">
              Meet Our Awesome Team
            </div>
            <div className="flex text-right text-3xl gap-2">
              <div className="text-[#11B3BB] text-4xl">
                <FaArrowCircleLeft />
              </div>
              <div className="text-[#11B3BB] text-4xl">
                <FaArrowCircleRight />
              </div>
            </div>
          </div>

          <div className="px-24 flex justify-between">
            <div className="hover:bg-[#4C4CE6] rounded-md p-4">
              <div>
                <img
                  src={img3}
                  alt=""
                  style={{ width: "250px", height: "250px" }}
                  className="rounded-md"
                />
              </div>
              <div className="text-xl font-bold py-2">Alex Dimong</div>
              <div>Founder</div>
            </div>
            <div className="hover:bg-[#4C4CE6] rounded-md p-4">
              <div>
                <img
                  src={img3}
                  alt=""
                  style={{ width: "250px", height: "250px" }}
                  className="rounded-md"
                />
              </div>
              <div className="text-xl font-bold py-2">Alex Dimong</div>
              <div>Founder</div>
            </div>
            <div className="hover:bg-[#4C4CE6] rounded-md p-4">
              <div>
                <img
                  src={img3}
                  alt=""
                  style={{ width: "250px", height: "250px" }}
                  className="rounded-md"
                />
              </div>
              <div className="text-xl font-bold py-2">Alex Dimong</div>
              <div>Founder</div>
            </div>
            <div className="hover:bg-[#4C4CE6] rounded-md p-4">
              <div>
                <img
                  src={img3}
                  alt=""
                  style={{ width: "250px", height: "250px" }}
                  className="rounded-md"
                />
              </div>
              <div className="text-xl font-bold py-2">Alex Dimong</div>
              <div>Founder</div>
            </div>
          </div>
        </div>

        <div className=" flex">
          <div className="w-1/2">
            <img
              src={img4}
              alt=""
              style={{ width: "780px", height: "400px" }}
            />
          </div>
          <div className="w-1/2 bg-[#1919B3] p-14 text-white">
            <div className="text-3xl font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
              magna venenatis sed urna sit malesuada ut tellus.
            </div>
            <div className="pt-14 text-lg font-bold">Jessica Albagir</div>
            <div>Product Designer</div>
            <div className="flex text-right text-3xl gap-2 pt-8 justify-end">
              <div className="text-[#11B3BB] text-4xl">
                <FaArrowCircleLeft />
              </div>
              <div className="text-[#11B3BB] text-4xl">
                <FaArrowCircleRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default About;
