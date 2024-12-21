// here comes the constants related to the jee advanced exam page

//OVERVIEW COMPONENT 
// constant for showing the various options related to jee advance in dropdown button
export const WBJeeExamSubMenuList : Array<string> = [
    "WBJEE Exam",
    "WBJEE Syllabus",
    "WBJEE Application",
    "WBJEE Eligibility",
    "WBJEE Dates",
    "WBJEE Admit Card",
]


// this is routes that we will need for the dropdown section
// do note that for every dropdwon option above we need to define the corresponding route here
export const WBJeeExamRoutesList : Array<string> = [
    "/exam/wbjee/exam", 
    "/exam/wbjee/syllabus", 
    "/exam/wbjee/application", 
    "/exam/wbjee/eligibility", 
    "/exam/wbjee/dates", 
    "/exam/wbjee/admitcard", 
]



// constants for the names of the buttons that are present in the OVERVIEW section of the page
export const WBJeeExamsButtonNameList : Array<string> = [
    "Jee Advance", 
    "Jee Mains", 
    "BITSAT", 
    "WBJEE", 
    "MHTCET"
]

// constans for width of the button that are present in the overview section 
// do note that mostly the width of the button remains the same
// but still we have used this constants to make the code more generic and configurable in future
export const WbJeeExamPageButtonWidthList : Array<string> = [
    "36",
    "36",
    "36",
    "36",
    "36",
]


// constant defining the codes for a particular button that are present in the overview section
// the main motive was due to following: 
//     1. to make the click handler more generic we have defined this code
//     2. We have fixed codes for each of the buttons related to jee advance, jee mains and so on 
export const WbJeeExamPageButtonCodesList : Array<string> = [
    "1", 
    "2", 
    "3", 
    "4", 
    "5"
]



// VIDEO CARD RELATED CONSTANTS  : this constant is mainly used for the latest update section 

// constant for the links of the youtube videos to be shown on the website
export const WbJEEVideoCardUrlList : Array<string> = [
    "https://www.youtube.com/embed/CHmaw6Vu4_I", 
    "https://www.youtube.com/embed/CHmaw6Vu4_I", 
    "https://www.youtube.com/embed/CHmaw6Vu4_I"
]


// constant for showing the title of the corresponding video 
// this seems to be temporary as we will be fetching the data mainly from backend itself
export const WbJeeVideoCardTitleList : Array<string> = [
    "First title", 
    "Second title", 
    "Third title"
]




// BLOG RELATED CONSTANTS FOR JEE ADVANCE EXAM PAGE

// constants for the heading of the jee advance exam page 
export const WbJeeHeadingList : Array<string> = [
    "What is WBJEE Counselling", 
    "WBJEE Counselling Application Form", 
    "WBJEE Counselling Dates 2025", 
    "WBJEE Counselling 2025 Process", 
    "Document Required for WBJEE Counselling",
    "WBJEE Counselling 2025 Opening and Closing Rank", 
    "Refund and Withdrawal", 
    "WBJEE Counselling 2025 Certificate Format", 
    "WBJEE Counselling 2025 FAQ"
]


// constant for the table of content on the page
export const WbJeeTableOfContentList : Array<string> = [
    "What is WBJEE Counselling", 
    "WBJEE Counselling Application Form", 
    "WBJEE Counselling Dates 2025", 
    "WBJEE Counselling 2025 Process", 
    "Document Required for WBJEE Counselling",
    "WBJEE Counselling 2025 Opening and Closing Rank", 
    "Refund and Withdrawal", 
    "WBJEE Counselling 2025 Certificate Format", 
    "WBJEE Counselling 2025 FAQ"
]


// constant for heading id 
// do note that in order to identify each of the ids uniquely and then use this to build the feature 
// in order to go to the section where the user has click in table of contents 
export const WbJeeHeadingIdList : Array<string> = [
    "exam-wbjee-h1",
    "exam-wbjee-h2",
    "exam-wbjee-h3",
    "exam-wbjee-h4",
    "exam-wbjee-h5",
    "exam-wbjee-h6",
    "exam-wbjee-h7",
    "exam-wbjee-h8",
    "exam-wbjee-h9"
]



// adding the constants for image list for the webjee for this purpose
export const WbJeeImageList : Array<string | null> = [
    // "What is WBJEE Counselling", 
    null,
    // "WBJEE Counselling Application Form", 
    null,
    // "WBJEE Counselling Dates 2025", 
    null,
    // "WBJEE Counselling 2025 Process", 
    null,
    // "Document Required for WBJEE Counselling",
    null,
    // "WBJEE Counselling 2025 Opening and Closing Rank", 
    null,
    // "Refund and Withdrawal", 
    null,
    // "WBJEE Counselling 2025 Certificate Format", 
    null,
    // "WBJEE Counselling 2025 FAQ"
    null,
]

// finally the constant for the content that will be present on the page
export const WbJeeContentList : Array<string> = [
    // "What is WBJEE Counselling", 
    `The Government of West Bengal formed the West Bengal Joint Entrance Examinations Board (WBJEEB) to conduct entrance exams for allotment of candidates and subsequent admission through counselling into the undergraduate (UG) courses in Engineering, Technology and Architecture in various colleges, institutions/Universities across West Bengal. For the academic year 2025-26, the process includes a streamlined online counselling system and the students who want to join these courses must have appeared in the WBJEE-2025 exam or the JEE-Main-2025 exam and obtained a valid rank (GMR etc.)`,
    // "WBJEE Counselling Application Form", 
    `WBJEE counselling form will be released soon,Join counselling group to get update,once released,<span style = "color : white; font-weight: bold; padding:1px; border-radius : 5px; font-size: larger;" class="">Click here to Join </span> `,
    // "WBJEE Counselling Dates 2025", 
    `WBJEE counselling date will be released soon,Join counselling group to get update,once released,<span style = "color : white; font-weight: bold; padding:1px; border-radius : 5px; font-size: larger;" class="">Click here to Join</span> `,
    // "WBJEE Counselling 2025 Process", 
    `WBJEE Counselling process includes following steps:
          1. Registration
          2. Choice Filling
          3. Choices Locking
          4. Round 1 Allotment
          5. Document Verification
          6. Round 2 Upgradation
          7. Mop-up Round
          8. Mop-up Round Process
`,
    // "Document Required for WBJEE Counselling",
    ``,
    // "WBJEE Counselling 2025 Opening and Closing Rank", 
    ``,
    // "Refund and Withdrawal", 
    ``,
    // "WBJEE Counselling 2025 Certificate Format", 
    ``,
    // "WBJEE Counselling 2025 FAQ"
    ``,
]

