import BlogSectionComponent from '../../../../components/blog/BlogSectionComponent';
import TableContentComponent from '../../../../components/TableContentComponent';
import { IFeesSectionCollegePageComponent } from '../../../../interfaces/interfaces';

const FeesSectionCollegePageComponent = (props : IFeesSectionCollegePageComponent) => {
    return (
        <div>
            <BlogSectionComponent headingId={props.headingId} headingName={props.headingName} content={props.content}></BlogSectionComponent>
            <TableContentComponent></TableContentComponent>
        </div>
    );
};

export default FeesSectionCollegePageComponent;