// File for storing all the routes 

import HomePage from "../home/HomePage";
import CouncellingHomePage from "../pages/councelling/CouncellingHomePage";
import BitSatExamPage from "../pages/exams/BitsatExamPage";
import ExamHomePage from "../pages/exams/ExamHomePage";
import JeeAdvancedExamPage from "../pages/exams/JeeAdvancedPage";
import JeeMainExamPage from "../pages/exams/JeeMainExamPage";
import MentorShipHomePage from "../pages/mentorship/MentorShipHomePage";


const routes = [
    // exams related routes comes here
    {
        path : "/",
        component : <HomePage/>
    }, 
    {
        path : "/exam", 
        component : <ExamHomePage/>
    },
    {
        path : "/exam/jeemains", 
        component : <JeeMainExamPage/>
    }, 
    {
        path : "/exam/jeeadvance", 
        component : <JeeAdvancedExamPage/>
    }, 
    {
        path : "/exam/bitsat", 
        component : <BitSatExamPage/>
    }, 

    
    
    
    // mentoroship related routes comes here 
    {
        path : "/mentorship", 
        component : <MentorShipHomePage/>
    }, 



    // councelling related routes comes here
    {
        path : "/counselling", 
        component : <CouncellingHomePage/>
    }
]

// say everything went fine 
export default routes