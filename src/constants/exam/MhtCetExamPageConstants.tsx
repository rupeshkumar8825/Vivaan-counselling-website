// here comes the constants related to the jee advanced exam page
// importing the blog related images for this purpose
import MhtCetExamDatesImage from "../../assets/images/exam/Mhcet/MhtCet-ExamDates.png"

import MhtCetExamPatternImage from "../../assets/images/exam/Mhcet/MhctCet-ExamPattern.png"
import MhtCetExamScheduleImage1 from "../../assets/images/exam/Mhcet/MhtCet-ExamSchedule-1.png"
import MhtCetExamScheduleImage2 from "../../assets/images/exam/Mhcet/MhtCet-ExamSchedule2.png"
//OVERVIEW COMPONENT 
// constant for showing the various options related to jee advance in dropdown button
export const MhtCetExamSubMenuList : Array<string> = [
    "MH CET Exam",
    "MH CET Syllabus",
    "MH CET Application",
    "MH CET Eligibility",
    "MH CET Dates",
    "MH CET Admit Card",
]


// this is routes that we will need for the dropdown section
// do note that for every dropdwon option above we need to define the corresponding route here
export const MhtCetExamRoutesList : Array<string> = [
    "/exam/mhtcet/exam", 
    "/exam/mhtcet/syllabus", 
    "/exam/mhtcet/application", 
    "/exam/mhtcet/eligibility", 
    "/exam/mhtcet/dates", 
    "/exam/mhtcet/admitcard", 
]



// constants for the names of the buttons that are present in the OVERVIEW section of the page
export const MhtCetExamsButtonNameList : Array<string> = [
    "Jee Advance", 
    "Jee Mains", 
    "BITSAT", 
    "WBJEE", 
    "MH CET"
]

// constans for width of the button that are present in the overview section 
// do note that mostly the width of the button remains the same
// but still we have used this constants to make the code more generic and configurable in future
export const MhtCetExamPageButtonWidthList : Array<string> = [
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
export const MhtCetExamPageButtonCodesList : Array<string> = [
    "1", 
    "2", 
    "3", 
    "4", 
    "5"
]



// VIDEO CARD RELATED CONSTANTS  : this constant is mainly used for the latest update section 

// constant for the links of the youtube videos to be shown on the website
export const MhtCetVideoCardUrlList : Array<string> = [
    "https://www.youtube.com/embed/CHmaw6Vu4_I", 
    "https://www.youtube.com/embed/CHmaw6Vu4_I", 
    "https://www.youtube.com/embed/CHmaw6Vu4_I"
]


// constant for showing the title of the corresponding video 
// this seems to be temporary as we will be fetching the data mainly from backend itself
export const MhtCetVideoCardTitleList : Array<string> = [
    "First title", 
    "Second title", 
    "Third title"
]




// BLOG RELATED CONSTANTS FOR JEE ADVANCE EXAM PAGE

// constants for the heading of the jee advance exam page 
export const MhtCetHeadingList : Array<string> = [
    "MH CET 2025 Exam History", 
    "Who Conducts MH CET Exam", 
    "MH CET 2025 Exam Dates", 
    "MH CET 2025 Exam Overview", 
    "MH CET 2025 Exam Schedule", 
    "",
    "MH CET 2025 Exam Pattern", 
    "",
    "MH CET 2025 Cutoff", 
    "MH CET 2025 Exam Eligibility", 
    "MH CET 2025 Qaulifications Criteria",
    "MH CET 2025 Exam Age Criteria", 
    "MH CET 2025 State of Eligibility", 
    "MH CET 2025 Syllabus", 
    "",
    "MH CET 2025 Exam Center", 
    "MH CET 2025 Results", 
    "MH CET 2025 Marks vs Rank", 
    "MH CET Counselling Process" 
]


// constant for the table of content on the page
export const MhtCetTableOfContentList : Array<string> = [
    "MH CET 2025 Exam History", 
    "Who Conducts MH CET Exam", 
    "MH CET 2025 Exam Dates", 
    "MH CET 2025 Exam Overview", 
    "MH CET 2025 Exam Schedule", 
    "",
    "MH CET 2025 Exam Pattern",
    "", 
    "MH CET 2025 Cutoff", 
    "MH CET 2025 Exam Eligibility", 
    "MH CET 2025 Qaulifications Criteria",
    "MH CET 2025 Exam Age Criteria", 
    "MH CET 2025 State of Eligibility", 
    "MH CET 2025 Syllabus", 
    "",
    "MH CET 2025 Exam Center", 
    "MH CET 2025 Results", 
    "MH CET 2025 Marks vs Rank", 
    "MH CET Counselling Process"
]


// constant for heading id 
// do note that in order to identify each of the ids uniquely and then use this to build the feature 
// in order to go to the section where the user has click in table of contents 
export const MhtCetHeadingIdList : Array<string> = [
    "exam-mhtcet-h1",
    "exam-mhtcet-h2",
    "exam-mhtcet-h3",
    "exam-mhtcet-h4",
    "exam-mhtcet-h5",
    "",
    "exam-mhtcet-h6",
    "",
    "exam-mhtcet-h7",
    "exam-mhtcet-h8",
    "exam-mhtcet-h9",
    "exam-mhtcet-h10",
    "exam-mhtcet-h11",
    "exam-mhtcet-h12",
    "",
    "exam-mhtcet-h13",
    "exam-mhtcet-h14",
    "exam-mhtcet-h15",
    "exam-mhtcet-h16",
]


// defining the array of image that will be used for the blog section for MHTCET exam
export const MhCetExamPageImageList : Array<string | null> = [
    // "MH CET 2025 Exam History", 
    null,
    // "Who Conducts MH CET Exam", 
    null,
    // "MH CET 2025 Exam Dates", 
    MhtCetExamDatesImage,
    // "MH CET 2025 Exam Overview", 
    null,
    // "MH CET 2025 Exam Schedule", 
    MhtCetExamScheduleImage1,
    // "MH CET 2025 Exam Schedule - SECTION 2",
    MhtCetExamScheduleImage2,
    // "MH CET 2025 Exam Pattern", 
    MhtCetExamPatternImage,
    // "MH CET 2025 Exam Pattern - SECTION 2",
    null,
    // "MH CET 2025 Cutoff", 
    null,
    // "MH CET 2025 Exam Eligibility", 
    null,
    // "MH CET 2025 Qaulifications Criteria",
    null,
    // "MH CET 2025 Exam Age Criteria", 
    null,
    // "MH CET 2025 State of Eligibility", 
    null,
    // "MH CET 2025 Syllabus", 
    null,
    // "MH CET 2025 Syllabus - SECTION 2",
    null,
    // "MH CET 2025 Exam Center", 
    null,
    // "MH CET 2025 Results", 
    null,
    // "MH CET 2025 Marks vs Rank", 
    null,
    // "MH CET Counselling Process"
    null,
]




// finally the constant for the content that will be present on the page
export const MhtCetContentList : Array<string> = [
// "MH CET 2025 Exam History", 
`The Government of Maharashtra has established "ADMISSIONS REGULATING AUTHORITY AND STATE COMMON ENTRANCE TEST CELL" as per the provisions of the Maharashtra Unaided Private Professional Educational Institutions (Regulation of Admissions & Fees) Act. 2015 (Mah. Act No. XXVIII of 2015)`,

// "Who Conducts MH CET Exam", 
`The Commissioner of State CET Cell, has been designated as Competent Authority for conducting MHT-CET 2025 and selection of candidates for admission to the first year of Bachelor of Engineering and Technology, Planning, Planning Courses and First Year of Master of Engineering and Technology (Integrated), Pharm. D PG course for the Academic Year 2025-26.`,

// "MH CET 2025 Exam Dates", 
`Exam date for MH CET 2025 will be released soon on the official website.

Following are the scheduled of MH CET 2024:
`,

// "MH CET 2025 Exam Overview", 
`Application Form for MHT-CET 2025 will be filled through Online Mode only. The Information Brochure for MHT-CET 2024 and the User Manual for filling up the online application form is available on web site <span style ="color : white;" class="underline""><a href="www.mahacet.org" target="_blank" rel="noopener noreferrer">www.mahacet.org</a> </span> to watch marks vs percentile for JEE main 2025(here we will add the youtube video
link) Candidate is advised to download and print the user manual for filling up the online application form. For submission of online application form the candidates should login at <span style ="color : blue;" class="underline""><a href="www.mahacet.org" target="_blank" rel="noopener noreferrer">mahacet.org</a> </span>  in website. The detailed procedure for online submission of application form is given in the user manual. Please quote your Application no. in all future correspondence with the State CET Cell Office.`,

// "MH CET 2025 Exam Schedule", 
`
The examination will be conducted at various centers across the state Maharashtra as well as outside Maharashtra states by Online mode (Computer Based Test) for PCM and PCB groups separately.

The candidate will have the choice of appearing in any one or both examinations. The group wise schedule will be shared with the candidate later on. The option once exercised will not be altered, under any condition.

`,


// "MH CET 2025 Exam Schedule - SECTION 2", 
`
`,

// "MH CET 2025 Exam Pattern", 
`
There will be no Negative Marking, however difficulty level will be at par with the JEE (Main) for Mathematics, Physics, Chemistry and difficulty level for Biology will be at par with NEET. The questions will be mainly application based.

MHT-CET 2025 will consist of 3 question paper of Multiple Choice Question (MCQ) and each paper will be of 100 marks. 

<span style = "color : white; font-weight: bold;" class="">Details are as given below: </span>`,


// "MH CET 2025 Exam Pattern - SECTION 2",
`
Language of Question Paper: The medium for examination shall be English / Marathi / Urdu for Physics, Chemistry and Biology. However, Mathematics paper shall be only in English only. The option of medium/language of question paper once exercised by the candidate shall be irrevocable. 

Candidates are instructed to please select the Medium /Language of Question Paper very carefully before submitting the application of MHT CET 2025 examination.
`,

// "MH CET 2025 Cutoff", 
`Will be declared soon,join group to get latest update as soon as they releases ,we will notify you.
`,

// "MH CET 2025 Exam Eligibility", 
`Candidature Type. (1) Maharashtra State Candidate - A Candidate can claim only one type of Maharashtra State Candidature Type i.e. from Type A to E.
`,

// "MH CET 2025 Qaulifications Criteria",
`All the candidates passed/ appearing at the qualifying examination i.e. HSC/12th Standard examination or its equivalent examination and having Indian Nationality are eligible for appearing for MHT-CET 2025. There is no age limit for admission to MHT-CET 2025
`,

// "MH CET 2025 Exam Age Criteria", 
`There is no age limit for admission to MHT-CET 2025
`,

// "MH CET 2025 State of Eligibility", 
`Student who have maharashtra state of residence will be eligible to take benefit of home state
`,

// "MH CET 2025 Syllabus", 
`The question will be set on 
a) Whole Syllabus of Std XII of 2024-25 of Physics, Chemistry, Biology and Mathematics subjects prescribed by State Council of Educational Research and Training, Maharashtra.

b) Syllabus of Std. XI of 2023-24 prescribed by State Council of Educational Research and Training, Maharashtra. as mentioned below:
`,

// "MH CET 2025 Syllabus - SECTION 2",
`
Since XII standard the whole Syllabus is to be covered in the MHT-CET 2025, hence it is not reproduced here.  MHT-CET 2025 result will be declared either in Percentile for Online examination or in Percentage for Offline examination.  Candidate should note that if he/she appearing for both the groups i.e. PCM and PCB, the Percentile score of Physics or Chemistry will not be interchanged among the groups.  

The candidate seeking admission to first year Engineering and Technology, Planning degree courses it is mandatory that the candidate must appear for Physics, Chemistry and Mathematics.  The candidate seeking admission to first year Pharmacy/ Pharm. D degree course it is mandatory that the candidate must appear for Physics, Chemistry as well as Mathematics and/ or Biology.

`,


// "MH CET 2025 Exam Center", 
`
The MHT-CET 2025 will be conducted by online mode (CBTComputer Based Test) at almost all the district headquarters in the State of Maharashtra as well as at Capital Districts of the selected states outside Maharashtra like Bihar, Chhattisgarh, Delhi-NCR, Gujarat, Jharkhand, Karnataka, Telangana, Madhya Pradesh, Rajasthan and Uttar Pradesh depending on the availability of the candidates. 

The eligible candidates passing the qualifying examination can select the examination center of their choice while filling the online application form. The center once allotted shall not be changed under any circumstances. 

If the candidate opted for both the groups i.e. PCM (Physics, Chemistry and Mathematics) and PCB (Physics Chemistry and Biology), he/she may get the different examination centers for the different groups i.e. for PCM they may get one examination center and for PCB they may get another Examination Center. 

Candidates should fill preference options for the preferred examination centers while filling up the MHT CET 2024 application form. State CET Cell, Mumbai will make an attempt to allot the examination center within the District of the candidate, if not in the nearby districts of the candidate. State CET Cell, Mumbai reserves the rights for final allotment of the examination center to the candidate, which will be binding on the candidate
`,

// "MH CET 2025 Results", 
`Details will be notified in due course of time. While declaring the result, if a Candidate remains Absent in any one subject in PCM or PCB, then the Total Marks for PCM or PCB will be declared as ‘ABS’ (Absent) as the case may be.
`,

// "MH CET 2025 Marks vs Rank", 
`Click here to watch complete detail of marks vs rank for MH CET 2025
`,

// "MH CET Counselling Process"
`Click here to know the complete detail of MH CET 2025 counselling process
`,

    
]

