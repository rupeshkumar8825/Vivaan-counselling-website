import BannerComponent from "../../components/BannerComponent"
import second from "../../assets/images/second.svg"
import BannerVideoComponent from "../../components/BannerVideoComponent"
// this is carousel component for jee mains banner
const JeeMainCarouselComponent = () => {
    const videoUrl = "https://www.youtube.com/embed/had2p1dC42M"


    const JEEmainCarouselSeeMoreButtonHandler = () => {
        // here we will redirect to the youtube video itself 
        window.location.href = "https://www.youtube.com/watch?v=had2p1dC42M"
        // say everything went fine 
        return
    }
    return (
        <div className="m-10 bg-blue-forComponentBg rounded-xl">
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* <BannerComponent bannerText1="Your Dreams" bannerText2="Our Expertize" bannerImage={first} bannerButtonWidth="44" bannerButtonName="See More"></BannerComponent> */}
                {/* <BannerComponent bannerText1="Your Dreams2" bannerText2="Our Expertize2" bannerImage={second} bannerButtonWidth="44" bannerButtonName="See More"></BannerComponent> */}
                <BannerVideoComponent bannerText1="Update By NTA" bannerText2="Aadhar Update Compulsory" bannerImage = {videoUrl} bannerButtonWidth="44" bannerButtonName="See More" seeMoreEventHandler={JEEmainCarouselSeeMoreButtonHandler}></BannerVideoComponent>
                {/* <BannerComponent bannerText1="Your Dreams3" bannerText2="Our Expertize3" bannerImage={third} bannerButtonWidth="44" bannerButtonName="See More"></BannerComponent>
                <BannerComponent bannerText1="Your Dreams4" bannerText2="Our Expertize4" bannerImage={fourth} bannerButtonWidth="44" bannerButtonName="See More"></BannerComponent>
                <BannerComponent bannerText1="Your Dreams5" bannerText2="Our Expertize5" bannerImage={fifth} bannerButtonWidth="44" bannerButtonName="See More"></BannerComponent>
                <BannerComponent bannerText1="Your Dreams6" bannerText2="Our Expertize6" bannerImage={sixth} bannerButtonWidth="44" bannerButtonName="See More"></BannerComponent> */}
            </div>
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            </div>
            
        </div>
    </div>

    )
}

// say everything went fine 
export default JeeMainCarouselComponent