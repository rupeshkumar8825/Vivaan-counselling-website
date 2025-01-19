// here comes the constants related to the jee advanced exam page
// importing all the images here for bitsat colleges for this purpose
import BitsatCutoffGoaCampusImage from "../../assets/images/exam/Bitsat/bitsat-cutoff-goa-campus.png"
import BitSatCutoffPilaniCampusImage from "../../assets/images/exam/Bitsat/bitsat-cutoff-pilani-campus.png"
import BitSatCutoffHyderabadCampusImage from "../../assets/images/exam/Bitsat/bitsat-cutoff-hyderabad-campus.png"
import BitSatExamPatternImage from "../../assets/images/exam/Bitsat/Bitsat-exam-pattern.png"
import BitSatNumberOfQuestionImage from "../../assets/images/exam/Bitsat/bitsat-number-of-questions.png"
import BitSatScholarshipImage from "../../assets/images/exam/Bitsat/bitsat-scholarship.png"
import ClickHereLogo from "../../assets/images/other/click-here-logo.png"


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
    "",
    "",
    "BITSAT 2025 Offered Courses",
    "BITSAT 2025 Eligibility ",
    "BITSAT Exam 2025 Syllabus",
    "BITSAT 2025 Results",
    "BITSAT 2025 Marks vs Rank",
    "BITSAT 2025 Scholarship",
    ""
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
    "",
    "",
    "BITSAT 2025 Offered Courses",
    "BITSAT 2025 Eligibility ",
    "BITSAT Exam 2025 Syllabus",
    "BITSAT 2025 Results",
    "BITSAT 2025 Marks vs Rank",
    "BITSAT 2025 Scholarship",
    ""
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
    "",
    "",
    "exam-bitsat-h7",
    "exam-bitsat-h8",
    "exam-bitsat-h9",
    "exam-bitsat-h10",
    "exam-bitsat-h11",
    "exam-bitsat-h12",
    ""
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
    BitSatCutoffPilaniCampusImage,
    //"",
    BitSatCutoffHyderabadCampusImage,
    //"",
    BitsatCutoffGoaCampusImage,
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
    BitSatScholarshipImage,
    // ""
    null
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

<span style = "color : white; font-weight: bold; font-size: larger;">Salient features of BITSAT-2025 are given below:
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
`Cutoff will be released soon on official website. Below are the official cutoff for BITSAT 2024 : 

<span style = "color : white; font-weight: bold; font-size: larger;">For Pilani Campus:
</span>`,

// BITSAT 2025 Cutoff blog section 2
`<span style = "color : white; font-weight: bold; font-size: larger;">For Hyderabad Campus:
</span>`,
// BITSAT 2025 Cutoff blog section 3
`<span style = "color : white; font-weight: bold; font-size: larger;">For Goa Campus:
</span>`,

// "BITSAT Offered Courses",
`1. At BITS Pilani – Pilani Campus:

B.E.: Chemical, Civil, Computer Science, Electrical and Electronics, Electronics & Instrumentation, Electronics & Communication, Mathematics and Computing, Mechanical, and Manufacturing. B. Pharm.

 M.Sc.: Biological Sciences, Chemistry, Economics, Mathematics, Physics and
 M.Sc.: General Studies. 

2. At BITS Pilani – K. K. Birla Goa Campus: B.E.: Chemical, Computer Science, Electronics & Communication, Electrical and Electronics, Electronics & Instrumentation, Mathematics and Computing, and Mechanical. 

M.Sc.: Biological Sciences, Chemistry, Economics, Mathematics, and Physics. 

3. At BITS Pilani – Hyderabad Campus: B.E.: Chemical, Civil, Computer Science, Electronics & Communication, Electrical and Electronics, Electronics & Instrumentation, Mathematics and Computing, and Mechanical. B. Pharm.

 M.Sc.: Biological Sciences, Chemistry, Economics, Mathematics, and Physics.

The candidates who join in M.Sc. programme are eligible to apply for dual degree in Engineering at BITS Pilani after completion of first year. This assignment is made by competition on their performance at BITS at the end of the first year. 

(For more details refer to Admissions Modality available on the BITS admissions website: www.bitsadmission.com)

Candidates appearing for the BITSAT-2025, based on their BITSAT score, will not only have the opportunity to apply for Admissions in First Degree (e.g., B.E. M.Sc., B. Pharm.) 

Programmes offered for the entire duration of the programmes exclusively by the Indian Campuses of BITS Pilani but also will have the opportunity to apply for a few selected Joint-Collaborative Programmes offered by BITS Pilani and a few reputed International Universities in Australia and USA (e.g., RMIT University Melbourne, Iowa State University, Ames, USA, and University at Buffalo, New York, USA). 

These Joint-Collaborative Programmes initiatives will allow students to spend their initial two years at the BITS Pilani campus in India, benefiting from cutting-edge facilities and esteemed faculty resources of BITS Pilani. 

Subsequently, students admitted under Joint-Collaborative Programmes will spend the remaining two years at their chosen foreign university, providing access to a world-class international education. More details about the JointCollaborative Programmes initiatives shall be available on the website in due course of time.

`,


// "BITSAT 2025 Eligibility ",
`
Admissions to all the programmes are subject to the conditions given below: The candidate should have obtained a minimum of aggregate 75% marks in Physics, Chemistry and Mathematics subjects (if he/she has taken Mathematics in BITSAT) or a minimum of aggregate 75% marks in Physics, Chemistry and Biology subjects (if he/she has taken Biology in BITSAT) in the 12th examination, with at least 60% marks in each of the Physics, Chemistry, and Mathematics/ Biology subjects. 

Only Students who are appearing for the 12th examination in 2025 or who have passed the 12th Examination in 2024 are eligible to appear in the BITSAT-2025 test. 

If a candidate has taken more than one attempt in the 12th class or its equivalent, only his latest performance is considered, provided this attempt has been for the full component of subjects/courses prescribed. 

Students who have passed the 12th examination in 2023 or earlier are NOT eligible to appear in BITSAT-2025. Students who are presently studying in BITS at any of its campuses are not eligible to appear in BITSAT-2025. 

Admissions will be made purely on merit. The merit position of the candidate for admission will be based on the score obtained by the candidate in the BITSAT-2025. 

However, their eligibility for admission is subject to fulfilling the requirement of minimum marks in the 12th examination, as mentioned above. 

Direct Admission to Board Toppers: In the past, the admission process of the Institute always ensured guaranteed admission to all the students who obtained first ranks in their respective board examinations. This has given a very vital input of highly meritorious students from all over India. 

First rank students of State and Central boards in India for the year 2025 will be given direct admission to the programme of their choice, irrespective of their BITSAT-2025 score as per the eligibility criteria. The detailed eligibility criteria, application procedure, and prescribed application form will be available tentatively by third week of June, 2025 at www.bitsadmission.com `,


// "BITSAT Exam 2025 Syllabus",
`<a href="https://jeemain.nta.nic.in" target="_blank" rel="noopener noreferrer"><img src=${ClickHereLogo} alt="Download Icon" style="width: 70px; height: 20px; margin-left: 0px; border-radius:8px; display:inline-block; vertical-align:middle;" /></a> to download the syllabus of bitsat exam 2025
`,


// "BITSAT Results",
`At the completion of the test, the computer will announce the result to the candidate in terms of the number of total correct answers and wrong answers, with the score. 

After completion of the test, the candidate will logout of the test only after entering the scored marks in the test window. The candidate cannot logout without entering the correct scored marks in the test window. 

This activity confirms that the student has checked his/her marks before logging out of the test window. The candidate can also check his or her score report at the BITS admission website on the next day of his or her test date. The candidate can also take a printout of his or her score report for any further usage.
`,


// "BITSAT Marks vs Rank",
`<a href="https://jeemain.nta.nic.in" target="_blank" rel="noopener noreferrer"><img src=${ClickHereLogo} alt="Download Icon" style="width: 70px; height: 20px; margin-left: 0px; border-radius:8px; display:inline-block; vertical-align:middle;" /></a> to watch complete detail of marks vs rank in bitsat 2025
`,


// "BITSAT 2025 Scholarship",
`A large number of scholarship and fellowship and other financial assistance are available to the students of the institute such as institute of own merit or merit-cum need award for students.About 30% of the student receive some form of financial assistance or other even before admission.For continuances of scholarship, scholarship holders need to maintain good scholastic and maintain good conduct.

1. For FD students:For every year about 30% of students admitted to first degree programm get semester tuition fee waiver in the range between 15-100% in the form of either merit or merit-cum need scholarship as tabulated below:
`,

// BITSAT 2025 Scholarship blog section 2
`Note:There will no waiver on admission fee

(b)All awards are made for one semester only and their continuance in subsequent semester will depend on candidate performance in the institute and his/her need 
`,
]

