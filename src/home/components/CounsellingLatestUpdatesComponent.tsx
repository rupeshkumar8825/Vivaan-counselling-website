// this is the component to show the latest updates about the counselling page
import BannerComponent from "../../components/BannerComponent"
import second from "../../assets/images/second.svg"
// this is carousel component for jee mains banner
const CounsellingLatestUpdatesCarouselComponent = () => {
    return (
        <div className="m-10 bg-blue-forComponentBg rounded-xl">
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* <BannerComponent bannerText1="Your Dreams" bannerText2="Our Expertize" bannerImage={first} bannerButtonWidth="44" bannerButtonName="See More"></BannerComponent> */}
                <BannerComponent bannerText1="Your Dreams2" bannerText2="Our Expertize2" bannerImage={second} bannerButtonWidth="44" bannerButtonName="See More"></BannerComponent>
                {/* <BannerComponent bannerText1="Your Dreams3" bannerText2="Our Expertize3" bannerImage={third} bannerButtonWidth="44" bannerButtonName="See More"></BannerComponent>
                <BannerComponent bannerText1="Your Dreams4" bannerText2="Our Expertize4" bannerImage={fourth} bannerButtonWidth="44" bannerButtonName="See More"></BannerComponent>
                <BannerComponent bannerText1="Your Dreams5" bannerText2="Our Expertize5" bannerImage={fifth} bannerButtonWidth="44" bannerButtonName="See More"></BannerComponent>
                <BannerComponent bannerText1="Your Dreams6" bannerText2="Our Expertize6" bannerImage={sixth} bannerButtonWidth="44" bannerButtonName="See More"></BannerComponent> */}
            </div>
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {/* <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="5"></button> */}
            </div>
            {/* <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button> */}
        </div>
    </div>

    )
}

// say everything went fine 
export default CounsellingLatestUpdatesCarouselComponent