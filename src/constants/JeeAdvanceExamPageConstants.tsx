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
    "Jee Advance Overview",
    "Jee Advance Exam pattern",
    "Jee Advance Cutoff ",
    "Jee Advance Eligibility ",
    "Jee Advance Qualifications criteria", 
    "Jee Advance Age criteria ",
    "Jee Advance State of eligibility ",
    "Jee Advance Syllabus ",
    "Jee Advance Results", 
    "Jee Advance Marks vs Percentile", 
    "Jee Advance Counselling Process"
]


// constant for the table of content on the page
export const JeeAdvanceTableOfContentList : Array<string> = [
    "Jee Advance Exam History", 
    "Who Conducts Jee Advance?", 
    "Jee Advance 2025 Exam Dates", 
    "Jee Advance Overview",
    "Jee Advance Exam pattern",
    "Jee Advance Cutoff ",
    "Jee Advance Eligibility ",
    "Jee Advance Qualifications criteria", 
    "Jee Advance Age criteria ",
    "Jee Advance State of eligibility ",
    "Jee Advance Syllabus ",
    "Jee Advance Results", 
    "Jee Advance Marks vs Percentile", 
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
    "exam-jeeadvance-h13",
    "exam-jeeadvance-h14",
]



// finally the constant for the content that will be present on the page
export const JeeAdvanceContentList : Array<string> = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ipsam eos ratione. Labore dolorum accusantium suscipit? Autem numquam ducimus dolores doloremque illum, possimus porro quisquam, suscipit, nobis voluptas laboriosam dicta Quibusdam ad aperiam veritatis, aut nemo magnam incidunt, adipisci quaerat optio, necessitatibus ullam esse enim suscipit veniam debitis. Placeat accusamus ratione incidunt cupiditate iure. Vitae recusandae culpa temporibus quae minima? Error provident aliquid soluta, expedita perferendis eaque quasi aperiam debitis quam unde, sequi placeat cumque quisquam quia consequuntur dolorum, ipsam rerum nostrum iure asperiores deleniti eos. Modi perferendis recusandae asperiores?", 
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque esse debitis labore, sapiente eum nobis, quasi atque modi sequi facere corporis, iure optio officia praesentium veritatis minus mollitia officiis.Officia sequi, dolorum voluptatum consectetur beatae dolore iure adipisci exercitationem aspernatur accusantium aperiam ipsam tempore molestias odit quam libero ad? Fugiat, expedita cupiditate. Aut corrupti animi error architecto maxime iure?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque esse debitis labore, sapiente eum nobis, quasi atque modi sequi facere corporis, iure optio officia praesentium veritatis minus mollitia officiis.Officia sequi, dolorum voluptatum consectetur beatae dolore iure adipisci exercitationem aspernatur accusantium aperiam ipsam tempore molestias odit quam libero ad? Fugiat, expedita cupiditate. Aut corrupti animi error architecto maxime iure?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque esse debitis labore, sapiente eum nobis, quasi atque modi sequi facere corporis, iure optio officia praesentium veritatis minus mollitia officiis.Officia sequi, dolorum voluptatum consectetur beatae dolore iure adipisci exercitationem aspernatur accusantium aperiam ipsam tempore molestias odit quam libero ad? Fugiat, expedita cupiditate. Aut corrupti animi error architecto maxime iure?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque esse debitis labore, sapiente eum nobis, quasi atque modi sequi facere corporis, iure optio officia praesentium veritatis minus mollitia officiis.Officia sequi, dolorum voluptatum consectetur beatae dolore iure adipisci exercitationem aspernatur accusantium aperiam ipsam tempore molestias odit quam libero ad? Fugiat, expedita cupiditate. Aut corrupti animi error architecto maxime iure?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque esse debitis labore, sapiente eum nobis, quasi atque modi sequi facere corporis, iure optio officia praesentium veritatis minus mollitia officiis.Officia sequi, dolorum voluptatum consectetur beatae dolore iure adipisci exercitationem aspernatur accusantium aperiam ipsam tempore molestias odit quam libero ad? Fugiat, expedita cupiditate. Aut corrupti animi error architecto maxime iure?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque esse debitis labore, sapiente eum nobis, quasi atque modi sequi facere corporis, iure optio officia praesentium veritatis minus mollitia officiis.Officia sequi, dolorum voluptatum consectetur beatae dolore iure adipisci exercitationem aspernatur accusantium aperiam ipsam tempore molestias odit quam libero ad? Fugiat, expedita cupiditate. Aut corrupti animi error architecto maxime iure?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque esse debitis labore, sapiente eum nobis, quasi atque modi sequi facere corporis, iure optio officia praesentium veritatis minus mollitia officiis.Officia sequi, dolorum voluptatum consectetur beatae dolore iure adipisci exercitationem aspernatur accusantium aperiam ipsam tempore molestias odit quam libero ad? Fugiat, expedita cupiditate. Aut corrupti animi error architecto maxime iure?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque esse debitis labore, sapiente eum nobis, quasi atque modi sequi facere corporis, iure optio officia praesentium veritatis minus mollitia officiis.Officia sequi, dolorum voluptatum consectetur beatae dolore iure adipisci exercitationem aspernatur accusantium aperiam ipsam tempore molestias odit quam libero ad? Fugiat, expedita cupiditate. Aut corrupti animi error architecto maxime iure?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque esse debitis labore, sapiente eum nobis, quasi atque modi sequi facere corporis, iure optio officia praesentium veritatis minus mollitia officiis.Officia sequi, dolorum voluptatum consectetur beatae dolore iure adipisci exercitationem aspernatur accusantium aperiam ipsam tempore molestias odit quam libero ad? Fugiat, expedita cupiditate. Aut corrupti animi error architecto maxime iure?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque esse debitis labore, sapiente eum nobis, quasi atque modi sequi facere corporis, iure optio officia praesentium veritatis minus mollitia officiis.Officia sequi, dolorum voluptatum consectetur beatae dolore iure adipisci exercitationem aspernatur accusantium aperiam ipsam tempore molestias odit quam libero ad? Fugiat, expedita cupiditate. Aut corrupti animi error architecto maxime iure?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque esse debitis labore, sapiente eum nobis, quasi atque modi sequi facere corporis, iure optio officia praesentium veritatis minus mollitia officiis.Officia sequi, dolorum voluptatum consectetur beatae dolore iure adipisci exercitationem aspernatur accusantium aperiam ipsam tempore molestias odit quam libero ad? Fugiat, expedita cupiditate. Aut corrupti animi error architecto maxime iure?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque esse debitis labore, sapiente eum nobis, quasi atque modi sequi facere corporis, iure optio officia praesentium veritatis minus mollitia officiis.Officia sequi, dolorum voluptatum consectetur beatae dolore iure adipisci exercitationem aspernatur accusantium aperiam ipsam tempore molestias odit quam libero ad? Fugiat, expedita cupiditate. Aut corrupti animi error architecto maxime iure?",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque esse debitis labore, sapiente eum nobis, quasi atque modi sequi facere corporis, iure optio officia praesentium veritatis minus mollitia officiis.Officia sequi, dolorum voluptatum consectetur beatae dolore iure adipisci exercitationem aspernatur accusantium aperiam ipsam tempore molestias odit quam libero ad? Fugiat, expedita cupiditate. Aut corrupti animi error architecto maxime iure?",
    
]

