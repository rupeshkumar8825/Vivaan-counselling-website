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
    IITMadrasCollegeSeatSectionContent} from "../constants/college/IIT/IITCollegePageNavigationComponentConstants";

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
    IIITAllahabadCollegeCutOffSectionContent
    
    } from "../constants/college/IIIT/IIITCollegePageNavigationComponentConstant";
import { 
    IIITHyderabadCoursesDetailsConstants,
    IIITGwaliorCoursesDetailsConstants,
    IIITBangaloreCoursesDetailsConstants,
    IIITGuwahatiCoursesDetailsConstants,
    IIITJabalpurCoursesDetailsConstants,
    IIITAllahabadCoursesDetailsConstants,
    IIITKanchipuramCoursesDetailsConstants,
    IIITBhubaneshwarCoursesDetailsConstants,
    IIITPuneCoursesDetailsConstants,
    IIITKotaCoursesDetailsConstants,
    IIITSriCityCoursesDetailsConstants,
    IIITVadodaraCoursesDetailsConstants,
    IIITNagpurCoursesDetailsConstants,
    IIITKalyaniCoursesDetailsConstants,
    IIITLucknowCoursesDetailsConstants,
    IIITDharwadCoursesDetailsConstants,
    IIITBhagalpurCoursesDetailsConstants,
    IIITBhopalCoursesDetailsConstants,
    IIITKottayamCoursesDetailsConstants,
    IIITRanchiCoursesDetailsConstants,
    IIITUnaCoursesDetailsConstants,
    IIITSuratCoursesDetailsConstants,
    IIITManipurCoursesDetailsConstants,
    IIITKurnoolCoursesDetailsConstants,
    IIITTiruchirapalliCoursesDetailsConstants,
    IIITSonepatCoursesDetailsConstants,
    IIITAgartalaCoursesDetailsConstants,
    IIITKarnatakaCoursesDetailsConstants

 } from "../constants/college/IIIT/IIITCourseDataCollegeConstants";
import { NITAgaratalaHostelFeesDataTableConstant, NITAgaratalaHostelFeesDataTableHeading, NITAgaratalaInstituteFeesDataTableConstant, NITAgaratalaInstituteFeesDataTableHeading, NITAllahabadHostelFeesDataTableConstant, NITAllahabadHostelFeesDataTableHeading, NITAllahabadInstituteFeesDataTableConstant, NITAllahabadInstituteFeesDataTableHeading, NITAndhraPradeshHostelFeesDataTableConstant, NITAndhraPradeshHostelFeesDataTableHeading, NITAndhraPradeshInstituteFeesDataTableConstant, NITAndhraPradeshInstituteFeesDataTableHeading, NITArunachalPradeshHostelFeesDataTableConstant, NITArunachalPradeshHostelFeesDataTableHeading, NITArunachalPradeshInstituteFeesDataTableConstant, NITArunachalPradeshInstituteFeesDataTableHeading, NITBhopalHostelFeesDataTableConstant, NITBhopalHostelFeesDataTableHeading, NITBhopalInstituteFeesDataTableConstant, NITBhopalInstituteFeesDataTableHeading, NITCalicutHostelFeesDataTableConstant, NITCalicutHostelFeesDataTableHeading, NITCalicutInstituteFeesDataTableHeading, NITDelhiHostelFeesDataTableConstant, NITDelhiHostelFeesDataTableHeading, NITDelhiInstituteFeesDataTableConstant, NITDelhiInstituteFeesDataTableHeading, NITDurgapurHostelFeesDataTableConstant, NITDurgapurHostelFeesDataTableHeading, NITDurgapurInstituteFeesDataTableConstant, NITDurgapurInstituteFeesDataTableHeading, NITGoaHostelFeesDataTableConstant, NITGoaHostelFeesDataTableHeading, NITGoaInstituteFeesDataTableConstant, NITGoaInstituteFeesDataTableHeading, NITHamirpurHostelFeesDataTableConstant, NITHamirpurHostelFeesDataTableHeading, NITHamirpurInstituteFeesDataTableConstant, NITHamirpurInstituteFeesDataTableHeading, NITJaipurHostelFeesDataTableConstant, NITJaipurInstituteFeesDataTableConstant, NITJaipurInstituteFeesDataTableHeading, NITJalandharHostelFeesDataTableConstant, NITJalandharHostelFeesDataTableHeading, NITJalandharInstituteFeesDataTableConstant, NITJalandharInstituteFeesDataTableHeading, NITJamshedpurHostelFeesDataTableConstant, NITJamshedpurHostelFeesDataTableHeading, NITJamshedpurInstituteFeesDataTableConstant, NITJamshedpurInstituteFeesDataTableHeading, NITKarnatakaHostelFeesDataTableConstant, NITKarnatakaHostelFeesDataTableHeading, NITKarnatakaInstituteFeesDataTableConstant, NITKarnatakaInstituteFeesDataTableHeading, NITKurukshetraHostelFeesDataTableConstant, NITKurukshetraHostelFeesDataTableHeading, NITKurukshetraInstituteFeesDataTableConstant, NITKurukshetraInstituteFeesDataTableHeading, NITManipurHostelFeesDataTableConstant, NITManipurHostelFeesDataTableHeading, NITManipurInstituteFeesDataTableConstant, NITManipurInstituteFeesDataTableHeading, NITMeghalayaHostelFeesDataTableConstant, NITMeghalayaHostelFeesDataTableHeading, NITMeghalayaInstituteFeesDataTableConstant, NITMeghalayaInstituteFeesDataTableHeading, NITMizoramHostelFeesDataTableConstant, NITMizoramHostelFeesDataTableHeading, NITMizoramInstituteFeesDataTableConstant, NITMizoramInstituteFeesDataTableHeading, NITNagalandHostelFeesDataTableConstant, NITNagalandHostelFeesDataTableHeading, NITNagalandInstituteFeesDataTableConstant, NITNagalandInstituteFeesDataTableHeading, NITNagpurHostelFeesDataTableConstant, NITNagpurHostelFeesDataTableHeading, NITNagpurInstituteFeesDataTableConstant, NITNagpurInstituteFeesDataTableHeading, NITPatnaHostelFeesDataTableConstant, NITPatnaHostelFeesDataTableHeading, NITPatnaInstituteFeesDataTableConstant, NITPatnaInstituteFeesDataTableHeading, NITPuducherryHostelFeesDataTableConstant, NITPuducherryHostelFeesDataTableHeading, NITPuducherryInstituteFeesDataTableConstant, NITPuducherryInstituteFeesDataTableHeading, NITRaipurHostelFeesDataTableConstant, NITRaipurHostelFeesDataTableHeading, NITRaipurInstituteFeesDataTableConstant, NITRaipurInstituteFeesDataTableHeading, NITRourkelaHostelFeesDataTableConstant, NITRourkelaHostelFeesDataTableHeading, NITRourkelaInstituteFeesDataTableConstant, NITRourkelaInstituteFeesDataTableHeading, NITShibpurHostelFeesDataTableConstant, NITShibpurHostelFeesDataTableHeading, NITShibpurInstituteFeesDataTableConstant, NITShibpurInstituteFeesDataTableHeading, NITSikkimHostelFeesDataTableConstant, NITSikkimHostelFeesDataTableHeading, NITSikkimInstituteFeesDataTableConstant, NITSikkimInstituteFeesDataTableHeading, NITSilcharHostelFeesDataTableConstant, NITSilcharHostelFeesDataTableHeading, NITSilcharInstituteFeesDataTableConstant, NITSilcharInstituteFeesDataTableHeading, NITSrinagarHostelFeesDataTableConstant, NITSrinagarHostelFeesDataTableHeading, NITSrinagarInstituteFeesDataTableConstant, NITSrinagarInstituteFeesDataTableHeading, NITSuratHostelFeesDataTableConstant, NITSuratHostelFeesDataTableHeading, NITSuratInstituteFeesDataTableConstant, NITSuratInstituteFeesDataTableHeading, NITTiruchirapalliHostelFeesDataTableConstant, NITTiruchirapalliHostelFeesDataTableHeading, NITTiruchirapalliInstituteFeesDataTableConstant, NITTiruchirapalliInstituteFeesDataTableHeading, NITUttarakhandHostelFeesDataTableConstant, NITUttarakhandHostelFeesDataTableHeading, NITUttarakhandInstituteFeesDataTableConstant, NITUttarakhandInstituteFeesDataTableHeading, NITWarangalHostelFeesDataTableConstant, NITWarangalHostelFeesDataTableHeading, NITWarangalInstituteFeesDataTableConstant, NITWarangalInstituteFeesDataTableHeading } from "../constants/college/NIT/NITFeesDataCollegeConstant";
import { NITAgaratalaAboutDataTableConstant, NITAgaratalaAboutDataTableHeading, NITAllahabadAboutDataTableConstant, NITAllahabadAboutDataTableHeading, NITAndhraPradeshAboutDataTableConstant, NITAndhraPradeshAboutDataTableHeading, NITArunachalPradeshAboutDataTableConstant, NITArunachalPradeshAboutDataTableHeading, NITBhopalAboutDataTableConstant, NITCalicutAboutDataTableConstant, NITCalicutAboutDataTableHeading, NITDelhiAboutDataTableConstant, NITDelhiAboutDataTableHeading, NITDurgapurAboutDataTableConstant, NITGoaAboutDataTableConstant, NITGoaAboutDataTableHeading, NITHamirpurAboutDataTableConstant, NITHamirpurAboutDataTableHeading, NITJaipurAboutDataTableConstant, NITJaipurAboutDataTableHeading, NITJalandharAboutDataTableConstant, NITJalandharAboutDataTableHeading, NITJamshedpurAboutDataTableConstant, NITJamshedpurAboutDataTableHeading, NITKarnatakaAboutDataTableConstant, NITKarnatakaAboutDataTableHeading, NITKurukshetraAboutDataTableConstant, NITKurukshetraAboutDataTableHeading, NITManipurAboutDataTableConstant, NITManipurAboutDataTableHeading, NITMeghalayaAboutDataTableConstant, NITMeghalayaAboutDataTableHeading, NITMizoramAboutDataTableConstant, NITMizoramAboutDataTableHeading, NITNagalandAboutDataTableConstant, NITNagalandAboutDataTableHeading, NITNagpurAboutDataTableConstant, NITNagpurAboutDataTableHeading, NITPatnaAboutDataTableConstant, NITPatnaAboutDataTableHeading, NITPuducherryAboutDataTableConstant, NITPuducherryAboutDataTableHeading, NITRaipurAboutDataTableConstant, NITRaipurAboutDataTableHeading, NITRourkelaAboutDataTableConstant, NITRourkelaAboutDataTableHeading, NITShibpurAboutDataTableConstant, NITShibpurAboutDataTableHeading, NITSikkimAboutDataTableConstant, NITSikkimAboutDataTableHeading, NITSilcharAboutDataTableConstant, NITSilcharAboutDataTableHeading, NITSrinagarAboutDataTableConstant, NITSrinagarAboutDataTableHeading, NITSuratAboutDataTableConstant, NITSuratAboutDataTableHeading, NITTiruchirappalliAboutDataTableConstant, NITTiruchirappalliAboutDataTableHeading, NITUttarakhandAboutDataTableConstant, NITUttarakhandAboutDataTableHeading, NITWarangalAboutDataTableConstant, NITWarangalAboutDataTableHeading } from "../constants/college/NIT/NITAboutDataCollegeConstant";
import { NITAgaratalaLocationDataTableConstant, NITAgaratalaLocationDataTableHeading, NITAllahabadLocationDataTableConstant, NITAndhraPradeshLocationDataTableConstant, NITAndhraPradeshLocationDataTableHeading, NITArunachalPradeshLocationDataTableConstant, NITArunachalPradeshLocationDataTableHeading, NITBhopalLocationDataTableConstant, NITBhopalLocationDataTableHeading, NITCalicutLocationDataTableConstant, NITCalicutLocationDataTableHeading, NITDelhiLocationDataTableConstant, NITDelhiLocationDataTableHeading, NITDurgapurLocationDataTableConstant, NITDurgapurLocationDataTableHeading, NITGoaLocationDataTableConstant, NITHamirpurLocationDataTableConstant, NITHamirpurLocationDataTableHeading, NITJaipurLocationDataTableConstant, NITJaipurLocationDataTableHeading, NITJalandharLocationDataTableConstant, NITJalandharLocationDataTableHeading, NITJamshedpurLocationDataTableConstant, NITJamshedpurLocationDataTableHeading, NITKarnatakaLocationDataTableConstant, NITKarnatakaLocationDataTableHeading, NITKurukshetraLocationDataTableConstant, NITManipurLocationDataTableConstant, NITManipurLocationDataTableHeading, NITMeghalayaLocationDataTableConstant, NITMeghalayaLocationDataTableHeading, NITMizoramLocationDataTableConstant, NITMizoramLocationDataTableHeading, NITNagalandLocationDataTableConstant, NITNagalandLocationDataTableHeading, NITNagpurLocationDataTableConstant, NITNagpurLocationDataTableHeading, NITPatnaLocationDataTableConstant, NITPatnaLocationDataTableHeading, NITPuducherryLocationDataTableConstant, NITPuducherryLocationDataTableHeading, NITRaipurLocationDataTableConstant, NITRaipurLocationDataTableHeading, NITRourkelaLocationDataTableConstant, NITRourkelaLocationDataTableHeading, NITShibpurLocationDataTableConstant, NITShibpurLocationDataTableHeading, NITSikkimLocationDataTableConstant, NITSikkimLocationDataTableHeading, NITSilcharLocationDataTableConstant, NITSrinagarLocationDataTableConstant, NITSrinagarLocationDataTableHeading, NITSuratLocationDataTableConstant, NITSuratLocationDataTableHeading, NITTiruchirapalliLocationDataTableConstant, NITTiruchirapalliLocationDataTableHeading, NITUttarakhandLocationDataTableConstant, NITUttarakhandLocationDataTableHeading, NITWarangalLocationDataTableConstant, NITWarangalLocationDataTableHeading } from "../constants/college/NIT/NITLocationDataCollegeConstant";
import { NITAgaratalaRankingDataTableConstant, NITAgaratalaRankingDataTableHeading, NITAllahabadRankingDataTableConstant, NITAllahabadRankingDataTableHeading, NITAndhraPradeshRankingDataTableConstant, NITAndhraPradeshRankingDataTableHeading, NITArunachalPradeshRankingDataTableConstant, NITArunachalPradeshRankingDataTableHeading, NITBhopalRankingDataTableConstant, NITBhopalRankingDataTableHeading, NITCalicutRankingDataTableConstant, NITCalicutRankingDataTableHeading, NITDelhiRankingDataTableConstant, NITDelhiRankingDataTableHeading, NITDurgapurRankingDataTableConstant, NITDurgapurRankingDataTableHeading, NITGoaRankingDataTableConstant, NITGoaRankingDataTableHeading, NITHamirpurRankingDataTableConstant, NITHamirpurRankingDataTableHeading, NITJaipurRankingDataTableConstant, NITJaipurRankingDataTableHeading, NITJalandharRankingDataTableConstant, NITJalandharRankingDataTableHeading, NITJamshedpurRankingDataTableConstant, NITJamshedpurRankingDataTableHeading, NITKarnatakaRankingDataTableConstant, NITKarnatakaRankingDataTableHeading, NITKurukshetraRankingDataTableConstant, NITManipurRankingDataTableConstant, NITManipurRankingDataTableHeading, NITMeghalayaRankingDataTableConstant, NITMeghalayaRankingDataTableHeading, NITMizoramRankingDataTableConstant, NITMizoramRankingDataTableHeading, NITNagalandRankingDataTableConstant, NITNagalandRankingDataTableHeading, NITNagpurRankingDataTableConstant, NITNagpurRankingDataTableHeading, NITPatnaRankingDataTableConstant, NITPatnaRankingDataTableHeading, NITPuducherryRankingDataTableHeading, NITRaipurRankingDataTableConstant, NITRaipurRankingDataTableHeading, NITRourkelaRankingDataTableConstant, NITRourkelaRankingDataTableHeading, NITShibpurRankingDataTableConstant, NITShibpurRankingDataTableHeading, NITSikkimRankingDataTableConstant, NITSikkimRankingDataTableHeading, NITSilcharRankingDataTableConstant, NITSilcharRankingDataTableHeading, NITSrinagarRankingDataTableHeading, NITSuratRankingDataTableConstant, NITSuratRankingDataTableHeading, NITTiruchirapalliRankingDataTableConstant, NITTiruchirapalliRankingDataTableHeading, NITUttarakhandRankingDataTableConstant, NITUttarakhandRankingDataTableHeading, NITWarangalRankingDataTableConstant, NITWarangalRankingDataTableHeading } from "../constants/college/NIT/NITRankingDataCollegeConstant";
import { NITAgaratalaSeatDataTableConstant, NITAgaratalaSeatDataTableHeading, NITAllahabadSeatDataTableConstant, NITAllahabadSeatDataTableHeading, NITAndhraPradeshSeatDataTableConstant, NITAndhraPradeshSeatDataTableHeading, NITArunachalPradeshSeatDataTableConstant, NITArunachalPradeshSeatDataTableHeading, NITBhopalSeatDataTableConstant, NITBhopalSeatDataTableHeading, NITCalicutSeatDataTableConstant, NITCalicutSeatDataTableHeading, NITDelhiSeatDataTableConstant, NITDelhiSeatDataTableHeading, NITDurgapurSeatDataTableConstant, NITDurgapurSeatDataTableHeading, NITGoaSeatDataTableConstant, NITGoaSeatDataTableHeading, NITHamirpurSeatDataTableConstant, NITHamirpurSeatDataTableHeading, NITJaipurSeatDataTableConstant, NITJaipurSeatDataTableHeading, NITJalandharSeatDataTableConstant, NITJalandharSeatDataTableHeading, NITJamshedpurSeatDataTableConstant, NITJamshedpurSeatDataTableHeading, NITKarnatakaSeatDataTableConstant, NITKarnatakaSeatDataTableHeading, NITKurukshetraSeatDataTableConstant, NITKurukshetraSeatDataTableHeading, NITManipurSeatDataTableConstant, NITManipurSeatDataTableHeading, NITMeghalayaSeatDataTableConstant, NITMeghalayaSeatDataTableHeading, NITMizoramSeatDataTableConstant, NITMizoramSeatDataTableHeading, NITNagalandSeatDataTableConstant, NITNagalandSeatDataTableHeading, NITNagpurSeatDataTableConstant, NITNagpurSeatDataTableHeading, NITPatnaSeatDataTableConstant, NITPatnaSeatDataTableHeading, NITPuducherrySeatDataTableConstant, NITPuducherrySeatDataTableHeading, NITRaipurSeatDataTableConstant, NITRaipurSeatDataTableHeading, NITRourkelaSeatDataTableConstant, NITRourkelaSeatDataTableHeading, NITShibpurSeatDataTableConstant, NITShibpurSeatDataTableHeading, NITSikkimSeatDataTableConstant, NITSikkimSeatDataTableHeading, NITSilcharSeatDataTableConstant, NITSilcharSeatDataTableHeading, NITSrinagarSeatDataTableConstant, NITSrinagarSeatDataTableHeading, NITSuratSeatDataTableConstant, NITSuratSeatDataTableHeading, NITTiruchirapalliSeatDataTableConstant, NITTiruchirapalliSeatDataTableHeading, NITUttarakhandSeatDataTableConstant, NITUttarakhandSeatDataTableHeading, NITWarangalSeatDataTableConstant, NITWarangalSeatDataTableHeading } from "../constants/college/NIT/NITSeatDataCollegeConstant";
import { NITAgaratalaPlacementImageList, NITAllahabadPlacementImageList, NITAndhraPradeshPlacementImageList, NITArunachalPradeshPlacementImageList, NITBhopalPlacementImageList, NITCalicutPlacementImageList, NITDelhiPlacementImageList, NITDurgapurPlacementImageList, NITGoaPlacementImageList, NITHamirpurPlacementImageList, NITJaipurPlacementImageList, NITJalandharPlacementImageList, NITJamshedpurPlacementImageList, NITKarnatakaPlacementImageList, NITKurukshetraPlacementImageList, NITManipurPlacementImageList, NITMeghalayaPlacementImageList, NITMizoramPlacementImageList, NITNagalandPlacementImageList, NITNagpurPlacementImageList, NITPatnaPlacementImageList, NITPuducherryPlacementImageList, NITRaipurPlacementImageList, NITRourkelaPlacementImageList, NITShibpurPlacementImageList, NITSikkimPlacementImageList, NITSilcharPlacementImageList, NITSrinagarPlacementImageList, NITSuratPlacementImageList, NITTiruchirapalliPlacementImageList, NITUttarakhandPlacementImageList, NITWarangalPlacementImageList } from "../constants/college/NIT/NITPlacementDataCollegeComponent";

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
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Bombay" 
        collegePageNavigationConstants={IITBombayCollegeNavigationConstants} 
        aboutSectionContent={IITBombayCollegeAboutSectionContent} aboutSectionHeadingId={IITBombayCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITBombayCollegeNavigationConstants[0].title} 
        locationSectionContent={IITBombayCollegeLocationSectionContent} locationSectionHeadingId={IITBombayCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITBombayCollegeNavigationConstants[1].title}
        rankingSectionContent={IITBombayCollegeRankingSectionContent} rankingSectionHeadingId={IITBombayCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITBombayCollegeNavigationConstants[2].title}
        admissionSectionContent={IITBombayCollegeAdmissionSectionContent} admissionSectionHeadingId={IITBombayCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITBombayCollegeNavigationConstants[3].title}
        coursesSectionContent={IITBombayCollegeCoursesSectionContent} coursesSectionHeadingId={IITBombayCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITBombayCollegeNavigationConstants[4].title} collegeCourseDetailConstant={IITBombayCoursesDetailsConstants}
        feeSectionContent={IITBombayCollegeFeeSectionContent} feeSectionHeadingId={IITBombayCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITBombayCollegeNavigationConstants[5].title}
        seatSectionContent={IITBombayCollegeSeatSectionContent} seatSectionHeadingId={IITBombayCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITBombayCollegeNavigationConstants[6].title}
        cutoffSectionContent={IITBombayCollegeCutOffSectionContent} cutoffSectionHeadingId={IITBombayCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITBombayCollegeNavigationConstants[7].title}
        placementSectionContent={IITBombayCollegePlacementSectionContent} placementSectionHeadingId={IITBombayCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITBombayCollegeNavigationConstants[8].title} collegePlacementDataConstant={IITBombayPlacementDataConstant}
        ></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-delhi", 
        component : <IITGenericCollegePage collegeImage={IITDelhiCollegeImage} collegeName="Indian Institute of Technology Delhi" 
        collegePageNavigationConstants={IITDelhiCollegeNavigationConstants} 
        aboutSectionContent={IITDelhiCollegeAboutSectionContent} aboutSectionHeadingId={IITDelhiCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITDelhiCollegeNavigationConstants[0].title} 
        locationSectionContent={IITDelhiCollegeAboutSectionContent} locationSectionHeadingId={IITDelhiCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITDelhiCollegeNavigationConstants[1].title}
        rankingSectionContent={IITDelhiCollegeAboutSectionContent} rankingSectionHeadingId={IITDelhiCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITDelhiCollegeNavigationConstants[2].title}
        admissionSectionContent={IITDelhiCollegeAdmissionSectionContent} admissionSectionHeadingId={IITDelhiCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITDelhiCollegeNavigationConstants[3].title}
        coursesSectionContent={IITDelhiCollegeCoursesSectionContent} coursesSectionHeadingId={IITDelhiCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITDelhiCollegeNavigationConstants[4].title} collegeCourseDetailConstant={[]}
        feeSectionContent={IITDelhiCollegeFeeSectionContent} feeSectionHeadingId={IITDelhiCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITDelhiCollegeNavigationConstants[5].title}
        seatSectionContent={IITDelhiCollegeAboutSectionContent} seatSectionHeadingId={IITDelhiCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITDelhiCollegeNavigationConstants[6].title}
        cutoffSectionContent={IITDelhiCollegeCutOffSectionContent} cutoffSectionHeadingId={IITDelhiCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITDelhiCollegeNavigationConstants[7].title}
        placementSectionContent={IITDelhiCollegePlacementSectionContent} placementSectionHeadingId={IITDelhiCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITDelhiCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-gandhinagar", 
        component : <IITGenericCollegePage collegeImage={IITGandhinagarCollegeImage} collegeName="Indian Institute of Technology Gandhinagar" 
        collegePageNavigationConstants={IITGandhinagarCollegeNavigationConstants} 
        aboutSectionContent={IITGandhinagarCollegeAboutSectionContent} aboutSectionHeadingId={IITGandhinagarCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITGandhinagarCollegeNavigationConstants[0].title} 
        locationSectionContent={IITGandhinagarCollegeLocationSectionContent} locationSectionHeadingId={IITGandhinagarCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITGandhinagarCollegeNavigationConstants[1].title}
        rankingSectionContent={IITGandhinagarCollegeRankingSectionContent} rankingSectionHeadingId={IITGandhinagarCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITGandhinagarCollegeNavigationConstants[2].title}
        admissionSectionContent={IITGandhinagarCollegeAdmissionSectionContent} admissionSectionHeadingId={IITGandhinagarCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITGandhinagarCollegeNavigationConstants[3].title}
        coursesSectionContent={IITGandhinagarCollegeCoursesSectionContent} coursesSectionHeadingId={IITGandhinagarCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITGandhinagarCollegeNavigationConstants[4].title} collegeCourseDetailConstant={IITGandhinagarCoursesDetailsConstants}
        feeSectionContent={IITGandhinagarCollegeFeeSectionContent} feeSectionHeadingId={IITGandhinagarCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITGandhinagarCollegeNavigationConstants[5].title}
        seatSectionContent={IITGandhinagarCollegeSeatSectionContent} seatSectionHeadingId={IITGandhinagarCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITGandhinagarCollegeNavigationConstants[6].title}
        cutoffSectionContent={IITGandhinagarCollegeCutOffSectionContent} cutoffSectionHeadingId={IITGandhinagarCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITGandhinagarCollegeNavigationConstants[7].title}
        placementSectionContent={IITGandhinagarCollegePlacementSectionContent} placementSectionHeadingId={IITGandhinagarCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITGandhinagarCollegeNavigationConstants[8].title} collegePlacementDataConstant={IITGandhinagarPlacementDataConstant}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-bhubaneshwar", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Bhubaneshwar" 
        collegePageNavigationConstants={IITBhubaneshwarCollegeNavigationConstants} 
        aboutSectionContent={IITBhubaneshwarCollegeAboutSectionContent} aboutSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[0].title} 
        locationSectionContent={IITBhubaneswarCollegeLocationSectionContent} locationSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[1].title}
        rankingSectionContent={IITBhubaneswarCollegeRankingSectionContent} rankingSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[2].title}
        admissionSectionContent={IITBhubaneshwarCollegeAdmissionSectionContent} admissionSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[3].title}
        coursesSectionContent={IITBhubaneshwarCollegeCoursesSectionContent} coursesSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[4].title} collegeCourseDetailConstant={IITBhubaneshwarCoursesDetailsConstants}
        feeSectionContent={IITBhubaneshwarCollegeFeeSectionContent} feeSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[5].title}
        seatSectionContent={IITBhubaneswarCollegeSeatSectionContent} seatSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[6].title}
        cutoffSectionContent={IITBhubaneshwarCollegeCutOffSectionContent} cutoffSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[7].title}
        placementSectionContent={IITBhubaneshwarCollegePlacementSectionContent} placementSectionHeadingId={IITBhubaneshwarCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITBhubaneshwarCollegeNavigationConstants[8].title} collegePlacementDataConstant={IITBhubaneshwarPlacementDataConstant}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-guwahati", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Guwahati" 
        collegePageNavigationConstants={IITGuwahatiCollegeNavigationConstants} 
        aboutSectionContent={IITGuwahatiCollegeAboutSectionContent} aboutSectionHeadingId={IITGuwahatiCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITGuwahatiCollegeNavigationConstants[0].title} 
        locationSectionContent={IITGuwahatiCollegeLocationSectionContent} locationSectionHeadingId={IITGuwahatiCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITGuwahatiCollegeNavigationConstants[1].title}
        rankingSectionContent={IITGuwahatiCollegeRankingSectionContent} rankingSectionHeadingId={IITGuwahatiCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITGuwahatiCollegeNavigationConstants[2].title}
        admissionSectionContent={IITGuwahatiCollegeAdmissionSectionContent} admissionSectionHeadingId={IITGuwahatiCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITGuwahatiCollegeNavigationConstants[3].title}
        coursesSectionContent={IITGuwahatiCollegeCoursesSectionContent} coursesSectionHeadingId={IITGuwahatiCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITGuwahatiCollegeNavigationConstants[4].title} collegeCourseDetailConstant={IITGuwahatiCoursesDetailsConstants}
        feeSectionContent={IITGuwahatiCollegeFeeSectionContent} feeSectionHeadingId={IITGuwahatiCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITGuwahatiCollegeNavigationConstants[5].title}
        seatSectionContent={IITGuwahatiCollegeSeatSectionContent} seatSectionHeadingId={IITGuwahatiCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITGuwahatiCollegeNavigationConstants[6].title}
        cutoffSectionContent={IITGuwahatiCollegeCutOffSectionContent} cutoffSectionHeadingId={IITGuwahatiCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITGuwahatiCollegeNavigationConstants[7].title}
        placementSectionContent={IITGuwahatiCollegePlacementSectionContent} placementSectionHeadingId={IITGuwahatiCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITGuwahatiCollegeNavigationConstants[8].title} collegePlacementDataConstant={IITGuwahatiPlacementDataConstant}></IITGenericCollegePage>
    },

    {
        path : "/college/iit/iit-indore", 
        component : <IITGenericCollegePage collegeImage={IITIndoreCollegeImage} collegeName="Indian Institute of Technology Indore" 
        collegePageNavigationConstants={IITIndoreCollegeNavigationConstants} 
        aboutSectionContent={IITIndoreCollegeAboutSectionContent} aboutSectionHeadingId={IITIndoreCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITIndoreCollegeNavigationConstants[0].title} 
        locationSectionContent={IITIndoreCollegeLocationSectionContent} locationSectionHeadingId={IITIndoreCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITIndoreCollegeNavigationConstants[1].title}
        rankingSectionContent={IITIndoreCollegeRankingSectionContent} rankingSectionHeadingId={IITIndoreCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITIndoreCollegeNavigationConstants[2].title}
        admissionSectionContent={IITIndoreCollegeAdmissionSectionContent} admissionSectionHeadingId={IITIndoreCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITIndoreCollegeNavigationConstants[3].title}
        coursesSectionContent={IITIndoreCollegeCoursesSectionContent} coursesSectionHeadingId={IITIndoreCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITIndoreCollegeNavigationConstants[4].title} collegeCourseDetailConstant={IITIndoreCoursesDetailsConstants}
        feeSectionContent={IITIndoreCollegeFeeSectionContent} feeSectionHeadingId={IITIndoreCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITIndoreCollegeNavigationConstants[5].title}
        seatSectionContent={IITIndoreCollegeSeatSectionContent} seatSectionHeadingId={IITIndoreCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITIndoreCollegeNavigationConstants[6].title}
        cutoffSectionContent={IITIndoreCollegeCutOffSectionContent} cutoffSectionHeadingId={IITIndoreCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITIndoreCollegeNavigationConstants[7].title}
        placementSectionContent={IITIndoreCollegePlacementSectionContent} placementSectionHeadingId={IITIndoreCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITIndoreCollegeNavigationConstants[8].title} collegePlacementDataConstant={IITIndorePlacementDataConstant}></IITGenericCollegePage>
    },
    
    {
        path : "/college/iit/iit-kanpur", 
        component : <IITGenericCollegePage collegeImage={IITKanpurCollegeImage} collegeName="Indian Institute of Technology Kanpur" 
        collegePageNavigationConstants={IITKanpurCollegeNavigationConstants} 
        aboutSectionContent={IITKanpurCollegeAboutSectionContent} aboutSectionHeadingId={IITKanpurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITKanpurCollegeNavigationConstants[0].title} 
        locationSectionContent={IITKanpurCollegeLocationSectionContent} locationSectionHeadingId={IITKanpurCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITKanpurCollegeNavigationConstants[1].title}
        rankingSectionContent={IITKanpurCollegeRankingSectionContent} rankingSectionHeadingId={IITKanpurCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITKanpurCollegeNavigationConstants[2].title}
        admissionSectionContent={IITKanpurCollegeAdmissionSectionContent} admissionSectionHeadingId={IITKanpurCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITKanpurCollegeNavigationConstants[3].title}
        coursesSectionContent={IITKanpurCollegeCoursesSectionContent} coursesSectionHeadingId={IITKanpurCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITKanpurCollegeNavigationConstants[4].title} collegeCourseDetailConstant={IITKanpurCoursesDetailsConstants}
        feeSectionContent={IITKanpurCollegeFeeSectionContent} feeSectionHeadingId={IITKanpurCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITKanpurCollegeNavigationConstants[5].title}
        seatSectionContent={IITKanpurCollegeSeatSectionContent} seatSectionHeadingId={IITKanpurCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITKanpurCollegeNavigationConstants[6].title}
        cutoffSectionContent={IITKanpurCollegeCutOffSectionContent} cutoffSectionHeadingId={IITKanpurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITKanpurCollegeNavigationConstants[7].title}
        placementSectionContent={IITKanpurCollegePlacementSectionContent} placementSectionHeadingId={IITKanpurCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITKanpurCollegeNavigationConstants[8].title} collegePlacementDataConstant={IITKanpurPlacementDataConstant}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-jodhpur", 
        component : <IITGenericCollegePage collegeImage={IITJodhpurCollegeImage} collegeName="Indian Institute of Technology Jodhpur" 
        collegePageNavigationConstants={IITJodhpurCollegeNavigationConstants} 
        aboutSectionContent={IITJodhpurCollegeAboutSectionContent} aboutSectionHeadingId={IITJodhpurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITJodhpurCollegeNavigationConstants[0].title} 
        locationSectionContent={IITJodhpurCollegeLocationSectionContent} locationSectionHeadingId={IITJodhpurCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITJodhpurCollegeNavigationConstants[1].title}
        rankingSectionContent={IITJodhpurCollegeRankingSectionContent} rankingSectionHeadingId={IITJodhpurCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITJodhpurCollegeNavigationConstants[2].title}
        admissionSectionContent={IITJodhpurCollegeAdmissionSectionContent} admissionSectionHeadingId={IITJodhpurCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITJodhpurCollegeNavigationConstants[3].title}
        coursesSectionContent={IITJodhpurCollegeCoursesSectionContent} coursesSectionHeadingId={IITJodhpurCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITJodhpurCollegeNavigationConstants[4].title} collegeCourseDetailConstant={[]}
        feeSectionContent={IITJodhpurCollegeFeeSectionContent} feeSectionHeadingId={IITJodhpurCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITJodhpurCollegeNavigationConstants[5].title}
        seatSectionContent={IITJodhpurCollegeSeatSectionContent} seatSectionHeadingId={IITJodhpurCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITJodhpurCollegeNavigationConstants[6].title}
        cutoffSectionContent={IITJodhpurCollegeCutOffSectionContent} cutoffSectionHeadingId={IITJodhpurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITJodhpurCollegeNavigationConstants[7].title}
        placementSectionContent={IITJodhpurCollegePlacementSectionContent} placementSectionHeadingId={IITJodhpurCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITJodhpurCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-kharagpur", 
        component : <IITGenericCollegePage collegeImage={IITKharagpurCollegeImage} collegeName="Indian Institute of Technology Kharagpur" 
        collegePageNavigationConstants={IITKharagpurCollegeNavigationConstants} 
        aboutSectionContent={IITKharagpurCollegeAboutSectionContent} aboutSectionHeadingId={IITKharagpurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITKharagpurCollegeNavigationConstants[0].title} 
        locationSectionContent={IITKharagpurCollegeLocationSectionContent} locationSectionHeadingId={IITKharagpurCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITKharagpurCollegeNavigationConstants[1].title}
        rankingSectionContent={IITKharagpurCollegeRankingSectionContent} rankingSectionHeadingId={IITKharagpurCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITKharagpurCollegeNavigationConstants[2].title}
        admissionSectionContent={IITKharagpurCollegeAdmissionSectionContent} admissionSectionHeadingId={IITKharagpurCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITKharagpurCollegeNavigationConstants[3].title}
        coursesSectionContent={IITKharagpurCollegeCoursesSectionContent} coursesSectionHeadingId={IITKharagpurCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITKharagpurCollegeNavigationConstants[4].title} collegeCourseDetailConstant={[]}
        feeSectionContent={IITKharagpurCollegeFeeSectionContent} feeSectionHeadingId={IITKharagpurCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITKharagpurCollegeNavigationConstants[5].title}
        seatSectionContent={IITKharagpurCollegeSeatSectionContent} seatSectionHeadingId={IITKharagpurCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITKharagpurCollegeNavigationConstants[6].title}
        cutoffSectionContent={IITKharagpurCollegeCutOffSectionContent} cutoffSectionHeadingId={IITKharagpurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITKharagpurCollegeNavigationConstants[7].title}
        placementSectionContent={IITKharagpurCollegePlacementSectionContent} placementSectionHeadingId={IITKharagpurCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITKharagpurCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-hyderabad", 
        component : <IITGenericCollegePage collegeImage={IITHyderabadCollegeImage} collegeName="Indian Institute of Technology Hyderabad" 
        collegePageNavigationConstants={IITHyderabadCollegeNavigationConstants} 
        aboutSectionContent={IITHyderabadCollegeAboutSectionContent} aboutSectionHeadingId={IITHyderabadCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITHyderabadCollegeNavigationConstants[0].title} 
        locationSectionContent={IITHyderabadCollegeLocationSectionContent} locationSectionHeadingId={IITHyderabadCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITHyderabadCollegeNavigationConstants[1].title}
        rankingSectionContent={IITHyderabadCollegeRankingSectionContent} rankingSectionHeadingId={IITHyderabadCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITHyderabadCollegeNavigationConstants[2].title}
        admissionSectionContent={IITHyderabadCollegeAdmissionSectionContent} admissionSectionHeadingId={IITHyderabadCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITHyderabadCollegeNavigationConstants[3].title}
        coursesSectionContent={IITHyderabadCollegeCoursesSectionContent} coursesSectionHeadingId={IITHyderabadCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITHyderabadCollegeNavigationConstants[4].title} collegeCourseDetailConstant={[]}
        feeSectionContent={IITHyderabadCollegeFeeSectionContent} feeSectionHeadingId={IITHyderabadCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITHyderabadCollegeNavigationConstants[5].title}
        seatSectionContent={IITHyderabadCollegeSeatSectionContent} seatSectionHeadingId={IITHyderabadCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITHyderabadCollegeNavigationConstants[6].title}
        cutoffSectionContent={IITHyderabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IITHyderabadCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITHyderabadCollegeNavigationConstants[7].title}
        placementSectionContent={IITHyderabadCollegePlacementSectionContent} placementSectionHeadingId={IITHyderabadCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITHyderabadCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-patna", 
        component : <IITGenericCollegePage collegeImage={IITPatnaCollegeImage} collegeName="Indian Institute of Technology Patna" 
        collegePageNavigationConstants={IITPatnaCollegeNavigationConstants} 
        aboutSectionContent={IITPatnaCollegeAboutSectionContent} aboutSectionHeadingId={IITPatnaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITPatnaCollegeNavigationConstants[0].title} 
        locationSectionContent={IITPatnaCollegeLocationSectionContent} locationSectionHeadingId={IITPatnaCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITPatnaCollegeNavigationConstants[1].title}
        rankingSectionContent={IITPatnaCollegeRankingSectionContent} rankingSectionHeadingId={IITPatnaCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITPatnaCollegeNavigationConstants[2].title}
        admissionSectionContent={IITPatnaCollegeAdmissionSectionContent} admissionSectionHeadingId={IITPatnaCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITPatnaCollegeNavigationConstants[3].title}
        coursesSectionContent={IITPatnaCollegeCoursesSectionContent} coursesSectionHeadingId={IITPatnaCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITPatnaCollegeNavigationConstants[4].title} collegeCourseDetailConstant={[]}
        feeSectionContent={IITPatnaCollegeFeeSectionContent} feeSectionHeadingId={IITPatnaCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITPatnaCollegeNavigationConstants[5].title}
        seatSectionContent={IITPatnaCollegeSeatSectionContent} seatSectionHeadingId={IITPatnaCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITPatnaCollegeNavigationConstants[6].title}
        cutoffSectionContent={IITPatnaCollegeCutOffSectionContent} cutoffSectionHeadingId={IITPatnaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITPatnaCollegeNavigationConstants[7].title}
        placementSectionContent={IITPatnaCollegePlacementSectionContent} placementSectionHeadingId={IITPatnaCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITPatnaCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-ropar", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Ropar" 
        collegePageNavigationConstants={IITRoparCollegeNavigationConstants} 
        aboutSectionContent={IITRoparCollegeAboutSectionContent} aboutSectionHeadingId={IITRoparCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITRoparCollegeNavigationConstants[0].title} 
        locationSectionContent={IITRoparCollegeLocationSectionContent} locationSectionHeadingId={IITRoparCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITRoparCollegeNavigationConstants[1].title}
        rankingSectionContent={IITRoparCollegeRankingSectionContent} rankingSectionHeadingId={IITRoparCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITRoparCollegeNavigationConstants[2].title}
        admissionSectionContent={IITRoparCollegeAdmissionSectionContent} admissionSectionHeadingId={IITRoparCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITRoparCollegeNavigationConstants[3].title}
        coursesSectionContent={IITRoparCollegeCoursesSectionContent} coursesSectionHeadingId={IITRoparCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITRoparCollegeNavigationConstants[4].title} collegeCourseDetailConstant={[]}
        feeSectionContent={IITRoparCollegeFeeSectionContent} feeSectionHeadingId={IITRoparCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITRoparCollegeNavigationConstants[5].title}
        seatSectionContent={IITRoparCollegeSeatSectionContent} seatSectionHeadingId={IITRoparCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITRoparCollegeNavigationConstants[6].title}
        cutoffSectionContent={IITRoparCollegeCutOffSectionContent} cutoffSectionHeadingId={IITRoparCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITRoparCollegeNavigationConstants[7].title}
        placementSectionContent={IITRoparCollegePlacementSectionContent} placementSectionHeadingId={IITRoparCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITRoparCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-mandi", 
        component : <IITGenericCollegePage collegeImage={IITMandiCollegeImage} collegeName="Indian Institute of Technology Mandi" 
        collegePageNavigationConstants={IITMandiCollegeNavigationConstants} 
        aboutSectionContent={IITMandiCollegeAboutSectionContent} aboutSectionHeadingId={IITMandiCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITMandiCollegeNavigationConstants[0].title} 
        locationSectionContent={IITMandiCollegeLocationSectionContent} locationSectionHeadingId={IITMandiCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITMandiCollegeNavigationConstants[1].title}
        rankingSectionContent={IITMandiCollegeRankingSectionContent} rankingSectionHeadingId={IITMandiCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITMandiCollegeNavigationConstants[2].title}
        admissionSectionContent={IITMandiCollegeAdmissionSectionContent} admissionSectionHeadingId={IITMandiCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITMandiCollegeNavigationConstants[3].title}
        coursesSectionContent={IITMandiCollegeCoursesSectionContent} coursesSectionHeadingId={IITMandiCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITMandiCollegeNavigationConstants[4].title} collegeCourseDetailConstant={[]}
        feeSectionContent={IITMandiCollegeFeeSectionContent} feeSectionHeadingId={IITMandiCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITMandiCollegeNavigationConstants[5].title}
        seatSectionContent={IITMandiCollegeSeatSectionContent} seatSectionHeadingId={IITMandiCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITMandiCollegeNavigationConstants[6].title}
        cutoffSectionContent={IITMandiCollegeCutOffSectionContent} cutoffSectionHeadingId={IITMandiCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITMandiCollegeNavigationConstants[7].title}
        placementSectionContent={IITMandiCollegePlacementSectionContent} placementSectionHeadingId={IITMandiCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITMandiCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-roorkee", 
        component : <IITGenericCollegePage collegeImage={IITRoorkeeCollegeImage} collegeName="Indian Institute of Technology Roorkee" 
        collegePageNavigationConstants={IITRoorkeeCollegeNavigationConstants} 
        aboutSectionContent={IITRoorkeeCollegeAboutSectionContent} aboutSectionHeadingId={IITRoorkeeCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITRoorkeeCollegeNavigationConstants[0].title} 
        locationSectionContent={IITRoorkeeCollegeLocationSectionContent} locationSectionHeadingId={IITRoorkeeCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITRoorkeeCollegeNavigationConstants[1].title}
        rankingSectionContent={IITRoorkeeCollegeRankingSectionContent} rankingSectionHeadingId={IITRoorkeeCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITRoorkeeCollegeNavigationConstants[2].title}
        admissionSectionContent={IITRoorkeeCollegeAdmissionSectionContent} admissionSectionHeadingId={IITRoorkeeCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITRoorkeeCollegeNavigationConstants[3].title}
        coursesSectionContent={IITRoorkeeCollegeCoursesSectionContent} coursesSectionHeadingId={IITRoorkeeCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITRoorkeeCollegeNavigationConstants[4].title} collegeCourseDetailConstant={[]}
        feeSectionContent={IITRoorkeeCollegeFeeSectionContent} feeSectionHeadingId={IITRoorkeeCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITRoorkeeCollegeNavigationConstants[5].title}
        seatSectionContent={IITRoorkeeCollegeSeatSectionContent} seatSectionHeadingId={IITRoorkeeCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITRoorkeeCollegeNavigationConstants[6].title}
        cutoffSectionContent={IITRoorkeeCollegeCutOffSectionContent} cutoffSectionHeadingId={IITRoorkeeCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITRoorkeeCollegeNavigationConstants[7].title}
        placementSectionContent={IITRoorkeeCollegePlacementSectionContent} placementSectionHeadingId={IITRoorkeeCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITRoorkeeCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-bhu", 
        component : <IITGenericCollegePage collegeImage={IITBHUCollegeImage} collegeName="Indian Institute of Technology BHU" 
        collegePageNavigationConstants={IITBHUCollegeNavigationConstants} 
        aboutSectionContent={IITBHUCollegeAboutSectionContent} aboutSectionHeadingId={IITBHUCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITBHUCollegeNavigationConstants[0].title} 
        locationSectionContent={IITBHUCollegeLocationSectionContent} locationSectionHeadingId={IITBHUCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITBHUCollegeNavigationConstants[1].title}
        rankingSectionContent={IITBHUCollegeRankingSectionContent} rankingSectionHeadingId={IITBHUCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITBHUCollegeNavigationConstants[2].title}
        admissionSectionContent={IITBHUCollegeAdmissionSectionContent} admissionSectionHeadingId={IITBHUCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITBHUCollegeNavigationConstants[3].title}
        coursesSectionContent={IITBHUCollegeCoursesSectionContent} coursesSectionHeadingId={IITBHUCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITBHUCollegeNavigationConstants[4].title} collegeCourseDetailConstant={[]}
        feeSectionContent={IITBHUCollegeFeeSectionContent} feeSectionHeadingId={IITBHUCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITBHUCollegeNavigationConstants[5].title}
        seatSectionContent={IITBHUCollegeSeatSectionContent} seatSectionHeadingId={IITBHUCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITBHUCollegeNavigationConstants[6].title}
        cutoffSectionContent={IITBHUCollegeCutOffSectionContent} cutoffSectionHeadingId={IITBHUCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITBHUCollegeNavigationConstants[7].title}
        placementSectionContent={IITBHUCollegePlacementSectionContent} placementSectionHeadingId={IITBHUCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITBHUCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-jammu", 
        component : <IITGenericCollegePage collegeImage={IITJammuCollegeImage} collegeName="Indian Institute of Technology Jammu" 
        collegePageNavigationConstants={IITJammuCollegeNavigationConstants} 
        aboutSectionContent={IITJammuCollegeAboutSectionContent} aboutSectionHeadingId={IITJammuCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITJammuCollegeNavigationConstants[0].title} 
        locationSectionContent={IITJammuCollegeLocationSectionContent} locationSectionHeadingId={IITJammuCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITJammuCollegeNavigationConstants[1].title}
        rankingSectionContent={IITJammuCollegeRankingSectionContent} rankingSectionHeadingId={IITJammuCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITJammuCollegeNavigationConstants[2].title}
        admissionSectionContent={IITJammuCollegeAdmissionSectionContent} admissionSectionHeadingId={IITJammuCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITJammuCollegeNavigationConstants[3].title}
        coursesSectionContent={IITJammuCollegeCoursesSectionContent} coursesSectionHeadingId={IITJammuCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITJammuCollegeNavigationConstants[4].title} collegeCourseDetailConstant={[]}
        feeSectionContent={IITJammuCollegeFeeSectionContent} feeSectionHeadingId={IITJammuCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITJammuCollegeNavigationConstants[5].title}
        seatSectionContent={IITJammuCollegeSeatSectionContent} seatSectionHeadingId={IITJammuCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITJammuCollegeNavigationConstants[6].title}
        cutoffSectionContent={IITJammuCollegeCutOffSectionContent} cutoffSectionHeadingId={IITJammuCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITJammuCollegeNavigationConstants[7].title}
        placementSectionContent={IITJammuCollegePlacementSectionContent} placementSectionHeadingId={IITJammuCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITJammuCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-palakkad", 
        component : <IITGenericCollegePage collegeImage={IITPalakkadCollegeImage} collegeName="Indian Institute of Technology Palakkad" 
        collegePageNavigationConstants={IITPalakkadCollegeNavigationConstants} 
        aboutSectionContent={IITPalakkadCollegeAboutSectionContent} aboutSectionHeadingId={IITPalakkadCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITPalakkadCollegeNavigationConstants[0].title} 
        locationSectionContent={IITPalakkadCollegeLocationSectionContent} locationSectionHeadingId={IITPalakkadCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITPalakkadCollegeNavigationConstants[1].title}
        rankingSectionContent={IITPalakkadCollegeRankingSectionContent} rankingSectionHeadingId={IITPalakkadCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITPalakkadCollegeNavigationConstants[2].title}
        admissionSectionContent={IITPalakkadCollegeAdmissionSectionContent} admissionSectionHeadingId={IITPalakkadCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITPalakkadCollegeNavigationConstants[3].title}
        coursesSectionContent={IITPalakkadCollegeCoursesSectionContent} coursesSectionHeadingId={IITPalakkadCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITPalakkadCollegeNavigationConstants[4].title} collegeCourseDetailConstant={[]}
        feeSectionContent={IITPalakkadCollegeFeeSectionContent} feeSectionHeadingId={IITPalakkadCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITPalakkadCollegeNavigationConstants[5].title}
        seatSectionContent={IITPalakkadCollegeSeatSectionContent} seatSectionHeadingId={IITPalakkadCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITPalakkadCollegeNavigationConstants[6].title}
        cutoffSectionContent={IITPalakkadCollegeCutOffSectionContent} cutoffSectionHeadingId={IITPalakkadCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITPalakkadCollegeNavigationConstants[7].title}
        placementSectionContent={IITPalakkadCollegePlacementSectionContent} placementSectionHeadingId={IITPalakkadCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITPalakkadCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-tirupati", 
        component : <IITGenericCollegePage collegeImage={IITTirupatiCollegeImage} collegeName="Indian Institute of Technology Tirupati" 
        collegePageNavigationConstants={IITTirupatiCollegeNavigationConstants} 
        aboutSectionContent={IITTirupatiCollegeAboutSectionContent} aboutSectionHeadingId={IITTirupatiCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITTirupatiCollegeNavigationConstants[0].title} 
        locationSectionContent={IITTirupatiCollegeLocationSectionContent} locationSectionHeadingId={IITTirupatiCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITTirupatiCollegeNavigationConstants[1].title}
        rankingSectionContent={IITTirupatiCollegeRankingSectionContent} rankingSectionHeadingId={IITTirupatiCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITTirupatiCollegeNavigationConstants[2].title}
        admissionSectionContent={IITTirupatiCollegeAdmissionSectionContent} admissionSectionHeadingId={IITTirupatiCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITTirupatiCollegeNavigationConstants[3].title}
        coursesSectionContent={IITTirupatiCollegeCoursesSectionContent} coursesSectionHeadingId={IITTirupatiCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITTirupatiCollegeNavigationConstants[4].title} collegeCourseDetailConstant={[]}
        feeSectionContent={IITTirupatiCollegeFeeSectionContent} feeSectionHeadingId={IITTirupatiCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITTirupatiCollegeNavigationConstants[5].title}
        seatSectionContent={IITTirupatiCollegeSeatSectionContent} seatSectionHeadingId={IITTirupatiCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITTirupatiCollegeNavigationConstants[6].title}
        cutoffSectionContent={IITTirupatiCollegeCutOffSectionContent} cutoffSectionHeadingId={IITTirupatiCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITTirupatiCollegeNavigationConstants[7].title}
        placementSectionContent={IITTirupatiCollegePlacementSectionContent} placementSectionHeadingId={IITTirupatiCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITTirupatiCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-goa", 
        component : <IITGenericCollegePage collegeImage={IITGoaCollegeImage} collegeName="Indian Institute of Technology Goa" 
        collegePageNavigationConstants={IITGoaCollegeNavigationConstants} 
        aboutSectionContent={IITGoaCollegeAboutSectionContent} aboutSectionHeadingId={IITGoaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITGoaCollegeNavigationConstants[0].title} 
        locationSectionContent={IITGoaCollegeLocationSectionContent} locationSectionHeadingId={IITGoaCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITGoaCollegeNavigationConstants[1].title}
        rankingSectionContent={IITGoaCollegeRankingSectionContent} rankingSectionHeadingId={IITGoaCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITGoaCollegeNavigationConstants[2].title}
        admissionSectionContent={IITGoaCollegeAdmissionSectionContent} admissionSectionHeadingId={IITGoaCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITGoaCollegeNavigationConstants[3].title}
        coursesSectionContent={IITGoaCollegeCoursesSectionContent} coursesSectionHeadingId={IITGoaCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITGoaCollegeNavigationConstants[4].title} collegeCourseDetailConstant={[]}
        feeSectionContent={IITGoaCollegeFeeSectionContent} feeSectionHeadingId={IITGoaCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITGoaCollegeNavigationConstants[5].title}
        seatSectionContent={IITGoaCollegeSeatSectionContent} seatSectionHeadingId={IITGoaCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITGoaCollegeNavigationConstants[6].title}
        cutoffSectionContent={IITGoaCollegeCutOffSectionContent} cutoffSectionHeadingId={IITGoaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITGoaCollegeNavigationConstants[7].title}
        placementSectionContent={IITGoaCollegePlacementSectionContent} placementSectionHeadingId={IITGoaCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITGoaCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-bhilai", 
        component : <IITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Technology Bhilai" 
        collegePageNavigationConstants={IITBhilaiCollegeNavigationConstants} 
        aboutSectionContent={IITBhilaiCollegeAboutSectionContent} aboutSectionHeadingId={IITBhilaiCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITBhilaiCollegeNavigationConstants[0].title} 
        locationSectionContent={IITBhilaiCollegeLocationSectionContent} locationSectionHeadingId={IITBhilaiCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITBhilaiCollegeNavigationConstants[1].title}
        rankingSectionContent={IITBhilaiCollegeRankingSectionContent} rankingSectionHeadingId={IITBhilaiCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITBhilaiCollegeNavigationConstants[2].title}
        admissionSectionContent={IITBhilaiCollegeAdmissionSectionContent} admissionSectionHeadingId={IITBhilaiCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITBhilaiCollegeNavigationConstants[3].title}
        coursesSectionContent={IITBhilaiCollegeCoursesSectionContent} coursesSectionHeadingId={IITBhilaiCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITBhilaiCollegeNavigationConstants[4].title} collegeCourseDetailConstant={[]}
        feeSectionContent={IITBhilaiCollegeFeeSectionContent} feeSectionHeadingId={IITBhilaiCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITBhilaiCollegeNavigationConstants[5].title}
        seatSectionContent={IITBhilaiCollegeSeatSectionContent} seatSectionHeadingId={IITBhilaiCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITBhilaiCollegeNavigationConstants[6].title}
        cutoffSectionContent={IITBhilaiCollegeCutOffSectionContent} cutoffSectionHeadingId={IITBhilaiCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITBhilaiCollegeNavigationConstants[7].title}
        placementSectionContent={IITBhilaiCollegePlacementSectionContent} placementSectionHeadingId={IITBhilaiCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITBhilaiCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-dharwad", 
        component : <IITGenericCollegePage collegeImage={IITGandhinagarCollegeImage} collegeName="Indian Institute of Technology Dharwad" 
        collegePageNavigationConstants={IITDharwadCollegeNavigationConstants} 
        aboutSectionContent={IITDharwadCollegeAboutSectionContent} aboutSectionHeadingId={IITDharwadCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITDharwadCollegeNavigationConstants[0].title} 
        locationSectionContent={IITDharwadCollegeLocationSectionContent} locationSectionHeadingId={IITDharwadCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITDharwadCollegeNavigationConstants[1].title}
        rankingSectionContent={IITDharwadCollegeRankingSectionContent} rankingSectionHeadingId={IITDharwadCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITDharwadCollegeNavigationConstants[2].title}
        admissionSectionContent={IITDharwadCollegeAdmissionSectionContent} admissionSectionHeadingId={IITDharwadCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITDharwadCollegeNavigationConstants[3].title}
        coursesSectionContent={IITDharwadCollegeCoursesSectionContent} coursesSectionHeadingId={IITDharwadCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITDharwadCollegeNavigationConstants[4].title} collegeCourseDetailConstant={[]}
        feeSectionContent={IITDharwadCollegeFeeSectionContent} feeSectionHeadingId={IITDharwadCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITDharwadCollegeNavigationConstants[5].title}
        seatSectionContent={IITDharwadCollegeSeatSectionContent} seatSectionHeadingId={IITDharwadCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITDharwadCollegeNavigationConstants[6].title}
        cutoffSectionContent={IITDharwadCollegeCutOffSectionContent} cutoffSectionHeadingId={IITDharwadCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITDharwadCollegeNavigationConstants[7].title}
        placementSectionContent={IITDharwadCollegePlacementSectionContent} placementSectionHeadingId={IITDharwadCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITDharwadCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-dhanbad", 
        component : <IITGenericCollegePage collegeImage={IITDhanbadCollegeImage} collegeName="Indian Institute of Technology Dhanbad" 
        collegePageNavigationConstants={IITDhanbadCollegeNavigationConstants} 
        aboutSectionContent={IITDhanbadCollegeAboutSectionContent} aboutSectionHeadingId={IITDhanbadCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITDhanbadCollegeNavigationConstants[0].title} 
        locationSectionContent={IITDhanbadCollegeLocationSectionContent} locationSectionHeadingId={IITDhanbadCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITDhanbadCollegeNavigationConstants[1].title}
        rankingSectionContent={IITDhanbadCollegeRankingSectionContent} rankingSectionHeadingId={IITDhanbadCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITDhanbadCollegeNavigationConstants[2].title}
        admissionSectionContent={IITDhanbadCollegeAdmissionSectionContent} admissionSectionHeadingId={IITDhanbadCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITDhanbadCollegeNavigationConstants[3].title}
        coursesSectionContent={IITDhanbadCollegeCoursesSectionContent} coursesSectionHeadingId={IITDhanbadCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITDhanbadCollegeNavigationConstants[4].title} collegeCourseDetailConstant={[]}
        feeSectionContent={IITDhanbadCollegeFeeSectionContent} feeSectionHeadingId={IITDhanbadCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITDhanbadCollegeNavigationConstants[5].title}
        seatSectionContent={IITDhanbadCollegeSeatSectionContent} seatSectionHeadingId={IITDhanbadCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITDhanbadCollegeNavigationConstants[6].title}
        cutoffSectionContent={IITDhanbadCollegeCutOffSectionContent} cutoffSectionHeadingId={IITDhanbadCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITDhanbadCollegeNavigationConstants[7].title}
        placementSectionContent={IITDhanbadCollegePlacementSectionContent} placementSectionHeadingId={IITDhanbadCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITDhanbadCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]}></IITGenericCollegePage>
    },
    {
        path : "/college/iit/iit-madras", 
        component : <IITGenericCollegePage collegeImage={IITMadrasCollegeImage} collegeName="Indian Institute of Technology Madras" 
        collegePageNavigationConstants={IITMadrasCollegeNavigationConstants} 
        aboutSectionContent={IITMadrasCollegeAboutSectionContent} aboutSectionHeadingId={IITMadrasCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IITMadrasCollegeNavigationConstants[0].title} 
        locationSectionContent={IITMadrasCollegeLocationSectionContent} locationSectionHeadingId={IITMadrasCollegeNavigationConstants[1].headingId} locationSectionHeadingName={IITMadrasCollegeNavigationConstants[1].title}
        rankingSectionContent={IITMadrasCollegeRankingSectionContent} rankingSectionHeadingId={IITMadrasCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={IITMadrasCollegeNavigationConstants[2].title}
        admissionSectionContent={IITMadrasCollegeAdmissionSectionContent} admissionSectionHeadingId={IITMadrasCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={IITMadrasCollegeNavigationConstants[3].title}
        coursesSectionContent={IITMadrasCollegeCoursesSectionContent} coursesSectionHeadingId={IITMadrasCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={IITMadrasCollegeNavigationConstants[4].title} collegeCourseDetailConstant={IITKanpurCoursesDetailsConstants}
        feeSectionContent={IITMadrasCollegeFeeSectionContent} feeSectionHeadingId={IITMadrasCollegeNavigationConstants[5].headingId} feeSectionHeadingName={IITMadrasCollegeNavigationConstants[5].title}
        seatSectionContent={IITMadrasCollegeSeatSectionContent} seatSectionHeadingId={IITMadrasCollegeNavigationConstants[6].headingId} seatSectionHeadingName={IITMadrasCollegeNavigationConstants[6].title}
        cutoffSectionContent={IITMadrasCollegeCutOffSectionContent} cutoffSectionHeadingId={IITMadrasCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IITMadrasCollegeNavigationConstants[7].title}
        placementSectionContent={IITMadrasCollegePlacementSectionContent} placementSectionHeadingId={IITMadrasCollegeNavigationConstants[8].headingId} placementSectionHeadingName={IITMadrasCollegeNavigationConstants[8].title} collegePlacementDataConstant={IITKanpurPlacementDataConstant}></IITGenericCollegePage>
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
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Andhra Pradesh" 
        collegePageNavigationConstants={IIITHyderabadCollegeNavigationConstants} 
        aboutSectionContent={IIITHyderabadCollegeAboutSectionContent} aboutSectionHeadingId={IIITHyderabadCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITHyderabadCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITHyderabadCollegeFeeSectionContent} feeSectionHeadingId={IIITHyderabadCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITHyderabadCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITHyderabadCollegeCoursesSectionContent} coursesSectionHeadingId={IIITHyderabadCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITHyderabadCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITHyderabadCoursesDetailsConstants}
        admissionSectionContent={IIITHyderabadCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITHyderabadCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITHyderabadCollegeNavigationConstants[6].title}
        placementSectionContent={IIITHyderabadCollegePlacementSectionContent} placementSectionHeadingId={IIITHyderabadCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITHyderabadCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITHyderabadCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITHyderabadCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    }, 
    {
        path : "/college/iiit/iiit-gwalior",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Gwalior" 
        collegePageNavigationConstants={IIITGwaliorCollegeNavigationConstants} 
        aboutSectionContent={IIITGwaliorCollegeAboutSectionContent} aboutSectionHeadingId={IIITGwaliorCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITGwaliorCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITGwaliorCollegeFeeSectionContent} feeSectionHeadingId={IIITGwaliorCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITGwaliorCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITGwaliorCollegeCoursesSectionContent} coursesSectionHeadingId={IIITGwaliorCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITGwaliorCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITGwaliorCoursesDetailsConstants}
        admissionSectionContent={IIITGwaliorCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITGwaliorCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITGwaliorCollegeNavigationConstants[6].title}
        placementSectionContent={IIITGwaliorCollegePlacementSectionContent} placementSectionHeadingId={IIITGwaliorCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITGwaliorCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITGwaliorCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITGwaliorCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-bangalore",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Bangalore" 
        collegePageNavigationConstants={IIITBangaloreCollegeNavigationConstants} 
        aboutSectionContent={IIITBangaloreCollegeAboutSectionContent} aboutSectionHeadingId={IIITBangaloreCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITBangaloreCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITBangaloreCollegeFeeSectionContent} feeSectionHeadingId={IIITBangaloreCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITBangaloreCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITBangaloreCollegeCoursesSectionContent} coursesSectionHeadingId={IIITBangaloreCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITBangaloreCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITBangaloreCoursesDetailsConstants}
        admissionSectionContent={IIITBangaloreCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITBangaloreCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITBangaloreCollegeNavigationConstants[6].title}
        placementSectionContent={IIITBangaloreCollegePlacementSectionContent} placementSectionHeadingId={IIITBangaloreCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITBangaloreCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITBangaloreCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITBangaloreCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-guwahati",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Guwahati" 
        collegePageNavigationConstants={IIITGuwahatiCollegeNavigationConstants} 
        aboutSectionContent={IIITGuwahatiCollegeAboutSectionContent} aboutSectionHeadingId={IIITGuwahatiCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITGuwahatiCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITGuwahatiCollegeFeeSectionContent} feeSectionHeadingId={IIITGuwahatiCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITGuwahatiCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITGuwahatiCollegeCoursesSectionContent} coursesSectionHeadingId={IIITGuwahatiCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITGuwahatiCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITGuwahatiCoursesDetailsConstants}
        admissionSectionContent={IIITGuwahatiCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITGuwahatiCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITGuwahatiCollegeNavigationConstants[6].title}
        placementSectionContent={IIITGuwahatiCollegePlacementSectionContent} placementSectionHeadingId={IIITGuwahatiCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITGuwahatiCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITGuwahatiCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITGuwahatiCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-jabalpur",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Jabalpur" 
        collegePageNavigationConstants={IIITJabalpurCollegeNavigationConstants} 
        aboutSectionContent={IIITJabalpurCollegeAboutSectionContent} aboutSectionHeadingId={IIITJabalpurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITJabalpurCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITJabalpurCollegeFeeSectionContent} feeSectionHeadingId={IIITJabalpurCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITJabalpurCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITJabalpurCollegeCoursesSectionContent} coursesSectionHeadingId={IIITJabalpurCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITJabalpurCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITJabalpurCoursesDetailsConstants}
        admissionSectionContent={IIITJabalpurCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITJabalpurCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITJabalpurCollegeNavigationConstants[6].title}
        placementSectionContent={IIITJabalpurCollegePlacementSectionContent} placementSectionHeadingId={IIITJabalpurCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITJabalpurCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITJabalpurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITJabalpurCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-allahabad",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Allahabad" 
        collegePageNavigationConstants={IIITAllahabadCollegeNavigationConstants} 
        aboutSectionContent={IIITAllahabadCollegeAboutSectionContent} aboutSectionHeadingId={IIITAllahabadCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITAllahabadCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITAllahabadCollegeFeeSectionContent} feeSectionHeadingId={IIITAllahabadCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITAllahabadCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITAllahabadCollegeCoursesSectionContent} coursesSectionHeadingId={IIITAllahabadCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITAllahabadCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITAllahabadCoursesDetailsConstants}
        admissionSectionContent={IIITAllahabadCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITAllahabadCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITAllahabadCollegeNavigationConstants[6].title}
        placementSectionContent={IIITAllahabadCollegePlacementSectionContent} placementSectionHeadingId={IIITAllahabadCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITAllahabadCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITAllahabadCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITAllahabadCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-kanchipuram",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Kanchipuram" 
        collegePageNavigationConstants={IIITKanchipuramCollegeNavigationConstants} 
        aboutSectionContent={IIITKanchipuramCollegeAboutSectionContent} aboutSectionHeadingId={IIITKanchipuramCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITKanchipuramCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITKanchipuramCollegeFeeSectionContent} feeSectionHeadingId={IIITKanchipuramCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITKanchipuramCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITKanchipuramCollegeCoursesSectionContent} coursesSectionHeadingId={IIITKanchipuramCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITKanchipuramCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITKanchipuramCoursesDetailsConstants}
        admissionSectionContent={IIITKanchipuramCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITKanchipuramCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITKanchipuramCollegeNavigationConstants[6].title}
        placementSectionContent={IIITKanchipuramCollegePlacementSectionContent} placementSectionHeadingId={IIITKanchipuramCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITKanchipuramCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITKanchipuramCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITKanchipuramCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-bhubaneshwar",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Bhubaneshwar" 
        collegePageNavigationConstants={IIITBhubaneshwarCollegeNavigationConstants} 
        aboutSectionContent={IIITBhubaneshwarCollegeAboutSectionContent} aboutSectionHeadingId={IIITBhubaneshwarCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITBhubaneshwarCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITBhubaneshwarCollegeFeeSectionContent} feeSectionHeadingId={IIITBhubaneshwarCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITBhubaneshwarCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITBhubaneshwarCollegeCoursesSectionContent} coursesSectionHeadingId={IIITBhubaneshwarCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITBhubaneshwarCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITBhubaneshwarCoursesDetailsConstants}
        admissionSectionContent={IIITBhubaneshwarCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITBhubaneshwarCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITBhubaneshwarCollegeNavigationConstants[6].title}
        placementSectionContent={IIITBhubaneshwarCollegePlacementSectionContent} placementSectionHeadingId={IIITBhubaneshwarCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITBhubaneshwarCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITBhubaneshwarCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITBhubaneshwarCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-pune",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Pune" 
        collegePageNavigationConstants={IIITPuneCollegeNavigationConstants} 
        aboutSectionContent={IIITPuneCollegeAboutSectionContent} aboutSectionHeadingId={IIITPuneCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITPuneCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITPuneCollegeFeeSectionContent} feeSectionHeadingId={IIITPuneCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITPuneCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITPuneCollegeCoursesSectionContent} coursesSectionHeadingId={IIITPuneCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITPuneCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITPuneCoursesDetailsConstants}
        admissionSectionContent={IIITPuneCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITPuneCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITPuneCollegeNavigationConstants[6].title}
        placementSectionContent={IIITPuneCollegePlacementSectionContent} placementSectionHeadingId={IIITPuneCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITPuneCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITPuneCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITPuneCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-kota",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Kota" 
        collegePageNavigationConstants={IIITKotaCollegeNavigationConstants} 
        aboutSectionContent={IIITKotaCollegeAboutSectionContent} aboutSectionHeadingId={IIITKotaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITKotaCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITKotaCollegeFeeSectionContent} feeSectionHeadingId={IIITKotaCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITKotaCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITKotaCollegeCoursesSectionContent} coursesSectionHeadingId={IIITKotaCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITKotaCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITKotaCoursesDetailsConstants}
        admissionSectionContent={IIITKotaCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITKotaCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITKotaCollegeNavigationConstants[6].title}
        placementSectionContent={IIITKotaCollegePlacementSectionContent} placementSectionHeadingId={IIITKotaCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITKotaCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITKotaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITKotaCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    }, 
    {
        path : "/college/iiit/iiit-sri-city",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Sri City" 
        collegePageNavigationConstants={IIITSriCityCollegeNavigationConstants} 
        aboutSectionContent={IIITSriCityCollegeAboutSectionContent} aboutSectionHeadingId={IIITSriCityCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITSriCityCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITSriCityCollegeFeeSectionContent} feeSectionHeadingId={IIITSriCityCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITSriCityCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITSriCityCollegeCoursesSectionContent} coursesSectionHeadingId={IIITSriCityCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITSriCityCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITSriCityCoursesDetailsConstants}
        admissionSectionContent={IIITSriCityCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITSriCityCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITSriCityCollegeNavigationConstants[6].title}
        placementSectionContent={IIITSriCityCollegePlacementSectionContent} placementSectionHeadingId={IIITSriCityCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITSriCityCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITSriCityCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITSriCityCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-vadodara",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Vadodara" 
        collegePageNavigationConstants={IIITVadodaraCollegeNavigationConstants} 
        aboutSectionContent={IIITVadodaraCollegeAboutSectionContent} aboutSectionHeadingId={IIITVadodaraCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITVadodaraCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITVadodaraCollegeFeeSectionContent} feeSectionHeadingId={IIITVadodaraCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITVadodaraCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITVadodaraCollegeCoursesSectionContent} coursesSectionHeadingId={IIITVadodaraCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITVadodaraCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITVadodaraCoursesDetailsConstants}
        admissionSectionContent={IIITVadodaraCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITVadodaraCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITVadodaraCollegeNavigationConstants[6].title}
        placementSectionContent={IIITVadodaraCollegePlacementSectionContent} placementSectionHeadingId={IIITVadodaraCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITVadodaraCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITVadodaraCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITVadodaraCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-nagpur",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Nagpur" 
        collegePageNavigationConstants={IIITNagpurCollegeNavigationConstants} 
        aboutSectionContent={IIITNagpurCollegeAboutSectionContent} aboutSectionHeadingId={IIITNagpurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITNagpurCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITNagpurCollegeFeeSectionContent} feeSectionHeadingId={IIITNagpurCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITNagpurCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITNagpurCollegeCoursesSectionContent} coursesSectionHeadingId={IIITNagpurCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITNagpurCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITNagpurCoursesDetailsConstants}
        admissionSectionContent={IIITNagpurCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITNagpurCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITNagpurCollegeNavigationConstants[6].title}
        placementSectionContent={IIITNagpurCollegePlacementSectionContent} placementSectionHeadingId={IIITNagpurCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITNagpurCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITNagpurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITNagpurCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-kalyani",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Kalyani" 
        collegePageNavigationConstants={IIITKalyaniCollegeNavigationConstants} 
        aboutSectionContent={IIITKalyaniCollegeAboutSectionContent} aboutSectionHeadingId={IIITKalyaniCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITKalyaniCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITKalyaniCollegeFeeSectionContent} feeSectionHeadingId={IIITKalyaniCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITKalyaniCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITKalyaniCollegeCoursesSectionContent} coursesSectionHeadingId={IIITKalyaniCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITKalyaniCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITKalyaniCoursesDetailsConstants}
        admissionSectionContent={IIITKalyaniCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITKalyaniCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITKalyaniCollegeNavigationConstants[6].title}
        placementSectionContent={IIITKalyaniCollegePlacementSectionContent} placementSectionHeadingId={IIITKalyaniCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITKalyaniCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITKalyaniCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITKalyaniCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-lucknow",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Lucknow" 
        collegePageNavigationConstants={IIITLucknowCollegeNavigationConstants} 
        aboutSectionContent={IIITLucknowCollegeAboutSectionContent} aboutSectionHeadingId={IIITLucknowCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITLucknowCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITLucknowCollegeFeeSectionContent} feeSectionHeadingId={IIITLucknowCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITLucknowCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITLucknowCollegeCoursesSectionContent} coursesSectionHeadingId={IIITLucknowCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITLucknowCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITLucknowCoursesDetailsConstants}
        admissionSectionContent={IIITLucknowCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITLucknowCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITLucknowCollegeNavigationConstants[6].title}
        placementSectionContent={IIITLucknowCollegePlacementSectionContent} placementSectionHeadingId={IIITLucknowCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITLucknowCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITLucknowCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITLucknowCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-dharwad",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Dharwad" 
        collegePageNavigationConstants={IIITDharwadCollegeNavigationConstants} 
        aboutSectionContent={IIITDharwadCollegeAboutSectionContent} aboutSectionHeadingId={IIITDharwadCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITDharwadCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITDharwadCollegeFeeSectionContent} feeSectionHeadingId={IIITDharwadCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITDharwadCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITDharwadCollegeCoursesSectionContent} coursesSectionHeadingId={IIITDharwadCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITDharwadCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITDharwadCoursesDetailsConstants}
        admissionSectionContent={IIITDharwadCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITDharwadCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITDharwadCollegeNavigationConstants[6].title}
        placementSectionContent={IIITDharwadCollegePlacementSectionContent} placementSectionHeadingId={IIITDharwadCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITDharwadCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITDharwadCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITDharwadCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-bhagalpur",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Bhagalpur" 
        collegePageNavigationConstants={IIITBhagalpurCollegeNavigationConstants} 
        aboutSectionContent={IIITBhagalpurCollegeAboutSectionContent} aboutSectionHeadingId={IIITBhagalpurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITBhagalpurCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITBhagalpurCollegeFeeSectionContent} feeSectionHeadingId={IIITBhagalpurCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITBhagalpurCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITBhagalpurCollegeCoursesSectionContent} coursesSectionHeadingId={IIITBhagalpurCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITBhagalpurCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITBhagalpurCoursesDetailsConstants}
        admissionSectionContent={IIITBhagalpurCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITBhagalpurCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITBhagalpurCollegeNavigationConstants[6].title}
        placementSectionContent={IIITBhagalpurCollegePlacementSectionContent} placementSectionHeadingId={IIITBhagalpurCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITBhagalpurCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITBhagalpurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITBhagalpurCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-bhopal",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Bhopal" 
        collegePageNavigationConstants={IIITBhopalCollegeNavigationConstants} 
        aboutSectionContent={IIITBhopalCollegeAboutSectionContent} aboutSectionHeadingId={IIITBhopalCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITBhopalCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITBhopalCollegeFeeSectionContent} feeSectionHeadingId={IIITBhopalCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITBhopalCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITBhopalCollegeCoursesSectionContent} coursesSectionHeadingId={IIITBhopalCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITBhopalCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITBhopalCoursesDetailsConstants}
        admissionSectionContent={IIITBhopalCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITBhopalCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITBhopalCollegeNavigationConstants[6].title}
        placementSectionContent={IIITBhopalCollegePlacementSectionContent} placementSectionHeadingId={IIITBhopalCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITBhopalCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITBhopalCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITBhopalCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    }, 

    {
        path : "/college/iiit/iiit-kottayam",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Kottayam" 
        collegePageNavigationConstants={IIITKottayamCollegeNavigationConstants} 
        aboutSectionContent={IIITKottayamCollegeAboutSectionContent} aboutSectionHeadingId={IIITKottayamCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITKottayamCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITKottayamCollegeFeeSectionContent} feeSectionHeadingId={IIITKottayamCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITKottayamCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITKottayamCollegeCoursesSectionContent} coursesSectionHeadingId={IIITKottayamCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITKottayamCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITKottayamCoursesDetailsConstants}
        admissionSectionContent={IIITKottayamCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITKottayamCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITKottayamCollegeNavigationConstants[6].title}
        placementSectionContent={IIITKottayamCollegePlacementSectionContent} placementSectionHeadingId={IIITKottayamCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITKottayamCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITKottayamCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITKottayamCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-ranchi",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Ranchi" 
        collegePageNavigationConstants={IIITRanchiCollegeNavigationConstants} 
        aboutSectionContent={IIITRanchiCollegeAboutSectionContent} aboutSectionHeadingId={IIITRanchiCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITRanchiCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITRanchiCollegeFeeSectionContent} feeSectionHeadingId={IIITRanchiCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITRanchiCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITRanchiCollegeCoursesSectionContent} coursesSectionHeadingId={IIITRanchiCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITRanchiCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITRanchiCoursesDetailsConstants}
        admissionSectionContent={IIITRanchiCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITRanchiCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITRanchiCollegeNavigationConstants[6].title}
        placementSectionContent={IIITRanchiCollegePlacementSectionContent} placementSectionHeadingId={IIITRanchiCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITRanchiCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITRanchiCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITRanchiCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-una",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Una" 
        collegePageNavigationConstants={IIITUnaCollegeNavigationConstants} 
        aboutSectionContent={IIITUnaCollegeAboutSectionContent} aboutSectionHeadingId={IIITUnaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITUnaCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITUnaCollegeFeeSectionContent} feeSectionHeadingId={IIITUnaCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITUnaCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITUnaCollegeCoursesSectionContent} coursesSectionHeadingId={IIITUnaCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITUnaCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITUnaCoursesDetailsConstants}
        admissionSectionContent={IIITUnaCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITUnaCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITUnaCollegeNavigationConstants[6].title}
        placementSectionContent={IIITUnaCollegePlacementSectionContent} placementSectionHeadingId={IIITUnaCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITUnaCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITUnaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITUnaCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-surat",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Surat" 
        collegePageNavigationConstants={IIITSuratCollegeNavigationConstants} 
        aboutSectionContent={IIITSuratCollegeAboutSectionContent} aboutSectionHeadingId={IIITSuratCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITSuratCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITSuratCollegeFeeSectionContent} feeSectionHeadingId={IIITSuratCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITSuratCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITSuratCollegeCoursesSectionContent} coursesSectionHeadingId={IIITSuratCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITSuratCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITSuratCoursesDetailsConstants}
        admissionSectionContent={IIITSuratCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITSuratCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITSuratCollegeNavigationConstants[6].title}
        placementSectionContent={IIITSuratCollegePlacementSectionContent} placementSectionHeadingId={IIITSuratCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITSuratCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITSuratCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITSuratCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-manipur",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Manipur" 
        collegePageNavigationConstants={IIITManipurCollegeNavigationConstants} 
        aboutSectionContent={IIITManipurCollegeAboutSectionContent} aboutSectionHeadingId={IIITManipurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITManipurCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITManipurCollegeFeeSectionContent} feeSectionHeadingId={IIITManipurCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITManipurCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITManipurCollegeCoursesSectionContent} coursesSectionHeadingId={IIITManipurCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITManipurCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITManipurCoursesDetailsConstants}
        admissionSectionContent={IIITManipurCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITManipurCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITManipurCollegeNavigationConstants[6].title}
        placementSectionContent={IIITManipurCollegePlacementSectionContent} placementSectionHeadingId={IIITManipurCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITManipurCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITManipurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITManipurCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-kurnool",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Kurnool" 
        collegePageNavigationConstants={IIITKurnoolCollegeNavigationConstants} 
        aboutSectionContent={IIITKurnoolCollegeAboutSectionContent} aboutSectionHeadingId={IIITKurnoolCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITKurnoolCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITKurnoolCollegeFeeSectionContent} feeSectionHeadingId={IIITKurnoolCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITKurnoolCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITKurnoolCollegeCoursesSectionContent} coursesSectionHeadingId={IIITKurnoolCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITKurnoolCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITKurnoolCoursesDetailsConstants}
        admissionSectionContent={IIITKurnoolCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITKurnoolCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITKurnoolCollegeNavigationConstants[6].title}
        placementSectionContent={IIITKurnoolCollegePlacementSectionContent} placementSectionHeadingId={IIITKurnoolCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITKurnoolCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITKurnoolCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITKurnoolCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-tiruchirapalli",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Tiruchirapalli" 
        collegePageNavigationConstants={IIITTiruchirapalliCollegeNavigationConstants} 
        aboutSectionContent={IIITTiruchirapalliCollegeAboutSectionContent} aboutSectionHeadingId={IIITTiruchirapalliCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITTiruchirapalliCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITTiruchirapalliCollegeFeeSectionContent} feeSectionHeadingId={IIITTiruchirapalliCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITTiruchirapalliCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITTiruchirapalliCollegeCoursesSectionContent} coursesSectionHeadingId={IIITTiruchirapalliCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITTiruchirapalliCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITTiruchirapalliCoursesDetailsConstants}
        admissionSectionContent={IIITTiruchirapalliCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITTiruchirapalliCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITTiruchirapalliCollegeNavigationConstants[6].title}
        placementSectionContent={IIITTiruchirapalliCollegePlacementSectionContent} placementSectionHeadingId={IIITTiruchirapalliCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITTiruchirapalliCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITTiruchirapalliCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITTiruchirapalliCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-sonepat",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Sonepat" 
        collegePageNavigationConstants={IIITSonepatCollegeNavigationConstants} 
        aboutSectionContent={IIITSonepatCollegeAboutSectionContent} aboutSectionHeadingId={IIITSonepatCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITSonepatCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITSonepatCollegeFeeSectionContent} feeSectionHeadingId={IIITSonepatCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITSonepatCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITSonepatCollegeCoursesSectionContent} coursesSectionHeadingId={IIITSonepatCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITSonepatCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITSonepatCoursesDetailsConstants}
        admissionSectionContent={IIITSonepatCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITSonepatCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITSonepatCollegeNavigationConstants[6].title}
        placementSectionContent={IIITSonepatCollegePlacementSectionContent} placementSectionHeadingId={IIITSonepatCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITSonepatCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITSonepatCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITSonepatCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-agartala",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Agartala" 
        collegePageNavigationConstants={IIITAgartalaCollegeNavigationConstants} 
        aboutSectionContent={IIITAgartalaCollegeAboutSectionContent} aboutSectionHeadingId={IIITAgartalaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITAgartalaCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITAgartalaCollegeFeeSectionContent} feeSectionHeadingId={IIITAgartalaCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITAgartalaCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITAgartalaCollegeCoursesSectionContent} coursesSectionHeadingId={IIITAgartalaCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITAgartalaCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITAgartalaCoursesDetailsConstants}
        admissionSectionContent={IIITAgartalaCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITAgartalaCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITAgartalaCollegeNavigationConstants[6].title}
        placementSectionContent={IIITAgartalaCollegePlacementSectionContent} placementSectionHeadingId={IIITAgartalaCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITAgartalaCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITAgartalaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITAgartalaCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    },
    {
        path : "/college/iiit/iiit-karnataka",
        component : <IIITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="Indian Institute of Information Technology Karnataka" 
        collegePageNavigationConstants={IIITKarnatakaCollegeNavigationConstants} 
        aboutSectionContent={IIITKarnatakaCollegeAboutSectionContent} aboutSectionHeadingId={IIITKarnatakaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={IIITKarnatakaCollegeNavigationConstants[0].title} 
        feeSectionContent={IIITKarnatakaCollegeFeeSectionContent} feeSectionHeadingId={IIITKarnatakaCollegeNavigationConstants[1].headingId} feeSectionHeadingName={IIITKarnatakaCollegeNavigationConstants[1].title}
        coursesSectionContent={IIITKarnatakaCollegeCoursesSectionContent} coursesSectionHeadingId={IIITKarnatakaCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={IIITKarnatakaCollegeNavigationConstants[5].title} collegeCourseDetailConstant={IIITKarnatakaCoursesDetailsConstants}
        admissionSectionContent={IIITKarnatakaCollegeAdmissionSectionContent} admissionSectionHeadingId={IIITKarnatakaCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={IIITKarnatakaCollegeNavigationConstants[6].title}
        placementSectionContent={IIITKarnatakaCollegePlacementSectionContent} placementSectionHeadingId={IIITKarnatakaCollegeNavigationConstants[2].headingId} placementSectionHeadingName={IIITKarnatakaCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
        cutoffSectionContent={IIITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={IIITKarnatakaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={IIITKarnatakaCollegeNavigationConstants[7].title}></IIITGenericCollegePage>
    }

]

// say everything went fine 
export default routes