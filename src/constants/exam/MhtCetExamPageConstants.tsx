// here comes the constants related to the jee advanced exam page

//OVERVIEW COMPONENT 
// constant for showing the various options related to jee advance in dropdown button
export const MhtCetExamSubMenuList : Array<string> = [
    "MhtCet Exam",
    "MhtCet Syllabus",
    "MhtCet Application",
    "MhtCet Eligibility",
    "MhtCet Dates",
    "MhtCet Admit Card",
]


// this is routes that we will need for the dropdown section
// do note that for every dropdwon option above we need to define the corresponding route here
export const MhtCetExamRoutesList : Array<string> = [
    "/exam/mhtcet/exam", 
    "/exam/mhtcet/syllabus", 
    "/exam/mhtcet/application", 
    "/exam/mhtcet/eligibility", 
    "/exam/mhtcet/dates", 
    "/exam/mhtcet/admitcard", 
]



// constants for the names of the buttons that are present in the OVERVIEW section of the page
export const MhtCetExamsButtonNameList : Array<string> = [
    "Jee Advance", 
    "Jee Mains", 
    "BITSAT", 
    "WBJEE", 
    "MHTCET"
]

// constans for width of the button that are present in the overview section 
// do note that mostly the width of the button remains the same
// but still we have used this constants to make the code more generic and configurable in future
export const MhtCetExamPageButtonWidthList : Array<string> = [
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
export const MhtCetExamPageButtonCodesList : Array<string> = [
    "1", 
    "2", 
    "3", 
    "4", 
    "5"
]



// VIDEO CARD RELATED CONSTANTS  : this constant is mainly used for the latest update section 

// constant for the links of the youtube videos to be shown on the website
export const MhtCetVideoCardUrlList : Array<string> = [
    "https://www.youtube.com/embed/CHmaw6Vu4_I", 
    "https://www.youtube.com/embed/CHmaw6Vu4_I", 
    "https://www.youtube.com/embed/CHmaw6Vu4_I"
]


// constant for showing the title of the corresponding video 
// this seems to be temporary as we will be fetching the data mainly from backend itself
export const MhtCetVideoCardTitleList : Array<string> = [
    "First title", 
    "Second title", 
    "Third title"
]




// BLOG RELATED CONSTANTS FOR JEE ADVANCE EXAM PAGE

// constants for the heading of the jee advance exam page 
export const MhtCetHeadingList : Array<string> = [
    "MhtCet Exam History", 
    "Who Conducts MhtCet?", 
    "MhtCet 2025 Exam Dates", 
    "MhtCet Overview",
    "MhtCet Exam pattern",
    "MhtCet Cutoff ",
    "MhtCet Eligibility ",
    "MhtCet Qualifications criteria", 
    "MhtCet Age criteria ",
    "MhtCet State of eligibility ",
    "MhtCet Syllabus ",
    "MhtCet Results", 
    "MhtCet Marks vs Percentile", 
    "MhtCet Counselling Process"
]


// constant for the table of content on the page
export const MhtCetTableOfContentList : Array<string> = [
    "MhtCet Exam History", 
    "Who Conducts MhtCet?", 
    "MhtCet 2025 Exam Dates", 
    "MhtCet Overview",
    "MhtCet Exam pattern",
    "MhtCet Cutoff ",
    "MhtCet Eligibility ",
    "MhtCet Qualifications criteria", 
    "MhtCet Age criteria ",
    "MhtCet State of eligibility ",
    "MhtCet Syllabus ",
    "MhtCet Results", 
    "MhtCet Marks vs Percentile", 
    "MhtCet Counselling Process"
]


// constant for heading id 
// do note that in order to identify each of the ids uniquely and then use this to build the feature 
// in order to go to the section where the user has click in table of contents 
export const MhtCetHeadingIdList : Array<string> = [
    "exam-mhtcet-h1",
    "exam-mhtcet-h2",
    "exam-mhtcet-h3",
    "exam-mhtcet-h4",
    "exam-mhtcet-h5",
    "exam-mhtcet-h6",
    "exam-mhtcet-h7",
    "exam-mhtcet-h8",
    "exam-mhtcet-h9",
    "exam-mhtcet-h10",
    "exam-mhtcet-h11",
    "exam-mhtcet-h12",
    "exam-mhtcet-h13",
    "exam-mhtcet-h14",
]



// finally the constant for the content that will be present on the page
export const MhtCetContentList : Array<string> = [
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

