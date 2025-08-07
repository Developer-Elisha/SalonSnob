import ChairScene from "./Canvas/ChairScene";

const Hero = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-br from-[#CAA986] to-[#94724e] my-10 w-[90%] rounded-4xl h-full flex flex-col-reverse md:flex-row items-center shadow-[#5d3618] shadow-md">
        
        {/* TEXT SECTION */}
        <div className="w-full md:w-[60%] justify-start items-center px-6 md:px-14 py-10">
          <a href="#hairsalon" className="flex items-center gap-2 mb-4">
            <img src="/images/favicon.png" alt="logo" className="w-10 h-10 -mr-3" />
            <p className="text-4xl sm:text-5xl md:text-6xl mt-2 font-allura">alon Snob</p>
          </a>

          <p className="text-base sm:text-md md:text-lg font-WorkSans-Italic px-2 sm:px-5">
            Located in Pointe-Claire, Snob Salon is the new trendy Hair Lounge Salon from the esteemed hairdresser Vasko.
          </p>

          <br />

          <p className="text-base sm:text-md md:text-lg font-Liberty-Regular px-2 sm:px-5">
            Snob Salon offers innovative cuts, unique color concepts, advanced chemical treatments, and a professional lounge atmosphere without the pretentious mood. Salon Snob is open 5 days a week and is open late nights every Thursday & Friday.
          </p>

          <div className="flex flex-col sm:flex-row mt-10 gap-4 sm:gap-0">
            <div className="sm:w-1/2 mt-2 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-Liberty-Regular text-[#3A280D] px-5 sm:px-10">Visit Our Salon</h1>
            </div>

            <div className="sm:w-1/2 text-center sm:text-left">
              <button className="bg-[#ab6937] rounded-full h-13 w-60 text-white mx-auto sm:mx-10 text-lg sm:text-xl font-WorkSans-Italic cursor-pointer hover:bg-[#AB642E] shadow-[#5d3618] shadow-lg">
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* 3D CANVAS SECTION */}
        <div className="w-full md:w-[40%] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] p-4 md:py-20">
          <ChairScene />
        </div>
      </div>
    </div>
  );
};

export default Hero;
