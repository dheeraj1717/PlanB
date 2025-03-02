import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
import { footerLinks, footerTop } from "../constants/FooterData";

const Footer = () => {
  return (
    <div
      className="mt-20 bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/FooterImages/footer.jpeg')",
        backgroundSize: "100% 100%",
      }}
    >
      {/* Footer Top Section */}
      <div className="bg-[#167989] flex flex-col lg:flex-row sm:grid lg:flex justify-between sm:grid-cols-2 md:grid-cols-4 py-6 px-8 lg:px-16 gap-y-4 md:gap-0 items-center">
        {footerTop.map((item, index) => (
          <div className="flex flex-col items-center text-center" key={index}>
            <img
              src={item.imagePath}
              alt={item.title}
              className="w-[25px] md:w-[35px] h-[25px] md:h-[35px]"
            />
            <p className="text-[#FFFFFF] font-medium text-[14px] sm:text-[18px] leading-[21px] mt-2">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Links Section */}
      <div className="py-12 px-10 md:py-20 md:px-16">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-[15%] lg:gap-[20%] lg:px-10">
          <div className="relative max-w-[300px]">
            <img
              src="/assets/PlanBLogo.png"
              alt="PlanB"
              className="w-[300px] h-[140px]"
            />
            <img
              src="/assets/FooterImages/beyond.png"
              alt="beyond"
              className="w-[120px] absolute -right-5 top-1/3"
            />
          </div>

          <div className="flex flex-col text-center sm:text-left sm:flex-row gap-12 lg:gap-16 mt-5 md:mt-0">
            {Object.values(footerLinks).map((section, index) => (
              <div className="flex flex-col" key={index}>
                <h3 className="text-[18px] sm:text-[21px] font-bold text-[#0D0D0D]">
                  {section.title}
                </h3>
                <ul className="mt-3 sm:mt-4 space-y-2 text-[16px] sm:text-[18px]">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.path} className="text-white transition">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 md:mt-16 flex flex-col items-center gap-6  md:flex-row justify-between md:pr-10">
          <p className="text-[16px] sm:text-[18px] font-medium leading-[22.5px] max-w-[500px] text-white text-center md:text-left">
            Plan <span className="text-[#167989] font-medium">B</span> Travel
            Tourism is a Customer-Oriented Organization Offering Professional,
            World-Class Tourism Solutions.
          </p>
          <div className="flex gap-6">
            <div className="text-white bg-black p-2 w-10 h-10 flex items-center justify-center rounded-full">
              <Instagram />
            </div>
            <div className="text-white bg-black p-2 w-10 h-10 flex items-center justify-center rounded-full">
              <Facebook />
            </div>
            <div className="text-white bg-black p-2 w-10 h-10 flex items-center justify-center rounded-full">
              <Mail />
            </div>
            <div className="text-white bg-black p-2 w-10 h-10 flex items-center justify-center rounded-full">
              <Youtube />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
