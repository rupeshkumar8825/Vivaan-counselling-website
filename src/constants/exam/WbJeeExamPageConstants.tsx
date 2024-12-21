// here comes the constants related to the jee advanced exam page
// importing the required images to be shown on the blog page for this purpose

import WbJeeExamPatternImage from "../../assets/images/exam/WbJee/WbJee-Exam-Pattern.png"
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
    "WBJEE Exam History", 
    "Who Conducts WBJEE 2025 Exam", 
    "WBJEE 2025 Exam Dates", 
    "WBJEE 2025 Exam Pattern", 
    "WBJEE 2025 Cutoff",
    "WBJEE 2025 Eligiblity", 
    "WBJEE 2025 Qualification Criteria", 
    "WBJEE 2025 Age Criteria", 
    "WBJEE 2025 Syllabus", 
    "WBJEE 2025 Results", 
    "WBJEE Marks vs Rank", 
    "WBJEE 2025 Counselling Process"
]


// constant for the table of content on the page
export const WbJeeTableOfContentList : Array<string> = [
    "WBJEE Exam History", 
    "Who Conducts WBJEE 2025 Exam", 
    "WBJEE 2025 Exam Dates", 
    "WBJEE 2025 Exam Pattern", 
    "WBJEE 2025 Cutoff",
    "WBJEE 2025 Eligiblity", 
    "WBJEE 2025 Qualification Criteria", 
    "WBJEE 2025 Age Criteria", 
    "WBJEE 2025 Syllabus", 
    "WBJEE 2025 Results", 
    "WBJEE Marks vs Rank", 
    "WBJEE 2025 Counselling Process"
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
    "exam-wbjee-h9",
    "exam-wbjee-h10",
    "exam-wbjee-h11",
    "exam-wbjee-h12"
]



// adding the constants for image list for the webjee for this purpose
export const WbJeeImageList : Array<string | null> = [
    // "WBJEE Exam History", 
    null,
    // "Who Conducts WBJEE 2025 Exam", 
    null,
    // "WBJEE 2025 Exam Dates", 
    null,
    // "WBJEE 2025 Exam Pattern", 
    WbJeeExamPatternImage,
    // "WBJEE 2025 Cutoff",
    null,
    // "WBJEE 2025 Eligiblity", 
    null,
    // "WBJEE 2025 Qualification Criteria", 
    null,
    // "WBJEE 2025 Age Criteria", 
    null,
    // "WBJEE 2025 Syllabus", 
    null,
    // "WBJEE 2025 Results", 
    null,
    // "WBJEE Marks vs Rank", 
    null,
    // "WBJEE 2025 Counselling Process"
    null,
]

// finally the constant for the content that will be present on the page
export const WbJeeContentList : Array<string> = [
    // "WBJEE Exam History", 
`The West Bengal Joint Entrance Examinations Board The West Bengal Joint Entrance Examinations Board (WBJEEB) was established in 1962 by the Government of West Bengal in exercise of the powers conferred under article 162 of the Constitution of India pursuant to No. 828-Edn(T), dated 02.03.1962. 

Subsequently, in 2014, the Government of West Bengal enacted the West Bengal Act XIV of 2014 to form The West Bengal Joint Entrance Examinations Board (hereinafter called ‘Board’) and empowered it to conduct Common Entrance Examinations for the selection of candidates for admission to undergraduate and postgraduate Professional, Vocational and General Degree Courses in the State of West Bengal and to conduct on-line counselling process or otherwise adopting a single-window approach. 

WBJEEB has been instrumental in the admission process based on online application and allotment through e-Counselling since 2012. 

It advocates fairness and transparency, ensures no error, and adopts state-of-the-art technology, in all its activities. 

2.0 West Bengal Joint Entrance Examination-2025 (WBJEE-2025) WBJEEB will conduct OMR based Common Entrance Examination (WBJEE-2025) for admission in the academic session 2025-26 for Undergraduate Courses in Engineering/Technology, Pharmacy and Architecture courses of different Universities, Government Colleges as well as Self-Financing Engineering/Technological Institutes in the State of West Bengal
`,


// "Who Conducts WBJEE 2025 Exam", 
`WBJEEB will conduct OMR based Common Entrance Examination (WBJEE-2025) for admission in the academic session 2025-26 for Undergraduate Courses in Engineering/Technology, Pharmacy and Architecture courses of different Universities, Government Colleges as well as Self-Financing Engineering/Technological Institutes in the State of West Bengal.
`,


// "WBJEE 2025 Exam Dates", 
`To be notified soon on the official website of WBJEE,join the group to get updates as soon as they are released.
`,


// "WBJEE 2025 Exam Pattern", 
`The pattern of Question Papers in WBJEE-2025 All questions will be Multiple-Choice Questions (MCQ), with four options against each question. There will be three categories of questions in each subject. 

<span style = "color : white; font-weight: bold; " class=""> The number of questions, as well as the maximum marks for each, are given in the following table: </span>

`,


// "WBJEE 2025 Cutoff",
`To be released soon on official website, join group to get updates as soon they releases
`,


// "WBJEE 2025 Eligiblity", 
`<span style = "color : white; font-weight: bold; font-size: larger;" class=""> General criteria for admission into Engineering/Technology courses </span>
The following criteria remain in effect, unless specific criteria are stated in Section 3.3. 

As per AICTE , aspiring candidates should have Passed 10+2 examination with Physics/ Mathematics/ Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/ Biotechnology/ Technical Vocational subject/ Agriculture/ Engineering Graphics/ Business Studies/ Entrepreneurship as given in the table 8.4 in AICTE Approval Process Handbook-2024-2027 and as annexed (Appendix-7). 

Agriculture stream (for Agriculture Engineering). Must have obtained at least 45% marks (40% in case of candidates belonging to reserved category, i.e., SC, ST, OBC-A, OBC-B, PWD) taken together in three subjects as mentioned in the table 8.4 in AICTE Approval Process Handbook-2024 and as annexed (Appendix-7). OR Passed D.Voc. Stream in the same or allied sector. 

(The Universities will offer suitable bridge courses such as Mathematics, Physics, Engineering drawing, etc., for the students coming from diverse backgrounds to prepare Level playing field and desired learning outcomes of the programme) N.B.: In addition to the above


<span style = "color : white; font-weight: bold; font-size: larger;" class=""> The following criteria must be fulfilled for taking admission in the University/ Institute/ College in West Bengal.  </span>

i.Must have passed in English in the 12th standard (10+2) or equivalent examination with at least 30% marks.

ii.Required to pass theoretical and practical/project exams in all permitted subject combinations. 

iii.Nevertheless, admission to specific universities (including affiliated institutes) is subject to the admission criteria set by them. Any modifications or additions made by the Competent Authorities will be duly communicated by the Board via the official website prior to the commencement of counselling. 

iv.For nomenclature of different UnderGraduate Courses in Engineering and Technology, it is advised to consult AICTE Approval Process Handbook-2024-2027, Section-11.3, page Nos. 119- 121(See APPENDIX-7a in this Bulletin)

<span style = "color : white; font-weight: bold; font-size: larger;" class=""> General criteria for admission to Pharmacy courses  </span>

These criteria will be applicable unless any special criteria are mentioned under section 3.3. 

a) Candidate must have passed the ‘10+2’ examination with Physics, Chemistry, Mathematics / Biology as compulsory subjects with individual pass marks (in both theory and practical/project wherever applicable) in all the three subjects as stated above. 

b) Must have obtained at least 45% marks (40% in case of candidates belonging to reserved category, i.e. SC, ST, OBC-A, OBC-B, PWD) in the above three subjects, taken together. 

c) Must have passed English in the ‘10+2’ examination with at least 30% marks. 

d) The Board of the said Qualifying Examination must be recognized by the Central Government or State Government concerned.


<span style = "color : white; font-weight: bold; font-size: larger;" class=""> General criteria for admission into five-Year Degree Course in Architecture  </span>


These criteria will be applicable unless any special criteria are mentioned under section 3.3. 

a) As per the norms and standards of the Council of Architecture (COA), No candidate shall be admitted to an architecture course unless she/he has passed an examination at the end of the 10+2 scheme of examination with 50% marks in Physics, Chemistry and Mathematics taken together with individual pass marks and also 50% marks in aggregate of the 10+2 level examination.

b) Candidates must also qualify for the NATA (National Aptitude Test in Architecture) conducted by the Council of Architecture (COA), New Delhi. However, further notification in this regard, if any issued by COA/ NTA also may be applied.


<span style = "color : white; font-weight: bold; font-size: larger;" class=""> General criteria for admission into Marine Engineering  </span>

These criteria will be applicable unless any special criteria are mentioned under section 3.3. 
As per the norms and standards of the Director General of Shipping, Government of India, Candidates must pass Higher Secondary (10+2) Examination of West Bengal Council of Higher Secondary Education or equivalent examination from a recognized Council/Board in regular class mode with: 60% marks in Physics, Chemistry and Mathematics taken together with individual pass marks (both in theory and practical/project wherever applicable) in each of the said subjects. 

Minimum of 50% marks in English as a subject in either the ‘10’ standard or in the ‘10+2’ standard. N.B.: As per the norms and standards of the Director General of Shipping, Government of India, 25% of seats of the total intake of an institution must be filled in at the time of admission; otherwise, the course could not be continued for that academic session by the institution.


<span style = "color : white; font-weight: bold; font-size: larger;" class="">  General criteria for admission into Mining Engineering   </span>

These criteria will be applicable unless any special criteria are mentioned under section 3.3. It is the same as section 3.2.1, but the candidate must not have colour blindness/uniocularity.


`,



// "WBJEE 2025 Qualification Criteria", 
`
The following sections describe the criteria as per the latest communications received from the concerned Authorities. 

(a) Candidates must make themselves aware of the latest applicable rules of different Universities, Institutions, Government Departments, and Regulatory Bodies, like AICTE, PCI etc., at the time of admission. The board will not be responsible in any way if anycandidate fails to make himself/herself aware of any updated information regularly. 

(b) The Board would notify revisions, corrections, modifications, addendum, and corrigendum, if any received from concerned Authorities till the start of counselling.

`,


// "WBJEE 2025 Age Criteria", 
`
The lower age limit is 17 (seventeen) years as of 31.12.2025. A candidate should have been born on or before 31.12.2009. There is no upper age limit for appearing in the examination. ii. However, for admission to the degree-level Marine Engineering Course, the upper age limit is 25 Years as of 31.12.2025.

`,


// "WBJEE 2025 Syllabus", 
`
Click here to download WBJEE 2025 syllabus
`,


// "WBJEE 2025 Results", 
`To be released on WBJEE official website
`,


// "WBJEE Marks vs Rank", 
`Click here to watch marks vs rank in wbjee exam 2025
`,


// "WBJEE 2025 Counselling Process"
`Click here to know the complete counselling process of WBJEE 2025
`,


]

