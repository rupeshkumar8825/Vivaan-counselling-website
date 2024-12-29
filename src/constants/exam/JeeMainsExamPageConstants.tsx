// this file will store the constants related to the jeemain exams page

// importing the images to keep for this purpose
import JeeMainsCutoffImage  from "../../assets/images/exam/JeeMains/Jee-Mains-Cutoff.png"
import JeeMainsExamDateImage from "../../assets/images/exam/JeeMains/Jee-Mains-Exam-Date.png"
import JeeMainsExamPatternImage from "../../assets/images/exam/JeeMains/Jee-Mains-Exam-Pattern.png"
import JeeMainsQualifyingCriteriaImage from "../../assets/images/exam/JeeMains/Jee-Mains-Qualification-criteria.png"
import ClickHereLogo from "../../assets/images/other/click-here-logo.png"

export const JeeMainsExamSubMenuList : Array<string> = [
    "JEE Main Exam",
    "JEE Main Syllabus",
    "JEE Main Application",
    "JEE Main Eligibility",
    "JEE Main Dates",
    "JEE Main Admit Card",
]


export const JeeMainsExamRoutesList : Array<string> = [
    "/exam/jeemains/exam", 
    "/exam/jeemains/syllabus", 
    "/exam/jeemains/application", 
    "/exam/jeemains/eligibility", 
    "/exam/jeemains/dates", 
    "/exam/jeemains/admitcard", 
]



//Overview component related constants comes here for jeemain exam home page
export const JeeMainExamsButtonNameList : Array<string> = [
    "Jee Advance", 
    "Jee Mains", 
    "BITSAT", 
    "WBJEE", 
    "MHTCET"
]

export const JeeMainExamPageButtonWidthList : Array<string> = [
    "36",
    "36",
    "36",
    "36",
    "36",
]

export const JeeMainExamPageButtonCodesList : Array<string> = [
    "1", 
    "2", 
    "3", 
    "4", 
    "5"
]





// Video card related constants for the jeemain exam page. 
// Same constants with different values are required for the other exam home pages(advance, jee main)
export const JeeMainVideoCardUrlList : Array<string> = [
    "https://www.youtube.com/embed/CHmaw6Vu4_I", 
    "https://www.youtube.com/embed/CHmaw6Vu4_I", 
    "https://www.youtube.com/embed/CHmaw6Vu4_I"
]


export const JeeMainVideoCardTitleList : Array<string> = [
    "First title", 
    "Second title", 
    "Third title"
]



// blogs related constants for jee main exam
export const JeeMainsHeadingList : Array<string> = [
    "JEE Main 2025 Exam History", 
    "Who Conducts JEE Main 2025?", 
    "JEE Main 2025 Exam Dates", 
    "JEE Main Overview",
    "JEE Main 2025 Exam Pattern",
    "JEE Main 2025 Cut-off ",
    "JEE Main 2025 Eligibility ",
    "JEE Main 2025 Qualifications Criteria", 
    "JEE Main 2025 Age Criteria ",
    "JEE Main 2025 State of Eligibility ",
    "JEE Main 2025 Syllabus ",
    "JEE Main 2025 Admit Card", 
    "JEE Main 2025 Reservation",
    "JEE Main 2025 Results",
    "JEE Main 2025 Marks vs Percentile", 
    "JEE Main 2025 Counselling Process"
]

export const JeeMainTableOfContentList : Array<string> = [
    "JEE Main 2025 Exam History", 
    "Who Conducts JEE Main 2025?", 
    "JEE Main 2025 Exam Dates", 
    "JEE Main Overview",
    "JEE Main 2025 Exam Pattern",
    "JEE Main 2025 Cut-off ",
    "JEE Main 2025 Eligibility ",
    "JEE Main 2025 Qualifications Criteria", 
    "JEE Main 2025 Age Criteria ",
    "JEE Main 2025 State of Eligibility ",
    "JEE Main 2025 Syllabus ",
    "JEE Main 2025 Admit Card", 
    "JEE Main 2025 Reservation",
    "JEE Main 2025 Results",
    "JEE Main 2025 Marks vs Percentile", 
    "JEE Main 2025 Counselling Process"
]

export const JeeMainHeadingIdList : Array<string> = [
    "exam-jeemain-h1",
    "exam-jeemain-h2",
    "exam-jeemain-h3",
    "exam-jeemain-h4",
    "exam-jeemain-h5",
    "exam-jeemain-h6",
    "exam-jeemain-h7",
    "exam-jeemain-h8",
    "exam-jeemain-h9",
    "exam-jeemain-h10",
    "exam-jeemain-h11",
    "exam-jeemain-h12",
    "exam-jeemain-h13",
    "exam-jeemain-h14",
    "exam-jeemain-h15",
    "exam-jeemain-h16",
]



// defining the array of image list associated with this blog 
export const JeeMainImageList : Array<string | null> = [
    null,
    null,
    JeeMainsExamDateImage,
    null,
    JeeMainsExamPatternImage,
    JeeMainsCutoffImage,
    null,
    JeeMainsQualifyingCriteriaImage,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
]

export const JeeMainContentList : Array<string> = [
    // jee main exam history
`The IIT-JEE (Indian Institutes of Technology Joint Entrance Examination) was first conducted in 1961. It was an entrance examination in India for admission to various undergraduate programs in engineering and technology at the prestigious Indian Institutes of Technology (IITs) and other participating institutions.\n
In 2002, an additional exam called the AIEEE was introduced for admissions to many institutions of national importance other than the IITs.\n
In 2013, the AIEEE was renamed JEE (Main), and IIT-JEE was renamed JEE (Advanced); the JEE (Main) became the screening exam for JEE (Advanced).\n
From 2019 onwards JEE Main is conducted by NTA and JEE Advanced is conducted by IIT`,
    
    
    // Who Conducts JEE Mains?
`The JEE Main exam is administered and conducted by the authority known as the National Testing Agency (NTA). NTA is the agency responsible for conducting the JEE Main every year in two shift first in january and second in april.\n

NTA is conducting JEE main exam since 2019 onwards
`,
    
    
    // JEE Main 2025 Exam Dates
`<strong>JEE Main 2025</strong> Exam date for the first attmpt is scheduled form 22nd january to 31st of januray 2025. JEE Main exam date for second session start from`,
    
    
    // JEE Main Overview
`<span style = "color : white; font-weight: bold; padding:1px; border-radius : 5px; font-size: larger;" class="">1. Latest Announcement: </span>
The National Testing Agency (NTA) will announce the JEE Main 2025 exam dates in october 28th 2024. JEE main 2025 exam to be held in two sessions, with Session 1 in January 2025 and Session 2 in April 2025. \n\n
<span style = "color : white; font-weight: bold; font-size: larger;" class="">2. Organizer: </span>
Since 2019, National Testing Agency (NTA)\n\n
<span style = "color : white; font-weight: bold; font-size: larger;" class="">3. Purpose : </span>
To get admission to Undergraduate Engineering Programs (B.E/B.Tech.) at NITs, IIITs, other CFTIs, and Institutions/Universities funded/recognized by participating State Governments.\n
JEE (Main) is an eligibility test for JEE (Advanced).\n\n
<span style = "color : white; font-weight: bold; font-size: larger;" class="">4. Frequency: </span>
<span style = "font-weight: bold;">Twice in a year</span> in January and April (Session-1 & Session-2).\n\n
<span style = "color : white; font-weight: bold; font-size: larger;" class="">5. Mode of Exam: </span>
<strong>Paper 1(B.E. / B.TECH) </strong>: Online mode\n
<strong>Paper 2A (B. Arch):</strong> Mathematics and Aptitude Test Online mode, Drawing Test - Pen and paper mode.\n
<strong>Paper 2B (B. Planning):</strong> Online mode`,
    
    
    
    // JEE Main Exam pattern
`Every year JEE main conduct exam in two phase and in each phase there are 75 question each 25 in physics ,chemistry and maths \n
\t• Paper is divided into two section ,section A and Section B
\t• Section A contains 20 question which are objective in nature
\t• Section B contains 5 question which are integer type
\t• Marking scheme for section A and B both are +4 and -1
`,
    
    
    // JEE main Cutoff
`JEE Main 2024 cutoff are given in following tabular form:`,
    
    
    // JEE main Eligibility
`For JEE main exam eligilibilty you must have 12th passed or appearing student A student can give continuously 3 times JEE main exam after his/her 12th board.`,
    
    
    // JEE main Qualifications criteria
`A student should either passed the 12th exam or appearing in that particular year in which he/she is going to give exam\n\n
<span style = "color : white; font-weight: bold; font-size: larger;" class=""> List of Qualifying Exam: </span>\n\t
1. The final examination of the 10+2 system, conducted by any recognized  Central/ State Board, such as the Central Board of Secondary Education, New Delhi; Council for the Indian School Certificate Examinations, New Delhi; etc.\n\t
2. Intermediate or two-year Pre-University examination conducted by a recognized Board/University.\n\t
3. Final examination of the two-year course of the Joint Services Wing of the National Defense Academy\n\t
4. Senior Secondary School Examination conducted by the National Institute of Open Schooling with a minimum of five subjects.\n\t
5. Any Public School/ Board/ University examination in India or any foreign country is recognized as equivalent to the 10+2 system by the Association of Indian Universities (AIU).\n\t
6. Higher Secondary Certificate Vocational Examination.\n\t
7. A Diploma recognized by AICTE or a State board of technical education of at least 3 years duration.\n\t
8. General Certificate Education (GCE) examination (London/Cambridge/Sri Lanka) at the Advanced (A) level.\n\t
9. High School Certificate Examination of the Cambridge University or International Baccalaureate Diploma of the International Baccalaureate Office, Geneva.\n\t
10. Candidates who have completed the Class XII (or equivalent) examination outside India or from a Board not specified above should produce a certificate from the Association of Indian Universities (AIU) to the effect that the examination they have passed is equivalent to the Class XII Examination.\n\t
11. In case the Class XII Examination is not a public examination,the candidate must have passed at least one public (Board or Pre-University) examination earlier\n`,
    
    
    // JEE Main Age criteria
`For appearing in the JEE (Main) - 2025, there is no age limit for the candidates. The candidates who have passed the class XII / equivalent examination in 2023, 2024 or appearing in 2025 irrespective of their age can appear in JEE (Main) - 2025 examination. However, the candidates may be required to fulfill the age criteria of the Institute(s) to which they are desirous of taking admission.`,
    
    
    
    // State of Eligibility
`State code of eligibility means the code of the State from where the candidate has passed the Class XII (or equivalent) qualifying examination by virtue of which the candidate becomes eligible to appear in JEE (Main) - 2025. \n\nIt is important to note that the State code of eligibility does NOT depend upon the native place or the place of residence of the candidate. \n\nFor example, if a candidate appears for the Class XII(or equivalent) qualifying examination from an Institution situated in New Delhi and is a resident of Noida, Uttar Pradesh, then the candidate's State code of eligibility will be Delhi and NOT Uttar Pradesh.\n\n 
If a candidate has passed the Class XII (or equivalent) qualifying examination from one State but appeared for improvement from another State, the candidate's State code of eligibility will be from where the candidate first passed the Class XII (or equivalent) examination and NOT the State from where the candidate has appeared for improvement. \n\nCandidates passed / appearing for Class XII from NIOS should select the State of Eligibility according to the State in which the study Centre is located. \n\nFor Indian nationals passing the Class XII (or equivalent) examination from Nepal/Bhutan, the State code of eligibility will be determined based on a permanent address in India as given in the passport of the candidate. \n\nThe State code of eligibility for OCI passing the Class XII (or equivalent) examination in India is at par with Indian nationals. \n
However, OCI passing the Class XII (or equivalent) examination from an institution abroad are eligible for Other State quota seats or All India quota seats (but NOT for Home State quota seats) in all NITs, IIITs and Other-CFTIs.`,
    
    
// Syllabus
// `<span style ="color : white;" class="underline""><a href="https://jeemain.nta.nic.in" target="_blank" rel="noopener noreferrer">Click here</a></span> to download JEE main latest syllabus`,
`<span style="color: white;" class="underline"><a href="https://jeemain.nta.nic.in" target="_blank" rel="noopener noreferrer">Click here</a></span> <img src=${ClickHereLogo} alt="Download Icon" style="width: 50px; height: 20px; margin-left: 5px; border-radius:8px; display:inline-block; vertical-align:middle;" /> to download JEE main latest syllabus`,

    
    
// Admit card
`The e-Admit Card will be issued provisionally to the candidates through the NTA website: <span style ="color : white;" class="underline""><a href="https://jeemain.nta.nic.in/" target="_blank" rel="noopener noreferrer">https://jeemain.nta.nic.in/</a></span>, subject to the fulfillment of the eligibility conditions and receipt of the
prescribed application fee by NTA. \n\nThe candidate has to download the Admit Card from the NTA website. The candidate will appear in the examination at the given Centre on the date and shift/timing as indicated in his/her e-Admit Card. No candidate will be allowed to appear at the examination Centre, on the date and shift/time other than that allotted to him/ her in his/ her
Admit Card.\n
JEE Main 2025 admit card will be available 3 days before the JEE main exam`,
    
    
// JEE Main Reservation
`Indian nationals belonging to certain categories are admitted under the seats reserved for them
in accordance with the rules prescribed by the Government of India.\n\n<span style = "color : white; font-weight: bold;">The categories and the extent of reservation are as follows:</span>\n
1. General category belonging to the Economically Weaker Section (GEN- EWS) - 10% of seats in every course. The benefit of reservation will be given only to those General category candidates who satisfy the conditions given in the OM No. 20013/01/2018-BC-II dated 17 January 2019, issued by the Ministry of Social Justice and Empowerment. The criteria for GEN-EWS will be as per the prevailing norms and/or notifications of the Government of India.\n

2. Other Backward Classes belonging to the Non-Creamy Layer (OBC- NCL) - 27% of
seats in every course. a) OBCs should be listed in the current updated central list of OBCs (http://www.ncbc.ac.in). b) OBCs present in the State list but not covered in the central list of OBCs (as per the list in http://www.ncbc.ac.in) are NOT eligible to claim the reservation. c) The criteria for OBC-NCL will be as per the notification of the Government of India. d) Candidates belonging to the creamy layer of OBC are NOT entitled to reservation. Such candidates are treated as belonging to the general (GEN), i.e. unreserved category, and they will be eligible only for the OPEN seats - the seats for which all candidates are eligible.\n

3. Scheduled Caste (SC) - 15% of seats in every course.\n

4. Scheduled Tribe (ST) - 7.5% of seats in every course.\n

5. Persons with Disability/ Persons with Benchmark Disability (PwD/PwBD) - 5% seats in each of the GENERAL, GEN-EWS, OBC- NCL, SC and ST category seats.`,
    

// JEE Main Results
`<span style ="color : white;" class="underline""><a href="JEEmain.nta.nic.in" target="_blank" rel="noopener noreferrer">Click here</a> </span> to get JEE Main 2025 Result.`,

// JEE Main Marks vs Percentile
`<span style ="color : white;" class="underline""><a href="JEEmain.nta.nic.in" target="_blank" rel="noopener noreferrer">Click here</a> </span> to watch marks vs percentile for JEE main 2025(here we will add the youtube video
link)`,


// JEE Main Counselling Process
`JEE Counselling process will consist of two step\n
1. JOSAA (Click here to know the complete counselling process of JEE Main 2025)

2. CSAB (Click here to know the complete counselling process of JEE Main 2025)
`

]




// # CONSTANTS FOR JEE MAINS EXAM SUB PAGES COMES HERE
export const JeeMainExamDetailsSubPageHeadingList : Array<string> = [
    "Jee Main Exam Details",
    "Jee Main Exam Details2",
    "Jee Main Exam Details3",
    "Jee Main Exam Details4",
    "Jee Main Exam Details5",
    "Jee Main Exam Details6",
]


export const JeeMainExamDetailsSubPageHeadingIdList : Array<string> = [
    "jeemain-exam-details-h1",
    "jeemain-exam-details-h2",
    "jeemain-exam-details-h3",
    "jeemain-exam-details-h4",
    "jeemain-exam-details-h5",
    "jeemain-exam-details-h6",
]



export const JeeMainExamDetailsSubPageTableOfContentList : Array<string> = [
    "Jee Main Exam Details",
    "Jee Main Exam Details2",
    "Jee Main Exam Details3",
    "Jee Main Exam Details4",
    "Jee Main Exam Details5",
    "Jee Main Exam Details6",
]

export const JeeMainExamDetailsSubPageContentList : Array<string> = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim sus  cipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
]



// # CONSTANTS FOR JEE MAINS ADMIT CARD PAGE
export const JeeMainAdmitCardSubPageHeadingList: Array<string> = [
    "Jee Main Admit Card Details",
    "Jee Main Admit Card Instructions",
    "Jee Main Admit Card Download",
    "Jee Main Admit Card Issues",
    "Jee Main Admit Card FAQs",
    "Jee Main Admit Card Contact",
];

export const JeeMainAdmitCardSubPageHeadingIdList: Array<string> = [
    "jeemain-admitcard-h1",
    "jeemain-admitcard-h2",
    "jeemain-admitcard-h3",
    "jeemain-admitcard-h4",
    "jeemain-admitcard-h5",
    "jeemain-admitcard-h6",
];

export const JeeMainAdmitCardSubPageTableOfContentList: Array<string> = [
    "Jee Main Admit Card Details",
    "Jee Main Admit Card Instructions",
    "Jee Main Admit Card Download",
    "Jee Main Admit Card Issues",
    "Jee Main Admit Card FAQs",
    "Jee Main Admit Card Contact",
];

export const JeeMainAdmitCardSubPageContentList: Array<string> = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim sus  cipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
];

// # CONSTANTS FOR JEE MAINS APPLICATION PAGE
export const JeeMainApplicationSubPageHeadingList: Array<string> = [
    "Jee Main Application Process",
    "Jee Main Application Form",
    "Jee Main Application Fees",
    "Jee Main Application Dates",
    "Jee Main Application Correction",
    "Jee Main Application FAQs",
];

export const JeeMainApplicationSubPageHeadingIdList: Array<string> = [
    "jeemain-application-h1",
    "jeemain-application-h2",
    "jeemain-application-h3",
    "jeemain-application-h4",
    "jeemain-application-h5",
    "jeemain-application-h6",
];

export const JeeMainApplicationSubPageTableOfContentList: Array<string> = [
    "Jee Main Application Process",
    "Jee Main Application Form",
    "Jee Main Application Fees",
    "Jee Main Application Dates",
    "Jee Main Application Correction",
    "Jee Main Application FAQs",
];

export const JeeMainApplicationSubPageContentList: Array<string> = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim sus  cipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
];

// # CONSTANTS FOR JEE MAINS DATES PAGE
export const JeeMainDatesSubPageHeadingList: Array<string> = [
    "Jee Main Important Dates",
    "Jee Main Exam Schedule",
    "Jee Main Result Dates",
    "Jee Main Counselling Dates",
    "Jee Main Admit Card Dates",
    "Jee Main Application Dates",
];

export const JeeMainDatesSubPageHeadingIdList: Array<string> = [
    "jeemain-dates-h1",
    "jeemain-dates-h2",
    "jeemain-dates-h3",
    "jeemain-dates-h4",
    "jeemain-dates-h5",
    "jeemain-dates-h6",
];

export const JeeMainDatesSubPageTableOfContentList: Array<string> = [
    "Jee Main Important Dates",
    "Jee Main Exam Schedule",
    "Jee Main Result Dates",
    "Jee Main Counselling Dates",
    "Jee Main Admit Card Dates",
    "Jee Main Application Dates",
];

export const JeeMainDatesSubPageContentList: Array<string> = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim sus  cipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
];


// # CONSTANTS FOR JEE MAINS DETAILS PAGE
export const JeeMainDetailsSubPageHeadingList: Array<string> = [
    "Jee Main Details Overview",
    "Jee Main Details Eligibility",
    "Jee Main Details Syllabus",
    "Jee Main Details Exam Pattern",
    "Jee Main Details Preparation Tips",
    "Jee Main Details FAQs",
];

export const JeeMainDetailsSubPageHeadingIdList: Array<string> = [
    "jeemain-details-h1",
    "jeemain-details-h2",
    "jeemain-details-h3",
    "jeemain-details-h4",
    "jeemain-details-h5",
    "jeemain-details-h6",
];

export const JeeMainDetailsSubPageTableOfContentList: Array<string> = [
    "Jee Main Details Overview",
    "Jee Main Details Eligibility",
    "Jee Main Details Syllabus",
    "Jee Main Details Exam Pattern",
    "Jee Main Details Preparation Tips",
    "Jee Main Details FAQs",
];

export const JeeMainDetailsSubPageContentList: Array<string> = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim sus  cipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
];

// # CONSTANTS FOR JEE MAINS ELIGIBILITY PAGE
export const JeeMainEligibilitySubPageHeadingList: Array<string> = [
    "Jee Main Eligibility Criteria",
    "Jee Main Age Limit",
    "Jee Main Qualification Requirements",
    "Jee Main Reservation Criteria",
    "Jee Main Eligibility FAQs",
];

export const JeeMainEligibilitySubPageHeadingIdList: Array<string> = [
    "jeemain-eligibility-h1",
    "jeemain-eligibility-h2",
    "jeemain-eligibility-h3",
    "jeemain-eligibility-h4",
    "jeemain-eligibility-h5",
];

export const JeeMainEligibilitySubPageTableOfContentList: Array<string> = [
    "Jee Main Eligibility Criteria",
    "Jee Main Age Limit",
    "Jee Main Qualification Requirements",
    "Jee Main Reservation Criteria",
    "Jee Main Eligibility FAQs",
];

export const JeeMainEligibilitySubPageContentList: Array<string> = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim sus  cipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
];

// # CONSTANTS FOR JEE MAINS SYLLABUS PAGE
export const JeeMainSyllabusSubPageHeadingList: Array<string> = [
    "Jee Main Syllabus Overview",
    "Jee Main Physics Syllabus",
    "Jee Main Chemistry Syllabus",
    "Jee Main Mathematics Syllabus",
    "Jee Main Syllabus FAQs",
];

export const JeeMainSyllabusSubPageHeadingIdList: Array<string> = [
    "jeemain-syllabus-h1",
    "jeemain-syllabus-h2",
    "jeemain-syllabus-h3",
    "jeemain-syllabus-h4",
    "jeemain-syllabus-h5",
];

export const JeeMainSyllabusSubPageTableOfContentList: Array<string> = [
    "Jee Main Syllabus Overview",
    "Jee Main Physics Syllabus",
    "Jee Main Chemistry Syllabus",
    "Jee Main Mathematics Syllabus",
    "Jee Main Syllabus FAQs",
];

export const JeeMainSyllabusSubPageContentList: Array<string> = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim sus  cipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?",
];