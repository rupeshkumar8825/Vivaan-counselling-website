// here we will store the constants related to the josaa counselling page 
// import IITBombayCollegeImage from "../../assets/images/IIT/iit-bombay.png"
import JosaaEligibilityCriteriaImage from "../../assets/images/counselling/josaa/Josaa-Counselling-Eligibility-Criteria.png"
import JosaaCounsellingDatesImage from "../../assets/images/counselling/josaa/Josaa-Counselling-Dates.png"

// OVERVIEW  COMPONENT FOR JOSAA COUNsELLING PAGE 
// constant for storing the submenu names which we have to show in dropdown
export const JosaaCounsellingPageSubMenuList : Array<string> = [
    "What is JoSAA Counselling?",
    "JoSAA Counselling Documents",
    "JoSAA Counselling Application Process",
    "JoSAA Counselling Fee",
    "JoSAA Counselling Cutoff",
    "JoSAA Counselling Online Reporting",
    "JoSAA Counselling Physical Reporting",
]



// constant for the submenu list routes that we need inside the overview dropdown button
export const JosaaCounsellingPageRoutesList : Array<string> = [
    "/counselling/josaa/introduction", 
    "/counselling/josaa/documents", 
    "/counselling/josaa/application-process", 
    "/counselling/josaa/fee", 
    "/counselling/josaa/cutoff", 
    "/counselling/josaa/online-reporting",
    "/counselling/josaa/physical-reporting",
]


export const JosaaCounsellingPageButtonNameList : Array<string> = [
    "JOSAA",
    "CSAB",
    "JAC DELHI",
    "WBJEE",
    "UPTU", 
    "GGSIPU",
    "COMEDK",
]

export const JosaaCounsellingPageButtonWidthList : Array<string> = [
    "36",
    "36",
    "36",
    "36",
    "36",
    "36",
    "36",
]


export const JosaaCounsellingPageButtonCodeList : Array<string> = [
    "1", 
    "2", 
    "3", 
    "4", 
    "5",
    "6",
    "7"
]



// Video card related constants for the josaa counselling page
export const JosaaCounsellingPageVideoCardUrlList : Array<string> = [
    "https://www.youtube.com/embed/CHmaw6Vu4_I", 
    "https://www.youtube.com/embed/CHmaw6Vu4_I", 
    "https://www.youtube.com/embed/CHmaw6Vu4_I"
]

export const JosaaCounsellingPageVideoCardTitleList : Array<string> = [
    "First title", 
    "Second title", 
    "Third title"
]


// BLOGS Related constants for JOSAA Counselling
// this consists of the constants related to the heading name, headingID 
// content that we have to put in each of the headings
export const JosaaCounsellingPageHeadingList : Array<string> = [
    "What is JoSAA Counselling?", 
    "JoSAA Counselling 2025 Dates", 
    "JoSAA Counselling 2025 Eligibility Criteria", 
    "JoSAA Counselling 2025 Application Form",
    "JoSAA Counselling 2025 Process",
    "JoSAA Counselling 2025 Seat Allotment Letter", 
    "JoSAA Counselling 2025 Online Reporting", 
    "Partial Admission Fee Payment at JoSAA Portal After Last Round", 
    "Physical Reporting  At Allotted Institute", 
    "JoSAA Counselling 2025  Certificate Format", 
    "JoSAA Counselling 2024 OR-CR", 
    "JoSAA Counselling 2025 FAQ"
]

export const JosaaCounsellingPageTableOfContentList : Array<string> = [
    "What is JoSAA Counselling?", 
    "JoSAA Counselling 2025 Dates", 
    "JoSAA Counselling 2025 Eligibility Criteria", 
    "JoSAA Counselling 2025 Application Form",
    "JoSAA Counselling 2025 Process",
    "JoSAA Counselling 2025 Seat Allotment Letter", 
    "JoSAA Counselling 2025 Online Reporting", 
    "Partial Admission Fee Payment at JoSAA Portal After Last Round", 
    "Physical Reporting  At Allotted Institute", 
    "JoSAA Counselling  2025 Certificate Format", 
    "JoSAA Counselling 2024 OR-CR", 
    "JoSAA Counselling 2025 FAQ"
]

export const JosaaCounsellingPageHeadingIdList : Array<string> = [
    "counselling-josaa-h1",
    "counselling-josaa-h2",
    "counselling-josaa-h3",
    "counselling-josaa-h4",
    "counselling-josaa-h5",
    "counselling-josaa-h6",
    "counselling-josaa-h7",
    "counselling-josaa-h8",
    "counselling-josaa-h9",
    "counselling-josaa-h10",
    "counselling-josaa-h11",
    "counselling-josaa-h12",
]


// This is the array which stores the images to be shown on the blog section
// currently each of the heading we are assuming that it will have an single image according to the implementation
// do note that there can be requirement of multiple images for a single heading from the client side
// in that case we have to make the changes accordingly
// The logic will be document on the notion page for this purpose. 
export const JosaaCounsellingPageImageList : Array<string | null> = [
    // "What is Josaa Counselling?", 
    null,
    // "Josaa Counselling Dates 2025", 
    JosaaCounsellingDatesImage,
    // "Josaa Counselling Eligibility Criteria", 
    JosaaEligibilityCriteriaImage,
    // "Josaa Counselling Application Form",
    null,
    // "Josaa Counselling 2025 Process",
    null,
    // "JOSAA Counselling Seat Allotment Letter", 
    null,
    // "JOSAA Counselling Online Reporting", 
    null,
    // "Partial Admission Fee Payment at JOSAA Portal After Last Round", 
    null,
    // "Physical Reporting  At Allotted Institute", 
    null,
    // "JOSAA Counselling  Certificate Format", 
    null,
    // "JOSAA Counselling 2024 OR-CR", 
    null,
    // "JOSAA Counselling 2025 FAQ"
    null,

]

export const JosaaCounsellingPageContentList : Array<string> = [
    // 1    "What is Josaa Counselling?", 
    `The Joint Seat Allocation Authority (JoSAA) 2024 has been set up by the Ministry of Education [erstwhile Ministry of Human Resources Development (MHRD)] to manage and regulate the joint seat allocation for admissions to 121 institutes for the academic year 2024-25. This includes 23 IITs, 31 NITs, IIEST Shibpur, 26 IIITs and 40 Other-Government Funded Technical Institutes (Other-GFTIs). Admission to all the academic programs offered by these Institutes will be made through a single platform.`,

// 2 counselling dates
`To be notified soon ,expected to be released in after JEE Advanced result 2025.
Following are the last year scheduled for JoSAA counselling 2024:
`,

// 3 Eligibility Criteria
`Each and every candidate who satisfies one or more of the following criteria is eligible for participation in joint seat allocation:`,
    
// 4 Counselling Application Form
    `To be released after JEE Advanced 2025 result,Click here to get notification.
 `,   
      
// 5 Counselling 2025 process
`JoSAA counselling takes place in 5 round as per last year 2024,
<span style = "color : white; font-weight: bold; font-size: medium;"> The counselling process involves the following stages:
</span>

    (i) Online Registration at JoSAA portal 2025 
    (ii) Online Choice Filling and Locking 
    (iii) JoSAA counselling round-1

<span style = "color : white; font-weight: bold; font-size: medium;"> (Condition 1 : IF ANY OF THE FILLED CHOICES ALLOTTED IN ROUND 1) 
THEN FOLLOWING STEP HAVE TO COMPLETED)
</span>
    a. Seat Allotment
    b. Choose Willingness Option
    c. Document Uploading
    d. Payment of seat acceptance fee
    e. Online Reporting and Document Verification

<span style = "color : white; font-weight: bold; font-size: medium;"> (Condition 2 : IF NONE OF THE FILLED CHOICES ALLOTTED IN ROUND 1) THEN FOLLOWING STEP HAVE TO COMPLETED)</span>
 a. Nothing to do ,you will be automatically went to round 2 


(iv) JoSAA counselling round-2 (If same choices allotted) 
       a. Choose Willingness Option
                     or 
JoSAA counselling round-2 (If choices upgraded)
       a. Choose Willingness Option

                   or 
JoSAA counselling round-2 (If no choices allotted)
      (a)Nothing to do ,just wait for the next round.

AND SO ON FOR THE NEXT ROUND 3,4,5

(v)Payment of partial admission fee at josaa 2025 portal 

(vi) Physical Reporting at the Allotted Institute
`,

// 6 Seat Allotment Letter
`It is the candidate’s responsibility to login to the JoSAA portal and check if a seat is allocated in a given round of seat allocation. No separate intimation of seat allocation will be given to the candidate.

Schedule of JoSAA activities is available in Annexure 3 of this document.

If the candidate is allocated a seat, steps of “Online Reporting” mentioned in clause 42 MUST be completed, in order to accept the allocated seat before the last date/time specified for the given round, i.e. the round in which seat is allocated. Please refer to Annexure 3 for the timeline. The allocated seat will then be either confirmed / cancelled on completion of document verification. 

Failing to complete ALL the steps of "Online Reporting", within the specified timeline of the same round of JoSAA [see Annexure 3 for the round-wise timelines], will lead to cancellation of allocated seats and the candidate will NOT be able to participate in the subsequent JoSAA rounds, if any.


A candidate who has been allocated a seat needs to download the “Initial Seat Allotment Intimation Slip” which has information regarding the Seat Allotment and steps to be followed for seat confirmation by the candidate.
`,


// 7 Online Reporting
`
This include following steps:

<span style = "color : white; font-weight: bold; font-size: larger;">Step 1: Accept the Seat
</span>
The candidate needs to accept the seat allocated and opt for any one of the options ‘Freeze’, ‘Slide’ or ‘Float’ for the choice of academic program for subsequent round(s), if any, of joint seat allocation (see section XX).



<span style = "color : white; font-weight: bold; font-size: larger;">STEP 2:Choose Willingness:</span>

FREEZE, FLOAT, AND SLIDE OPTIONS At the time of accepting the seat online, a candidate has to opt for any one of the options i.e. ‘Freeze’, ‘Float’ or ‘Slide’ for the choice of academic program for subsequent round(s), if any, of joint seat allocation. In case the candidate has been allocated a seat as per the candidate’s first choice, the candidate will not be given any of the above options other than Freeze. In such a situation, the candidate may either accept, and Freeze the offered seat, or may reject the offered seat. Non choosing of Freeze option in this case will be considered as rejection of the offered seat and the candidate will not be considered for seat allocation in the further rounds (if any).


<span style = "color : white; font-weight: bold; font-size: medium;">(A) Freeze: </span>
Choosing the option “Freeze” means that the candidate accepts the offered seat and indicates that the candidate is content with the allocated academic program and that the candidate does not want to participate in further rounds of seat allocation while retaining the same seat. Such candidates will NOT be considered in subsequent rounds of JoSAA 2025 (if any). Their chosen seat shall remain allocated to them and shall be provisionally confirmed, subject to successful completion of the steps mentioned in Section XVIII above



<span style = "color : white; font-weight: bold; font-size: medium;">(B) Float: </span> 
Choosing the option “Float” means that the candidate accepts the offered seat and indicates that, if admission to an academic program of higher 46 preference in any Institute is offered in subsequent rounds of seat allocation, the candidate will accept it. Else, the candidate will continue with the currently accepted academic program. Such candidates will be considered in subsequent rounds of JoSAA 2025 (if any).

<span style = "color : white; font-weight: bold; font-size: medium;">(C) Slide:  </span>
Choosing the option “Slide” means that the candidate accepts the offered seat and indicates that, if admission to an academic program of higher preference is offered within the same Institute in subsequent rounds of seat allocation, the candidate will accept it. Such candidates will be considered in subsequent rounds of JoSAA 2024 (if any). For candidates who choose the float or slide option, allocation of a seat in an academic program of the candidate’s higher preference would automatically result in the replacement of the seat accepted by the candidate in the earlier round. Such candidates are only required to accept or reject the academic program of higher preference offered as a result of the float or slide option. In case such candidate rejects or cancels the seat of higher preference, offered as a result of float or slide, then the candidate would no longer be entitled to any seat and would not be permitted to participate any further in JoSAA 2025


Slide and float options will be available to only those candidates who are NOT offered admission to their first choice in their choice-list. 50. Slide and float options are NOT available in the last round of JoSAA 2025. 51. A candidate can change from float to slide/freeze and slide to freeze in the online portal during all rounds of Seat Allocation EXCEPT the last round. 52. If a candidate opts Freeze against a seat, the option cannot be changed in the subsequent rounds under any circumstances. Communication on this matter shall NOT be entertained.

<span style = "color : white; font-weight: bold; font-size: larger;">Step 3: Upload the documents</span>

The candidate MUST upload all the required documents (as per Annexure 3) on the JoSAA portal.


<span style = "color : white; font-weight: bold; font-size: larger;">Step 4: Pay the Seat Acceptance Fee</span>

The candidate MUST pay the seat acceptance fee for continuing with the JoSAA process till the end to avail the seat in IITs or NITs System. The documents uploaded by the candidate cannot be verified unless the candidate pays the seat acceptance fee. Admission fee varies across the Institutes/category of candidates and is different
from the seat acceptance fee. At the time of seat acceptance, candidates have to remit the seat acceptance fee only in the round in which the seat is allotted for the first time. Non-payment of the seat acceptance fee is one of the ways to reject the offered / allocated seat and will be treated as a rejection. In such a situation, the candidate will no longer be able to participate in the seat allocation process in the subsequent rounds.


<span style = "color : white; font-weight: bold; font-size: medium;">Seat Acceptance Fee</span>
The JoSAA portal will also have a provision to make a direct payment of the seat acceptance fee without using the login credentials of the candidate.

Rs. 17,500 for candidates with the category tag SC, ST, GEN-PwD, GEN-EWS-PwD, OBC-NCL-PwD, SC-PwD or ST-PwD and Rs. 35,000 for all other candidates (the fee includes Rs. 5,000 JoSAA processing charges). The seat acceptance fee, excluding JoSAA processing charges of Rs. 5000, will be adjusted against the admission fee. Candidates should remit seat acceptance fee using Debit card / UPI / Credit card / Net Banking / E-Challan [See Chapter XXII below]. There will also be a provision for the candidates to make a prepayment of “JoSAA seat acceptance fee”. Payment link for this will be enabled from the starting day of JoSAA choice filling till the deadline for locking the choices by the candidates. The prepayment fee will be refunded in full, in case the candidate is not allotted a seat. The prepayment provision is OPTIONAL for the candidates. However, the JoSAA recommends the candidates use this provision to avoid last-minute payment failures.

<span style = "color : white; font-weight: bold; font-size: larger;">Step 5: Respond to queries (if any)</span>
At the time of document verification, if the document verification officer raises any query, the candidate must respond in online mode (through candidate portal) within the stipulated time. Failure to respond to the query(ies) on time will lead to cancellation of the allotted seat and the candidate will no longer be able to participate in the subsequent rounds of JoSAA 2025, if any. It is the responsibility of the candidate to check the online portal at regular intervals of time and respond to queries (if any) without fail within

the stipulated time. No separate intimation will be given to the candidates. Candidates MUST complete all the above steps before their details are forwarded to the reporting authorities for verification and provisional allocation of the seat.


<span style = "color : white; font-weight: bold; font-size: larger;">***Document verification is done ONLY for those candidates who have successfully paid the seat acceptance fee.***</span>

Failure to complete all the steps of “Online Reporting” for seat acceptance, within the time given, will be considered as rejection of the offer and the candidate would have forfeited the eligibility for admissions to any of the institutes through JoSAA 2024 and will not be able to participate in the seat allocation process in the subsequent rounds, if any.

`, 

// 8 Partial Admission Fee Payment at JOSAA Portal After Last Round
`
After last round of josaa counselling, candidate have to pay the partial admission fee at josaa portal,if not paid then allotted seat will get cancelled

`, 


// 9 Physical Reporting at the Allotted Institute
`
Click here to know the complete process of physical reporting after successful payment of partial admission fee

`,


// 10 JOSAA Counselling Certificate Format
`1. Certificate format of OBC - NCL : Click here to download
2. Certificate format of EWS : Click here to download
3. Certificate format of SC : Click here to download
4. Certificate format of ST : Click here to download
5. Certificate format of PWD: Click here to download
6. Certificate format to change category : Click here to download
`,

// 11 JOSAA Counselling 2024 OR-CR
`Click here to know the detail of opening and closing rank of josaa 2024
    1. NIT College
    2. IIT College
    3. IIIT College

`,

// 12 JOSAA Counselling 2025 FAQ
``

]
