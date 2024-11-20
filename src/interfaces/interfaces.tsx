
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
    onButtonComponentClickHandler? : () => void
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
    title : string, 
    content : string
}

export interface IBlogHeadingComponent {
    headingName : string, 
}

export interface IBlogSubHeadingComponent extends IBlogHeadingComponent {

}

export interface IBlogSectionComponent {
    headingName : string, 
    content : string, 
    headingId : string
}


export interface IBlogComponent {
    headingIdList : Array<string>, 
    headingNameList : Array<string>, 
    tableOfContentsList : Array<string>, 
    contentList : Array<string>, 
}

export interface ITableOfContent {
    headingIdList : Array<string>, 
    headingNameList : Array<string>
}


export interface IOverviewComponent {
    dropDownMenuName : string, 
    dropDowndivId : string, 
    dropDownButtonId : string, 
    dropDownSubMenuList : Array<string>, 
    dropDownRoutesList : Array<string>, 
    buttonNameList : Array<string>, 
    buttonWidthList : Array<string>, 
    buttonCodeList : Array<string>, 
    buttonGenericClickHandler : (buttonCode : string) => void
}


export interface IButtonExamPageComponent {
    buttonName : string, 
    buttonWidthInRem : string, 
    buttonCode : string,
    OnButtonClickHandlerExamPage : (buttonCode : string) => void
}


export interface IIITCollegeCard {
    collegeName : string, 
    collegeDescription : string, 
    buttonRoute : string
}

export interface INITCollegeCard extends IIITCollegeCard {
    
}

export interface IIIITCollegeCard extends IIITCollegeCard{

}

export interface IStateCollegeCard extends IIITCollegeCard{
    
}

export interface ICollegeIntroCardComponent {
    title : string, 
    contentDescription : string, 
    redirectRoute : string
}



// INTERFACES RELATED TO IIT COLLEGE PAGES COMES HERE 

export interface ICollegePageNavigationComponent {
    collegePageNavigationConstants : Array<IIITCollegeNavigationConstants>
}

export interface IIITCollegeNavigationConstants {
    title : string, 
    headingId : string
}

export interface IAboutSectionCollegePageComponent {
    headingId : string, 
    headingName : string, 
    content : string
}

export interface IFeesSectionCollegePageComponent {
    headingId : string, 
    headingName : string, 
    content : string
}

export interface IAdmissionSectionCollegePageComponent extends IAboutSectionCollegePageComponent {
        
}

export interface IPlacementSectionCollegePageComponent extends IAboutSectionCollegePageComponent {
        collegePlacementDataConstant : Array<any>
}

export interface IContactSectionCollegePageComponent extends IAboutSectionCollegePageComponent {
        
}

export interface ICoursesSectionCollegePageComponent extends IAboutSectionCollegePageComponent {
    collegeCourseDetailConstant : Array<any>
}

export interface ICutoffSectionCollegePageComponent extends IAboutSectionCollegePageComponent { 
}


export interface IIITGenericCollegeComponent {
    collegeImage : string, 
    collegeName : string, 
    collegePageNavigationConstants : Array<IIITCollegeNavigationConstants>, 
    aboutSectionContent : string, 
    aboutSectionHeadingId : string,
    aboutSectionHeadingName : string
    feeSectionContent : string, 
    feeSectionHeadingId : string, 
    feeSectionHeadingName : string, 
    admissionSectionContent : string,
    admissionSectionHeadingId : string,
    admissionSectionHeadingName : string, 
    placementSectionContent : string, 
    placementSectionHeadingId : string,
    placementSectionHeadingName : string,
    collegePlacementDataConstant : Array<any>,
    // contactSectionContent : string, 
    // contactSectionHeadingId : string,
    // contactSectionHeadingName : string,
    coursesSectionContent : string,
    coursesSectionHeadingId : string,
    coursesSectionHeadingName : string, 
    collegeCourseDetailConstant : Array<any>

    cutoffSectionContent : string, 
    cutoffSectionHeadingId : string,
    cutoffSectionHeadingName : string, 
}


export interface ISelectComponent {
    selectedValue : string, 
    selectOnChangeHandler : (event : React.ChangeEvent<HTMLSelectElement>) => void,
    selectValuesList : Array<string>
    selectHtmlFor : string, 
    selectId : string, 
    selectLabelName : string
}



