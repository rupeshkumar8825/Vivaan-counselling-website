import TopBannerCounsellingHelpDeskBanner from "../../assets/images/TopBanner/TopBannerCounsellingHelpDesk.png";
// import TobBannerJoinWhatsappGroupBanner from "../../assets/images/TopBanner/TopBannerJoinWhatsappGroup.png";

const TopBannerForCollegePage = () => {
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
                {/* <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={TobBannerJoinWhatsappGroupBanner} className="absolute block h-20 sm:h-24 md:h-28 lg:h-36 xl:h-52 w-full object-cover" alt="Join Whatsapp Group Banner" />
                </div> */}
                
            </div>
            {/* <!-- Slider indicators --> */}
            <div className=" absolute z-30 flex -translate-x-1/2 bottom-0 sm:bottom-1 md:bottom-2 lg:bottom-3 xl:bottom-4 left-1/2 space-x-3 rtl:space-x-reverse">
                {/* <button type="button" className="w-1 h-1 md:w-2 md:h-2 lg:w-3 lg:h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button> */}
                {/* <button type="button" className="w-1 h-1 md:w-2 md:h-2 lg:w-3 lg:h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button> */}
            </div>
        </div>
    );
};

export default TopBannerForCollegePage;