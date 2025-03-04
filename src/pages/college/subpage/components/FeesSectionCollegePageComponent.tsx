import BlogSectionComponent from '../../../../components/blog/BlogSectionComponent';
import { IFeesSectionCollegePageComponent } from '../../../../interfaces/interfaces';
import FeeSectionTableComponent from './tables/FeeSectionTableComponent';

const FeesSectionCollegePageComponent = (props : IFeesSectionCollegePageComponent) => {
    return (
        <div className='border-2 border-slate-700 mt-4 pt-2'>
            {/* below is some description about the section */}
            <BlogSectionComponent headingId={props.headingId} headingName={props.headingName} content={props.content}></BlogSectionComponent>

            {/* then comes the institute fee table here if applicable for this purpose*/}
            <FeeSectionTableComponent tableContentHeading={props.feeSectionInstituteFeeTableHeading} tableContent={props.feeSectionInstituteFeeTableContent}></FeeSectionTableComponent>
            {/* then comes the hotel fee table here if applicable for this purpose*/}
            <FeeSectionTableComponent tableContentHeading={props.feeSectionHostelFeeTableHeading? props.feeSectionHostelFeeTableHeading : []} tableContent={props.feeSectionHostelFeeTableContent? props.feeSectionHostelFeeTableContent : []}></FeeSectionTableComponent>

            {/* <feesection */}
            <BlogSectionComponent headingId='' headingName={props.headingName} content={props.content}></BlogSectionComponent>
        </div>
    );
};

export default FeesSectionCollegePageComponent;