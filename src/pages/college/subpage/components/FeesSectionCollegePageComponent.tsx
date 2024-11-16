import BlogSectionComponent from '../../../../components/blog/BlogSectionComponent';
import TableContentComponent from '../../../../components/TableContentComponent';
import { IFeesSectionCollegePageComponent } from '../../../../interfaces/interfaces';

const FeesSectionCollegePageComponent = (props : IFeesSectionCollegePageComponent) => {
    return (
        <div>
            <BlogSectionComponent headingId={props.headingId} headingName={props.headingName} content={props.content}></BlogSectionComponent>
            <TableContentComponent></TableContentComponent>
            <BlogSectionComponent headingId='' headingName={props.headingName} content={props.content}></BlogSectionComponent>
        </div>
    );
};

export default FeesSectionCollegePageComponent;