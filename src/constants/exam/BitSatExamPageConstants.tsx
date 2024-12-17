// here comes the constants related to the jee advanced exam page
// importing all the images here for bitsat colleges for this purpose
import BitsatCutoffGoaCampusImage from "../../assets/images/exam/Bitsat/bitsat-cutoff-goa-campus.png"
import BitSatCutoffPilaniCampusImage from "../../assets/images/exam/Bitsat/bitsat-cutoff-pilani-campus.png"
import BitSatCutoffHyderabadCampusImage from "../../assets/images/exam/Bitsat/bitsat-cutoff-hyderabad-campus.png"
import BitSatExamPatternImage from "../../assets/images/exam/Bitsat/Bitsat-exam-pattern.png"
import BitSatNumberOfQuestionImage from "../../assets/images/exam/Bitsat/bitsat-number-of-questions.png"
import BitSatScholarshipImage from "../../assets/images/exam/Bitsat/bitsat-scholarship.png"

//OVERVIEW COMPONENT 
// constant for showing the various options related to jee advance in dropdown button
export const BitSatExamSubMenuList : Array<string> = [
    "BITSAT Exam",
    "BITSAT Syllabus",
    "BITSAT Application",
    "BITSAT Eligibility",
    "BITSAT Dates",
    "BITSAT Admit Card",
]


// this is routes that we will need for the dropdown section
// do note that for every dropdwon option above we need to define the corresponding route here
export const BitSatExamRoutesList : Array<string> = [
    "/exam/bitsat/exam", 
    "/exam/bitsat/syllabus", 
    "/exam/bitsat/application", 
    "/exam/bitsat/eligibility", 
    "/exam/bitsat/dates", 
    "/exam/bitsat/admitcard", 
]



// constants for the names of the buttons that are present in the OVERVIEW section of the page
export const BitSatExamsButtonNameList : Array<string> = [
    "Jee Advance", 
    "Jee Mains", 
    "BITSAT", 
    "WBJEE", 
    "MHTCET"
]

// constans for width of the button that are present in the overview section 
// do note that mostly the width of the button remains the same
// but still we have used this constants to make the code more generic and configurable in future
export const BitSatExamPageButtonWidthList : Array<string> = [
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
export const BitSatExamPageButtonCodesList : Array<string> = [
    "1", 
    "2", 
    "3", 
    "4", 
    "5"
]



// VIDEO CARD RELATED CONSTANTS  : this constant is mainly used for the latest update section 

// constant for the links of the youtube videos to be shown on the website
export const BitSatVideoCardUrlList : Array<string> = [
    "https://www.youtube.com/embed/CHmaw6Vu4_I", 
    "https://www.youtube.com/embed/CHmaw6Vu4_I", 
    "https://www.youtube.com/embed/CHmaw6Vu4_I"
]


// constant for showing the title of the corresponding video 
// this seems to be temporary as we will be fetching the data mainly from backend itself
export const BitSatVideoCardTitleList : Array<string> = [
    "First title", 
    "Second title", 
    "Third title"
]




// BLOG RELATED CONSTANTS FOR JEE ADVANCE EXAM PAGE

// constants for the heading of the jee advance exam page 
export const BitSatHeadingList : Array<string> = [
    "BITSAT Exam History", 
    "Who Conducts BITSAT?", 
    "BITSAT 2025 Exam Dates", 
    "BITSAT 2025 Overview",
    "BITSAT 2025 Exam pattern",
    "",
    "BITSAT 2025 Cutoff ",
    "BITSAT Offered Courses",
    "BITSAT 2025 Eligibility ",
    "BITSAT Exam 2025 Syllabus",
    "BITSAT Results",
    "BITSAT Marks vs Rank",
    "BITSAT 2025 Scholarship",
]


// constant for the table of content on the page
export const BitSatTableOfContentList : Array<string> = [
    "BITSAT Exam History", 
    "Who Conducts BITSAT?", 
    "BITSAT 2025 Exam Dates", 
    "BITSAT 2025 Overview",
    "BITSAT 2025 Exam pattern",
    "",
    "BITSAT 2025 Cutoff ",
    "BITSAT Offered Courses",
    "BITSAT 2025 Eligibility ",
    "BITSAT Exam 2025 Syllabus",
    "BITSAT Results",
    "BITSAT Marks vs Rank",
    "BITSAT 2025 Scholarship",
]


// constant for heading id 
// do note that in order to identify each of the ids uniquely and then use this to build the feature 
// in order to go to the section where the user has click in table of contents 
export const BitSatHeadingIdList : Array<string> = [
    "exam-bitsat-h1",
    "exam-bitsat-h2",
    "exam-bitsat-h3",
    "exam-bitsat-h4",
    "exam-bitsat-h5",
    "",
    "exam-bitsat-h6",
    "exam-bitsat-h7",
    "exam-bitsat-h8",
    "exam-bitsat-h9",
    "exam-bitsat-h10",
    "exam-bitsat-h11",
    "exam-bitsat-h12"
]


// adding the list of images here for bitsat colleges for this purpose
// do note that each heading will have corresponding image in the list 
// if the heading name is empty then this means that the blog section consists of the multiple images this images will also be present in this list  for this purpose
export const BitSatImageList : Array<string | null> = [
    // "BITSAT Exam History",
    null, 
    // "Who Conducts BITSAT?",
    null, 
    // "BITSAT 2025 Exam Dates",
    null, 
    // "BITSAT 2025 Overview",
    null,
    // "BITSAT 2025 Exam pattern",
    BitSatExamPatternImage,
    // "",
    BitSatNumberOfQuestionImage,
    // "BITSAT 2025 Cutoff ",
    null,
    // "BITSAT Offered Courses",
    null,
    // "BITSAT 2025 Eligibility ",
    null,
    // "BITSAT Exam 2025 Syllabus",
    null,
    // "BITSAT Results",
    null,
    // "BITSAT Marks vs Rank",
    null,
    // "BITSAT 2025 Scholarship",
    null,
]
// finally the constant for the content that will be present on the page
export const BitSatContentList : Array<string> = [
// "BITSAT Exam History",
`Since 2005, admission to first-degree in BITS has been offered on the basis of the student's performance in the all-India entrance examination, the Birla Institute of Technology and Science Admission Test (BITSAT) 
`, 


// "Who Conducts BITSAT?",
`BIT Pilani Conduct exam every year for the admission in BITS PILANI CAMPUS,GOA CAMPUS,HYDERABAD CAMPUS
`, 


// "BITSAT 2025 Exam Dates",
`To be released soon ,we will notify you once released so join our counselling group for all updated`, 


// "BITSAT 2025 Overview",
`"Computer Based Online test" means the candidate sits in front of a computer and the questions are presented on the computer monitor and the candidate answers the questions on the computer by using keyboard or mouse. 

Each computer is connected to a server, which prepares the question set and delivers it to the candidate on the computer. This is unlike the traditional paper-pencil based test, which is generally offered on a single day to all candidates

<span style = "color : white; font-weight: bold; font-size: larger;">Salient features of BITSAT-2024 are given below:
</span>
1. A candidate may appear a maximum of two times in BITSAT-2025 

2. The examination will be organized in two sets of dates, BITSAT Session-1 and BITSAT Session-2, separated by a gap of a few weeks. The candidate can choose the Center, the Day, and slot of his/her convenience to take the test, as described later in this document.

3. A candidate may opt to appear twice, even at the time of the first application. Such a candidate will then choose one slot from the first set of dates and another from the second.  

4. A candidate may opt for Session-1’ or ‘BOTH’. 

5. A candidate may also choose to appear the second time after the first appearance. To facilitate this process, there will be a period during which candidates who have appeared during Session-1 but had not originally exercised the option to appear twice, will be allowed to apply to appear a second time.  

6.Those who did not apply/appear in Session-1 can also apply to appear in Session-2 during the second application window as mentioned in ‘Important dates and deadlines#’ below.

7. The application window will reopen immediately for Session-2 after the first date of Session-1 of BITSAT.  

8. A candidate who chooses to appear twice will have to pay a sum of Rs. 5400 (for a male candidate) and Rs. 4400 (for a female candidate).  

9. A candidate who opts to appear once (Session-1 or Session-2), will pay a fee of Rs. 3400 (for a male candidate) and Rs. 2900 (for a female candidate).  

10. If a candidate who opts to appear to Session-1 only, chooses then to apply separately to appear a second time (Session-2), then he/she will have to pay an additional sum of Rs. 2000 (for a male candidate) and Rs. 1500 (for a female candidate).  

11. The application fee is non-refundable and non-transferrable.  
For a candidate who has appeared twice in BITSAT-2025, and then seeks admission to any of the First Degree programmes in BITS Pilani, the higher of the two scores will be considered for admission.

`,


// "BITSAT 2025 Exam pattern",
`<span style = "color : white; font-weight: bold; font-size: medium;">Each session of BITSAT-2025 will of 3 hours duration (without break),comprising the following 4 parts
</span>`,

// BITSAT 2025 EXAM PATTERN Section 2 
`All question are of objective type(multiple choices questions):each question with a choices of four answer, only one being correct choice.

Each correction answer fetch 3 marks,while each incorrect answer has a penalty of mark(-1 mark).No marks are awarded for questions not attempted.While the candidate can skip a question,the computer will not allowed the candidate to choose more than one option as a correct answer.

<span style = "color : white; font-weight: bold; font-size: medium;">There will be 130 questions in all.The number of question in each part as as follow:
</span>

`,

// "BITSAT 2025 Cutoff ",
``,


// "BITSAT Offered Courses",
``,


// "BITSAT 2025 Eligibility ",
``,


// "BITSAT Exam 2025 Syllabus",
``,


// "BITSAT Results",
``,


// "BITSAT Marks vs Rank",
``,


// "BITSAT 2025 Scholarship",
``,
    
]

