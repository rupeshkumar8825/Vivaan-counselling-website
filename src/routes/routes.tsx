// File for storing all the routes 

import HomePage from "../home/HomePage";
import LoginFormPage from "../pages/authentication/LoginFormPage";
import RegisterFormPage from "../pages/authentication/RegisterFormPage";
import CollegeHomePage from "../pages/college/CollegeHomePage";
import IIITCollegePage from "../pages/college/IIITCollegePage";
import IITCollegePage from "../pages/college/IITCollegePage";
import NITCollegePage from "../pages/college/NITCollegePage";
import StateEngineeringCollegePage from "../pages/college/StateEngineeringCollegePage";
import IITGenericCollegePage from "../pages/college/subpage/IIT/IITGenericCollegePage";
import ComedkCounsellingPage from "../pages/counselling/ComedkCounsellingPage";
import CouncellingHomePage from "../pages/counselling/CounsellingHomePage";
import CsabCounsellingPage from "../pages/counselling/CsabCounsellingPage";
import GgsipuCounsellingPage from "../pages/counselling/GgsipuCounsellingPage";
import JacDelhiCounsellingPage from "../pages/counselling/JacDelhiCounsellingPage";
import JossaCounsellingPage from "../pages/counselling/JosaaCounsellingPage";
import UptuCounsellingPage from "../pages/counselling/UptuCounsellingPage";
import WebJeeCounsellingPage from "../pages/counselling/WebJeeCounsellingPage";
import BitSatExamPage from "../pages/exams/BitsatExamPage";
import ExamHomePage from "../pages/exams/ExamHomePage";
import JeeAdvancedExamPage from "../pages/exams/JeeAdvancedExamPage";
import JeeMainExamPage from "../pages/exams/JeeMainExamPage";
import MhtcetExamPage from "../pages/exams/MhtcetExamPage";
import JeeMainExamAdmitCardPage from "../pages/exams/subPages/JeeMain/JeeMainExamAdmitCardPage";
import JeeMainExamApplicationPage from "../pages/exams/subPages/JeeMain/JeeMainExamApplicationPage";
import JeeMainExamDatesPage from "../pages/exams/subPages/JeeMain/JeeMainExamDatePage";
import JeeMainExamDetailsPage from "../pages/exams/subPages/JeeMain/JeeMainExamDetailsPage";
import JeeMainExamEligibilityPage from "../pages/exams/subPages/JeeMain/JeeMainExamEligibilityPage";
import JeeMainExamSyllabusPage from "../pages/exams/subPages/JeeMain/JeeMainExamSyllabusPage";
import WebjeeExamPage from "../pages/exams/WebjeeExamPage";
import JeeAdvancedMentorshipPage from "../pages/mentorship/JeeAdvancedMentorshipPage";
import JeeMainMentorshipPage from "../pages/mentorship/JeeMainsMentorshipPage";
import MentorShipHomePage from "../pages/mentorship/MentorShipHomePage";


import IITBombayCollegeImage  from "../assets/images/iit-bombay-college-pic.jpg"
import { IITBombayCollegeAboutSectionContent, IITBombayCollegeAdmissionSectionContent, IITBombayCollegeCoursesSectionContent, IITBombayCollegeCutOffSectionContent, IITBombayCollegeFeeSectionContent, IITBombayCollegeNavigationConstants, IITBombayCollegePlacementSectionContent } from "../constants/college/IIT/CollegePageNavigationComponentConstants";
import { IITBombayCoursesDetailsConstants } from "../constants/college/IIT/CoursesDataForIITCollegeConstant";
import { IITBombayPlacementDataConstant } from "../constants/college/IIT/PlacementDataForIITCollegeConstant";
import IITGenericCutOffPage from "../pages/college/subpage/IIT/IITGenericCutOffPage";

const routes = [
    //authentication related routes
    {
        path : "/login",
        component : <LoginFormPage/>
    },
    {
        path : "/register",
        component : <RegisterFormPage/>
    },



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
    {
        path : "/exam/wbjee", 
        component : <WebjeeExamPage/>
    }, 
    {
        path : "/exam/mhtcet", 
        component : <MhtcetExamPage/>
    }, 

    
    // exams-child pages related routes here
    {
        path : "/exam/jeemains/exam", 
        component : <JeeMainExamDetailsPage/>
    }, 
    {
        path : "/exam/jeemains/syllabus", 
        component : <JeeMainExamSyllabusPage/>
    }, 
    {
        path : "/exam/jeemains/application", 
        component : <JeeMainExamApplicationPage/>
    }, 
    {
        path : "/exam/jeemains/eligibility", 
        component : <JeeMainExamEligibilityPage/>
    }, 
    {
        path : "/exam/jeemains/dates", 
        component : <JeeMainExamDatesPage/>
    }, 
    {
        path : "/exam/jeemains/admitcard", 
        component : <JeeMainExamAdmitCardPage/>
    }, 
    
    
    // mentoroship related routes comes here 
    {
        path : "/mentorship", 
        component : <MentorShipHomePage/>
    }, 
    {
        path : "/mentorship/jeemains", 
        component : <JeeMainMentorshipPage/>
    }, 
    {
        path : "/mentorship/jeeadvance", 
        component : <JeeAdvancedMentorshipPage/>
    }, 



    // councelling related routes comes here
    {
        path : "/counselling", 
        component : <CouncellingHomePage/>
    }, 
    {
        path : "/counselling/josaa", 
        component : <JossaCounsellingPage/>
    }, 
    {
        path : "/counselling/csab", 
        component : <CsabCounsellingPage/>
    }, 
    {
        path : "/counselling/jacdelhi", 
        component : <JacDelhiCounsellingPage/>
    }, 
    {
        path : "/counselling/wbjee", 
        component : <WebJeeCounsellingPage/>
    }, 
    {
        path : "/counselling/uptu", 
        component : <UptuCounsellingPage/>
    }, 
    {
        path : "/counselling/ggsipu", 
        component : <GgsipuCounsellingPage/>
    }, 
    {
        path : "/counselling/comedk", 
        component : <ComedkCounsellingPage/>
    },



    // routes related to the college 
    {
        path : "/college", 
        component : <CollegeHomePage/>
    },
    {
        path : "/college/iit", 
        component : <IITCollegePage/>
    },
    {
        path : "/college/iiit", 
        component : <IIITCollegePage/>
    },
    {
        path : "/college/nit", 
        component : <NITCollegePage/>
    },
    {
        path : "/college/state-engineering-college", 
        component : <StateEngineeringCollegePage/>
    }, 

    // subpages for the IIT colleges comes here 
    {
        path : "/college/iit/iit-bombay", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Bombay" 
        collegePageNavigationConstants={IITBombayCollegeNavigationConstants} 
        aboutSectionContent={IITBombayCollegeAboutSectionContent} aboutSectionHeadingId={IITBombayCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITBombayCollegeNavigationConstants[0].title} 
        feeSectionContent={IITBombayCollegeFeeSectionContent} feeSectionHeadingId={IITBombayCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITBombayCollegeNavigationConstants[1].title}
        coursesSectionContent={IITBombayCollegeCoursesSectionContent} coursesSectionHeadingId={IITBombayCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITBombayCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IITBombayCoursesDetailsConstants}
        admissionSectionContent={IITBombayCollegeAdmissionSectionContent} admissionSectionHeadingId={IITBombayCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITBombayCollegeNavigationConstants[6].title}
        placementSectionContent={IITBombayCollegePlacementSectionContent} placementSectionHeadingId={IITBombayCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITBombayCollegeNavigationConstants[2].title} collegePlacementDataConstant={IITBombayPlacementDataConstant}
        cutoffSectionContent={IITBombayCollegeCutOffSectionContent} cutoffSectionHeadingId={IITBombayCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITBombayCollegeNavigationConstants[7].title}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-delhi", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Delhi" 
        collegePageNavigationConstants={IITBombayCollegeNavigationConstants} 
        aboutSectionContent={IITBombayCollegeAboutSectionContent} aboutSectionHeadingId={IITBombayCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITBombayCollegeNavigationConstants[0].title} 
        feeSectionContent={IITBombayCollegeFeeSectionContent} feeSectionHeadingId={IITBombayCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITBombayCollegeNavigationConstants[1].title}
        coursesSectionContent={IITBombayCollegeCoursesSectionContent} coursesSectionHeadingId={IITBombayCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITBombayCollegeNavigationConstants[5].title} collegeCourseDetailConstant={[]}
        admissionSectionContent={IITBombayCollegeAdmissionSectionContent} admissionSectionHeadingId={IITBombayCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITBombayCollegeNavigationConstants[6].title}
        placementSectionContent={IITBombayCollegePlacementSectionContent} placementSectionHeadingId={IITBombayCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITBombayCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IITBombayCollegeCutOffSectionContent} cutoffSectionHeadingId={IITBombayCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITBombayCollegeNavigationConstants[7].title}></IITGenericCollegePage>

    },
    // {
    //     path : "/college/iit/iit-kanpur", 
    //     component : <IITGenericCollegePage></IITGenericCollegePage>
    // },
    // {
    //     path : "/college/iit/iit-kharagpur", 
    //     component : <IITGenericCollegePage></IITGenericCollegePage>
    // },
    // {
    //     path : "/college/iit/iit-madras", 
    //     component : <IITGenericCollegePage></IITGenericCollegePage>
    // },
    // {
    //     path : "/college/iit/iit-roorkee", 
    //     component : <IITGenericCollegePage></IITGenericCollegePage>
    // },
    // {
    //     path : "/college/iit/iit-guwahati", 
    //     component : <IITGenericCollegePage></IITGenericCollegePage>
    // },
    // {
    //     path : "/college/iit/iit-hyderabad", 
    //     component : <IITGenericCollegePage></IITGenericCollegePage>
    // },
    // {
    //     path : "/college/iit/iit-jodhpur", 
    //     component : <IITGenericCollegePage></IITGenericCollegePage>
    // },
    // {
    //     path : "/college/iit/iit-indore", 
    //     component : <IITGenericCollegePage></IITGenericCollegePage>
    // },
    // {
    //     path : "/college/iit/iit-mandi", 
    //     component : <IITGenericCollegePage></IITGenericCollegePage>
    // },
    // {
    //     path : "/college/iit/iit-patna", 
    //     component : <IITGenericCollegePage></IITGenericCollegePage>
    // },
    // {
    //     path : "/college/iit/iit-ropar", 
    //     component : <IITGenericCollegePage></IITGenericCollegePage>
    // },
    // {
    //     path : "/college/iit/iit-bhubaneswar", 
    //     component : <IITGenericCollegePage></IITGenericCollegePage>
    // },
    // {
    //     path : "/college/iit/iit-gandhinagar", 
    //     component : <IITGenericCollegePage></IITGenericCollegePage>
    // },
    // {
    //     path : "/college/iit/iit-jammu", 
    //     component : <IITGenericCollegePage></IITGenericCollegePage>
    // },
    // {
    //     path : "/college/iit/iit-dharwad", 
    //     component : <IITGenericCollegePage></IITGenericCollegePage>
    // },
    // {
    //     path : "/college/iit/iit-tirupati", 
    //     component : <IITGenericCollegePage></IITGenericCollegePage>
    // },



    // cut off related routes for the colleges comes here
    {
        path : "/college/iit/iit-bombay/cutoff", 
        component : <IITGenericCutOffPage/>
    },
    {
        path : "/college/iit/iit-delhi/cutoff", 
        component : <IITGenericCutOffPage/>
    },

]

// say everything went fine 
export default routes