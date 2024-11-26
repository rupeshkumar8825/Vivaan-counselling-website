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
import { 
    IITMandiCollegeNavigationConstants,
    IITMandiCollegeAboutSectionContent,
    IITMandiCollegeAdmissionSectionContent,
    IITMandiCollegeCoursesSectionContent,
    IITMandiCollegeCutOffSectionContent,
    IITMandiCollegeFeeSectionContent,
    IITMandiCollegePlacementSectionContent,
    IITRoorkeeCollegeNavigationConstants,
    IITRoorkeeCollegeAboutSectionContent,
    IITRoorkeeCollegeAdmissionSectionContent,
    IITRoorkeeCollegeCoursesSectionContent,
    IITRoorkeeCollegeCutOffSectionContent,
    IITRoorkeeCollegeFeeSectionContent,
    IITRoorkeeCollegePlacementSectionContent,
    IITBHUCollegeNavigationConstants,
    IITBHUCollegeAboutSectionContent,
    IITBHUCollegeAdmissionSectionContent,
    IITBHUCollegeCoursesSectionContent,
    IITBHUCollegeCutOffSectionContent,
    IITBHUCollegeFeeSectionContent,
    IITBHUCollegePlacementSectionContent,
    IITJammuCollegeNavigationConstants,
    IITJammuCollegeAboutSectionContent,
    IITJammuCollegeAdmissionSectionContent,
    IITJammuCollegeCoursesSectionContent,
    IITJammuCollegeCutOffSectionContent,
    IITJammuCollegeFeeSectionContent,
    IITJammuCollegePlacementSectionContent,
    IITPalakkadCollegeNavigationConstants,
    IITPalakkadCollegeAboutSectionContent,
    IITPalakkadCollegeAdmissionSectionContent,
    IITPalakkadCollegeCoursesSectionContent,
    IITPalakkadCollegeCutOffSectionContent,
    IITPalakkadCollegeFeeSectionContent,
    IITPalakkadCollegePlacementSectionContent,
    IITTirupatiCollegeNavigationConstants,
    IITTirupatiCollegeAboutSectionContent,
    IITTirupatiCollegeAdmissionSectionContent,
    IITTirupatiCollegeCoursesSectionContent,
    IITTirupatiCollegeCutOffSectionContent,
    IITTirupatiCollegeFeeSectionContent,
    IITTirupatiCollegePlacementSectionContent,
    IITGoaCollegeNavigationConstants,
    IITGoaCollegeAboutSectionContent,
    IITGoaCollegeAdmissionSectionContent,
    IITGoaCollegeCoursesSectionContent,
    IITGoaCollegeCutOffSectionContent,
    IITGoaCollegeFeeSectionContent,
    IITGoaCollegePlacementSectionContent,
    IITBhilaiCollegeNavigationConstants,
    IITBhilaiCollegeAboutSectionContent,
    IITBhilaiCollegeAdmissionSectionContent,
    IITBhilaiCollegeCoursesSectionContent,
    IITBhilaiCollegeCutOffSectionContent,
    IITBhilaiCollegeFeeSectionContent,
    IITBhilaiCollegePlacementSectionContent,
    IITDharwadCollegeNavigationConstants,
    IITDharwadCollegeAboutSectionContent,
    IITDharwadCollegeAdmissionSectionContent,
    IITDharwadCollegeCoursesSectionContent,
    IITDharwadCollegeCutOffSectionContent,
    IITDharwadCollegeFeeSectionContent,
    IITDharwadCollegePlacementSectionContent,
    IITDhanbadCollegeNavigationConstants,
    IITDhanbadCollegeAboutSectionContent,
    IITDhanbadCollegeAdmissionSectionContent,
    IITDhanbadCollegeCoursesSectionContent,
    IITDhanbadCollegeCutOffSectionContent,
    IITDhanbadCollegeFeeSectionContent,
    IITDhanbadCollegePlacementSectionContent,
    IITJodhpurCollegeNavigationConstants,
    IITJodhpurCollegeAboutSectionContent,
    IITJodhpurCollegeAdmissionSectionContent,
    IITJodhpurCollegeCoursesSectionContent,
    IITJodhpurCollegeCutOffSectionContent,
    IITJodhpurCollegeFeeSectionContent,
    IITJodhpurCollegePlacementSectionContent,
    IITKharagpurCollegeNavigationConstants,
    IITKharagpurCollegeAboutSectionContent,
    IITKharagpurCollegeAdmissionSectionContent,
    IITKharagpurCollegeCoursesSectionContent,
    IITKharagpurCollegeCutOffSectionContent,
    IITKharagpurCollegeFeeSectionContent,
    IITKharagpurCollegePlacementSectionContent,
    IITHyderabadCollegeNavigationConstants,
    IITHyderabadCollegeAboutSectionContent,
    IITHyderabadCollegeAdmissionSectionContent,
    IITHyderabadCollegeCoursesSectionContent,
    IITHyderabadCollegeCutOffSectionContent,
    IITHyderabadCollegeFeeSectionContent,
    IITHyderabadCollegePlacementSectionContent,
    IITPatnaCollegeNavigationConstants,
    IITPatnaCollegeAboutSectionContent,
    IITPatnaCollegeAdmissionSectionContent,
    IITPatnaCollegeCoursesSectionContent,
    IITPatnaCollegeCutOffSectionContent,
    IITPatnaCollegeFeeSectionContent,
    IITPatnaCollegePlacementSectionContent,
    IITRoparCollegeNavigationConstants,
    IITRoparCollegeAboutSectionContent,
    IITRoparCollegeAdmissionSectionContent,
    IITRoparCollegeCoursesSectionContent,
    IITRoparCollegeCutOffSectionContent,
    IITRoparCollegeFeeSectionContent,
    IITRoparCollegePlacementSectionContent,
    IITGuwahatiCollegeNavigationConstants,
    IITGuwahatiCollegeAboutSectionContent,
    IITGuwahatiCollegeAdmissionSectionContent,
    IITGuwahatiCollegeCoursesSectionContent,
    IITGuwahatiCollegeCutOffSectionContent,
    IITGuwahatiCollegeFeeSectionContent,
    IITGuwahatiCollegePlacementSectionContent,
    IITIndoreCollegeNavigationConstants,
    IITIndoreCollegeAboutSectionContent,
    IITIndoreCollegeAdmissionSectionContent,
    IITIndoreCollegeCoursesSectionContent,
    IITIndoreCollegeCutOffSectionContent,
    IITIndoreCollegeFeeSectionContent,
    IITIndoreCollegePlacementSectionContent,
    IITKanpurCollegeNavigationConstants,
    IITKanpurCollegeAboutSectionContent,
    IITKanpurCollegeAdmissionSectionContent,
    IITKanpurCollegeCoursesSectionContent,
    IITKanpurCollegeCutOffSectionContent,
    IITKanpurCollegeFeeSectionContent,
    IITKanpurCollegePlacementSectionContent,
    IITMadrasCollegeNavigationConstants,
    IITMadrasCollegeAboutSectionContent,
    IITMadrasCollegeAdmissionSectionContent,
    IITMadrasCollegeCoursesSectionContent,
    IITMadrasCollegeCutOffSectionContent,
    IITMadrasCollegeFeeSectionContent,
    IITMadrasCollegePlacementSectionContent,
    IITBhubaneshwarCollegeAboutSectionContent,
    IITBhubaneshwarCollegeAdmissionSectionContent,
    IITBhubaneshwarCollegeCoursesSectionContent,
    IITBhubaneshwarCollegeCutOffSectionContent,
    IITBhubaneshwarCollegeFeeSectionContent,
    IITBhubaneshwarCollegeNavigationConstants,
    IITBhubaneshwarCollegePlacementSectionContent,
    IITBombayCollegeAboutSectionContent, 
    IITBombayCollegeAdmissionSectionContent,
    IITBombayCollegeCoursesSectionContent,
    IITBombayCollegeCutOffSectionContent,
    IITBombayCollegeFeeSectionContent,
    IITBombayCollegeNavigationConstants,
    IITBombayCollegePlacementSectionContent,
    IITDelhiCollegeAboutSectionContent,
    IITDelhiCollegeAdmissionSectionContent,
    IITDelhiCollegeCoursesSectionContent,
    IITDelhiCollegeCutOffSectionContent,
    IITDelhiCollegeFeeSectionContent,
    IITDelhiCollegeNavigationConstants,
    IITDelhiCollegePlacementSectionContent,
    IITGandhinagarCollegeAboutSectionContent,
    IITGandhinagarCollegeAdmissionSectionContent,
    IITGandhinagarCollegeCoursesSectionContent,
    IITGandhinagarCollegeCutOffSectionContent,
    IITGandhinagarCollegeFeeSectionContent,
    IITGandhinagarCollegeNavigationConstants,
    IITGandhinagarCollegePlacementSectionContent } from "../constants/college/IIT/CollegePageNavigationComponentConstants";

import { 
    IITBhubaneshwarCoursesDetailsConstants,
    IITBombayCoursesDetailsConstants,
    IITGandhinagarCoursesDetailsConstants, 
    IITGuwahatiCoursesDetailsConstants, 
    IITIndoreCoursesDetailsConstants,
    IITKanpurCoursesDetailsConstants} from "../constants/college/IIT/CoursesDataForIITCollegeConstant";
import { IITBhubaneshwarPlacementDataConstant, IITBombayPlacementDataConstant, IITGandhinagarPlacementDataConstant, IITGuwahatiPlacementDataConstant, IITIndorePlacementDataConstant, IITKanpurPlacementDataConstant } from "../constants/college/IIT/PlacementDataForIITCollegeConstant";
import IITGenericCutOffPage from "../pages/college/subpage/IIT/IITGenericCutOffPage";
import { IITBombayCutOffContentConstant, IITBombayCutOffHeadingIdConstant, IITBombayCutOffHeadingName, IITDelhiCutOffContentConstant, IITDelhiCutOffHeadingIdConstant, IITDelhiCutOffHeadingName } from "../constants/college/IIT/CutoffDataForIITCollegeConstant";

import JeeAdvanceExamAdmitCardPage from "../pages/exams/subPages/JeeAdvance/JeeAdvanceExamAdmitCardPage";
import JeeAdvanceExamApplicationPage from "../pages/exams/subPages/JeeAdvance/JeeAdvanceExamApplicationPage";
import JeeAdvanceExamDatesPage from "../pages/exams/subPages/JeeAdvance/JeeAdvanceExamDatePage";
import JeeAdvanceExamDetailsPage from "../pages/exams/subPages/JeeAdvance/JeeAdvanceExamDetailsPage";
import JeeAdvanceExamEligibilityPage from "../pages/exams/subPages/JeeAdvance/JeeAdvanceExamEligiblityPage";
import JeeAdvanceExamSyllabusPage from "../pages/exams/subPages/JeeAdvance/JeeAdvanceExamSyllabusPage";

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

    
    // exams-child pages for jeemains related routes here
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
    

    // exams-child pages for jeeadvance comes here
    
    {
        path : "/exam/jeeadvance/exam", 
        component : <JeeAdvanceExamDetailsPage/>
    }, 
    {
        path : "/exam/jeeadvance/syllabus", 
        component : <JeeAdvanceExamSyllabusPage/>
    }, 
    {
        path : "/exam/jeeadvance/application", 
        component : <JeeAdvanceExamApplicationPage/>
    }, 
    {
        path : "/exam/jeeadvance/eligibility", 
        component : <JeeAdvanceExamEligibilityPage/>
    }, 
    {
        path : "/exam/jeeadvance/dates", 
        component : <JeeAdvanceExamDatesPage/>
    }, 
    {
        path : "/exam/jeeadvance/admitcard", 
        component : <JeeAdvanceExamAdmitCardPage/>
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
        collegePageNavigationConstants={IITDelhiCollegeNavigationConstants} 
        aboutSectionContent={IITDelhiCollegeAboutSectionContent} aboutSectionHeadingId={IITDelhiCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITDelhiCollegeNavigationConstants[0].title} 
        feeSectionContent={IITDelhiCollegeFeeSectionContent} feeSectionHeadingId={IITDelhiCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITDelhiCollegeNavigationConstants[1].title}
        coursesSectionContent={IITDelhiCollegeCoursesSectionContent} coursesSectionHeadingId={IITDelhiCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITDelhiCollegeNavigationConstants[5].title} collegeCourseDetailConstant={[]}
        admissionSectionContent={IITDelhiCollegeAdmissionSectionContent} admissionSectionHeadingId={IITDelhiCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITDelhiCollegeNavigationConstants[6].title}
        placementSectionContent={IITDelhiCollegePlacementSectionContent} placementSectionHeadingId={IITDelhiCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITDelhiCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IITDelhiCollegeCutOffSectionContent} cutoffSectionHeadingId={IITDelhiCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITDelhiCollegeNavigationConstants[7].title}></IITGenericCollegePage>

    },
    {
        path : "/college/iit/iit-gandhinagar", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Gandhinagar" 
        collegePageNavigationConstants={IITGandhinagarCollegeNavigationConstants} 
        aboutSectionContent={IITGandhinagarCollegeAboutSectionContent} aboutSectionHeadingId={IITGandhinagarCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITGandhinagarCollegeNavigationConstants[0].title} 
        feeSectionContent={IITGandhinagarCollegeFeeSectionContent} feeSectionHeadingId={IITGandhinagarCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITGandhinagarCollegeNavigationConstants[1].title}
        coursesSectionContent={IITGandhinagarCollegeCoursesSectionContent} coursesSectionHeadingId={IITGandhinagarCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITGandhinagarCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IITGandhinagarCoursesDetailsConstants}
        admissionSectionContent={IITGandhinagarCollegeAdmissionSectionContent} admissionSectionHeadingId={IITGandhinagarCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITGandhinagarCollegeNavigationConstants[6].title}
        placementSectionContent={IITGandhinagarCollegePlacementSectionContent} placementSectionHeadingId={IITGandhinagarCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITGandhinagarCollegeNavigationConstants[2].title} collegePlacementDataConstant={IITGandhinagarPlacementDataConstant}
        cutoffSectionContent={IITGandhinagarCollegeCutOffSectionContent} cutoffSectionHeadingId={IITGandhinagarCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITGandhinagarCollegeNavigationConstants[7].title}></IITGenericCollegePage>
    },

    {
        path : "/college/iit/iit-bhubaneshwar", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Bhubaneshwar" 
        collegePageNavigationConstants={IITBhubaneshwarCollegeNavigationConstants} 
        aboutSectionContent={IITBhubaneshwarCollegeAboutSectionContent} aboutSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[0].title} 
        feeSectionContent={IITBhubaneshwarCollegeFeeSectionContent} feeSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[1].title}
        coursesSectionContent={IITBhubaneshwarCollegeCoursesSectionContent} coursesSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IITBhubaneshwarCoursesDetailsConstants}
        admissionSectionContent={IITBhubaneshwarCollegeAdmissionSectionContent} admissionSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[6].title}
        placementSectionContent={IITBhubaneshwarCollegePlacementSectionContent} placementSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[2].title} collegePlacementDataConstant={IITBhubaneshwarPlacementDataConstant}
        cutoffSectionContent={IITBhubaneshwarCollegeCutOffSectionContent} cutoffSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[7].title}></IITGenericCollegePage>
    }, 

    {
        path : "/college/iit/iit-guwahati", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Guwahati" 
        collegePageNavigationConstants={IITGuwahatiCollegeNavigationConstants} 
        aboutSectionContent={IITGuwahatiCollegeAboutSectionContent} aboutSectionHeadingId={IITGuwahatiCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITGuwahatiCollegeNavigationConstants[0].title} 
        feeSectionContent={IITGuwahatiCollegeFeeSectionContent} feeSectionHeadingId={IITGuwahatiCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITGuwahatiCollegeNavigationConstants[1].title}
        coursesSectionContent={IITGuwahatiCollegeCoursesSectionContent} coursesSectionHeadingId={IITGuwahatiCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITGuwahatiCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IITGuwahatiCoursesDetailsConstants}
        admissionSectionContent={IITGuwahatiCollegeAdmissionSectionContent} admissionSectionHeadingId={IITGuwahatiCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITGuwahatiCollegeNavigationConstants[6].title}
        placementSectionContent={IITGuwahatiCollegePlacementSectionContent} placementSectionHeadingId={IITGuwahatiCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITGuwahatiCollegeNavigationConstants[2].title} collegePlacementDataConstant={IITGuwahatiPlacementDataConstant}
        cutoffSectionContent={IITGuwahatiCollegeCutOffSectionContent} cutoffSectionHeadingId={IITGuwahatiCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITGuwahatiCollegeNavigationConstants[7].title}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-indore", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Indore" 
        collegePageNavigationConstants={IITIndoreCollegeNavigationConstants} 
        aboutSectionContent={IITIndoreCollegeAboutSectionContent} aboutSectionHeadingId={IITIndoreCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITIndoreCollegeNavigationConstants[0].title} 
        feeSectionContent={IITIndoreCollegeFeeSectionContent} feeSectionHeadingId={IITIndoreCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITIndoreCollegeNavigationConstants[1].title}
        coursesSectionContent={IITIndoreCollegeCoursesSectionContent} coursesSectionHeadingId={IITIndoreCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITIndoreCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IITIndoreCoursesDetailsConstants}
        admissionSectionContent={IITIndoreCollegeAdmissionSectionContent} admissionSectionHeadingId={IITIndoreCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITIndoreCollegeNavigationConstants[6].title}
        placementSectionContent={IITIndoreCollegePlacementSectionContent} placementSectionHeadingId={IITIndoreCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITIndoreCollegeNavigationConstants[2].title} collegePlacementDataConstant={IITIndorePlacementDataConstant}
        cutoffSectionContent={IITIndoreCollegeCutOffSectionContent} cutoffSectionHeadingId={IITIndoreCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITIndoreCollegeNavigationConstants[7].title}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-kanpur", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Kanpur" 
        collegePageNavigationConstants={IITKanpurCollegeNavigationConstants} 
        aboutSectionContent={IITKanpurCollegeAboutSectionContent} aboutSectionHeadingId={IITKanpurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITKanpurCollegeNavigationConstants[0].title} 
        feeSectionContent={IITKanpurCollegeFeeSectionContent} feeSectionHeadingId={IITKanpurCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITKanpurCollegeNavigationConstants[1].title}
        coursesSectionContent={IITKanpurCollegeCoursesSectionContent} coursesSectionHeadingId={IITKanpurCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITKanpurCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IITKanpurCoursesDetailsConstants}
        admissionSectionContent={IITKanpurCollegeAdmissionSectionContent} admissionSectionHeadingId={IITKanpurCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITKanpurCollegeNavigationConstants[6].title}
        placementSectionContent={IITKanpurCollegePlacementSectionContent} placementSectionHeadingId={IITKanpurCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITKanpurCollegeNavigationConstants[2].title} collegePlacementDataConstant={IITKanpurPlacementDataConstant}
        cutoffSectionContent={IITKanpurCollegeCutOffSectionContent} cutoffSectionHeadingId={IITKanpurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITKanpurCollegeNavigationConstants[7].title}></IITGenericCollegePage>
    },

    {
        path : "/college/iit/iit-jodhpur", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Jodhpur" 
        collegePageNavigationConstants={IITJodhpurCollegeNavigationConstants} 
        aboutSectionContent={IITJodhpurCollegeAboutSectionContent} aboutSectionHeadingId={IITJodhpurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITJodhpurCollegeNavigationConstants[0].title} 
        feeSectionContent={IITJodhpurCollegeFeeSectionContent} feeSectionHeadingId={IITJodhpurCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITJodhpurCollegeNavigationConstants[1].title}
        coursesSectionContent={IITJodhpurCollegeCoursesSectionContent} coursesSectionHeadingId={IITJodhpurCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITJodhpurCollegeNavigationConstants[5].title} collegeCourseDetailConstant={[]}
        admissionSectionContent={IITJodhpurCollegeAdmissionSectionContent} admissionSectionHeadingId={IITJodhpurCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITJodhpurCollegeNavigationConstants[6].title}
        placementSectionContent={IITJodhpurCollegePlacementSectionContent} placementSectionHeadingId={IITJodhpurCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITJodhpurCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IITJodhpurCollegeCutOffSectionContent} cutoffSectionHeadingId={IITJodhpurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITJodhpurCollegeNavigationConstants[7].title}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-kharagpur", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Kharagpur" 
        collegePageNavigationConstants={IITKharagpurCollegeNavigationConstants} 
        aboutSectionContent={IITKharagpurCollegeAboutSectionContent} aboutSectionHeadingId={IITKharagpurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITKharagpurCollegeNavigationConstants[0].title} 
        feeSectionContent={IITKharagpurCollegeFeeSectionContent} feeSectionHeadingId={IITKharagpurCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITKharagpurCollegeNavigationConstants[1].title}
        coursesSectionContent={IITKharagpurCollegeCoursesSectionContent} coursesSectionHeadingId={IITKharagpurCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITKharagpurCollegeNavigationConstants[5].title} collegeCourseDetailConstant={[]}
        admissionSectionContent={IITKharagpurCollegeAdmissionSectionContent} admissionSectionHeadingId={IITKharagpurCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITKharagpurCollegeNavigationConstants[6].title}
        placementSectionContent={IITKharagpurCollegePlacementSectionContent} placementSectionHeadingId={IITKharagpurCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITKharagpurCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IITKharagpurCollegeCutOffSectionContent} cutoffSectionHeadingId={IITKharagpurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITKharagpurCollegeNavigationConstants[7].title}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-hyderabad", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Hyderabad" 
        collegePageNavigationConstants={IITHyderabadCollegeNavigationConstants} 
        aboutSectionContent={IITHyderabadCollegeAboutSectionContent} aboutSectionHeadingId={IITHyderabadCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITHyderabadCollegeNavigationConstants[0].title} 
        feeSectionContent={IITHyderabadCollegeFeeSectionContent} feeSectionHeadingId={IITHyderabadCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITHyderabadCollegeNavigationConstants[1].title}
        coursesSectionContent={IITHyderabadCollegeCoursesSectionContent} coursesSectionHeadingId={IITHyderabadCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITHyderabadCollegeNavigationConstants[5].title} collegeCourseDetailConstant={[]}
        admissionSectionContent={IITHyderabadCollegeAdmissionSectionContent} admissionSectionHeadingId={IITHyderabadCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITHyderabadCollegeNavigationConstants[6].title}
        placementSectionContent={IITHyderabadCollegePlacementSectionContent} placementSectionHeadingId={IITHyderabadCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITHyderabadCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IITHyderabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IITHyderabadCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITHyderabadCollegeNavigationConstants[7].title}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-patna", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Patna" 
        collegePageNavigationConstants={IITPatnaCollegeNavigationConstants} 
        aboutSectionContent={IITPatnaCollegeAboutSectionContent} aboutSectionHeadingId={IITPatnaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITPatnaCollegeNavigationConstants[0].title} 
        feeSectionContent={IITPatnaCollegeFeeSectionContent} feeSectionHeadingId={IITPatnaCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITPatnaCollegeNavigationConstants[1].title}
        coursesSectionContent={IITPatnaCollegeCoursesSectionContent} coursesSectionHeadingId={IITPatnaCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITPatnaCollegeNavigationConstants[5].title} collegeCourseDetailConstant={[]}
        admissionSectionContent={IITPatnaCollegeAdmissionSectionContent} admissionSectionHeadingId={IITPatnaCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITPatnaCollegeNavigationConstants[6].title}
        placementSectionContent={IITPatnaCollegePlacementSectionContent} placementSectionHeadingId={IITPatnaCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITPatnaCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IITPatnaCollegeCutOffSectionContent} cutoffSectionHeadingId={IITPatnaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITPatnaCollegeNavigationConstants[7].title}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-ropar", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Ropar" 
        collegePageNavigationConstants={IITRoparCollegeNavigationConstants} 
        aboutSectionContent={IITRoparCollegeAboutSectionContent} aboutSectionHeadingId={IITRoparCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITRoparCollegeNavigationConstants[0].title} 
        feeSectionContent={IITRoparCollegeFeeSectionContent} feeSectionHeadingId={IITRoparCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITRoparCollegeNavigationConstants[1].title}
        coursesSectionContent={IITRoparCollegeCoursesSectionContent} coursesSectionHeadingId={IITRoparCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITRoparCollegeNavigationConstants[5].title} collegeCourseDetailConstant={[]}
        admissionSectionContent={IITRoparCollegeAdmissionSectionContent} admissionSectionHeadingId={IITRoparCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITRoparCollegeNavigationConstants[6].title}
        placementSectionContent={IITRoparCollegePlacementSectionContent} placementSectionHeadingId={IITRoparCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITRoparCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IITRoparCollegeCutOffSectionContent} cutoffSectionHeadingId={IITRoparCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITRoparCollegeNavigationConstants[7].title}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-mandi", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Mandi" 
        collegePageNavigationConstants={IITMandiCollegeNavigationConstants} 
        aboutSectionContent={IITMandiCollegeAboutSectionContent} aboutSectionHeadingId={IITMandiCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITMandiCollegeNavigationConstants[0].title} 
        feeSectionContent={IITMandiCollegeFeeSectionContent} feeSectionHeadingId={IITMandiCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITMandiCollegeNavigationConstants[1].title}
        coursesSectionContent={IITMandiCollegeCoursesSectionContent} coursesSectionHeadingId={IITMandiCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITMandiCollegeNavigationConstants[5].title} collegeCourseDetailConstant={[]}
        admissionSectionContent={IITMandiCollegeAdmissionSectionContent} admissionSectionHeadingId={IITMandiCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITMandiCollegeNavigationConstants[6].title}
        placementSectionContent={IITMandiCollegePlacementSectionContent} placementSectionHeadingId={IITMandiCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITMandiCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IITMandiCollegeCutOffSectionContent} cutoffSectionHeadingId={IITMandiCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITMandiCollegeNavigationConstants[7].title}></IITGenericCollegePage>
    },
    
    {
        path : "/college/iit/iit-roorkee", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Roorkee" 
        collegePageNavigationConstants={IITRoorkeeCollegeNavigationConstants} 
        aboutSectionContent={IITRoorkeeCollegeAboutSectionContent} aboutSectionHeadingId={IITRoorkeeCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITRoorkeeCollegeNavigationConstants[0].title} 
        feeSectionContent={IITRoorkeeCollegeFeeSectionContent} feeSectionHeadingId={IITRoorkeeCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITRoorkeeCollegeNavigationConstants[1].title}
        coursesSectionContent={IITRoorkeeCollegeCoursesSectionContent} coursesSectionHeadingId={IITRoorkeeCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITRoorkeeCollegeNavigationConstants[5].title} collegeCourseDetailConstant={[]}
        admissionSectionContent={IITRoorkeeCollegeAdmissionSectionContent} admissionSectionHeadingId={IITRoorkeeCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITRoorkeeCollegeNavigationConstants[6].title}
        placementSectionContent={IITRoorkeeCollegePlacementSectionContent} placementSectionHeadingId={IITRoorkeeCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITRoorkeeCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IITRoorkeeCollegeCutOffSectionContent} cutoffSectionHeadingId={IITRoorkeeCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITRoorkeeCollegeNavigationConstants[7].title}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-bhu", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology BHU" 
        collegePageNavigationConstants={IITBHUCollegeNavigationConstants} 
        aboutSectionContent={IITBHUCollegeAboutSectionContent} aboutSectionHeadingId={IITBHUCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITBHUCollegeNavigationConstants[0].title} 
        feeSectionContent={IITBHUCollegeFeeSectionContent} feeSectionHeadingId={IITBHUCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITBHUCollegeNavigationConstants[1].title}
        coursesSectionContent={IITBHUCollegeCoursesSectionContent} coursesSectionHeadingId={IITBHUCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITBHUCollegeNavigationConstants[5].title} collegeCourseDetailConstant={[]}
        admissionSectionContent={IITBHUCollegeAdmissionSectionContent} admissionSectionHeadingId={IITBHUCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITBHUCollegeNavigationConstants[6].title}
        placementSectionContent={IITBHUCollegePlacementSectionContent} placementSectionHeadingId={IITBHUCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITBHUCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IITBHUCollegeCutOffSectionContent} cutoffSectionHeadingId={IITBHUCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITBHUCollegeNavigationConstants[7].title}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-jammu", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Jammu" 
        collegePageNavigationConstants={IITJammuCollegeNavigationConstants} 
        aboutSectionContent={IITJammuCollegeAboutSectionContent} aboutSectionHeadingId={IITJammuCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITJammuCollegeNavigationConstants[0].title} 
        feeSectionContent={IITJammuCollegeFeeSectionContent} feeSectionHeadingId={IITJammuCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITJammuCollegeNavigationConstants[1].title}
        coursesSectionContent={IITJammuCollegeCoursesSectionContent} coursesSectionHeadingId={IITJammuCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITJammuCollegeNavigationConstants[5].title} collegeCourseDetailConstant={[]}
        admissionSectionContent={IITJammuCollegeAdmissionSectionContent} admissionSectionHeadingId={IITJammuCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITJammuCollegeNavigationConstants[6].title}
        placementSectionContent={IITJammuCollegePlacementSectionContent} placementSectionHeadingId={IITJammuCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITJammuCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IITJammuCollegeCutOffSectionContent} cutoffSectionHeadingId={IITJammuCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITJammuCollegeNavigationConstants[7].title}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-palakkad", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Palakkad" 
        collegePageNavigationConstants={IITPalakkadCollegeNavigationConstants} 
        aboutSectionContent={IITPalakkadCollegeAboutSectionContent} aboutSectionHeadingId={IITPalakkadCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITPalakkadCollegeNavigationConstants[0].title} 
        feeSectionContent={IITPalakkadCollegeFeeSectionContent} feeSectionHeadingId={IITPalakkadCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITPalakkadCollegeNavigationConstants[1].title}
        coursesSectionContent={IITPalakkadCollegeCoursesSectionContent} coursesSectionHeadingId={IITPalakkadCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITPalakkadCollegeNavigationConstants[5].title} collegeCourseDetailConstant={[]}
        admissionSectionContent={IITPalakkadCollegeAdmissionSectionContent} admissionSectionHeadingId={IITPalakkadCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITPalakkadCollegeNavigationConstants[6].title}
        placementSectionContent={IITPalakkadCollegePlacementSectionContent} placementSectionHeadingId={IITPalakkadCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITPalakkadCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IITPalakkadCollegeCutOffSectionContent} cutoffSectionHeadingId={IITPalakkadCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITPalakkadCollegeNavigationConstants[7].title}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-tirupati", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Tirupati" 
        collegePageNavigationConstants={IITTirupatiCollegeNavigationConstants} 
        aboutSectionContent={IITTirupatiCollegeAboutSectionContent} aboutSectionHeadingId={IITTirupatiCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITTirupatiCollegeNavigationConstants[0].title} 
        feeSectionContent={IITTirupatiCollegeFeeSectionContent} feeSectionHeadingId={IITTirupatiCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITTirupatiCollegeNavigationConstants[1].title}
        coursesSectionContent={IITTirupatiCollegeCoursesSectionContent} coursesSectionHeadingId={IITTirupatiCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITTirupatiCollegeNavigationConstants[5].title} collegeCourseDetailConstant={[]}
        admissionSectionContent={IITTirupatiCollegeAdmissionSectionContent} admissionSectionHeadingId={IITTirupatiCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITTirupatiCollegeNavigationConstants[6].title}
        placementSectionContent={IITTirupatiCollegePlacementSectionContent} placementSectionHeadingId={IITTirupatiCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITTirupatiCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IITTirupatiCollegeCutOffSectionContent} cutoffSectionHeadingId={IITTirupatiCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITTirupatiCollegeNavigationConstants[7].title}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-goa", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Goa" 
        collegePageNavigationConstants={IITGoaCollegeNavigationConstants} 
        aboutSectionContent={IITGoaCollegeAboutSectionContent} aboutSectionHeadingId={IITGoaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITGoaCollegeNavigationConstants[0].title} 
        feeSectionContent={IITGoaCollegeFeeSectionContent} feeSectionHeadingId={IITGoaCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITGoaCollegeNavigationConstants[1].title}
        coursesSectionContent={IITGoaCollegeCoursesSectionContent} coursesSectionHeadingId={IITGoaCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITGoaCollegeNavigationConstants[5].title} collegeCourseDetailConstant={[]}
        admissionSectionContent={IITGoaCollegeAdmissionSectionContent} admissionSectionHeadingId={IITGoaCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITGoaCollegeNavigationConstants[6].title}
        placementSectionContent={IITGoaCollegePlacementSectionContent} placementSectionHeadingId={IITGoaCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITGoaCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IITGoaCollegeCutOffSectionContent} cutoffSectionHeadingId={IITGoaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITGoaCollegeNavigationConstants[7].title}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-bhilai", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Bhilai" 
        collegePageNavigationConstants={IITBhilaiCollegeNavigationConstants} 
        aboutSectionContent={IITBhilaiCollegeAboutSectionContent} aboutSectionHeadingId={IITBhilaiCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITBhilaiCollegeNavigationConstants[0].title} 
        feeSectionContent={IITBhilaiCollegeFeeSectionContent} feeSectionHeadingId={IITBhilaiCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITBhilaiCollegeNavigationConstants[1].title}
        coursesSectionContent={IITBhilaiCollegeCoursesSectionContent} coursesSectionHeadingId={IITBhilaiCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITBhilaiCollegeNavigationConstants[5].title} collegeCourseDetailConstant={[]}
        admissionSectionContent={IITBhilaiCollegeAdmissionSectionContent} admissionSectionHeadingId={IITBhilaiCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITBhilaiCollegeNavigationConstants[6].title}
        placementSectionContent={IITBhilaiCollegePlacementSectionContent} placementSectionHeadingId={IITBhilaiCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITBhilaiCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IITBhilaiCollegeCutOffSectionContent} cutoffSectionHeadingId={IITBhilaiCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITBhilaiCollegeNavigationConstants[7].title}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-dharwad", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Dharwad" 
        collegePageNavigationConstants={IITDharwadCollegeNavigationConstants} 
        aboutSectionContent={IITDharwadCollegeAboutSectionContent} aboutSectionHeadingId={IITDharwadCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITDharwadCollegeNavigationConstants[0].title} 
        feeSectionContent={IITDharwadCollegeFeeSectionContent} feeSectionHeadingId={IITDharwadCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITDharwadCollegeNavigationConstants[1].title}
        coursesSectionContent={IITDharwadCollegeCoursesSectionContent} coursesSectionHeadingId={IITDharwadCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITDharwadCollegeNavigationConstants[5].title} collegeCourseDetailConstant={[]}
        admissionSectionContent={IITDharwadCollegeAdmissionSectionContent} admissionSectionHeadingId={IITDharwadCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITDharwadCollegeNavigationConstants[6].title}
        placementSectionContent={IITDharwadCollegePlacementSectionContent} placementSectionHeadingId={IITDharwadCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITDharwadCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IITDharwadCollegeCutOffSectionContent} cutoffSectionHeadingId={IITDharwadCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITDharwadCollegeNavigationConstants[7].title}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-dhanbad", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Dhanbad" 
        collegePageNavigationConstants={IITDhanbadCollegeNavigationConstants} 
        aboutSectionContent={IITDhanbadCollegeAboutSectionContent} aboutSectionHeadingId={IITDhanbadCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITDhanbadCollegeNavigationConstants[0].title} 
        feeSectionContent={IITDhanbadCollegeFeeSectionContent} feeSectionHeadingId={IITDhanbadCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITDhanbadCollegeNavigationConstants[1].title}
        coursesSectionContent={IITDhanbadCollegeCoursesSectionContent} coursesSectionHeadingId={IITDhanbadCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITDhanbadCollegeNavigationConstants[5].title} collegeCourseDetailConstant={[]}
        admissionSectionContent={IITDhanbadCollegeAdmissionSectionContent} admissionSectionHeadingId={IITDhanbadCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITDhanbadCollegeNavigationConstants[6].title}
        placementSectionContent={IITDhanbadCollegePlacementSectionContent} placementSectionHeadingId={IITDhanbadCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITDhanbadCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IITDhanbadCollegeCutOffSectionContent} cutoffSectionHeadingId={IITDhanbadCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITDhanbadCollegeNavigationConstants[7].title}></IITGenericCollegePage>
    },

    {
        path : "/college/iit/iit-madras", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Madras" 
        collegePageNavigationConstants={IITMadrasCollegeNavigationConstants} 
        aboutSectionContent={IITMadrasCollegeAboutSectionContent} aboutSectionHeadingId={IITMadrasCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITMadrasCollegeNavigationConstants[0].title} 
        feeSectionContent={IITMadrasCollegeFeeSectionContent} feeSectionHeadingId={IITMadrasCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IITMadrasCollegeNavigationConstants[1].title}
        coursesSectionContent={IITMadrasCollegeCoursesSectionContent} coursesSectionHeadingId={IITMadrasCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IITMadrasCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IITKanpurCoursesDetailsConstants}
        admissionSectionContent={IITMadrasCollegeAdmissionSectionContent} admissionSectionHeadingId={IITMadrasCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IITMadrasCollegeNavigationConstants[6].title}
        placementSectionContent={IITMadrasCollegePlacementSectionContent} placementSectionHeadingId={IITMadrasCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IITMadrasCollegeNavigationConstants[2].title} collegePlacementDataConstant={IITKanpurPlacementDataConstant}
        cutoffSectionContent={IITMadrasCollegeCutOffSectionContent} cutoffSectionHeadingId={IITMadrasCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITMadrasCollegeNavigationConstants[7].title}></IITGenericCollegePage>
    },
    
    // cut off related routes for the colleges comes here
    {
        path : "/college/iit/iit-bombay/cutoff", 
        component : <IITGenericCutOffPage blogSectionHeadingId={IITBombayCutOffHeadingIdConstant} blogSectionHeadingName={IITBombayCutOffHeadingName} blogSectionContent={IITBombayCutOffContentConstant}/>
    },
    {
        path : "/college/iit/iit-delhi/cutoff", 
        component : <IITGenericCutOffPage blogSectionHeadingId={IITDelhiCutOffHeadingIdConstant} blogSectionHeadingName={IITDelhiCutOffHeadingName} blogSectionContent={IITDelhiCutOffContentConstant}/>
    },

]

// say everything went fine 
export default routes