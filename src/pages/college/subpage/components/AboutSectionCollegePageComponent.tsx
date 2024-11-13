// this is the component to write the "About" section of the colleges 
import BlogSectionComponent from '../../../../components/blog/BlogSectionComponent';
import { IAboutSectionCollegePageComponent } from '../../../../interfaces/interfaces';

const AboutSectionCollegePageComponent = (props : IAboutSectionCollegePageComponent) => {
    return (
        <BlogSectionComponent headingId={props.headingId} headingName={props.headingName} content={props.content}></BlogSectionComponent>
        // <div id={props.headingId}>
        //     <h1>{props.headingName}</h1>
        //     <div>
        //         {props.content}
        //     </div>
        // </div>
    );
};

export default AboutSectionCollegePageComponent;