import { IBannerComponent } from "../interfaces/interfaces"
import ButtonComponent from "./ButtonComponent"

const BannerComponent = (props: IBannerComponent) => {
    return (
        <div className="hidden duration-700 ease-in-out " data-carousel-item>
            <div className="absolute block w-full  h-full rounded -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex justify-evenly pl-16 pr-16">
                <div className="flex flex-col justify-evenly items-center text-white">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-3xl">
                            {props.bannerText1}
                        </p>
                        <p className="text-3xl">
                            {props.bannerText2}
                        </p>
                    </div>

                    {/* button  for going to get the councelling page */}
                    <ButtonComponent buttonName={props.bannerButtonName} buttonWidthInRem={props.bannerButtonWidth} onButtonComponentClickHandler={props.bannerButttonEventHandler? props.bannerButttonEventHandler : undefined}></ButtonComponent>
                </div>
                <div className="flex justify-center items-center">
                    <img src={props.bannerImage} className="w-half h-3/4 rounded-xl" alt="Loading" />
                </div>
            </div>
        </div>
    )
}


// say everything went fine 
export default BannerComponent