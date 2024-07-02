import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import comp_logo1 from "../assets/comp_logo1.png";
import comp_logo2 from "../assets/comp_logo2.png";
import comp_logo3 from "../assets/comp_logo3.png";
import comp_logo4 from "../assets/comp_logo4.png";
import { HiMiniStopCircle } from "react-icons/hi2";
import {
  FaRegSmile,
  FaArrowCircleLeft,
  FaArrowCircleRight,
} from "react-icons/fa";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navigation></Navigation>
      {/* SECTION1 */}
      <div className="text-center py-14 flex flex-col justify-center items-center">
        <div className="font-bold text-6xl px-96 pb-8">
          Grow your Business with Digital Marketing
        </div>

        <div className="pb-8 px-96">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </div>

        <div className="bg-[#11B3BB] text-white font-semibold px-4 py-2 rounded-md w-[200px] mb-8">
          Get Started
        </div>

        <div>
          <img src={img1} alt="" className="rounded-lg" />
        </div>
      </div>

      {/* SECTION2 */}
      <div className="bg-[#1919B3] px-20 pt-20 pb-8">
        <div className="flex justify-between">
          <div>
            <img src={comp_logo1} alt="" />
          </div>
          <div>
            <img src={comp_logo2} alt="" />
          </div>
          <div>
            <img src={comp_logo3} alt="" />
          </div>
          <div>
            <img src={comp_logo4} alt="" />
          </div>
          <div>
            <img src={comp_logo2} alt="" />
          </div>
          <div>
            <img src={comp_logo1} alt="" />
          </div>
        </div>

        <div className="flex justify-between pt-24">
          <div className="w-1/2">
            <div>
              <div className="text-white text-4xl font-bold">
                Get More Customers with
              </div>
              <div className="text-white text-4xl font-bold">
                Digital Marketing.
              </div>
            </div>

            <div className="flex justify-between pt-8 gap-14">
              <div className="text-white p-4 w-1/2 hover:bg-[#4C4CE6] rounded-lg">
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

              <div className="text-white p-4 w-1/2 hover:bg-[#4C4CE6] rounded-lg">
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
              <div className="text-white p-4 w-1/2 hover:bg-[#4C4CE6] rounded-lg">
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

              <div className="text-white p-4 w-1/2 hover:bg-[#4C4CE6] rounded-lg">
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
            <div className="text-white text-lg pl-48">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="pl-72 py-24">
              <img src={img2} alt="" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION3 */}
      <div>
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
            <div className="text-5xl font-bold">
              Digital Marketing will give the
            </div>
            <div className="text-5xl font-bold">Best Results for you</div>
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

        <div className="flex justify-between px-24 py-14">
          <div className="w-3/5">
            <div className="text-5xl font-bold">
              Increase Sales using Technology and Marketing Strategies
            </div>
            <div className="py-14 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              viverra egestas orasi ultrices in turpis. Vel in nulla porttitor
              pellentesque lacus ridiculus tellus enim, ino. Dignissim elementum
              ac, consectetur nulla ultricies. Sed pellentesque lobortis nisi
              porttitor. Facilisis cursus iaculis quis amet magna pretium morbi
              pellentesque aru.
            </div>
            <div className="bg-[#11B3BB] text-white text-center font-semibold px-4 py-2 rounded-md w-[200px] mb-8">
              Get Started
            </div>
          </div>
          <div className="w-2/5">
            <div className="flex justify-end pt-4">
              <img
                src={img2}
                alt=""
                className="rounded-lg"
                style={{ width: "400px", height: "400px" }}
              />
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
      </div>

      {/* SECTION4 */}
      <div>
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

        <div className="flex px-24 pb-8">
          <div className="text-4xl font-bold flex-1">
            Meet Our Awesome Expert
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

      {/* SECTION5 */}
      <div>
        <div className="py-24 flex">
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

        <div className="flex px-24">
          <div className="w-1/2 pr-24 pt-14">
            <div className="text-4xl font-bold">
              Get in Touch with Us For Free Consultation!
            </div>
            <div className="py-8 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
              eget libero elementum amet ultricies ut hac ultrices ullamcorper.
              Enim nullam eu libero accumsan, nisl amet.
            </div>
          </div>
          <div className="w-1/2 px-20">
            <div>
              <label className="font-semibold text-xl">First Name</label>
            </div>
            <div>
              <input
                type="text"
                placeholder="Input your first name in here"
                className="border-2 w-full px-2 py-2 rounded-md"
              />
            </div>
            <div className="pt-4">
              <label className="font-semibold text-xl">Email Address</label>
            </div>
            <div>
              <input
                type="email"
                placeholder="Input your email address in here"
                className="border-2 w-full px-2 py-2 rounded-md"
              />
            </div>
            <div className="pt-4">
              <label className="font-semibold text-xl">Messages</label>
            </div>
            <div>
              <textarea
                placeholder="Write your messages in here"
                className="border-2 w-full px-2 py-2 rounded-md"
              ></textarea>
            </div>
            <div className="bg-[#11B3BB] text-white text-center font-semibold px-4 py-2 mt-4 rounded-md w-[200px] mb-8">
              Send Message
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
export default Home;
