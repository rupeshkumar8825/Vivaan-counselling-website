import { useEffect, useState } from "react";
import TopBannerCounsellingHelpDeskBanner from "../../assets/images/TopBanner/TopBannerCounsellingHelpDesk.png";
import TobBannerJoinWhatsappGroupBanner from "../../assets/images/TopBanner/TopBannerJoinWhatsappGroup.png";

// const TopBanner = () => {
//     return (
//         <div id="default-carousel" className="rounded-lg relative w-full" data-carousel="slide">
//             Carousel wrapper
//             <div className=" relative overflow-hidden rounded-lg h-20 sm:h-24 md:h-28 lg:h-36 xl:h-52">
//             <div className="relative overflow-hidden rounded-lg h-38 sm:h-30 md:h-34 lg:h-38 xl:h-80">
//                 Item 1
//                 <div className=" hidden duration-700 ease-in-out" data-carousel-item>
//                     <img src={TopBannerCounsellingHelpDeskBanner} className="absolute block h-20 sm:h-24 md:h-28 lg:h-36 xl:h-52 w-full object-cover" alt="Counselling Help Desk Banner" />
//                 </div>
//                 Item 2
//                 <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                     <img src={TobBannerJoinWhatsappGroupBanner} className="absolute block h-20 sm:h-24 md:h-28 lg:h-36 xl:h-52 w-full object-cover" alt="Join Whatsapp Group Banner" />
//                 </div>
//                 <div>
//                     some text here
//                 </div>
//                 Item 3
//                 <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                     <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full h-full object-cover" alt="..." />
//                 </div>
//                 Item 4
//                 <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                     <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full h-full object-cover" alt="..." />
//                 </div>
//                 Item 5
//                 <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                     <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full h-full object-cover" alt="..." />
//                 </div>
//             </div>
//             <!-- Slider indicators -->
//             <div className=" absolute z-30 flex -translate-x-1/2 bottom-0 sm:bottom-1 md:bottom-2 lg:bottom-3 xl:bottom-4 left-1/2 space-x-3 rtl:space-x-reverse">
//                 <button type="button" className="w-1 h-1 md:w-2 md:h-2 lg:w-3 lg:h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//                 <button type="button" className="w-1 h-1 md:w-2 md:h-2 lg:w-3 lg:h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        
//             </div>
//         </div>
//     );
// };


export interface ITopBanner {
    banners : any
    autoPlay : boolean
    autoPlayInterval : number
}

const banners = [
    TopBannerCounsellingHelpDeskBanner,
    TobBannerJoinWhatsappGroupBanner
]


const autoPlay = true;
const   autoPlayInterval = 3000;

const TopBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
        
          // Handle auto-play functionality
          useEffect(() => {
            console.log("the value recieved in the  in the carousel component is ", ) 
            if (autoPlay) {
              const interval = setInterval(() => {
                setCurrentSlide((prev : any) => (prev + 1) % banners.length);
              }, autoPlayInterval);
        
              return () => clearInterval(interval); // Cleanup on unmount
            }
          }, [autoPlay, autoPlayInterval, banners.length]);
        
          // Handle manual slide navigation
          const goToSlide = (index : number) => {
            setCurrentSlide(index);
          };
        
          const goToNextSlide = () => {
            setCurrentSlide((prev : any) => (prev + 1) % banners.length);
          };
        
          const goToPrevSlide = () => {
            setCurrentSlide((prev : any) => (prev - 1 + banners.length) % banners.length);
          };
        
    return (
        <>
            <div className=" bg-blue-forComponentBg rounded-xl">
            {/* Slides */}
                <div className="relative  h-20 sm:h-24 md:h-28 lg:h-36 xl:h-52 w-full">
                    {banners.map((banner : any, index : any) => (
                    <div
                        key={index}
                        className={` absolute inset-0 transition-opacity duration-700 overflow-hidden ${
                        index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                    >
                        <div className=" duration-700 ease-in-out" data-carousel-item>
                                <img src={banner} className="absolute block h-20 sm:h-24 md:h-28 lg:h-36 xl:h-52 w-full object-cover" alt="Counselling Help Desk Banner" />
                        </div>
                    </div>
                    ))}
                </div>

          </div>  

          {/* Navigation dots */}
      <div className=" border-2 border-white absolute z-45 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {banners.map((_ : any, index: any) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-2 md:w-2 lg:w-3 xl:w-4 sm:h-2 md:h-2 lg:h-3 xl:h-4 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevSlide}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-5 h-5 sm:w-5 md:w-7 lg:w-9 xl:w-10 sm:h-5 md:h-7 lg:h-9 xl:h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-2 h-2 sm:w-2 md:w-2 lg:w-3 xl:w-4 sm:h-2 md:h-2 lg:h-3 xl:h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1L1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-5 h-5 sm:w-5 md:w-7 lg:w-9 xl:w-10 sm:h-5 md:h-7 lg:h-9 xl:h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-2 h-2 sm:w-2 md:w-2 lg:w-3 xl:w-4 sm:h-2 md:h-2 lg:h-3 xl:h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1l4 4-4 4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>

        </>
    )
}

export default TopBanner;