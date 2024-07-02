import Navigation from "./Navigation";
import Footer from "./Footer";
import img4 from "../assets/img4.png";
import { FaSmile } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Pricing() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const data = [
    {
      question: "What services are provided?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur dui eu sit interdum. Ut pellentesque tincidunt justo eu quam nisl etiam. Integer eget enim, pulvinar sit turpis in. Tortor morbi tempus amet in volutpat amet convallis.",
    },
    {
      question: "Can the price in the pricing plan be changed?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur dui eu sit interdum. Ut pellentesque tincidunt justo eu quam nisl etiam. Integer eget enim, pulvinar sit turpis in. Tortor morbi tempus amet in volutpat amet convallis.",
    },
    {
      question: "What will be delivered? And When?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur dui eu sit interdum. Ut pellentesque tincidunt justo eu quam nisl etiam. Integer eget enim, pulvinar sit turpis in. Tortor morbi tempus amet in volutpat amet convallis.",
    },
    {
      question: "What often will results be reported?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur dui eu sit interdum. Ut pellentesque tincidunt justo eu quam nisl etiam. Integer eget enim, pulvinar sit turpis in. Tortor morbi tempus amet in volutpat amet convallis.",
    },
    {
      question: "How quickly will I start seeing results after working with?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur dui eu sit interdum. Ut pellentesque tincidunt justo eu quam nisl etiam. Integer eget enim, pulvinar sit turpis in. Tortor morbi tempus amet in volutpat amet convallis.",
    },
  ];

  return (
    <>
      <Navigation></Navigation>

      <div>
        <div>
          <div className="py-24 flex">
            <div className="px-24 pt-24">
              <div className="text-5xl font-bold">Our Pricing</div>
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
        </div>

        <div className="px-24">
          <div className="text-center text-5xl font-bold pb-8">
            Find the plan that’s right for you
          </div>
          <div className="text-center text-lg pb-14">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the{" "}
          </div>
          <div className="flex justify-around pb-14">
            <div className="p-8 hover:bg-[#4C4CE6] hover:text-white rounded-lg">
              <div className="text-5xl text-yellow-300 pb-4 flex justify-center">
                <div>
                  <FaSmile />
                </div>
              </div>
              <div className="text-center text-lg">Basic</div>
              <div className="text-center text-5xl font-semibold  pb-4 pt-2">
                $199
              </div>
              <div className="flex gap-4">
                <div className="pt-1">
                  <FaCheck />
                </div>
                <div>Social Media Marketing</div>
              </div>
              <div className="flex gap-4 py-2">
                <div className="pt-1">
                  <FaCheck />
                </div>
                <div>Content Marketing</div>
              </div>
              <div className="flex gap-4">
                <div className="pt-1">
                  <FaCheck />
                </div>
                <div>Pay-Per-Click Advertising</div>
              </div>
              <div className="flex gap-4 py-2">
                <div className="pt-1">
                  <FaCheck />
                </div>
                <div>Conversion Rate Optimization</div>
              </div>
              <div className="flex gap-4">
                <div className="pt-1">
                  <FaCheck />
                </div>
                <div>Advertising</div>
              </div>
              {/* <div className="border-blue-600 border-2 text-blue-600 hover:bg-[#11B3BB] hover:text-white hover:border-none rounded-lg text-center py-2 w-[120px] text-xl font-semibold"> */}
              <div className="flex justify-center">
                <div className="bg-[#11B3BB] text-white rounded-lg text-center py-2 w-[120px] text-xl font-semibold mt-6">
                  Large
                </div>
              </div>
            </div>

            <div className="p-8 hover:bg-[#4C4CE6] hover:text-white rounded-lg">
              <div className="text-5xl text-yellow-300 pb-4 flex justify-center">
                <div>
                  <FaSmile />
                </div>
              </div>
              <div className="text-center text-lg">Standard</div>
              <div className="text-center text-5xl font-semibold  pb-4 pt-2">
                $399
              </div>
              <div className="flex gap-4">
                <div className="pt-1">
                  <FaCheck />
                </div>
                <div>Social Media Marketing</div>
              </div>
              <div className="flex gap-4 py-2">
                <div className="pt-1">
                  <FaCheck />
                </div>
                <div>Content Marketing</div>
              </div>
              <div className="flex gap-4">
                <div className="pt-1">
                  <FaCheck />
                </div>
                <div>Pay-Per-Click Advertising</div>
              </div>
              <div className="flex gap-4 py-2">
                <div className="pt-1">
                  <FaCheck />
                </div>
                <div>Conversion Rate Optimization</div>
              </div>
              <div className="flex gap-4">
                <div className="pt-1">
                  <FaCheck />
                </div>
                <div>Advertising</div>
              </div>
              {/* <div className="border-blue-600 border-2 text-blue-600 hover:bg-[#11B3BB] hover:text-white hover:border-none rounded-lg text-center py-2 w-[120px] text-xl font-semibold"> */}
              <div className="flex justify-center">
                <div className="bg-[#11B3BB] text-white rounded-lg text-center py-2 w-[120px] text-xl font-semibold mt-6">
                  Large
                </div>
              </div>
            </div>

            <div className="p-8 hover:bg-[#4C4CE6] hover:text-white rounded-lg">
              <div className="text-5xl text-yellow-300 pb-4 flex justify-center">
                <div>
                  <FaSmile />
                </div>
              </div>
              <div className="text-center text-lg">Premium</div>
              <div className="text-center text-5xl font-semibold  pb-4 pt-2">
                $599
              </div>
              <div className="flex gap-4">
                <div className="pt-1">
                  <FaCheck />
                </div>
                <div>Social Media Marketing</div>
              </div>
              <div className="flex gap-4 py-2">
                <div className="pt-1">
                  <FaCheck />
                </div>
                <div>Content Marketing</div>
              </div>
              <div className="flex gap-4">
                <div className="pt-1">
                  <FaCheck />
                </div>
                <div>Pay-Per-Click Advertising</div>
              </div>
              <div className="flex gap-4 py-2">
                <div className="pt-1">
                  <FaCheck />
                </div>
                <div>Conversion Rate Optimization</div>
              </div>
              <div className="flex gap-4">
                <div className="pt-1">
                  <FaCheck />
                </div>
                <div>Advertising</div>
              </div>
              {/* <div className="border-blue-600 border-2 text-blue-600 hover:bg-[#11B3BB] hover:text-white hover:border-none rounded-lg text-center py-2 w-[120px] text-xl font-semibold"> */}
              <div className="flex justify-center">
                <div className="bg-[#11B3BB] text-white rounded-lg text-center py-2 w-[120px] text-xl font-semibold mt-6">
                  Large
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-24">
          <div className="text-center text-5xl font-bold pb-8">
            Pricing Plans
          </div>
          <div className="text-center text-lg pb-14">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the{" "}
          </div>

          <div className="container mx-auto py-8">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="w-1/4 py-2"></th>
                  <th className="w-1/4 py-2 bg-blue-100">
                    <div>Basic Plan</div>
                    <div>All the basic for starting new business</div>
                  </th>
                  <th className="w-1/4 py-2 bg-blue-100">
                    <div>Premium Plan</div>
                    <div>Premium features for your growing business</div>
                  </th>
                  <th className="w-1/4 py-2 bg-blue-100">
                    <div>Pro Plan</div>
                    <div>Advanced features for scaling up your business</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Monthly Plan</td>
                  <td className="border px-4 py-2">
                    <div className="text-center text-4xl text-[#4C4CE6] font-semibold pt-2 pb-4">
                      $29
                    </div>
                    <div className="flex justify-center">
                      <button className="bg-blue-500 text-white py-2 px-4 rounded">
                        Choose Plan
                      </button>
                    </div>
                  </td>
                  <td className="border px-4 py-2">
                    <div className="text-center text-4xl text-[#4C4CE6] font-semibold pt-2 pb-4">
                      $79
                    </div>
                    <div className="flex justify-center">
                      <button className="bg-blue-500 text-white py-2 px-4 rounded">
                        Choose Plan
                      </button>
                    </div>
                  </td>
                  <td className="border px-4 py-2">
                    <div className="text-center text-4xl text-[#4C4CE6] font-semibold pt-2 pb-4">
                      $299
                    </div>
                    <div className="flex justify-center">
                      <button className="bg-blue-500 text-white py-2 px-4 rounded">
                        Choose Plan
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Social Media Marketing</td>
                  <td className="border px-4 py-2">
                    <FaCheck className="text-green-500 mx-auto" />
                  </td>
                  <td className="border px-4 py-2">
                    <FaCheck className="text-green-500 mx-auto" />
                  </td>
                  <td className="border px-4 py-2">
                    <FaCheck className="text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Content Marketing</td>
                  <td className="border px-4 py-2">
                    <FaCheck className="text-green-500 mx-auto" />
                  </td>
                  <td className="border px-4 py-2">
                    <FaCheck className="text-green-500 mx-auto" />
                  </td>
                  <td className="border px-4 py-2">
                    <FaCheck className="text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Pay-Per-Click Advertising
                  </td>
                  <td className="border px-4 py-2">
                    <FaCheck className="text-green-500 mx-auto" />
                  </td>
                  <td className="border px-4 py-2">
                    <FaCheck className="text-green-500 mx-auto" />
                  </td>
                  <td className="border px-4 py-2">
                    <FaCheck className="text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Advertising</td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2">
                    <FaCheck className="text-green-500 mx-auto" />
                  </td>
                  <td className="border px-4 py-2">
                    <FaCheck className="text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Conversion Rate Optimization
                  </td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2">
                    <FaCheck className="text-green-500 mx-auto" />
                  </td>
                  <td className="border px-4 py-2">
                    <FaCheck className="text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Search Engine Optimization
                  </td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2">
                    <FaCheck className="text-green-500 mx-auto" />
                  </td>
                  <td className="border px-4 py-2">
                    <FaCheck className="text-green-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="px-24 py-24">
          <div className="text-center text-5xl font-bold pb-8">
            Frequently Asked Questions
          </div>
          
          <div className="text-center text-lg pb-14">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the{" "}
          </div>

          <div className="max-w-2xl mx-auto mt-8">
            {data.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-4 flex items-center justify-between bg-[#4C4CE6] text-white text-lg focus:outline-none py-8"
                >
                  <span>{item.question}</span>
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {activeIndex === index && (
                  <div className="px-4 bg-[#D2D2F8] mb-4 py-8">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
export default Pricing;
