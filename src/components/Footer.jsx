import logo2 from "../assets/logo2.png";

function Footer() {
  return (
    <>
      <div className="bg-[#1919B3] px-24 py-14 text-white">
        <div className="flex">
        <div className="w-1/2">
          <div>
            <img src={logo2} alt="" />
          </div>
          <div className="text-lg pt-8 w-[350px]">
            OurStudio is a digital agency UI / UX Design and Website Development
            located in Ohio, United States of America
          </div>
        </div>
        <div className="w-1/2 pt-14">
            <div className="flex gap-14 text-lg">
                <div>Careers</div>
                <div>About Us</div>
                <div>Services</div>
                <div>Pricing</div>
                <div>FAQs</div>
            </div>
            <div className="flex gap-8 text-lg pt-4">
                <div>Blog</div>
                <div>Newsletter</div>
                <div>Press</div>
                <div>support@tanahair.com</div>
                <div>+1234 5678 90</div>
            </div>
        </div>
        </div>
        <hr className=" bg-white h-[0.10rem] w-full mt-14 mb-6" />
        <div>Copyright Tanah Air Studio</div>
      </div>
    </>
  );
}

export default Footer;
