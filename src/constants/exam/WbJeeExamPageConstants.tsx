// here comes the constants related to the jee advanced exam page

//OVERVIEW COMPONENT 
// constant for showing the various options related to jee advance in dropdown button
export const WBJeeExamSubMenuList : Array<string> = [
    "WBJee Exam",
    "WBJee Syllabus",
    "WBJee Application",
    "WBJee Eligibility",
    "WBJee Dates",
    "WBJee Admit Card",
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
    "WBJee Exam History", 
    "Who Conducts WBJee?", 
    "WBJee 2025 Exam Dates", 
    "WBJee Overview",
    "WBJee Exam pattern",
    "WBJee Cutoff ",
    "WBJee Eligibility ",
    "WBJee Qualifications criteria", 
    "WBJee Age criteria ",
    "WBJee State of eligibility ",
    "WBJee Syllabus ",
    "WBJee Results", 
    "WBJee Marks vs Percentile", 
    "WBJee Counselling Process"
]


// constant for the table of content on the page
export const WbJeeTableOfContentList : Array<string> = [
    "WbJee Exam History", 
    "Who Conducts WbJee?", 
    "WbJee 2025 Exam Dates", 
    "WbJee Overview",
    "WbJee Exam pattern",
    "WbJee Cutoff ",
    "WbJee Eligibility ",
    "WbJee Qualifications criteria", 
    "WbJee Age criteria ",
    "WbJee State of eligibility ",
    "WbJee Syllabus ",
    "WbJee Results", 
    "WbJee Marks vs Percentile", 
    "WbJee Counselling Process"
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
    "exam-wbjee-h12",
    "exam-wbjee-h13",
    "exam-wbjee-h14",
]



// finally the constant for the content that will be present on the page
export const WbJeeContentList : Array<string> = [
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

