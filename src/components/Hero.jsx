import HeroPlanB from "../../public/assets/HeroPlanB.jpeg";

const Hero = () => {
  return (
    <div className="relative w-full h-[30vh] sm:h-[75vh] lg:h-[80vh]">
      {/* Gradient*/}
      <div
        className="absolute top-0 left-0 w-full h-[150px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0) 100%)",
        }}
      ></div>

      <img
        src={HeroPlanB}
        alt="Travel to Jordan"
        className="w-full h-full object-cover"
      />

      {/* Overlay Text */}
      <button className="absolute text-[20px] sm:text-[24px] md:text-[40px] bottom-[10%] md:bottom-[3%] left-[5%] bg-[#0D0D0DB2] opacity-70 text-white rounded-[20px] md:rounded-[30px] text-2xl font-bold w-[180px] h-[60px] sm:w-[200px] sm:h-[80px] md:w-[440px] md:h-[160px] cursor-pointer">
        <span className="z-10">Travel To Jordan</span>
      </button>
    </div>
  );
};

export default Hero;
