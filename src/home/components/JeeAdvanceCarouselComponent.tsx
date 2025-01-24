import { useEffect, useState } from "react";
import BannerVideoComponent from "../../components/BannerVideoComponent"
import { ICarouselComponent } from "./CouncellingCarouselComponent"


// const JeeAdvanceCarouselComponent = () => {
//     const videoUrl = "https://www.youtube.com/embed/AJX1ZQaPiTg"

//     const JEEAdvanceCarouselSeeMoreButtonHandler = () => {
//         window.location.href = "https://www.youtube.com/embed/AJX1ZQaPiTg"
//         return
//     }


//     return (
//         <div className="m-10 rounded-xl bg-blue-forComponentBg">
//         <div id="default-carousel" className="relative w-full" data-carousel="slide">
//             <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//                 <BannerVideoComponent bannerText1="NTA Update" bannerText2="Category Certificate Issue Authority In Jee Main 2025" bannerImage={videoUrl} bannerButtonWidth="44" bannerButtonName="See More" seeMoreEventHandler={JEEAdvanceCarouselSeeMoreButtonHandler} ></BannerVideoComponent>
//             </div>
//             <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//             </div>
//         </div>
//     </div>

//     )
// }


const JeeAdvanceCarouselComponent = (props: ICarouselComponent) => {
    const [currentSlide, setCurrentSlide] = useState(0);
        
          // Handle auto-play functionality
          useEffect(() => {
            console.log("the value recieved in the props in the carousel component is ", props) 
            if (props.autoPlay) {
              const interval = setInterval(() => {
                setCurrentSlide((prev : any) => (prev + 1) % props.banners.length);
              }, props.autoPlayInterval);
        
              return () => clearInterval(interval); // Cleanup on unmount
            }
          }, [props.autoPlay, props.autoPlayInterval, props.banners.length]);
        
          // Handle manual slide navigation
        //   const goToSlide = (index : number) => {
        //     setCurrentSlide(index);
        //   };
        
        //   const goToNextSlide = () => {
        //     setCurrentSlide((prev : any) => (prev + 1) % props.banners.length);
        //   };
        
        //   const goToPrevSlide = () => {
        //     setCurrentSlide((prev : any) => (prev - 1 + props.banners.length) % props.banners.length);
        //   };
        

          
    return (
        <div className="m-10 bg-blue-forComponentBg rounded-xl">
            {/* Slides */}
      <div className="  relative h-56 md:h-96">
        {props.banners.map((banner : any, index : any) => (
          <div
            key={index}
            className={` absolute inset-0 transition-opacity duration-700 overflow-hidden ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <BannerVideoComponent 
                  bannerText1={banner.bannerText1}
                  bannerText2={banner.bannerText2}
                  bannerImage={banner.bannerImage}
                  bannerButtonWidth={banner.bannerButtonWidth}
                  bannerButtonName={banner.bannerButtonName}
                  seeMoreEventHandler={banner.seeMoreEventHandler}
            ></BannerVideoComponent>
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

          </div>
    )   
}

// say everything went fine 
export default JeeAdvanceCarouselComponent