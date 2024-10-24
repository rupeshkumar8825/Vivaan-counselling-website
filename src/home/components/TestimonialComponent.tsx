// this is component/section for showing the testimonial of the users 

const TestimonialComponent = () => {
    return (
        <div className="mt-20 flex flex-col flex-wrap items-center justify-center">
            <div className="mx-auto max-w-screen-sm">
                <h2 className="mb-4 text-center text-4xl tracking-tight font-extrabold text-white">Testimonials</h2>
                <p className="mb-8 text-center font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
            </div> 
            <div className="flex flex-wrap items-center justify-center">
                <TestimonialBoxComponent></TestimonialBoxComponent>
                <TestimonialBoxComponent></TestimonialBoxComponent>
                <TestimonialBoxComponent></TestimonialBoxComponent>
                <TestimonialBoxComponent></TestimonialBoxComponent>
                
            </div>
        </div>
    )
}


// Here comes the single component for the testimonial component
const TestimonialBoxComponent = () => {
    return (
        <div className="w-1/3 ml-10 mb-8 border border-gray-200 rounded-xl shadow-sm border-gray-700 md:mb-12 bg-gray-800">
            <figure className="flex flex-col items-center justify-center p-8 text-center  border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e bg-gray-800 border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-300 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-white">Very easy this was to integrate</h3>
                    <p className="my-4">If you care for your time, I hands down would go with this." 
                        And more texts just for testing purpose so that we can get the given values this
                         purpose. These are just random texts</p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                    <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
                        <div className="space-y-0.5 font-medium text-white text-left rtl:text-right ms-3">
                            <div>Bonnie Green</div>
                            <div className="text-sm text-gray-400 ">Developer at Open AI</div>
                        </div>
                </figcaption>
            </figure>
        </div>
    )
}



// say everything went fine 
export default TestimonialComponent