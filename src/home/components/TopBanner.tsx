import React from 'react';
import TopBannerCounsellingHelpDeskBanner from "../../assets/images/TopBanner/TopBannerCounsellingHelpDesk.png";
import TobBannerJoinWhatsappGroupBanner from "../../assets/images/TopBanner/TopBannerJoinWhatsappGroup.png";

const TopBanner = () => {
    return (
        <div id="default-carousel" className="rounded-lg relative w-full" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className=" relative overflow-hidden rounded-lg h-20 sm:h-24 md:h-28 lg:h-36 xl:h-52">
            {/* <div className="relative overflow-hidden rounded-lg h-38 sm:h-30 md:h-34 lg:h-38 xl:h-80"> */}
                {/* Item 1 */}
                <div className=" hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={TopBannerCounsellingHelpDeskBanner} className="absolute block h-20 sm:h-24 md:h-28 lg:h-36 xl:h-52 w-full object-cover" alt="Counselling Help Desk Banner" />
                </div>
                {/* Item 2 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={TobBannerJoinWhatsappGroupBanner} className="absolute block h-20 sm:h-24 md:h-28 lg:h-36 xl:h-52 w-full object-cover" alt="Join Whatsapp Group Banner" />
                </div>
                {/* Item 3 */}
                {/* <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full h-full object-cover" alt="..." />
                </div> */}
                {/* Item 4 */}
                {/* <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full h-full object-cover" alt="..." />
                </div> */}
                {/* Item 5 */}
                {/* <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full h-full object-cover" alt="..." />
                </div> */}
            </div>
            {/* <!-- Slider indicators --> */}
            <div className="border border-white absolute z-30 flex -translate-x-1/2 bottom-0 sm:bottom-1 md:bottom-2 lg:bottom-3 xl:bottom-4 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" className="w-1 h-1 md:w-2 md:h-2 lg:w-3 lg:h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-1 h-1 md:w-2 md:h-2 lg:w-3 lg:h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                {/* <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button> */}
            </div>
            {/* Carousel controls */}
            {/* <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button> */}
        </div>
    );
};

export default TopBanner;