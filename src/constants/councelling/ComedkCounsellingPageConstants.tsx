// this is the constant page for the Comedk counselling page
// constants page for uptu counselling home page
// constant page for for WbJee counselling page
// constants for the jacdelhi counselling page for this purpose
// constant page for the csab related stuff 
// here we will store the constants related to the josaa counselling page 
// importing the images from asssets folder for the blogsection 
import ComedkCounsellingProcessImage from "../../assets/images/counselling/Comedk/Comedk-Counselling-Process.png"
import ClickHereLogo from "../../assets/images/other/click-here-logo.png"

// OVERVIEW  COMPONENT FOR JOSAA COUNSELLING PAGE 
// constant for storing the submenu names which we have to show in dropdown
export const ComedkCounsellingPageSubMenuList : Array<string> = [
    "What is Comedk Counselling?",
    "Comedk Counselling Documents",
    "Comedk Counselling Application Process",
    "Comedk Counselling Fee",
    "Comedk Counselling Cutoff",
    "Comedk Counselling Online Reporting",
    "Comedk Counselling Physical Reporting",
]



// constant for the submenu list routes that we need inside the overview dropdown button
export const ComedkCounsellingPageRoutesList : Array<string> = [
    "/counselling/comedk/introduction", 
    "/counselling/comedk/documents", 
    "/counselling/comedk/application-process", 
    "/counselling/comedk/fee", 
    "/counselling/comedk/cutoff", 
    "/counselling/comedk/online-reporting",
    "/counselling/comedk/physical-reporting",
]


export const ComedkCounsellingPageButtonNameList : Array<string> = [
    "JOSAA",
    "CSAB",
    "JAC DELHI",
    "WBJEE",
    "UPTU", 
    "GGSIPU",
    "COMEDK",
]

export const ComedkCounsellingPageButtonWidthList : Array<string> = [
    "36",
    "36",
    "36",
    "36",
    "36",
    "36",
    "36",
]


export const ComedkCounsellingPageButtonCodeList : Array<string> = [
    "1", 
    "2", 
    "3", 
    "4", 
    "5",
    "6",
    "7"
]



// Video card related constants for the Csab counselling page
export const ComedkCounsellingPageVideoCardUrlList : Array<string> = [
    "https://www.youtube.com/embed/CHmaw6Vu4_I", 
    "https://www.youtube.com/embed/CHmaw6Vu4_I", 
    "https://www.youtube.com/embed/CHmaw6Vu4_I"
]

export const ComedkCounsellingPageVideoCardTitleList : Array<string> = [
    "First title", 
    "Second title", 
    "Third title"
]


// BLOGS Related constants for Csab Counselling
// this consists of the constants related to the heading name, headingID 
// content that we have to put in each of the headings
export const ComedkCounsellingPageHeadingList : Array<string> = [
    "What is Comedk Counselling?", 
    "Comedk Counselling dates 2025", 
    "How to do Registration For Online Counselling", 
    "Comedk Counselling Process", 
    "Who is Eligible to Participate in COMEDK Online Counselling", 
    "Document Required For Comedk Counselling 2025", 
    "Comedk Counselling 2025 Fee", 
    "Physical Reporting Allotted", 
    "Comedk Counselling 2025 Opening and Closing ",
    "Comedk Counselling 2025 Certificate Format",
    "Comedk Counselling 2025 FAQ"
]

export const ComedkCounsellingPageTableOfContentList : Array<string> = [
    "What is Comedk Counselling?", 
    "Comedk Counselling dates 2025", 
    "How to do Registration For Online Counselling", 
    "Comedk Counselling Process", 
    "Who is Eligible to Participate in COMEDK Online Counselling", 
    "Document Required For Comedk Counselling 2025", 
    "Comedk Counselling 2025 Fee", 
    "Physical Reporting Allotted", 
    "Comedk Counselling 2025 Opening and Closing ",
    "Comedk Counselling 2025 Certificate Format",
    "Comedk Counselling 2025 FAQ"
]

export const ComedkCounsellingPageHeadingIdList : Array<string> = [
    "counselling-uptu-h1",
    "counselling-uptu-h2",
    "counselling-uptu-h3",
    "counselling-uptu-h4",
    "counselling-uptu-h5",
    "counselling-uptu-h6",
    "counselling-uptu-h7",
    "counselling-uptu-h8",
    "counselling-uptu-h9",
    "counselling-uptu-h10",
    "counselling-uptu-h11",
]


// adding the list of images for the COMEDK counselling page
export const ComedkCounsellingPageImageList : Array<string | null> = [
    // "What is Comedk Counselling?", 
    null,
    // "Comedk Counselling dates 2025", 
    null,
    // "How to do Registration For Online Counselling", 
    null,
    // "Comedk Counselling Process", 
    ComedkCounsellingProcessImage,
    // "Who is Eligible to Participate in COMEDK Online Counselling", 
    null,
    // "Document Required For Comedk Counselling 2025", 
    null,
    // "Comedk Counselling 2025 Fee", 
    null,
    // "Physical Reporting Allotted", 
    null,
    // "Comedk Counselling 2025 Opening and Closing ",
    null,
    // "Comedk Counselling 2025 Certificate Format",
    null,
    // "Comedk Counselling 2025 FAQ"
    null,
]

export const ComedkCounsellingPageContentList : Array<string> = [
    
// "What is Comedk Counselling?", 
``,

// "Comedk Counselling dates 2025", 
`To be released soon, join counselling group to get update instantly once released, 
<a href="https://jeemain.nta.nic.in" target="_blank" rel="noopener noreferrer"><img src=${ClickHereLogo} alt="Download Icon" style="width: 70px; height: 20px; margin-left: 0px; border-radius:8px; display:inline-block; vertical-align:middle;" /></a> to join
`,

// "How to do Registration For Online Counselling", 
`
Login to COMEDK Application Form on www.comedk.org, using Laptop/desktop.
1. Click on “Counselling Registration” Tab 

2. Make Payment of Rs 2000/- as non-refundable counselling registration fee using credit card/debit card/net banking 

3. Click on “Document Upload” tab 

4. Upload all mandatory documents for verification. (Ensure uploading legible scanned images of documents. Do not take photo of the documents in mobile for uploading. The image should be only JPG, JPEG or PDF format) Only candidate’s whose Document Verification Status shows ‘Document Approved’ will be eligible for further process. How to check whether a document is verified? 

5. The document verification status will be updated in your application login in ‘Document Upload’ tab 

6. You are requested to login to your application frequently to check for document verification status which could be any one of the statuses mentioned below:

`,

// "Comedk Counselling Process", 
``,

// "Who is Eligible to Participate in COMEDK Online Counselling", 
`
<span style = "color : white; font-weight: bold; padding:1px; font-size: medium;" class="">Candidates with COMEDK UGET Engineering Entrance Exam Rank Card 2024</span>

1.  Have passed 12th/2nd PUC/ equivalent examination with English as one of the languages, Physics and Mathematics as compulsory subjects along with Chemistry/Biotechnology/Biology/Electronics/Computer Science. 

2. The General Merit candidates should have passed 12th/2nd PUC/ equivalent examination with a minimum aggregate of 45% marks (40% in respect of SC, ST and OBC candidates of Karnataka State) in Physics, Mathematics, Chemistry/Biotechnology/Biology/Electronics/Computer Science and should have passed these subjects individually 


3. Supplementary candidates of PU Board/10+2 of current year (passed supplementary exam in the year 2024) satisfying all the eligible criteria should register during the initial Counselling registration period and they have to upload all the required mandatory documents within the prescribed time limit. There will be no separate registration period for supplementary candidates. 


4. For the candidates who are yet to appear for the supplementary exam in the current year i.e. 2024, they can upload all other required mandatory documents except the 10+2/2nd PUC Marks sheet. Such candidates will be given an opportunity to upload their 12th STD/2nd PUC marks sheet to prove their eligibility before start of Round 2 Phase 2. 



5. Eligible candidates who have registered themselves for online counselling with a non-refundable registration fee of Rs. 2,000/- 


6. Candidates who are ready to pay entire college fee at COMEDK level after allotment of seats. 

7. Candidates having all mandatory documents to prove eligibility, scanned and ready to upload since their candidature is subject to successful verification of the same and approval.


`,

// "Document Required For Comedk Counselling 2025", 
`
<span style = "color : white; font-weight: bold; padding:1px; font-size: larger;" class="">a) DOCUMENTS TO UPLOAD FOR GENERAL MERIT SEAT-Engineering</span>

1. Candidate Original ID proof: PAN/Passport/Voter Id/ Driving License/ Any other Government Id Proof (as declared in application form)

2. Date of Birth Proof of Candidate: PAN/Passport/VoterId/Driving License/ Any otherGovernmentId Proof/ 10th Marks Card/ Birth Certificate


3. PUC/ 12th Std or equivalent Marks Card: (Do not crop top and bottom of the marks card. All information including QR code (if available in your marks card) should be clearly visible


4. Admit Card or Hall ticket information of 12/2nd PUC/Equivalent exam (IF APPLICABLE): Candidates marks card is verified on their respective board website. Candidates are requested to upload their admit card. However, if admit card is not available then write your admit card information like Roll Number, School Number, Admit card id number etc., clearly in capital letters on a sheet of paper and upload the same.


5. COMEDK Admit Card

6. Improvement or Supplementary/Compartment Marksheet or any other document (If applicable)

7. SC/ST/OBC Certificate: Applicable only if you have scored between 40 to 45% in 12th grade/2nd PUC/Equivalent and you are a Domicile of Karnataka

8. Domicile Certificate: Candidates claiming SC/ST/OBC category should upload Karnataka Domicile Certificate



<span style = "color : white; font-weight: bold; padding:1px; font-size: larger;" class="">b) DOCUMENTS TO UPLOAD FOR KALYANA KARNATAKA REGION (KKR) SEAT- Engineering</span>

1. Candidate Original ID proof: PAN/Passport/Voter Id/ Driving License/ Any other Government Id Proof (as declared in application form/used during exam)


2. Date of Birth Proof of Candidate: PAN/Passport/VoterId/Driving License/ Any otherGovernmentId Proof/ 10th Marks Card/ Birth Certificate


3. PUC/12thStdor equivalentMarks Card:Do not crop top and bottom of the marks card. All information including QR code (if available in your marks card) should be clearly visible

4. Admit Card/ Hall ticket information of 12th/2nd PUC/Equivalent Exam (If applicable) Candidates marks card is verified on their respective board website. Candidates are requested to upload their admit card. However, if admit card is not available then write your admit card information like Roll Number, School Number, Admit card id number clearly in capital letters on a sheet of paper and upload the same.


5. COMEDK Admit card


6. Improvement or Supplementary/Compartment Marksheet or any other document (If applicable)

7. Kalyana Karnataka Region (HK region) Certificate: Candidates claiming KKR (HK region) seat should upload KKR (HK region) certificate. 371J certificate issued by Asst. Commissioner in charge of Revenue sub division. Certificate should be in the name of the candidate


8. SC/ST/OBC Certificate: Applicable only if you have scored between 40 to 45% in 12th grade/2ndPUC and are Karnataka Domicile


9. Karnataka Domicile Certificate: Issued by Revenue authority not below the rank of Tahsildar, in the name of the candidate


NOTE i) Candidates o f Karnataka who have obtained between 40% to 45% aggregate marks in their qualifying exam only need to upload SC/ST/OBC certificate and Karnataka Domicile Certificate to claim lower eligibility. SC/ST/OBC is only to get lower eligibility. There is no seat reservation in COMEDK for SC/ST/OC as the State Government has taken the responsibility to identify and provide reservation to these candidates within the seats transferred to the Govt. ii) Candidates claiming KKR seat need to upload KKR (HK region) certificate and Karnataka Domicile Certificate

`,

// "Comedk Counselling 2025 Fee", 
`
a. Total Fee is dependent on the college and course and is available in the Seat Matrix information 

b. The Total Fee includes the Tuition Fee and ‘Other Fees’ per year. The Total Fee of each college includes Tuition Fee + Other Fees per year. 

<span style = "color : white; font-weight: bold; padding:1px; font-size: medium;" class="">Apart from this,the following fee will be collected at college level: </span>

1. Colleges providing special skill lab facilities may collect Rs. 10,000/-, Rs. 15,000/- and maximum ofRs. 20,000/- per student per annum depending on the facilities provided by the institutions and as approved by the VTU

2. Applicable University fees c. In case of ‘Accept and Upgrade’/’Reject and Upgrade’ candidates, the Total fee paid at time of decision making, will be adjusted to the Total Fee applicable for the college and course allotted during subsequent round/s as mentioned below: I. Should there be an increase in Total Fee payable at the time of Decision making in subsequent round: the extra fees will have to be paid by the candidate at the time of their decision making II. Should there be a decrease in Total Fee payable at the time of Decision making in subsequent round: the excess fees will be refunded by COMEDK after completion of the counselling process



DETAILS OF FEE d. The upper limit of annual tuition fee as agreed between the State Government and the Association of Colleges was Rs.2,44,372/- p.a or Rs.1,73,936/- p.a whichever was opted by the respective institutions. e. Along with the tuition fee, each institution is entitled to collect ‘Other Fees’ not exceeding Rs. 20,000 per annum which will be collected by COMEDK. 

<span style = "color : white; font-weight: bold; padding:1px; font-size: medium;" class="">Apart from this the following will be collected at college level: </span>

1. Colleges providing special skill lab facilities may collect Rs. 10,000/-, Rs. 15,000/- and maximum of Rs. 20,000/- per student per annum depending on the facilities provided by the institutions and as approved by the VTU


2. Applicable University fees f. It is mandated that candidates are required to pay a single “Total Fee” which includes both “TuitionFee” and “Other Fees” CAUTION: The fee amount mentioned above is of the year 2023-24 and the fee details for current year (2024-25) will be updated shortly.
`,

// "Physical Reporting Allotted", 
``,

// "Comedk Counselling 2025 Opening and Closing ",
`
<a href="https://jeemain.nta.nic.in" target="_blank" rel="noopener noreferrer"><img src=${ClickHereLogo} alt="Download Icon" style="width: 70px; height: 20px; margin-left: 0px; border-radius:8px; display:inline-block; vertical-align:middle;" /></a> to know the detail of opening and closing rank of josaa 2024
    1. WBJEECollege


`,

// "Comedk Counselling 2025 Certificate Format",
`
1. Certificate format of OBC - NCL <a href="https://jeemain.nta.nic.in" target="_blank" rel="noopener noreferrer"><img src=${ClickHereLogo} alt="Download Icon" style="width: 70px; height: 20px; margin-left: 0px; border-radius:8px; display:inline-block; vertical-align:middle;" /></a> to download
2. Certificate format of EWS : <a href="https://jeemain.nta.nic.in" target="_blank" rel="noopener noreferrer"><img src=${ClickHereLogo} alt="Download Icon" style="width: 70px; height: 20px; margin-left: 0px; border-radius:8px; display:inline-block; vertical-align:middle;" /></a> to download
3. Certificate format of SC - NCL <a href="https://jeemain.nta.nic.in" target="_blank" rel="noopener noreferrer"><img src=${ClickHereLogo} alt="Download Icon" style="width: 70px; height: 20px; margin-left: 0px; border-radius:8px; display:inline-block; vertical-align:middle;" /></a> to download
4. Certificate format of ST- NCL <a href="https://jeemain.nta.nic.in" target="_blank" rel="noopener noreferrer"><img src=${ClickHereLogo} alt="Download Icon" style="width: 70px; height: 20px; margin-left: 0px; border-radius:8px; display:inline-block; vertical-align:middle;" /></a> to download
5. Certificate format of PWD: <a href="https://jeemain.nta.nic.in" target="_blank" rel="noopener noreferrer"><img src=${ClickHereLogo} alt="Download Icon" style="width: 70px; height: 20px; margin-left: 0px; border-radius:8px; display:inline-block; vertical-align:middle;" /></a> to download
6. Certificate format to change category : <a href="https://jeemain.nta.nic.in" target="_blank" rel="noopener noreferrer"><img src=${ClickHereLogo} alt="Download Icon" style="width: 70px; height: 20px; margin-left: 0px; border-radius:8px; display:inline-block; vertical-align:middle;" /></a> to download

`,

// "Comedk Counselling 2025 FAQ"
``,

]
