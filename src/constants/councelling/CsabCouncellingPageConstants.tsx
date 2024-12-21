// constant page for the csab related stuff 
// here we will store the constants related to the josaa counselling page 
import CsabCounsellingCounsellingProcessImage from "../../assets/images/counselling/csab/Csab-CounsellingProcess.png"
import CsabCounsellingEligibilityRoundsImage from "../../assets/images/counselling/csab/CSAB-EligibilityRounds.png"
import CsabCounsellingDatesImage from "../../assets/images/counselling/csab/Csab-CounsellingDates.png"


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
    "Csab Counselling Dates 2025", 
    "Eligible Candidates for CSAB-2025 Special Rounds", 
    "",
    "Document Required for CSAB Counselling", 
    "CSAB Counselling 2025 Process", 
    "CSAB Counselling Application Form", 
    "CSAB Counselling 2025 Choice Filling", 
    "CSAB Counselling 2025 Seat Allotment",
    "CSAB Counselling 2025 Fee", 
    "Physical Reporting Allotted", 
    "CSAB Counselling 2024 Opening and Closing Rank", 
    "CSAB Counselling 2025 Certificate Format", 
    "CSAB Counselling 2025 FAQ"
]

export const CsabCounsellingPageTableOfContentList : Array<string> = [
    "What is Csab Counselling?", 
    "Csab Counselling Dates 2025", 
    "Eligible Candidates for CSAB-2025 Special Rounds", 
    "",
    "Document Required for CSAB Counselling", 
    "CSAB Counselling 2025 Process", 
    "CSAB Counselling Application Form", 
    "CSAB Counselling 2025 Choice Filling", 
    "CSAB Counselling 2025 Seat Allotment",
    "CSAB Counselling 2025 Fee", 
    "Physical Reporting Allotted", 
    "CSAB Counselling 2024 Opening and Closing Rank", 
    "CSAB Counselling 2025 Certificate Format", 
    "CSAB Counselling 2025 FAQ"
]

export const CsabCounsellingPageHeadingIdList : Array<string> = [
    "counselling-csab-h1",
    "counselling-csab-h2",
    "counselling-csab-h3",
    "",
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
    // "What is Csab Counselling?", 
    null, 
    // "Csab Counselling Dates 2025", 
    CsabCounsellingDatesImage, 
    // "Eligible Candidates for CSAB-2025 Special Rounds", 
    CsabCounsellingEligibilityRoundsImage, 
    // "Eligible Candidates for CSAB-2025 Special Rounds - Section 2"
    null,
    // "Document Required for CSAB Counselling", 
    null, 
    // "CSAB Counselling 2025 Process", 
    CsabCounsellingCounsellingProcessImage, 
    // "CSAB Counselling Application Form", 
    null, 
    // "CSAB Counselling 2025 Choice Filling", 
    null, 
    // "CSAB Counselling 2025 Seat Allotment",
    null, 
    // "CSAB Counselling 2025 Fee", 
    null, 
    // "Physical Reporting Allotted", 
    null, 
    // "CSAB Counselling 2024 Opening and Closing Rank", 
    null, 
    // "CSAB Counselling 2025 Certificate Format", 
    null, 
    // "CSAB Counselling 2025 FAQ"
    null, 
]

export const CsabCounsellingPageContentList : Array<string> = [
// "What is Csab Counselling?", 
`Two Special Rounds of seat allocation are organized by the Central Seat Allocation Board (CSAB) to allocate the unfilled seats of the NIT+ System after the 5th JoSAA Round. The CSAB-Special Rounds will be conducted by NITK Surathkal through the online portal of CSAB (https://csab.nic.in). The Business Rules of CSAB-Special Rounds can be seen on the CSAB website. The details of vacant seats in various Participating Institutes will be available after the end of the JoSAA-2025 Rounds and just before the start of Registration for CSAB-Special Rounds. Candidates desirous of participating in the CSAB-Special Rounds are required to do a fresh registration. The process of Registration, Choice Filling, Choice Locking, Seat Allotment, Payment of fees, etc., are different from those of JoSAA rounds. The candidates are advised to carefully go through the Business Rules and Process Flow of the CSAB-Special Rounds available on the CSAB website.`,


// "Csab Counselling Dates 2025", 
`CSAB counselling start after josaa counselling 2025,it is likely to start from 3rd week of july 2025, 
As per last year following are the schedule:
`,


// "Eligible Candidates for CSAB-2025 Special Rounds", 
`All candidates who were eligible in JoSAA for NIT+ System as per JEE (Main) 2024 Ranks and as per eligibility criteria given in Annexure-2 and Annexure-5 are eligible for participating in CSAB-2025 Special Rounds. The details of specific TYPES of eligible candidates are mentioned below.


`,

// "Eligible Candidates for CSAB-2025 Special Rounds - Section 2"
`
<span style = "color : white; font-weight: bold; padding:1px; font-size: medium;" class="">Note: </span> 
(a)Type-6 candidates will be participating in CSAB Special Rounds while retaining their seats for which they have already secured admission after JoSAA rounds. In case, a new seat is allotted in CSAB Special Rounds, then their retained seats will AUTOMATICALLY GET CANCELLED, and candidates will not have any claim on the previously secured/retained seats (refer Annexure-1). 

(b) Candidates occupying a seat in DASA-2024 will NOT be allowed to participate in the CSAB-Special Rounds. Such candidates MUST SURRENDER/ WITHDRAW the DASA2024 seats before the specified date (please refer to schedule available in the DASA website) in order to be eligible for CSAB-Special Rounds. 

(c) If a candidate fails to register for the CSAB Special Rounds as per the schedule given         on CSAB-2024 website, she/he will not be considered in any of CSAB Special Rounds of counselling.

`,



// "Document Required for CSAB Counselling", 
`
Click here to know the complete detail of document required for csab counselling 2025

`,


// "CSAB Counselling 2025 Process", 
`
CSAB-2025 will be conducting two Special Rounds of seat allotment for which a FRESH REGISTRATION IS MANDATORY as per the schedule given on CSAB-2025 website. The schedule is available at CSAB-2025 website (https://csab.nic.in).


Candidates who are not Indian Nationals (by birth or naturalized) and are not OCI/PIO card holders, whether or not they have studied 10+2 level or equivalent in India or abroad, are not eligible for seat allocation through CSAB-2025 Special Rounds to NITs, IIEST, IIITs, SPAs, and other-GFTIs.


The counselling process involves the following stages: 
          (i) Online Registration 
          (ii) Payment of SREF (IAF-I + SRPF) 
          (iii) Online Choice Filling and Locking 
          (iv) Special Round-I 
                 a. Seat Allotment 
                 b. Choose Willingness Option
                 c. Document Uploading 
                 d. Payment of IAF-II 
                 e. Online Reporting and Document Verification 
        (v) Special Round-II 
                 a. Seat Allotment 
                 b. Document Uploading 
                   c. Payment of IAF-II 
                   d. Online Reporting and Document Verification 
   (vi) Physical Reporting at the Allotted Institute


`,


// "CSAB Counselling Application Form", 
`
(i)Candidates are strongly advised to ensure that they fulfil the eligibility criteria as per Annexure-2 and Annexure-5 before registration for participation in CSAB-2025 Special Rounds. 

(ii) All eligible candidates are required to do a fresh registration online for participation in Special Rounds through CSAB portal (https://csab.nic.in) as per the schedule. Earlier registration done on JoSAA portal is NOT valid for CSAB Special Rounds. 


(iii) Candidates whose documents are not verified at NIT+ system during JoSAA rounds can update their State of Eligibility, Nationality, Gender, and Category (only from Beneficiary to non-Beneficiary Category as per Annexure-4) at the time of CSAB-2025 Special Rounds Registration. 

(iv) Candidates whose documents are verified during JoSAA rounds and their category was changed from OBC-NCL/GEN-EWS/SC/ST to GEN may request to restore their category they had registered with, if they have re-acquired valid certificates.


`,


// "CSAB Counselling 2025 Choice Filling", 
`
After the completion of fee payment, all the candidates are required to fill in their FRESH CHOICES. The previously filled Choices during JoSAA-2025 rounds (if any) stand NULL AND VOID and hence will NOT be considered for allotment in CSAB-2025 Special Rounds. Candidates are advised to carefully fill their FRESH CHOICES and save them frequently during the process.


(i) Registered candidates will be able to fill in their choices. All the programs of the NIT+ System for which they are eligible will be displayed to them, irrespective of vacancy status. Candidates are also advised to check the special eligibility criteria, if any, for the academic programs before filling their choices. A list such criteria is available in the CSAB website. 

(ii) The vacant seat matrix displayed to the candidates is tentative. Some additional vacant seats may be available at a later stage of counselling. Therefore, candidates are advised to fill in their choices of seats irrespective of the vacancy status. 


(iii) The candidates who have SECURED admission in JoSAA-2025 rounds are also eligible to participate in CSAB SPECIAL ROUNDS. Such candidates, while retaining
currently allotted seat, are also required to fill their choices of seats afresh. All valid choices will be shown to the candidates except the last SECURED seat at NIT+ System after JoSAA rounds. The last SECURED JoSAA seat will automatically be considered as the last choice for seat allotment. The willingness option (FLOAT/SLIDE/FREEZE) exercised by the candidates during JoSAA rounds stand NULL AND VOID for CSAB Special Rounds and all the filled in choices in the CSAB Special Rounds will be considered for allotment.

(IV)Candidates MUST “lock” their choices on or before the last day of choice filling. If the candidates do NOT lock their choices, their last saved choices will be locked automatically upon reaching the deadline for choice filling (as per the CSAB-2025 Special Rounds schedule). Once locked, the choices filled by the candidates cannot be edited. Candidates willing to edit their locked choices may do so by submitting an online request in the CSAB portal well before the choice filling deadline. An OTP will be sent to the registered mobile number and email, which can be used to validate the unlock request. Once validated, candidate’s choices will be unlocked. Candidates will NOT be allowed to edit their choice-list after the deadline for choice filling, i.e., candidates CANNOT change the order of their choices OR add any more choices OR delete any choices from their choice-list after the deadline for choice filling. Candidates are strongly discouraged from sharing their login information/credentials with others.

(v) Candidates must fill and save at least one choice of seat to be considered for seat allotment. Candidates who failed to fill and save at least one choice will NOT be considered for seat allotment and admission in CSAB Special Rounds. (vi) Candidates must download and take a printout of their locked choices. This printout consists of the terms and conditions as agreed by the candidates during choice filling.
`,


// "CSAB Counselling 2025 Seat Allotment",
`
(a)Seat Allotment 
(i) Seat Allotment result will be published ONLINE only. Candidates can view their allotment status after logging in the CSAB-2025 Portal by using their login credentials. 
(ii) Seat allotment will be carried out according to JEE (Main) - 2024 ranks (CRL) for the vacant seats. 
(iii) Candidates who have SECURED seats by the last round (5th round) of JoSAA-2025 and are not participating in CSAB-2025 Special Rounds, may undergo category upgradation against their SECURED seats. This means that their earlier allotted seats will be retained in the same program and in the same institute, but the seat category may be upgraded. For example, if a candidate has been allotted a seat in Computer Science and Engineering at NITK, Surathkal under OBC-NCL seat category, the candidate’s allotted seat category may be upgraded to OPEN seat category while retaining the seat to Computer Science
and Engineering at NITK, Surathkal , even if the candidate has not participated in CSAB Special Rounds.

(b)Online reporting
(i)After seat allotment in Special Round-I, if the candidate opts for FREEZE/SLIDE/FLOAT and pays Institute Admission Fee-II, her/his uploaded documents will be verified ONLINE by the officials of the Verification Centers, as per the CSAB-2025 schedule, and the final status (Seat Confirmation/Seat Cancellation) will be reflected in the candidates’ login portal on CSAB-2025.
(ii)Document verification is applicable for the candidates whose documents have not been verified in NIT+ System during JoSAA-2024 Rounds 1 through 5. It is also applicable for the candidates whose documents have been verified in NIT+ System during JoSAA-2025 11 Information Brochure CSAB – 2025 (Special Rounds 1 through 5 but there is a change in credential/category/basic information related to the candidacy, at the time of CSAB-2025 Special Round registration. 


(iii) During document verification process, there may be queries raised by the Verifying Officers. The candidates must resolve the queries by responding in time through their CSAB-2024 login portal strictly as per the schedule given on CSAB-2025 website. 

(iv) It is the sole responsibility of the candidate to keep checking her/his reporting or document verification status and provide the necessary documents/information to the Verification Center official, if required, as per the schedule given on CSAB-2025 website. 


(v) The candidate is not required to visit the Allotted Institute after Special Round-I, even if a candidate has chosen “FREEZE” and her/his status of Online Reporting/Document Verification is successful. Physical reporting at the admitting institute shall be done after Special Round-II, details of which will be available on respective websites of the Institutes.


 (vi) After seat allotment in Special Round-I, if the candidate opts for “SURRENDER” then her/his currently allotted seat (from Special Round-I or retained/secured seat from JoSAA-2025) will be CANCELLED but the candidate will still be eligible for Special Round-II. 


 (vii) After seat allotment in Special Round-I, if the candidate opts for “WITHDRAW” then her/his currently allotted seat (from Special Round-I or retained/secured seat from JoSAA-2025) will be CANCELLED and candidate will NOT be eligible for Special Round-II.


 (viii) Candidates who have SECURED their seats successfully during JoSAA-2024 by paying PAF and are participating in CSAB-Special Rounds, if DO NOT choose any of the options FREEZE/SLIDE/FLOAT/SURRENDER/WITHDRAW, they will be AUTOMATICALLY MOVED to Special Round-II with FLOAT as their default willingness option. 


 (ix) If a candidate (other than those specified in the above point: Section 5.4 



(viii)) has been freshly allotted a seat in Special Round-I and does not select any of the willingness options FREEZE/ SLIDE/ FLOAT/ SURRENDER/ WITHDRAW, OR selects a willingness option (FREEZE/SLIDE/FLOAT) but does NOT pay Institute Admission Fee-II,


selects a willingness option FREEZE/SLIDE/FLOAT, pays the Institute Admission Fee-II but DOES NOT respond timely to the queries of Verification Center Officials regarding her/his document verification as per the schedule given on CSAB-2025 website, then her/his seat will be CANCELLED, and the candidate will NOT be considered for next round of seat allotment.


`,


// "CSAB Counselling 2025 Fee", 
`
After seat allotment of Special Round-I, if the candidate exercises the willingness option FREEZE/SLIDE/ FLOAT and has uploaded all the required documents, she/he MUST pay the Institute Admission Fee-II using Net Banking/Debit Card/Credit Card or State Bank of India e-challan. The Institute Admission Fee-II is Rs. 35,000/- for GEN/GENEWS/OBC-NCL candidates and Rs. 12,500/- for SC/ST/PwD candidates. However, Type-6 eligible candidates (refer Section 3) are not required to pay Institute Admission Fee-II as they have already paid the PAF during JoSAA rounds. Note: ▪ Payment of Institute Admission Fee-II is mandatory irrespective of whether the candidate has chosen FLOAT or SLIDE or FREEZE option. ▪ After payment of Institute Admission Fee-II, candidates are required to ensure Successful Online Reporting and Document Verification to provisionally confirm their seats as mentioned in Section 5.4, otherwise the seats will get cancelled.

`,


// "Physical Reporting Allotted", 
`
After completion of CSAB Special Rounds (I & II), candidates who have confirmed allotted seats are required to report physically at the Allotted Institute for admission (as per the schedule given on CSAB-2025 website). They are required to check the instructions available on the websites of the Allotted Institutes and complete all the admission modalities/formalities. They are also required to pay the balance Institute Fee (as applicable), failing which their allotment may be cancelled and no refund will be admissible.

`,


// "CSAB Counselling 2024 Opening and Closing Rank", 
`
 Click here to know the detail of opening and closing rank of josaa 2024
    1. NIT College
    2. IIT College
    3. IIIT College

`,


// "CSAB Counselling 2025 Certificate Format", 
`
1. Certificate format of OBC - NCL Click here to download
2. Certificate format of EWS : Click here to download
3. Certificate format of SC - NCL Click here to download
4. Certificate format of ST- NCL Click here to download
5. Certificate format of PWD: Click here to download
6. Certificate format to change category : Click here to download

`,


// "CSAB Counselling 2025 FAQ"    
``,

]
