// here comes the constants related to the jee advanced exam page

//OVERVIEW COMPONENT 
// constant for showing the various options related to jee advance in dropdown button
export const JeeAdvanceExamSubMenuList : Array<string> = [
    "Jee Advance Exam",
    "Jee Advance Syllabus",
    "Jee Advance Application",
    "Jee Advance Eligibility",
    "Jee Advance Dates",
    "Jee Advance Admit Card",
]


// this is routes that we will need for the dropdown section
// do note that for every dropdwon option above we need to define the corresponding route here
export const JeeAdvanceExamRoutesList : Array<string> = [
    "/exam/jeeadvance/exam", 
    "/exam/jeeadvance/syllabus", 
    "/exam/jeeadvance/application", 
    "/exam/jeeadvance/eligibility", 
    "/exam/jeeadvance/dates", 
    "/exam/jeeadvance/admitcard", 
]



// constants for the names of the buttons that are present in the OVERVIEW section of the page
export const JeeAdvanceExamsButtonNameList : Array<string> = [
    "Jee Advance", 
    "Jee Mains", 
    "BITSAT", 
    "WBJEE", 
    "MHTCET"
]

// constans for width of the button that are present in the overview section 
// do note that mostly the width of the button remains the same
// but still we have used this constants to make the code more generic and configurable in future
export const JeeAdvanceExamPageButtonWidthList : Array<string> = [
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
export const JeeAdvanceExamPageButtonCodesList : Array<string> = [
    "1", 
    "2", 
    "3", 
    "4", 
    "5"
]



// VIDEO CARD RELATED CONSTANTS  : this constant is mainly used for the latest update section 

// constant for the links of the youtube videos to be shown on the website
export const JeeAdvanceVideoCardUrlList : Array<string> = [
    "https://www.youtube.com/embed/CHmaw6Vu4_I", 
    "https://www.youtube.com/embed/CHmaw6Vu4_I", 
    "https://www.youtube.com/embed/CHmaw6Vu4_I"
]


// constant for showing the title of the corresponding video 
// this seems to be temporary as we will be fetching the data mainly from backend itself
export const JeeAdvanceVideoCardTitleList : Array<string> = [
    "First title", 
    "Second title", 
    "Third title"
]




// BLOG RELATED CONSTANTS FOR JEE ADVANCE EXAM PAGE

// constants for the heading of the jee advance exam page 
export const JeeAdvanceHeadingList : Array<string> = [
    "Jee Advance Exam History", 
    "Who Conducts Jee Advance?", 
    "Jee Advance 2025 Exam Dates", 
    "JEE Advanced 2025 Exam Patten",
    "Jee Advance 2025 Cutoff ",
    "Jee Advance 2025 Eligibility ",
    "Jee Advance 2025 Age Limit", 
    "Jee Advance 2025 State of eligibility ",
    "Jee Advance 2025 Syllabus ",
    "Jee Advance 2025 Results", 
    "Jee Advance Marks vs Rank", 
    "Jee Advance Counselling Process"
]


// constant for the table of content on the page
export const JeeAdvanceTableOfContentList : Array<string> = [
    "Jee Advance Exam History", 
    "Who Conducts Jee Advance?", 
    "Jee Advance 2025 Exam Dates", 
    "JEE Advanced 2025 Exam Patten",
    "Jee Advance 2025 Cutoff ",
    "Jee Advance 2025 Eligibility ",
    "Jee Advance 2025 Age Limit", 
    "Jee Advance 2025 State of eligibility ",
    "Jee Advance 2025 Syllabus ",
    "Jee Advance 2025 Results", 
    "Jee Advance Marks vs Rank", 
    "Jee Advance Counselling Process"
]


// constant for heading id 
// do note that in order to identify each of the ids uniquely and then use this to build the feature 
// in order to go to the section where the user has click in table of contents 
export const JeeAdvanceHeadingIdList : Array<string> = [
    "exam-jeeadvance-h1",
    "exam-jeeadvance-h2",
    "exam-jeeadvance-h3",
    "exam-jeeadvance-h4",
    "exam-jeeadvance-h5",
    "exam-jeeadvance-h6",
    "exam-jeeadvance-h7",
    "exam-jeeadvance-h8",
    "exam-jeeadvance-h9",
    "exam-jeeadvance-h10",
    "exam-jeeadvance-h11",
    "exam-jeeadvance-h12",
]



// finally the constant for the content that will be present on the page
export const JeeAdvanceContentList : Array<string> = [
    
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



// Constants for the jee advanced exam sub page comes here
// Constants for the JEE Advance Admit Card sub page
export const JeeAdvanceAdmitCardHeadingList: Array<string> = [
    "How to Download JEE Advance Admit Card",
    "Details Mentioned on Admit Card",
    "Discrepancies in Admit Card",
    "Documents Required with Admit Card",
    "JEE Advance Admit Card Instructions",
    "FAQs on JEE Advance Admit Card"
];


// Constants for the heading IDs for the JEE Advance Admit Card sub page
export const JeeAdvanceAdmitCardHeadingIdList: Array<string> = [
    "admitcard-h1",
    "admitcard-h2",
    "admitcard-h3",
    "admitcard-h4",
    "admitcard-h5",
    "admitcard-h6"
];

// Constants for the table of content for the JEE Advance Admit Card sub page
export const JeeAdvanceAdmitCardTableOfContentList: Array<string> = [
    "How to Download JEE Advance Admit Card",
    "Details Mentioned on Admit Card",
    "Discrepancies in Admit Card",
    "Documents Required with Admit Card",
    "JEE Advance Admit Card Instructions",
    "FAQs on JEE Advance Admit Card"
];


export const JeeAdvanceAdmitCardContentList: Array<string> = [
    "To download the JEE Advance Admit Card, candidates need to visit the official website and log in using their credentials. Follow the steps provided on the website to download and print the admit card.",
    "The admit card contains details such as the candidate's name, roll number, exam center, date and time of the exam, and other important instructions.",
    "In case of any discrepancies in the admit card, candidates should immediately contact the exam authorities to get them rectified.",
    "Candidates must carry a valid photo ID proof along with the admit card to the exam center. Acceptable ID proofs include Aadhar card, passport, driving license, etc.",
    "Candidates should carefully read and follow the instructions mentioned on the admit card to avoid any issues on the exam day.",
    "Frequently asked questions about the JEE Advance Admit Card include queries about the download process, correction of details, and what to do if the admit card is lost."
];

// Constants for the JEE Advance Application sub page
export const JeeAdvanceApplicationHeadingList: Array<string> = [
    "JEE Advance Application Process",
    "Application Fee",
    "Documents Required for Application",
    "How to Fill the Application Form",
    "Application Form Correction",
    "FAQs on JEE Advance Application"
];

// Constants for the heading IDs for the JEE Advance Application sub page
export const JeeAdvanceApplicationHeadingIdList: Array<string> = [
    "application-h1",
    "application-h2",
    "application-h3",
    "application-h4",
    "application-h5",
    "application-h6"
];

// Constants for the table of content for the JEE Advance Application sub page
export const JeeAdvanceApplicationTableOfContentList: Array<string> = [
    "JEE Advance Application Process",
    "Application Fee",
    "Documents Required for Application",
    "How to Fill the Application Form",
    "Application Form Correction",
    "FAQs on JEE Advance Application"
];


export const JeeAdvanceApplicationContentList: Array<string> = [
    "The JEE Advance application process involves registering on the official website, filling in personal and academic details, uploading required documents, and paying the application fee.",
    "The application fee varies based on the candidate's category and gender. Detailed information about the fee structure is available on the official website.",
    "Candidates need to upload scanned copies of their photograph, signature, and other required documents as specified in the application guidelines.",
    "To fill the application form, candidates should follow the step-by-step instructions provided on the official website. Ensure all details are entered correctly before submitting the form.",
    "In case of any errors in the submitted application form, candidates can make corrections during the application correction window provided by the authorities.",
    "Frequently asked questions about the JEE Advance Application include queries about the registration process, fee payment, document upload, and form correction."
];

// Constants for the JEE Advance Dates sub page
export const JeeAdvanceDatesHeadingList: Array<string> = [
    "Important Dates for JEE Advance",
    "Application Form Release Date",
    "Admit Card Release Date",
    "Exam Date",
    "Result Declaration Date",
    "Counselling Schedule"
];


// Constants for the heading IDs for the JEE Advance Dates sub page
export const JeeAdvanceDatesHeadingIdList: Array<string> = [
    "dates-h1",
    "dates-h2",
    "dates-h3",
    "dates-h4",
    "dates-h5",
    "dates-h6"
];

// Constants for the table of content for the JEE Advance Dates sub page
export const JeeAdvanceDatesTableOfContentList: Array<string> = [
    "Important Dates for JEE Advance",
    "Application Form Release Date",
    "Admit Card Release Date",
    "Exam Date",
    "Result Declaration Date",
    "Counselling Schedule"
];
export const JeeAdvanceDatesContentList: Array<string> = [
    "Candidates should keep track of all important dates related to JEE Advance, including application form release, admit card release, exam date, result declaration, and counselling schedule.",
    "The application form for JEE Advance is usually released in the month of May. Candidates should check the official website for the exact date.",
    "The admit card for JEE Advance is typically released a few weeks before the exam date. Candidates should download and print their admit card as soon as it is available.",
    "The JEE Advance exam is usually conducted in the month of June. The exact date is announced by the exam authorities on the official website.",
    "The result for JEE Advance is declared a few weeks after the exam. Candidates can check their results on the official website using their roll number and other required details.",
    "The counselling schedule for JEE Advance is announced after the declaration of results. Candidates should keep track of the counselling dates and participate in the process as per the schedule."
];


// Constants for the JEE Advance Details sub page
export const JeeAdvanceDetailsHeadingList: Array<string> = [
    "JEE Advance Exam Details",
    "Exam Pattern",
    "Marking Scheme",
    "Subjects Covered",
    "FAQs on JEE Advance Details"
];

// Constants for the heading IDs for the JEE Advance Details sub page
export const JeeAdvanceDetailsHeadingIdList: Array<string> = [
    "details-h1",
    "details-h2",
    "details-h3",
    "details-h4",
    "details-h5"
];

// Constants for the table of content for the JEE Advance Details sub page
export const JeeAdvanceDetailsTableOfContentList: Array<string> = [
    "JEE Advance Exam Details",
    "Exam Pattern",
    "Marking Scheme",
    "Subjects Covered",
    "FAQs on JEE Advance Details"
];

export const JeeAdvanceDetailsContentList: Array<string> = [
    "The JEE Advance exam is conducted for admission to various undergraduate engineering programs. It is one of the most challenging entrance exams in India.",
    "The exam pattern includes multiple-choice questions, numerical answer type questions, and match the following type questions. The exam is divided into two papers.",
    "The marking scheme varies for different sections. Some questions may have negative marking, while others may not. Candidates should carefully read the instructions before attempting the questions.",
    "The subjects covered in the JEE Advance exam include Physics, Chemistry, and Mathematics. Each subject has equal weightage in the exam.",
    "Frequently asked questions about the JEE Advance Details include queries about the exam pattern, marking scheme, subjects covered, and preparation tips."
];

// Constants for the JEE Advance Eligibility sub page
export const JeeAdvanceEligibilityHeadingList: Array<string> = [
    "Eligibility Criteria for JEE Advance",
    "Age Limit",
    "Educational Qualifications",
    "Number of Attempts",
    "Reservation Criteria",
    "FAQs on JEE Advance Eligibility"
];

// Constants for the heading IDs for the JEE Advance Eligibility sub page
export const JeeAdvanceEligibilityHeadingIdList: Array<string> = [
    "eligibility-h1",
    "eligibility-h2",
    "eligibility-h3",
    "eligibility-h4",
    "eligibility-h5",
    "eligibility-h6"
];

// Constants for the table of content for the JEE Advance Eligibility sub page
export const JeeAdvanceEligibilityTableOfContentList: Array<string> = [
    "Eligibility Criteria for JEE Advance",
    "Age Limit",
    "Educational Qualifications",
    "Number of Attempts",
    "Reservation Criteria",
    "FAQs on JEE Advance Eligibility"
];

export const JeeAdvanceEligibilityContentList: Array<string> = [
    "Candidates must meet the eligibility criteria set by the exam authorities to appear for JEE Advance. This includes age limit, educational qualifications, and number of attempts.",
    "The age limit for JEE Advance is usually 25 years for general category candidates. There is a relaxation of 5 years for SC, ST, and PwD candidates.",
    "Candidates must have passed the 12th standard or equivalent examination with Physics, Chemistry, and Mathematics as compulsory subjects.",
    "Candidates can attempt JEE Advance a maximum of two times in consecutive years.",
    "Reservation criteria are applicable as per the government norms. There are reserved seats for SC, ST, OBC, and PwD candidates.",
    "Frequently asked questions about the JEE Advance Eligibility include queries about age limit, educational qualifications, number of attempts, and reservation criteria."
];

// Constants for the JEE Advance Syllabus sub page
export const JeeAdvanceSyllabusHeadingList: Array<string> = [
    "JEE Advance Syllabus Overview",
    "Physics Syllabus",
    "Chemistry Syllabus",
    "Mathematics Syllabus",
    "FAQs on JEE Advance Syllabus"
];

// Constants for the heading IDs for the JEE Advance Syllabus sub page
export const JeeAdvanceSyllabusHeadingIdList: Array<string> = [
    "syllabus-h1",
    "syllabus-h2",
    "syllabus-h3",
    "syllabus-h4",
    "syllabus-h5"
];

// Constants for the table of content for the JEE Advance Syllabus sub page
export const JeeAdvanceSyllabusTableOfContentList: Array<string> = [
    "JEE Advance Syllabus Overview",
    "Physics Syllabus",
    "Chemistry Syllabus",
    "Mathematics Syllabus",
    "FAQs on JEE Advance Syllabus"
];

export const JeeAdvanceSyllabusContentList: Array<string> = [
    "The JEE Advance syllabus covers topics from Physics, Chemistry, and Mathematics. It is important for candidates to be thorough with the syllabus to perform well in the exam.",
    "The Physics syllabus includes topics such as Mechanics, Electricity and Magnetism, Optics, Modern Physics, and Thermal Physics.",
    "The Chemistry syllabus includes topics such as Physical Chemistry, Inorganic Chemistry, and Organic Chemistry.",
    "The Mathematics syllabus includes topics such as Algebra, Trigonometry, Calculus, Vectors, and Analytical Geometry.",
    "Frequently asked questions about the JEE Advance Syllabus include queries about the topics covered, weightage of different sections, and preparation tips."
];