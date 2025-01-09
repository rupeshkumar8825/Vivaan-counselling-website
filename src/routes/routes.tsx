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


// import IITBombayCollegeImage  from "../assets/images/iit-bombay-college-pic.jpg"
import IITBombayCollegeImage from "../assets/images/IIT/iit-bombay.png"
import IITBHUCollegeImage from "../assets/images/IIT/iit-bhu.png";
import IITDelhiCollegeImage from "../assets/images/IIT/iit-delhi.png";
import IITDhanbadCollegeImage from "../assets/images/IIT/iit-dhanbad.png";
import IITGandhinagarCollegeImage from "../assets/images/IIT/iit-gandhinagar.png";
import IITGoaCollegeImage from "../assets/images/IIT/iit-goa.png";
import IITHyderabadCollegeImage from "../assets/images/IIT/iit-hyderabad.png";
import IITIndoreCollegeImage from "../assets/images/IIT/iit-indore.png";
import IITJammuCollegeImage from "../assets/images/IIT/iit-jammu.png";
import IITJodhpurCollegeImage from "../assets/images/IIT/iit-jodhpur.png";
import IITKanpurCollegeImage from "../assets/images/IIT/iit-kanpur.png";
import IITKharagpurCollegeImage from "../assets/images/IIT/iit-kharagpur.png";
import IITMadrasCollegeImage from "../assets/images/IIT/iit-madras.png";
import IITMandiCollegeImage from "../assets/images/IIT/iit-mandi.png";
import IITPalakkadCollegeImage from "../assets/images/IIT/iit-palakkad.png";
import IITPatnaCollegeImage from "../assets/images/IIT/iit-patna.png";
import IITRoorkeeCollegeImage from "../assets/images/IIT/iit-roorkie.png";
import IITTirupatiCollegeImage from "../assets/images/IIT/iit-tirupati.png";
import IITGuwahatiCollegeImage from "../assets/images/IIT/iit-dhanbad.png"


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
    IITGandhinagarCollegePlacementSectionContent, 
    IITBombayCollegeLocationSectionContent,
    IITBombayCollegeRankingSectionContent,
    IITBombayCollegeSeatSectionContent,
    IITGandhinagarCollegeLocationSectionContent,
    IITGandhinagarCollegeRankingSectionContent,
    IITGandhinagarCollegeSeatSectionContent,
    IITBhubaneswarCollegeLocationSectionContent,
    IITBhubaneswarCollegeRankingSectionContent,
    IITBhubaneswarCollegeSeatSectionContent,
    IITGuwahatiCollegeLocationSectionContent,
    IITGuwahatiCollegeRankingSectionContent,
    IITGuwahatiCollegeSeatSectionContent,
    IITIndoreCollegeLocationSectionContent,
    IITIndoreCollegeRankingSectionContent,
    IITIndoreCollegeSeatSectionContent,
    IITKanpurCollegeLocationSectionContent,
    IITKanpurCollegeRankingSectionContent,
    IITKanpurCollegeSeatSectionContent,
    IITJodhpurCollegeLocationSectionContent,
    IITJodhpurCollegeRankingSectionContent,
    IITJodhpurCollegeSeatSectionContent,
    IITKharagpurCollegeLocationSectionContent,
    IITKharagpurCollegeRankingSectionContent,
    IITKharagpurCollegeSeatSectionContent,
    IITHyderabadCollegeLocationSectionContent,
    IITHyderabadCollegeRankingSectionContent,
    IITHyderabadCollegeSeatSectionContent,
    IITPatnaCollegeLocationSectionContent,
    IITPatnaCollegeRankingSectionContent,
    IITPatnaCollegeSeatSectionContent,
    IITRoparCollegeLocationSectionContent,
    IITRoparCollegeRankingSectionContent,
    IITRoparCollegeSeatSectionContent,
    IITMandiCollegeLocationSectionContent,
    IITMandiCollegeRankingSectionContent,
    IITMandiCollegeSeatSectionContent,
    IITRoorkeeCollegeLocationSectionContent,
    IITRoorkeeCollegeRankingSectionContent,
    IITRoorkeeCollegeSeatSectionContent,
    IITBHUCollegeLocationSectionContent,
    IITBHUCollegeRankingSectionContent,
    IITBHUCollegeSeatSectionContent,
    IITJammuCollegeLocationSectionContent,
    IITJammuCollegeRankingSectionContent,
    IITJammuCollegeSeatSectionContent,
    IITPalakkadCollegeLocationSectionContent,
    IITPalakkadCollegeRankingSectionContent,
    IITPalakkadCollegeSeatSectionContent,
    IITTirupatiCollegeLocationSectionContent,
    IITTirupatiCollegeRankingSectionContent,
    IITTirupatiCollegeSeatSectionContent,
    IITGoaCollegeLocationSectionContent,
    IITGoaCollegeRankingSectionContent,
    IITGoaCollegeSeatSectionContent,
    IITBhilaiCollegeLocationSectionContent,
    IITBhilaiCollegeRankingSectionContent,
    IITBhilaiCollegeSeatSectionContent,
    IITDharwadCollegeLocationSectionContent,
    IITDharwadCollegeRankingSectionContent,
    IITDharwadCollegeSeatSectionContent,
    IITDhanbadCollegeLocationSectionContent,
    IITDhanbadCollegeRankingSectionContent,
    IITDhanbadCollegeSeatSectionContent,
    IITMadrasCollegeLocationSectionContent,
    IITMadrasCollegeRankingSectionContent,
    IITMadrasCollegeSeatSectionContent,
    IITDelhiCollegeLocationSectionContent,
    IITDelhiCollegeRankingSectionContent,
    IITDelhiCollegeSeatSectionContent} from "../constants/college/IIT/IITCollegePageNavigationComponentConstants";

import { 
    IITBombayCoursesTableContent,
    IITBombayCoursesTableHeading,
    IITKharagpurCoursesTableContent,
    IITKharagpurCoursesTableHeading,
    IITMadrasCoursesTableContent,
    IITMadrasCoursesTableHeading,
    IITKanpurCoursesTableContent,
    IITKanpurCoursesTableHeading,
    IITDelhiCoursesTableContent,
    IITDelhiCoursesTableHeading,
    IITGuwahatiCoursesTableContent,
    IITGuwahatiCoursesTableHeading,
    IITRoorkeeCoursesTableContent,
    IITRoorkeeCoursesTableHeading,
    IITRoparCoursesTableContent,
    IITRoparCoursesTableHeading,
    IITIndoreCoursesTableContent,
    IITIndoreCoursesTableHeading,
    IITBHUCoursesTableContent,
    IITBHUCoursesTableHeading,
    IITPalakkadCoursesTableContent,
    IITPalakkadCoursesTableHeading,
    IITPatnaCoursesTableContent,
    IITPatnaCoursesTableHeading,
    IITJodhpurCoursesTableContent,
    IITJodhpurCoursesTableHeading,
    IITMandiCoursesTableContent,
    IITMandiCoursesTableHeading,
    IITBhubaneswarCoursesTableContent,
    IITBhubaneswarCoursesTableHeading,
    IITGandhinagarCoursesTableContent,
    IITGandhinagarCoursesTableHeading,
    IITHyderabadCoursesTableContent,
    IITHyderabadCoursesTableHeading,
    IITTirupatiCoursesTableContent,
    IITTirupatiCoursesTableHeading,
    IITDhanbadCoursesTableContent,
    IITDhanbadCoursesTableHeading,
    IITBhilaiCoursesTableContent,
    IITBhilaiCoursesTableHeading,
    IITDharwadCoursesTableContent,
    IITDharwadCoursesTableHeading,
    IITJammuCoursesTableContent,
    IITJammuCoursesTableHeading,
    IITGoaCoursesTableContent,
    IITGoaCoursesTableHeading
    } from "../constants/college/IIT/IITCoursesDataCollegeConstant";
import {
    IITBombayPlacementImageList, 
    IITKharagpurPlacementImageList,
    IITMadrasPlacementImageList,
    IITKanpurPlacementImageList,
    IITDelhiPlacementImageList,
    IITGuwahatiPlacementImageList,
    IITRoorkeePlacementImageList,
    IITRoparPlacementImageList,
    IITIndorePlacementImageList,
    IITBHUPlacementImageList,
    IITPalakkadPlacementImageList,
    IITMandiPlacementImageList,
    IITPatnaPlacementImageList,
    IITJodhpurPlacementImageList,
    IITHyderabadPlacementImageList,
    IITGandhinagarPlacementImageList,
    IITBhubaneshwarPlacementImageList,
    IITBhilaiPlacementImageList,
    IITDharwadPlacementImageList,
    IITDhanbadPlacementImageList,
    IITGoaPlacementImageList,
    IITJammuPlacementImageList,
    IITTirupatiPlacementImageList

} from "../constants/college/IIT/IITPlacementDataCollegeConstant";
import IITGenericCutOffPage from "../pages/college/subpage/IIT/IITGenericCutOffPage";
import { IITBombayCutOffContentConstant, 
    IITBombayCutOffHeadingIdConstant, IITBombayCutOffHeadingName, IITDelhiCutOffContentConstant, IITDelhiCutOffHeadingIdConstant, IITDelhiCutOffHeadingName } from "../constants/college/IIT/CutoffDataForIITCollegeConstant";

import JeeAdvanceExamAdmitCardPage from "../pages/exams/subPages/JeeAdvance/JeeAdvanceExamAdmitCardPage";
import JeeAdvanceExamApplicationPage from "../pages/exams/subPages/JeeAdvance/JeeAdvanceExamApplicationPage";
import JeeAdvanceExamDatesPage from "../pages/exams/subPages/JeeAdvance/JeeAdvanceExamDatePage";
import JeeAdvanceExamDetailsPage from "../pages/exams/subPages/JeeAdvance/JeeAdvanceExamDetailsPage";
import JeeAdvanceExamEligibilityPage from "../pages/exams/subPages/JeeAdvance/JeeAdvanceExamEligiblityPage";
import JeeAdvanceExamSyllabusPage from "../pages/exams/subPages/JeeAdvance/JeeAdvanceExamSyllabusPage";
import NITGenericCollegePage from "../pages/college/subpage/NIT/NITGenericCollegePage";
import { NITBhopalCollegeAboutSectionContent
    , NITBhopalCollegeAdmissionSectionContent
    , NITBhopalCollegeCoursesSectionContent
    , NITBhopalCollegeCutOffSectionContent
    , NITBhopalCollegeFeeSectionContent
    , NITBhopalCollegeNavigationConstants
    , NITBhopalCollegePlacementSectionContent
    , NITDurgapurCollegeAboutSectionContent
    , NITDurgapurCollegeAdmissionSectionContent
    , NITDurgapurCollegeCoursesSectionContent
    , NITDurgapurCollegeCutOffSectionContent
    , NITDurgapurCollegeFeeSectionContent
    , NITDurgapurCollegeNavigationConstants
    , NITDurgapurCollegePlacementSectionContent
    , NITNagpurCollegeAboutSectionContent
    , NITNagpurCollegeAdmissionSectionContent
    , NITNagpurCollegeCoursesSectionContent
    , NITNagpurCollegeCutOffSectionContent
    , NITNagpurCollegeFeeSectionContent
    , NITNagpurCollegeNavigationConstants
    , NITNagpurCollegePlacementSectionContent
    , NITWarangalCollegeAboutSectionContent
    , NITWarangalCollegeAdmissionSectionContent
    , NITWarangalCollegeCoursesSectionContent
    , NITWarangalCollegeCutOffSectionContent
    , NITWarangalCollegeFeeSectionContent
    , NITWarangalCollegeNavigationConstants
    , NITWarangalCollegePlacementSectionContent
    , 
    NITJamshedpurCollegeAboutSectionContent,
    NITJamshedpurCollegeAdmissionSectionContent,
    NITJamshedpurCollegeCoursesSectionContent,
    NITJamshedpurCollegeCutOffSectionContent,
    NITJamshedpurCollegeFeeSectionContent,
    NITJamshedpurCollegeNavigationConstants,
    NITJamshedpurCollegePlacementSectionContent,
    NITKarnatakaCollegeAboutSectionContent,
    NITKarnatakaCollegeAdmissionSectionContent,
    NITKarnatakaCollegeCoursesSectionContent,
    NITKarnatakaCollegeCutOffSectionContent,
    NITKarnatakaCollegeFeeSectionContent,
    NITKarnatakaCollegeNavigationConstants,
    NITKarnatakaCollegePlacementSectionContent,
    NITSrinagarCollegeAboutSectionContent,
    NITSrinagarCollegeAdmissionSectionContent,
    NITSrinagarCollegeCoursesSectionContent,
    NITSrinagarCollegeCutOffSectionContent,
    NITSrinagarCollegeFeeSectionContent,
    NITSrinagarCollegeNavigationConstants,
    NITSrinagarCollegePlacementSectionContent,
    NITAllahabadCollegeAboutSectionContent,
    NITAllahabadCollegeAdmissionSectionContent,
    NITAllahabadCollegeCoursesSectionContent,
    NITAllahabadCollegeCutOffSectionContent,
    NITAllahabadCollegeFeeSectionContent,
    NITAllahabadCollegeNavigationConstants,
    NITAllahabadCollegePlacementSectionContent, 
    NITSuratCollegeAboutSectionContent,
    NITSuratCollegeAdmissionSectionContent,
    NITSuratCollegeCoursesSectionContent,
    NITSuratCollegeCutOffSectionContent,
    NITSuratCollegeFeeSectionContent,
    NITSuratCollegeNavigationConstants,
    NITSuratCollegePlacementSectionContent,
    NITCalicutCollegeAboutSectionContent,
    NITCalicutCollegeAdmissionSectionContent,
    NITCalicutCollegeCoursesSectionContent,
    NITCalicutCollegeCutOffSectionContent,
    NITCalicutCollegeFeeSectionContent,
    NITCalicutCollegeNavigationConstants,
    NITCalicutCollegePlacementSectionContent,
    NITRourkelaCollegeAboutSectionContent,
    NITRourkelaCollegeAdmissionSectionContent,
    NITRourkelaCollegeCoursesSectionContent,
    NITRourkelaCollegeCutOffSectionContent,
    NITRourkelaCollegeFeeSectionContent,
    NITRourkelaCollegeNavigationConstants,
    NITRourkelaCollegePlacementSectionContent,
    NITJaipurCollegeAboutSectionContent,
    NITJaipurCollegeAdmissionSectionContent,
    NITJaipurCollegeCoursesSectionContent,
    NITJaipurCollegeCutOffSectionContent,
    NITJaipurCollegeFeeSectionContent,
    NITJaipurCollegeNavigationConstants,
    NITJaipurCollegePlacementSectionContent,
    NITKurukshetraCollegeAboutSectionContent,
    NITKurukshetraCollegeAdmissionSectionContent,
    NITKurukshetraCollegeCoursesSectionContent,
    NITKurukshetraCollegeCutOffSectionContent,
    NITKurukshetraCollegeFeeSectionContent,
    NITKurukshetraCollegeNavigationConstants,
    NITKurukshetraCollegePlacementSectionContent,
    NITTiruchirappalliCollegeAboutSectionContent,
    NITTiruchirappalliCollegeAdmissionSectionContent,
    NITTiruchirappalliCollegeCoursesSectionContent,
    NITTiruchirappalliCollegeCutOffSectionContent,
    NITTiruchirappalliCollegeFeeSectionContent,
    NITTiruchirappalliCollegeNavigationConstants,
    NITTiruchirappalliCollegePlacementSectionContent,
    NITSilcharCollegeAboutSectionContent,
    NITSilcharCollegeAdmissionSectionContent,
    NITSilcharCollegeCoursesSectionContent,
    NITSilcharCollegeCutOffSectionContent,
    NITSilcharCollegeFeeSectionContent,
    NITSilcharCollegeNavigationConstants,
    NITSilcharCollegePlacementSectionContent,
    NITHamirpurCollegeAboutSectionContent,
    NITHamirpurCollegeAdmissionSectionContent,
    NITHamirpurCollegeCoursesSectionContent,
    NITHamirpurCollegeCutOffSectionContent,
    NITHamirpurCollegeFeeSectionContent,
    NITHamirpurCollegeNavigationConstants,
    NITHamirpurCollegePlacementSectionContent,
    NITJalandharCollegeAboutSectionContent,
    NITJalandharCollegeAdmissionSectionContent,
    NITJalandharCollegeCoursesSectionContent,
    NITJalandharCollegeCutOffSectionContent,
    NITJalandharCollegeFeeSectionContent,
    NITJalandharCollegeNavigationConstants,
    NITJalandharCollegePlacementSectionContent,
    NITPatnaCollegeAboutSectionContent,
    NITPatnaCollegeAdmissionSectionContent,
    NITPatnaCollegeCoursesSectionContent,
    NITPatnaCollegeCutOffSectionContent,
    NITPatnaCollegeFeeSectionContent,
    NITPatnaCollegeNavigationConstants,
    NITPatnaCollegePlacementSectionContent,
    NITRaipurCollegeAboutSectionContent,
    NITRaipurCollegeAdmissionSectionContent,
    NITRaipurCollegeCoursesSectionContent,
    NITRaipurCollegeCutOffSectionContent,
    NITRaipurCollegeFeeSectionContent,
    NITRaipurCollegeNavigationConstants,
    NITRaipurCollegePlacementSectionContent,
    NITAgartalaCollegeAboutSectionContent,
    NITAgartalaCollegeAdmissionSectionContent,
    NITAgartalaCollegeCoursesSectionContent,
    NITAgartalaCollegeCutOffSectionContent,
    NITAgartalaCollegeFeeSectionContent,
    NITAgartalaCollegeNavigationConstants,
    NITAgartalaCollegePlacementSectionContent,
    NITArunachalPradeshCollegeAboutSectionContent,
    NITArunachalPradeshCollegeAdmissionSectionContent,
    NITArunachalPradeshCollegeCoursesSectionContent,
    NITArunachalPradeshCollegeCutOffSectionContent,
    NITArunachalPradeshCollegeFeeSectionContent,
    NITArunachalPradeshCollegeNavigationConstants,
    NITArunachalPradeshCollegePlacementSectionContent, 
    NITDelhiCollegeAboutSectionContent,
    NITDelhiCollegeAdmissionSectionContent,
    NITDelhiCollegeCoursesSectionContent,
    NITDelhiCollegeCutOffSectionContent,
    NITDelhiCollegeFeeSectionContent,
    NITDelhiCollegeNavigationConstants,
    NITDelhiCollegePlacementSectionContent,
    NITGoaCollegeAboutSectionContent,
    NITGoaCollegeAdmissionSectionContent,
    NITGoaCollegeCoursesSectionContent,
    NITGoaCollegeCutOffSectionContent,
    NITGoaCollegeFeeSectionContent,
    NITGoaCollegeNavigationConstants,
    NITGoaCollegePlacementSectionContent,
    NITManipurCollegeAboutSectionContent,
    NITManipurCollegeAdmissionSectionContent,
    NITManipurCollegeCoursesSectionContent,
    NITManipurCollegeCutOffSectionContent,
    NITManipurCollegeFeeSectionContent,
    NITManipurCollegeNavigationConstants,
    NITManipurCollegePlacementSectionContent,
    NITMeghalayaCollegeAboutSectionContent,
    NITMeghalayaCollegeAdmissionSectionContent,
    NITMeghalayaCollegeCoursesSectionContent,
    NITMeghalayaCollegeCutOffSectionContent,
    NITMeghalayaCollegeFeeSectionContent,
    NITMeghalayaCollegeNavigationConstants,
    NITMeghalayaCollegePlacementSectionContent,
    NITMizoramCollegeAboutSectionContent,
    NITMizoramCollegeAdmissionSectionContent,
    NITMizoramCollegeCoursesSectionContent,
    NITMizoramCollegeCutOffSectionContent,
    NITMizoramCollegeFeeSectionContent,
    NITMizoramCollegeNavigationConstants,
    NITMizoramCollegePlacementSectionContent,
    NITNagalandCollegeAboutSectionContent,
    NITNagalandCollegeAdmissionSectionContent,
    NITNagalandCollegeCoursesSectionContent,
    NITNagalandCollegeCutOffSectionContent,
    NITNagalandCollegeFeeSectionContent,
    NITNagalandCollegeNavigationConstants,
    NITNagalandCollegePlacementSectionContent,
    NITPuducherryCollegeAboutSectionContent,
    NITPuducherryCollegeAdmissionSectionContent,
    NITPuducherryCollegeCoursesSectionContent,
    NITPuducherryCollegeCutOffSectionContent,
    NITPuducherryCollegeFeeSectionContent,
    NITPuducherryCollegeNavigationConstants,
    NITPuducherryCollegePlacementSectionContent,
    NITSikkimCollegeAboutSectionContent,
    NITSikkimCollegeAdmissionSectionContent,
    NITSikkimCollegeCoursesSectionContent,
    NITSikkimCollegeCutOffSectionContent,
    NITSikkimCollegeFeeSectionContent,
    NITSikkimCollegeNavigationConstants,
    NITSikkimCollegePlacementSectionContent,
    NITUttarakhandCollegeAboutSectionContent,
    NITUttarakhandCollegeAdmissionSectionContent,
    NITUttarakhandCollegeCoursesSectionContent,
    NITUttarakhandCollegeCutOffSectionContent,
    NITUttarakhandCollegeFeeSectionContent,
    NITUttarakhandCollegeNavigationConstants,
    NITUttarakhandCollegePlacementSectionContent,
    NITAndhraPradeshCollegeAboutSectionContent,
    NITAndhraPradeshCollegeAdmissionSectionContent,
    NITAndhraPradeshCollegeCoursesSectionContent,
    NITAndhraPradeshCollegeCutOffSectionContent,
    NITAndhraPradeshCollegeFeeSectionContent,
    NITAndhraPradeshCollegeNavigationConstants,
    NITAndhraPradeshCollegePlacementSectionContent,
    NITWarangalCollegeLocationSectionContent,
    NITWarangalCollegeRankingSectionContent,
    NITWarangalCollegeSeatSectionContent,
    NITBhopalCollegeLocationSectionContent,
    NITBhopalCollegeRankingSectionContent,
    NITBhopalCollegeSeatSectionContent,
    NITNagpurCollegeLocationSectionContent,
    NITNagpurCollegeRankingSectionContent,
    NITNagpurCollegeSeatSectionContent,
    NITDurgapurCollegeLocationSectionContent,
    NITDurgapurCollegeRankingSectionContent,
    NITDurgapurCollegeSeatSectionContent,
    NITKarnatakaCollegeLocationSectionContent,
    NITShibpurCollegeNavigationConstants,
    NITShibpurCollegeAboutSectionContent,
    NITShibpurCollegeLocationSectionContent,
    NITShibpurCollegeRankingSectionContent,
    NITShibpurCollegeAdmissionSectionContent,
    NITShibpurCollegeCoursesSectionContent,
    NITShibpurCollegeFeeSectionContent,
    NITShibpurCollegeSeatSectionContent,
    NITShibpurCollegeCutOffSectionContent,
    NITShibpurCollegePlacementSectionContent,
    NITJamshedpurCollegeLocationSectionContent,
    NITJamshedpurCollegeRankingSectionContent,
    NITJamshedpurCollegeSeatSectionContent,
    NITKarnatakaCollegeRankingSectionContent,
    NITKarnatakaCollegeSeatSectionContent,
    NITSrinagarCollegeLocationSectionContent,
    NITSrinagarCollegeRankingSectionContent,
    NITSrinagarCollegeSeatSectionContent,
    NITAllahabadCollegeLocationSectionContent,
    NITAllahabadCollegeRankingSectionContent,
    NITAllahabadCollegeSeatSectionContent,
    NITSuratCollegeLocationSectionContent,
    NITSuratCollegeRankingSectionContent,
    NITCalicutCollegeLocationSectionContent,
    NITCalicutCollegeRankingSectionContent,
    NITCalicutCollegeSeatSectionContent,
    NITRourkelaCollegeLocationSectionContent,
    NITRourkelaCollegeRankingSectionContent,
    NITRourkelaCollegeSeatSectionContent,
    NITJaipurCollegeLocationSectionContent,
    NITJaipurCollegeRankingSectionContent,
    NITJaipurCollegeSeatSectionContent,
    NITKurukshetraCollegeLocationSectionContent,
    NITKurukshetraCollegeRankingSectionContent,
    NITKurukshetraCollegeSeatSectionContent,
    NITTiruchirappalliCollegeLocationSectionContent,
    NITTiruchirappalliCollegeRankingSectionContent,
    NITTiruchirappalliCollegeSeatSectionContent,
    NITSilcharCollegeLocationSectionContent,
    NITSilcharCollegeRankingSectionContent,
    NITSilcharCollegeSeatSectionContent,
    NITHamirpurCollegeLocationSectionContent,
    NITHamirpurCollegeRankingSectionContent,
    NITHamirpurCollegeSeatSectionContent,
    NITJalandharCollegeLocationSectionContent,
    NITJalandharCollegeRankingSectionContent,
    NITJalandharCollegeSeatSectionContent,
    NITPatnaCollegeLocationSectionContent,
    NITPatnaCollegeRankingSectionContent,
    NITPatnaCollegeSeatSectionContent,
    NITRaipurCollegeLocationSectionContent,
    NITRaipurCollegeRankingSectionContent,
    NITRaipurCollegeSeatSectionContent,
    NITAgartalaCollegeLocationSectionContent,
    NITAgartalaCollegeRankingSectionContent,
    NITArunachalPradeshCollegeLocationSectionContent,
    NITArunachalPradeshCollegeRankingSectionContent,
    NITDelhiCollegeLocationSectionContent,
    NITDelhiCollegeRankingSectionContent,
    NITDelhiCollegeSeatSectionContent,
    NITGoaCollegeLocationSectionContent,
    NITGoaCollegeRankingSectionContent,
    NITGoaCollegeSeatSectionContent,
    NITManipurCollegeLocationSectionContent,
    NITManipurCollegeRankingSectionContent,
    NITManipurCollegeSeatSectionContent,
    NITMeghalayaCollegeLocationSectionContent,
    NITMeghalayaCollegeRankingSectionContent,
    NITMeghalayaCollegeSeatSectionContent,
    NITMizoramCollegeLocationSectionContent,
    NITMizoramCollegeRankingSectionContent,
    NITMizoramCollegeSeatSectionContent,
    NITNagalandCollegeLocationSectionContent,
    NITNagalandCollegeRankingSectionContent,
    NITNagalandCollegeSeatSectionContent,
    NITPuducherryCollegeLocationSectionContent,
    NITPuducherryCollegeRankingSectionContent,
    NITPuducherryCollegeSeatSectionContent,
    NITSikkimCollegeLocationSectionContent,
    NITSikkimCollegeRankingSectionContent,
    NITSikkimCollegeSeatSectionContent,
    NITUttarakhandCollegeLocationSectionContent,
    NITUttarakhandCollegeRankingSectionContent,
    NITUttarakhandCollegeSeatSectionContent,
    NITAndhraPradeshCollegeLocationSectionContent,
    NITAndhraPradeshCollegeRankingSectionContent,
    NITAndhraPradeshCollegeSeatSectionContent

} from "../constants/college/NIT/NITCollegePageNavigationComponentConstant";
import { NITAgartalaCoursesTableContent, NITAgartalaCoursesTableHeading, NITAllahabadCoursesTableContent, NITAllahabadCoursesTableHeading, NITAndhraPradeshCoursesTableContent, NITAndhraPradeshCoursesTableHeading, NITArunachalPradeshCoursesTableContent, NITArunachalPradeshCoursesTableHeading
    , NITBhopalCoursesTableContent, NITBhopalCoursesTableHeading, NITCalicutCoursesTableContent, NITCalicutCoursesTableHeading, NITDelhiCoursesTableContent, NITDelhiCoursesTableHeading
    , NITDurgapurCoursesTableContent, NITDurgapurCoursesTableHeading, NITGoaCoursesTableContent, NITGoaCoursesTableHeading, NITHamirpurCoursesTableContent, NITHamirpurCoursesTableHeading, NITJaipurCoursesTableContent, NITJaipurCoursesTableHeading, NITJalandharCoursesTableContent, NITJalandharCoursesTableHeading, NITJamshedpurCoursesTableContent, NITJamshedpurCoursesTableHeading, NITKarnatakaCoursesTableContent, NITKarnatakaCoursesTableHeading, NITKurukshetraCoursesTableContent, NITKurukshetraCoursesTableHeading, NITManipurCoursesTableContent, NITManipurCoursesTableHeading, NITMeghalayaCoursesTableContent, NITMeghalayaCoursesTableHeading, NITMizoramCoursesTableContent, NITMizoramCoursesTableHeading, NITNagalandCoursesTableContent, NITNagalandCoursesTableHeading,
     NITNagpurCoursesTableContent, NITNagpurCoursesTableHeading, NITPatnaCoursesTableContent, NITPatnaCoursesTableHeading, NITPuducherryCoursesTableContent, NITPuducherryCoursesTableHeading, NITRaipurCoursesTableContent, NITRaipurCoursesTableHeading, NITRourkelaCoursesTableContent, NITRourkelaCoursesTableHeading, NITShibpurCoursesTableContent, NITShibpurCoursesTableHeading, NITSikkimCoursesTableContent, NITSikkimCoursesTableHeading, NITSilcharCoursesTableContent, NITSilcharCoursesTableHeading, NITSrinagarCoursesTableContent, NITSrinagarCoursesTableHeading, NITSuratCoursesTableContent, NITSuratCoursesTableHeading, NITTiruchirapalliCoursesTableContent, NITTiruchirapalliCoursesTableHeading,
    NITUttarakhandCoursesTableContent,
    NITUttarakhandCoursesTableHeading,
    NITWarangalCoursesTableContent,
    NITWarangalCoursesTableHeading,  } from "../constants/college/NIT/NITCourseDataForNITCollegeConstants";
import IIITGenericCollegePage from "../pages/college/subpage/IIIT/IIITGenericCollegePage";
import {
    IIITHyderabadCollegeAboutSectionContent,
    IIITHyderabadCollegeAdmissionSectionContent,
    IIITHyderabadCollegeCoursesSectionContent,
    IIITHyderabadCollegeFeeSectionContent,
    IIITHyderabadCollegeNavigationConstants,
    IIITHyderabadCollegePlacementSectionContent, 
    IIITGwaliorCollegeAboutSectionContent,
    IIITGwaliorCollegeAdmissionSectionContent,
    IIITGwaliorCollegeCoursesSectionContent,
    IIITGwaliorCollegeFeeSectionContent,
    IIITGwaliorCollegeNavigationConstants,
    IIITGwaliorCollegePlacementSectionContent,
    IIITBangaloreCollegeAboutSectionContent,
    IIITBangaloreCollegeAdmissionSectionContent,
    IIITBangaloreCollegeCoursesSectionContent,
    IIITBangaloreCollegeFeeSectionContent,
    IIITBangaloreCollegeNavigationConstants,
    IIITBangaloreCollegePlacementSectionContent,
    IIITGuwahatiCollegeAboutSectionContent,
    IIITGuwahatiCollegeAdmissionSectionContent,
    IIITGuwahatiCollegeCoursesSectionContent,
    IIITGuwahatiCollegeFeeSectionContent,
    IIITGuwahatiCollegeNavigationConstants,
    IIITGuwahatiCollegePlacementSectionContent,
    IIITJabalpurCollegeAboutSectionContent,
    IIITJabalpurCollegeAdmissionSectionContent,
    IIITJabalpurCollegeCoursesSectionContent,
    IIITJabalpurCollegeFeeSectionContent,
    IIITJabalpurCollegeNavigationConstants,
    IIITJabalpurCollegePlacementSectionContent,
    IIITAllahabadCollegeAboutSectionContent,
    IIITAllahabadCollegeAdmissionSectionContent,
    IIITAllahabadCollegeCoursesSectionContent,
    IIITAllahabadCollegeFeeSectionContent,
    IIITAllahabadCollegeNavigationConstants,
    IIITAllahabadCollegePlacementSectionContent,
    IIITKanchipuramCollegeAboutSectionContent,
    IIITKanchipuramCollegeAdmissionSectionContent,
    IIITKanchipuramCollegeCoursesSectionContent,
    IIITKanchipuramCollegeFeeSectionContent,
    IIITKanchipuramCollegeNavigationConstants,
    IIITKanchipuramCollegePlacementSectionContent,
    IIITBhubaneshwarCollegeAboutSectionContent,
    IIITBhubaneshwarCollegeAdmissionSectionContent,
    IIITBhubaneshwarCollegeCoursesSectionContent,
    IIITBhubaneshwarCollegeFeeSectionContent,
    IIITBhubaneshwarCollegeNavigationConstants,
    IIITBhubaneshwarCollegePlacementSectionContent,
    IIITPuneCollegeAboutSectionContent,
    IIITPuneCollegeAdmissionSectionContent,
    IIITPuneCollegeCoursesSectionContent,
    IIITPuneCollegeFeeSectionContent,
    IIITPuneCollegeNavigationConstants,
    IIITPuneCollegePlacementSectionContent,
    IIITKotaCollegeAboutSectionContent,
    IIITKotaCollegeAdmissionSectionContent,
    IIITKotaCollegeCoursesSectionContent,
    IIITKotaCollegeFeeSectionContent,
    IIITKotaCollegeNavigationConstants,
    IIITKotaCollegePlacementSectionContent,
    IIITSriCityCollegeAboutSectionContent,
    IIITSriCityCollegeAdmissionSectionContent,
    IIITSriCityCollegeCoursesSectionContent,
    IIITSriCityCollegeFeeSectionContent,
    IIITSriCityCollegeNavigationConstants,
    IIITSriCityCollegePlacementSectionContent,
    IIITVadodaraCollegeAboutSectionContent,
    IIITVadodaraCollegeAdmissionSectionContent,
    IIITVadodaraCollegeCoursesSectionContent,
    IIITVadodaraCollegeFeeSectionContent,
    IIITVadodaraCollegeNavigationConstants,
    IIITVadodaraCollegePlacementSectionContent, 
    IIITNagpurCollegeAboutSectionContent,
    IIITNagpurCollegeAdmissionSectionContent,
    IIITNagpurCollegeCoursesSectionContent,
    IIITNagpurCollegeFeeSectionContent,
    IIITNagpurCollegeNavigationConstants,
    IIITNagpurCollegePlacementSectionContent,
    IIITKalyaniCollegeAboutSectionContent,
    IIITKalyaniCollegeAdmissionSectionContent,
    IIITKalyaniCollegeCoursesSectionContent,
    IIITKalyaniCollegeFeeSectionContent,
    IIITKalyaniCollegeNavigationConstants,
    IIITKalyaniCollegePlacementSectionContent,
    IIITLucknowCollegeAboutSectionContent,
    IIITLucknowCollegeAdmissionSectionContent,
    IIITLucknowCollegeCoursesSectionContent,
    IIITLucknowCollegeFeeSectionContent,
    IIITLucknowCollegeNavigationConstants,
    IIITLucknowCollegePlacementSectionContent,
    IIITDharwadCollegeAboutSectionContent,
    IIITDharwadCollegeAdmissionSectionContent,
    IIITDharwadCollegeCoursesSectionContent,
    IIITDharwadCollegeFeeSectionContent,
    IIITDharwadCollegeNavigationConstants,
    IIITDharwadCollegePlacementSectionContent,
    IIITBhagalpurCollegeAboutSectionContent,
    IIITBhagalpurCollegeAdmissionSectionContent,
    IIITBhagalpurCollegeCoursesSectionContent,
    IIITBhagalpurCollegeFeeSectionContent,
    IIITBhagalpurCollegeNavigationConstants,
    IIITBhagalpurCollegePlacementSectionContent,
    IIITBhopalCollegeAboutSectionContent,
    IIITBhopalCollegeAdmissionSectionContent,
    IIITBhopalCollegeCoursesSectionContent,
    IIITBhopalCollegeFeeSectionContent,
    IIITBhopalCollegeNavigationConstants,
    IIITBhopalCollegePlacementSectionContent,
    IIITKottayamCollegeAboutSectionContent,
    IIITKottayamCollegeAdmissionSectionContent,
    IIITKottayamCollegeCoursesSectionContent,
    IIITKottayamCollegeFeeSectionContent,
    IIITKottayamCollegeNavigationConstants,
    IIITKottayamCollegePlacementSectionContent,
    IIITRanchiCollegeAboutSectionContent,
    IIITRanchiCollegeAdmissionSectionContent,
    IIITRanchiCollegeCoursesSectionContent,
    IIITRanchiCollegeFeeSectionContent,
    IIITRanchiCollegeNavigationConstants,
    IIITRanchiCollegePlacementSectionContent,
    IIITUnaCollegeAboutSectionContent,
    IIITUnaCollegeAdmissionSectionContent,
    IIITUnaCollegeCoursesSectionContent,
    IIITUnaCollegeFeeSectionContent,
    IIITUnaCollegeNavigationConstants,
    IIITUnaCollegePlacementSectionContent,
    IIITSuratCollegeAboutSectionContent,
    IIITSuratCollegeAdmissionSectionContent,
    IIITSuratCollegeCoursesSectionContent,
    IIITSuratCollegeFeeSectionContent,
    IIITSuratCollegeNavigationConstants,
    IIITSuratCollegePlacementSectionContent,
    IIITManipurCollegeAboutSectionContent,
    IIITManipurCollegeAdmissionSectionContent,
    IIITManipurCollegeCoursesSectionContent,
    IIITManipurCollegeFeeSectionContent,
    IIITManipurCollegeNavigationConstants,
    IIITManipurCollegePlacementSectionContent,
    IIITKurnoolCollegeAboutSectionContent,
    IIITKurnoolCollegeAdmissionSectionContent,
    IIITKurnoolCollegeCoursesSectionContent,
    IIITKurnoolCollegeFeeSectionContent,
    IIITKurnoolCollegeNavigationConstants,
    IIITKurnoolCollegePlacementSectionContent,
    IIITTiruchirapalliCollegeAboutSectionContent,
    IIITTiruchirapalliCollegeAdmissionSectionContent,
    IIITTiruchirapalliCollegeCoursesSectionContent,
    IIITTiruchirapalliCollegeFeeSectionContent,
    IIITTiruchirapalliCollegeNavigationConstants,
    IIITTiruchirapalliCollegePlacementSectionContent,
    IIITSonepatCollegeAboutSectionContent,
    IIITSonepatCollegeAdmissionSectionContent,
    IIITSonepatCollegeCoursesSectionContent,
    IIITSonepatCollegeFeeSectionContent,
    IIITSonepatCollegeNavigationConstants,
    IIITSonepatCollegePlacementSectionContent,
    IIITAgartalaCollegeAboutSectionContent,
    IIITAgartalaCollegeAdmissionSectionContent,
    IIITAgartalaCollegeCoursesSectionContent,
    IIITAgartalaCollegeFeeSectionContent,
    IIITAgartalaCollegeNavigationConstants,
    IIITAgartalaCollegePlacementSectionContent,
    IIITKarnatakaCollegeAboutSectionContent,
    IIITKarnatakaCollegeAdmissionSectionContent,
    IIITKarnatakaCollegeCoursesSectionContent,
    IIITKarnatakaCollegeFeeSectionContent,
    IIITKarnatakaCollegeNavigationConstants,
    IIITKarnatakaCollegePlacementSectionContent,
    IIITAllahabadCollegeCutOffSectionContent,
    IIITHyderabadCollegeLocationSectionContent,
    IIITHyderabadCollegeRankingSectionContent,
    IIITHyderabadCollegeSeatSectionContent,
    IIITHyderabadCollegeCutOffSectionContent,
    IIITGwaliorCollegeLocationSectionContent,
    IIITGwaliorCollegeRankingSectionContent,
    IIITGwaliorCollegeSeatSectionContent,
    IIITGwaliorCollegeCutOffSectionContent,

    IIITBangaloreCollegeLocationSectionContent,
    IIITBangaloreCollegeRankingSectionContent,
    IIITBangaloreCollegeSeatSectionContent,
    IIITBangaloreCollegeCutOffSectionContent,
    IIITGuwahatiCollegeLocationSectionContent,
    IIITGuwahatiCollegeRankingSectionContent,
    IIITGuwahatiCollegeSeatSectionContent,
    IIITGuwahatiCollegeCutOffSectionContent,
    IIITJabalpurCollegeLocationSectionContent,
    IIITJabalpurCollegeRankingSectionContent,
    IIITJabalpurCollegeSeatSectionContent,
    IIITJabalpurCollegeCutOffSectionContent,
    IIITAllahabadCollegeLocationSectionContent,
    IIITAllahabadCollegeRankingSectionContent,
    IIITAllahabadCollegeSeatSectionContent,
    IIITKanchipuramCollegeLocationSectionContent,
    IIITKanchipuramCollegeRankingSectionContent,
    IIITKanchipuramCollegeSeatSectionContent,
    IIITKanchipuramCollegeCutOffSectionContent,
    IIITBhubaneshwarCollegeLocationSectionContent,
    IIITBhubaneshwarCollegeRankingSectionContent,
    IIITBhubaneshwarCollegeSeatSectionContent,
    IIITBhubaneshwarCollegeCutOffSectionContent,
    IIITPuneCollegeLocationSectionContent,
    IIITPuneCollegeRankingSectionContent,
    IIITPuneCollegeSeatSectionContent,
    IIITPuneCollegeCutOffSectionContent,
    IIITKotaCollegeLocationSectionContent,
    IIITKotaCollegeRankingSectionContent,
    IIITKotaCollegeSeatSectionContent,
    IIITKotaCollegeCutOffSectionContent,
    IIITSriCityCollegeLocationSectionContent,
    IIITSriCityCollegeRankingSectionContent,
    IIITSriCityCollegeSeatSectionContent,
    IIITSriCityCollegeCutOffSectionContent,
    IIITVadodaraCollegeLocationSectionContent,
    IIITVadodaraCollegeRankingSectionContent,
    IIITVadodaraCollegeSeatSectionContent,
    IIITVadodaraCollegeCutOffSectionContent,
    IIITNagpurCollegeLocationSectionContent,
    IIITNagpurCollegeRankingSectionContent,
    IIITNagpurCollegeSeatSectionContent,
    IIITNagpurCollegeCutOffSectionContent,
    IIITKalyaniCollegeLocationSectionContent,
    IIITKalyaniCollegeRankingSectionContent,
    IIITKalyaniCollegeSeatSectionContent,
    IIITKalyaniCollegeCutOffSectionContent,
    IIITLucknowCollegeLocationSectionContent,
    IIITLucknowCollegeRankingSectionContent,
    IIITLucknowCollegeSeatSectionContent,
    IIITLucknowCollegeCutOffSectionContent,
    IIITDharwadCollegeLocationSectionContent,
    IIITDharwadCollegeRankingSectionContent,
    IIITDharwadCollegeSeatSectionContent,
    IIITDharwadCollegeCutOffSectionContent,
    IIITBhagalpurCollegeLocationSectionContent,
    IIITBhagalpurCollegeRankingSectionContent,
    IIITBhagalpurCollegeSeatSectionContent,
    IIITBhagalpurCollegeCutOffSectionContent,
    IIITBhopalCollegeLocationSectionContent,
    IIITBhopalCollegeRankingSectionContent,
    IIITBhopalCollegeSeatSectionContent,
    IIITBhopalCollegeCutOffSectionContent,
    IIITKottayamCollegeLocationSectionContent,
    IIITKottayamCollegeRankingSectionContent,
    IIITKottayamCollegeSeatSectionContent,
    IIITKottayamCollegeCutOffSectionContent,
    IIITRanchiCollegeLocationSectionContent,
    IIITRanchiCollegeRankingSectionContent,
    IIITRanchiCollegeSeatSectionContent,
    IIITRanchiCollegeCutOffSectionContent,
    IIITUnaCollegeLocationSectionContent,
    IIITUnaCollegeRankingSectionContent,
    IIITUnaCollegeSeatSectionContent,
    IIITUnaCollegeCutOffSectionContent,
    IIITSuratCollegeLocationSectionContent,
    IIITSuratCollegeRankingSectionContent,
    IIITSuratCollegeSeatSectionContent,
    IIITSuratCollegeCutOffSectionContent,
    IIITManipurCollegeLocationSectionContent,
    IIITManipurCollegeRankingSectionContent,
    IIITManipurCollegeSeatSectionContent,
    IIITManipurCollegeCutOffSectionContent,
    IIITKurnoolCollegeLocationSectionContent,
    IIITKurnoolCollegeRankingSectionContent,
    IIITKurnoolCollegeSeatSectionContent,
    IIITKurnoolCollegeCutOffSectionContent,
    IIITTiruchirapalliCollegeLocationSectionContent,
    IIITTiruchirapalliCollegeRankingSectionContent,
    IIITTiruchirapalliCollegeSeatSectionContent,
    IIITTiruchirapalliCollegeCutOffSectionContent,
    IIITSonepatCollegeLocationSectionContent,
    IIITSonepatCollegeRankingSectionContent,
    IIITSonepatCollegeSeatSectionContent,
    IIITSonepatCollegeCutOffSectionContent,
    IIITAgartalaCollegeLocationSectionContent,
    IIITAgartalaCollegeRankingSectionContent,
    IIITAgartalaCollegeSeatSectionContent,
    IIITAgartalaCollegeCutOffSectionContent,
    IIITKarnatakaCollegeLocationSectionContent,
    IIITKarnatakaCollegeRankingSectionContent,
    IIITKarnatakaCollegeSeatSectionContent,
    IIITKarnatakaCollegeCutOffSectionContent
    
    } from "../constants/college/IIIT/IIITCollegePageNavigationComponentConstant";

import { 
    
    IIITHyderabadCoursesTableContent,
    IIITHyderabadCoursesTableHeading,

    IIITGwaliorCoursesTableContent,
    IIITGwaliorCoursesTableHeading,
    IIITBangaloreCoursesTableContent,
    IIITBangaloreCoursesTableHeading,
    IIITGuwahatiCoursesTableContent,
    IIITGuwahatiCoursesTableHeading,
    IIITJabalpurCoursesTableContent,
    IIITJabalpurCoursesTableHeading,
    IIITAllahabadCoursesTableContent,
    IIITAllahabadCoursesTableHeading,
    IIITKanchipuramCoursesTableContent,
    IIITKanchipuramCoursesTableHeading,
    IIITBhubaneswarCoursesTableContent,
    IIITBhubaneswarCoursesTableHeading,
    IIITPuneCoursesTableContent,
    IIITPuneCoursesTableHeading,
    IIITKotaCoursesTableContent,
    IIITKotaCoursesTableHeading,
    IIITSricityCoursesTableContent,
    IIITSricityCoursesTableHeading,
    IIITVadodaraCoursesTableContent,
    IIITVadodaraCoursesTableHeading,
    IIITNagpurCoursesTableContent,
    IIITNagpurCoursesTableHeading,
    IIITKalyaniCoursesTableContent,
    IIITKalyaniCoursesTableHeading,
    IIITLucknowCoursesTableContent,
    IIITLucknowCoursesTableHeading,
    IIITDharwadCoursesTableContent,
    IIITDharwadCoursesTableHeading,
    IIITBhagalpurCoursesTableContent,
    IIITBhagalpurCoursesTableHeading,
    IIITBhopalCoursesTableContent,
    IIITBhopalCoursesTableHeading,
    IIITKottayamCoursesTableContent,
    IIITKottayamCoursesTableHeading,
    IIITRanchiCoursesTableContent,
    IIITRanchiCoursesTableHeading,
    IIITUnaCoursesTableContent,
    IIITUnaCoursesTableHeading,
    IIITSuratCoursesTableContent,
    IIITSuratCoursesTableHeading,
    IIITManipurCoursesTableContent,
    IIITManipurCoursesTableHeading,
    IIITKurnoolCoursesTableContent,
    IIITKurnoolCoursesTableHeading,
    IIITTiruchirapalliCoursesTableContent,
    IIITTiruchirapalliCoursesTableHeading,
    IIITSonepatCoursesTableContent,
    IIITSonepatCoursesTableHeading,
    IIITAgartalaCoursesTableContent,
    IIITAgartalaCoursesTableHeading,
    IIITKarnatakaCoursesTableContent,
    IIITKarnatakaCoursesTableHeading

 } from "../constants/college/IIIT/IIITCourseDataCollegeConstants";
import { NITAgaratalaHostelFeesDataTableConstant, NITAgaratalaHostelFeesDataTableHeading, NITAgaratalaInstituteFeesDataTableConstant, NITAgaratalaInstituteFeesDataTableHeading, NITAllahabadHostelFeesDataTableConstant, NITAllahabadHostelFeesDataTableHeading, NITAllahabadInstituteFeesDataTableConstant, NITAllahabadInstituteFeesDataTableHeading, NITAndhraPradeshHostelFeesDataTableConstant, NITAndhraPradeshHostelFeesDataTableHeading, NITAndhraPradeshInstituteFeesDataTableConstant, NITAndhraPradeshInstituteFeesDataTableHeading, NITArunachalPradeshHostelFeesDataTableConstant, NITArunachalPradeshHostelFeesDataTableHeading, NITArunachalPradeshInstituteFeesDataTableConstant, NITArunachalPradeshInstituteFeesDataTableHeading, NITBhopalHostelFeesDataTableConstant, NITBhopalHostelFeesDataTableHeading, NITBhopalInstituteFeesDataTableConstant, NITBhopalInstituteFeesDataTableHeading, NITCalicutHostelFeesDataTableConstant, NITCalicutHostelFeesDataTableHeading, NITCalicutInstituteFeesDataTableHeading, NITDelhiHostelFeesDataTableConstant, NITDelhiHostelFeesDataTableHeading, NITDelhiInstituteFeesDataTableConstant, NITDelhiInstituteFeesDataTableHeading, NITDurgapurHostelFeesDataTableConstant, NITDurgapurHostelFeesDataTableHeading, NITDurgapurInstituteFeesDataTableConstant, NITDurgapurInstituteFeesDataTableHeading, NITGoaHostelFeesDataTableConstant, NITGoaHostelFeesDataTableHeading, NITGoaInstituteFeesDataTableConstant, NITGoaInstituteFeesDataTableHeading, NITHamirpurHostelFeesDataTableConstant, NITHamirpurHostelFeesDataTableHeading, NITHamirpurInstituteFeesDataTableConstant, NITHamirpurInstituteFeesDataTableHeading, NITJaipurHostelFeesDataTableConstant, NITJaipurInstituteFeesDataTableConstant, NITJaipurInstituteFeesDataTableHeading, NITJalandharHostelFeesDataTableConstant, NITJalandharHostelFeesDataTableHeading, NITJalandharInstituteFeesDataTableConstant, NITJalandharInstituteFeesDataTableHeading, NITJamshedpurHostelFeesDataTableConstant, NITJamshedpurHostelFeesDataTableHeading, NITJamshedpurInstituteFeesDataTableConstant, NITJamshedpurInstituteFeesDataTableHeading, NITKarnatakaHostelFeesDataTableConstant, NITKarnatakaHostelFeesDataTableHeading, NITKarnatakaInstituteFeesDataTableConstant, NITKarnatakaInstituteFeesDataTableHeading, NITKurukshetraHostelFeesDataTableConstant, NITKurukshetraHostelFeesDataTableHeading, NITKurukshetraInstituteFeesDataTableConstant, NITKurukshetraInstituteFeesDataTableHeading, NITManipurHostelFeesDataTableConstant, NITManipurHostelFeesDataTableHeading, NITManipurInstituteFeesDataTableConstant, NITManipurInstituteFeesDataTableHeading, NITMeghalayaHostelFeesDataTableConstant, NITMeghalayaHostelFeesDataTableHeading, NITMeghalayaInstituteFeesDataTableConstant, NITMeghalayaInstituteFeesDataTableHeading, NITMizoramHostelFeesDataTableConstant, NITMizoramHostelFeesDataTableHeading, NITMizoramInstituteFeesDataTableConstant, NITMizoramInstituteFeesDataTableHeading, NITNagalandHostelFeesDataTableConstant, NITNagalandHostelFeesDataTableHeading, NITNagalandInstituteFeesDataTableConstant, NITNagalandInstituteFeesDataTableHeading, NITNagpurHostelFeesDataTableConstant, NITNagpurHostelFeesDataTableHeading, NITNagpurInstituteFeesDataTableConstant, NITNagpurInstituteFeesDataTableHeading, NITPatnaHostelFeesDataTableConstant, NITPatnaHostelFeesDataTableHeading, NITPatnaInstituteFeesDataTableConstant, NITPatnaInstituteFeesDataTableHeading, NITPuducherryHostelFeesDataTableConstant, NITPuducherryHostelFeesDataTableHeading, NITPuducherryInstituteFeesDataTableConstant, NITPuducherryInstituteFeesDataTableHeading, NITRaipurHostelFeesDataTableConstant, NITRaipurHostelFeesDataTableHeading, NITRaipurInstituteFeesDataTableConstant, NITRaipurInstituteFeesDataTableHeading, NITRourkelaHostelFeesDataTableConstant, NITRourkelaHostelFeesDataTableHeading, NITRourkelaInstituteFeesDataTableConstant, NITRourkelaInstituteFeesDataTableHeading, NITShibpurHostelFeesDataTableConstant, NITShibpurHostelFeesDataTableHeading, NITShibpurInstituteFeesDataTableConstant, NITShibpurInstituteFeesDataTableHeading, NITSikkimHostelFeesDataTableConstant, NITSikkimHostelFeesDataTableHeading, NITSikkimInstituteFeesDataTableConstant, NITSikkimInstituteFeesDataTableHeading, NITSilcharHostelFeesDataTableConstant, NITSilcharHostelFeesDataTableHeading, NITSilcharInstituteFeesDataTableConstant, NITSilcharInstituteFeesDataTableHeading, NITSrinagarHostelFeesDataTableConstant, NITSrinagarHostelFeesDataTableHeading, NITSrinagarInstituteFeesDataTableConstant, NITSrinagarInstituteFeesDataTableHeading, NITSuratHostelFeesDataTableConstant, NITSuratHostelFeesDataTableHeading, NITSuratInstituteFeesDataTableConstant, NITSuratInstituteFeesDataTableHeading, NITTiruchirapalliHostelFeesDataTableConstant, NITTiruchirapalliHostelFeesDataTableHeading, NITTiruchirapalliInstituteFeesDataTableConstant, NITTiruchirapalliInstituteFeesDataTableHeading, NITUttarakhandHostelFeesDataTableConstant, NITUttarakhandHostelFeesDataTableHeading, NITUttarakhandInstituteFeesDataTableConstant, NITUttarakhandInstituteFeesDataTableHeading, NITWarangalHostelFeesDataTableConstant, NITWarangalHostelFeesDataTableHeading, NITWarangalInstituteFeesDataTableConstant, NITWarangalInstituteFeesDataTableHeading } from "../constants/college/NIT/NITFeesDataCollegeConstant";
import { NITAgaratalaAboutDataTableConstant, NITAgaratalaAboutDataTableHeading, NITAllahabadAboutDataTableConstant, NITAllahabadAboutDataTableHeading, NITAndhraPradeshAboutDataTableConstant, NITAndhraPradeshAboutDataTableHeading, NITArunachalPradeshAboutDataTableConstant, NITArunachalPradeshAboutDataTableHeading, NITBhopalAboutDataTableConstant, NITCalicutAboutDataTableConstant, NITCalicutAboutDataTableHeading, NITDelhiAboutDataTableConstant, NITDelhiAboutDataTableHeading, NITDurgapurAboutDataTableConstant, NITGoaAboutDataTableConstant, NITGoaAboutDataTableHeading, NITHamirpurAboutDataTableConstant, NITHamirpurAboutDataTableHeading, NITJaipurAboutDataTableConstant, NITJaipurAboutDataTableHeading, NITJalandharAboutDataTableConstant, NITJalandharAboutDataTableHeading, NITJamshedpurAboutDataTableConstant, NITJamshedpurAboutDataTableHeading, NITKarnatakaAboutDataTableConstant, NITKarnatakaAboutDataTableHeading, NITKurukshetraAboutDataTableConstant, NITKurukshetraAboutDataTableHeading, NITManipurAboutDataTableConstant, NITManipurAboutDataTableHeading, NITMeghalayaAboutDataTableConstant, NITMeghalayaAboutDataTableHeading, NITMizoramAboutDataTableConstant, NITMizoramAboutDataTableHeading, NITNagalandAboutDataTableConstant, NITNagalandAboutDataTableHeading, NITNagpurAboutDataTableConstant, NITNagpurAboutDataTableHeading, NITPatnaAboutDataTableConstant, NITPatnaAboutDataTableHeading, NITPuducherryAboutDataTableConstant, NITPuducherryAboutDataTableHeading, NITRaipurAboutDataTableConstant, NITRaipurAboutDataTableHeading, NITRourkelaAboutDataTableConstant, NITRourkelaAboutDataTableHeading, NITShibpurAboutDataTableConstant, NITShibpurAboutDataTableHeading, NITSikkimAboutDataTableConstant, NITSikkimAboutDataTableHeading, NITSilcharAboutDataTableConstant, NITSilcharAboutDataTableHeading, NITSrinagarAboutDataTableConstant, NITSrinagarAboutDataTableHeading, NITSuratAboutDataTableConstant, NITSuratAboutDataTableHeading, NITTiruchirappalliAboutDataTableConstant, NITTiruchirappalliAboutDataTableHeading, NITUttarakhandAboutDataTableConstant, NITUttarakhandAboutDataTableHeading, NITWarangalAboutDataTableConstant, NITWarangalAboutDataTableHeading } from "../constants/college/NIT/NITAboutDataCollegeConstant";
import { NITAgaratalaLocationDataTableConstant, NITAgaratalaLocationDataTableHeading, NITAllahabadLocationDataTableConstant, NITAndhraPradeshLocationDataTableConstant, NITAndhraPradeshLocationDataTableHeading, NITArunachalPradeshLocationDataTableConstant, NITArunachalPradeshLocationDataTableHeading, NITBhopalLocationDataTableConstant, NITBhopalLocationDataTableHeading, NITCalicutLocationDataTableConstant, NITCalicutLocationDataTableHeading, NITDelhiLocationDataTableConstant, NITDelhiLocationDataTableHeading, NITDurgapurLocationDataTableConstant, NITDurgapurLocationDataTableHeading, NITGoaLocationDataTableConstant, NITHamirpurLocationDataTableConstant, NITHamirpurLocationDataTableHeading, NITJaipurLocationDataTableConstant, NITJaipurLocationDataTableHeading, NITJalandharLocationDataTableConstant, NITJalandharLocationDataTableHeading, NITJamshedpurLocationDataTableConstant, NITJamshedpurLocationDataTableHeading, NITKarnatakaLocationDataTableConstant, NITKarnatakaLocationDataTableHeading, NITKurukshetraLocationDataTableConstant, NITManipurLocationDataTableConstant, NITManipurLocationDataTableHeading, NITMeghalayaLocationDataTableConstant, NITMeghalayaLocationDataTableHeading, NITMizoramLocationDataTableConstant, NITMizoramLocationDataTableHeading, NITNagalandLocationDataTableConstant, NITNagalandLocationDataTableHeading, NITNagpurLocationDataTableConstant, NITNagpurLocationDataTableHeading, NITPatnaLocationDataTableConstant, NITPatnaLocationDataTableHeading, NITPuducherryLocationDataTableConstant, NITPuducherryLocationDataTableHeading, NITRaipurLocationDataTableConstant, NITRaipurLocationDataTableHeading, NITRourkelaLocationDataTableConstant, NITRourkelaLocationDataTableHeading, NITShibpurLocationDataTableConstant, NITShibpurLocationDataTableHeading, NITSikkimLocationDataTableConstant, NITSikkimLocationDataTableHeading, NITSilcharLocationDataTableConstant, NITSrinagarLocationDataTableConstant, NITSrinagarLocationDataTableHeading, NITSuratLocationDataTableConstant, NITSuratLocationDataTableHeading, NITTiruchirapalliLocationDataTableConstant, NITTiruchirapalliLocationDataTableHeading, NITUttarakhandLocationDataTableConstant, NITUttarakhandLocationDataTableHeading, NITWarangalLocationDataTableConstant, NITWarangalLocationDataTableHeading } from "../constants/college/NIT/NITLocationDataCollegeConstant";
import { NITAgaratalaRankingDataTableConstant, NITAgaratalaRankingDataTableHeading, NITAllahabadRankingDataTableConstant, NITAllahabadRankingDataTableHeading, NITAndhraPradeshRankingDataTableConstant, NITAndhraPradeshRankingDataTableHeading, NITArunachalPradeshRankingDataTableConstant, NITArunachalPradeshRankingDataTableHeading, NITBhopalRankingDataTableConstant, NITBhopalRankingDataTableHeading, NITCalicutRankingDataTableConstant, NITCalicutRankingDataTableHeading, NITDelhiRankingDataTableConstant, NITDelhiRankingDataTableHeading, NITDurgapurRankingDataTableConstant, NITDurgapurRankingDataTableHeading, NITGoaRankingDataTableConstant, NITGoaRankingDataTableHeading, NITHamirpurRankingDataTableConstant, NITHamirpurRankingDataTableHeading, NITJaipurRankingDataTableConstant, NITJaipurRankingDataTableHeading, NITJalandharRankingDataTableConstant, NITJalandharRankingDataTableHeading, NITJamshedpurRankingDataTableConstant, NITJamshedpurRankingDataTableHeading, NITKarnatakaRankingDataTableConstant, NITKarnatakaRankingDataTableHeading, NITKurukshetraRankingDataTableConstant, NITManipurRankingDataTableConstant, NITManipurRankingDataTableHeading, NITMeghalayaRankingDataTableConstant, NITMeghalayaRankingDataTableHeading, NITMizoramRankingDataTableConstant, NITMizoramRankingDataTableHeading, NITNagalandRankingDataTableConstant, NITNagalandRankingDataTableHeading, NITNagpurRankingDataTableConstant, NITNagpurRankingDataTableHeading, NITPatnaRankingDataTableConstant, NITPatnaRankingDataTableHeading, NITPuducherryRankingDataTableHeading, NITRaipurRankingDataTableConstant, NITRaipurRankingDataTableHeading, NITRourkelaRankingDataTableConstant, NITRourkelaRankingDataTableHeading, NITShibpurRankingDataTableConstant, NITShibpurRankingDataTableHeading, NITSikkimRankingDataTableConstant, NITSikkimRankingDataTableHeading, NITSilcharRankingDataTableConstant, NITSilcharRankingDataTableHeading, NITSrinagarRankingDataTableHeading, NITSuratRankingDataTableConstant, NITSuratRankingDataTableHeading, NITTiruchirapalliRankingDataTableConstant, NITTiruchirapalliRankingDataTableHeading, NITUttarakhandRankingDataTableConstant, NITUttarakhandRankingDataTableHeading, NITWarangalRankingDataTableConstant, NITWarangalRankingDataTableHeading } from "../constants/college/NIT/NITRankingDataCollegeConstant";
import { NITAgaratalaSeatDataTableConstant, NITAgaratalaSeatDataTableHeading, NITAllahabadSeatDataTableConstant, NITAllahabadSeatDataTableHeading, NITAndhraPradeshSeatDataTableConstant, NITAndhraPradeshSeatDataTableHeading, NITArunachalPradeshSeatDataTableConstant, NITArunachalPradeshSeatDataTableHeading, NITBhopalSeatDataTableConstant, NITBhopalSeatDataTableHeading, NITCalicutSeatDataTableConstant, NITCalicutSeatDataTableHeading, NITDelhiSeatDataTableConstant, NITDelhiSeatDataTableHeading, NITDurgapurSeatDataTableConstant, NITDurgapurSeatDataTableHeading, NITGoaSeatDataTableConstant, NITGoaSeatDataTableHeading, NITHamirpurSeatDataTableConstant, NITHamirpurSeatDataTableHeading, NITJaipurSeatDataTableConstant, NITJaipurSeatDataTableHeading, NITJalandharSeatDataTableConstant, NITJalandharSeatDataTableHeading, NITJamshedpurSeatDataTableConstant, NITJamshedpurSeatDataTableHeading, NITKarnatakaSeatDataTableConstant, NITKarnatakaSeatDataTableHeading, NITKurukshetraSeatDataTableConstant, NITKurukshetraSeatDataTableHeading, NITManipurSeatDataTableConstant, NITManipurSeatDataTableHeading, NITMeghalayaSeatDataTableConstant, NITMeghalayaSeatDataTableHeading, NITMizoramSeatDataTableConstant, NITMizoramSeatDataTableHeading, NITNagalandSeatDataTableConstant, NITNagalandSeatDataTableHeading, NITNagpurSeatDataTableConstant, NITNagpurSeatDataTableHeading, NITPatnaSeatDataTableConstant, NITPatnaSeatDataTableHeading, NITPuducherrySeatDataTableConstant, NITPuducherrySeatDataTableHeading, NITRaipurSeatDataTableConstant, NITRaipurSeatDataTableHeading, NITRourkelaSeatDataTableConstant, NITRourkelaSeatDataTableHeading, NITShibpurSeatDataTableConstant, NITShibpurSeatDataTableHeading, NITSikkimSeatDataTableConstant, NITSikkimSeatDataTableHeading, NITSilcharSeatDataTableConstant, NITSilcharSeatDataTableHeading, NITSrinagarSeatDataTableConstant, NITSrinagarSeatDataTableHeading, NITSuratSeatDataTableConstant, NITSuratSeatDataTableHeading, NITTiruchirapalliSeatDataTableConstant, NITTiruchirapalliSeatDataTableHeading, NITUttarakhandSeatDataTableConstant, NITUttarakhandSeatDataTableHeading, NITWarangalSeatDataTableConstant, NITWarangalSeatDataTableHeading } from "../constants/college/NIT/NITSeatDataCollegeConstant";
import { NITAgaratalaPlacementImageList, NITAllahabadPlacementImageList, NITAndhraPradeshPlacementImageList, NITArunachalPradeshPlacementImageList, NITBhopalPlacementImageList, NITCalicutPlacementImageList, NITDelhiPlacementImageList, NITDurgapurPlacementImageList, NITGoaPlacementImageList, NITHamirpurPlacementImageList, NITJaipurPlacementImageList, NITJalandharPlacementImageList, NITJamshedpurPlacementImageList, NITKarnatakaPlacementImageList, NITKurukshetraPlacementImageList, NITManipurPlacementImageList, NITMeghalayaPlacementImageList, NITMizoramPlacementImageList, NITNagalandPlacementImageList, NITNagpurPlacementImageList, NITPatnaPlacementImageList, NITPuducherryPlacementImageList, NITRaipurPlacementImageList, NITRourkelaPlacementImageList, NITShibpurPlacementImageList, NITSikkimPlacementImageList, NITSilcharPlacementImageList, NITSrinagarPlacementImageList, NITSuratPlacementImageList, NITTiruchirapalliPlacementImageList, NITUttarakhandPlacementImageList, NITWarangalPlacementImageList } from "../constants/college/NIT/NITPlacementDataCollegeComponent";
import { 
    IITBombayAboutDataTableConstant, 
    IITBombayAboutDataTableHeading,
    IITKharagpurAboutDataTableConstant,
    IITKharagpurAboutDataTableHeading,
    IITMadrasAboutDataTableConstant,
    IITMadrasAboutDataTableHeading,
    IITKanpurAboutDataTableConstant,
    IITKanpurAboutDataTableHeading,
    IITDelhiAboutDataTableConstant,
    IITDelhiAboutDataTableHeading,
    IITGuwahatiAboutDataTableConstant,
    IITGuwahatiAboutDataTableHeading,
    IITRoorkeeAboutDataTableConstant,
    IITRoorkeeAboutDataTableHeading,
    IITRoparAboutDataTableConstant,
    IITRoparAboutDataTableHeading,
    IITBhubaneswarAboutDataTableConstant,
    IITBhubaneswarAboutDataTableHeading,
    IITGandhinagarAboutDataTableConstant,
    IITGandhinagarAboutDataTableHeading,
    IITHyderabadAboutDataTableConstant,
    IITHyderabadAboutDataTableHeading,
    IITJodhpurAboutDataTableConstant,
    IITJodhpurAboutDataTableHeading,
    IITPatnaAboutDataTableConstant,
    IITPatnaAboutDataTableHeading,
    IITIndoreAboutDataTableConstant,
    IITIndoreAboutDataTableHeading,
    IITMandiAboutDataTableConstant,
    IITMandiAboutDataTableHeading,
    IITBHUAboutDataTableConstant,
    IITBHUAboutDataTableHeading,
    IITPalakkadAboutDataTableConstant,
    IITPalakkadAboutDataTableHeading,
    IITBhilaiAboutDataTableConstant,
    IITBhilaiAboutDataTableHeading,
    IITDhanbadAboutDataTableConstant,
    IITDhanbadAboutDataTableHeading,
    IITDharwadAboutDataTableConstant,
    IITDharwadAboutDataTableHeading,
    IITGoaAboutDataTableConstant,
    IITGoaAboutDataTableHeading,
    IITJammuAboutDataTableConstant,
    IITJammuAboutDataTableHeading,
    IITTirupatiAboutDataTableConstant,
    IITTirupatiAboutDataTableHeading
 } from "../constants/college/IIT/IITAboutDataCollegeConstant";
import { 
    IITBombayLocationDataTableConstant,
    IITBombayLocationDataTableHeading,
    IITKharagpurLocationDataTableConstant,
    IITKharagpurLocationDataTableHeading,
    IITMadrasLocationDataTableConstant,
    IITMadrasLocationDataTableHeading,
    IITKanpurLocationDataTableConstant,
    IITKanpurLocationDataTableHeading,
    IITDelhiLocationDataTableConstant,
    IITDelhiLocationDataTableHeading,
    IITGuwahatiLocationDataTableConstant,
    IITGuwahatiLocationDataTableHeading,
    IITRoorkeeLocationDataTableConstant,
    IITRoorkeeLocationDataTableHeading,
    IITRoparLocationDataTableConstant,
    IITRoparLocationDataTableHeading,
    IITGandhinagarLocationDataTableConstant,
    IITGandhinagarLocationDataTableHeading,
    IITHyderabadLocationDataTableConstant,
    IITHyderabadLocationDataTableHeading,
    IITJodhpurLocationDataTableConstant,
    IITJodhpurLocationDataTableHeading,
    IITPatnaLocationDataTableConstant,
    IITPatnaLocationDataTableHeading,
    IITIndoreLocationDataTableConstant,
    IITIndoreLocationDataTableHeading,
    IITMandiLocationDataTableConstant,
    IITMandiLocationDataTableHeading,
    IITBHULocationDataTableConstant,
    IITBHULocationDataTableHeading,
    IITPalakkadLocationDataTableConstant,
    IITPalakkadLocationDataTableHeading,
    IITDhanbadLocationDataTableConstant,
    IITDhanbadLocationDataTableHeading,
    IITDharwadLocationDataTableConstant,
    IITDharwadLocationDataTableHeading,
    IITGoaLocationDataTableConstant,
    IITGoaLocationDataTableHeading,
    IITJammuLocationDataTableConstant,
    IITJammuLocationDataTableHeading,
    IITTirupatiLocationDataTableConstant,
    IITTirupatiLocationDataTableHeading,
    IITBhilaiLocationDataTableConstant,
    IITBhilaiLocationDataTableHeading,
    IITBhubaneswarLocationDataTableConstant,
    IITBhubaneswarLocationDataTableHeading
     } from "../constants/college/IIT/IITLocationDataCollegeConstant";
import { 
    IITBombayRankingDataTableConstant, 
    IITBombayRankingDataTableHeading ,
    IITKharagpurRankingDataTableConstant,
    IITKharagpurRankingDataTableHeading,
    IITMadrasRankingDataTableConstant,
    IITMadrasRankingDataTableHeading,
    IITKanpurRankingDataTableConstant,
    IITKanpurRankingDataTableHeading,
    IITDelhiRankingDataTableConstant,
    IITDelhiRankingDataTableHeading,
    IITGuwahatiRankingDataTableConstant,
    IITGuwahatiRankingDataTableHeading,
    IITRoorkeeRankingDataTableConstant,
    IITRoorkeeRankingDataTableHeading,
    IITRoparRankingDataTableConstant,
    IITRoparRankingDataTableHeading,
    IITGandhinagarRankingDataTableConstant,
    IITGandhinagarRankingDataTableHeading,
    IITHyderabadRankingDataTableConstant,
    IITHyderabadRankingDataTableHeading,
    IITJodhpurRankingDataTableConstant,
    IITJodhpurRankingDataTableHeading,
    IITPatnaRankingDataTableConstant,
    IITPatnaRankingDataTableHeading,
    IITIndoreRankingDataTableConstant,
    IITIndoreRankingDataTableHeading,
    IITMandiRankingDataTableConstant,
    IITMandiRankingDataTableHeading,
    IITBHURankingDataTableConstant,
    IITBHURankingDataTableHeading,
    IITPalakkadRankingDataTableConstant,
    IITPalakkadRankingDataTableHeading,
    IITBhubaneshwarRankingDataTableConstant,
    IITBhubaneshwarRankingDataTableHeading,
    IITDhanbadRankingDataTableConstant,
    IITDhanbadRankingDataTableHeading,
    IITDharwadRankingDataTableConstant,
    IITDharwadRankingDataTableHeading,
    IITGoaRankingDataTableConstant,
    IITGoaRankingDataTableHeading,
    IITJammuRankingDataTableConstant,
    IITJammuRankingDataTableHeading,
    IITTirupatiRankingDataTableConstant,
    IITTirupatiRankingDataTableHeading,
    IITBhilaiRankingDataTableConstant,
    IITBhilaiRankingDataTableHeading

} from "../constants/college/IIT/IITRankingDataCollegeConstant";
import { 
    IITBombayHostelFeesDataTableConstant,
    IITBombayHostelFeesDataTableHeading, 
    IITBombayInstituteFeesDataTableConstant, 
    IITBombayInstituteFeesDataTableHeading, 
    IITKharagpurHostelFeesDataTableConstant,
    IITKharagpurHostelFeesDataTableHeading,
    IITKharagpurInstituteFeesDataTableConstant,
    IITKharagpurInstituteFeesDataTableHeading,
    IITMadrasHostelFeesDataTableConstant,
    IITMadrasHostelFeesDataTableHeading,
    IITMadrasInstituteFeesDataTableConstant,
    IITMadrasInstituteFeesDataTableHeading,
    IITKanpurHostelFeesDataTableConstant,
    IITKanpurHostelFeesDataTableHeading,
    IITKanpurInstituteFeesDataTableConstant,
    IITKanpurInstituteFeesDataTableHeading,
    IITDelhiHostelFeesDataTableConstant,
    IITDelhiHostelFeesDataTableHeading,
    IITDelhiInstituteFeesDataTableConstant,
    IITDelhiInstituteFeesDataTableHeading,
    IITGuwahatiHostelFeesDataTableConstant,
    IITGuwahatiHostelFeesDataTableHeading,
    IITGuwahatiInstituteFeesDataTableConstant,
    IITGuwahatiInstituteFeesDataTableHeading,
    IITRoorkeeHostelFeesDataTableConstant,
    IITRoorkeeHostelFeesDataTableHeading,
    IITRoorkeeInstituteFeesDataTableConstant,
    IITRoorkeeInstituteFeesDataTableHeading,
    IITRoparHostelFeesDataTableConstant,
    IITRoparHostelFeesDataTableHeading,
    IITRoparInstituteFeesDataTableConstant,
    IITRoparInstituteFeesDataTableHeading,
    IITBhubaneshwarHostelFeesDataTableConstant,
    IITBhubaneshwarHostelFeesDataTableHeading,
    IITBhubaneshwarInstituteFeesDataTableConstant,
    IITBhubaneshwarInstituteFeesDataTableHeading,
    IITGandhinagarHostelFeesDataTableConstant,
    IITGandhinagarHostelFeesDataTableHeading,
    IITGandhinagarInstituteFeesDataTableConstant,
    IITGandhinagarInstituteFeesDataTableHeading,
    IITHyderabadHostelFeesDataTableConstant,
    IITHyderabadHostelFeesDataTableHeading,
    IITHyderabadInstituteFeesDataTableConstant,
    IITHyderabadInstituteFeesDataTableHeading,
    IITJodhpurHostelFeesDataTableConstant,
    IITJodhpurHostelFeesDataTableHeading,
    IITJodhpurInstituteFeesDataTableConstant,
    IITJodhpurInstituteFeesDataTableHeading,
    IITPatnaHostelFeesDataTableConstant,
    IITPatnaHostelFeesDataTableHeading,
    IITPatnaInstituteFeesDataTableConstant,
    IITPatnaInstituteFeesDataTableHeading,
    IITIndoreHostelFeesDataTableConstant,
    IITIndoreHostelFeesDataTableHeading,
    IITIndoreInstituteFeesDataTableConstant,
    IITIndoreInstituteFeesDataTableHeading,
    IITMandiHostelFeesDataTableConstant,
    IITMandiHostelFeesDataTableHeading,
    IITMandiInstituteFeesDataTableConstant,
    IITMandiInstituteFeesDataTableHeading,
    IITBHUHostelFeesDataTableConstant,
    IITBHUHostelFeesDataTableHeading,
    IITBHUInstituteFeesDataTableConstant,
    IITBHUInstituteFeesDataTableHeading,
    IITPalakkadHostelFeesDataTableConstant,
    IITPalakkadHostelFeesDataTableHeading,
    IITPalakkadInstituteFeesDataTableConstant,
    IITPalakkadInstituteFeesDataTableHeading,
    IITDhanbadHostelFeesDataTableConstant,
    IITDhanbadHostelFeesDataTableHeading,
    IITDhanbadInstituteFeesDataTableConstant,
    IITDhanbadInstituteFeesDataTableHeading,
    IITDharwadHostelFeesDataTableConstant,
    IITDharwadHostelFeesDataTableHeading,
    IITDharwadInstituteFeesDataTableConstant,
    IITDharwadInstituteFeesDataTableHeading,
    IITGoaHostelFeesDataTableConstant,
    IITGoaHostelFeesDataTableHeading,
    IITGoaInstituteFeesDataTableConstant,
    IITGoaInstituteFeesDataTableHeading,
    IITJammuHostelFeesDataTableConstant,
    IITJammuHostelFeesDataTableHeading,
    IITJammuInstituteFeesDataTableConstant,
    IITJammuInstituteFeesDataTableHeading,
    IITTirupatiHostelFeesDataTableConstant,
    IITTirupatiHostelFeesDataTableHeading,
    IITTirupatiInstituteFeesDataTableConstant,
    IITTirupatiInstituteFeesDataTableHeading,
    IITBhilaiInstituteFeesDataTableConstant,
    IITBhilaiInstituteFeesDataTableHeading,
    IITBhilaiHostelFeesDataTableConstant,
    IITBhilaiHostelFeesDataTableHeading,

} from "../constants/college/IIT/IITFeesDataCollegeConstant";
import { 
    IITBombaySeatDataTableConstant, 
    IITBombaySeatDataTableHeading ,
    IITKharagpurSeatDataTableConstant,
    IITKharagpurSeatDataTableHeading,
    IITMadrasSeatDataTableConstant,
    IITMadrasSeatDataTableHeading,
    IITKanpurSeatDataTableConstant,
    IITKanpurSeatDataTableHeading,
    IITDelhiSeatDataTableConstant,
    IITDelhiSeatDataTableHeading,
    IITGuwahatiSeatDataTableConstant,
    IITGuwahatiSeatDataTableHeading,
    IITRoorkeeSeatDataTableConstant,
    IITRoorkeeSeatDataTableHeading,
    IITRoparSeatDataTableConstant,
    IITRoparSeatDataTableHeading,
    IITBhubaneshwarSeatDataTableConstant,
    IITBhubaneshwarSeatDataTableHeading,
    IITGandhinagarSeatDataTableConstant,
    IITGandhinagarSeatDataTableHeading,
    IITHyderabadSeatDataTableConstant,
    IITHyderabadSeatDataTableHeading,
    IITJodhpurSeatDataTableConstant,
    IITJodhpurSeatDataTableHeading,
    IITPatnaSeatDataTableConstant,
    IITPatnaSeatDataTableHeading,
    IITIndoreSeatDataTableConstant,
    IITIndoreSeatDataTableHeading,
    IITMandiSeatDataTableConstant,
    IITMandiSeatDataTableHeading,
    IITBHUSeatDataTableConstant,
    IITBHUSeatDataTableHeading,
    IITPalakkadSeatDataTableConstant,
    IITPalakkadSeatDataTableHeading,
    IITDhanbadSeatDataTableConstant,
    IITDhanbadSeatDataTableHeading,
    IITDharwadSeatDataTableConstant,
    IITDharwadSeatDataTableHeading,
    IITGoaSeatDataTableConstant,
    IITGoaSeatDataTableHeading,
    IITJammuSeatDataTableConstant,
    IITJammuSeatDataTableHeading,
    IITBhilaiSeatDataTableConstant,
    IITBhilaiSeatDataTableHeading,
    IITTirupatiSeatDataTableConstant,
    IITTirupatiSeatDataTableHeading

} from "../constants/college/IIT/IITSeatDataCollegeConstant";
import { 
    IIITGwaliorAboutDataTableConstant,
    IIITGwaliorAboutDataTableHeading,
    IIITHyderabadAboutDataTableConstant,
    IIITHyderabadAboutDataTableHeading,
    IIITBangaloreAboutDataTableConstant,
    IIITBangaloreAboutDataTableHeading,
    IIITGuwahatiAboutDataTableConstant,
    IIITGuwahatiAboutDataTableHeading,
    IIITJabalpurAboutDataTableConstant,
    IIITJabalpurAboutDataTableHeading,
    IIITAllahabadAboutDataTableConstant,
    IIITAllahabadAboutDataTableHeading,
    IIITKanchipuramAboutDataTableConstant,
    IIITKanchipuramAboutDataTableHeading,
    IIITBhubaneswarAboutDataTableConstant,
    IIITBhubaneswarAboutDataTableHeading,
    IIITPuneAboutDataTableConstant,
    IIITPuneAboutDataTableHeading,
    IIITKotaAboutDataTableConstant,
    IIITKotaAboutDataTableHeading,
    IIITSricityAboutDataTableConstant,
    IIITSricityAboutDataTableHeading,
    IIITVadodaraAboutDataTableConstant,
    IIITVadodaraAboutDataTableHeading,
    IIITNagpurAboutDataTableConstant,
    IIITNagpurAboutDataTableHeading,
    IIITKalyaniAboutDataTableConstant,
    IIITKalyaniAboutDataTableHeading,
    IIITLucknowAboutDataTableConstant,
    IIITLucknowAboutDataTableHeading,
    IIITDharwadAboutDataTableConstant,
    IIITDharwadAboutDataTableHeading,
    IIITBhagalpurAboutDataTableConstant,
    IIITBhagalpurAboutDataTableHeading,
    IIITBhopalAboutDataTableConstant,
    IIITBhopalAboutDataTableHeading,
    IIITKottayamAboutDataTableConstant,
    IIITKottayamAboutDataTableHeading,
    IIITRanchiAboutDataTableConstant,
    IIITRanchiAboutDataTableHeading,
    IIITUnaAboutDataTableConstant,
    IIITUnaAboutDataTableHeading,
    IIITSuratAboutDataTableConstant,
    IIITSuratAboutDataTableHeading,
    IIITManipurAboutDataTableConstant,
    IIITManipurAboutDataTableHeading,
    IIITKurnoolAboutDataTableConstant,
    IIITKurnoolAboutDataTableHeading,
    IIITTiruchirapalliAboutDataTableConstant,
    IIITTiruchirapalliAboutDataTableHeading,
    IIITSonepatAboutDataTableConstant,
    IIITSonepatAboutDataTableHeading,
    IIITAgartalaAboutDataTableConstant,
    IIITAgartalaAboutDataTableHeading,
    IIITKarnatakaAboutDataTableConstant,
    IIITKarnatakaAboutDataTableHeading
    
    } from "../constants/college/IIIT/IIITAboutDataCollegeConstant";
import { 
    IIITGwaliorLocationDataTableConstant,
    IIITGwaliorLocationDataTableHeading,
    IIITHyderabadLocationDataTableConstant,
    IIITHyderabadLocationDataTableHeading,
    IIITBangaloreLocationDataTableConstant,
    IIITBangaloreLocationDataTableHeading,
    IIITGuwahatiLocationDataTableConstant,
    IIITGuwahatiLocationDataTableHeading,
    IIITJabalpurLocationDataTableConstant,
    IIITJabalpurLocationDataTableHeading,
    IIITAllahabadLocationDataTableConstant,
    IIITAllahabadLocationDataTableHeading,
    IIITKanchipuramLocationDataTableConstant,
    IIITKanchipuramLocationDataTableHeading,
    IIITBhubaneswarLocationDataTableConstant,
    IIITBhubaneswarLocationDataTableHeading,
    IIITPuneLocationDataTableConstant,
    IIITPuneLocationDataTableHeading,
    IIITKotaLocationDataTableConstant,
    IIITKotaLocationDataTableHeading,
    IIITSricityLocationDataTableConstant,
    IIITSricityLocationDataTableHeading,
    IIITVadodaraLocationDataTableConstant,
    IIITVadodaraLocationDataTableHeading,
    IIITNagpurLocationDataTableConstant,
    IIITNagpurLocationDataTableHeading,
    IIITKalyaniLocationDataTableConstant,
    IIITKalyaniLocationDataTableHeading,
    IIITLucknowLocationDataTableConstant,
    IIITLucknowLocationDataTableHeading,
    IIITDharwadLocationDataTableConstant,
    IIITDharwadLocationDataTableHeading,
    IIITBhagalpurLocationDataTableConstant,
    IIITBhagalpurLocationDataTableHeading,
    IIITBhopalLocationDataTableConstant,
    IIITBhopalLocationDataTableHeading,
    IIITKottayamLocationDataTableConstant,
    IIITKottayamLocationDataTableHeading,
    IIITRanchiLocationDataTableConstant,
    IIITRanchiLocationDataTableHeading,
    IIITUnaLocationDataTableConstant,
    IIITUnaLocationDataTableHeading,
    IIITSuratLocationDataTableConstant,
    IIITSuratLocationDataTableHeading,
    IIITManipurLocationDataTableConstant,
    IIITManipurLocationDataTableHeading,
    IIITKurnoolLocationDataTableConstant,
    IIITKurnoolLocationDataTableHeading,
    IIITTiruchirapalliLocationDataTableConstant,
    IIITTiruchirapalliLocationDataTableHeading,
    IIITSonepatLocationDataTableConstant,
    IIITSonepatLocationDataTableHeading,
    IIITAgartalaLocationDataTableConstant,
    IIITAgartalaLocationDataTableHeading,
    IIITKarnatakaLocationDataTableConstant,
    IIITKarnatakaLocationDataTableHeading
 } from "../constants/college/IIIT/IIITLocationDataCollegeConstant";
import { 
    IIITGwaliorRankingDataTableConstant,
    IIITGwaliorRankingDataTableHeading,
    IIITHyderabadRankingDataTableConstant,
    IIITHyderabadRankingDataTableHeading,
    IIITBangaloreRankingDataTableConstant,
    IIITBangaloreRankingDataTableHeading,
    IIITGuwahatiRankingDataTableConstant,
    IIITGuwahatiRankingDataTableHeading,
    IIITJabalpurRankingDataTableConstant,
    IIITJabalpurRankingDataTableHeading,
    IIITAllahabadRankingDataTableConstant,
    IIITAllahabadRankingDataTableHeading,
    IIITKanchipuramRankingDataTableConstant,
    IIITKanchipuramRankingDataTableHeading,
    IIITBhubaneswarRankingDataTableConstant,
    IIITBhubaneswarRankingDataTableHeading,
    IIITPuneRankingDataTableConstant,
    IIITPuneRankingDataTableHeading,
    IIITKotaRankingDataTableConstant,
    IIITKotaRankingDataTableHeading,
    IIITSricityRankingDataTableConstant,
    IIITSricityRankingDataTableHeading,
    IIITVadodaraRankingDataTableConstant,
    IIITVadodaraRankingDataTableHeading,
    IIITNagpurRankingDataTableConstant,
    IIITNagpurRankingDataTableHeading,
    IIITKalyaniRankingDataTableConstant,
    IIITKalyaniRankingDataTableHeading,
    IIITLucknowRankingDataTableConstant,
    IIITLucknowRankingDataTableHeading,
    IIITDharwadRankingDataTableConstant,
    IIITDharwadRankingDataTableHeading,
    IIITBhagalpurRankingDataTableConstant,
    IIITBhagalpurRankingDataTableHeading,
    IIITBhopalRankingDataTableConstant,
    IIITBhopalRankingDataTableHeading,
    IIITKottayamRankingDataTableConstant,
    IIITKottayamRankingDataTableHeading,
    IIITRanchiRankingDataTableConstant,
    IIITRanchiRankingDataTableHeading,
    IIITUnaRankingDataTableConstant,
    IIITUnaRankingDataTableHeading,
    IIITSuratRankingDataTableConstant,
    IIITSuratRankingDataTableHeading,
    IIITManipurRankingDataTableConstant,
    IIITManipurRankingDataTableHeading,
    IIITKurnoolRankingDataTableConstant,
    IIITKurnoolRankingDataTableHeading,
    IIITTiruchirapalliRankingDataTableConstant,
    IIITTiruchirapalliRankingDataTableHeading,
    IIITSonepatRankingDataTableConstant,
    IIITSonepatRankingDataTableHeading,
    IIITAgartalaRankingDataTableConstant,
    IIITAgartalaRankingDataTableHeading,
    IIITKarnatakaRankingDataTableConstant,
    IIITKarnatakaRankingDataTableHeading
 } from "../constants/college/IIIT/IIITRankingDataCollegeConstant";
import { 
    IIITGwaliorHostelFeesDataTableConstant,
    IIITGwaliorHostelFeesDataTableHeading,
    IIITGwaliorInstituteFeesDataTableConstant,
    IIITGwaliorInstituteFeesDataTableHeading,
    IIITHyderabadHostelFeesDataTableConstant,
    IIITHyderabadHostelFeesDataTableHeading,
    IIITHyderabadInstituteFeesDataTableConstant,
    IIITHyderabadInstituteFeesDataTableHeading ,

    IIITBangaloreHostelFeesDataTableConstant,
    IIITBangaloreHostelFeesDataTableHeading,
    IIITBangaloreInstituteFeesDataTableConstant,
    IIITBangaloreInstituteFeesDataTableHeading,
    IIITGuwahatiHostelFeesDataTableConstant,
    IIITGuwahatiHostelFeesDataTableHeading,
    IIITGuwahatiInstituteFeesDataTableConstant,
    IIITGuwahatiInstituteFeesDataTableHeading,
    IIITJabalpurHostelFeesDataTableConstant,
    IIITJabalpurHostelFeesDataTableHeading,
    IIITJabalpurInstituteFeesDataTableConstant,
    IIITJabalpurInstituteFeesDataTableHeading,
    IIITAllahabadHostelFeesDataTableConstant,
    IIITAllahabadHostelFeesDataTableHeading,
    IIITAllahabadInstituteFeesDataTableConstant,
    IIITAllahabadInstituteFeesDataTableHeading,
    IIITKanchipuramHostelFeesDataTableConstant,
    IIITKanchipuramHostelFeesDataTableHeading,
    IIITKanchipuramInstituteFeesDataTableConstant,
    IIITKanchipuramInstituteFeesDataTableHeading,
    IIITBhubaneswarHostelFeesDataTableConstant,
    IIITBhubaneswarHostelFeesDataTableHeading,
    IIITBhubaneswarInstituteFeesDataTableConstant,
    IIITBhubaneswarInstituteFeesDataTableHeading,
    IIITPuneHostelFeesDataTableConstant,
    IIITPuneHostelFeesDataTableHeading,
    IIITPuneInstituteFeesDataTableConstant,
    IIITPuneInstituteFeesDataTableHeading,
    IIITKotaHostelFeesDataTableConstant,
    IIITKotaHostelFeesDataTableHeading,
    IIITKotaInstituteFeesDataTableConstant,
    IIITKotaInstituteFeesDataTableHeading,
    IIITSricityHostelFeesDataTableConstant,
    IIITSricityHostelFeesDataTableHeading,
    IIITSricityInstituteFeesDataTableConstant,
    IIITSricityInstituteFeesDataTableHeading,
    IIITVadodaraHostelFeesDataTableConstant,
    IIITVadodaraHostelFeesDataTableHeading,
    IIITVadodaraInstituteFeesDataTableConstant,
    IIITVadodaraInstituteFeesDataTableHeading,
    IIITNagpurHostelFeesDataTableConstant,
    IIITNagpurHostelFeesDataTableHeading,
    IIITNagpurInstituteFeesDataTableConstant,
    IIITNagpurInstituteFeesDataTableHeading,
    IIITKalyaniHostelFeesDataTableConstant,
    IIITKalyaniHostelFeesDataTableHeading,
    IIITKalyaniInstituteFeesDataTableConstant,
    IIITKalyaniInstituteFeesDataTableHeading,
    IIITLucknowHostelFeesDataTableConstant,
    IIITLucknowHostelFeesDataTableHeading,
    IIITLucknowInstituteFeesDataTableConstant,
    IIITLucknowInstituteFeesDataTableHeading,
    IIITDharwadHostelFeesDataTableConstant,
    IIITDharwadHostelFeesDataTableHeading,
    IIITDharwadInstituteFeesDataTableConstant,
    IIITDharwadInstituteFeesDataTableHeading,
    IIITBhagalpurHostelFeesDataTableConstant,
    IIITBhagalpurHostelFeesDataTableHeading,
    IIITBhagalpurInstituteFeesDataTableConstant,
    IIITBhagalpurInstituteFeesDataTableHeading,
    IIITBhopalHostelFeesDataTableConstant,
    IIITBhopalHostelFeesDataTableHeading,
    IIITBhopalInstituteFeesDataTableConstant,
    IIITBhopalInstituteFeesDataTableHeading,
    IIITKottayamHostelFeesDataTableConstant,
    IIITKottayamHostelFeesDataTableHeading,
    IIITKottayamInstituteFeesDataTableConstant,
    IIITKottayamInstituteFeesDataTableHeading,
    IIITRanchiHostelFeesDataTableConstant,
    IIITRanchiHostelFeesDataTableHeading,
    IIITRanchiInstituteFeesDataTableConstant,
    IIITRanchiInstituteFeesDataTableHeading,
    IIITUnaHostelFeesDataTableConstant,
    IIITUnaHostelFeesDataTableHeading,
    IIITUnaInstituteFeesDataTableConstant,
    IIITUnaInstituteFeesDataTableHeading,
    IIITSuratHostelFeesDataTableConstant,
    IIITSuratHostelFeesDataTableHeading,
    IIITSuratInstituteFeesDataTableConstant,
    IIITSuratInstituteFeesDataTableHeading,
    IIITManipurHostelFeesDataTableConstant,
    IIITManipurHostelFeesDataTableHeading,
    IIITManipurInstituteFeesDataTableConstant,
    IIITManipurInstituteFeesDataTableHeading,
    IIITKurnoolHostelFeesDataTableConstant,
    IIITKurnoolHostelFeesDataTableHeading,
    IIITKurnoolInstituteFeesDataTableConstant,
    IIITKurnoolInstituteFeesDataTableHeading,
    IIITTiruchirapalliHostelFeesDataTableConstant,
    IIITTiruchirapalliHostelFeesDataTableHeading,
    IIITTiruchirapalliInstituteFeesDataTableConstant,
    IIITTiruchirapalliInstituteFeesDataTableHeading,
    IIITSonepatHostelFeesDataTableConstant,
    IIITSonepatHostelFeesDataTableHeading,
    IIITSonepatInstituteFeesDataTableConstant,
    IIITSonepatInstituteFeesDataTableHeading,
    IIITAgartalaHostelFeesDataTableConstant,
    IIITAgartalaHostelFeesDataTableHeading,
    IIITAgartalaInstituteFeesDataTableConstant,
    IIITAgartalaInstituteFeesDataTableHeading,
    IIITKarnatakaHostelFeesDataTableConstant,
    IIITKarnatakaHostelFeesDataTableHeading,
    IIITKarnatakaInstituteFeesDataTableConstant,
    IIITKarnatakaInstituteFeesDataTableHeading
} from "../constants/college/IIIT/IIITFeesDataCollegeConstant";
import { 
    IIITGwaliorSeatDataTableConstant,
    IIITGwaliorSeatDataTableHeading,
    IIITHyderabadSeatDataTableConstant,
    IIITHyderabadSeatDataTableHeading,
    IIITBangaloreSeatDataTableConstant,
    IIITBangaloreSeatDataTableHeading,
    IIITGuwahatiSeatDataTableConstant,
    IIITGuwahatiSeatDataTableHeading,
    IIITJabalpurSeatDataTableConstant,
    IIITJabalpurSeatDataTableHeading,
    IIITAllahabadSeatDataTableConstant,
    IIITAllahabadSeatDataTableHeading,
    IIITKanchipuramSeatDataTableConstant,
    IIITKanchipuramSeatDataTableHeading,
    IIITBhubaneswarSeatDataTableConstant,
    IIITBhubaneswarSeatDataTableHeading,
    IIITPuneSeatDataTableConstant,
    IIITPuneSeatDataTableHeading,
    IIITKotaSeatDataTableConstant,
    IIITKotaSeatDataTableHeading,
    IIITSricitySeatDataTableConstant,
    IIITSricitySeatDataTableHeading,
    IIITVadodaraSeatDataTableConstant,
    IIITVadodaraSeatDataTableHeading,
    IIITNagpurSeatDataTableConstant,
    IIITNagpurSeatDataTableHeading,
    IIITKalyaniSeatDataTableConstant,
    IIITKalyaniSeatDataTableHeading,
    IIITLucknowSeatDataTableConstant,
    IIITLucknowSeatDataTableHeading,
    IIITDharwadSeatDataTableConstant,
    IIITDharwadSeatDataTableHeading,
    IIITBhagalpurSeatDataTableConstant,
    IIITBhagalpurSeatDataTableHeading,
    IIITBhopalSeatDataTableConstant,
    IIITBhopalSeatDataTableHeading,
    IIITKottayamSeatDataTableConstant,
    IIITKottayamSeatDataTableHeading,
    IIITRanchiSeatDataTableConstant,
    IIITRanchiSeatDataTableHeading,
    IIITUnaSeatDataTableConstant,
    IIITUnaSeatDataTableHeading,
    IIITSuratSeatDataTableConstant,
    IIITSuratSeatDataTableHeading,
    IIITManipurSeatDataTableConstant,
    IIITManipurSeatDataTableHeading,
    IIITKurnoolSeatDataTableConstant,
    IIITKurnoolSeatDataTableHeading,
    IIITTiruchirapalliSeatDataTableConstant,
    IIITTiruchirapalliSeatDataTableHeading,
    IIITSonepatSeatDataTableConstant,
    IIITSonepatSeatDataTableHeading,
    IIITAgartalaSeatDataTableConstant,
    IIITAgartalaSeatDataTableHeading,
    IIITKarnatakaSeatDataTableConstant,
    IIITKarnatakaSeatDataTableHeading
 } from "../constants/college/IIIT/IIITSeatDataCollegeConstant";
import { 
    IIITGwaliorPlacementImageList, 
    IIITHyderabadPlacementImageList ,
    IIITBangalorePlacementImageList,
    IIITGuwahatiPlacementImageList,
    IIITJabalpurPlacementImageList,
    IIITAllahabadPlacementImageList,
    IIITKancipuramPlacementImageList,
    IIITBhubaneswarPlacementImageList,
    IIITPunePlacementImageList,
    IIITKotaPlacementImageList,
    IIITSricityPlacementImageList,
    IIITVadodaraPlacementImageList,
    IIITNagpurPlacementImageList,
    IIITKalyaniPlacementImageList,
    IIITLucknowPlacementImageList,
    IIITDharwadPlacementImageList,
    IIITBhagalpurPlacementImageList,
    IIITBhopalPlacementImageList,
    IIITKottayamPlacementImageList,
    IIITRanchiPlacementImageList,
    IIITUnaPlacementImageList,
    IIITSuratPlacementImageList,
    IIITManipurPlacementImageList,
    IIITKurnoolPlacementImageList,
    IIITTiruchirapalliPlacementImageList,
    IIITSonepatPlacementImageList,
    IIITAgartalaPlacementImageList,
    IIITKarnatakaPlacementImageList
} from "../constants/college/IIIT/IIITPlacementDataCollegeConstant";

const routes = [
    //authentication related routes
    // {
    //     path : "/login"
    //     ,
    //     component : <LoginFormPage/>
    // },
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
    /**
     * The index for the different sections of the colleges is as follows: 
     *      1. About 
     *      2. Location
     *      3. Ranking
     *      4. Admission
     *      5. Courses 
     *      6. Fees 
     *      7. Seats 
     *      8. Cutoff 
     *      9. Placement   
     */
    
    {
        path : "/college/iit/iit-bombay",
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Warangal" 
        collegePageNavigationConstants={IITBombayCollegeNavigationConstants} 
        aboutSectionContent={IITBombayCollegeAboutSectionContent} aboutSectionHeadingId={IITBombayCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITBombayCollegeNavigationConstants[0].title} aboutSectionTableContent={IITBombayAboutDataTableConstant} aboutSectionTableHeading={IITBombayAboutDataTableHeading}
        locationSectionContent={IITBombayCollegeLocationSectionContent} locationSectionHeadingId={IITBombayCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITBombayCollegeNavigationConstants[1].title} locationSectionTableContent={IITBombayLocationDataTableConstant} locationSectionTableHeading={IITBombayLocationDataTableHeading}
        rankingSectionContent={IITBombayCollegeRankingSectionContent} rankingSectionHeadingId={IITBombayCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITBombayCollegeNavigationConstants[2].title} rankingSectionTableContent={IITBombayRankingDataTableConstant} rankingSectionTableHeading={IITBombayRankingDataTableHeading}
        admissionSectionContent={IITBombayCollegeAdmissionSectionContent} admissionSectionHeadingId={IITBombayCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITBombayCollegeNavigationConstants[3].title}
        coursesSectionContent={IITBombayCollegeCoursesSectionContent} coursesSectionHeadingId={IITBombayCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITBombayCollegeNavigationConstants[4].title} coursesSectionTableContent={IITBombayCoursesTableContent} coursesSectionTableHeading={IITBombayCoursesTableHeading}
        feeSectionContent={IITBombayCollegeFeeSectionContent} feeSectionHeadingId={IITBombayCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITBombayCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IITBombayInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IITBombayInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IITBombayHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IITBombayHostelFeesDataTableHeading}
        seatSectionContent={IITBombayCollegeSeatSectionContent} seatSectionHeadingId={IITBombayCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITBombayCollegeNavigationConstants[6].title} seatSectionTableContent={IITBombaySeatDataTableConstant} seatSectionTableHeading={IITBombaySeatDataTableHeading}
        cutoffSectionContent={IITBombayCollegeCutOffSectionContent} cutoffSectionHeadingId={IITBombayCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITBombayCollegeNavigationConstants[7].title}
        placementSectionContent={IITBombayCollegePlacementSectionContent} placementSectionHeadingId={IITBombayCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITBombayCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IITBombayPlacementImageList}>

        </IITGenericCollegePage>

    },
    {
        path: "/college/iit/iit-kharagpur",
        component: <IITGenericCollegePage collegeImage={IITKharagpurCollegeImage} collegeName="Indian Institute of Technology Kharagpur"
            collegePageNavigationConstants={IITKharagpurCollegeNavigationConstants}
            aboutSectionContent={IITKharagpurCollegeAboutSectionContent} aboutSectionHeadingId={IITKharagpurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITKharagpurCollegeNavigationConstants[0].title} aboutSectionTableContent={IITKharagpurAboutDataTableConstant} aboutSectionTableHeading={IITKharagpurAboutDataTableHeading}
            locationSectionContent={IITKharagpurCollegeLocationSectionContent} locationSectionHeadingId={IITKharagpurCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITKharagpurCollegeNavigationConstants[1].title} locationSectionTableContent={IITKharagpurLocationDataTableConstant} locationSectionTableHeading={IITKharagpurLocationDataTableHeading}
            rankingSectionContent={IITKharagpurCollegeRankingSectionContent} rankingSectionHeadingId={IITKharagpurCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITKharagpurCollegeNavigationConstants[2].title} rankingSectionTableContent={IITKharagpurRankingDataTableConstant} rankingSectionTableHeading={IITKharagpurRankingDataTableHeading}
            admissionSectionContent={IITKharagpurCollegeAdmissionSectionContent} admissionSectionHeadingId={IITKharagpurCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITKharagpurCollegeNavigationConstants[3].title}
            coursesSectionContent={IITKharagpurCollegeCoursesSectionContent} coursesSectionHeadingId={IITKharagpurCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITKharagpurCollegeNavigationConstants[4].title} coursesSectionTableContent={IITKharagpurCoursesTableContent} coursesSectionTableHeading={IITKharagpurCoursesTableHeading}
            feeSectionContent={IITKharagpurCollegeFeeSectionContent} feeSectionHeadingId={IITKharagpurCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITKharagpurCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IITKharagpurInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IITKharagpurInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IITKharagpurHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IITKharagpurHostelFeesDataTableHeading}
            seatSectionContent={IITKharagpurCollegeSeatSectionContent} seatSectionHeadingId={IITKharagpurCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITKharagpurCollegeNavigationConstants[6].title} seatSectionTableContent={IITKharagpurSeatDataTableConstant} seatSectionTableHeading={IITKharagpurSeatDataTableHeading}
            cutoffSectionContent={IITKharagpurCollegeCutOffSectionContent} cutoffSectionHeadingId={IITKharagpurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITKharagpurCollegeNavigationConstants[7].title}
            placementSectionContent={IITKharagpurCollegePlacementSectionContent} placementSectionHeadingId={IITKharagpurCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITKharagpurCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IITKharagpurPlacementImageList}>
        </IITGenericCollegePage>
    },
    {
        path: "/college/iit/iit-madras",
        component: <IITGenericCollegePage collegeImage={IITMadrasCollegeImage} collegeName="Indian Institute of Technology Madras"
            collegePageNavigationConstants={IITMadrasCollegeNavigationConstants}
            aboutSectionContent={IITMadrasCollegeAboutSectionContent} aboutSectionHeadingId={IITMadrasCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITMadrasCollegeNavigationConstants[0].title} aboutSectionTableContent={IITMadrasAboutDataTableConstant} aboutSectionTableHeading={IITMadrasAboutDataTableHeading}
            locationSectionContent={IITMadrasCollegeLocationSectionContent} locationSectionHeadingId={IITMadrasCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITMadrasCollegeNavigationConstants[1].title} locationSectionTableContent={IITMadrasLocationDataTableConstant} locationSectionTableHeading={IITMadrasLocationDataTableHeading}
            rankingSectionContent={IITMadrasCollegeRankingSectionContent} rankingSectionHeadingId={IITMadrasCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITMadrasCollegeNavigationConstants[2].title} rankingSectionTableContent={IITMadrasRankingDataTableConstant} rankingSectionTableHeading={IITMadrasRankingDataTableHeading}
            admissionSectionContent={IITMadrasCollegeAdmissionSectionContent} admissionSectionHeadingId={IITMadrasCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITMadrasCollegeNavigationConstants[3].title}
            coursesSectionContent={IITMadrasCollegeCoursesSectionContent} coursesSectionHeadingId={IITMadrasCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITMadrasCollegeNavigationConstants[4].title} coursesSectionTableContent={IITMadrasCoursesTableContent} coursesSectionTableHeading={IITMadrasCoursesTableHeading}
            feeSectionContent={IITMadrasCollegeFeeSectionContent} feeSectionHeadingId={IITMadrasCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITMadrasCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IITMadrasInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IITMadrasInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IITMadrasHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IITMadrasHostelFeesDataTableHeading}
            seatSectionContent={IITMadrasCollegeSeatSectionContent} seatSectionHeadingId={IITMadrasCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITMadrasCollegeNavigationConstants[6].title} seatSectionTableContent={IITMadrasSeatDataTableConstant} seatSectionTableHeading={IITMadrasSeatDataTableHeading}
            cutoffSectionContent={IITMadrasCollegeCutOffSectionContent} cutoffSectionHeadingId={IITMadrasCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITMadrasCollegeNavigationConstants[7].title}
            placementSectionContent={IITMadrasCollegePlacementSectionContent} placementSectionHeadingId={IITMadrasCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITMadrasCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IITMadrasPlacementImageList}>
        </IITGenericCollegePage>
    },
    {
        path: "/college/iit/iit-kanpur",
        component: <IITGenericCollegePage collegeImage={IITKanpurCollegeImage} collegeName="Indian Institute of Technology Kanpur"
            collegePageNavigationConstants={IITKanpurCollegeNavigationConstants}
            aboutSectionContent={IITKanpurCollegeAboutSectionContent} aboutSectionHeadingId={IITKanpurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITKanpurCollegeNavigationConstants[0].title} aboutSectionTableContent={IITKanpurAboutDataTableConstant} aboutSectionTableHeading={IITKanpurAboutDataTableHeading}
            locationSectionContent={IITKanpurCollegeLocationSectionContent} locationSectionHeadingId={IITKanpurCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITKanpurCollegeNavigationConstants[1].title} locationSectionTableContent={IITKanpurLocationDataTableConstant} locationSectionTableHeading={IITKanpurLocationDataTableHeading}
            rankingSectionContent={IITKanpurCollegeRankingSectionContent} rankingSectionHeadingId={IITKanpurCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITKanpurCollegeNavigationConstants[2].title} rankingSectionTableContent={IITKanpurRankingDataTableConstant} rankingSectionTableHeading={IITKanpurRankingDataTableHeading}
            admissionSectionContent={IITKanpurCollegeAdmissionSectionContent} admissionSectionHeadingId={IITKanpurCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITKanpurCollegeNavigationConstants[3].title}
            coursesSectionContent={IITKanpurCollegeCoursesSectionContent} coursesSectionHeadingId={IITKanpurCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITKanpurCollegeNavigationConstants[4].title} coursesSectionTableContent={IITKanpurCoursesTableContent} coursesSectionTableHeading={IITKanpurCoursesTableHeading}
            feeSectionContent={IITKanpurCollegeFeeSectionContent} feeSectionHeadingId={IITKanpurCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITKanpurCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IITKanpurInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IITKanpurInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IITKanpurHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IITKanpurHostelFeesDataTableHeading}
            seatSectionContent={IITKanpurCollegeSeatSectionContent} seatSectionHeadingId={IITKanpurCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITKanpurCollegeNavigationConstants[6].title} seatSectionTableContent={IITKanpurSeatDataTableConstant} seatSectionTableHeading={IITKanpurSeatDataTableHeading}
            cutoffSectionContent={IITKanpurCollegeCutOffSectionContent} cutoffSectionHeadingId={IITKanpurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITKanpurCollegeNavigationConstants[7].title}
            placementSectionContent={IITKanpurCollegePlacementSectionContent} placementSectionHeadingId={IITKanpurCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITKanpurCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IITKanpurPlacementImageList}>
        </IITGenericCollegePage>
    },

    {
        path: "/college/iit/iit-delhi",
        component: <IITGenericCollegePage collegeImage={IITDelhiCollegeImage} collegeName="Indian Institute of Technology Delhi"
            collegePageNavigationConstants={IITDelhiCollegeNavigationConstants}
            aboutSectionContent={IITDelhiCollegeAboutSectionContent} aboutSectionHeadingId={IITDelhiCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITDelhiCollegeNavigationConstants[0].title} aboutSectionTableContent={IITDelhiAboutDataTableConstant} aboutSectionTableHeading={IITDelhiAboutDataTableHeading}
            locationSectionContent={IITDelhiCollegeLocationSectionContent} locationSectionHeadingId={IITDelhiCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITDelhiCollegeNavigationConstants[1].title} locationSectionTableContent={IITDelhiLocationDataTableConstant} locationSectionTableHeading={IITDelhiLocationDataTableHeading}
            rankingSectionContent={IITDelhiCollegeRankingSectionContent} rankingSectionHeadingId={IITDelhiCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITDelhiCollegeNavigationConstants[2].title} rankingSectionTableContent={IITDelhiRankingDataTableConstant} rankingSectionTableHeading={IITDelhiRankingDataTableHeading}
            admissionSectionContent={IITDelhiCollegeAdmissionSectionContent} admissionSectionHeadingId={IITDelhiCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITDelhiCollegeNavigationConstants[3].title}
            coursesSectionContent={IITDelhiCollegeCoursesSectionContent} coursesSectionHeadingId={IITDelhiCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITDelhiCollegeNavigationConstants[4].title} coursesSectionTableContent={IITDelhiCoursesTableContent} coursesSectionTableHeading={IITDelhiCoursesTableHeading}
            feeSectionContent={IITDelhiCollegeFeeSectionContent} feeSectionHeadingId={IITDelhiCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITDelhiCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IITDelhiInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IITDelhiInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IITDelhiHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IITDelhiHostelFeesDataTableHeading}
            seatSectionContent={IITDelhiCollegeSeatSectionContent} seatSectionHeadingId={IITDelhiCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITDelhiCollegeNavigationConstants[6].title} seatSectionTableContent={IITDelhiSeatDataTableConstant} seatSectionTableHeading={IITDelhiSeatDataTableHeading}
            cutoffSectionContent={IITDelhiCollegeCutOffSectionContent} cutoffSectionHeadingId={IITDelhiCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITDelhiCollegeNavigationConstants[7].title}
            placementSectionContent={IITDelhiCollegePlacementSectionContent} placementSectionHeadingId={IITDelhiCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITDelhiCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IITDelhiPlacementImageList}>
        </IITGenericCollegePage>
    },
    {
        path: "/college/iit/iit-guwahati",
        component: <IITGenericCollegePage collegeImage={IITGuwahatiCollegeImage} collegeName="Indian Institute of Technology Guwahati"
            collegePageNavigationConstants={IITGuwahatiCollegeNavigationConstants}
            aboutSectionContent={IITGuwahatiCollegeAboutSectionContent} aboutSectionHeadingId={IITGuwahatiCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITGuwahatiCollegeNavigationConstants[0].title} aboutSectionTableContent={IITGuwahatiAboutDataTableConstant} aboutSectionTableHeading={IITGuwahatiAboutDataTableHeading}
            locationSectionContent={IITGuwahatiCollegeLocationSectionContent} locationSectionHeadingId={IITGuwahatiCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITGuwahatiCollegeNavigationConstants[1].title} locationSectionTableContent={IITGuwahatiLocationDataTableConstant} locationSectionTableHeading={IITGuwahatiLocationDataTableHeading}
            rankingSectionContent={IITGuwahatiCollegeRankingSectionContent} rankingSectionHeadingId={IITGuwahatiCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITGuwahatiCollegeNavigationConstants[2].title} rankingSectionTableContent={IITGuwahatiRankingDataTableConstant} rankingSectionTableHeading={IITGuwahatiRankingDataTableHeading}
            admissionSectionContent={IITGuwahatiCollegeAdmissionSectionContent} admissionSectionHeadingId={IITGuwahatiCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITGuwahatiCollegeNavigationConstants[3].title}
            coursesSectionContent={IITGuwahatiCollegeCoursesSectionContent} coursesSectionHeadingId={IITGuwahatiCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITGuwahatiCollegeNavigationConstants[4].title} coursesSectionTableContent={IITGuwahatiCoursesTableContent} coursesSectionTableHeading={IITGuwahatiCoursesTableHeading}
            feeSectionContent={IITGuwahatiCollegeFeeSectionContent} feeSectionHeadingId={IITGuwahatiCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITGuwahatiCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IITGuwahatiInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IITGuwahatiInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IITGuwahatiHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IITGuwahatiHostelFeesDataTableHeading}
            seatSectionContent={IITGuwahatiCollegeSeatSectionContent} seatSectionHeadingId={IITGuwahatiCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITGuwahatiCollegeNavigationConstants[6].title} seatSectionTableContent={IITGuwahatiSeatDataTableConstant} seatSectionTableHeading={IITGuwahatiSeatDataTableHeading}
            cutoffSectionContent={IITGuwahatiCollegeCutOffSectionContent} cutoffSectionHeadingId={IITGuwahatiCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITGuwahatiCollegeNavigationConstants[7].title}
            placementSectionContent={IITGuwahatiCollegePlacementSectionContent} placementSectionHeadingId={IITGuwahatiCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITGuwahatiCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IITGuwahatiPlacementImageList}>
        </IITGenericCollegePage>
    },
    {
        path: "/college/iit/iit-roorkee",
        component: <IITGenericCollegePage collegeImage={IITRoorkeeCollegeImage} collegeName="Indian Institute of Technology Roorkee"
            collegePageNavigationConstants={IITRoorkeeCollegeNavigationConstants}
            aboutSectionContent={IITRoorkeeCollegeAboutSectionContent} aboutSectionHeadingId={IITRoorkeeCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITRoorkeeCollegeNavigationConstants[0].title} aboutSectionTableContent={IITRoorkeeAboutDataTableConstant} aboutSectionTableHeading={IITRoorkeeAboutDataTableHeading}
            locationSectionContent={IITRoorkeeCollegeLocationSectionContent} locationSectionHeadingId={IITRoorkeeCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITRoorkeeCollegeNavigationConstants[1].title} locationSectionTableContent={IITRoorkeeLocationDataTableConstant} locationSectionTableHeading={IITRoorkeeLocationDataTableHeading}
            rankingSectionContent={IITRoorkeeCollegeRankingSectionContent} rankingSectionHeadingId={IITRoorkeeCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITRoorkeeCollegeNavigationConstants[2].title} rankingSectionTableContent={IITRoorkeeRankingDataTableConstant} rankingSectionTableHeading={IITRoorkeeRankingDataTableHeading}
            admissionSectionContent={IITRoorkeeCollegeAdmissionSectionContent} admissionSectionHeadingId={IITRoorkeeCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITRoorkeeCollegeNavigationConstants[3].title}
            coursesSectionContent={IITRoorkeeCollegeCoursesSectionContent} coursesSectionHeadingId={IITRoorkeeCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITRoorkeeCollegeNavigationConstants[4].title} coursesSectionTableContent={IITRoorkeeCoursesTableContent} coursesSectionTableHeading={IITRoorkeeCoursesTableHeading}
            feeSectionContent={IITRoorkeeCollegeFeeSectionContent} feeSectionHeadingId={IITRoorkeeCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITRoorkeeCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IITRoorkeeInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IITRoorkeeInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IITRoorkeeHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IITRoorkeeHostelFeesDataTableHeading}
            seatSectionContent={IITRoorkeeCollegeSeatSectionContent} seatSectionHeadingId={IITRoorkeeCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITRoorkeeCollegeNavigationConstants[6].title} seatSectionTableContent={IITRoorkeeSeatDataTableConstant} seatSectionTableHeading={IITRoorkeeSeatDataTableHeading}
            cutoffSectionContent={IITRoorkeeCollegeCutOffSectionContent} cutoffSectionHeadingId={IITRoorkeeCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITRoorkeeCollegeNavigationConstants[7].title}
            placementSectionContent={IITRoorkeeCollegePlacementSectionContent} placementSectionHeadingId={IITRoorkeeCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITRoorkeeCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IITRoorkeePlacementImageList}>
        </IITGenericCollegePage>
    },
    {
        path: "/college/iit/iit-ropar",
        component: <IITGenericCollegePage collegeImage={IITGoaCollegeImage} collegeName="Indian Institute of Technology Ropar"
            collegePageNavigationConstants={IITRoparCollegeNavigationConstants}
            aboutSectionContent={IITRoparCollegeAboutSectionContent} aboutSectionHeadingId={IITRoparCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITRoparCollegeNavigationConstants[0].title} aboutSectionTableContent={IITRoparAboutDataTableConstant} aboutSectionTableHeading={IITRoparAboutDataTableHeading}
            locationSectionContent={IITRoparCollegeLocationSectionContent} locationSectionHeadingId={IITRoparCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITRoparCollegeNavigationConstants[1].title} locationSectionTableContent={IITRoparLocationDataTableConstant} locationSectionTableHeading={IITRoparLocationDataTableHeading}
            rankingSectionContent={IITRoparCollegeRankingSectionContent} rankingSectionHeadingId={IITRoparCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITRoparCollegeNavigationConstants[2].title} rankingSectionTableContent={IITRoparRankingDataTableConstant} rankingSectionTableHeading={IITRoparRankingDataTableHeading}
            admissionSectionContent={IITRoparCollegeAdmissionSectionContent} admissionSectionHeadingId={IITRoparCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITRoparCollegeNavigationConstants[3].title}
            coursesSectionContent={IITRoparCollegeCoursesSectionContent} coursesSectionHeadingId={IITRoparCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITRoparCollegeNavigationConstants[4].title} coursesSectionTableContent={IITRoparCoursesTableContent} coursesSectionTableHeading={IITRoparCoursesTableHeading}
            feeSectionContent={IITRoparCollegeFeeSectionContent} feeSectionHeadingId={IITRoparCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITRoparCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IITRoparInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IITRoparInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IITRoparHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IITRoparHostelFeesDataTableHeading}
            seatSectionContent={IITRoparCollegeSeatSectionContent} seatSectionHeadingId={IITRoparCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITRoparCollegeNavigationConstants[6].title} seatSectionTableContent={IITRoparSeatDataTableConstant} seatSectionTableHeading={IITRoparSeatDataTableHeading}
            cutoffSectionContent={IITRoparCollegeCutOffSectionContent} cutoffSectionHeadingId={IITRoparCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITRoparCollegeNavigationConstants[7].title}
            placementSectionContent={IITRoparCollegePlacementSectionContent} placementSectionHeadingId={IITRoparCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITRoparCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IITRoparPlacementImageList}>
        </IITGenericCollegePage>
    },
    {
        path: "/college/iit/iit-bhubaneswar",
        component: <IITGenericCollegePage collegeImage={IITBHUCollegeImage} collegeName="Indian Institute of Technology Bhubaneswar"
            collegePageNavigationConstants={IITBhubaneshwarCollegeNavigationConstants}
            aboutSectionContent={IITBhubaneshwarCollegeAboutSectionContent} aboutSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[0].title} aboutSectionTableContent={IITBhubaneswarAboutDataTableConstant} aboutSectionTableHeading={IITBhubaneswarAboutDataTableHeading}
            locationSectionContent={IITBhubaneswarCollegeLocationSectionContent} locationSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[1].title} locationSectionTableContent={IITBhubaneswarLocationDataTableConstant} locationSectionTableHeading={IITBhubaneswarLocationDataTableHeading}
            rankingSectionContent={IITBhubaneswarCollegeRankingSectionContent} rankingSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[2].title} rankingSectionTableContent={IITBhubaneshwarRankingDataTableConstant} rankingSectionTableHeading={IITBhubaneshwarRankingDataTableHeading}
            admissionSectionContent={IITBhubaneshwarCollegeAdmissionSectionContent} admissionSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[3].title}
            coursesSectionContent={IITBhubaneshwarCollegeCoursesSectionContent} coursesSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[4].title} coursesSectionTableContent={IITBhubaneswarCoursesTableContent} coursesSectionTableHeading={IITBhubaneswarCoursesTableHeading}
            feeSectionContent={IITBhubaneshwarCollegeFeeSectionContent} feeSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IITBhubaneshwarInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IITBhubaneshwarInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IITBhubaneshwarHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IITBhubaneshwarHostelFeesDataTableHeading}
            seatSectionContent={IITBhubaneswarCollegeSeatSectionContent} seatSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[6].title} seatSectionTableContent={IITBhubaneshwarSeatDataTableConstant} seatSectionTableHeading={IITBhubaneshwarSeatDataTableHeading}
            cutoffSectionContent={IITBhubaneshwarCollegeCutOffSectionContent} cutoffSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[7].title}
            placementSectionContent={IITBhubaneshwarCollegePlacementSectionContent} placementSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IITBhubaneshwarPlacementImageList}>
        </IITGenericCollegePage>
    },
    {
        path: "/college/iit/iit-gandhinagar",
        component: <IITGenericCollegePage collegeImage={IITGandhinagarCollegeImage} collegeName="Indian Institute of Technology Gandhinagar"
            collegePageNavigationConstants={IITGandhinagarCollegeNavigationConstants}
            aboutSectionContent={IITGandhinagarCollegeAboutSectionContent} aboutSectionHeadingId={IITGandhinagarCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITGandhinagarCollegeNavigationConstants[0].title} aboutSectionTableContent={IITGandhinagarAboutDataTableConstant} aboutSectionTableHeading={IITGandhinagarAboutDataTableHeading}
            locationSectionContent={IITGandhinagarCollegeLocationSectionContent} locationSectionHeadingId={IITGandhinagarCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITGandhinagarCollegeNavigationConstants[1].title} locationSectionTableContent={IITGandhinagarLocationDataTableConstant} locationSectionTableHeading={IITGandhinagarLocationDataTableHeading}
            rankingSectionContent={IITGandhinagarCollegeRankingSectionContent} rankingSectionHeadingId={IITGandhinagarCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITGandhinagarCollegeNavigationConstants[2].title} rankingSectionTableContent={IITGandhinagarRankingDataTableConstant} rankingSectionTableHeading={IITGandhinagarRankingDataTableHeading}
            admissionSectionContent={IITGandhinagarCollegeAdmissionSectionContent} admissionSectionHeadingId={IITGandhinagarCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITGandhinagarCollegeNavigationConstants[3].title}
            coursesSectionContent={IITGandhinagarCollegeCoursesSectionContent} coursesSectionHeadingId={IITGandhinagarCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITGandhinagarCollegeNavigationConstants[4].title} coursesSectionTableContent={IITGandhinagarCoursesTableContent} coursesSectionTableHeading={IITGandhinagarCoursesTableHeading}
            feeSectionContent={IITGandhinagarCollegeFeeSectionContent} feeSectionHeadingId={IITGandhinagarCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITGandhinagarCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IITGandhinagarInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IITGandhinagarInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IITGandhinagarHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IITGandhinagarHostelFeesDataTableHeading}
            seatSectionContent={IITGandhinagarCollegeSeatSectionContent} seatSectionHeadingId={IITGandhinagarCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITGandhinagarCollegeNavigationConstants[6].title} seatSectionTableContent={IITGandhinagarSeatDataTableConstant} seatSectionTableHeading={IITGandhinagarSeatDataTableHeading}
            cutoffSectionContent={IITGandhinagarCollegeCutOffSectionContent} cutoffSectionHeadingId={IITGandhinagarCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITGandhinagarCollegeNavigationConstants[7].title}
            placementSectionContent={IITGandhinagarCollegePlacementSectionContent} placementSectionHeadingId={IITGandhinagarCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITGandhinagarCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IITGandhinagarPlacementImageList}>
        </IITGenericCollegePage>
    },
    {
        path: "/college/iit/iit-hyderabad",
        component: <IITGenericCollegePage collegeImage={IITHyderabadCollegeImage} collegeName="Indian Institute of Technology Hyderabad"
            collegePageNavigationConstants={IITHyderabadCollegeNavigationConstants}
            aboutSectionContent={IITHyderabadCollegeAboutSectionContent} aboutSectionHeadingId={IITHyderabadCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITHyderabadCollegeNavigationConstants[0].title} aboutSectionTableContent={IITHyderabadAboutDataTableConstant} aboutSectionTableHeading={IITHyderabadAboutDataTableHeading}
            locationSectionContent={IITHyderabadCollegeLocationSectionContent} locationSectionHeadingId={IITHyderabadCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITHyderabadCollegeNavigationConstants[1].title} locationSectionTableContent={IITHyderabadLocationDataTableConstant} locationSectionTableHeading={IITHyderabadLocationDataTableHeading}
            rankingSectionContent={IITHyderabadCollegeRankingSectionContent} rankingSectionHeadingId={IITHyderabadCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITHyderabadCollegeNavigationConstants[2].title} rankingSectionTableContent={IITHyderabadRankingDataTableConstant} rankingSectionTableHeading={IITHyderabadRankingDataTableHeading}
            admissionSectionContent={IITHyderabadCollegeAdmissionSectionContent} admissionSectionHeadingId={IITHyderabadCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITHyderabadCollegeNavigationConstants[3].title}
            coursesSectionContent={IITHyderabadCollegeCoursesSectionContent} coursesSectionHeadingId={IITHyderabadCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITHyderabadCollegeNavigationConstants[4].title} coursesSectionTableContent={IITHyderabadCoursesTableContent} coursesSectionTableHeading={IITHyderabadCoursesTableHeading}
            feeSectionContent={IITHyderabadCollegeFeeSectionContent} feeSectionHeadingId={IITHyderabadCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITHyderabadCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IITHyderabadInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IITHyderabadInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IITHyderabadHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IITHyderabadHostelFeesDataTableHeading}
            seatSectionContent={IITHyderabadCollegeSeatSectionContent} seatSectionHeadingId={IITHyderabadCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITHyderabadCollegeNavigationConstants[6].title} seatSectionTableContent={IITHyderabadSeatDataTableConstant} seatSectionTableHeading={IITHyderabadSeatDataTableHeading}
            cutoffSectionContent={IITHyderabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IITHyderabadCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITHyderabadCollegeNavigationConstants[7].title}
            placementSectionContent={IITHyderabadCollegePlacementSectionContent} placementSectionHeadingId={IITHyderabadCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITHyderabadCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IITHyderabadPlacementImageList}>
        </IITGenericCollegePage>
    },
    {
        path: "/college/iit/iit-jodhpur",
        component: <IITGenericCollegePage collegeImage={IITJodhpurCollegeImage} collegeName="Indian Institute of Technology Jodhpur"
            collegePageNavigationConstants={IITJodhpurCollegeNavigationConstants}
            aboutSectionContent={IITJodhpurCollegeAboutSectionContent} aboutSectionHeadingId={IITJodhpurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITJodhpurCollegeNavigationConstants[0].title} aboutSectionTableContent={IITJodhpurAboutDataTableConstant} aboutSectionTableHeading={IITJodhpurAboutDataTableHeading}
            locationSectionContent={IITJodhpurCollegeLocationSectionContent} locationSectionHeadingId={IITJodhpurCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITJodhpurCollegeNavigationConstants[1].title} locationSectionTableContent={IITJodhpurLocationDataTableConstant} locationSectionTableHeading={IITJodhpurLocationDataTableHeading}
            rankingSectionContent={IITJodhpurCollegeRankingSectionContent} rankingSectionHeadingId={IITJodhpurCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITJodhpurCollegeNavigationConstants[2].title} rankingSectionTableContent={IITJodhpurRankingDataTableConstant} rankingSectionTableHeading={IITJodhpurRankingDataTableHeading}
            admissionSectionContent={IITJodhpurCollegeAdmissionSectionContent} admissionSectionHeadingId={IITJodhpurCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITJodhpurCollegeNavigationConstants[3].title}
            coursesSectionContent={IITJodhpurCollegeCoursesSectionContent} coursesSectionHeadingId={IITJodhpurCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITJodhpurCollegeNavigationConstants[4].title} coursesSectionTableContent={IITJodhpurCoursesTableContent} coursesSectionTableHeading={IITJodhpurCoursesTableHeading}
            feeSectionContent={IITJodhpurCollegeFeeSectionContent} feeSectionHeadingId={IITJodhpurCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITJodhpurCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IITJodhpurInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IITJodhpurInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IITJodhpurHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IITJodhpurHostelFeesDataTableHeading}
            seatSectionContent={IITJodhpurCollegeSeatSectionContent} seatSectionHeadingId={IITJodhpurCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITJodhpurCollegeNavigationConstants[6].title} seatSectionTableContent={IITJodhpurSeatDataTableConstant} seatSectionTableHeading={IITJodhpurSeatDataTableHeading}
            cutoffSectionContent={IITJodhpurCollegeCutOffSectionContent} cutoffSectionHeadingId={IITJodhpurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITJodhpurCollegeNavigationConstants[7].title}
            placementSectionContent={IITJodhpurCollegePlacementSectionContent} placementSectionHeadingId={IITJodhpurCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITJodhpurCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IITJodhpurPlacementImageList}>
        </IITGenericCollegePage>
    }
    ,
    {
        path: "/college/iit/iit-patna",
        component: <IITGenericCollegePage collegeImage={IITPatnaCollegeImage} collegeName="Indian Institute of Technology Patna"
            collegePageNavigationConstants={IITPatnaCollegeNavigationConstants}
            aboutSectionContent={IITPatnaCollegeAboutSectionContent} aboutSectionHeadingId={IITPatnaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITPatnaCollegeNavigationConstants[0].title} aboutSectionTableContent={IITPatnaAboutDataTableConstant} aboutSectionTableHeading={IITPatnaAboutDataTableHeading}
            locationSectionContent={IITPatnaCollegeLocationSectionContent} locationSectionHeadingId={IITPatnaCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITPatnaCollegeNavigationConstants[1].title} locationSectionTableContent={IITPatnaLocationDataTableConstant} locationSectionTableHeading={IITPatnaLocationDataTableHeading}
            rankingSectionContent={IITPatnaCollegeRankingSectionContent} rankingSectionHeadingId={IITPatnaCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITPatnaCollegeNavigationConstants[2].title} rankingSectionTableContent={IITPatnaRankingDataTableConstant} rankingSectionTableHeading={IITPatnaRankingDataTableHeading}
            admissionSectionContent={IITPatnaCollegeAdmissionSectionContent} admissionSectionHeadingId={IITPatnaCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITPatnaCollegeNavigationConstants[3].title}
            coursesSectionContent={IITPatnaCollegeCoursesSectionContent} coursesSectionHeadingId={IITPatnaCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITPatnaCollegeNavigationConstants[4].title} coursesSectionTableContent={IITPatnaCoursesTableContent} coursesSectionTableHeading={IITPatnaCoursesTableHeading}
            feeSectionContent={IITPatnaCollegeFeeSectionContent} feeSectionHeadingId={IITPatnaCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITPatnaCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IITPatnaInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IITPatnaInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IITPatnaHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IITPatnaHostelFeesDataTableHeading}
            seatSectionContent={IITPatnaCollegeSeatSectionContent} seatSectionHeadingId={IITPatnaCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITPatnaCollegeNavigationConstants[6].title} seatSectionTableContent={IITPatnaSeatDataTableConstant} seatSectionTableHeading={IITPatnaSeatDataTableHeading}
            cutoffSectionContent={IITPatnaCollegeCutOffSectionContent} cutoffSectionHeadingId={IITPatnaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITPatnaCollegeNavigationConstants[7].title}
            placementSectionContent={IITPatnaCollegePlacementSectionContent} placementSectionHeadingId={IITPatnaCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITPatnaCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IITPatnaPlacementImageList}>
        </IITGenericCollegePage>
    },
    {
        path: "/college/iit/iit-indore",
        component: <IITGenericCollegePage collegeImage={IITIndoreCollegeImage} collegeName="Indian Institute of Technology Indore"
            collegePageNavigationConstants={IITIndoreCollegeNavigationConstants}
            aboutSectionContent={IITIndoreCollegeAboutSectionContent} aboutSectionHeadingId={IITIndoreCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITIndoreCollegeNavigationConstants[0].title} aboutSectionTableContent={IITIndoreAboutDataTableConstant} aboutSectionTableHeading={IITIndoreAboutDataTableHeading}
            locationSectionContent={IITIndoreCollegeLocationSectionContent} locationSectionHeadingId={IITIndoreCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITIndoreCollegeNavigationConstants[1].title} locationSectionTableContent={IITIndoreLocationDataTableConstant} locationSectionTableHeading={IITIndoreLocationDataTableHeading}
            rankingSectionContent={IITIndoreCollegeRankingSectionContent} rankingSectionHeadingId={IITIndoreCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITIndoreCollegeNavigationConstants[2].title} rankingSectionTableContent={IITIndoreRankingDataTableConstant} rankingSectionTableHeading={IITIndoreRankingDataTableHeading}
            admissionSectionContent={IITIndoreCollegeAdmissionSectionContent} admissionSectionHeadingId={IITIndoreCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITIndoreCollegeNavigationConstants[3].title}
            coursesSectionContent={IITIndoreCollegeCoursesSectionContent} coursesSectionHeadingId={IITIndoreCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITIndoreCollegeNavigationConstants[4].title} coursesSectionTableContent={IITIndoreCoursesTableContent} coursesSectionTableHeading={IITIndoreCoursesTableHeading}
            feeSectionContent={IITIndoreCollegeFeeSectionContent} feeSectionHeadingId={IITIndoreCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITIndoreCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IITIndoreInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IITIndoreInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IITIndoreHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IITIndoreHostelFeesDataTableHeading}
            seatSectionContent={IITIndoreCollegeSeatSectionContent} seatSectionHeadingId={IITIndoreCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITIndoreCollegeNavigationConstants[6].title} seatSectionTableContent={IITIndoreSeatDataTableConstant} seatSectionTableHeading={IITIndoreSeatDataTableHeading}
            cutoffSectionContent={IITIndoreCollegeCutOffSectionContent} cutoffSectionHeadingId={IITIndoreCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITIndoreCollegeNavigationConstants[7].title}
            placementSectionContent={IITIndoreCollegePlacementSectionContent} placementSectionHeadingId={IITIndoreCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITIndoreCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IITIndorePlacementImageList}>
        </IITGenericCollegePage>
    },
    {
        path: "/college/iit/iit-mandi",
        component: <IITGenericCollegePage collegeImage={IITMandiCollegeImage} collegeName="Indian Institute of Technology Mandi"
            collegePageNavigationConstants={IITMandiCollegeNavigationConstants}
            aboutSectionContent={IITMandiCollegeAboutSectionContent} aboutSectionHeadingId={IITMandiCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITMandiCollegeNavigationConstants[0].title} aboutSectionTableContent={IITMandiAboutDataTableConstant} aboutSectionTableHeading={IITMandiAboutDataTableHeading}
            locationSectionContent={IITMandiCollegeLocationSectionContent} locationSectionHeadingId={IITMandiCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITMandiCollegeNavigationConstants[1].title} locationSectionTableContent={IITMandiLocationDataTableConstant} locationSectionTableHeading={IITMandiLocationDataTableHeading}
            rankingSectionContent={IITMandiCollegeRankingSectionContent} rankingSectionHeadingId={IITMandiCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITMandiCollegeNavigationConstants[2].title} rankingSectionTableContent={IITMandiRankingDataTableConstant} rankingSectionTableHeading={IITMandiRankingDataTableHeading}
            admissionSectionContent={IITMandiCollegeAdmissionSectionContent} admissionSectionHeadingId={IITMandiCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITMandiCollegeNavigationConstants[3].title}
            coursesSectionContent={IITMandiCollegeCoursesSectionContent} coursesSectionHeadingId={IITMandiCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITMandiCollegeNavigationConstants[4].title} coursesSectionTableContent={IITMandiCoursesTableContent} coursesSectionTableHeading={IITMandiCoursesTableHeading}
            feeSectionContent={IITMandiCollegeFeeSectionContent} feeSectionHeadingId={IITMandiCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITMandiCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IITMandiInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IITMandiInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IITMandiHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IITMandiHostelFeesDataTableHeading}
            seatSectionContent={IITMandiCollegeSeatSectionContent} seatSectionHeadingId={IITMandiCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITMandiCollegeNavigationConstants[6].title} seatSectionTableContent={IITMandiSeatDataTableConstant} seatSectionTableHeading={IITMandiSeatDataTableHeading}
            cutoffSectionContent={IITMandiCollegeCutOffSectionContent} cutoffSectionHeadingId={IITMandiCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITMandiCollegeNavigationConstants[7].title}
            placementSectionContent={IITMandiCollegePlacementSectionContent} placementSectionHeadingId={IITMandiCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITMandiCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IITMandiPlacementImageList}>
        </IITGenericCollegePage>
    },
    {
        path: "/college/iit/iit-bhu",
        component: <IITGenericCollegePage collegeImage={IITBHUCollegeImage} collegeName="Indian Institute of Technology BHU"
            collegePageNavigationConstants={IITBHUCollegeNavigationConstants}
            aboutSectionContent={IITBHUCollegeAboutSectionContent} aboutSectionHeadingId={IITBHUCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITBHUCollegeNavigationConstants[0].title} aboutSectionTableContent={IITBHUAboutDataTableConstant} aboutSectionTableHeading={IITBHUAboutDataTableHeading}
            locationSectionContent={IITBHUCollegeLocationSectionContent} locationSectionHeadingId={IITBHUCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITBHUCollegeNavigationConstants[1].title} locationSectionTableContent={IITBHULocationDataTableConstant} locationSectionTableHeading={IITBHULocationDataTableHeading}
            rankingSectionContent={IITBHUCollegeRankingSectionContent} rankingSectionHeadingId={IITBHUCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITBHUCollegeNavigationConstants[2].title} rankingSectionTableContent={IITBHURankingDataTableConstant} rankingSectionTableHeading={IITBHURankingDataTableHeading}
            admissionSectionContent={IITBHUCollegeAdmissionSectionContent} admissionSectionHeadingId={IITBHUCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITBHUCollegeNavigationConstants[3].title}
            coursesSectionContent={IITBHUCollegeCoursesSectionContent} coursesSectionHeadingId={IITBHUCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITBHUCollegeNavigationConstants[4].title} coursesSectionTableContent={IITBHUCoursesTableContent} coursesSectionTableHeading={IITBHUCoursesTableHeading}
            feeSectionContent={IITBHUCollegeFeeSectionContent} feeSectionHeadingId={IITBHUCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITBHUCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IITBHUInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IITBHUInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IITBHUHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IITBHUHostelFeesDataTableHeading}
            seatSectionContent={IITBHUCollegeSeatSectionContent} seatSectionHeadingId={IITBHUCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITBHUCollegeNavigationConstants[6].title} seatSectionTableContent={IITBHUSeatDataTableConstant} seatSectionTableHeading={IITBHUSeatDataTableHeading}
            cutoffSectionContent={IITBHUCollegeCutOffSectionContent} cutoffSectionHeadingId={IITBHUCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITBHUCollegeNavigationConstants[7].title}
            placementSectionContent={IITBHUCollegePlacementSectionContent} placementSectionHeadingId={IITBHUCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITBHUCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IITBHUPlacementImageList}>
        </IITGenericCollegePage>
    },
    {
        path: "/college/iit/iit-palakkad",
        component: <IITGenericCollegePage collegeImage={IITPalakkadCollegeImage} collegeName="Indian Institute of Technology Palakkad"
            collegePageNavigationConstants={IITPalakkadCollegeNavigationConstants}
            aboutSectionContent={IITPalakkadCollegeAboutSectionContent} aboutSectionHeadingId={IITPalakkadCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITPalakkadCollegeNavigationConstants[0].title} aboutSectionTableContent={IITPalakkadAboutDataTableConstant} aboutSectionTableHeading={IITPalakkadAboutDataTableHeading}
            locationSectionContent={IITPalakkadCollegeLocationSectionContent} locationSectionHeadingId={IITPalakkadCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITPalakkadCollegeNavigationConstants[1].title} locationSectionTableContent={IITPalakkadLocationDataTableConstant} locationSectionTableHeading={IITPalakkadLocationDataTableHeading}
            rankingSectionContent={IITPalakkadCollegeRankingSectionContent} rankingSectionHeadingId={IITPalakkadCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITPalakkadCollegeNavigationConstants[2].title} rankingSectionTableContent={IITPalakkadRankingDataTableConstant} rankingSectionTableHeading={IITPalakkadRankingDataTableHeading}
            admissionSectionContent={IITPalakkadCollegeAdmissionSectionContent} admissionSectionHeadingId={IITPalakkadCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITPalakkadCollegeNavigationConstants[3].title}
            coursesSectionContent={IITPalakkadCollegeCoursesSectionContent} coursesSectionHeadingId={IITPalakkadCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITPalakkadCollegeNavigationConstants[4].title} coursesSectionTableContent={IITPalakkadCoursesTableContent} coursesSectionTableHeading={IITPalakkadCoursesTableHeading}
            feeSectionContent={IITPalakkadCollegeFeeSectionContent} feeSectionHeadingId={IITPalakkadCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITPalakkadCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IITPalakkadInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IITPalakkadInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IITPalakkadHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IITPalakkadHostelFeesDataTableHeading}
            seatSectionContent={IITPalakkadCollegeSeatSectionContent} seatSectionHeadingId={IITPalakkadCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITPalakkadCollegeNavigationConstants[6].title} seatSectionTableContent={IITPalakkadSeatDataTableConstant} seatSectionTableHeading={IITPalakkadSeatDataTableHeading}
            cutoffSectionContent={IITPalakkadCollegeCutOffSectionContent} cutoffSectionHeadingId={IITPalakkadCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITPalakkadCollegeNavigationConstants[7].title}
            placementSectionContent={IITPalakkadCollegePlacementSectionContent} placementSectionHeadingId={IITPalakkadCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITPalakkadCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IITPalakkadPlacementImageList}>
        </IITGenericCollegePage>
    },
    {

        path: "/college/iit/iit-tirupati",
        component: <IITGenericCollegePage collegeImage={IITTirupatiCollegeImage} collegeName="Indian Institute of Technology Tirupati"
            collegePageNavigationConstants={IITTirupatiCollegeNavigationConstants}
            aboutSectionContent={IITTirupatiCollegeAboutSectionContent} aboutSectionHeadingId={IITTirupatiCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITTirupatiCollegeNavigationConstants[0].title} aboutSectionTableContent={IITTirupatiAboutDataTableConstant} aboutSectionTableHeading={IITTirupatiAboutDataTableHeading}
            locationSectionContent={IITTirupatiCollegeLocationSectionContent} locationSectionHeadingId={IITTirupatiCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITTirupatiCollegeNavigationConstants[1].title} locationSectionTableContent={IITTirupatiLocationDataTableConstant} locationSectionTableHeading={IITTirupatiLocationDataTableHeading}
            rankingSectionContent={IITTirupatiCollegeRankingSectionContent} rankingSectionHeadingId={IITTirupatiCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITTirupatiCollegeNavigationConstants[2].title} rankingSectionTableContent={IITTirupatiRankingDataTableConstant} rankingSectionTableHeading={IITTirupatiRankingDataTableHeading}
            admissionSectionContent={IITTirupatiCollegeAdmissionSectionContent} admissionSectionHeadingId={IITTirupatiCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITTirupatiCollegeNavigationConstants[3].title}
            coursesSectionContent={IITTirupatiCollegeCoursesSectionContent} coursesSectionHeadingId={IITTirupatiCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITTirupatiCollegeNavigationConstants[4].title} coursesSectionTableContent={IITTirupatiCoursesTableContent} coursesSectionTableHeading={IITTirupatiCoursesTableHeading}
            feeSectionContent={IITTirupatiCollegeFeeSectionContent} feeSectionHeadingId={IITTirupatiCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITTirupatiCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IITTirupatiInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IITTirupatiInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IITTirupatiHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IITTirupatiHostelFeesDataTableHeading}
            seatSectionContent={IITTirupatiCollegeSeatSectionContent} seatSectionHeadingId={IITTirupatiCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITTirupatiCollegeNavigationConstants[6].title} seatSectionTableContent={IITTirupatiSeatDataTableConstant} seatSectionTableHeading={IITTirupatiSeatDataTableHeading}
            cutoffSectionContent={IITTirupatiCollegeCutOffSectionContent} cutoffSectionHeadingId={IITTirupatiCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITTirupatiCollegeNavigationConstants[7].title}
            placementSectionContent={IITTirupatiCollegePlacementSectionContent} placementSectionHeadingId={IITTirupatiCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITTirupatiCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IITTirupatiPlacementImageList}>
        </IITGenericCollegePage>
    },
    {
        path: "/college/iit/iit-dhanbad",
        component: <IITGenericCollegePage collegeImage={IITDhanbadCollegeImage} collegeName="Indian Institute of Technology Dhanbad"
            collegePageNavigationConstants={IITDhanbadCollegeNavigationConstants}
            aboutSectionContent={IITDhanbadCollegeAboutSectionContent} aboutSectionHeadingId={IITDhanbadCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITDhanbadCollegeNavigationConstants[0].title} aboutSectionTableContent={IITDhanbadAboutDataTableConstant} aboutSectionTableHeading={IITDhanbadAboutDataTableHeading}
            locationSectionContent={IITDhanbadCollegeLocationSectionContent} locationSectionHeadingId={IITDhanbadCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITDhanbadCollegeNavigationConstants[1].title} locationSectionTableContent={IITDhanbadLocationDataTableConstant} locationSectionTableHeading={IITDhanbadLocationDataTableHeading}
            rankingSectionContent={IITDhanbadCollegeRankingSectionContent} rankingSectionHeadingId={IITDhanbadCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITDhanbadCollegeNavigationConstants[2].title} rankingSectionTableContent={IITDhanbadRankingDataTableConstant} rankingSectionTableHeading={IITDhanbadRankingDataTableHeading}
            admissionSectionContent={IITDhanbadCollegeAdmissionSectionContent} admissionSectionHeadingId={IITDhanbadCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITDhanbadCollegeNavigationConstants[3].title}
            coursesSectionContent={IITDhanbadCollegeCoursesSectionContent} coursesSectionHeadingId={IITDhanbadCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITDhanbadCollegeNavigationConstants[4].title} coursesSectionTableContent={IITDhanbadCoursesTableContent} coursesSectionTableHeading={IITDhanbadCoursesTableHeading}
            feeSectionContent={IITDhanbadCollegeFeeSectionContent} feeSectionHeadingId={IITDhanbadCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITDhanbadCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IITDhanbadInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IITDhanbadInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IITDhanbadHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IITDhanbadHostelFeesDataTableHeading}
            seatSectionContent={IITDhanbadCollegeSeatSectionContent} seatSectionHeadingId={IITDhanbadCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITDhanbadCollegeNavigationConstants[6].title} seatSectionTableContent={IITDhanbadSeatDataTableConstant} seatSectionTableHeading={IITDhanbadSeatDataTableHeading}
            cutoffSectionContent={IITDhanbadCollegeCutOffSectionContent} cutoffSectionHeadingId={IITDhanbadCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITDhanbadCollegeNavigationConstants[7].title}
            placementSectionContent={IITDhanbadCollegePlacementSectionContent} placementSectionHeadingId={IITDhanbadCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITDhanbadCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IITDhanbadPlacementImageList}>
        </IITGenericCollegePage>
    },
    {
        path: "/college/iit/iit-bhilai",
        component: <IITGenericCollegePage collegeImage={IITBHUCollegeImage} collegeName="Indian Institute of Technology Bhilai"
            collegePageNavigationConstants={IITBhilaiCollegeNavigationConstants}
            aboutSectionContent={IITBhilaiCollegeAboutSectionContent} aboutSectionHeadingId={IITBhilaiCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITBhilaiCollegeNavigationConstants[0].title} aboutSectionTableContent={IITBhilaiAboutDataTableConstant} aboutSectionTableHeading={IITBhilaiAboutDataTableHeading}
            locationSectionContent={IITBhilaiCollegeLocationSectionContent} locationSectionHeadingId={IITBhilaiCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITBhilaiCollegeNavigationConstants[1].title} locationSectionTableContent={IITBhilaiLocationDataTableConstant} locationSectionTableHeading={IITBhilaiLocationDataTableHeading}
            rankingSectionContent={IITBhilaiCollegeRankingSectionContent} rankingSectionHeadingId={IITBhilaiCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITBhilaiCollegeNavigationConstants[2].title} rankingSectionTableContent={IITBhilaiRankingDataTableConstant} rankingSectionTableHeading={IITBhilaiRankingDataTableHeading}
            admissionSectionContent={IITBhilaiCollegeAdmissionSectionContent} admissionSectionHeadingId={IITBhilaiCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITBhilaiCollegeNavigationConstants[3].title}
            coursesSectionContent={IITBhilaiCollegeCoursesSectionContent} coursesSectionHeadingId={IITBhilaiCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITBhilaiCollegeNavigationConstants[4].title} coursesSectionTableContent={IITBhilaiCoursesTableContent} coursesSectionTableHeading={IITBhilaiCoursesTableHeading}
            feeSectionContent={IITBhilaiCollegeFeeSectionContent} feeSectionHeadingId={IITBhilaiCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITBhilaiCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IITBhilaiInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IITBhilaiInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IITBhilaiHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IITBhilaiHostelFeesDataTableHeading}
            seatSectionContent={IITBhilaiCollegeSeatSectionContent} seatSectionHeadingId={IITBhilaiCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITBhilaiCollegeNavigationConstants[6].title} seatSectionTableContent={IITBhilaiSeatDataTableConstant} seatSectionTableHeading={IITBhilaiSeatDataTableHeading}
            cutoffSectionContent={IITBhilaiCollegeCutOffSectionContent} cutoffSectionHeadingId={IITBhilaiCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITBhilaiCollegeNavigationConstants[7].title}
            placementSectionContent={IITBhilaiCollegePlacementSectionContent} placementSectionHeadingId={IITBhilaiCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITBhilaiCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IITBhilaiPlacementImageList}>
        </IITGenericCollegePage>
    },
    {
        path: "/college/iit/iit-dharwad",
        component: <IITGenericCollegePage collegeImage={IITDhanbadCollegeImage} collegeName="Indian Institute of Technology Dharwad"
            collegePageNavigationConstants={IITDharwadCollegeNavigationConstants}
            aboutSectionContent={IITDharwadCollegeAboutSectionContent} aboutSectionHeadingId={IITDharwadCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITDharwadCollegeNavigationConstants[0].title} aboutSectionTableContent={IITDharwadAboutDataTableConstant} aboutSectionTableHeading={IITDharwadAboutDataTableHeading}
            locationSectionContent={IITDharwadCollegeLocationSectionContent} locationSectionHeadingId={IITDharwadCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITDharwadCollegeNavigationConstants[1].title} locationSectionTableContent={IITDharwadLocationDataTableConstant} locationSectionTableHeading={IITDharwadLocationDataTableHeading}
            rankingSectionContent={IITDharwadCollegeRankingSectionContent} rankingSectionHeadingId={IITDharwadCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITDharwadCollegeNavigationConstants[2].title} rankingSectionTableContent={IITDharwadRankingDataTableConstant} rankingSectionTableHeading={IITDharwadRankingDataTableHeading}
            admissionSectionContent={IITDharwadCollegeAdmissionSectionContent} admissionSectionHeadingId={IITDharwadCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITDharwadCollegeNavigationConstants[3].title}
            coursesSectionContent={IITDharwadCollegeCoursesSectionContent} coursesSectionHeadingId={IITDharwadCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITDharwadCollegeNavigationConstants[4].title} coursesSectionTableContent={IITDharwadCoursesTableContent} coursesSectionTableHeading={IITDharwadCoursesTableHeading}
            feeSectionContent={IITDharwadCollegeFeeSectionContent} feeSectionHeadingId={IITDharwadCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITDharwadCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IITDharwadInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IITDharwadInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IITDharwadHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IITDharwadHostelFeesDataTableHeading}
            seatSectionContent={IITDharwadCollegeSeatSectionContent} seatSectionHeadingId={IITDharwadCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITDharwadCollegeNavigationConstants[6].title} seatSectionTableContent={IITDharwadSeatDataTableConstant} seatSectionTableHeading={IITDharwadSeatDataTableHeading}
            cutoffSectionContent={IITDharwadCollegeCutOffSectionContent} cutoffSectionHeadingId={IITDharwadCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITDharwadCollegeNavigationConstants[7].title}
            placementSectionContent={IITDharwadCollegePlacementSectionContent} placementSectionHeadingId={IITDharwadCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITDharwadCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IITDharwadPlacementImageList}>
        </IITGenericCollegePage>
    },
    {
        path: "/college/iit/iit-jammu",
        component: <IITGenericCollegePage collegeImage={IITJammuCollegeImage} collegeName="Indian Institute of Technology Jammu"
            collegePageNavigationConstants={IITJammuCollegeNavigationConstants}
            aboutSectionContent={IITJammuCollegeAboutSectionContent} aboutSectionHeadingId={IITJammuCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITJammuCollegeNavigationConstants[0].title} aboutSectionTableContent={IITJammuAboutDataTableConstant} aboutSectionTableHeading={IITJammuAboutDataTableHeading}
            locationSectionContent={IITJammuCollegeLocationSectionContent} locationSectionHeadingId={IITJammuCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITJammuCollegeNavigationConstants[1].title} locationSectionTableContent={IITJammuLocationDataTableConstant} locationSectionTableHeading={IITJammuLocationDataTableHeading}
            rankingSectionContent={IITJammuCollegeRankingSectionContent} rankingSectionHeadingId={IITJammuCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITJammuCollegeNavigationConstants[2].title} rankingSectionTableContent={IITJammuRankingDataTableConstant} rankingSectionTableHeading={IITJammuRankingDataTableHeading}
            admissionSectionContent={IITJammuCollegeAdmissionSectionContent} admissionSectionHeadingId={IITJammuCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITJammuCollegeNavigationConstants[3].title}
            coursesSectionContent={IITJammuCollegeCoursesSectionContent} coursesSectionHeadingId={IITJammuCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITJammuCollegeNavigationConstants[4].title} coursesSectionTableContent={IITJammuCoursesTableContent} coursesSectionTableHeading={IITJammuCoursesTableHeading}
            feeSectionContent={IITJammuCollegeFeeSectionContent} feeSectionHeadingId={IITJammuCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITJammuCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IITJammuInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IITJammuInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IITJammuHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IITJammuHostelFeesDataTableHeading}
            seatSectionContent={IITJammuCollegeSeatSectionContent} seatSectionHeadingId={IITJammuCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITJammuCollegeNavigationConstants[6].title} seatSectionTableContent={IITJammuSeatDataTableConstant} seatSectionTableHeading={IITJammuSeatDataTableHeading}
            cutoffSectionContent={IITJammuCollegeCutOffSectionContent} cutoffSectionHeadingId={IITJammuCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITJammuCollegeNavigationConstants[7].title}
            placementSectionContent={IITJammuCollegePlacementSectionContent} placementSectionHeadingId={IITJammuCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITJammuCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IITJammuPlacementImageList}>
        </IITGenericCollegePage>
    },
    {
        path: "/college/iit/iit-goa",
        component: <IITGenericCollegePage collegeImage={IITGoaCollegeImage} collegeName="Indian Institute of Technology Goa"
            collegePageNavigationConstants={IITGoaCollegeNavigationConstants}
            aboutSectionContent={IITGoaCollegeAboutSectionContent} aboutSectionHeadingId={IITGoaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITGoaCollegeNavigationConstants[0].title} aboutSectionTableContent={IITGoaAboutDataTableConstant} aboutSectionTableHeading={IITGoaAboutDataTableHeading}
            locationSectionContent={IITGoaCollegeLocationSectionContent} locationSectionHeadingId={IITGoaCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITGoaCollegeNavigationConstants[1].title} locationSectionTableContent={IITGoaLocationDataTableConstant} locationSectionTableHeading={IITGoaLocationDataTableHeading}
            rankingSectionContent={IITGoaCollegeRankingSectionContent} rankingSectionHeadingId={IITGoaCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITGoaCollegeNavigationConstants[2].title} rankingSectionTableContent={IITGoaRankingDataTableConstant} rankingSectionTableHeading={IITGoaRankingDataTableHeading}
            admissionSectionContent={IITGoaCollegeAdmissionSectionContent} admissionSectionHeadingId={IITGoaCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITGoaCollegeNavigationConstants[3].title}
            coursesSectionContent={IITGoaCollegeCoursesSectionContent} coursesSectionHeadingId={IITGoaCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITGoaCollegeNavigationConstants[4].title} coursesSectionTableContent={IITGoaCoursesTableContent} coursesSectionTableHeading={IITGoaCoursesTableHeading}
            feeSectionContent={IITGoaCollegeFeeSectionContent} feeSectionHeadingId={IITGoaCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITGoaCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IITGoaInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IITGoaInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IITGoaHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IITGoaHostelFeesDataTableHeading}
            seatSectionContent={IITGoaCollegeSeatSectionContent} seatSectionHeadingId={IITGoaCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITGoaCollegeNavigationConstants[6].title} seatSectionTableContent={IITGoaSeatDataTableConstant} seatSectionTableHeading={IITGoaSeatDataTableHeading}
            cutoffSectionContent={IITGoaCollegeCutOffSectionContent} cutoffSectionHeadingId={IITGoaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITGoaCollegeNavigationConstants[7].title}
            placementSectionContent={IITGoaCollegePlacementSectionContent} placementSectionHeadingId={IITGoaCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITGoaCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IITGoaPlacementImageList}>
        </IITGenericCollegePage>
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




    // NIT COLLEGE ROUTES COMES HERE FOR GENERIC PAGE PASSED WITH APPROPRIATE PROPS
    {
        path : "/college/nit/nit-warangal",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Warangal" 
        collegePageNavigationConstants={NITWarangalCollegeNavigationConstants} 
        aboutSectionContent={NITWarangalCollegeAboutSectionContent} aboutSectionHeadingId={NITWarangalCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITWarangalCollegeNavigationConstants[0].title} aboutSectionTableContent={NITWarangalAboutDataTableConstant} aboutSectionTableHeading={NITWarangalAboutDataTableHeading}
        locationSectionContent={NITWarangalCollegeLocationSectionContent} locationSectionHeadingId={NITWarangalCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITWarangalCollegeNavigationConstants[1].title} locationSectionTableContent={NITWarangalLocationDataTableConstant} locationSectionTableHeading={NITWarangalLocationDataTableHeading}
        rankingSectionContent={NITWarangalCollegeRankingSectionContent} rankingSectionHeadingId={NITWarangalCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITWarangalCollegeNavigationConstants[2].title} rankingSectionTableContent={NITWarangalRankingDataTableConstant} rankingSectionTableHeading={NITWarangalRankingDataTableHeading}
        admissionSectionContent={NITWarangalCollegeAdmissionSectionContent} admissionSectionHeadingId={NITWarangalCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITWarangalCollegeNavigationConstants[3].title}
        coursesSectionContent={NITWarangalCollegeCoursesSectionContent} coursesSectionHeadingId={NITWarangalCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITWarangalCollegeNavigationConstants[4].title} coursesSectionTableContent={NITWarangalCoursesTableContent} coursesSectionTableHeading={NITWarangalCoursesTableHeading}
        feeSectionContent={NITWarangalCollegeFeeSectionContent} feeSectionHeadingId={NITWarangalCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITWarangalCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITWarangalInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITWarangalInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITWarangalHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITWarangalHostelFeesDataTableHeading}
        seatSectionContent={NITWarangalCollegeSeatSectionContent} seatSectionHeadingId={NITWarangalCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITWarangalCollegeNavigationConstants[6].title} seatSectionTableContent={NITWarangalSeatDataTableConstant} seatSectionTableHeading={NITWarangalSeatDataTableHeading}
        cutoffSectionContent={NITWarangalCollegeCutOffSectionContent} cutoffSectionHeadingId={NITWarangalCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITWarangalCollegeNavigationConstants[7].title}
        placementSectionContent={NITWarangalCollegePlacementSectionContent} placementSectionHeadingId={NITWarangalCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITWarangalCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITWarangalPlacementImageList}>

        </NITGenericCollegePage>

    }, 

    
    {
        path : "/college/nit/nit-bhopal",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Bhopal" 
        collegePageNavigationConstants={NITBhopalCollegeNavigationConstants} 
        aboutSectionContent={NITBhopalCollegeAboutSectionContent} aboutSectionHeadingId={NITBhopalCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITBhopalCollegeNavigationConstants[0].title} aboutSectionTableContent={NITBhopalAboutDataTableConstant} aboutSectionTableHeading={NITGoaAboutDataTableHeading}
        locationSectionContent={NITBhopalCollegeLocationSectionContent} locationSectionHeadingId={NITBhopalCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITBhopalCollegeNavigationConstants[1].title} locationSectionTableContent={NITBhopalLocationDataTableConstant} locationSectionTableHeading={NITBhopalLocationDataTableHeading}
        rankingSectionContent={NITBhopalCollegeRankingSectionContent} rankingSectionHeadingId={NITBhopalCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITBhopalCollegeNavigationConstants[2].title} rankingSectionTableContent={NITBhopalRankingDataTableConstant} rankingSectionTableHeading={NITBhopalRankingDataTableHeading}
        admissionSectionContent={NITBhopalCollegeAdmissionSectionContent} admissionSectionHeadingId={NITBhopalCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITBhopalCollegeNavigationConstants[3].title}
        coursesSectionContent={NITBhopalCollegeCoursesSectionContent} coursesSectionHeadingId={NITBhopalCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITBhopalCollegeNavigationConstants[4].title} coursesSectionTableContent={NITBhopalCoursesTableContent} coursesSectionTableHeading={NITBhopalCoursesTableHeading}
        feeSectionContent={NITBhopalCollegeFeeSectionContent} feeSectionHeadingId={NITBhopalCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITBhopalCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITBhopalInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITBhopalInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITBhopalHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITBhopalHostelFeesDataTableHeading}
        seatSectionContent={NITBhopalCollegeSeatSectionContent} seatSectionHeadingId={NITBhopalCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITBhopalCollegeNavigationConstants[6].title} seatSectionTableContent={NITBhopalSeatDataTableConstant} seatSectionTableHeading={NITBhopalSeatDataTableHeading}
        cutoffSectionContent={NITBhopalCollegeCutOffSectionContent} cutoffSectionHeadingId={NITBhopalCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITBhopalCollegeNavigationConstants[7].title}
        placementSectionContent={NITBhopalCollegePlacementSectionContent} placementSectionHeadingId={NITBhopalCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITBhopalCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITBhopalPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-nagpur",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Nagpur" 
        collegePageNavigationConstants={NITNagpurCollegeNavigationConstants} 
        aboutSectionContent={NITNagpurCollegeAboutSectionContent} aboutSectionHeadingId={NITNagpurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITNagpurCollegeNavigationConstants[0].title} aboutSectionTableContent={NITNagpurAboutDataTableConstant} aboutSectionTableHeading={NITNagpurAboutDataTableHeading}
        locationSectionContent={NITNagpurCollegeLocationSectionContent} locationSectionHeadingId={NITNagpurCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITNagpurCollegeNavigationConstants[1].title} locationSectionTableContent={NITNagpurLocationDataTableConstant} locationSectionTableHeading={NITNagpurLocationDataTableHeading}
        rankingSectionContent={NITNagpurCollegeRankingSectionContent} rankingSectionHeadingId={NITNagpurCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITNagpurCollegeNavigationConstants[2].title} rankingSectionTableContent={NITNagpurRankingDataTableConstant} rankingSectionTableHeading={NITNagpurRankingDataTableHeading}
        admissionSectionContent={NITNagpurCollegeAdmissionSectionContent} admissionSectionHeadingId={NITNagpurCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITNagpurCollegeNavigationConstants[3].title}
        coursesSectionContent={NITNagpurCollegeCoursesSectionContent} coursesSectionHeadingId={NITNagpurCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITNagpurCollegeNavigationConstants[4].title} coursesSectionTableContent={NITNagpurCoursesTableContent} coursesSectionTableHeading={NITNagpurCoursesTableHeading}
        feeSectionContent={NITNagpurCollegeFeeSectionContent} feeSectionHeadingId={NITNagpurCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITNagpurCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITNagpurInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITNagpurInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITNagpurHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITNagpurHostelFeesDataTableHeading}
        seatSectionContent={NITNagpurCollegeSeatSectionContent} seatSectionHeadingId={NITNagpurCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITNagpurCollegeNavigationConstants[6].title} seatSectionTableContent={NITNagpurSeatDataTableConstant} seatSectionTableHeading={NITNagpurSeatDataTableHeading}
        cutoffSectionContent={NITNagpurCollegeCutOffSectionContent} cutoffSectionHeadingId={NITNagpurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITNagpurCollegeNavigationConstants[7].title}
        placementSectionContent={NITNagpurCollegePlacementSectionContent} placementSectionHeadingId={NITNagpurCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITNagpurCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITNagpurPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-durgapur",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Durgapur" 
        collegePageNavigationConstants={NITDurgapurCollegeNavigationConstants} 
        aboutSectionContent={NITDurgapurCollegeAboutSectionContent} aboutSectionHeadingId={NITDurgapurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITDurgapurCollegeNavigationConstants[0].title} aboutSectionTableContent={NITDurgapurAboutDataTableConstant} aboutSectionTableHeading={NITNagpurAboutDataTableHeading}
        locationSectionContent={NITDurgapurCollegeLocationSectionContent} locationSectionHeadingId={NITDurgapurCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITDurgapurCollegeNavigationConstants[1].title} locationSectionTableContent = {NITDurgapurLocationDataTableConstant} locationSectionTableHeading={NITDurgapurLocationDataTableHeading}
        rankingSectionContent={NITDurgapurCollegeRankingSectionContent} rankingSectionHeadingId={NITDurgapurCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITDurgapurCollegeNavigationConstants[2].title} rankingSectionTableContent={NITDurgapurRankingDataTableConstant} rankingSectionTableHeading={NITDurgapurRankingDataTableHeading}
        admissionSectionContent={NITDurgapurCollegeAdmissionSectionContent} admissionSectionHeadingId={NITDurgapurCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITDurgapurCollegeNavigationConstants[3].title}
        coursesSectionContent={NITDurgapurCollegeCoursesSectionContent} coursesSectionHeadingId={NITDurgapurCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITDurgapurCollegeNavigationConstants[4].title} coursesSectionTableContent={NITDurgapurCoursesTableContent} coursesSectionTableHeading={NITDurgapurCoursesTableHeading}
        feeSectionContent={NITDurgapurCollegeFeeSectionContent} feeSectionHeadingId={NITDurgapurCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITDurgapurCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITDurgapurInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITDurgapurInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITDurgapurHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITDurgapurHostelFeesDataTableHeading}
        seatSectionContent={NITDurgapurCollegeSeatSectionContent} seatSectionHeadingId={NITDurgapurCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITDurgapurCollegeNavigationConstants[6].title} seatSectionTableContent={NITDurgapurSeatDataTableConstant} seatSectionTableHeading={NITDurgapurSeatDataTableHeading}
        cutoffSectionContent={NITDurgapurCollegeCutOffSectionContent} cutoffSectionHeadingId={NITDurgapurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITDurgapurCollegeNavigationConstants[7].title}
        placementSectionContent={NITDurgapurCollegePlacementSectionContent} placementSectionHeadingId={NITDurgapurCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITDurgapurCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITDurgapurPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-jamshedpur",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Jamshedpur" 
        collegePageNavigationConstants={NITJamshedpurCollegeNavigationConstants} 
        aboutSectionContent={NITJamshedpurCollegeAboutSectionContent} aboutSectionHeadingId={NITJamshedpurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITJamshedpurCollegeNavigationConstants[0].title} aboutSectionTableContent={NITJamshedpurAboutDataTableConstant} aboutSectionTableHeading={NITJamshedpurAboutDataTableHeading}
        locationSectionContent={NITJamshedpurCollegeLocationSectionContent} locationSectionHeadingId={NITJamshedpurCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITJamshedpurCollegeNavigationConstants[1].title} locationSectionTableContent={NITJamshedpurLocationDataTableConstant} locationSectionTableHeading={NITJamshedpurLocationDataTableHeading}
        rankingSectionContent={NITJamshedpurCollegeRankingSectionContent} rankingSectionHeadingId={NITJamshedpurCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITJamshedpurCollegeNavigationConstants[2].title} rankingSectionTableContent={NITJamshedpurRankingDataTableConstant} rankingSectionTableHeading={NITJamshedpurRankingDataTableHeading}
        admissionSectionContent={NITJamshedpurCollegeAdmissionSectionContent} admissionSectionHeadingId={NITJamshedpurCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITJamshedpurCollegeNavigationConstants[3].title}
        coursesSectionContent={NITJamshedpurCollegeCoursesSectionContent} coursesSectionHeadingId={NITJamshedpurCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITJamshedpurCollegeNavigationConstants[4].title} coursesSectionTableContent={NITJamshedpurCoursesTableContent} coursesSectionTableHeading={NITJamshedpurCoursesTableHeading}
        feeSectionContent={NITJamshedpurCollegeFeeSectionContent} feeSectionHeadingId={NITJamshedpurCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITJamshedpurCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITJamshedpurInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITJamshedpurInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITJamshedpurHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITJamshedpurHostelFeesDataTableHeading}
        seatSectionContent={NITJamshedpurCollegeSeatSectionContent} seatSectionHeadingId={NITJamshedpurCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITJamshedpurCollegeNavigationConstants[6].title} seatSectionTableContent={NITJamshedpurSeatDataTableConstant} seatSectionTableHeading={NITJamshedpurSeatDataTableHeading}
        cutoffSectionContent={NITJamshedpurCollegeCutOffSectionContent} cutoffSectionHeadingId={NITJamshedpurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITJamshedpurCollegeNavigationConstants[7].title}
        placementSectionContent={NITJamshedpurCollegePlacementSectionContent} placementSectionHeadingId={NITJamshedpurCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITJamshedpurCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITJamshedpurPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-karnataka",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Karnataka" 
        collegePageNavigationConstants={NITKarnatakaCollegeNavigationConstants} 
        aboutSectionContent={NITKarnatakaCollegeAboutSectionContent} aboutSectionHeadingId={NITKarnatakaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITKarnatakaCollegeNavigationConstants[0].title} aboutSectionTableContent={NITKarnatakaAboutDataTableConstant} aboutSectionTableHeading={NITKarnatakaAboutDataTableHeading}
        locationSectionContent={NITKarnatakaCollegeLocationSectionContent} locationSectionHeadingId={NITKarnatakaCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITKarnatakaCollegeNavigationConstants[1].title} locationSectionTableContent={NITKarnatakaLocationDataTableConstant} locationSectionTableHeading={NITKarnatakaLocationDataTableHeading}
        rankingSectionContent={NITKarnatakaCollegeRankingSectionContent} rankingSectionHeadingId={NITKarnatakaCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITKarnatakaCollegeNavigationConstants[2].title} rankingSectionTableContent={NITKarnatakaRankingDataTableConstant} rankingSectionTableHeading={NITKarnatakaRankingDataTableHeading}
        admissionSectionContent={NITKarnatakaCollegeAdmissionSectionContent} admissionSectionHeadingId={NITKarnatakaCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITKarnatakaCollegeNavigationConstants[3].title}
        coursesSectionContent={NITKarnatakaCollegeCoursesSectionContent} coursesSectionHeadingId={NITKarnatakaCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITKarnatakaCollegeNavigationConstants[4].title} coursesSectionTableContent={NITKarnatakaCoursesTableContent} coursesSectionTableHeading={NITKarnatakaCoursesTableHeading}
        feeSectionContent={NITKarnatakaCollegeFeeSectionContent} feeSectionHeadingId={NITKarnatakaCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITKarnatakaCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITKarnatakaInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITKarnatakaInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITKarnatakaHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITKarnatakaHostelFeesDataTableHeading}
        seatSectionContent={NITKarnatakaCollegeSeatSectionContent} seatSectionHeadingId={NITKarnatakaCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITKarnatakaCollegeNavigationConstants[6].title} seatSectionTableContent={NITKarnatakaSeatDataTableConstant} seatSectionTableHeading={NITKarnatakaSeatDataTableHeading}
        cutoffSectionContent={NITKarnatakaCollegeCutOffSectionContent} cutoffSectionHeadingId={NITKarnatakaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITKarnatakaCollegeNavigationConstants[7].title}
        placementSectionContent={NITKarnatakaCollegePlacementSectionContent} placementSectionHeadingId={NITKarnatakaCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITKarnatakaCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITKarnatakaPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-srinagar",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Srinagar" 
        collegePageNavigationConstants={NITSrinagarCollegeNavigationConstants} 
        aboutSectionContent={NITSrinagarCollegeAboutSectionContent} aboutSectionHeadingId={NITSrinagarCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITSrinagarCollegeNavigationConstants[0].title} aboutSectionTableContent={NITSrinagarAboutDataTableConstant} aboutSectionTableHeading={NITSrinagarAboutDataTableHeading}
        locationSectionContent={NITSrinagarCollegeLocationSectionContent} locationSectionHeadingId={NITSrinagarCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITSrinagarCollegeNavigationConstants[1].title} locationSectionTableContent={NITSrinagarAboutDataTableConstant} locationSectionTableHeading={NITSrinagarLocationDataTableHeading}
        rankingSectionContent={NITSrinagarCollegeRankingSectionContent} rankingSectionHeadingId={NITSrinagarCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITSrinagarCollegeNavigationConstants[2].title} rankingSectionTableContent={NITSrinagarLocationDataTableConstant} rankingSectionTableHeading={NITSrinagarRankingDataTableHeading}
        admissionSectionContent={NITSrinagarCollegeAdmissionSectionContent} admissionSectionHeadingId={NITSrinagarCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITSrinagarCollegeNavigationConstants[3].title}
        coursesSectionContent={NITSrinagarCollegeCoursesSectionContent} coursesSectionHeadingId={NITSrinagarCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITSrinagarCollegeNavigationConstants[4].title} coursesSectionTableContent={NITSrinagarCoursesTableContent} coursesSectionTableHeading={NITSrinagarCoursesTableHeading}
        feeSectionContent={NITSrinagarCollegeFeeSectionContent} feeSectionHeadingId={NITSrinagarCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITSrinagarCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITSrinagarInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITSrinagarInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITSrinagarHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITSrinagarHostelFeesDataTableHeading}
        seatSectionContent={NITSrinagarCollegeSeatSectionContent} seatSectionHeadingId={NITSrinagarCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITSrinagarCollegeNavigationConstants[6].title} seatSectionTableContent={NITSrinagarSeatDataTableConstant} seatSectionTableHeading={NITSrinagarSeatDataTableHeading}
        cutoffSectionContent={NITSrinagarCollegeCutOffSectionContent} cutoffSectionHeadingId={NITSrinagarCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITSrinagarCollegeNavigationConstants[7].title}
        placementSectionContent={NITSrinagarCollegePlacementSectionContent} placementSectionHeadingId={NITSrinagarCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITSrinagarCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITSrinagarPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-allahabad",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Allahabad" 
        collegePageNavigationConstants={NITAllahabadCollegeNavigationConstants} 
        aboutSectionContent={NITAllahabadCollegeAboutSectionContent} aboutSectionHeadingId={NITAllahabadCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITAllahabadCollegeNavigationConstants[0].title} aboutSectionTableContent={NITAllahabadAboutDataTableConstant} aboutSectionTableHeading={NITAllahabadAboutDataTableHeading}
        locationSectionContent={NITAllahabadCollegeLocationSectionContent} locationSectionHeadingId={NITAllahabadCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITAllahabadCollegeNavigationConstants[1].title} locationSectionTableContent={NITAllahabadLocationDataTableConstant} locationSectionTableHeading={NITBhopalLocationDataTableHeading}
        rankingSectionContent={NITAllahabadCollegeRankingSectionContent} rankingSectionHeadingId={NITAllahabadCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITAllahabadCollegeNavigationConstants[2].title} rankingSectionTableContent={NITAllahabadRankingDataTableConstant} rankingSectionTableHeading={NITAllahabadRankingDataTableHeading}
        admissionSectionContent={NITAllahabadCollegeAdmissionSectionContent} admissionSectionHeadingId={NITAllahabadCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITAllahabadCollegeNavigationConstants[3].title}
        coursesSectionContent={NITAllahabadCollegeCoursesSectionContent} coursesSectionHeadingId={NITAllahabadCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITAllahabadCollegeNavigationConstants[4].title} coursesSectionTableContent={NITAllahabadCoursesTableContent} coursesSectionTableHeading={NITAllahabadCoursesTableHeading}
        feeSectionContent={NITAllahabadCollegeFeeSectionContent} feeSectionHeadingId={NITAllahabadCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITAllahabadCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITAllahabadInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITAllahabadInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITAllahabadHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITAllahabadHostelFeesDataTableHeading}
        seatSectionContent={NITAllahabadCollegeSeatSectionContent} seatSectionHeadingId={NITAllahabadCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITAllahabadCollegeNavigationConstants[6].title} seatSectionTableContent={NITAllahabadSeatDataTableConstant} seatSectionTableHeading={NITAllahabadSeatDataTableHeading}
        cutoffSectionContent={NITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={NITAllahabadCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITAllahabadCollegeNavigationConstants[7].title}
        placementSectionContent={NITAllahabadCollegePlacementSectionContent} placementSectionHeadingId={NITAllahabadCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITAllahabadCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITAllahabadPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-surat",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Surat" 
        collegePageNavigationConstants={NITSuratCollegeNavigationConstants} 
        aboutSectionContent={NITSuratCollegeAboutSectionContent} aboutSectionHeadingId={NITSuratCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITSuratCollegeNavigationConstants[0].title} aboutSectionTableContent={NITSuratAboutDataTableConstant} aboutSectionTableHeading={NITSuratAboutDataTableHeading}
        locationSectionContent={NITSuratCollegeLocationSectionContent} locationSectionHeadingId={NITSuratCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITSuratCollegeNavigationConstants[1].title} locationSectionTableContent={NITSuratLocationDataTableConstant} locationSectionTableHeading={NITSuratLocationDataTableHeading}
        rankingSectionContent={NITSuratCollegeRankingSectionContent} rankingSectionHeadingId={NITSuratCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITSuratCollegeNavigationConstants[2].title} rankingSectionTableContent={NITSuratRankingDataTableConstant} rankingSectionTableHeading={NITSuratRankingDataTableHeading}
        admissionSectionContent={NITSuratCollegeAdmissionSectionContent} admissionSectionHeadingId={NITSuratCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITSuratCollegeNavigationConstants[3].title}
        coursesSectionContent={NITSuratCollegeCoursesSectionContent} coursesSectionHeadingId={NITSuratCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITSuratCollegeNavigationConstants[4].title} coursesSectionTableContent={NITSuratCoursesTableContent} coursesSectionTableHeading={NITSuratCoursesTableHeading}
        feeSectionContent={NITSuratCollegeFeeSectionContent} feeSectionHeadingId={NITSuratCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITSuratCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITSuratInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITSuratInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITSuratHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITSuratHostelFeesDataTableHeading}
        seatSectionContent={NITSuratCollegeFeeSectionContent} seatSectionHeadingId={NITSuratCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITSuratCollegeNavigationConstants[6].title} seatSectionTableContent={NITSuratSeatDataTableConstant} seatSectionTableHeading={NITSuratSeatDataTableHeading}
        cutoffSectionContent={NITSuratCollegeCutOffSectionContent} cutoffSectionHeadingId={NITSuratCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITSuratCollegeNavigationConstants[7].title}
        placementSectionContent={NITSuratCollegePlacementSectionContent} placementSectionHeadingId={NITSuratCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITSuratCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITSuratPlacementImageList}>
        </NITGenericCollegePage>
    }
,

    {
        path : "/college/nit/nit-calicut",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Calicut" 
        collegePageNavigationConstants={NITCalicutCollegeNavigationConstants} 
        aboutSectionContent={NITCalicutCollegeAboutSectionContent} aboutSectionHeadingId={NITCalicutCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITCalicutCollegeNavigationConstants[0].title} aboutSectionTableContent={NITCalicutAboutDataTableConstant} aboutSectionTableHeading={NITCalicutAboutDataTableHeading}
        locationSectionContent={NITCalicutCollegeLocationSectionContent} locationSectionHeadingId={NITCalicutCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITCalicutCollegeNavigationConstants[1].title} locationSectionTableContent={NITCalicutLocationDataTableConstant} locationSectionTableHeading={NITCalicutLocationDataTableHeading}
        rankingSectionContent={NITCalicutCollegeRankingSectionContent} rankingSectionHeadingId={NITCalicutCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITCalicutCollegeNavigationConstants[2].title} rankingSectionTableContent={NITCalicutRankingDataTableConstant} rankingSectionTableHeading={NITCalicutRankingDataTableHeading}
        admissionSectionContent={NITCalicutCollegeAdmissionSectionContent} admissionSectionHeadingId={NITCalicutCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITCalicutCollegeNavigationConstants[3].title}
        coursesSectionContent={NITCalicutCollegeCoursesSectionContent} coursesSectionHeadingId={NITCalicutCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITCalicutCollegeNavigationConstants[4].title} coursesSectionTableContent={NITCalicutCoursesTableContent} coursesSectionTableHeading={NITCalicutCoursesTableHeading}
        feeSectionContent={NITCalicutCollegeFeeSectionContent} feeSectionHeadingId={NITCalicutCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITCalicutCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITCalicutHostelFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITCalicutInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITCalicutHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITCalicutHostelFeesDataTableHeading}
        seatSectionContent={NITCalicutCollegeSeatSectionContent} seatSectionHeadingId={NITCalicutCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITCalicutCollegeNavigationConstants[6].title} seatSectionTableContent={NITCalicutSeatDataTableConstant} seatSectionTableHeading={NITCalicutSeatDataTableHeading}
        cutoffSectionContent={NITCalicutCollegeCutOffSectionContent} cutoffSectionHeadingId={NITCalicutCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITCalicutCollegeNavigationConstants[7].title}
        placementSectionContent={NITCalicutCollegePlacementSectionContent} placementSectionHeadingId={NITCalicutCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITCalicutCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITCalicutPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-rourkela",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Rourkela" 
        collegePageNavigationConstants={NITRourkelaCollegeNavigationConstants} 
        aboutSectionContent={NITRourkelaCollegeAboutSectionContent} aboutSectionHeadingId={NITRourkelaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITRourkelaCollegeNavigationConstants[0].title} aboutSectionTableContent={NITRourkelaAboutDataTableConstant} aboutSectionTableHeading={NITRourkelaAboutDataTableHeading}
        locationSectionContent={NITRourkelaCollegeLocationSectionContent} locationSectionHeadingId={NITRourkelaCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITRourkelaCollegeNavigationConstants[1].title} locationSectionTableContent={NITRourkelaLocationDataTableConstant} locationSectionTableHeading={NITRourkelaLocationDataTableHeading}
        rankingSectionContent={NITRourkelaCollegeRankingSectionContent} rankingSectionHeadingId={NITRourkelaCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITRourkelaCollegeNavigationConstants[2].title} rankingSectionTableContent={NITRourkelaRankingDataTableConstant} rankingSectionTableHeading={NITRourkelaRankingDataTableHeading}
        admissionSectionContent={NITRourkelaCollegeAdmissionSectionContent} admissionSectionHeadingId={NITRourkelaCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITRourkelaCollegeNavigationConstants[3].title}
        coursesSectionContent={NITRourkelaCollegeCoursesSectionContent} coursesSectionHeadingId={NITRourkelaCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITRourkelaCollegeNavigationConstants[4].title} coursesSectionTableContent={NITRourkelaCoursesTableContent} coursesSectionTableHeading={NITRourkelaCoursesTableHeading}
        feeSectionContent={NITRourkelaCollegeFeeSectionContent} feeSectionHeadingId={NITRourkelaCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITRourkelaCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITRourkelaInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITRourkelaInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITRourkelaHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITRourkelaHostelFeesDataTableHeading}
        seatSectionContent={NITRourkelaCollegeSeatSectionContent} seatSectionHeadingId={NITRourkelaCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITRourkelaCollegeNavigationConstants[6].title} seatSectionTableContent={NITRourkelaSeatDataTableConstant} seatSectionTableHeading={NITRourkelaSeatDataTableHeading}
        cutoffSectionContent={NITRourkelaCollegeCutOffSectionContent} cutoffSectionHeadingId={NITRourkelaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITRourkelaCollegeNavigationConstants[7].title}
        placementSectionContent={NITRourkelaCollegePlacementSectionContent} placementSectionHeadingId={NITRourkelaCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITRourkelaCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITRourkelaPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-jaipur",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Jaipur" 
        collegePageNavigationConstants={NITJaipurCollegeNavigationConstants} 
        aboutSectionContent={NITJaipurCollegeAboutSectionContent} aboutSectionHeadingId={NITJaipurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITJaipurCollegeNavigationConstants[0].title} aboutSectionTableContent={NITJaipurAboutDataTableConstant} aboutSectionTableHeading={NITJaipurAboutDataTableHeading}
        locationSectionContent={NITJaipurCollegeLocationSectionContent} locationSectionHeadingId={NITJaipurCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITJaipurCollegeNavigationConstants[1].title} locationSectionTableContent={NITJaipurLocationDataTableConstant} locationSectionTableHeading={NITJaipurLocationDataTableHeading}
        rankingSectionContent={NITJaipurCollegeRankingSectionContent} rankingSectionHeadingId={NITJaipurCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITJaipurCollegeNavigationConstants[2].title} rankingSectionTableContent={NITJaipurRankingDataTableConstant} rankingSectionTableHeading={NITJaipurRankingDataTableHeading}
        admissionSectionContent={NITJaipurCollegeAdmissionSectionContent} admissionSectionHeadingId={NITJaipurCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITJaipurCollegeNavigationConstants[3].title}
        coursesSectionContent={NITJaipurCollegeCoursesSectionContent} coursesSectionHeadingId={NITJaipurCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITJaipurCollegeNavigationConstants[4].title} coursesSectionTableContent={NITJaipurCoursesTableContent} coursesSectionTableHeading={NITJaipurCoursesTableHeading}
        feeSectionContent={NITJaipurCollegeFeeSectionContent} feeSectionHeadingId={NITJaipurCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITJaipurCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITJaipurInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITJaipurInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITJaipurHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITBhopalHostelFeesDataTableHeading}
        seatSectionContent={NITJaipurCollegeSeatSectionContent} seatSectionHeadingId={NITJaipurCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITJaipurCollegeNavigationConstants[6].title} seatSectionTableContent={NITJaipurSeatDataTableConstant} seatSectionTableHeading={NITJaipurSeatDataTableHeading}
        cutoffSectionContent={NITJaipurCollegeCutOffSectionContent} cutoffSectionHeadingId={NITJaipurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITJaipurCollegeNavigationConstants[7].title}
        placementSectionContent={NITJaipurCollegePlacementSectionContent} placementSectionHeadingId={NITJaipurCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITJaipurCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITJaipurPlacementImageList}>
        </NITGenericCollegePage>
    }
,
    {
        path : "/college/nit/nit-kurukshetra",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Kurukshetra" 
        collegePageNavigationConstants={NITKurukshetraCollegeNavigationConstants} 
        aboutSectionContent={NITKurukshetraCollegeAboutSectionContent} aboutSectionHeadingId={NITKurukshetraCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITKurukshetraCollegeNavigationConstants[0].title} aboutSectionTableContent={NITKurukshetraAboutDataTableConstant} aboutSectionTableHeading={NITKurukshetraAboutDataTableHeading}
        locationSectionContent={NITKurukshetraCollegeLocationSectionContent} locationSectionHeadingId={NITKurukshetraCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITKurukshetraCollegeNavigationConstants[1].title} locationSectionTableContent={NITKurukshetraLocationDataTableConstant} locationSectionTableHeading={NITBhopalLocationDataTableHeading}
        rankingSectionContent={NITKurukshetraCollegeRankingSectionContent} rankingSectionHeadingId={NITKurukshetraCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITKurukshetraCollegeNavigationConstants[2].title} rankingSectionTableContent={NITKurukshetraRankingDataTableConstant} rankingSectionTableHeading={NITBhopalRankingDataTableHeading}
        admissionSectionContent={NITKurukshetraCollegeAdmissionSectionContent} admissionSectionHeadingId={NITKurukshetraCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITKurukshetraCollegeNavigationConstants[3].title}
        coursesSectionContent={NITKurukshetraCollegeCoursesSectionContent} coursesSectionHeadingId={NITKurukshetraCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITKurukshetraCollegeNavigationConstants[4].title} coursesSectionTableContent={NITKurukshetraCoursesTableContent} coursesSectionTableHeading={NITKurukshetraCoursesTableHeading}
        feeSectionContent={NITKurukshetraCollegeFeeSectionContent} feeSectionHeadingId={NITKurukshetraCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITKurukshetraCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITKurukshetraInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITKurukshetraInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITKurukshetraHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITKurukshetraHostelFeesDataTableHeading}
        seatSectionContent={NITKurukshetraCollegeSeatSectionContent} seatSectionHeadingId={NITKurukshetraCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITKurukshetraCollegeNavigationConstants[6].title} seatSectionTableContent={NITKurukshetraSeatDataTableConstant} seatSectionTableHeading={NITKurukshetraSeatDataTableHeading}
        cutoffSectionContent={NITKurukshetraCollegeCutOffSectionContent} cutoffSectionHeadingId={NITKurukshetraCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITKurukshetraCollegeNavigationConstants[7].title}
        placementSectionContent={NITKurukshetraCollegePlacementSectionContent} placementSectionHeadingId={NITKurukshetraCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITKurukshetraCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITKurukshetraPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-tiruchirapalli",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Tiruchirapalli" 
        collegePageNavigationConstants={NITTiruchirappalliCollegeNavigationConstants} 
        aboutSectionContent={NITTiruchirappalliCollegeAboutSectionContent} aboutSectionHeadingId={NITTiruchirappalliCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITTiruchirappalliCollegeNavigationConstants[0].title} aboutSectionTableContent={NITTiruchirappalliAboutDataTableConstant} aboutSectionTableHeading={NITTiruchirappalliAboutDataTableHeading}
        locationSectionContent={NITTiruchirappalliCollegeLocationSectionContent} locationSectionHeadingId={NITTiruchirappalliCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITTiruchirappalliCollegeNavigationConstants[1].title} locationSectionTableContent={NITTiruchirapalliLocationDataTableConstant} locationSectionTableHeading={NITTiruchirapalliLocationDataTableHeading}
        rankingSectionContent={NITTiruchirappalliCollegeRankingSectionContent} rankingSectionHeadingId={NITTiruchirappalliCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITTiruchirappalliCollegeNavigationConstants[2].title} rankingSectionTableContent={NITTiruchirapalliRankingDataTableConstant} rankingSectionTableHeading={NITTiruchirapalliRankingDataTableHeading}
        admissionSectionContent={NITTiruchirappalliCollegeAdmissionSectionContent} admissionSectionHeadingId={NITTiruchirappalliCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITTiruchirappalliCollegeNavigationConstants[3].title}
        coursesSectionContent={NITTiruchirappalliCollegeCoursesSectionContent} coursesSectionHeadingId={NITTiruchirappalliCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITTiruchirappalliCollegeNavigationConstants[4].title} coursesSectionTableContent={NITTiruchirapalliCoursesTableContent} coursesSectionTableHeading={NITTiruchirapalliCoursesTableHeading}
        feeSectionContent={NITTiruchirappalliCollegeFeeSectionContent} feeSectionHeadingId={NITTiruchirappalliCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITTiruchirappalliCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITTiruchirapalliInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITTiruchirapalliInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITTiruchirapalliHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITTiruchirapalliHostelFeesDataTableHeading}
        seatSectionContent={NITTiruchirappalliCollegeSeatSectionContent} seatSectionHeadingId={NITTiruchirappalliCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITTiruchirappalliCollegeNavigationConstants[6].title} seatSectionTableContent={NITTiruchirapalliSeatDataTableConstant} seatSectionTableHeading={NITTiruchirapalliSeatDataTableHeading}
        cutoffSectionContent={NITTiruchirappalliCollegeCutOffSectionContent} cutoffSectionHeadingId={NITTiruchirappalliCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITTiruchirappalliCollegeNavigationConstants[7].title}
        placementSectionContent={NITTiruchirappalliCollegePlacementSectionContent} placementSectionHeadingId={NITTiruchirappalliCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITTiruchirappalliCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITTiruchirapalliPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-silchar",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Silchar" 
        collegePageNavigationConstants={NITSilcharCollegeNavigationConstants} 
        aboutSectionContent={NITSilcharCollegeAboutSectionContent} aboutSectionHeadingId={NITSilcharCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITSilcharCollegeNavigationConstants[0].title} aboutSectionTableContent={NITSilcharAboutDataTableConstant} aboutSectionTableHeading={NITSilcharAboutDataTableHeading}
        locationSectionContent={NITSilcharCollegeLocationSectionContent} locationSectionHeadingId={NITSilcharCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITSilcharCollegeNavigationConstants[1].title} locationSectionTableContent={NITSilcharLocationDataTableConstant} locationSectionTableHeading={NITBhopalLocationDataTableHeading}
        rankingSectionContent={NITSilcharCollegeRankingSectionContent} rankingSectionHeadingId={NITSilcharCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITSilcharCollegeNavigationConstants[2].title} rankingSectionTableContent={NITSilcharRankingDataTableConstant} rankingSectionTableHeading={NITSilcharRankingDataTableHeading}
        admissionSectionContent={NITSilcharCollegeAdmissionSectionContent} admissionSectionHeadingId={NITSilcharCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITSilcharCollegeNavigationConstants[3].title}
        coursesSectionContent={NITSilcharCollegeCoursesSectionContent} coursesSectionHeadingId={NITSilcharCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITSilcharCollegeNavigationConstants[4].title} coursesSectionTableContent={NITSilcharCoursesTableContent} coursesSectionTableHeading={NITSilcharCoursesTableHeading}
        feeSectionContent={NITSilcharCollegeFeeSectionContent} feeSectionHeadingId={NITSilcharCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITSilcharCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITSilcharInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITSilcharInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITSilcharHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITSilcharHostelFeesDataTableHeading}
        seatSectionContent={NITSilcharCollegeSeatSectionContent} seatSectionHeadingId={NITSilcharCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITSilcharCollegeNavigationConstants[6].title} seatSectionTableContent={NITSilcharSeatDataTableConstant} seatSectionTableHeading={NITSilcharSeatDataTableHeading}
        cutoffSectionContent={NITSilcharCollegeCutOffSectionContent} cutoffSectionHeadingId={NITSilcharCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITSilcharCollegeNavigationConstants[7].title}
        placementSectionContent={NITSilcharCollegePlacementSectionContent} placementSectionHeadingId={NITSilcharCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITSilcharCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITSilcharPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-hamirpur",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Hamirpur" 
        collegePageNavigationConstants={NITHamirpurCollegeNavigationConstants} 
        aboutSectionContent={NITHamirpurCollegeAboutSectionContent} aboutSectionHeadingId={NITHamirpurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITHamirpurCollegeNavigationConstants[0].title} aboutSectionTableContent={NITHamirpurAboutDataTableConstant} aboutSectionTableHeading={NITHamirpurAboutDataTableHeading}
        locationSectionContent={NITHamirpurCollegeLocationSectionContent} locationSectionHeadingId={NITHamirpurCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITHamirpurCollegeNavigationConstants[1].title} locationSectionTableContent={NITHamirpurLocationDataTableConstant} locationSectionTableHeading={NITHamirpurLocationDataTableHeading}
        rankingSectionContent={NITHamirpurCollegeRankingSectionContent} rankingSectionHeadingId={NITHamirpurCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITHamirpurCollegeNavigationConstants[2].title} rankingSectionTableContent={NITHamirpurRankingDataTableConstant} rankingSectionTableHeading={NITHamirpurRankingDataTableHeading}
        admissionSectionContent={NITHamirpurCollegeAdmissionSectionContent} admissionSectionHeadingId={NITHamirpurCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITHamirpurCollegeNavigationConstants[3].title}
        coursesSectionContent={NITHamirpurCollegeCoursesSectionContent} coursesSectionHeadingId={NITHamirpurCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITHamirpurCollegeNavigationConstants[4].title} coursesSectionTableContent={NITHamirpurCoursesTableContent} coursesSectionTableHeading={NITHamirpurCoursesTableHeading}
        feeSectionContent={NITHamirpurCollegeFeeSectionContent} feeSectionHeadingId={NITHamirpurCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITHamirpurCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITHamirpurInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITHamirpurInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITHamirpurHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITHamirpurHostelFeesDataTableHeading}
        seatSectionContent={NITHamirpurCollegeSeatSectionContent} seatSectionHeadingId={NITHamirpurCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITHamirpurCollegeNavigationConstants[6].title} seatSectionTableContent={NITHamirpurSeatDataTableConstant} seatSectionTableHeading={NITHamirpurSeatDataTableHeading}
        cutoffSectionContent={NITHamirpurCollegeCutOffSectionContent} cutoffSectionHeadingId={NITHamirpurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITHamirpurCollegeNavigationConstants[7].title}
        placementSectionContent={NITHamirpurCollegePlacementSectionContent} placementSectionHeadingId={NITHamirpurCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITHamirpurCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITHamirpurPlacementImageList}>
        </NITGenericCollegePage>
    }
,

    {
        path : "/college/nit/nit-jalandhar",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Jalandhar" 
        collegePageNavigationConstants={NITJalandharCollegeNavigationConstants} 
        aboutSectionContent={NITJalandharCollegeAboutSectionContent} aboutSectionHeadingId={NITJalandharCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITJalandharCollegeNavigationConstants[0].title} aboutSectionTableContent={NITJalandharAboutDataTableConstant} aboutSectionTableHeading={NITJalandharAboutDataTableHeading}
        locationSectionContent={NITJalandharCollegeLocationSectionContent} locationSectionHeadingId={NITJalandharCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITJalandharCollegeNavigationConstants[1].title} locationSectionTableContent={NITJalandharLocationDataTableConstant} locationSectionTableHeading={NITJalandharLocationDataTableHeading}
        rankingSectionContent={NITJalandharCollegeRankingSectionContent} rankingSectionHeadingId={NITJalandharCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITJalandharCollegeNavigationConstants[2].title} rankingSectionTableContent={NITJalandharRankingDataTableConstant} rankingSectionTableHeading={NITJalandharRankingDataTableHeading}
        admissionSectionContent={NITJalandharCollegeAdmissionSectionContent} admissionSectionHeadingId={NITJalandharCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITJalandharCollegeNavigationConstants[3].title}
        coursesSectionContent={NITJalandharCollegeCoursesSectionContent} coursesSectionHeadingId={NITJalandharCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITJalandharCollegeNavigationConstants[4].title} coursesSectionTableContent={NITJalandharCoursesTableContent} coursesSectionTableHeading={NITJalandharCoursesTableHeading}
        feeSectionContent={NITJalandharCollegeFeeSectionContent} feeSectionHeadingId={NITJalandharCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITJalandharCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITJalandharInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITJalandharInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITJalandharHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITJalandharHostelFeesDataTableHeading}
        seatSectionContent={NITJalandharCollegeSeatSectionContent} seatSectionHeadingId={NITJalandharCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITJalandharCollegeNavigationConstants[6].title} seatSectionTableContent={NITJalandharSeatDataTableConstant} seatSectionTableHeading={NITJalandharSeatDataTableHeading}
        cutoffSectionContent={NITJalandharCollegeCutOffSectionContent} cutoffSectionHeadingId={NITJalandharCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITJalandharCollegeNavigationConstants[7].title}
        placementSectionContent={NITJalandharCollegePlacementSectionContent} placementSectionHeadingId={NITJalandharCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITJalandharCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITJalandharPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-patna",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Patna" 
        collegePageNavigationConstants={NITPatnaCollegeNavigationConstants} 
        aboutSectionContent={NITPatnaCollegeAboutSectionContent} aboutSectionHeadingId={NITPatnaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITPatnaCollegeNavigationConstants[0].title} aboutSectionTableContent={NITPatnaAboutDataTableConstant} aboutSectionTableHeading={NITPatnaAboutDataTableHeading}
        locationSectionContent={NITPatnaCollegeLocationSectionContent} locationSectionHeadingId={NITPatnaCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITPatnaCollegeNavigationConstants[1].title} locationSectionTableContent={NITPatnaLocationDataTableConstant} locationSectionTableHeading={NITPatnaLocationDataTableHeading}
        rankingSectionContent={NITPatnaCollegeRankingSectionContent} rankingSectionHeadingId={NITPatnaCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITPatnaCollegeNavigationConstants[2].title} rankingSectionTableContent={NITPatnaRankingDataTableConstant} rankingSectionTableHeading={NITPatnaRankingDataTableHeading}
        admissionSectionContent={NITPatnaCollegeAdmissionSectionContent} admissionSectionHeadingId={NITPatnaCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITPatnaCollegeNavigationConstants[3].title}
        coursesSectionContent={NITPatnaCollegeCoursesSectionContent} coursesSectionHeadingId={NITPatnaCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITPatnaCollegeNavigationConstants[4].title} coursesSectionTableContent={NITPatnaCoursesTableContent} coursesSectionTableHeading={NITPatnaCoursesTableHeading}
        feeSectionContent={NITPatnaCollegeFeeSectionContent} feeSectionHeadingId={NITPatnaCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITPatnaCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITPatnaInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITPatnaInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITPatnaHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITPatnaHostelFeesDataTableHeading}
        seatSectionContent={NITPatnaCollegeSeatSectionContent} seatSectionHeadingId={NITPatnaCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITPatnaCollegeNavigationConstants[6].title} seatSectionTableContent={NITPatnaSeatDataTableConstant} seatSectionTableHeading={NITPatnaSeatDataTableHeading}
        cutoffSectionContent={NITPatnaCollegeCutOffSectionContent} cutoffSectionHeadingId={NITPatnaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITPatnaCollegeNavigationConstants[7].title}
        placementSectionContent={NITPatnaCollegePlacementSectionContent} placementSectionHeadingId={NITPatnaCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITPatnaCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITPatnaPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-raipur",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Raipur" 
        collegePageNavigationConstants={NITRaipurCollegeNavigationConstants} 
        aboutSectionContent={NITRaipurCollegeAboutSectionContent} aboutSectionHeadingId={NITRaipurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITRaipurCollegeNavigationConstants[0].title} aboutSectionTableContent={NITRaipurAboutDataTableConstant} aboutSectionTableHeading={NITRaipurAboutDataTableHeading}
        locationSectionContent={NITRaipurCollegeLocationSectionContent} locationSectionHeadingId={NITRaipurCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITRaipurCollegeNavigationConstants[1].title} locationSectionTableContent={NITRaipurLocationDataTableConstant} locationSectionTableHeading={NITRaipurLocationDataTableHeading}
        rankingSectionContent={NITRaipurCollegeRankingSectionContent} rankingSectionHeadingId={NITRaipurCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITRaipurCollegeNavigationConstants[2].title} rankingSectionTableContent={NITRaipurRankingDataTableConstant} rankingSectionTableHeading={NITRaipurRankingDataTableHeading}
        admissionSectionContent={NITRaipurCollegeAdmissionSectionContent} admissionSectionHeadingId={NITRaipurCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITRaipurCollegeNavigationConstants[3].title}
        coursesSectionContent={NITRaipurCollegeCoursesSectionContent} coursesSectionHeadingId={NITRaipurCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITRaipurCollegeNavigationConstants[4].title} coursesSectionTableContent={NITRaipurCoursesTableContent} coursesSectionTableHeading={NITRaipurCoursesTableHeading}
        feeSectionContent={NITRaipurCollegeFeeSectionContent} feeSectionHeadingId={NITRaipurCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITRaipurCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITRaipurInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITRaipurInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITRaipurHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITRaipurHostelFeesDataTableHeading}
        seatSectionContent={NITRaipurCollegeSeatSectionContent} seatSectionHeadingId={NITRaipurCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITRaipurCollegeNavigationConstants[6].title} seatSectionTableContent={NITRaipurSeatDataTableConstant} seatSectionTableHeading={NITRaipurSeatDataTableHeading}
        cutoffSectionContent={NITRaipurCollegeCutOffSectionContent} cutoffSectionHeadingId={NITRaipurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITRaipurCollegeNavigationConstants[7].title}
        placementSectionContent={NITRaipurCollegePlacementSectionContent} placementSectionHeadingId={NITRaipurCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITRaipurCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITRaipurPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-agartala",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Agartala" 
        collegePageNavigationConstants={NITAgartalaCollegeNavigationConstants} 
        aboutSectionContent={NITAgartalaCollegeAboutSectionContent} aboutSectionHeadingId={NITAgartalaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITAgartalaCollegeNavigationConstants[0].title} aboutSectionTableContent={NITAgaratalaAboutDataTableConstant} aboutSectionTableHeading={NITAgaratalaAboutDataTableHeading}
        locationSectionContent={NITAgartalaCollegeLocationSectionContent} locationSectionHeadingId={NITAgartalaCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITAgartalaCollegeNavigationConstants[1].title} locationSectionTableContent={NITAgaratalaLocationDataTableConstant} locationSectionTableHeading={NITAgaratalaLocationDataTableHeading}
        rankingSectionContent={NITAgartalaCollegeRankingSectionContent} rankingSectionHeadingId={NITAgartalaCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITAgartalaCollegeNavigationConstants[2].title} rankingSectionTableContent={NITAgaratalaRankingDataTableConstant} rankingSectionTableHeading={NITAgaratalaRankingDataTableHeading}
        admissionSectionContent={NITAgartalaCollegeAdmissionSectionContent} admissionSectionHeadingId={NITAgartalaCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITAgartalaCollegeNavigationConstants[3].title}
        coursesSectionContent={NITAgartalaCollegeCoursesSectionContent} coursesSectionHeadingId={NITAgartalaCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITAgartalaCollegeNavigationConstants[4].title} coursesSectionTableContent={NITAgartalaCoursesTableContent} coursesSectionTableHeading={NITAgartalaCoursesTableHeading}
        feeSectionContent={NITAgartalaCollegeFeeSectionContent} feeSectionHeadingId={NITAgartalaCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITAgartalaCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITAgaratalaInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITAgaratalaInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITAgaratalaHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITAgaratalaHostelFeesDataTableHeading}
        seatSectionContent={NITAgartalaCollegeFeeSectionContent} seatSectionHeadingId={NITAgartalaCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITAgartalaCollegeNavigationConstants[6].title} seatSectionTableContent={NITAgaratalaSeatDataTableConstant} seatSectionTableHeading={NITAgaratalaSeatDataTableHeading}
        cutoffSectionContent={NITAgartalaCollegeCutOffSectionContent} cutoffSectionHeadingId={NITAgartalaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITAgartalaCollegeNavigationConstants[7].title}
        placementSectionContent={NITAgartalaCollegePlacementSectionContent} placementSectionHeadingId={NITAgartalaCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITAgartalaCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITAgaratalaPlacementImageList}>
        </NITGenericCollegePage>
    }
,
    {
        path : "/college/nit/nit-arunachal-pradesh",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Arunachal Pradesh" 
        collegePageNavigationConstants={NITArunachalPradeshCollegeNavigationConstants} 
        aboutSectionContent={NITArunachalPradeshCollegeAboutSectionContent} aboutSectionHeadingId={NITArunachalPradeshCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITArunachalPradeshCollegeNavigationConstants[0].title} aboutSectionTableContent={NITArunachalPradeshAboutDataTableConstant} aboutSectionTableHeading={NITArunachalPradeshAboutDataTableHeading}
        locationSectionContent={NITArunachalPradeshCollegeLocationSectionContent} locationSectionHeadingId={NITArunachalPradeshCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITArunachalPradeshCollegeNavigationConstants[1].title} locationSectionTableContent={NITArunachalPradeshLocationDataTableConstant} locationSectionTableHeading={NITArunachalPradeshLocationDataTableHeading}
        rankingSectionContent={NITArunachalPradeshCollegeRankingSectionContent} rankingSectionHeadingId={NITArunachalPradeshCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITArunachalPradeshCollegeNavigationConstants[2].title} rankingSectionTableContent={NITArunachalPradeshRankingDataTableConstant} rankingSectionTableHeading={NITArunachalPradeshRankingDataTableHeading}
        admissionSectionContent={NITArunachalPradeshCollegeAdmissionSectionContent} admissionSectionHeadingId={NITArunachalPradeshCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITArunachalPradeshCollegeNavigationConstants[3].title}
        coursesSectionContent={NITArunachalPradeshCollegeCoursesSectionContent} coursesSectionHeadingId={NITArunachalPradeshCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITArunachalPradeshCollegeNavigationConstants[4].title} coursesSectionTableContent={NITArunachalPradeshCoursesTableContent} coursesSectionTableHeading={NITArunachalPradeshCoursesTableHeading}
        feeSectionContent={NITArunachalPradeshCollegeFeeSectionContent} feeSectionHeadingId={NITArunachalPradeshCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITArunachalPradeshCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITArunachalPradeshInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITArunachalPradeshInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITArunachalPradeshHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITArunachalPradeshHostelFeesDataTableHeading}
        seatSectionContent={NITArunachalPradeshCollegeFeeSectionContent} seatSectionHeadingId={NITArunachalPradeshCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITArunachalPradeshCollegeNavigationConstants[6].title} seatSectionTableContent={NITArunachalPradeshSeatDataTableConstant} seatSectionTableHeading={NITArunachalPradeshSeatDataTableHeading}
        cutoffSectionContent={NITArunachalPradeshCollegeCutOffSectionContent} cutoffSectionHeadingId={NITArunachalPradeshCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITArunachalPradeshCollegeNavigationConstants[7].title}
        placementSectionContent={NITArunachalPradeshCollegePlacementSectionContent} placementSectionHeadingId={NITArunachalPradeshCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITArunachalPradeshCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITArunachalPradeshPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-delhi",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Delhi" 
        collegePageNavigationConstants={NITDelhiCollegeNavigationConstants} 
        aboutSectionContent={NITDelhiCollegeAboutSectionContent} aboutSectionHeadingId={NITDelhiCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITDelhiCollegeNavigationConstants[0].title} aboutSectionTableContent={NITDelhiAboutDataTableConstant} aboutSectionTableHeading={NITDelhiAboutDataTableHeading}
        locationSectionContent={NITDelhiCollegeLocationSectionContent} locationSectionHeadingId={NITDelhiCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITDelhiCollegeNavigationConstants[1].title} locationSectionTableContent={NITDelhiLocationDataTableConstant} locationSectionTableHeading={NITDelhiLocationDataTableHeading}
        rankingSectionContent={NITDelhiCollegeRankingSectionContent} rankingSectionHeadingId={NITDelhiCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITDelhiCollegeNavigationConstants[2].title} rankingSectionTableContent={NITDelhiRankingDataTableConstant} rankingSectionTableHeading={NITDelhiRankingDataTableHeading}
        admissionSectionContent={NITDelhiCollegeAdmissionSectionContent} admissionSectionHeadingId={NITDelhiCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITDelhiCollegeNavigationConstants[3].title}
        coursesSectionContent={NITDelhiCollegeCoursesSectionContent} coursesSectionHeadingId={NITDelhiCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITDelhiCollegeNavigationConstants[4].title} coursesSectionTableContent={NITDelhiCoursesTableContent} coursesSectionTableHeading={NITDelhiCoursesTableHeading}
        feeSectionContent={NITDelhiCollegeFeeSectionContent} feeSectionHeadingId={NITDelhiCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITDelhiCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITDelhiInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITDelhiInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITDelhiHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITDelhiHostelFeesDataTableHeading}
        seatSectionContent={NITDelhiCollegeSeatSectionContent} seatSectionHeadingId={NITDelhiCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITDelhiCollegeNavigationConstants[6].title} seatSectionTableContent={NITDelhiSeatDataTableConstant} seatSectionTableHeading={NITDelhiSeatDataTableHeading}
        cutoffSectionContent={NITDelhiCollegeCutOffSectionContent} cutoffSectionHeadingId={NITDelhiCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITDelhiCollegeNavigationConstants[7].title}
        placementSectionContent={NITDelhiCollegePlacementSectionContent} placementSectionHeadingId={NITDelhiCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITDelhiCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITDelhiPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-goa",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Goa" 
        collegePageNavigationConstants={NITGoaCollegeNavigationConstants} 
        aboutSectionContent={NITGoaCollegeAboutSectionContent} aboutSectionHeadingId={NITGoaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITGoaCollegeNavigationConstants[0].title} aboutSectionTableContent={NITGoaAboutDataTableConstant} aboutSectionTableHeading={NITGoaAboutDataTableHeading}
        locationSectionContent={NITGoaCollegeLocationSectionContent} locationSectionHeadingId={NITGoaCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITGoaCollegeNavigationConstants[1].title} locationSectionTableContent={NITGoaLocationDataTableConstant} locationSectionTableHeading={NITBhopalLocationDataTableHeading}
        rankingSectionContent={NITGoaCollegeRankingSectionContent} rankingSectionHeadingId={NITGoaCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITGoaCollegeNavigationConstants[2].title} rankingSectionTableContent={NITGoaRankingDataTableConstant} rankingSectionTableHeading={NITGoaRankingDataTableHeading}
        admissionSectionContent={NITGoaCollegeAdmissionSectionContent} admissionSectionHeadingId={NITGoaCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITGoaCollegeNavigationConstants[3].title}
        coursesSectionContent={NITGoaCollegeCoursesSectionContent} coursesSectionHeadingId={NITGoaCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITGoaCollegeNavigationConstants[4].title} coursesSectionTableContent={NITGoaCoursesTableContent} coursesSectionTableHeading={NITGoaCoursesTableHeading}
        feeSectionContent={NITGoaCollegeFeeSectionContent} feeSectionHeadingId={NITGoaCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITGoaCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITGoaInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITGoaInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITGoaHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITGoaHostelFeesDataTableHeading}
        seatSectionContent={NITGoaCollegeSeatSectionContent} seatSectionHeadingId={NITGoaCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITGoaCollegeNavigationConstants[6].title} seatSectionTableContent={NITGoaSeatDataTableConstant} seatSectionTableHeading={NITGoaSeatDataTableHeading}
        cutoffSectionContent={NITGoaCollegeCutOffSectionContent} cutoffSectionHeadingId={NITGoaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITGoaCollegeNavigationConstants[7].title}
        placementSectionContent={NITGoaCollegePlacementSectionContent} placementSectionHeadingId={NITGoaCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITGoaCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITGoaPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-manipur",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Manipur" 
        collegePageNavigationConstants={NITManipurCollegeNavigationConstants} 
        aboutSectionContent={NITManipurCollegeAboutSectionContent} aboutSectionHeadingId={NITManipurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITManipurCollegeNavigationConstants[0].title} aboutSectionTableContent={NITManipurAboutDataTableConstant} aboutSectionTableHeading={NITManipurAboutDataTableHeading}
        locationSectionContent={NITManipurCollegeLocationSectionContent} locationSectionHeadingId={NITManipurCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITManipurCollegeNavigationConstants[1].title} locationSectionTableContent={NITManipurLocationDataTableConstant} locationSectionTableHeading={NITManipurLocationDataTableHeading}
        rankingSectionContent={NITManipurCollegeRankingSectionContent} rankingSectionHeadingId={NITManipurCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITManipurCollegeNavigationConstants[2].title} rankingSectionTableContent={NITManipurRankingDataTableConstant} rankingSectionTableHeading={NITManipurRankingDataTableHeading}
        admissionSectionContent={NITManipurCollegeAdmissionSectionContent} admissionSectionHeadingId={NITManipurCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITManipurCollegeNavigationConstants[3].title}
        coursesSectionContent={NITManipurCollegeCoursesSectionContent} coursesSectionHeadingId={NITManipurCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITManipurCollegeNavigationConstants[4].title} coursesSectionTableContent={NITManipurCoursesTableContent} coursesSectionTableHeading={NITManipurCoursesTableHeading}
        feeSectionContent={NITManipurCollegeFeeSectionContent} feeSectionHeadingId={NITManipurCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITManipurCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITManipurInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITManipurInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITManipurHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITManipurHostelFeesDataTableHeading}
        seatSectionContent={NITManipurCollegeSeatSectionContent} seatSectionHeadingId={NITManipurCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITManipurCollegeNavigationConstants[6].title} seatSectionTableContent={NITManipurSeatDataTableConstant} seatSectionTableHeading={NITManipurSeatDataTableHeading}
        cutoffSectionContent={NITManipurCollegeCutOffSectionContent} cutoffSectionHeadingId={NITManipurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITManipurCollegeNavigationConstants[7].title}
        placementSectionContent={NITManipurCollegePlacementSectionContent} placementSectionHeadingId={NITManipurCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITManipurCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITManipurPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-meghalaya",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Meghalaya" 
        collegePageNavigationConstants={NITMeghalayaCollegeNavigationConstants} 
        aboutSectionContent={NITMeghalayaCollegeAboutSectionContent} aboutSectionHeadingId={NITMeghalayaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITMeghalayaCollegeNavigationConstants[0].title} aboutSectionTableContent={NITMeghalayaAboutDataTableConstant} aboutSectionTableHeading={NITMeghalayaAboutDataTableHeading}
        locationSectionContent={NITMeghalayaCollegeLocationSectionContent} locationSectionHeadingId={NITMeghalayaCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITMeghalayaCollegeNavigationConstants[1].title} locationSectionTableContent={NITMeghalayaLocationDataTableConstant} locationSectionTableHeading={NITMeghalayaLocationDataTableHeading}
        rankingSectionContent={NITMeghalayaCollegeRankingSectionContent} rankingSectionHeadingId={NITMeghalayaCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITMeghalayaCollegeNavigationConstants[2].title} rankingSectionTableContent={NITMeghalayaRankingDataTableConstant} rankingSectionTableHeading={NITMeghalayaRankingDataTableHeading}
        admissionSectionContent={NITMeghalayaCollegeAdmissionSectionContent} admissionSectionHeadingId={NITMeghalayaCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITMeghalayaCollegeNavigationConstants[3].title}
        coursesSectionContent={NITMeghalayaCollegeCoursesSectionContent} coursesSectionHeadingId={NITMeghalayaCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITMeghalayaCollegeNavigationConstants[4].title} coursesSectionTableContent={NITMeghalayaCoursesTableContent} coursesSectionTableHeading={NITMeghalayaCoursesTableHeading}
        feeSectionContent={NITMeghalayaCollegeFeeSectionContent} feeSectionHeadingId={NITMeghalayaCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITMeghalayaCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITMeghalayaInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITMeghalayaInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITMeghalayaHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITMeghalayaHostelFeesDataTableHeading}
        seatSectionContent={NITMeghalayaCollegeSeatSectionContent} seatSectionHeadingId={NITMeghalayaCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITMeghalayaCollegeNavigationConstants[6].title} seatSectionTableContent={NITMeghalayaSeatDataTableConstant} seatSectionTableHeading={NITMeghalayaSeatDataTableHeading}
        cutoffSectionContent={NITMeghalayaCollegeCutOffSectionContent} cutoffSectionHeadingId={NITMeghalayaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITMeghalayaCollegeNavigationConstants[7].title}
        placementSectionContent={NITMeghalayaCollegePlacementSectionContent} placementSectionHeadingId={NITMeghalayaCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITMeghalayaCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITMeghalayaPlacementImageList}>
        </NITGenericCollegePage>
    }, 

    {
        path : "/college/nit/nit-mizoram",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Mizoram" 
        collegePageNavigationConstants={NITMizoramCollegeNavigationConstants} 
        aboutSectionContent={NITMizoramCollegeAboutSectionContent} aboutSectionHeadingId={NITMizoramCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITMizoramCollegeNavigationConstants[0].title} aboutSectionTableContent={NITMizoramAboutDataTableConstant} aboutSectionTableHeading={NITMizoramAboutDataTableHeading}
        locationSectionContent={NITMizoramCollegeLocationSectionContent} locationSectionHeadingId={NITMizoramCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITMizoramCollegeNavigationConstants[1].title} locationSectionTableContent={NITMizoramLocationDataTableConstant} locationSectionTableHeading={NITMizoramLocationDataTableHeading}
        rankingSectionContent={NITMizoramCollegeRankingSectionContent} rankingSectionHeadingId={NITMizoramCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITMizoramCollegeNavigationConstants[2].title} rankingSectionTableContent={NITMizoramRankingDataTableConstant} rankingSectionTableHeading={NITMizoramRankingDataTableHeading}
        admissionSectionContent={NITMizoramCollegeAdmissionSectionContent} admissionSectionHeadingId={NITMizoramCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITMizoramCollegeNavigationConstants[3].title}
        coursesSectionContent={NITMizoramCollegeCoursesSectionContent} coursesSectionHeadingId={NITMizoramCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITMizoramCollegeNavigationConstants[4].title} coursesSectionTableContent={NITMizoramCoursesTableContent} coursesSectionTableHeading={NITMizoramCoursesTableHeading}
        feeSectionContent={NITMizoramCollegeFeeSectionContent} feeSectionHeadingId={NITMizoramCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITMizoramCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITMizoramInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITMizoramInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITMizoramHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITMizoramHostelFeesDataTableHeading}
        seatSectionContent={NITMizoramCollegeSeatSectionContent} seatSectionHeadingId={NITMizoramCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITMizoramCollegeNavigationConstants[6].title} seatSectionTableContent={NITMizoramSeatDataTableConstant} seatSectionTableHeading={NITMizoramSeatDataTableHeading}
        cutoffSectionContent={NITMizoramCollegeCutOffSectionContent} cutoffSectionHeadingId={NITMizoramCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITMizoramCollegeNavigationConstants[7].title}
        placementSectionContent={NITMizoramCollegePlacementSectionContent} placementSectionHeadingId={NITMizoramCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITMizoramCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITMizoramPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-nagaland",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Nagaland" 
        collegePageNavigationConstants={NITNagalandCollegeNavigationConstants} 
        aboutSectionContent={NITNagalandCollegeAboutSectionContent} aboutSectionHeadingId={NITNagalandCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITNagalandCollegeNavigationConstants[0].title} aboutSectionTableContent={NITNagalandAboutDataTableConstant} aboutSectionTableHeading={NITNagalandAboutDataTableHeading}
        locationSectionContent={NITNagalandCollegeLocationSectionContent} locationSectionHeadingId={NITNagalandCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITNagalandCollegeNavigationConstants[1].title} locationSectionTableContent={NITNagalandLocationDataTableConstant} locationSectionTableHeading={NITNagalandLocationDataTableHeading}
        rankingSectionContent={NITNagalandCollegeRankingSectionContent} rankingSectionHeadingId={NITNagalandCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITNagalandCollegeNavigationConstants[2].title} rankingSectionTableContent={NITNagalandRankingDataTableConstant} rankingSectionTableHeading={NITNagalandRankingDataTableHeading}
        admissionSectionContent={NITNagalandCollegeAdmissionSectionContent} admissionSectionHeadingId={NITNagalandCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITNagalandCollegeNavigationConstants[3].title}
        coursesSectionContent={NITNagalandCollegeCoursesSectionContent} coursesSectionHeadingId={NITNagalandCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITNagalandCollegeNavigationConstants[4].title} coursesSectionTableContent={NITNagalandCoursesTableContent} coursesSectionTableHeading={NITNagalandCoursesTableHeading}
        feeSectionContent={NITNagalandCollegeFeeSectionContent} feeSectionHeadingId={NITNagalandCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITNagalandCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITNagalandInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITNagalandInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITNagalandHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITNagalandHostelFeesDataTableHeading}
        seatSectionContent={NITNagalandCollegeSeatSectionContent} seatSectionHeadingId={NITNagalandCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITNagalandCollegeNavigationConstants[6].title} seatSectionTableContent={NITNagalandSeatDataTableConstant} seatSectionTableHeading={NITNagalandSeatDataTableHeading}
        cutoffSectionContent={NITNagalandCollegeCutOffSectionContent} cutoffSectionHeadingId={NITNagalandCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITNagalandCollegeNavigationConstants[7].title}
        placementSectionContent={NITNagalandCollegePlacementSectionContent} placementSectionHeadingId={NITNagalandCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITNagalandCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITNagalandPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-puducherry",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Puducherry" 
        collegePageNavigationConstants={NITPuducherryCollegeNavigationConstants} 
        aboutSectionContent={NITPuducherryCollegeAboutSectionContent} aboutSectionHeadingId={NITPuducherryCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITPuducherryCollegeNavigationConstants[0].title} aboutSectionTableContent={NITPuducherryAboutDataTableConstant} aboutSectionTableHeading={NITPuducherryAboutDataTableHeading}
        locationSectionContent={NITPuducherryCollegeLocationSectionContent} locationSectionHeadingId={NITPuducherryCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITPuducherryCollegeNavigationConstants[1].title} locationSectionTableContent={NITPuducherryLocationDataTableConstant} locationSectionTableHeading={NITPuducherryLocationDataTableHeading}
        rankingSectionContent={NITPuducherryCollegeRankingSectionContent} rankingSectionHeadingId={NITPuducherryCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITPuducherryCollegeNavigationConstants[2].title} rankingSectionTableContent={NITPuducherryLocationDataTableConstant} rankingSectionTableHeading={NITPuducherryRankingDataTableHeading}
        admissionSectionContent={NITPuducherryCollegeAdmissionSectionContent} admissionSectionHeadingId={NITPuducherryCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITPuducherryCollegeNavigationConstants[3].title}
        coursesSectionContent={NITPuducherryCollegeCoursesSectionContent} coursesSectionHeadingId={NITPuducherryCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITPuducherryCollegeNavigationConstants[4].title} coursesSectionTableContent={NITPuducherryCoursesTableContent} coursesSectionTableHeading={NITPuducherryCoursesTableHeading}
        feeSectionContent={NITPuducherryCollegeFeeSectionContent} feeSectionHeadingId={NITPuducherryCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITPuducherryCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITPuducherryInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITPuducherryInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITPuducherryHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITPuducherryHostelFeesDataTableHeading}
        seatSectionContent={NITPuducherryCollegeSeatSectionContent} seatSectionHeadingId={NITPuducherryCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITPuducherryCollegeNavigationConstants[6].title} seatSectionTableContent={NITPuducherrySeatDataTableConstant} seatSectionTableHeading={NITPuducherrySeatDataTableHeading}
        cutoffSectionContent={NITPuducherryCollegeCutOffSectionContent} cutoffSectionHeadingId={NITPuducherryCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITPuducherryCollegeNavigationConstants[7].title}
        placementSectionContent={NITPuducherryCollegePlacementSectionContent} placementSectionHeadingId={NITPuducherryCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITPuducherryCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITPuducherryPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-sikkim",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Sikkim" 
        collegePageNavigationConstants={NITSikkimCollegeNavigationConstants} 
        aboutSectionContent={NITSikkimCollegeAboutSectionContent} aboutSectionHeadingId={NITSikkimCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITSikkimCollegeNavigationConstants[0].title} aboutSectionTableContent={NITSikkimAboutDataTableConstant} aboutSectionTableHeading={NITSikkimAboutDataTableHeading}
        locationSectionContent={NITSikkimCollegeLocationSectionContent} locationSectionHeadingId={NITSikkimCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITSikkimCollegeNavigationConstants[1].title} locationSectionTableContent={NITSikkimLocationDataTableConstant} locationSectionTableHeading={NITSikkimLocationDataTableHeading}
        rankingSectionContent={NITSikkimCollegeRankingSectionContent} rankingSectionHeadingId={NITSikkimCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITSikkimCollegeNavigationConstants[2].title} rankingSectionTableContent={NITSikkimRankingDataTableConstant} rankingSectionTableHeading={NITSikkimRankingDataTableHeading}
        admissionSectionContent={NITSikkimCollegeAdmissionSectionContent} admissionSectionHeadingId={NITSikkimCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITSikkimCollegeNavigationConstants[3].title}
        coursesSectionContent={NITSikkimCollegeCoursesSectionContent} coursesSectionHeadingId={NITSikkimCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITSikkimCollegeNavigationConstants[4].title} coursesSectionTableContent={NITSikkimCoursesTableContent} coursesSectionTableHeading={NITSikkimCoursesTableHeading}
        feeSectionContent={NITSikkimCollegeFeeSectionContent} feeSectionHeadingId={NITSikkimCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITSikkimCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITSikkimInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITSikkimInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITSikkimHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITSikkimHostelFeesDataTableHeading}
        seatSectionContent={NITSikkimCollegeSeatSectionContent} seatSectionHeadingId={NITSikkimCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITSikkimCollegeNavigationConstants[6].title} seatSectionTableContent={NITSikkimSeatDataTableConstant} seatSectionTableHeading={NITSikkimSeatDataTableHeading}
        cutoffSectionContent={NITSikkimCollegeCutOffSectionContent} cutoffSectionHeadingId={NITSikkimCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITSikkimCollegeNavigationConstants[7].title}
        placementSectionContent={NITSikkimCollegePlacementSectionContent} placementSectionHeadingId={NITSikkimCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITSikkimCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITSikkimPlacementImageList}>
        </NITGenericCollegePage>
    }, 

    {
        path : "/college/nit/nit-uttarakhand",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Uttarakhand" 
        collegePageNavigationConstants={NITUttarakhandCollegeNavigationConstants} 
        aboutSectionContent={NITUttarakhandCollegeAboutSectionContent} aboutSectionHeadingId={NITUttarakhandCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITUttarakhandCollegeNavigationConstants[0].title} aboutSectionTableContent={NITUttarakhandAboutDataTableConstant} aboutSectionTableHeading={NITUttarakhandAboutDataTableHeading}
        locationSectionContent={NITUttarakhandCollegeLocationSectionContent} locationSectionHeadingId={NITUttarakhandCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITUttarakhandCollegeNavigationConstants[1].title} locationSectionTableContent={NITUttarakhandLocationDataTableConstant} locationSectionTableHeading={NITUttarakhandLocationDataTableHeading}
        rankingSectionContent={NITUttarakhandCollegeRankingSectionContent} rankingSectionHeadingId={NITUttarakhandCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITUttarakhandCollegeNavigationConstants[2].title} rankingSectionTableContent={NITUttarakhandRankingDataTableConstant} rankingSectionTableHeading={NITUttarakhandRankingDataTableHeading}
        admissionSectionContent={NITUttarakhandCollegeAdmissionSectionContent} admissionSectionHeadingId={NITUttarakhandCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITUttarakhandCollegeNavigationConstants[3].title}
        coursesSectionContent={NITUttarakhandCollegeCoursesSectionContent} coursesSectionHeadingId={NITUttarakhandCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITUttarakhandCollegeNavigationConstants[4].title} coursesSectionTableContent={NITUttarakhandCoursesTableContent} coursesSectionTableHeading={NITUttarakhandCoursesTableHeading}
        feeSectionContent={NITUttarakhandCollegeFeeSectionContent} feeSectionHeadingId={NITUttarakhandCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITUttarakhandCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITUttarakhandInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITUttarakhandInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITUttarakhandHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITUttarakhandHostelFeesDataTableHeading}
        seatSectionContent={NITUttarakhandCollegeSeatSectionContent} seatSectionHeadingId={NITUttarakhandCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITUttarakhandCollegeNavigationConstants[6].title} seatSectionTableContent={NITUttarakhandSeatDataTableConstant} seatSectionTableHeading={NITUttarakhandSeatDataTableHeading}
        cutoffSectionContent={NITUttarakhandCollegeCutOffSectionContent} cutoffSectionHeadingId={NITUttarakhandCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITUttarakhandCollegeNavigationConstants[7].title}
        placementSectionContent={NITUttarakhandCollegePlacementSectionContent} placementSectionHeadingId={NITUttarakhandCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITUttarakhandCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITUttarakhandPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-andhra-pradesh",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Andhra Pradesh"
            collegePageNavigationConstants={NITAndhraPradeshCollegeNavigationConstants}
            aboutSectionContent={NITAndhraPradeshCollegeAboutSectionContent} aboutSectionHeadingId={NITAndhraPradeshCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITAndhraPradeshCollegeNavigationConstants[0].title} aboutSectionTableContent={NITAndhraPradeshAboutDataTableConstant} aboutSectionTableHeading={NITAndhraPradeshAboutDataTableHeading}
            locationSectionContent={NITAndhraPradeshCollegeLocationSectionContent} locationSectionHeadingId={NITAndhraPradeshCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITAndhraPradeshCollegeNavigationConstants[1].title} locationSectionTableContent={NITAndhraPradeshLocationDataTableConstant} locationSectionTableHeading={NITAndhraPradeshLocationDataTableHeading}
            rankingSectionContent={NITAndhraPradeshCollegeRankingSectionContent} rankingSectionHeadingId={NITAndhraPradeshCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITAndhraPradeshCollegeNavigationConstants[2].title} rankingSectionTableContent={NITAndhraPradeshRankingDataTableConstant} rankingSectionTableHeading={NITAndhraPradeshRankingDataTableHeading}
            admissionSectionContent={NITAndhraPradeshCollegeAdmissionSectionContent} admissionSectionHeadingId={NITAndhraPradeshCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITAndhraPradeshCollegeNavigationConstants[3].title}
            coursesSectionContent={NITAndhraPradeshCollegeCoursesSectionContent} coursesSectionHeadingId={NITAndhraPradeshCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITAndhraPradeshCollegeNavigationConstants[4].title} coursesSectionTableContent={NITAndhraPradeshCoursesTableContent} coursesSectionTableHeading={NITAndhraPradeshCoursesTableHeading}
            feeSectionContent={NITAndhraPradeshCollegeFeeSectionContent} feeSectionHeadingId={NITAndhraPradeshCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITAndhraPradeshCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITAndhraPradeshInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITAndhraPradeshInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITAndhraPradeshHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITAndhraPradeshHostelFeesDataTableHeading}
            seatSectionContent={NITAndhraPradeshCollegeSeatSectionContent} seatSectionHeadingId={NITAndhraPradeshCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITAndhraPradeshCollegeNavigationConstants[6].title} seatSectionTableContent={NITAndhraPradeshSeatDataTableConstant} seatSectionTableHeading={NITAndhraPradeshSeatDataTableHeading}
            cutoffSectionContent={NITAndhraPradeshCollegeCutOffSectionContent} cutoffSectionHeadingId={NITAndhraPradeshCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITAndhraPradeshCollegeNavigationConstants[7].title}
            placementSectionContent={NITAndhraPradeshCollegePlacementSectionContent} placementSectionHeadingId={NITAndhraPradeshCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITAndhraPradeshCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITAndhraPradeshPlacementImageList}>
        </NITGenericCollegePage>
    },
    {
        path : "/college/nit/nit-shibpur",
        component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Shibpur" 
        collegePageNavigationConstants={NITShibpurCollegeNavigationConstants} 
        aboutSectionContent={NITShibpurCollegeAboutSectionContent} aboutSectionHeadingId={NITShibpurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITShibpurCollegeNavigationConstants[0].title} aboutSectionTableContent={NITShibpurAboutDataTableConstant} aboutSectionTableHeading={NITShibpurAboutDataTableHeading}
        locationSectionContent={NITShibpurCollegeLocationSectionContent} locationSectionHeadingId={NITShibpurCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITShibpurCollegeNavigationConstants[1].title} locationSectionTableContent={NITShibpurLocationDataTableConstant} locationSectionTableHeading={NITShibpurLocationDataTableHeading}
        rankingSectionContent={NITShibpurCollegeRankingSectionContent} rankingSectionHeadingId={NITShibpurCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITShibpurCollegeNavigationConstants[2].title} rankingSectionTableContent={NITShibpurRankingDataTableConstant} rankingSectionTableHeading={NITShibpurRankingDataTableHeading}
        admissionSectionContent={NITShibpurCollegeAdmissionSectionContent} admissionSectionHeadingId={NITShibpurCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITShibpurCollegeNavigationConstants[3].title}
        coursesSectionContent={NITShibpurCollegeCoursesSectionContent} coursesSectionHeadingId={NITShibpurCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITShibpurCollegeNavigationConstants[4].title} coursesSectionTableContent={NITShibpurCoursesTableContent} coursesSectionTableHeading={NITShibpurCoursesTableHeading}
        feeSectionContent={NITShibpurCollegeFeeSectionContent} feeSectionHeadingId={NITShibpurCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITShibpurCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITShibpurInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITShibpurInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITShibpurHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITShibpurHostelFeesDataTableHeading}
        seatSectionContent={NITShibpurCollegeSeatSectionContent} seatSectionHeadingId={NITShibpurCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITShibpurCollegeNavigationConstants[6].title} seatSectionTableContent={NITShibpurSeatDataTableConstant} seatSectionTableHeading={NITShibpurSeatDataTableHeading}
        cutoffSectionContent={NITShibpurCollegeCutOffSectionContent} cutoffSectionHeadingId={NITShibpurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITShibpurCollegeNavigationConstants[7].title}
        placementSectionContent={NITShibpurCollegePlacementSectionContent} placementSectionHeadingId={NITShibpurCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITShibpurCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITShibpurPlacementImageList}>
        </NITGenericCollegePage>
    }






,


    // routes for pages of all IIITs comes here
    {
        path : "/college/iiit/iiit-hyderabad",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Shibpur" 
        collegePageNavigationConstants={IIITHyderabadCollegeNavigationConstants} 
        aboutSectionContent={IIITHyderabadCollegeAboutSectionContent} aboutSectionHeadingId={IIITHyderabadCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITHyderabadCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITHyderabadAboutDataTableConstant} aboutSectionTableHeading={IIITHyderabadAboutDataTableHeading}
        locationSectionContent={IIITHyderabadCollegeLocationSectionContent} locationSectionHeadingId={IIITHyderabadCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITHyderabadCollegeNavigationConstants[1].title} locationSectionTableContent={IIITHyderabadLocationDataTableConstant} locationSectionTableHeading={IIITHyderabadLocationDataTableHeading}
        rankingSectionContent={IIITHyderabadCollegeRankingSectionContent} rankingSectionHeadingId={IIITHyderabadCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITHyderabadCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITHyderabadRankingDataTableConstant} rankingSectionTableHeading={IIITHyderabadRankingDataTableHeading}
        admissionSectionContent={IIITHyderabadCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITHyderabadCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITHyderabadCollegeNavigationConstants[3].title}
        coursesSectionContent={IIITHyderabadCollegeCoursesSectionContent} coursesSectionHeadingId={IIITHyderabadCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITHyderabadCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITHyderabadCoursesTableContent} coursesSectionTableHeading={IIITHyderabadCoursesTableHeading}
        feeSectionContent={IIITHyderabadCollegeFeeSectionContent} feeSectionHeadingId={IIITHyderabadCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITHyderabadCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITHyderabadInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITHyderabadInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITHyderabadHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITHyderabadHostelFeesDataTableHeading}
        seatSectionContent={IIITHyderabadCollegeSeatSectionContent} seatSectionHeadingId={IIITHyderabadCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITHyderabadCollegeNavigationConstants[6].title} seatSectionTableContent={IIITHyderabadSeatDataTableConstant} seatSectionTableHeading={IIITHyderabadSeatDataTableHeading}
        cutoffSectionContent={IIITHyderabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITHyderabadCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITHyderabadCollegeNavigationConstants[7].title}
        placementSectionContent={IIITHyderabadCollegePlacementSectionContent} placementSectionHeadingId={IIITHyderabadCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITHyderabadCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITHyderabadPlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-gwalior",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Gwalior"
            collegePageNavigationConstants={IIITGwaliorCollegeNavigationConstants}
            aboutSectionContent={IIITGwaliorCollegeAboutSectionContent} aboutSectionHeadingId={IIITGwaliorCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITGwaliorCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITGwaliorAboutDataTableConstant} aboutSectionTableHeading={IIITGwaliorAboutDataTableHeading}
            locationSectionContent={IIITGwaliorCollegeLocationSectionContent} locationSectionHeadingId={IIITGwaliorCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITGwaliorCollegeNavigationConstants[1].title} locationSectionTableContent={IIITGwaliorLocationDataTableConstant} locationSectionTableHeading={IIITGwaliorLocationDataTableHeading}
            rankingSectionContent={IIITGwaliorCollegeRankingSectionContent} rankingSectionHeadingId={IIITGwaliorCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITGwaliorCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITGwaliorRankingDataTableConstant} rankingSectionTableHeading={IIITGwaliorRankingDataTableHeading}
            admissionSectionContent={IIITGwaliorCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITGwaliorCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITGwaliorCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITGwaliorCollegeCoursesSectionContent} coursesSectionHeadingId={IIITGwaliorCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITGwaliorCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITGwaliorCoursesTableContent} coursesSectionTableHeading={IIITGwaliorCoursesTableHeading}
            feeSectionContent={IIITGwaliorCollegeFeeSectionContent} feeSectionHeadingId={IIITGwaliorCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITGwaliorCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITGwaliorInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITGwaliorInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITGwaliorHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITGwaliorHostelFeesDataTableHeading}
            seatSectionContent={IIITGwaliorCollegeSeatSectionContent} seatSectionHeadingId={IIITGwaliorCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITGwaliorCollegeNavigationConstants[6].title} seatSectionTableContent={IIITGwaliorSeatDataTableConstant} seatSectionTableHeading={IIITGwaliorSeatDataTableHeading}
            cutoffSectionContent={IIITGwaliorCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITGwaliorCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITGwaliorCollegeNavigationConstants[7].title}
            placementSectionContent={IIITGwaliorCollegePlacementSectionContent} placementSectionHeadingId={IIITGwaliorCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITGwaliorCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITGwaliorPlacementImageList}>
        </IIITGenericCollegePage>
    },

    {
        path: "/college/iiit/iiit-bangalore",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Bangalore"
            collegePageNavigationConstants={IIITBangaloreCollegeNavigationConstants}
            aboutSectionContent={IIITBangaloreCollegeAboutSectionContent} aboutSectionHeadingId={IIITBangaloreCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITBangaloreCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITBangaloreAboutDataTableConstant} aboutSectionTableHeading={IIITBangaloreAboutDataTableHeading}
            locationSectionContent={IIITBangaloreCollegeLocationSectionContent} locationSectionHeadingId={IIITBangaloreCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITBangaloreCollegeNavigationConstants[1].title} locationSectionTableContent={IIITBangaloreLocationDataTableConstant} locationSectionTableHeading={IIITBangaloreLocationDataTableHeading}
            rankingSectionContent={IIITBangaloreCollegeRankingSectionContent} rankingSectionHeadingId={IIITBangaloreCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITBangaloreCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITBangaloreRankingDataTableConstant} rankingSectionTableHeading={IIITBangaloreRankingDataTableHeading}
            admissionSectionContent={IIITBangaloreCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITBangaloreCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITBangaloreCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITBangaloreCollegeCoursesSectionContent} coursesSectionHeadingId={IIITBangaloreCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITBangaloreCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITBangaloreCoursesTableContent} coursesSectionTableHeading={IIITBangaloreCoursesTableHeading}
            feeSectionContent={IIITBangaloreCollegeFeeSectionContent} feeSectionHeadingId={IIITBangaloreCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITBangaloreCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITBangaloreInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITBangaloreInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITBangaloreHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITBangaloreHostelFeesDataTableHeading}
            seatSectionContent={IIITBangaloreCollegeSeatSectionContent} seatSectionHeadingId={IIITBangaloreCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITBangaloreCollegeNavigationConstants[6].title} seatSectionTableContent={IIITBangaloreSeatDataTableConstant} seatSectionTableHeading={IIITBangaloreSeatDataTableHeading}
            cutoffSectionContent={IIITBangaloreCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITBangaloreCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITBangaloreCollegeNavigationConstants[7].title}
            placementSectionContent={IIITBangaloreCollegePlacementSectionContent} placementSectionHeadingId={IIITBangaloreCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITBangaloreCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITBangalorePlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-guwahati",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Guwahati"
            collegePageNavigationConstants={IIITGuwahatiCollegeNavigationConstants}
            aboutSectionContent={IIITGuwahatiCollegeAboutSectionContent} aboutSectionHeadingId={IIITGuwahatiCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITGuwahatiCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITGuwahatiAboutDataTableConstant} aboutSectionTableHeading={IIITGuwahatiAboutDataTableHeading}
            locationSectionContent={IIITGuwahatiCollegeLocationSectionContent} locationSectionHeadingId={IIITGuwahatiCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITGuwahatiCollegeNavigationConstants[1].title} locationSectionTableContent={IIITGuwahatiLocationDataTableConstant} locationSectionTableHeading={IIITGuwahatiLocationDataTableHeading}
            rankingSectionContent={IIITGuwahatiCollegeRankingSectionContent} rankingSectionHeadingId={IIITGuwahatiCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITGuwahatiCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITGuwahatiRankingDataTableConstant} rankingSectionTableHeading={IIITGuwahatiRankingDataTableHeading}
            admissionSectionContent={IIITGuwahatiCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITGuwahatiCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITGuwahatiCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITGuwahatiCollegeCoursesSectionContent} coursesSectionHeadingId={IIITGuwahatiCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITGuwahatiCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITGuwahatiCoursesTableContent} coursesSectionTableHeading={IIITGuwahatiCoursesTableHeading}
            feeSectionContent={IIITGuwahatiCollegeFeeSectionContent} feeSectionHeadingId={IIITGuwahatiCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITGuwahatiCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITGuwahatiInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITGuwahatiInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITGuwahatiHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITGuwahatiHostelFeesDataTableHeading}
            seatSectionContent={IIITGuwahatiCollegeSeatSectionContent} seatSectionHeadingId={IIITGuwahatiCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITGuwahatiCollegeNavigationConstants[6].title} seatSectionTableContent={IIITGuwahatiSeatDataTableConstant} seatSectionTableHeading={IIITGuwahatiSeatDataTableHeading}
            cutoffSectionContent={IIITGuwahatiCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITGuwahatiCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITGuwahatiCollegeNavigationConstants[7].title}
            placementSectionContent={IIITGuwahatiCollegePlacementSectionContent} placementSectionHeadingId={IIITGuwahatiCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITGuwahatiCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITGuwahatiPlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-jabalpur",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Jabalpur"
            collegePageNavigationConstants={IIITJabalpurCollegeNavigationConstants}
            aboutSectionContent={IIITJabalpurCollegeAboutSectionContent} aboutSectionHeadingId={IIITJabalpurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITJabalpurCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITJabalpurAboutDataTableConstant} aboutSectionTableHeading={IIITJabalpurAboutDataTableHeading}
            locationSectionContent={IIITJabalpurCollegeLocationSectionContent} locationSectionHeadingId={IIITJabalpurCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITJabalpurCollegeNavigationConstants[1].title} locationSectionTableContent={IIITJabalpurLocationDataTableConstant} locationSectionTableHeading={IIITJabalpurLocationDataTableHeading}
            rankingSectionContent={IIITJabalpurCollegeRankingSectionContent} rankingSectionHeadingId={IIITJabalpurCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITJabalpurCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITJabalpurRankingDataTableConstant} rankingSectionTableHeading={IIITJabalpurRankingDataTableHeading}
            admissionSectionContent={IIITJabalpurCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITJabalpurCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITJabalpurCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITJabalpurCollegeCoursesSectionContent} coursesSectionHeadingId={IIITJabalpurCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITJabalpurCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITJabalpurCoursesTableContent} coursesSectionTableHeading={IIITJabalpurCoursesTableHeading}
            feeSectionContent={IIITJabalpurCollegeFeeSectionContent} feeSectionHeadingId={IIITJabalpurCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITJabalpurCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITJabalpurInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITJabalpurInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITJabalpurHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITJabalpurHostelFeesDataTableHeading}
            seatSectionContent={IIITJabalpurCollegeSeatSectionContent} seatSectionHeadingId={IIITJabalpurCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITJabalpurCollegeNavigationConstants[6].title} seatSectionTableContent={IIITJabalpurSeatDataTableConstant} seatSectionTableHeading={IIITJabalpurSeatDataTableHeading}
            cutoffSectionContent={IIITJabalpurCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITJabalpurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITJabalpurCollegeNavigationConstants[7].title}
            placementSectionContent={IIITJabalpurCollegePlacementSectionContent} placementSectionHeadingId={IIITJabalpurCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITJabalpurCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITJabalpurPlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-allahabad",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Allahabad"
            collegePageNavigationConstants={IIITAllahabadCollegeNavigationConstants}
            aboutSectionContent={IIITAllahabadCollegeAboutSectionContent} aboutSectionHeadingId={IIITAllahabadCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITAllahabadCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITAllahabadAboutDataTableConstant} aboutSectionTableHeading={IIITAllahabadAboutDataTableHeading}
            locationSectionContent={IIITAllahabadCollegeLocationSectionContent} locationSectionHeadingId={IIITAllahabadCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITAllahabadCollegeNavigationConstants[1].title} locationSectionTableContent={IIITAllahabadLocationDataTableConstant} locationSectionTableHeading={IIITAllahabadLocationDataTableHeading}
            rankingSectionContent={IIITAllahabadCollegeRankingSectionContent} rankingSectionHeadingId={IIITAllahabadCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITAllahabadCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITAllahabadRankingDataTableConstant} rankingSectionTableHeading={IIITAllahabadRankingDataTableHeading}
            admissionSectionContent={IIITAllahabadCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITAllahabadCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITAllahabadCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITAllahabadCollegeCoursesSectionContent} coursesSectionHeadingId={IIITAllahabadCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITAllahabadCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITAllahabadCoursesTableContent} coursesSectionTableHeading={IIITAllahabadCoursesTableHeading}
            feeSectionContent={IIITAllahabadCollegeFeeSectionContent} feeSectionHeadingId={IIITAllahabadCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITAllahabadCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITAllahabadInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITAllahabadInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITAllahabadHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITAllahabadHostelFeesDataTableHeading}
            seatSectionContent={IIITAllahabadCollegeSeatSectionContent} seatSectionHeadingId={IIITAllahabadCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITAllahabadCollegeNavigationConstants[6].title} seatSectionTableContent={IIITAllahabadSeatDataTableConstant} seatSectionTableHeading={IIITAllahabadSeatDataTableHeading}
            cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITAllahabadCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITAllahabadCollegeNavigationConstants[7].title}
            placementSectionContent={IIITAllahabadCollegePlacementSectionContent} placementSectionHeadingId={IIITAllahabadCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITAllahabadCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITAllahabadPlacementImageList}>
        </IIITGenericCollegePage>
    },

    {
        path: "/college/iiit/iiit-kanchipuram",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Kanchipuram"
            collegePageNavigationConstants={IIITKanchipuramCollegeNavigationConstants}
            aboutSectionContent={IIITKanchipuramCollegeAboutSectionContent} aboutSectionHeadingId={IIITKanchipuramCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITKanchipuramCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITKanchipuramAboutDataTableConstant} aboutSectionTableHeading={IIITKanchipuramAboutDataTableHeading}
            locationSectionContent={IIITKanchipuramCollegeLocationSectionContent} locationSectionHeadingId={IIITKanchipuramCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITKanchipuramCollegeNavigationConstants[1].title} locationSectionTableContent={IIITKanchipuramLocationDataTableConstant} locationSectionTableHeading={IIITKanchipuramLocationDataTableHeading}
            rankingSectionContent={IIITKanchipuramCollegeRankingSectionContent} rankingSectionHeadingId={IIITKanchipuramCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITKanchipuramCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITKanchipuramRankingDataTableConstant} rankingSectionTableHeading={IIITKanchipuramRankingDataTableHeading}
            admissionSectionContent={IIITKanchipuramCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITKanchipuramCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITKanchipuramCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITKanchipuramCollegeCoursesSectionContent} coursesSectionHeadingId={IIITKanchipuramCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITKanchipuramCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITKanchipuramCoursesTableContent} coursesSectionTableHeading={IIITKanchipuramCoursesTableHeading}
            feeSectionContent={IIITKanchipuramCollegeFeeSectionContent} feeSectionHeadingId={IIITKanchipuramCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITKanchipuramCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITKanchipuramInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITKanchipuramInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITKanchipuramHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITKanchipuramHostelFeesDataTableHeading}
            seatSectionContent={IIITKanchipuramCollegeSeatSectionContent} seatSectionHeadingId={IIITKanchipuramCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITKanchipuramCollegeNavigationConstants[6].title} seatSectionTableContent={IIITKanchipuramSeatDataTableConstant} seatSectionTableHeading={IIITKanchipuramSeatDataTableHeading}
            cutoffSectionContent={IIITKanchipuramCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITKanchipuramCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITKanchipuramCollegeNavigationConstants[7].title}
            placementSectionContent={IIITKanchipuramCollegePlacementSectionContent} placementSectionHeadingId={IIITKanchipuramCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITKanchipuramCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITKancipuramPlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-bhubaneshwar",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Bhubaneshwar"
            collegePageNavigationConstants={IIITBhubaneshwarCollegeNavigationConstants}
            aboutSectionContent={IIITBhubaneshwarCollegeAboutSectionContent} aboutSectionHeadingId={IIITBhubaneshwarCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITBhubaneshwarCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITBhubaneswarAboutDataTableConstant} aboutSectionTableHeading={IIITBhubaneswarAboutDataTableHeading}
            locationSectionContent={IIITBhubaneshwarCollegeLocationSectionContent} locationSectionHeadingId={IIITBhubaneshwarCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITBhubaneshwarCollegeNavigationConstants[1].title} locationSectionTableContent={IIITBhubaneswarLocationDataTableConstant} locationSectionTableHeading={IIITBhubaneswarLocationDataTableHeading}
            rankingSectionContent={IIITBhubaneshwarCollegeRankingSectionContent} rankingSectionHeadingId={IIITBhubaneshwarCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITBhubaneshwarCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITBhubaneswarRankingDataTableConstant} rankingSectionTableHeading={IIITBhubaneswarRankingDataTableHeading}
            admissionSectionContent={IIITBhubaneshwarCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITBhubaneshwarCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITBhubaneshwarCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITBhubaneshwarCollegeCoursesSectionContent} coursesSectionHeadingId={IIITBhubaneshwarCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITBhubaneshwarCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITBhubaneswarCoursesTableContent} coursesSectionTableHeading={IIITBhubaneswarCoursesTableHeading}
            feeSectionContent={IIITBhubaneshwarCollegeFeeSectionContent} feeSectionHeadingId={IIITBhubaneshwarCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITBhubaneshwarCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITBhubaneswarInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITBhubaneswarInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITBhubaneswarHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITBhubaneswarHostelFeesDataTableHeading}
            seatSectionContent={IIITBhubaneshwarCollegeSeatSectionContent} seatSectionHeadingId={IIITBhubaneshwarCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITBhubaneshwarCollegeNavigationConstants[6].title} seatSectionTableContent={IIITBhubaneswarSeatDataTableConstant} seatSectionTableHeading={IIITBhubaneswarSeatDataTableHeading}
            cutoffSectionContent={IIITBhubaneshwarCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITBhubaneshwarCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITBhubaneshwarCollegeNavigationConstants[7].title}
            placementSectionContent={IIITBhubaneshwarCollegePlacementSectionContent} placementSectionHeadingId={IIITBhubaneshwarCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITBhubaneshwarCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITBhubaneswarPlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-pune",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Pune"
            collegePageNavigationConstants={IIITPuneCollegeNavigationConstants}
            aboutSectionContent={IIITPuneCollegeAboutSectionContent} aboutSectionHeadingId={IIITPuneCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITPuneCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITPuneAboutDataTableConstant} aboutSectionTableHeading={IIITPuneAboutDataTableHeading}
            locationSectionContent={IIITPuneCollegeLocationSectionContent} locationSectionHeadingId={IIITPuneCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITPuneCollegeNavigationConstants[1].title} locationSectionTableContent={IIITPuneLocationDataTableConstant} locationSectionTableHeading={IIITPuneLocationDataTableHeading}
            rankingSectionContent={IIITPuneCollegeRankingSectionContent} rankingSectionHeadingId={IIITPuneCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITPuneCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITPuneRankingDataTableConstant} rankingSectionTableHeading={IIITPuneRankingDataTableHeading}
            admissionSectionContent={IIITPuneCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITPuneCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITPuneCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITPuneCollegeCoursesSectionContent} coursesSectionHeadingId={IIITPuneCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITPuneCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITPuneCoursesTableContent} coursesSectionTableHeading={IIITPuneCoursesTableHeading}
            feeSectionContent={IIITPuneCollegeFeeSectionContent} feeSectionHeadingId={IIITPuneCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITPuneCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITPuneInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITPuneInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITPuneHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITPuneHostelFeesDataTableHeading}
            seatSectionContent={IIITPuneCollegeSeatSectionContent} seatSectionHeadingId={IIITPuneCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITPuneCollegeNavigationConstants[6].title} seatSectionTableContent={IIITPuneSeatDataTableConstant} seatSectionTableHeading={IIITPuneSeatDataTableHeading}
            cutoffSectionContent={IIITPuneCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITPuneCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITPuneCollegeNavigationConstants[7].title}
            placementSectionContent={IIITPuneCollegePlacementSectionContent} placementSectionHeadingId={IIITPuneCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITPuneCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITPunePlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-kota",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Kota"
            collegePageNavigationConstants={IIITKotaCollegeNavigationConstants}
            aboutSectionContent={IIITKotaCollegeAboutSectionContent} aboutSectionHeadingId={IIITKotaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITKotaCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITKotaAboutDataTableConstant} aboutSectionTableHeading={IIITKotaAboutDataTableHeading}
            locationSectionContent={IIITKotaCollegeLocationSectionContent} locationSectionHeadingId={IIITKotaCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITKotaCollegeNavigationConstants[1].title} locationSectionTableContent={IIITKotaLocationDataTableConstant} locationSectionTableHeading={IIITKotaLocationDataTableHeading}
            rankingSectionContent={IIITKotaCollegeRankingSectionContent} rankingSectionHeadingId={IIITKotaCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITKotaCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITKotaRankingDataTableConstant} rankingSectionTableHeading={IIITKotaRankingDataTableHeading}
            admissionSectionContent={IIITKotaCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITKotaCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITKotaCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITKotaCollegeCoursesSectionContent} coursesSectionHeadingId={IIITKotaCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITKotaCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITKotaCoursesTableContent} coursesSectionTableHeading={IIITKotaCoursesTableHeading}
            feeSectionContent={IIITKotaCollegeFeeSectionContent} feeSectionHeadingId={IIITKotaCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITKotaCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITKotaInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITKotaInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITKotaHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITKotaHostelFeesDataTableHeading}
            seatSectionContent={IIITKotaCollegeSeatSectionContent} seatSectionHeadingId={IIITKotaCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITKotaCollegeNavigationConstants[6].title} seatSectionTableContent={IIITKotaSeatDataTableConstant} seatSectionTableHeading={IIITKotaSeatDataTableHeading}
            cutoffSectionContent={IIITKotaCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITKotaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITKotaCollegeNavigationConstants[7].title}
            placementSectionContent={IIITKotaCollegePlacementSectionContent} placementSectionHeadingId={IIITKotaCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITKotaCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITKotaPlacementImageList}>
        </IIITGenericCollegePage>
    }
,
    {
        path: "/college/iiit/iiit-sricity",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Sri City"
            collegePageNavigationConstants={IIITSriCityCollegeNavigationConstants}
            aboutSectionContent={IIITSriCityCollegeAboutSectionContent} aboutSectionHeadingId={IIITSriCityCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITSriCityCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITSricityAboutDataTableConstant} aboutSectionTableHeading={IIITSricityAboutDataTableHeading}
            locationSectionContent={IIITSriCityCollegeLocationSectionContent} locationSectionHeadingId={IIITSriCityCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITSriCityCollegeNavigationConstants[1].title} locationSectionTableContent={IIITSricityLocationDataTableConstant} locationSectionTableHeading={IIITSricityLocationDataTableHeading}
            rankingSectionContent={IIITSriCityCollegeRankingSectionContent} rankingSectionHeadingId={IIITSriCityCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITSriCityCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITSricityRankingDataTableConstant} rankingSectionTableHeading={IIITSricityRankingDataTableHeading}
            admissionSectionContent={IIITSriCityCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITSriCityCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITSriCityCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITSriCityCollegeCoursesSectionContent} coursesSectionHeadingId={IIITSriCityCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITSriCityCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITSricityCoursesTableContent} coursesSectionTableHeading={IIITSricityCoursesTableHeading}
            feeSectionContent={IIITSriCityCollegeFeeSectionContent} feeSectionHeadingId={IIITSriCityCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITSriCityCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITSricityInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITSricityInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITSricityHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITSricityHostelFeesDataTableHeading}
            seatSectionContent={IIITSriCityCollegeSeatSectionContent} seatSectionHeadingId={IIITSriCityCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITSriCityCollegeNavigationConstants[6].title} seatSectionTableContent={IIITSricitySeatDataTableConstant} seatSectionTableHeading={IIITSricitySeatDataTableHeading}
            cutoffSectionContent={IIITSriCityCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITSriCityCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITSriCityCollegeNavigationConstants[7].title}
            placementSectionContent={IIITSriCityCollegePlacementSectionContent} placementSectionHeadingId={IIITSriCityCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITSriCityCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITSricityPlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-vadodara",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Vadodara"
            collegePageNavigationConstants={IIITVadodaraCollegeNavigationConstants}
            aboutSectionContent={IIITVadodaraCollegeAboutSectionContent} aboutSectionHeadingId={IIITVadodaraCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITVadodaraCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITVadodaraAboutDataTableConstant} aboutSectionTableHeading={IIITVadodaraAboutDataTableHeading}
            locationSectionContent={IIITVadodaraCollegeLocationSectionContent} locationSectionHeadingId={IIITVadodaraCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITVadodaraCollegeNavigationConstants[1].title} locationSectionTableContent={IIITVadodaraLocationDataTableConstant} locationSectionTableHeading={IIITVadodaraLocationDataTableHeading}
            rankingSectionContent={IIITVadodaraCollegeRankingSectionContent} rankingSectionHeadingId={IIITVadodaraCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITVadodaraCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITVadodaraRankingDataTableConstant} rankingSectionTableHeading={IIITVadodaraRankingDataTableHeading}
            admissionSectionContent={IIITVadodaraCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITVadodaraCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITVadodaraCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITVadodaraCollegeCoursesSectionContent} coursesSectionHeadingId={IIITVadodaraCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITVadodaraCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITVadodaraCoursesTableContent} coursesSectionTableHeading={IIITVadodaraCoursesTableHeading}
            feeSectionContent={IIITVadodaraCollegeFeeSectionContent} feeSectionHeadingId={IIITVadodaraCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITVadodaraCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITVadodaraInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITVadodaraInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITVadodaraHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITVadodaraHostelFeesDataTableHeading}
            seatSectionContent={IIITVadodaraCollegeSeatSectionContent} seatSectionHeadingId={IIITVadodaraCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITVadodaraCollegeNavigationConstants[6].title} seatSectionTableContent={IIITVadodaraSeatDataTableConstant} seatSectionTableHeading={IIITVadodaraSeatDataTableHeading}
            cutoffSectionContent={IIITVadodaraCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITVadodaraCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITVadodaraCollegeNavigationConstants[7].title}
            placementSectionContent={IIITVadodaraCollegePlacementSectionContent} placementSectionHeadingId={IIITVadodaraCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITVadodaraCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITVadodaraPlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-nagpur",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Nagpur"
            collegePageNavigationConstants={IIITNagpurCollegeNavigationConstants}
            aboutSectionContent={IIITNagpurCollegeAboutSectionContent} aboutSectionHeadingId={IIITNagpurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITNagpurCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITNagpurAboutDataTableConstant} aboutSectionTableHeading={IIITNagpurAboutDataTableHeading}
            locationSectionContent={IIITNagpurCollegeLocationSectionContent} locationSectionHeadingId={IIITNagpurCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITNagpurCollegeNavigationConstants[1].title} locationSectionTableContent={IIITNagpurLocationDataTableConstant} locationSectionTableHeading={IIITNagpurLocationDataTableHeading}
            rankingSectionContent={IIITNagpurCollegeRankingSectionContent} rankingSectionHeadingId={IIITNagpurCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITNagpurCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITNagpurRankingDataTableConstant} rankingSectionTableHeading={IIITNagpurRankingDataTableHeading}
            admissionSectionContent={IIITNagpurCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITNagpurCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITNagpurCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITNagpurCollegeCoursesSectionContent} coursesSectionHeadingId={IIITNagpurCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITNagpurCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITNagpurCoursesTableContent} coursesSectionTableHeading={IIITNagpurCoursesTableHeading}
            feeSectionContent={IIITNagpurCollegeFeeSectionContent} feeSectionHeadingId={IIITNagpurCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITNagpurCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITNagpurInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITNagpurInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITNagpurHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITNagpurHostelFeesDataTableHeading}
            seatSectionContent={IIITNagpurCollegeSeatSectionContent} seatSectionHeadingId={IIITNagpurCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITNagpurCollegeNavigationConstants[6].title} seatSectionTableContent={IIITNagpurSeatDataTableConstant} seatSectionTableHeading={IIITNagpurSeatDataTableHeading}
            cutoffSectionContent={IIITNagpurCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITNagpurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITNagpurCollegeNavigationConstants[7].title}
            placementSectionContent={IIITNagpurCollegePlacementSectionContent} placementSectionHeadingId={IIITNagpurCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITNagpurCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITNagpurPlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-kalyani",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Kalyani"
            collegePageNavigationConstants={IIITKalyaniCollegeNavigationConstants}
            aboutSectionContent={IIITKalyaniCollegeAboutSectionContent} aboutSectionHeadingId={IIITKalyaniCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITKalyaniCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITKalyaniAboutDataTableConstant} aboutSectionTableHeading={IIITKalyaniAboutDataTableHeading}
            locationSectionContent={IIITKalyaniCollegeLocationSectionContent} locationSectionHeadingId={IIITKalyaniCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITKalyaniCollegeNavigationConstants[1].title} locationSectionTableContent={IIITKalyaniLocationDataTableConstant} locationSectionTableHeading={IIITKalyaniLocationDataTableHeading}
            rankingSectionContent={IIITKalyaniCollegeRankingSectionContent} rankingSectionHeadingId={IIITKalyaniCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITKalyaniCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITKalyaniRankingDataTableConstant} rankingSectionTableHeading={IIITKalyaniRankingDataTableHeading}
            admissionSectionContent={IIITKalyaniCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITKalyaniCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITKalyaniCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITKalyaniCollegeCoursesSectionContent} coursesSectionHeadingId={IIITKalyaniCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITKalyaniCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITKalyaniCoursesTableContent} coursesSectionTableHeading={IIITKalyaniCoursesTableHeading}
            feeSectionContent={IIITKalyaniCollegeFeeSectionContent} feeSectionHeadingId={IIITKalyaniCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITKalyaniCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITKalyaniInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITKalyaniInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITKalyaniHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITKalyaniHostelFeesDataTableHeading}
            seatSectionContent={IIITKalyaniCollegeSeatSectionContent} seatSectionHeadingId={IIITKalyaniCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITKalyaniCollegeNavigationConstants[6].title} seatSectionTableContent={IIITKalyaniSeatDataTableConstant} seatSectionTableHeading={IIITKalyaniSeatDataTableHeading}
            cutoffSectionContent={IIITKalyaniCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITKalyaniCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITKalyaniCollegeNavigationConstants[7].title}
            placementSectionContent={IIITKalyaniCollegePlacementSectionContent} placementSectionHeadingId={IIITKalyaniCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITKalyaniCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITKalyaniPlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-lucknow",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Lucknow"
            collegePageNavigationConstants={IIITLucknowCollegeNavigationConstants}
            aboutSectionContent={IIITLucknowCollegeAboutSectionContent} aboutSectionHeadingId={IIITLucknowCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITLucknowCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITLucknowAboutDataTableConstant} aboutSectionTableHeading={IIITLucknowAboutDataTableHeading}
            locationSectionContent={IIITLucknowCollegeLocationSectionContent} locationSectionHeadingId={IIITLucknowCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITLucknowCollegeNavigationConstants[1].title} locationSectionTableContent={IIITLucknowLocationDataTableConstant} locationSectionTableHeading={IIITLucknowLocationDataTableHeading}
            rankingSectionContent={IIITLucknowCollegeRankingSectionContent} rankingSectionHeadingId={IIITLucknowCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITLucknowCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITLucknowRankingDataTableConstant} rankingSectionTableHeading={IIITLucknowRankingDataTableHeading}
            admissionSectionContent={IIITLucknowCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITLucknowCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITLucknowCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITLucknowCollegeCoursesSectionContent} coursesSectionHeadingId={IIITLucknowCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITLucknowCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITLucknowCoursesTableContent} coursesSectionTableHeading={IIITLucknowCoursesTableHeading}
            feeSectionContent={IIITLucknowCollegeFeeSectionContent} feeSectionHeadingId={IIITLucknowCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITLucknowCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITLucknowInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITLucknowInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITLucknowHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITLucknowHostelFeesDataTableHeading}
            seatSectionContent={IIITLucknowCollegeSeatSectionContent} seatSectionHeadingId={IIITLucknowCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITLucknowCollegeNavigationConstants[6].title} seatSectionTableContent={IIITLucknowSeatDataTableConstant} seatSectionTableHeading={IIITLucknowSeatDataTableHeading}
            cutoffSectionContent={IIITLucknowCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITLucknowCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITLucknowCollegeNavigationConstants[7].title}
            placementSectionContent={IIITLucknowCollegePlacementSectionContent} placementSectionHeadingId={IIITLucknowCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITLucknowCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITLucknowPlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-dharwad",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Dharwad"
            collegePageNavigationConstants={IIITDharwadCollegeNavigationConstants}
            aboutSectionContent={IIITDharwadCollegeAboutSectionContent} aboutSectionHeadingId={IIITDharwadCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITDharwadCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITDharwadAboutDataTableConstant} aboutSectionTableHeading={IIITDharwadAboutDataTableHeading}
            locationSectionContent={IIITDharwadCollegeLocationSectionContent} locationSectionHeadingId={IIITDharwadCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITDharwadCollegeNavigationConstants[1].title} locationSectionTableContent={IIITDharwadLocationDataTableConstant} locationSectionTableHeading={IIITDharwadLocationDataTableHeading}
            rankingSectionContent={IIITDharwadCollegeRankingSectionContent} rankingSectionHeadingId={IIITDharwadCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITDharwadCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITDharwadRankingDataTableConstant} rankingSectionTableHeading={IIITDharwadRankingDataTableHeading}
            admissionSectionContent={IIITDharwadCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITDharwadCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITDharwadCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITDharwadCollegeCoursesSectionContent} coursesSectionHeadingId={IIITDharwadCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITDharwadCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITDharwadCoursesTableContent} coursesSectionTableHeading={IIITDharwadCoursesTableHeading}
            feeSectionContent={IIITDharwadCollegeFeeSectionContent} feeSectionHeadingId={IIITDharwadCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITDharwadCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITDharwadInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITDharwadInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITDharwadHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITDharwadHostelFeesDataTableHeading}
            seatSectionContent={IIITDharwadCollegeSeatSectionContent} seatSectionHeadingId={IIITDharwadCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITDharwadCollegeNavigationConstants[6].title} seatSectionTableContent={IIITDharwadSeatDataTableConstant} seatSectionTableHeading={IIITDharwadSeatDataTableHeading}
            cutoffSectionContent={IIITDharwadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITDharwadCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITDharwadCollegeNavigationConstants[7].title}
            placementSectionContent={IIITDharwadCollegePlacementSectionContent} placementSectionHeadingId={IIITDharwadCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITDharwadCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITDharwadPlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-bhagalpur",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Bhagalpur"
            collegePageNavigationConstants={IIITBhagalpurCollegeNavigationConstants}
            aboutSectionContent={IIITBhagalpurCollegeAboutSectionContent} aboutSectionHeadingId={IIITBhagalpurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITBhagalpurCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITBhagalpurAboutDataTableConstant} aboutSectionTableHeading={IIITBhagalpurAboutDataTableHeading}
            locationSectionContent={IIITBhagalpurCollegeLocationSectionContent} locationSectionHeadingId={IIITBhagalpurCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITBhagalpurCollegeNavigationConstants[1].title} locationSectionTableContent={IIITBhagalpurLocationDataTableConstant} locationSectionTableHeading={IIITBhagalpurLocationDataTableHeading}
            rankingSectionContent={IIITBhagalpurCollegeRankingSectionContent} rankingSectionHeadingId={IIITBhagalpurCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITBhagalpurCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITBhagalpurRankingDataTableConstant} rankingSectionTableHeading={IIITBhagalpurRankingDataTableHeading}
            admissionSectionContent={IIITBhagalpurCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITBhagalpurCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITBhagalpurCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITBhagalpurCollegeCoursesSectionContent} coursesSectionHeadingId={IIITBhagalpurCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITBhagalpurCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITBhagalpurCoursesTableContent} coursesSectionTableHeading={IIITBhagalpurCoursesTableHeading}
            feeSectionContent={IIITBhagalpurCollegeFeeSectionContent} feeSectionHeadingId={IIITBhagalpurCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITBhagalpurCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITBhagalpurInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITBhagalpurInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITBhagalpurHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITBhagalpurHostelFeesDataTableHeading}
            seatSectionContent={IIITBhagalpurCollegeSeatSectionContent} seatSectionHeadingId={IIITBhagalpurCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITBhagalpurCollegeNavigationConstants[6].title} seatSectionTableContent={IIITBhagalpurSeatDataTableConstant} seatSectionTableHeading={IIITBhagalpurSeatDataTableHeading}
            cutoffSectionContent={IIITBhagalpurCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITBhagalpurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITBhagalpurCollegeNavigationConstants[7].title}
            placementSectionContent={IIITBhagalpurCollegePlacementSectionContent} placementSectionHeadingId={IIITBhagalpurCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITBhagalpurCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITBhagalpurPlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-bhopal",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Bhopal"
            collegePageNavigationConstants={IIITBhopalCollegeNavigationConstants}
            aboutSectionContent={IIITBhopalCollegeAboutSectionContent} aboutSectionHeadingId={IIITBhopalCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITBhopalCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITBhopalAboutDataTableConstant} aboutSectionTableHeading={IIITBhopalAboutDataTableHeading}
            locationSectionContent={IIITBhopalCollegeLocationSectionContent} locationSectionHeadingId={IIITBhopalCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITBhopalCollegeNavigationConstants[1].title} locationSectionTableContent={IIITBhopalLocationDataTableConstant} locationSectionTableHeading={IIITBhopalLocationDataTableHeading}
            rankingSectionContent={IIITBhopalCollegeRankingSectionContent} rankingSectionHeadingId={IIITBhopalCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITBhopalCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITBhopalRankingDataTableConstant} rankingSectionTableHeading={IIITBhopalRankingDataTableHeading}
            admissionSectionContent={IIITBhopalCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITBhopalCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITBhopalCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITBhopalCollegeCoursesSectionContent} coursesSectionHeadingId={IIITBhopalCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITBhopalCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITBhopalCoursesTableContent} coursesSectionTableHeading={IIITBhopalCoursesTableHeading}
            feeSectionContent={IIITBhopalCollegeFeeSectionContent} feeSectionHeadingId={IIITBhopalCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITBhopalCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITBhopalInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITBhopalInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITBhopalHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITBhopalHostelFeesDataTableHeading}
            seatSectionContent={IIITBhopalCollegeSeatSectionContent} seatSectionHeadingId={IIITBhopalCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITBhopalCollegeNavigationConstants[6].title} seatSectionTableContent={IIITBhopalSeatDataTableConstant} seatSectionTableHeading={IIITBhopalSeatDataTableHeading}
            cutoffSectionContent={IIITBhopalCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITBhopalCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITBhopalCollegeNavigationConstants[7].title}
            placementSectionContent={IIITBhopalCollegePlacementSectionContent} placementSectionHeadingId={IIITBhopalCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITBhopalCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITBhopalPlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-kottayam",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Kottayam"
            collegePageNavigationConstants={IIITKottayamCollegeNavigationConstants}
            aboutSectionContent={IIITKottayamCollegeAboutSectionContent} aboutSectionHeadingId={IIITKottayamCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITKottayamCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITKottayamAboutDataTableConstant} aboutSectionTableHeading={IIITKottayamAboutDataTableHeading}
            locationSectionContent={IIITKottayamCollegeLocationSectionContent} locationSectionHeadingId={IIITKottayamCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITKottayamCollegeNavigationConstants[1].title} locationSectionTableContent={IIITKottayamLocationDataTableConstant} locationSectionTableHeading={IIITKottayamLocationDataTableHeading}
            rankingSectionContent={IIITKottayamCollegeRankingSectionContent} rankingSectionHeadingId={IIITKottayamCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITKottayamCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITKottayamRankingDataTableConstant} rankingSectionTableHeading={IIITKottayamRankingDataTableHeading}
            admissionSectionContent={IIITKottayamCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITKottayamCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITKottayamCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITKottayamCollegeCoursesSectionContent} coursesSectionHeadingId={IIITKottayamCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITKottayamCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITKottayamCoursesTableContent} coursesSectionTableHeading={IIITKottayamCoursesTableHeading}
            feeSectionContent={IIITKottayamCollegeFeeSectionContent} feeSectionHeadingId={IIITKottayamCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITKottayamCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITKottayamInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITKottayamInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITKottayamHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITKottayamHostelFeesDataTableHeading}
            seatSectionContent={IIITKottayamCollegeSeatSectionContent} seatSectionHeadingId={IIITKottayamCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITKottayamCollegeNavigationConstants[6].title} seatSectionTableContent={IIITKottayamSeatDataTableConstant} seatSectionTableHeading={IIITKottayamSeatDataTableHeading}
            cutoffSectionContent={IIITKottayamCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITKottayamCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITKottayamCollegeNavigationConstants[7].title}
            placementSectionContent={IIITKottayamCollegePlacementSectionContent} placementSectionHeadingId={IIITKottayamCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITKottayamCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITKottayamPlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-ranchi",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Ranchi"
            collegePageNavigationConstants={IIITRanchiCollegeNavigationConstants}
            aboutSectionContent={IIITRanchiCollegeAboutSectionContent} aboutSectionHeadingId={IIITRanchiCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITRanchiCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITRanchiAboutDataTableConstant} aboutSectionTableHeading={IIITRanchiAboutDataTableHeading}
            locationSectionContent={IIITRanchiCollegeLocationSectionContent} locationSectionHeadingId={IIITRanchiCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITRanchiCollegeNavigationConstants[1].title} locationSectionTableContent={IIITRanchiLocationDataTableConstant} locationSectionTableHeading={IIITRanchiLocationDataTableHeading}
            rankingSectionContent={IIITRanchiCollegeRankingSectionContent} rankingSectionHeadingId={IIITRanchiCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITRanchiCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITRanchiRankingDataTableConstant} rankingSectionTableHeading={IIITRanchiRankingDataTableHeading}
            admissionSectionContent={IIITRanchiCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITRanchiCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITRanchiCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITRanchiCollegeCoursesSectionContent} coursesSectionHeadingId={IIITRanchiCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITRanchiCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITRanchiCoursesTableContent} coursesSectionTableHeading={IIITRanchiCoursesTableHeading}
            feeSectionContent={IIITRanchiCollegeFeeSectionContent} feeSectionHeadingId={IIITRanchiCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITRanchiCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITRanchiInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITRanchiInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITRanchiHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITRanchiHostelFeesDataTableHeading}
            seatSectionContent={IIITRanchiCollegeSeatSectionContent} seatSectionHeadingId={IIITRanchiCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITRanchiCollegeNavigationConstants[6].title} seatSectionTableContent={IIITRanchiSeatDataTableConstant} seatSectionTableHeading={IIITRanchiSeatDataTableHeading}
            cutoffSectionContent={IIITRanchiCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITRanchiCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITRanchiCollegeNavigationConstants[7].title}
            placementSectionContent={IIITRanchiCollegePlacementSectionContent} placementSectionHeadingId={IIITRanchiCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITRanchiCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITRanchiPlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-una",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Una"
            collegePageNavigationConstants={IIITUnaCollegeNavigationConstants}
            aboutSectionContent={IIITUnaCollegeAboutSectionContent} aboutSectionHeadingId={IIITUnaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITUnaCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITUnaAboutDataTableConstant} aboutSectionTableHeading={IIITUnaAboutDataTableHeading}
            locationSectionContent={IIITUnaCollegeLocationSectionContent} locationSectionHeadingId={IIITUnaCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITUnaCollegeNavigationConstants[1].title} locationSectionTableContent={IIITUnaLocationDataTableConstant} locationSectionTableHeading={IIITUnaLocationDataTableHeading}
            rankingSectionContent={IIITUnaCollegeRankingSectionContent} rankingSectionHeadingId={IIITUnaCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITUnaCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITUnaRankingDataTableConstant} rankingSectionTableHeading={IIITUnaRankingDataTableHeading}
            admissionSectionContent={IIITUnaCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITUnaCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITUnaCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITUnaCollegeCoursesSectionContent} coursesSectionHeadingId={IIITUnaCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITUnaCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITUnaCoursesTableContent} coursesSectionTableHeading={IIITUnaCoursesTableHeading}
            feeSectionContent={IIITUnaCollegeFeeSectionContent} feeSectionHeadingId={IIITUnaCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITUnaCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITUnaInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITUnaInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITUnaHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITUnaHostelFeesDataTableHeading}
            seatSectionContent={IIITUnaCollegeSeatSectionContent} seatSectionHeadingId={IIITUnaCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITUnaCollegeNavigationConstants[6].title} seatSectionTableContent={IIITUnaSeatDataTableConstant} seatSectionTableHeading={IIITUnaSeatDataTableHeading}
            cutoffSectionContent={IIITUnaCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITUnaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITUnaCollegeNavigationConstants[7].title}
            placementSectionContent={IIITUnaCollegePlacementSectionContent} placementSectionHeadingId={IIITUnaCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITUnaCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITUnaPlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-surat",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Surat"
            collegePageNavigationConstants={IIITSuratCollegeNavigationConstants}
            aboutSectionContent={IIITSuratCollegeAboutSectionContent} aboutSectionHeadingId={IIITSuratCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITSuratCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITSuratAboutDataTableConstant} aboutSectionTableHeading={IIITSuratAboutDataTableHeading}
            locationSectionContent={IIITSuratCollegeLocationSectionContent} locationSectionHeadingId={IIITSuratCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITSuratCollegeNavigationConstants[1].title} locationSectionTableContent={IIITSuratLocationDataTableConstant} locationSectionTableHeading={IIITSuratLocationDataTableHeading}
            rankingSectionContent={IIITSuratCollegeRankingSectionContent} rankingSectionHeadingId={IIITSuratCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITSuratCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITSuratRankingDataTableConstant} rankingSectionTableHeading={IIITSuratRankingDataTableHeading}
            admissionSectionContent={IIITSuratCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITSuratCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITSuratCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITSuratCollegeCoursesSectionContent} coursesSectionHeadingId={IIITSuratCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITSuratCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITSuratCoursesTableContent} coursesSectionTableHeading={IIITSuratCoursesTableHeading}
            feeSectionContent={IIITSuratCollegeFeeSectionContent} feeSectionHeadingId={IIITSuratCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITSuratCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITSuratInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITSuratInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITSuratHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITSuratHostelFeesDataTableHeading}
            seatSectionContent={IIITSuratCollegeSeatSectionContent} seatSectionHeadingId={IIITSuratCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITSuratCollegeNavigationConstants[6].title} seatSectionTableContent={IIITSuratSeatDataTableConstant} seatSectionTableHeading={IIITSuratSeatDataTableHeading}
            cutoffSectionContent={IIITSuratCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITSuratCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITSuratCollegeNavigationConstants[7].title}
            placementSectionContent={IIITSuratCollegePlacementSectionContent} placementSectionHeadingId={IIITSuratCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITSuratCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITSuratPlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-manipur",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Manipur"
            collegePageNavigationConstants={IIITManipurCollegeNavigationConstants}
            aboutSectionContent={IIITManipurCollegeAboutSectionContent} aboutSectionHeadingId={IIITManipurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITManipurCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITManipurAboutDataTableConstant} aboutSectionTableHeading={IIITManipurAboutDataTableHeading}
            locationSectionContent={IIITManipurCollegeLocationSectionContent} locationSectionHeadingId={IIITManipurCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITManipurCollegeNavigationConstants[1].title} locationSectionTableContent={IIITManipurLocationDataTableConstant} locationSectionTableHeading={IIITManipurLocationDataTableHeading}
            rankingSectionContent={IIITManipurCollegeRankingSectionContent} rankingSectionHeadingId={IIITManipurCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITManipurCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITManipurRankingDataTableConstant} rankingSectionTableHeading={IIITManipurRankingDataTableHeading}
            admissionSectionContent={IIITManipurCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITManipurCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITManipurCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITManipurCollegeCoursesSectionContent} coursesSectionHeadingId={IIITManipurCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITManipurCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITManipurCoursesTableContent} coursesSectionTableHeading={IIITManipurCoursesTableHeading}
            feeSectionContent={IIITManipurCollegeFeeSectionContent} feeSectionHeadingId={IIITManipurCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITManipurCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITManipurInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITManipurInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITManipurHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITManipurHostelFeesDataTableHeading}
            seatSectionContent={IIITManipurCollegeSeatSectionContent} seatSectionHeadingId={IIITManipurCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITManipurCollegeNavigationConstants[6].title} seatSectionTableContent={IIITManipurSeatDataTableConstant} seatSectionTableHeading={IIITManipurSeatDataTableHeading}
            cutoffSectionContent={IIITManipurCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITManipurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITManipurCollegeNavigationConstants[7].title}
            placementSectionContent={IIITManipurCollegePlacementSectionContent} placementSectionHeadingId={IIITManipurCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITManipurCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITManipurPlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-kurnool",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Kurnool"
            collegePageNavigationConstants={IIITKurnoolCollegeNavigationConstants}
            aboutSectionContent={IIITKurnoolCollegeAboutSectionContent} aboutSectionHeadingId={IIITKurnoolCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITKurnoolCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITKurnoolAboutDataTableConstant} aboutSectionTableHeading={IIITKurnoolAboutDataTableHeading}
            locationSectionContent={IIITKurnoolCollegeLocationSectionContent} locationSectionHeadingId={IIITKurnoolCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITKurnoolCollegeNavigationConstants[1].title} locationSectionTableContent={IIITKurnoolLocationDataTableConstant} locationSectionTableHeading={IIITKurnoolLocationDataTableHeading}
            rankingSectionContent={IIITKurnoolCollegeRankingSectionContent} rankingSectionHeadingId={IIITKurnoolCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITKurnoolCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITKurnoolRankingDataTableConstant} rankingSectionTableHeading={IIITKurnoolRankingDataTableHeading}
            admissionSectionContent={IIITKurnoolCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITKurnoolCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITKurnoolCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITKurnoolCollegeCoursesSectionContent} coursesSectionHeadingId={IIITKurnoolCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITKurnoolCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITKurnoolCoursesTableContent} coursesSectionTableHeading={IIITKurnoolCoursesTableHeading}
            feeSectionContent={IIITKurnoolCollegeFeeSectionContent} feeSectionHeadingId={IIITKurnoolCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITKurnoolCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITKurnoolInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITKurnoolInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITKurnoolHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITKurnoolHostelFeesDataTableHeading}
            seatSectionContent={IIITKurnoolCollegeSeatSectionContent} seatSectionHeadingId={IIITKurnoolCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITKurnoolCollegeNavigationConstants[6].title} seatSectionTableContent={IIITKurnoolSeatDataTableConstant} seatSectionTableHeading={IIITKurnoolSeatDataTableHeading}
            cutoffSectionContent={IIITKurnoolCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITKurnoolCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITKurnoolCollegeNavigationConstants[7].title}
            placementSectionContent={IIITKurnoolCollegePlacementSectionContent} placementSectionHeadingId={IIITKurnoolCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITKurnoolCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITKurnoolPlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-tiruchirapalli",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Tiruchirapalli"
            collegePageNavigationConstants={IIITTiruchirapalliCollegeNavigationConstants}
            aboutSectionContent={IIITTiruchirapalliCollegeAboutSectionContent} aboutSectionHeadingId={IIITTiruchirapalliCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITTiruchirapalliCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITTiruchirapalliAboutDataTableConstant} aboutSectionTableHeading={IIITTiruchirapalliAboutDataTableHeading}
            locationSectionContent={IIITTiruchirapalliCollegeLocationSectionContent} locationSectionHeadingId={IIITTiruchirapalliCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITTiruchirapalliCollegeNavigationConstants[1].title} locationSectionTableContent={IIITTiruchirapalliLocationDataTableConstant} locationSectionTableHeading={IIITTiruchirapalliLocationDataTableHeading}
            rankingSectionContent={IIITTiruchirapalliCollegeRankingSectionContent} rankingSectionHeadingId={IIITTiruchirapalliCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITTiruchirapalliCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITTiruchirapalliRankingDataTableConstant} rankingSectionTableHeading={IIITTiruchirapalliRankingDataTableHeading}
            admissionSectionContent={IIITTiruchirapalliCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITTiruchirapalliCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITTiruchirapalliCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITTiruchirapalliCollegeCoursesSectionContent} coursesSectionHeadingId={IIITTiruchirapalliCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITTiruchirapalliCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITTiruchirapalliCoursesTableContent} coursesSectionTableHeading={IIITTiruchirapalliCoursesTableHeading}
            feeSectionContent={IIITTiruchirapalliCollegeFeeSectionContent} feeSectionHeadingId={IIITTiruchirapalliCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITTiruchirapalliCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITTiruchirapalliInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITTiruchirapalliInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITTiruchirapalliHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITTiruchirapalliHostelFeesDataTableHeading}
            seatSectionContent={IIITTiruchirapalliCollegeSeatSectionContent} seatSectionHeadingId={IIITTiruchirapalliCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITTiruchirapalliCollegeNavigationConstants[6].title} seatSectionTableContent={IIITTiruchirapalliSeatDataTableConstant} seatSectionTableHeading={IIITTiruchirapalliSeatDataTableHeading}
            cutoffSectionContent={IIITTiruchirapalliCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITTiruchirapalliCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITTiruchirapalliCollegeNavigationConstants[7].title}
            placementSectionContent={IIITTiruchirapalliCollegePlacementSectionContent} placementSectionHeadingId={IIITTiruchirapalliCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITTiruchirapalliCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITTiruchirapalliPlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-sonepat",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Sonepat"
            collegePageNavigationConstants={IIITSonepatCollegeNavigationConstants}
            aboutSectionContent={IIITSonepatCollegeAboutSectionContent} aboutSectionHeadingId={IIITSonepatCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITSonepatCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITSonepatAboutDataTableConstant} aboutSectionTableHeading={IIITSonepatAboutDataTableHeading}
            locationSectionContent={IIITSonepatCollegeLocationSectionContent} locationSectionHeadingId={IIITSonepatCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITSonepatCollegeNavigationConstants[1].title} locationSectionTableContent={IIITSonepatLocationDataTableConstant} locationSectionTableHeading={IIITSonepatLocationDataTableHeading}
            rankingSectionContent={IIITSonepatCollegeRankingSectionContent} rankingSectionHeadingId={IIITSonepatCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITSonepatCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITSonepatRankingDataTableConstant} rankingSectionTableHeading={IIITSonepatRankingDataTableHeading}
            admissionSectionContent={IIITSonepatCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITSonepatCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITSonepatCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITSonepatCollegeCoursesSectionContent} coursesSectionHeadingId={IIITSonepatCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITSonepatCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITSonepatCoursesTableContent} coursesSectionTableHeading={IIITSonepatCoursesTableHeading}
            feeSectionContent={IIITSonepatCollegeFeeSectionContent} feeSectionHeadingId={IIITSonepatCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITSonepatCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITSonepatInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITSonepatInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITSonepatHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITSonepatHostelFeesDataTableHeading}
            seatSectionContent={IIITSonepatCollegeSeatSectionContent} seatSectionHeadingId={IIITSonepatCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITSonepatCollegeNavigationConstants[6].title} seatSectionTableContent={IIITSonepatSeatDataTableConstant} seatSectionTableHeading={IIITSonepatSeatDataTableHeading}
            cutoffSectionContent={IIITSonepatCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITSonepatCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITSonepatCollegeNavigationConstants[7].title}
            placementSectionContent={IIITSonepatCollegePlacementSectionContent} placementSectionHeadingId={IIITSonepatCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITSonepatCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITSonepatPlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-agartala",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Agartala"
            collegePageNavigationConstants={IIITAgartalaCollegeNavigationConstants}
            aboutSectionContent={IIITAgartalaCollegeAboutSectionContent} aboutSectionHeadingId={IIITAgartalaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITAgartalaCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITAgartalaAboutDataTableConstant} aboutSectionTableHeading={IIITAgartalaAboutDataTableHeading}
            locationSectionContent={IIITAgartalaCollegeLocationSectionContent} locationSectionHeadingId={IIITAgartalaCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITAgartalaCollegeNavigationConstants[1].title} locationSectionTableContent={IIITAgartalaLocationDataTableConstant} locationSectionTableHeading={IIITAgartalaLocationDataTableHeading}
            rankingSectionContent={IIITAgartalaCollegeRankingSectionContent} rankingSectionHeadingId={IIITAgartalaCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITAgartalaCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITAgartalaRankingDataTableConstant} rankingSectionTableHeading={IIITAgartalaRankingDataTableHeading}
            admissionSectionContent={IIITAgartalaCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITAgartalaCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITAgartalaCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITAgartalaCollegeCoursesSectionContent} coursesSectionHeadingId={IIITAgartalaCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITAgartalaCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITAgartalaCoursesTableContent} coursesSectionTableHeading={IIITAgartalaCoursesTableHeading}
            feeSectionContent={IIITAgartalaCollegeFeeSectionContent} feeSectionHeadingId={IIITAgartalaCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITAgartalaCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITAgartalaInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITAgartalaInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITAgartalaHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITAgartalaHostelFeesDataTableHeading}
            seatSectionContent={IIITAgartalaCollegeSeatSectionContent} seatSectionHeadingId={IIITAgartalaCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITAgartalaCollegeNavigationConstants[6].title} seatSectionTableContent={IIITAgartalaSeatDataTableConstant} seatSectionTableHeading={IIITAgartalaSeatDataTableHeading}
            cutoffSectionContent={IIITAgartalaCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITAgartalaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITAgartalaCollegeNavigationConstants[7].title}
            placementSectionContent={IIITAgartalaCollegePlacementSectionContent} placementSectionHeadingId={IIITAgartalaCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITAgartalaCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITAgartalaPlacementImageList}>
        </IIITGenericCollegePage>
    },
    {
        path: "/college/iiit/iiit-karnataka",
        component: <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Karnataka"
            collegePageNavigationConstants={IIITKarnatakaCollegeNavigationConstants}
            aboutSectionContent={IIITKarnatakaCollegeAboutSectionContent} aboutSectionHeadingId={IIITKarnatakaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITKarnatakaCollegeNavigationConstants[0].title} aboutSectionTableContent={IIITKarnatakaAboutDataTableConstant} aboutSectionTableHeading={IIITKarnatakaAboutDataTableHeading}
            locationSectionContent={IIITKarnatakaCollegeLocationSectionContent} locationSectionHeadingId={IIITKarnatakaCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IIITKarnatakaCollegeNavigationConstants[1].title} locationSectionTableContent={IIITKarnatakaLocationDataTableConstant} locationSectionTableHeading={IIITKarnatakaLocationDataTableHeading}
            rankingSectionContent={IIITKarnatakaCollegeRankingSectionContent} rankingSectionHeadingId={IIITKarnatakaCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IIITKarnatakaCollegeNavigationConstants[2].title} rankingSectionTableContent={IIITKarnatakaRankingDataTableConstant} rankingSectionTableHeading={IIITKarnatakaRankingDataTableHeading}
            admissionSectionContent={IIITKarnatakaCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITKarnatakaCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IIITKarnatakaCollegeNavigationConstants[3].title}
            coursesSectionContent={IIITKarnatakaCollegeCoursesSectionContent} coursesSectionHeadingId={IIITKarnatakaCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IIITKarnatakaCollegeNavigationConstants[4].title} coursesSectionTableContent={IIITKarnatakaCoursesTableContent} coursesSectionTableHeading={IIITKarnatakaCoursesTableHeading}
            feeSectionContent={IIITKarnatakaCollegeFeeSectionContent} feeSectionHeadingId={IIITKarnatakaCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IIITKarnatakaCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={IIITKarnatakaInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={IIITKarnatakaInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={IIITKarnatakaHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={IIITKarnatakaHostelFeesDataTableHeading}
            seatSectionContent={IIITKarnatakaCollegeSeatSectionContent} seatSectionHeadingId={IIITKarnatakaCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IIITKarnatakaCollegeNavigationConstants[6].title} seatSectionTableContent={IIITKarnatakaSeatDataTableConstant} seatSectionTableHeading={IIITKarnatakaSeatDataTableHeading}
            cutoffSectionContent={IIITKarnatakaCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITKarnatakaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITKarnatakaCollegeNavigationConstants[7].title}
            placementSectionContent={IIITKarnatakaCollegePlacementSectionContent} placementSectionHeadingId={IIITKarnatakaCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IIITKarnatakaCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={IIITKarnatakaPlacementImageList}>
        </IIITGenericCollegePage>
    }
]

// say everything went fine 
export default routes