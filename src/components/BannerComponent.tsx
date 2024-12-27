import { IBannerComponent } from "../interfaces/interfaces"
import ButtonComponent from "./ButtonComponent"

const BannerComponent = (props: IBannerComponent) => {
    return (
        <div className="hidden duration-700 ease-in-out " data-carousel-item>
            <div className="absolute block w-full  h-full rounded -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex justify-evenly pl-2 pr-2 sm:pl-2 sm:pr-2 md:pl-6 md:pr-6 lg:pl-10 lg:pr-10 xl:pl-16 xl:pr-16">
                <div className="flex flex-col justify-evenly items-center text-white">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-md sm:text-2xl md:text-3xl lg:4xl w-full text-center">
                            {props.bannerText1}
                        </p>
                        <p className="text-md sm:text-2xl md:text-3xl lg:4xl w-full text-center">
                            {props.bannerText2}
                        </p>
                    </div>

                    {/* button  for going to get the councelling page */}
                    <ButtonComponent buttonName={props.bannerButtonName} buttonWidthInRem={props.bannerButtonWidth} onButtonComponentClickHandler={props.bannerButttonEventHandler? props.bannerButttonEventHandler : undefined}></ButtonComponent>
                </div>
                <div className="flex justify-center items-center w-1/2">
                    <img src={props.bannerImage} className="w-half h-3/4 rounded-xl" alt="Loading" />
                </div>
            </div>
        </div>
    )
}


// say everything went fine 
export default BannerComponent