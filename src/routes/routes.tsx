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
    IITMadrasCollegeSeatSectionContent} from "../constants/college/IIT/CollegePageNavigationComponentConstants";

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
    NITWarangalCollegeSeatSectionContent

} from "../constants/college/NIT/NITCollegePageNavigationComponentConstant";
import { NITAgartalaCoursesDetailsConstants, NITAllahabadCoursesDetailsConstants, NITAndhraPradeshCoursesDetailsConstants, NITArunachalPradeshCoursesDetailsConstants, NITBhopalCoursesDetailsConstants
    , NITCalicutCoursesDetailsConstants, NITDelhiCoursesDetailsConstants, NITDurgapurCoursesDetailsConstants
    , NITGoaCoursesDetailsConstants, NITHamirpurCoursesDetailsConstants, NITJaipurCoursesDetailsConstants, NITJalandharCoursesDetailsConstants, NITJamshedpurCoursesDetailsConstants, NITKarnatakaCoursesDetailsConstants, NITKurukshetraCoursesDetailsConstants, NITManipurCoursesDetailsConstants, NITMeghalayaCoursesDetailsConstants, NITMizoramCoursesDetailsConstants, NITNagalandCoursesDetailsConstants, NITNagpurCoursesDetailsConstants
    , NITPatnaCoursesDetailsConstants, NITPuducherryCoursesDetailsConstants, NITRaipurCoursesDetailsConstants, NITRourkelaCoursesDetailsConstants, NITSikkimCoursesDetailsConstants, NITSilcharCoursesDetailsConstants, NITSrinagarCoursesDetailsConstants, NITSuratCoursesDetailsConstants, NITTiruchirappalliCoursesDetailsConstants, NITUttarakhandCoursesDetailsConstants, NITWarangalCoursesDetailsConstants } from "../constants/college/NIT/NITCourseDataForNITCollegeConstants";
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
import { NITWarangalHostelFeesDataTableConstant, NITWarangalHostelFeesDataTableHeading, NITWarangalInstituteFeesDataTableConstant, NITWarangalInstituteFeesDataTableHeading } from "../constants/college/NIT/NITFeesDataCollegeConstant";
import { NITWarangalAboutDataTableConstant, NITWarangalFeesDataTableHeading } from "../constants/college/NIT/NITAboutDataCollegeConstant";
import { NITWarangalLocationDataTableConstant, NITWarangalLocationDataTableHeading } from "../constants/college/NIT/NITLocationDataCollegeConstant";
import { NITWarangalRankingDataTableConstant, NITWarangalRankingDataTableHeading } from "../constants/college/NIT/NITRankingDataCollegeConstant";
import { NITWarangalSeatDataTableConstant, NITWarangalSeatDataTableHeading } from "../constants/college/NIT/NITSeatDataCollegeConstant";
import { NITWarangalPlacementImageList } from "../constants/college/NIT/NITPlacementDataCollegeComponent";

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
        aboutSectionContent={NITWarangalCollegeAboutSectionContent} aboutSectionHeadingId={NITWarangalCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITWarangalCollegeNavigationConstants[0].title} aboutSectionTableContent={NITWarangalAboutDataTableConstant} aboutSectionTableHeading={NITWarangalFeesDataTableHeading}
        locationSectionContent={NITWarangalCollegeLocationSectionContent} locationSectionHeadingId={NITWarangalCollegeNavigationConstants[1].headingId} locationSectionHeadingName={NITWarangalCollegeNavigationConstants[1].title} locationSectionTableContent={NITWarangalLocationDataTableConstant} locationSectionTableHeading={NITWarangalLocationDataTableHeading}
        rankingSectionContent={NITWarangalCollegeRankingSectionContent} rankingSectionHeadingId={NITWarangalCollegeNavigationConstants[2].headingId} rankingSectionHeadingName={NITWarangalCollegeNavigationConstants[2].title} rankingSectionTableContent={NITWarangalRankingDataTableConstant} rankingSectionTableHeading={NITWarangalRankingDataTableHeading}
        admissionSectionContent={NITWarangalCollegeAdmissionSectionContent} admissionSectionHeadingId={NITWarangalCollegeNavigationConstants[3].headingId} admissionSectionHeadingName={NITWarangalCollegeNavigationConstants[3].title}
        coursesSectionContent={NITWarangalCollegeCoursesSectionContent} coursesSectionHeadingId={NITWarangalCollegeNavigationConstants[4].headingId} coursesSectionHeadingName={NITWarangalCollegeNavigationConstants[4].title} collegeCourseDetailConstant={NITWarangalCoursesDetailsConstants}
        feeSectionContent={NITWarangalCollegeFeeSectionContent} feeSectionHeadingId={NITWarangalCollegeNavigationConstants[5].headingId} feeSectionHeadingName={NITWarangalCollegeNavigationConstants[5].title} feeSectionInstituteFeeTableContent={NITWarangalInstituteFeesDataTableConstant} feeSectionInstituteFeeTableHeading={NITWarangalInstituteFeesDataTableHeading} feeSectionHostelFeeTableContent={NITWarangalHostelFeesDataTableConstant} feeSectionHostelFeeTableHeading={NITWarangalHostelFeesDataTableHeading}
        seatSectionContent={NITWarangalCollegeSeatSectionContent} seatSectionHeadingId={NITWarangalCollegeNavigationConstants[6].headingId} seatSectionHeadingName={NITWarangalCollegeNavigationConstants[6].title} seatSectionTableContent={NITWarangalSeatDataTableConstant} seatSectionTableHeading={NITWarangalSeatDataTableHeading}
        cutoffSectionContent={NITWarangalCollegeCutOffSectionContent} cutoffSectionHeadingId={NITWarangalCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITWarangalCollegeNavigationConstants[7].title}
        placementSectionContent={NITWarangalCollegePlacementSectionContent} placementSectionHeadingId={NITWarangalCollegeNavigationConstants[8].headingId} placementSectionHeadingName={NITWarangalCollegeNavigationConstants[8].title} collegePlacementDataConstant={[]} placementImageList={NITWarangalPlacementImageList}>

        </NITGenericCollegePage>

    }, 
    // {
    //     path : "/college/nit/nit-bhopal",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Bhopal" 
    //     collegePageNavigationConstants={NITBhopalCollegeNavigationConstants} 
    //     aboutSectionContent={NITBhopalCollegeAboutSectionContent} aboutSectionHeadingId={NITBhopalCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITBhopalCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITBhopalCollegeFeeSectionContent} feeSectionHeadingId={NITBhopalCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITBhopalCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITBhopalCollegeCoursesSectionContent} coursesSectionHeadingId={NITBhopalCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITBhopalCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITBhopalCoursesDetailsConstants}
    //     admissionSectionContent={NITBhopalCollegeAdmissionSectionContent} admissionSectionHeadingId={NITBhopalCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITBhopalCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITBhopalCollegePlacementSectionContent} placementSectionHeadingId={NITBhopalCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITBhopalCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITBhopalCollegeCutOffSectionContent} cutoffSectionHeadingId={NITBhopalCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITBhopalCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-nagpur",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Nagpur" 
    //     collegePageNavigationConstants={NITNagpurCollegeNavigationConstants} 
    //     aboutSectionContent={NITNagpurCollegeAboutSectionContent} aboutSectionHeadingId={NITNagpurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITNagpurCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITNagpurCollegeFeeSectionContent} feeSectionHeadingId={NITNagpurCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITNagpurCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITNagpurCollegeCoursesSectionContent} coursesSectionHeadingId={NITNagpurCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITNagpurCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITNagpurCoursesDetailsConstants}
    //     admissionSectionContent={NITNagpurCollegeAdmissionSectionContent} admissionSectionHeadingId={NITNagpurCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITNagpurCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITNagpurCollegePlacementSectionContent} placementSectionHeadingId={NITNagpurCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITNagpurCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITNagpurCollegeCutOffSectionContent} cutoffSectionHeadingId={NITNagpurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITNagpurCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-durgapur",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Durgapur" 
    //     collegePageNavigationConstants={NITDurgapurCollegeNavigationConstants} 
    //     aboutSectionContent={NITDurgapurCollegeAboutSectionContent} aboutSectionHeadingId={NITDurgapurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITDurgapurCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITDurgapurCollegeFeeSectionContent} feeSectionHeadingId={NITDurgapurCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITDurgapurCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITDurgapurCollegeCoursesSectionContent} coursesSectionHeadingId={NITDurgapurCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITDurgapurCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITDurgapurCoursesDetailsConstants}
    //     admissionSectionContent={NITDurgapurCollegeAdmissionSectionContent} admissionSectionHeadingId={NITDurgapurCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITDurgapurCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITDurgapurCollegePlacementSectionContent} placementSectionHeadingId={NITDurgapurCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITDurgapurCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITDurgapurCollegeCutOffSectionContent} cutoffSectionHeadingId={NITDurgapurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITDurgapurCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },

    // {
    //     path : "/college/nit/nit-jamshedpur",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Jamshedpur" 
    //     collegePageNavigationConstants={NITJamshedpurCollegeNavigationConstants} 
    //     aboutSectionContent={NITJamshedpurCollegeAboutSectionContent} aboutSectionHeadingId={NITJamshedpurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITJamshedpurCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITJamshedpurCollegeFeeSectionContent} feeSectionHeadingId={NITJamshedpurCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITJamshedpurCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITJamshedpurCollegeCoursesSectionContent} coursesSectionHeadingId={NITJamshedpurCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITJamshedpurCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITJamshedpurCoursesDetailsConstants}
    //     admissionSectionContent={NITJamshedpurCollegeAdmissionSectionContent} admissionSectionHeadingId={NITJamshedpurCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITJamshedpurCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITJamshedpurCollegePlacementSectionContent} placementSectionHeadingId={NITJamshedpurCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITJamshedpurCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITJamshedpurCollegeCutOffSectionContent} cutoffSectionHeadingId={NITJamshedpurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITJamshedpurCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-karnataka",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Karnataka" 
    //     collegePageNavigationConstants={NITKarnatakaCollegeNavigationConstants} 
    //     aboutSectionContent={NITKarnatakaCollegeAboutSectionContent} aboutSectionHeadingId={NITKarnatakaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITKarnatakaCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITKarnatakaCollegeFeeSectionContent} feeSectionHeadingId={NITKarnatakaCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITKarnatakaCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITKarnatakaCollegeCoursesSectionContent} coursesSectionHeadingId={NITKarnatakaCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITKarnatakaCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITKarnatakaCoursesDetailsConstants}
    //     admissionSectionContent={NITKarnatakaCollegeAdmissionSectionContent} admissionSectionHeadingId={NITKarnatakaCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITKarnatakaCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITKarnatakaCollegePlacementSectionContent} placementSectionHeadingId={NITKarnatakaCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITKarnatakaCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITKarnatakaCollegeCutOffSectionContent} cutoffSectionHeadingId={NITKarnatakaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITKarnatakaCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-srinagar",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Srinagar" 
    //     collegePageNavigationConstants={NITSrinagarCollegeNavigationConstants} 
    //     aboutSectionContent={NITSrinagarCollegeAboutSectionContent} aboutSectionHeadingId={NITSrinagarCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITSrinagarCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITSrinagarCollegeFeeSectionContent} feeSectionHeadingId={NITSrinagarCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITSrinagarCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITSrinagarCollegeCoursesSectionContent} coursesSectionHeadingId={NITSrinagarCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITSrinagarCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITSrinagarCoursesDetailsConstants}
    //     admissionSectionContent={NITSrinagarCollegeAdmissionSectionContent} admissionSectionHeadingId={NITSrinagarCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITSrinagarCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITSrinagarCollegePlacementSectionContent} placementSectionHeadingId={NITSrinagarCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITSrinagarCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITSrinagarCollegeCutOffSectionContent} cutoffSectionHeadingId={NITSrinagarCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITSrinagarCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-allahabad",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Allahabad" 
    //     collegePageNavigationConstants={NITAllahabadCollegeNavigationConstants} 
    //     aboutSectionContent={NITAllahabadCollegeAboutSectionContent} aboutSectionHeadingId={NITAllahabadCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITAllahabadCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITAllahabadCollegeFeeSectionContent} feeSectionHeadingId={NITAllahabadCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITAllahabadCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITAllahabadCollegeCoursesSectionContent} coursesSectionHeadingId={NITAllahabadCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITAllahabadCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITAllahabadCoursesDetailsConstants}
    //     admissionSectionContent={NITAllahabadCollegeAdmissionSectionContent} admissionSectionHeadingId={NITAllahabadCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITAllahabadCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITAllahabadCollegePlacementSectionContent} placementSectionHeadingId={NITAllahabadCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITAllahabadCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITAllahabadCollegeCutOffSectionContent} cutoffSectionHeadingId={NITAllahabadCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITAllahabadCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // }, 
    // {
    //     path : "/college/nit/nit-surat",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Surat" 
    //     collegePageNavigationConstants={NITSuratCollegeNavigationConstants} 
    //     aboutSectionContent={NITSuratCollegeAboutSectionContent} aboutSectionHeadingId={NITSuratCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITSuratCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITSuratCollegeFeeSectionContent} feeSectionHeadingId={NITSuratCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITSuratCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITSuratCollegeCoursesSectionContent} coursesSectionHeadingId={NITSuratCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITSuratCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITSuratCoursesDetailsConstants}
    //     admissionSectionContent={NITSuratCollegeAdmissionSectionContent} admissionSectionHeadingId={NITSuratCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITSuratCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITSuratCollegePlacementSectionContent} placementSectionHeadingId={NITSuratCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITSuratCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITSuratCollegeCutOffSectionContent} cutoffSectionHeadingId={NITSuratCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITSuratCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-calicut",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Calicut" 
    //     collegePageNavigationConstants={NITCalicutCollegeNavigationConstants} 
    //     aboutSectionContent={NITCalicutCollegeAboutSectionContent} aboutSectionHeadingId={NITCalicutCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITCalicutCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITCalicutCollegeFeeSectionContent} feeSectionHeadingId={NITCalicutCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITCalicutCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITCalicutCollegeCoursesSectionContent} coursesSectionHeadingId={NITCalicutCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITCalicutCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITCalicutCoursesDetailsConstants}
    //     admissionSectionContent={NITCalicutCollegeAdmissionSectionContent} admissionSectionHeadingId={NITCalicutCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITCalicutCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITCalicutCollegePlacementSectionContent} placementSectionHeadingId={NITCalicutCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITCalicutCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITCalicutCollegeCutOffSectionContent} cutoffSectionHeadingId={NITCalicutCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITCalicutCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-rourkela",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Rourkela" 
    //     collegePageNavigationConstants={NITRourkelaCollegeNavigationConstants} 
    //     aboutSectionContent={NITRourkelaCollegeAboutSectionContent} aboutSectionHeadingId={NITRourkelaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITRourkelaCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITRourkelaCollegeFeeSectionContent} feeSectionHeadingId={NITRourkelaCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITRourkelaCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITRourkelaCollegeCoursesSectionContent} coursesSectionHeadingId={NITRourkelaCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITRourkelaCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITRourkelaCoursesDetailsConstants}
    //     admissionSectionContent={NITRourkelaCollegeAdmissionSectionContent} admissionSectionHeadingId={NITRourkelaCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITRourkelaCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITRourkelaCollegePlacementSectionContent} placementSectionHeadingId={NITRourkelaCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITRourkelaCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITRourkelaCollegeCutOffSectionContent} cutoffSectionHeadingId={NITRourkelaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITRourkelaCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-jaipur",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Jaipur" 
    //     collegePageNavigationConstants={NITJaipurCollegeNavigationConstants} 
    //     aboutSectionContent={NITJaipurCollegeAboutSectionContent} aboutSectionHeadingId={NITJaipurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITJaipurCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITJaipurCollegeFeeSectionContent} feeSectionHeadingId={NITJaipurCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITJaipurCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITJaipurCollegeCoursesSectionContent} coursesSectionHeadingId={NITJaipurCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITJaipurCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITJaipurCoursesDetailsConstants}
    //     admissionSectionContent={NITJaipurCollegeAdmissionSectionContent} admissionSectionHeadingId={NITJaipurCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITJaipurCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITJaipurCollegePlacementSectionContent} placementSectionHeadingId={NITJaipurCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITJaipurCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITJaipurCollegeCutOffSectionContent} cutoffSectionHeadingId={NITJaipurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITJaipurCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-kurukshetra",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Kurukshetra" 
    //     collegePageNavigationConstants={NITKurukshetraCollegeNavigationConstants} 
    //     aboutSectionContent={NITKurukshetraCollegeAboutSectionContent} aboutSectionHeadingId={NITKurukshetraCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITKurukshetraCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITKurukshetraCollegeFeeSectionContent} feeSectionHeadingId={NITKurukshetraCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITKurukshetraCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITKurukshetraCollegeCoursesSectionContent} coursesSectionHeadingId={NITKurukshetraCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITKurukshetraCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITKurukshetraCoursesDetailsConstants}
    //     admissionSectionContent={NITKurukshetraCollegeAdmissionSectionContent} admissionSectionHeadingId={NITKurukshetraCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITKurukshetraCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITKurukshetraCollegePlacementSectionContent} placementSectionHeadingId={NITKurukshetraCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITKurukshetraCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITKurukshetraCollegeCutOffSectionContent} cutoffSectionHeadingId={NITKurukshetraCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITKurukshetraCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // }, 
    // {
    //     path : "/college/nit/nit-tiruchirappalli",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Tiruchirappalli" 
    //     collegePageNavigationConstants={NITTiruchirappalliCollegeNavigationConstants} 
    //     aboutSectionContent={NITTiruchirappalliCollegeAboutSectionContent} aboutSectionHeadingId={NITTiruchirappalliCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITTiruchirappalliCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITTiruchirappalliCollegeFeeSectionContent} feeSectionHeadingId={NITTiruchirappalliCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITTiruchirappalliCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITTiruchirappalliCollegeCoursesSectionContent} coursesSectionHeadingId={NITTiruchirappalliCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITTiruchirappalliCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITTiruchirappalliCoursesDetailsConstants}
    //     admissionSectionContent={NITTiruchirappalliCollegeAdmissionSectionContent} admissionSectionHeadingId={NITTiruchirappalliCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITTiruchirappalliCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITTiruchirappalliCollegePlacementSectionContent} placementSectionHeadingId={NITTiruchirappalliCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITTiruchirappalliCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITTiruchirappalliCollegeCutOffSectionContent} cutoffSectionHeadingId={NITTiruchirappalliCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITTiruchirappalliCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-silchar",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Silchar" 
    //     collegePageNavigationConstants={NITSilcharCollegeNavigationConstants} 
    //     aboutSectionContent={NITSilcharCollegeAboutSectionContent} aboutSectionHeadingId={NITSilcharCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITSilcharCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITSilcharCollegeFeeSectionContent} feeSectionHeadingId={NITSilcharCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITSilcharCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITSilcharCollegeCoursesSectionContent} coursesSectionHeadingId={NITSilcharCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITSilcharCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITSilcharCoursesDetailsConstants}
    //     admissionSectionContent={NITSilcharCollegeAdmissionSectionContent} admissionSectionHeadingId={NITSilcharCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITSilcharCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITSilcharCollegePlacementSectionContent} placementSectionHeadingId={NITSilcharCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITSilcharCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITSilcharCollegeCutOffSectionContent} cutoffSectionHeadingId={NITSilcharCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITSilcharCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-hamirpur",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Hamirpur" 
    //     collegePageNavigationConstants={NITHamirpurCollegeNavigationConstants} 
    //     aboutSectionContent={NITHamirpurCollegeAboutSectionContent} aboutSectionHeadingId={NITHamirpurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITHamirpurCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITHamirpurCollegeFeeSectionContent} feeSectionHeadingId={NITHamirpurCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITHamirpurCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITHamirpurCollegeCoursesSectionContent} coursesSectionHeadingId={NITHamirpurCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITHamirpurCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITHamirpurCoursesDetailsConstants}
    //     admissionSectionContent={NITHamirpurCollegeAdmissionSectionContent} admissionSectionHeadingId={NITHamirpurCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITHamirpurCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITHamirpurCollegePlacementSectionContent} placementSectionHeadingId={NITHamirpurCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITHamirpurCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITHamirpurCollegeCutOffSectionContent} cutoffSectionHeadingId={NITHamirpurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITHamirpurCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-jalandhar",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Jalandhar" 
    //     collegePageNavigationConstants={NITJalandharCollegeNavigationConstants} 
    //     aboutSectionContent={NITJalandharCollegeAboutSectionContent} aboutSectionHeadingId={NITJalandharCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITJalandharCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITJalandharCollegeFeeSectionContent} feeSectionHeadingId={NITJalandharCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITJalandharCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITJalandharCollegeCoursesSectionContent} coursesSectionHeadingId={NITJalandharCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITJalandharCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITJalandharCoursesDetailsConstants}
    //     admissionSectionContent={NITJalandharCollegeAdmissionSectionContent} admissionSectionHeadingId={NITJalandharCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITJalandharCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITJalandharCollegePlacementSectionContent} placementSectionHeadingId={NITJalandharCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITJalandharCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITJalandharCollegeCutOffSectionContent} cutoffSectionHeadingId={NITJalandharCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITJalandharCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-patna",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Patna" 
    //     collegePageNavigationConstants={NITPatnaCollegeNavigationConstants} 
    //     aboutSectionContent={NITPatnaCollegeAboutSectionContent} aboutSectionHeadingId={NITPatnaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITPatnaCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITPatnaCollegeFeeSectionContent} feeSectionHeadingId={NITPatnaCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITPatnaCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITPatnaCollegeCoursesSectionContent} coursesSectionHeadingId={NITPatnaCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITPatnaCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITPatnaCoursesDetailsConstants}
    //     admissionSectionContent={NITPatnaCollegeAdmissionSectionContent} admissionSectionHeadingId={NITPatnaCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITPatnaCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITPatnaCollegePlacementSectionContent} placementSectionHeadingId={NITPatnaCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITPatnaCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITPatnaCollegeCutOffSectionContent} cutoffSectionHeadingId={NITPatnaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITPatnaCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-raipur",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Raipur" 
    //     collegePageNavigationConstants={NITRaipurCollegeNavigationConstants} 
    //     aboutSectionContent={NITRaipurCollegeAboutSectionContent} aboutSectionHeadingId={NITRaipurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITRaipurCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITRaipurCollegeFeeSectionContent} feeSectionHeadingId={NITRaipurCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITRaipurCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITRaipurCollegeCoursesSectionContent} coursesSectionHeadingId={NITRaipurCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITRaipurCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITRaipurCoursesDetailsConstants}
    //     admissionSectionContent={NITRaipurCollegeAdmissionSectionContent} admissionSectionHeadingId={NITRaipurCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITRaipurCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITRaipurCollegePlacementSectionContent} placementSectionHeadingId={NITRaipurCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITRaipurCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITRaipurCollegeCutOffSectionContent} cutoffSectionHeadingId={NITRaipurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITRaipurCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-agartala",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Agartala" 
    //     collegePageNavigationConstants={NITAgartalaCollegeNavigationConstants} 
    //     aboutSectionContent={NITAgartalaCollegeAboutSectionContent} aboutSectionHeadingId={NITAgartalaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITAgartalaCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITAgartalaCollegeFeeSectionContent} feeSectionHeadingId={NITAgartalaCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITAgartalaCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITAgartalaCollegeCoursesSectionContent} coursesSectionHeadingId={NITAgartalaCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITAgartalaCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITAgartalaCoursesDetailsConstants}
    //     admissionSectionContent={NITAgartalaCollegeAdmissionSectionContent} admissionSectionHeadingId={NITAgartalaCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITAgartalaCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITAgartalaCollegePlacementSectionContent} placementSectionHeadingId={NITAgartalaCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITAgartalaCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITAgartalaCollegeCutOffSectionContent} cutoffSectionHeadingId={NITAgartalaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITAgartalaCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-arunachal-pradesh",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Arunachal Pradesh" 
    //     collegePageNavigationConstants={NITArunachalPradeshCollegeNavigationConstants} 
    //     aboutSectionContent={NITArunachalPradeshCollegeAboutSectionContent} aboutSectionHeadingId={NITArunachalPradeshCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITArunachalPradeshCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITArunachalPradeshCollegeFeeSectionContent} feeSectionHeadingId={NITArunachalPradeshCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITArunachalPradeshCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITArunachalPradeshCollegeCoursesSectionContent} coursesSectionHeadingId={NITArunachalPradeshCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITArunachalPradeshCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITArunachalPradeshCoursesDetailsConstants}
    //     admissionSectionContent={NITArunachalPradeshCollegeAdmissionSectionContent} admissionSectionHeadingId={NITArunachalPradeshCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITArunachalPradeshCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITArunachalPradeshCollegePlacementSectionContent} placementSectionHeadingId={NITArunachalPradeshCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITArunachalPradeshCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITArunachalPradeshCollegeCutOffSectionContent} cutoffSectionHeadingId={NITArunachalPradeshCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITArunachalPradeshCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-delhi",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Delhi" 
    //     collegePageNavigationConstants={NITDelhiCollegeNavigationConstants} 
    //     aboutSectionContent={NITDelhiCollegeAboutSectionContent} aboutSectionHeadingId={NITDelhiCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITDelhiCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITDelhiCollegeFeeSectionContent} feeSectionHeadingId={NITDelhiCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITDelhiCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITDelhiCollegeCoursesSectionContent} coursesSectionHeadingId={NITDelhiCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITDelhiCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITDelhiCoursesDetailsConstants}
    //     admissionSectionContent={NITDelhiCollegeAdmissionSectionContent} admissionSectionHeadingId={NITDelhiCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITDelhiCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITDelhiCollegePlacementSectionContent} placementSectionHeadingId={NITDelhiCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITDelhiCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITDelhiCollegeCutOffSectionContent} cutoffSectionHeadingId={NITDelhiCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITDelhiCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-goa",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Goa" 
    //     collegePageNavigationConstants={NITGoaCollegeNavigationConstants} 
    //     aboutSectionContent={NITGoaCollegeAboutSectionContent} aboutSectionHeadingId={NITGoaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITGoaCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITGoaCollegeFeeSectionContent} feeSectionHeadingId={NITGoaCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITGoaCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITGoaCollegeCoursesSectionContent} coursesSectionHeadingId={NITGoaCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITGoaCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITGoaCoursesDetailsConstants}
    //     admissionSectionContent={NITGoaCollegeAdmissionSectionContent} admissionSectionHeadingId={NITGoaCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITGoaCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITGoaCollegePlacementSectionContent} placementSectionHeadingId={NITGoaCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITGoaCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITGoaCollegeCutOffSectionContent} cutoffSectionHeadingId={NITGoaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITGoaCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // }, 
    // {
    //     path : "/college/nit/nit-manipur",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Manipur" 
    //     collegePageNavigationConstants={NITManipurCollegeNavigationConstants} 
    //     aboutSectionContent={NITManipurCollegeAboutSectionContent} aboutSectionHeadingId={NITManipurCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITManipurCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITManipurCollegeFeeSectionContent} feeSectionHeadingId={NITManipurCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITManipurCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITManipurCollegeCoursesSectionContent} coursesSectionHeadingId={NITManipurCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITManipurCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITManipurCoursesDetailsConstants}
    //     admissionSectionContent={NITManipurCollegeAdmissionSectionContent} admissionSectionHeadingId={NITManipurCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITManipurCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITManipurCollegePlacementSectionContent} placementSectionHeadingId={NITManipurCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITManipurCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITManipurCollegeCutOffSectionContent} cutoffSectionHeadingId={NITManipurCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITManipurCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-meghalaya",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Meghalaya" 
    //     collegePageNavigationConstants={NITMeghalayaCollegeNavigationConstants} 
    //     aboutSectionContent={NITMeghalayaCollegeAboutSectionContent} aboutSectionHeadingId={NITMeghalayaCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITMeghalayaCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITMeghalayaCollegeFeeSectionContent} feeSectionHeadingId={NITMeghalayaCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITMeghalayaCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITMeghalayaCollegeCoursesSectionContent} coursesSectionHeadingId={NITMeghalayaCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITMeghalayaCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITMeghalayaCoursesDetailsConstants}
    //     admissionSectionContent={NITMeghalayaCollegeAdmissionSectionContent} admissionSectionHeadingId={NITMeghalayaCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITMeghalayaCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITMeghalayaCollegePlacementSectionContent} placementSectionHeadingId={NITMeghalayaCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITMeghalayaCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITMeghalayaCollegeCutOffSectionContent} cutoffSectionHeadingId={NITMeghalayaCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITMeghalayaCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-mizoram",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Mizoram" 
    //     collegePageNavigationConstants={NITMizoramCollegeNavigationConstants} 
    //     aboutSectionContent={NITMizoramCollegeAboutSectionContent} aboutSectionHeadingId={NITMizoramCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITMizoramCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITMizoramCollegeFeeSectionContent} feeSectionHeadingId={NITMizoramCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITMizoramCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITMizoramCollegeCoursesSectionContent} coursesSectionHeadingId={NITMizoramCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITMizoramCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITMizoramCoursesDetailsConstants}
    //     admissionSectionContent={NITMizoramCollegeAdmissionSectionContent} admissionSectionHeadingId={NITMizoramCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITMizoramCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITMizoramCollegePlacementSectionContent} placementSectionHeadingId={NITMizoramCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITMizoramCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITMizoramCollegeCutOffSectionContent} cutoffSectionHeadingId={NITMizoramCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITMizoramCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-nagaland",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Nagaland" 
    //     collegePageNavigationConstants={NITNagalandCollegeNavigationConstants} 
    //     aboutSectionContent={NITNagalandCollegeAboutSectionContent} aboutSectionHeadingId={NITNagalandCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITNagalandCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITNagalandCollegeFeeSectionContent} feeSectionHeadingId={NITNagalandCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITNagalandCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITNagalandCollegeCoursesSectionContent} coursesSectionHeadingId={NITNagalandCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITNagalandCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITNagalandCoursesDetailsConstants}
    //     admissionSectionContent={NITNagalandCollegeAdmissionSectionContent} admissionSectionHeadingId={NITNagalandCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITNagalandCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITNagalandCollegePlacementSectionContent} placementSectionHeadingId={NITNagalandCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITNagalandCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITNagalandCollegeCutOffSectionContent} cutoffSectionHeadingId={NITNagalandCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITNagalandCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-puducherry",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Puducherry" 
    //     collegePageNavigationConstants={NITPuducherryCollegeNavigationConstants} 
    //     aboutSectionContent={NITPuducherryCollegeAboutSectionContent} aboutSectionHeadingId={NITPuducherryCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITPuducherryCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITPuducherryCollegeFeeSectionContent} feeSectionHeadingId={NITPuducherryCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITPuducherryCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITPuducherryCollegeCoursesSectionContent} coursesSectionHeadingId={NITPuducherryCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITPuducherryCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITPuducherryCoursesDetailsConstants}
    //     admissionSectionContent={NITPuducherryCollegeAdmissionSectionContent} admissionSectionHeadingId={NITPuducherryCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITPuducherryCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITPuducherryCollegePlacementSectionContent} placementSectionHeadingId={NITPuducherryCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITPuducherryCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITPuducherryCollegeCutOffSectionContent} cutoffSectionHeadingId={NITPuducherryCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITPuducherryCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-sikkim",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Sikkim" 
    //     collegePageNavigationConstants={NITSikkimCollegeNavigationConstants} 
    //     aboutSectionContent={NITSikkimCollegeAboutSectionContent} aboutSectionHeadingId={NITSikkimCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITSikkimCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITSikkimCollegeFeeSectionContent} feeSectionHeadingId={NITSikkimCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITSikkimCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITSikkimCollegeCoursesSectionContent} coursesSectionHeadingId={NITSikkimCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITSikkimCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITSikkimCoursesDetailsConstants}
    //     admissionSectionContent={NITSikkimCollegeAdmissionSectionContent} admissionSectionHeadingId={NITSikkimCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITSikkimCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITSikkimCollegePlacementSectionContent} placementSectionHeadingId={NITSikkimCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITSikkimCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITSikkimCollegeCutOffSectionContent} cutoffSectionHeadingId={NITSikkimCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITSikkimCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-uttarakhand",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Uttarakhand" 
    //     collegePageNavigationConstants={NITUttarakhandCollegeNavigationConstants} 
    //     aboutSectionContent={NITUttarakhandCollegeAboutSectionContent} aboutSectionHeadingId={NITUttarakhandCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITUttarakhandCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITUttarakhandCollegeFeeSectionContent} feeSectionHeadingId={NITUttarakhandCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITUttarakhandCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITUttarakhandCollegeCoursesSectionContent} coursesSectionHeadingId={NITUttarakhandCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITUttarakhandCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITUttarakhandCoursesDetailsConstants}
    //     admissionSectionContent={NITUttarakhandCollegeAdmissionSectionContent} admissionSectionHeadingId={NITUttarakhandCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITUttarakhandCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITUttarakhandCollegePlacementSectionContent} placementSectionHeadingId={NITUttarakhandCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITUttarakhandCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITUttarakhandCollegeCutOffSectionContent} cutoffSectionHeadingId={NITUttarakhandCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITUttarakhandCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },
    // {
    //     path : "/college/nit/nit-andhra-pradesh",
    //     component : <NITGenericCollegePage collegeImage={IITBombayCollegeImage} collegeName="National Institute of Technology Andhra Pradesh" 
    //     collegePageNavigationConstants={NITAndhraPradeshCollegeNavigationConstants} 
    //     aboutSectionContent={NITAndhraPradeshCollegeAboutSectionContent} aboutSectionHeadingId={NITAndhraPradeshCollegeNavigationConstants[0].headingId} aboutSectionHeadingName={NITAndhraPradeshCollegeNavigationConstants[0].title} 
    //     feeSectionContent={NITAndhraPradeshCollegeFeeSectionContent} feeSectionHeadingId={NITAndhraPradeshCollegeNavigationConstants[1].headingId} feeSectionHeadingName={NITAndhraPradeshCollegeNavigationConstants[1].title}
    //     coursesSectionContent={NITAndhraPradeshCollegeCoursesSectionContent} coursesSectionHeadingId={NITAndhraPradeshCollegeNavigationConstants[5].headingId} coursesSectionHeadingName={NITAndhraPradeshCollegeNavigationConstants[5].title} collegeCourseDetailConstant={NITAndhraPradeshCoursesDetailsConstants}
    //     admissionSectionContent={NITAndhraPradeshCollegeAdmissionSectionContent} admissionSectionHeadingId={NITAndhraPradeshCollegeNavigationConstants[6].headingId} admissionSectionHeadingName={NITAndhraPradeshCollegeNavigationConstants[6].title}
    //     placementSectionContent={NITAndhraPradeshCollegePlacementSectionContent} placementSectionHeadingId={NITAndhraPradeshCollegeNavigationConstants[2].headingId} placementSectionHeadingName={NITAndhraPradeshCollegeNavigationConstants[2].title} collegePlacementDataConstant={[]}
    //     cutoffSectionContent={NITAndhraPradeshCollegeCutOffSectionContent} cutoffSectionHeadingId={NITAndhraPradeshCollegeNavigationConstants[7].headingId} cutoffSectionHeadingName={NITAndhraPradeshCollegeNavigationConstants[7].title}></NITGenericCollegePage>
    // },


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