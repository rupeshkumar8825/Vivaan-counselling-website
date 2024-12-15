// constant page for the csab related stuff 
// here we will store the constants related to the josaa counselling page 
import CsabCounsellingImage from "../../assets/images/counselling/csab/CsabCounselling.png"

// OVERVIEW  COMPONENT FOR JOSAA COUNsELLING PAGE 
// constant for storing the submenu names which we have to show in dropdown
export const CsabCounsellingPageSubMenuList : Array<string> = [
    "What is CSAB Counselling?",
    "CSAB Counselling Documents",
    "CSAB Counselling Application Process",
    "CSAB Counselling Fee",
    "CSAB Counselling Cutoff",
    "CSAB Counselling Online Reporting",
    "CSAB Counselling Physical Reporting",
]



// constant for the submenu list routes that we need inside the overview dropdown button
export const CsabCounsellingPageRoutesList : Array<string> = [
    "/counselling/csab/introduction", 
    "/counselling/csab/documents", 
    "/counselling/csab/application-process", 
    "/counselling/csab/fee", 
    "/counselling/csab/cutoff", 
    "/counselling/csab/online-reporting",
    "/counselling/csab/physical-reporting",
]


export const CsabCounsellingPageButtonNameList : Array<string> = [
    "JOSAA",
    "CSAB",
    "JAC DELHI",
    "WBJEE",
    "UPTU", 
    "GGSIPU",
    "COMEDK",
]

export const CsabCounsellingPageButtonWidthList : Array<string> = [
    "36",
    "36",
    "36",
    "36",
    "36",
    "36",
    "36",
]


export const CsabCounsellingPageButtonCodeList : Array<string> = [
    "1", 
    "2", 
    "3", 
    "4", 
    "5",
    "6",
    "7"
]



// Video card related constants for the Csab counselling page
export const CsabCounsellingPageVideoCardUrlList : Array<string> = [
    "https://www.youtube.com/embed/CHmaw6Vu4_I", 
    "https://www.youtube.com/embed/CHmaw6Vu4_I", 
    "https://www.youtube.com/embed/CHmaw6Vu4_I"
]

export const CsabCounsellingPageVideoCardTitleList : Array<string> = [
    "First title", 
    "Second title", 
    "Third title"
]


// BLOGS Related constants for Csab Counselling
// this consists of the constants related to the heading name, headingID 
// content that we have to put in each of the headings
export const CsabCounsellingPageHeadingList : Array<string> = [
    "What is Csab Counselling?", 
    "Csab Counselling dates 2025", 
    "Csab Counselling Eligibility Criteria", 
    "Csab Counselling process 2025",
    "Csab Counselling counselling application form",
    "Document required for Csab Counselling",
    "Csab Counselling Choice filling 2025",
    "Csab Counselling Seat Allotment 2025", 
    "Csab Counselling 2025 Opening and Closing rank",
    "Csab Counselling fee 2025",
    "Csab Counselling Seat Allotment Letter",
    "Csab Counselling Online Reporting", 
    "Csab Counselling Physical Reporting allotted", 
    "Csab Counselling FAQ"
]

export const CsabCounsellingPageTableOfContentList : Array<string> = [
    "What is Csab Counselling?", 
    "Csab Counselling dates 2025", 
    "Csab Counselling Eligibility Criteria", 
    "Csab Counselling process 2025",
    "Csab Counselling counselling application form",
    "Document required for Csab Counselling",
    "Csab Counselling Choice filling 2025",
    "Csab Counselling Seat Allotment 2025", 
    "Csab Counselling 2025 Opening and Closing rank",
    "Csab Counselling fee 2025",
    "Csab Counselling Seat Allotment Letter",
    "Csab Counselling Online Reporting", 
    "Csab Counselling Physical Reporting allotted", 
    "Csab Counselling FAQ"
]

export const CsabCounsellingPageHeadingIdList : Array<string> = [
    "counselling-csab-h1",
    "counselling-csab-h2",
    "counselling-csab-h3",
    "counselling-csab-h4",
    "counselling-csab-h5",
    "counselling-csab-h6",
    "counselling-csab-h7",
    "counselling-csab-h8",
    "counselling-csab-h9",
    "counselling-csab-h10",
    "counselling-csab-h11",
    "counselling-csab-h12",
    "counselling-csab-h13",
    "counselling-csab-h14",
]


// adding the new constants for image list to be shown on the UI for this purpose
/**
 * Do note by default we will be able to add one image per heading.
 * But in order to add multiple images we will have to add a new headings that will be "" string
 * So basically follow the below steps in order to add the multiple images and contents
 *  1. Update the array of headingIdList, headingNameList, imageList, contentList 
 *  2. Also do note that except the imagelist and contentList mostly other objects will have empty string
 */

export const CsabCounsellingPageImageList : Array<string | null> = [
    null,
    CsabCounsellingImage,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
]

export const CsabCounsellingPageContentList : Array<string> = [
    `Two Special Rounds of seat allocation are organized by the Central Seat Allocation Board (CSAB) to allocate the unfilled seats of the NIT+ System after the 5th JoSAA Round. 
    The CSAB-Special Rounds will be conducted by NITK Surathkal through the online portal of CSAB (https://csab.nic.in). The Business Rules of CSAB-Special Rounds can be seen on the CSAB website. 
    The details of vacant seats in various Participating Institutes will be available after the end of the JoSAA-2025 Rounds and just before the start of Registration for CSAB-Special Rounds. Candidates desirous of participating in the CSAB-Special Rounds are required to do a fresh registration. The process of Registration, Choice Filling, Choice Locking, Seat Allotment, Payment of fees, etc., are different from those of JoSAA rounds. The candidates are advised to carefully go through the Business Rules and Process Flow of the CSAB-Special Rounds available on the CSAB website.`,
    
    
    `CSAB counselling start after josaa counselling 2025,it is likely to start from 3rd week of july 2025
as per last year following are the schedule:`,


    ``,

    ``,

    ``,

    ``,

    ``,

    ``,

    ``,

    ``,

    ``,

    ``,

    ``,

    ``,

    
]
