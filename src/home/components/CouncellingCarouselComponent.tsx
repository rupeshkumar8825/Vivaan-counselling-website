// // this is carousel component
// import callSupport from "../../assets/images/first.svg"
// import personalizedChoiceFilling from "../../assets/images/second.svg"
// import dailyGoogleMeet from "../../assets/images/third.svg"
// import whatsAppGroupChat from "../../assets/images/fourth.svg"
// import dailyDoubtSolvingSession from "../../assets/images/fifth.svg"
// import completeGuidanceTillAdmission from "../../assets/images/sixth.svg"

// import BannerComponent from "../../components/BannerComponent"
// import { useState } from "react"
// import EnrollCounsellingBannerComponent from "./EnrollCounsellingBannerComponent"

// const CounsellingCarouselComponent = () => {

//     const [windowActive, setWindowActive] = useState<boolean>(false)
    
//     const getCounsellingEventHandler = () => {
//         console.log("The button has been clicked")
//         setWindowActive(true)
//     }

//     const closeLoginFormPagePopUpHandler = () => {
//         console.log("The close button has been clicked")
//         setWindowActive(false)
//     }

//     return (
//         <>
//             <div className=" m-0 sm:m-2 md:4 lg:6 xl:8  rounded-xl w-full  ">
//                 <div id="default-carousel" className="relative w-full" data-carousel="slide">
//                     <div className="relative h-56 overflow-hidden rounded-lg md:h-96 ">
//                         <BannerComponent bannerText1="Personalised Choice Filling Pdf" bannerText2="According to your rank" bannerImage={personalizedChoiceFilling} bannerButtonWidth="44" bannerButtonName="Get Councelling" bannerButttonEventHandler={getCounsellingEventHandler}></BannerComponent>
//                         <BannerComponent bannerText1="Daily Google Meet" bannerText2="For Doubt Session" bannerImage={dailyGoogleMeet} bannerButtonWidth="44" bannerButtonName="Get Councelling" bannerButttonEventHandler={getCounsellingEventHandler}></BannerComponent>
//                         <BannerComponent bannerText1="Call Support " bannerText2="Ask Unlimited Queries" bannerImage={callSupport} bannerButtonWidth="44" bannerButtonName="Get Councelling" bannerButttonEventHandler={getCounsellingEventHandler}></BannerComponent>
//                         <BannerComponent bannerText1="Message Support" bannerText2="Through Dedicated Whatsapp Group" bannerImage={whatsAppGroupChat} bannerButtonWidth="44" bannerButtonName="Get Councelling" bannerButttonEventHandler={getCounsellingEventHandler}></BannerComponent>
//                         <BannerComponent bannerText1="Daily Doubt Solving Session" bannerText2="Some text to add" bannerImage={dailyDoubtSolvingSession} bannerButtonWidth="44" bannerButtonName="Get Councelling" bannerButttonEventHandler={getCounsellingEventHandler}></BannerComponent>
//                         <BannerComponent bannerText1="Complete Guidance" bannerText2="Till Your Admission" bannerImage={completeGuidanceTillAdmission} bannerButtonWidth="44" bannerButtonName="Get Councelling" bannerButttonEventHandler={getCounsellingEventHandler}></BannerComponent>
//                     </div>
//                     <div className="absolute z-50 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//                         <button type="button" className="w-1 h-1 sm:w-2 md:w-2 lg:w-2 xl:w-3 sm:h-2 md:h-2 lg:h-2 xl:h-3 rounded-full bg-white" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//                         <button type="button" className="w-1 h-1 sm:w-2 md:w-2 lg:w-2 xl:w-3 sm:h-2 md:h-2 lg:h-2 xl:h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//                         <button type="button" className="w-1 h-1 sm:w-2 md:w-2 lg:w-2 xl:w-3 sm:h-2 md:h-2 lg:h-2 xl:h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//                         <button type="button" className="w-1 h-1 sm:w-2 md:w-2 lg:w-2 xl:w-3 sm:h-2 md:h-2 lg:h-2 xl:h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
//                         <button type="button" className="w-1 h-1 sm:w-2 md:w-2 lg:w-2 xl:w-3 sm:h-2 md:h-2 lg:h-2 xl:h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
//                         <button type="button" className="w-1 h-1 sm:w-2 md:w-2 lg:w-2 xl:w-3 sm:h-2 md:h-2 lg:h-2 xl:h-3 rounded-full" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="5"></button>
//                     </div>
//                     <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//                         <span className="inline-flex items-center justify-center w-5 h-5 sm:w-5 md:w-7 lg:w-9 xl:w-10 sm:h-5 md:h-7 lg:h-9 xl:h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                             <svg className="w-2 h-2 sm:w-2 md:w-2 lg:w-3 xl:w-4 sm:h-2 md:h-2 lg:h-3 xl:h-4  text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
//                             </svg>
//                             <span className="sr-only">Previous</span>
//                         </span>
//                     </button>
//                     <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//                         <span className="inline-flex items-center justify-center w-5 h-5 sm:w-5 md:w-7 lg:w-9 xl:w-10 sm:h-5 md:h-7 lg:h-9 xl:h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                             <svg className="w-2 h-2 sm:w-2 md:w-2 lg:w-3 xl:w-4 sm:h-2 md:h-2 lg:h-3 xl:h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
//                             </svg>
//                             <span className="sr-only">Next</span>
//                         </span>
//                     </button>
//                 </div>
//                 {
//                     windowActive ? (<div className=" z-40 fixed inset-0  bg-black bg-opacity-90">
//                     <div className=" w-[100%] h-[100%]  rounded-lg shadow-lg">
//                         <EnrollCounsellingBannerComponent buttonHandler={closeLoginFormPagePopUpHandler}></EnrollCounsellingBannerComponent>
//                     </div>) </div> ): null
//                 }
//             </div>
//         </>


        
//     )
// }


// export default CounsellingCarouselComponent


import  { useEffect, useState } from "react";
import BannerComponent from "../../components/BannerComponent";
import EnrollCounsellingBannerComponent from "./EnrollCounsellingBannerComponent";
// import BannerComponent from "../../components/BannerComponent";

interface IBanner {
    BannerComponent : any
    bannerText1: string;
    bannerText2: string;
    bannerImage: string;
    bannerButtonWidth: string;
    bannerButtonName: string;
    bannerButttonEventHandler?: () => void;
}

export interface ICarouselComponent {
    banners: Array<IBanner>;
    autoPlay: boolean;
    autoPlayInterval: number;
}

// const CarouselComponent = ({banners:Array<IBanner> = [], autoPlay: boolean = true, autoPlayInterval = 3000,}) => {
const CarouselComponent = (props : ICarouselComponent) => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const [windowActive, setWindowActive] = useState<boolean>(false)
    
    const getCounsellingEventHandler = () => {
        console.log("The button has been clicked")
        setWindowActive(true)
    }

    const closeLoginFormPagePopUpHandler = () => {
        console.log("The close button has been clicked")
        setWindowActive(false)
    }

  // Handle auto-play functionality
  useEffect(() => {
    console.log("the value recieved in the props in the carousel component is ", props) 
    if (props.autoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % props.banners.length);
      }, props.autoPlayInterval);

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [props.autoPlay, props.autoPlayInterval, props.banners.length]);

  // Handle manual slide navigation
  const goToSlide = (index : number) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % props.banners.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + props.banners.length) % props.banners.length);
  };

  return (
    <div className="relative w-full rounded-xl overflow-hidden">
      {/* Slides */}
      <div className="  relative h-56 md:h-96">
        {props.banners.map((banner : any, index : any) => (
          <div
            key={index}
            className={` absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <BannerComponent 
                  bannerText1={banner.bannerText1}
                  bannerText2={banner.bannerText2}
                  bannerImage={banner.bannerImage}
                  bannerButtonWidth={banner.bannerButtonWidth}
                  bannerButtonName={banner.bannerButtonName}
                  bannerButttonEventHandler={getCounsellingEventHandler}
            ></BannerComponent>
            {/* <div className="text-white">some text here</div> */}
            {/* <banner.BannerComponent
              bannerText1={banner.bannerText1}
              bannerText2={banner.bannerText2}
              bannerImage={banner.bannerImage}
              bannerButtonWidth={banner.bannerButtonWidth}
              bannerButtonName={banner.bannerButtonName}
              bannerButttonEventHandler={banner.bannerButttonEventHandler}
            /> */}
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute z-45 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {props.banners.map((_ : any, index: any) => (
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

      {
                    windowActive ? (<div className=" z-40 fixed inset-0  bg-black bg-opacity-90">
                    <div className=" w-[100%] h-[100%]  rounded-lg shadow-lg">
                        <EnrollCounsellingBannerComponent buttonHandler={closeLoginFormPagePopUpHandler}></EnrollCounsellingBannerComponent>
                    </div>) </div> ): null
                }
    </div>
  );
};

export default CarouselComponent;
