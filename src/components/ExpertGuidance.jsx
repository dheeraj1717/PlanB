import expertGuidanceData from "../constants/ExpertGuidanceData.json";
import expertGuidance1 from "../../public/assets/expertGuidance-1.png";
import expertGuidance2 from "../../public/assets/expertGuidance-2.png";
  
  const ExpertGuidance = () => {
    return (
      <div className="mt-24 relative flex flex-col items-center max-w-[1440px] mx-auto px-3 md:px-4 xl:px-8">
        {/* Container for only the heading and horizontal line */}
        <div className="relative w-full flex justify-center">
          <h1 className="text-[#167989] text-3xl sm:text-4xl font-bold text-center relative z-10 bg-white px-[5%] sm:px-[10%]">
            Expert Guidance
          </h1>
          <div className="w-[92vw] h-[3px] bg-[#8A889033] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
  
       <div className="flex flex-col md:flex-row items-center md:items-start md:justify-around w-full mt-10 sm:mt-20">
       <div className="flex flex-col gap-8 items-center text-center sm:text-left">
          {expertGuidanceData.map((item) => (
            <div key={item.id} className="flex flex-col gap-6 justify-items-center">
              <div className="flex flex-col gap-3">
                <div className="bg-[#167989] w-[71px] h-[31px] rounded-[15px] relative mx-auto sm:mx-0">
                  <span className="text-[#8A8890] bg-white rounded-full h-6 w-6 inline-block text-center absolute top-1/2 left-4 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-[18px]">
                    {item.id}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl text-[#0D0D0D] font-bold -mt-1">
                  {item.title}
                </h2>
                <p className="text-[#8A8890] text-[15px] leading-[18px] max-w-[380px] xl:max-w-[460px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Images */}
        <div className="relative mt-16 sm:mt-10 ml-[30%] sm:ml-[25%]">
          <img src={expertGuidance1} alt="" className="rounded-[20px] w-[200px] h-[150px] sm:w-[300px] sm:h-[260px] lg:w-[380px] lg:h-[304px]"/>
          <img src={expertGuidance2} alt="" className="rounded-[20px] w-[200px] h-[150px] sm:w-[300px] sm:h-[260px] lg:w-[380px] lg:h-[304px] absolute top-[40px] sm:top-[80px] right-[120px]  sm:right-[220px] transform translate-y-1/2 border-[6px] sm:border-[9px] border-white"/>
        </div>
       </div>
      </div>
    );
  };
  
  export default ExpertGuidance;
  