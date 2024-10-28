
// here we will be storing all the interfaces for the application that we will be using
export interface IRoute {
    path : string, 
    component : JSX.Element
}


export interface IDropDownMenu {
    buttonId : string, 
    divId  : string,
    menuName : string, 
    subMenuList : string[]
    routesList : string[]
}


export  interface IButtonComponent {
    buttonName : string, 
    buttonWidthInRem : string, 
    onButtonComponentClickHandler? () : void
}


export interface IBannerComponent {
    bannerText1 : string, 
    bannerText2 : string, 
    bannerImage : string, 
    bannerButtonWidth : string
    bannerButtonName : string
}

export interface IHeadingComponent {
    headingName : string
    headingSpanName : string
}

export interface IVideoCardComponent {
    videoUrl : string, 
    title : string
}