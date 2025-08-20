import { FacebookIcon } from "lucide-react";

const About = () => {
     return (
          <div className="min-h-screen py-16 container mx-auto px-4">
               <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                    {/* Tall rectangle on the left */}
                    <div className="col-span-12 md:col-span-4 row-span-2 bg-gradient-to-br from-[#CAA986] to-[#94724e] rounded-3xl min-h-[250px] md:h-[600px]">
                         <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.081215310051!2d-73.8037287!3d45.4480195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc93c33f3de6e75%3A0x82864b119547e6bc!2sSalon%20Snob!5e0!3m2!1sen!2s!4v1754826355813!5m2!1sen!2s"
                              className="rounded-3xl w-full h-[250px] md:h-full"
                              loading="lazy"
                         ></iframe>
                    </div>

                    {/* Address card */}
                    <div className="col-span-12 md:col-span-3 bg-gradient-to-br from-[#CAA986] to-[#94724e] rounded-3xl py-5 px-6 flex flex-col items-center text-center">
                         <h1 className="text-xl md:text-2xl font-bold text-[#3A280D]">Address</h1>
                         <h1 className="text-base md:text-lg font-semibold text-[#3A280D] mb-2">
                              86 av. ashgrove,<br />
                              Pointe-Claire QC <br />
                              H9R 3N4
                         </h1>
                         <h1 className="text-xl md:text-2xl font-bold text-[#3A280D]">Phone</h1>
                         <p className="text-base md:text-lg font-semibold text-[#3A280D]">
                              (514) 693-3660
                         </p>
                         <button
                              onClick={() =>
                                   window.open("https://web.facebook.com/salonsnob?_rdc=1&_rdr#", "_blank")
                              }
                              className="bg-[#ab6937] rounded-full h-10 w-10 sm:h-12 sm:w-12 mt-4 text-white flex items-center justify-center hover:bg-[#AB642E] shadow-[#5d3618] shadow-lg mb-5"
                         >
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 320 512"
                                   className="h-7 w-6 fill-white" >
                                   <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H293V6.26S268.91 0 245.45 0c-73.1 0-121.1 44.38-121.1 124.72v70.62H86.41V288h38.01v224h92.66V288z" />
                              </svg>
                         </button>
                    </div>

                    {/* Hours card */}
                    <div className="col-span-12 md:col-span-5 bg-gradient-to-br from-[#94724e] to-[#CAA986] rounded-3xl py-5 px-6 flex flex-col items-center text-center">
                         <h1 className="text-xl md:text-2xl font-bold text-[#3A280D]">Hours</h1>
                         <p className="text-sm md:text-lg font-semibold text-[#3A280D]">Monday - Closed</p>
                         <p className="text-sm md:text-lg font-semibold text-[#3A280D]">Tuesday - Closed</p>
                         <p className="text-sm md:text-lg font-semibold text-[#3A280D]">Wednesday - 10 a.m – 6 p.m</p>
                         <p className="text-sm md:text-lg font-semibold text-[#3A280D]">Thursday - 10 a.m – 6 p.m</p>
                         <p className="text-sm md:text-lg font-semibold text-[#3A280D]">Friday - 10 a.m – 6 p.m</p>
                         <p className="text-sm md:text-lg font-semibold text-[#3A280D]">Saturday - 9 a.m – 5 p.m</p>
                         <p className="text-sm md:text-lg font-semibold text-[#3A280D]">Sunday - 10 a.m – 3 p.m</p>
                    </div>

                    {/* Esthetics Partner */}
                    <div className="col-span-12 md:col-span-5 bg-gradient-to-br from-[#94724e] to-[#CAA986] rounded-3xl py-5 px-6 flex flex-col items-center text-center">
                         <h1 className="text-xl md:text-2xl font-bold text-[#3A280D]">Esthetics Partner</h1>
                         <img src="./images/Partners.png" alt="Partner" className="h-[120px] sm:h-[180px] object-contain" />
                    </div>

                    {/* Bottom wide rectangle */}
                    <div className="col-span-12 md:col-span-3 bg-gradient-to-br from-[#CAA986] to-[#94724e] rounded-3xl py-5 px-6 flex flex-col items-center text-center">
                         <p className="text-sm md:text-lg font-semibold text-[#3A280D]">
                              Open every Thursday & Friday only<br />
                              To book an appointment: <br /> (514) 824-7487‬ or online
                         </p>
                         <button
                              onClick={() =>
                                   window.open(
                                        "https://square.site/book/A1EM1GFGTB1D1/espace-beaute-sublimage-pte-claire-or-st-clet-qc",
                                        "_blank"
                                   )
                              }
                              className="bg-[#ab6937] rounded-full h-10 sm:h-11 w-32 sm:w-40 mt-6 text-white text-sm sm:text-lg font-WorkSans-Italic hover:bg-[#AB642E] shadow-[#5d3618] shadow-lg"
                         >
                              Click Here
                         </button>

                         <button
                              onClick={() =>
                                   window.open("https://www.facebook.com/Espace-Beaut%C3%A9-Sublimage-1666547203419601/", "_blank")
                              }
                              className="bg-[#ab6937] rounded-full h-10 w-10 sm:h-12 sm:w-12 mt-4 text-white flex items-center justify-center hover:bg-[#AB642E] shadow-[#5d3618] shadow-lg mb-5"
                         >
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 320 512"
                                   className="h-7 w-6 fill-white" >
                                   <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H293V6.26S268.91 0 245.45 0c-73.1 0-121.1 44.38-121.1 124.72v70.62H86.41V288h38.01v224h92.66V288z" />
                              </svg>
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default About;
