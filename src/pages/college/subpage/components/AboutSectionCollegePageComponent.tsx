// this is the component to write the "About" section of the colleges 
import { useEffect } from 'react';
import BlogSectionComponent from '../../../../components/blog/BlogSectionComponent';
import TableOfContentsComponent from '../../../../components/blog/TableOfContentsComponent';
import TableContentComponent from '../../../../components/TableContentComponent';
import { IAboutSectionCollegePageComponent } from '../../../../interfaces/interfaces';
import AboutSectionTableComponent from './tables/AboutSectionTableComponent';

const AboutSectionCollegePageComponent = (props : IAboutSectionCollegePageComponent) => {
    useEffect(() => {
        console.log("inside the about section college page component")
        console.log("the value of the props are ", props)
    })
    return (
        <>
        <div className=' border-2 border-slate-700 mt-4 pt-2'>
            <BlogSectionComponent headingId={props.headingId} headingName={props.headingName} content={props.content}></BlogSectionComponent>
            {/* currently the client requirement we just have to show only the table in this section and may be some text */}
            {/* <TableContentComponent></TableContentComponent> */}
            <AboutSectionTableComponent tableContentHeading={props.aboutSectionTableHeading} tableContent={props.aboutSectionTableContent}></AboutSectionTableComponent>

        </div>
        </>
        
        // <div id={props.headingId}>
        //     <h1>{props.headingName}</h1>
        //     <div>
        //         {props.content}
        //     </div>
        // </div>
    );
};

export default AboutSectionCollegePageComponent;