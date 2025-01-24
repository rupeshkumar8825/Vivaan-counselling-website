import { useEffect, useState } from "react";
import TopBannerCounsellingHelpDeskBanner from "../../assets/images/TopBanner/TopBannerCounsellingHelpDesk.png";
// import TobBannerJoinWhatsappGroupBanner from "../../assets/images/TopBanner/TopBannerJoinWhatsappGroup.png";

// const TopBannerForCollegePage = () => {
//     return (
//         <div id="default-carousel" className="rounded-lg relative w-full" data-carousel="slide">
//             <div className=" relative overflow-hidden rounded-lg h-20 sm:h-24 md:h-28 lg:h-36 xl:h-52">
//                 <div className=" hidden duration-700 ease-in-out" data-carousel-item>
//                     <img src={TopBannerCounsellingHelpDeskBanner} className="absolute block h-20 sm:h-24 md:h-28 lg:h-36 xl:h-52 w-full object-cover" alt="Counselling Help Desk Banner" />
//                 </div>
                
//             </div>
//             <div className=" absolute z-30 flex -translate-x-1/2 bottom-0 sm:bottom-1 md:bottom-2 lg:bottom-3 xl:bottom-4 left-1/2 space-x-3 rtl:space-x-reverse">
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
    // TobBannerJoinWhatsappGroupBanner
]


const autoPlay = true;
const   autoPlayInterval = 3000;

const TopBannerForCollegePage = () => {
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
        //   const goToSlide = (index : number) => {
        //     setCurrentSlide(index);
        //   };
        
        //   const goToNextSlide = () => {
        //     setCurrentSlide((prev : any) => (prev + 1) % banners.length);
        //   };
        
        //   const goToPrevSlide = () => {
        //     setCurrentSlide((prev : any) => (prev - 1 + banners.length) % banners.length);
        //   };
        
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
        </>
    )
}



export default TopBannerForCollegePage;