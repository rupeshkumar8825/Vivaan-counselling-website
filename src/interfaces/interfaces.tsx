
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
    bannerButttonEventHandler? : () => void
}


export interface IBannerVideoComponent extends IBannerComponent {
    seeMoreEventHandler : () => void
}

export interface IHeadingComponent {
    headingName : string
    headingSpanName : string
}

export interface IVideoCardComponent {
    videoUrl : string, 
    title : string, 
    content : string,
    videoCardWidth? : string, 
    videoCardHeight? : string
}

export interface IBlogHeadingComponent {
    headingName : string, 
}

export interface IBlogSubHeadingComponent extends IBlogHeadingComponent {

}

export interface IBlogSectionComponent {
    headingName : string, 
    content : string, 
    headingId : string, 
    image? : string, 

    /**
     * Following parameter was added for the following purpose: 
     *  1. Since we are adding the above mentioned support 
     *  2. Hence for this we need to know whether they belong to same heading or not
     *  3. isSameHeading is true then we will say that this content/image belongs to the same previous heading itself
     *  4. If isSameHeading is false then we will say that this content/image belongs to the new heading
     *  5. This is important because we want to show the border properly. Meaning:
     *      For each of the heading all the contents/image and its combination should come under the same border. 
     * this field is optional if its necessary then we will pass
     * For example currently we have added this support only in the counselling pages. We might need to extend this to 
     * other pages like college pages and so on.
     */
    isCurrentHeadingEmpty? : boolean, // this means that for this blog section we will have to keep the top border anyways. 
    isNextHeadingEmpty? : boolean // this means that for this blog section the bottom border we will not give
    isPreviousHeadingEmpty? : boolean // this means that for this blog section the top border we will not give
}


export interface IBlogComponent {
    headingIdList : Array<string>, 
    headingNameList : Array<string>, 
    tableOfContentsList : Array<string>, 
    contentList : Array<string>, 
    /**
     * The following optional parameters were added in order to support the following features: 
     *  1. Image support for the blog section component
     *  2. Multiple images support for the blog section component
     *  3. Image + Content and other possible component support for the blog section component
     * 
     */
    imageList? : Array<string | null>
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
    buttonRoute : string, 
    imageLink : string
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
    redirectRoute : string,
    imageLink : string
}



// INTERFACES RELATED TO IIT COLLEGE PAGES COMES HERE 

export interface ICollegePageNavigationComponent {
    collegePageNavigationConstants : Array<IIITCollegeNavigationConstants>
    collegePageNavigationSvgPathConstants : Array<string>
}

export interface IIITCollegeNavigationConstants {
    title : string, 
    headingId : string, 
    // svgPath : string
}


export interface INITCollegeNavigationConstants {
    title : string, 
    headingId : string
}

export interface IIIITCollegeNavigationConstants {
    title : string, 
    headingId : string
}

export interface IAboutSectionCollegePageComponent {
    headingId : string, 
    headingName : string, 
    content : string, 
    aboutSectionTableContent : Array<string[]>,
    aboutSectionTableHeading : Array<string>
}

export interface IFeesSectionCollegePageComponent {
    headingId : string, 
    headingName : string, 
    content : string
    feeSectionInstituteFeeTableContent : Array<string[]>,
    feeSectionInstituteFeeTableHeading : Array<string>,
    feeSectionHostelFeeTableContent? : Array<string[]>,
    feeSectionHostelFeeTableHeading? : Array<string>
}

export interface ILocationSectionCollegePageComponent {
    headingId : string,
    headingName : string,
    content : string,
    locationSectionTableContent : Array<string[]>,
    locationSectionTableHeading : Array<string>
}

export interface IRankingSectionCollegePageComponent {
    headingId : string,
    headingName : string,
    content : string,
    rankingSectionTableContent : Array<string[]>,
    rankingSectionTableHeading : Array<string>
}

export interface ISeatSectionCollegePageComponent {
    headingId : string, 
    headingName : string, 
    content  : string, 
    seatSectionTableContent : Array<string[]>,
    seatSectionTableHeading : Array<string>           
}



export interface IAdmissionSectionCollegePageComponent {
    headingId : string, 
    headingName : string, 
    content : string
}

export interface IFeeWaiverSecionCollegePageComponent {
    headingId : string,
    headingName : string, 
    content : string
}

export interface IPlacementSectionCollegePageComponent {
    headingId : string, 
    headingName : string, 
    content : string, 
    imageArray : Array<string>, 
    collegePlacementDataConstant : Array<any>

}

export interface IContactSectionCollegePageComponent extends IAboutSectionCollegePageComponent {
        
}

export interface ICoursesSectionCollegePageComponent {
    headingId : string,
    headingName : string,
    content : string,
    // collegeCourseDetailConstant : Array<any>
    coursesSectionTableContent : Array<string[]>,
    coursesSectionTableHeading : Array<string>
}

export interface ICutoffSectionCollegePageComponent  { 
    headingId : string, 
    headingName : string, 
    content : string
}


export interface IIITGenericCollegeComponent {
    collegeImage : string, 
    collegeName : string, 
    collegePageNavigationConstants : Array<IIITCollegeNavigationConstants>, 

    aboutSectionContent : string, 
    aboutSectionHeadingId : string,
    aboutSectionHeadingName : string, 
    aboutSectionTableContent : Array<string[]>,
    aboutSectionTableHeading : Array<string>,

    locationSectionContent : string,
    locationSectionHeadingId : string,
    locationSectionHeadingName : string,
    locationSectionTableContent : Array<string[]>,
    locationSectionTableHeading : Array<string>,

    rankingSectionContent : string,
    rankingSectionHeadingId : string,
    rankingSectionHeadingName : string, 
    rankingSectionTableContent : Array<string[]>,
    rankingSectionTableHeading : Array<string>,

    admissionSectionContent : string,
    admissionSectionHeadingId : string,
    admissionSectionHeadingName : string, 

    coursesSectionContent : string,
    coursesSectionHeadingId : string,
    coursesSectionHeadingName : string, 
    coursesSectionTableContent : Array<string[]>,
    coursesSectionTableHeading : Array<string>,

    feeSectionContent : string, 
    feeSectionHeadingId : string, 
    feeSectionHeadingName : string, 
    feeSectionInstituteFeeTableContent : Array<string[]>,
    feeSectionInstituteFeeTableHeading : Array<string>,
    feeSectionHostelFeeTableContent : Array<string[]>,
    feeSectionHostelFeeTableHeading : Array<string>,


    seatSectionContent : string,
    seatSectionHeadingId : string,
    seatSectionHeadingName : string,
    seatSectionTableContent : Array<string[]>,
    seatSectionTableHeading : Array<string>,


    cutoffSectionContent : string, 
    cutoffSectionHeadingId : string,
    cutoffSectionHeadingName : string, 


    placementSectionContent : string, 
    placementSectionHeadingId : string,
    placementSectionHeadingName : string,
    placementImageList : Array<string>

    feeWaiverSectionContent : string,
    feeWaiverSectionHeadingId : string,
    feeWaiverSectionHeadingName : string


    collegePlacementDataConstant : Array<any>,
    // contactSectionContent : string, 
    // contactSectionHeadingId : string,
    // contactSectionHeadingName : string,
    // collegeCourseDetailConstant : Array<any>

}


export interface ISelectComponent {
    selectedValue : string, 
    selectOnChangeHandler : (event : React.ChangeEvent<HTMLSelectElement>) => void,
    selectValuesList : Array<string>
    selectHtmlFor : string, 
    selectId : string, 
    selectLabelName : string
}

export interface IIITGenericCutOffPage {
    blogSectionHeadingId : string, 
    blogSectionHeadingName : string,
    blogSectionContent : string
}


export interface INITGenericCollegeComponent {
    collegeImage : string, 
    collegeName : string, 
    collegePageNavigationConstants : Array<INITCollegeNavigationConstants>, 

    aboutSectionContent : string, 
    aboutSectionHeadingId : string,
    aboutSectionHeadingName : string, 
    aboutSectionTableContent : Array<string[]>,
    aboutSectionTableHeading : Array<string>,

    locationSectionContent : string,
    locationSectionHeadingId : string,
    locationSectionHeadingName : string,
    locationSectionTableContent : Array<string[]>,
    locationSectionTableHeading : Array<string>,

    rankingSectionContent : string,
    rankingSectionHeadingId : string,
    rankingSectionHeadingName : string, 
    rankingSectionTableContent : Array<string[]>,
    rankingSectionTableHeading : Array<string>,

    admissionSectionContent : string,
    admissionSectionHeadingId : string,
    admissionSectionHeadingName : string, 

    coursesSectionContent : string,
    coursesSectionHeadingId : string,
    coursesSectionHeadingName : string, 
    coursesSectionTableContent : Array<string[]>,
    coursesSectionTableHeading : Array<string>,

    feeSectionContent : string, 
    feeSectionHeadingId : string, 
    feeSectionHeadingName : string, 
    feeSectionInstituteFeeTableContent : Array<string[]>,
    feeSectionInstituteFeeTableHeading : Array<string>,
    feeSectionHostelFeeTableContent : Array<string[]>,
    feeSectionHostelFeeTableHeading : Array<string>,


    seatSectionContent : string,
    seatSectionHeadingId : string,
    seatSectionHeadingName : string,
    seatSectionTableContent : Array<string[]>,
    seatSectionTableHeading : Array<string>,


    cutoffSectionContent : string, 
    cutoffSectionHeadingId : string,
    cutoffSectionHeadingName : string, 


    placementSectionContent : string, 
    placementSectionHeadingId : string,
    placementSectionHeadingName : string,
    placementImageList : Array<string>,

    feeWaiverSectionContent : string, 
    feeWaiverSectionHeadingId : string, 
    feeWaiverSectionHeadingName : string

    collegePlacementDataConstant : Array<any>,
    // contactSectionContent : string, 
    // contactSectionHeadingId : string,
    // contactSectionHeadingName : string,
    // collegeCourseDetailConstant : Array<any>


}



export interface IIIITGenericCollegeComponent {
    collegeImage : string, 
    collegeName : string, 
    collegePageNavigationConstants : Array<IIITCollegeNavigationConstants>, 

    aboutSectionContent : string, 
    aboutSectionHeadingId : string,
    aboutSectionHeadingName : string, 
    aboutSectionTableContent : Array<string[]>,
    aboutSectionTableHeading : Array<string>,

    locationSectionContent : string,
    locationSectionHeadingId : string,
    locationSectionHeadingName : string,
    locationSectionTableContent : Array<string[]>,
    locationSectionTableHeading : Array<string>,

    rankingSectionContent : string,
    rankingSectionHeadingId : string,
    rankingSectionHeadingName : string, 
    rankingSectionTableContent : Array<string[]>,
    rankingSectionTableHeading : Array<string>,

    admissionSectionContent : string,
    admissionSectionHeadingId : string,
    admissionSectionHeadingName : string, 

    coursesSectionContent : string,
    coursesSectionHeadingId : string,
    coursesSectionHeadingName : string, 
    coursesSectionTableContent : Array<string[]>,
    coursesSectionTableHeading : Array<string>,

    feeSectionContent : string, 
    feeSectionHeadingId : string, 
    feeSectionHeadingName : string, 
    feeSectionInstituteFeeTableContent : Array<string[]>,
    feeSectionInstituteFeeTableHeading : Array<string>,
    feeSectionHostelFeeTableContent : Array<string[]>,
    feeSectionHostelFeeTableHeading : Array<string>,


    seatSectionContent : string,
    seatSectionHeadingId : string,
    seatSectionHeadingName : string,
    seatSectionTableContent : Array<string[]>,
    seatSectionTableHeading : Array<string>,


    cutoffSectionContent : string, 
    cutoffSectionHeadingId : string,
    cutoffSectionHeadingName : string, 


    placementSectionContent : string, 
    placementSectionHeadingId : string,
    placementSectionHeadingName : string,
    placementImageList : Array<string>


    collegePlacementDataConstant : Array<any>,
    // contactSectionContent : string, 
    // contactSectionHeadingId : string,
    // contactSectionHeadingName : string,
    // collegeCourseDetailConstant : Array<any>

}


// interfaces for the table that we will be showing 
export interface ITableContentComponent {
    tableContentHeading : Array<string>, 
    tableContent : Array<string[]>
}


export interface ICourseTableContentComponent {
    tableContentHeading : Array<string>, 
    tableContent : Array<string>
}

export interface ISingleFAQElement{
    question : string, 
    answer : string
}

export interface IFAQSectionCollegePageComponent {
    faqList : Array<ISingleFAQElement>
}