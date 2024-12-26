import { IHeadingComponent } from "../interfaces/interfaces"

const HeadingComponent = (props: IHeadingComponent) => {
    return (
        <div className="pt-5 pl-5 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16 sm:pl-10 md:pl-12 lg:pl-14 xl:pt-16  ">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:6xl text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{props.headingName}</span> {props.headingSpanName}</h2>
        </div>
    )
}

export default HeadingComponent