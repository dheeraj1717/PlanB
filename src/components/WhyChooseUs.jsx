import whyChooseUsData from "../constants/WhyChooseUsData.json";
const WhyChooseUs = () => {
  return (
    <div className="mx-auto max-w-[1440px] px-2 sm:px-4 xl:px-16  xl:mb-[10%]">
      <h1 className="text-[32px] font-bold text-[#0D0D0D] mt-[40%] sm:mt-[35%] md:mt-[20%] text-center sm:text-left">
        Why Choose Plan <span className="text-[#167989]">B</span>
      </h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-0 justify-items-center sm:justify-items-normal">
        {whyChooseUsData.map((data, index) => (
          <div className="flex flex-col gap-4 text-[#0D0D0D] items-center sm:items-start" key={index}>
            <img src={data.path} alt={data.title} className="h-[60px] w-[60px]" />
            <h2 className="font-bold mt-2 text-[17.27px] leading-[27px]">{data.title}</h2>
            <p className="text-sm max-w-[250px] leading-[28px] text-center sm:text-left">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
