// here we will store the constants related to the josaa counselling page 
import IITBombayCollegeImage from "../../assets/images/IIT/iit-bombay.png"
import JosaaEligibilityCriteriaImage1 from "../../assets/images/counselling/josaa/josaa-eligibility-criteria-1.png"
import JosaaEligibilityCriteriaImage2 from "../../assets/images/counselling/josaa/josaa-eiligibility-criteria-2.png"

// OVERVIEW  COMPONENT FOR JOSAA COUNsELLING PAGE 
// constant for storing the submenu names which we have to show in dropdown
export const JosaaCounsellingPageSubMenuList : Array<string> = [
    "What is JOSAA Counselling?",
    "JOSAA Counselling Documents",
    "JOSAA Counselling Application Process",
    "JOSAA Counselling Fee",
    "JOSAA Counselling Cutoff",
    "JOSAA Counselling Online Reporting",
    "JOSAA Counselling Physical Reporting",
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
    "What is Josaa Counselling?", 
    "Josaa Counselling dates 2025", 
    "Josaa Counselling Eligibility Criteria", 
    "",
    "Josaa Counselling process 2025",
    "Josaa Counselling counselling application form",
    "Document required for Josaa Counselling",
    "Josaa Counselling Choice filling 2025",
    "Josaa Counselling Seat Allotment 2025", 
    "Josaa Counselling 2025 Opening and Closing rank",
    "Josaa Counselling fee 2025",
    "Josaa Counselling Seat Allotment Letter",
    "Josaa Counselling Online Reporting", 
    "Josaa Counselling Physical Reporting allotted", 
    "Josaa Counselling FAQ"
]

export const JosaaCounsellingPageTableOfContentList : Array<string> = [
    "What is Josaa Counselling?", 
    "Josaa Counselling dates 2025", 
    "Josaa Counselling Eligibility Criteria", 
    // the following section lets make it "" this was done in order to support the following: 
    //1. To be able to add an multiple pair of content and image. 
    //  2. For example : 
    //      to be able to add a content, image , content, image in the same section
    // "",
    "",
    "Josaa Counselling process 2025",
    "Josaa Counselling counselling application form",
    "Document required for Josaa Counselling",
    "Josaa Counselling Choice filling 2025",
    "Josaa Counselling Seat Allotment 2025", 
    "Josaa Counselling 2025 Opening and Closing rank",
    "Josaa Counselling fee 2025",
    "Josaa Counselling Seat Allotment Letter",
    "Josaa Counselling Online Reporting", 
    "Josaa Counselling Physical Reporting allotted", 
    "Josaa Counselling FAQ"
]

export const JosaaCounsellingPageHeadingIdList : Array<string> = [
    "counselling-josaa-h1",
    "counselling-josaa-h2",
    "counselling-josaa-h3",
    "",
    "counselling-josaa-h4",
    "counselling-josaa-h5",
    "counselling-josaa-h6",
    "counselling-josaa-h7",
    "counselling-josaa-h8",
    "counselling-josaa-h9",
    "counselling-josaa-h10",
    "counselling-josaa-h11",
    "counselling-josaa-h12",
    "counselling-josaa-h13",
    "counselling-josaa-h14",
]


// This is the array which stores the images to be shown on the blog section
// currently each of the heading we are assuming that it will have an single image according to the implementation
// do note that there can be requirement of multiple images for a single heading from the client side
// in that case we have to make the changes accordingly
// The logic will be document on the notion page for this purpose. 
export const JosaaCounsellingPageImageList : Array<string | null> = [
    null,
    null,
    JosaaEligibilityCriteriaImage1,
    JosaaEligibilityCriteriaImage2,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,

]

export const JosaaCounsellingPageContentList : Array<string> = [
    // 1
    `The Joint Seat Allocation Authority (JoSAA) 2024 has been set up by the Ministry of Education [erstwhile Ministry of Human Resources Development (MHRD)] to manage and regulate the joint seat allocation for admissions to 121 institutes for the academic year 2024-25. This includes 23 IITs, 31 NITs, IIEST Shibpur, 26 IIITs and 40 Other-Government Funded Technical Institutes (Other-GFTIs). Admission to all the academic programs offered by these Institutes will be made through a single platform.`,

// 2
    `To be notified soon ,expected to be released in after jee advance result 2025`,

// 3
    `Each and every candidate who satisfies one or more of the following
     criteria is eligible for participation in joint seat allocation:`,
    
// 4 a
    `The rest of the crieteria are as follows: `,   
      
// 4    
    `Josaa counselling takes place in 5 round as per last year 2024 ,this involve : \n
    a: Registration of Candidate at JOSAA Counselling: \n
        For registration and filling-in of choices of academic programs in various
        Institutes, candidates should login to the https://josaa.nic.in using the
        following process. The candidate has to sign up as a new user in the portal
        where he/she needs to authenticate by entering the JEE (Main) 2024
        Application Number or JEE (Advanced) 2025 login ID. A One Time
        Password (OTP) will be sent to the registered mobile number and email
        address of the candidate. Upon entering the OTP, the system will prompt the
        candidate to set a password. After this step, the candidate must login with the
        newly set password, and proceed to future steps such as registration, choice
        filling, choice freezing etc.
        The detailed instructions will be provided on JoSAA 2025 portal.\n
    b: Choice Filling: \n
        Once you have completed the registration process ,u have to fill the available choices .All the college NIT,IIT IIIT GFTI and their available branch will be shown in available choices section and now u have to fill acording to your priorities
        click here to watch the complete process of chocie filling\n
    c: Mock allocation of saved choices: \n
        After succesfull choice filling ,josaa will show you mock allocation based on your choices filled.
        You can update your choices after mock allocation\n
    d: Choices Locking or Automatically locked: \n
        Your saved choices will automatically locked once deadline end.You can manuualy lock your choices also.\n
    e: Allocation of Round1: \n
        Now this will be the real allocation of your saved choices in round 1.
        Once you will allocate a seat in any of the round for the first time ,you will have to do online verification on josaa portal 
        click here to know the complete process ,how to do online reporting\n`,
    
    // 5
    `To be released after JEE Advance 2025 result`,


    
    // 6
    `Click here to know the complete detail of document required for josaa counselling process`,


    
    // 7
    `Click here to know how to fill choice filling for josaa counselling 2025`,


    
    // 8
    `At the time of accepting the seat online, a candidate has to opt for any one of
    the options i.e. ‘Freeze’, ‘Float’ or ‘Slide’ for the choice of academic
    program for subsequent round(s), if any, of joint seat allocation. In case the
    candidate has been allocated seat as per the candidate’s first choice, the
    candidate will not be given any of the above options other than Freeze. In
    such a situation, the candidate may either accept, and Freeze the offered seat,
    or may reject the offered seat. Non choosing of Freeze option in this case
    will be considered as rejection of the offered seat and the candidate will
    not be considered for seat allocation in the further rounds (if any).\n
    <strong>(A) FREEZE: </strong>\n
        Choosing the option “Freeze” means that the candidate accepts the offered
        seat and indicates that the candidate is content with the allocated academic
        program and that the candidate does not want to participate in further
        rounds of seat allocation while retaining the same seat. Such candidates
        will NOT be considered in subsequent rounds of JoSAA 2024 (if any). Their
        chosen seat shall remain allocated to them and shall be provisionally
        confirmed, subject to successful completion of the steps mentioned in
        Section XVIII above\n
    <strong> FLOAT: </strong>\n
        Choosing the option “Float” means that the candidate accepts the offered
        seat and indicates that, if admission to an academic program of higher
        46
        preference in any Institute is offered in subsequent rounds of seat allocation,
        the candidate will accept it. Else, the candidate will continue with the
        currently accepted academic program. Such candidates will be considered in
        subsequent rounds of JoSAA 2024 (if any).\n
    <strong> SLIDE: </strong>\n
        Choosing the option “Slide” means that the candidate accepts the offered
        seat and indicates that, if admission to an academic program of higher
        preference is offered within the same Institute in subsequent rounds of seat
        allocation, the candidate will accept it. Such candidates will be considered in
        subsequent rounds of JoSAA 2024 (if any).
        For candidates who choose the float or slide option, allocation of a seat
        in an academic program of the candidate’s higher preference would
        automatically result in the replacement of the seat accepted by the candidate
        in the earlier round. Such candidates are only required to accept or reject the
        academic program of higher preference offered as a result of the float or
        slide option. In case such candidate rejects or cancels the seat of higher
        preference, offered as a result of float or slide, then the candidate would no
        longer be entitled to any seat and would not be permitted to participate any
        further in JoSAA 2024\n
        `,
    
    
    // 9
    `Some content will come here. Work is in progress right now for this purpose`,
    
    

    // 10
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque esse debitis labore, sapiente eum nobis, quasi atque modi sequi facere corporis, iure optio officia praesentium veritatis minus mollitia officiis.Officia sequi, dolorum voluptatum consectetur beatae dolore iure adipisci exercitationem aspernatur accusantium aperiam ipsam tempore molestias odit quam libero ad? Fugiat, expedita cupiditate. Aut corrupti animi error architecto maxime iure?",
    
    

    // 11
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque esse debitis labore, sapiente eum nobis, quasi atque modi sequi facere corporis, iure optio officia praesentium veritatis minus mollitia officiis.Officia sequi, dolorum voluptatum consectetur beatae dolore iure adipisci exercitationem aspernatur accusantium aperiam ipsam tempore molestias odit quam libero ad? Fugiat, expedita cupiditate. Aut corrupti animi error architecto maxime iure?",
    
    
    // 12
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque esse debitis labore, sapiente eum nobis, quasi atque modi sequi facere corporis, iure optio officia praesentium veritatis minus mollitia officiis.Officia sequi, dolorum voluptatum consectetur beatae dolore iure adipisci exercitationem aspernatur accusantium aperiam ipsam tempore molestias odit quam libero ad? Fugiat, expedita cupiditate. Aut corrupti animi error architecto maxime iure?",
    
    
    // 13
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque esse debitis labore, sapiente eum nobis, quasi atque modi sequi facere corporis, iure optio officia praesentium veritatis minus mollitia officiis.Officia sequi, dolorum voluptatum consectetur beatae dolore iure adipisci exercitationem aspernatur accusantium aperiam ipsam tempore molestias odit quam libero ad? Fugiat, expedita cupiditate. Aut corrupti animi error architecto maxime iure?",
    
    
    // 14
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque esse debitis labore, sapiente eum nobis, quasi atque modi sequi facere corporis, iure optio officia praesentium veritatis minus mollitia officiis.Officia sequi, dolorum voluptatum consectetur beatae dolore iure adipisci exercitationem aspernatur accusantium aperiam ipsam tempore molestias odit quam libero ad? Fugiat, expedita cupiditate. Aut corrupti animi error architecto maxime iure?",
    
]
